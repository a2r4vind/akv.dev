'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

export type Background3DMode = 'starfield' | 'neural' | 'wave' | 'crystals';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Background3DMode>('starfield');
  const [panelOpen, setPanelOpen] = useState(false);
  const { theme } = useTheme();

  // Load saved preference
  useEffect(() => {
    const saved = window.localStorage.getItem('3d-bg-mode') as Background3DMode;
    if (saved) setMode(saved);
  }, []);

  const changeMode = (newMode: Background3DMode) => {
    setMode(newMode);
    window.localStorage.setItem('3d-bg-mode', newMode);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean previous canvases if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Set up Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // fully transparent background
    container.appendChild(renderer.domElement);

    // Mouse coordinates tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - window.innerWidth / 2) * 0.9;
      mouse.targetY = (e.clientY - window.innerHeight / 2) * 0.9;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic objects root group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    let cleanupCurrentMode: () => void = () => {};

    // Theme colors
    const isDark = theme === 'dark';
    const primaryColor = isDark ? 0x3b82f6 : 0x2563eb;
    const secondaryColor = isDark ? 0x38bdf8 : 0x0284c7;
    const brightColor = isDark ? 0x93c5fd : 0x1d4ed8;

    // ==========================================
    // MODE 1: 3D DEEP SPACE STARFIELD & ORBIT
    // ==========================================
    if (mode === 'starfield') {
      const count = 1400;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count);
      const colors = new Float32Array(count * 3);

      const colorPalette = [
        new THREE.Color(0x38bdf8), // Cyan
        new THREE.Color(0x60a5fa), // Light Blue
        new THREE.Color(0x3b82f6), // Vibrant Blue
        new THREE.Color(0xffffff), // Bright White
        new THREE.Color(0xfef08a), // Subtle warm yellow
      ];

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2200;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
        positions[i * 3 + 2] = Math.random() * 1600 - 800;

        velocities[i] = Math.random() * 0.9 + 0.3;

        const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Circular glowing star sprite texture
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.25, 'rgba(96, 165, 250, 0.9)');
        grad.addColorStop(0.6, 'rgba(59, 130, 246, 0.4)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      const starTexture = new THREE.CanvasTexture(canvas);

      const material = new THREE.PointsMaterial({
        size: 14,
        map: starTexture,
        transparent: true,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: isDark ? 0.95 : 0.8,
        sizeAttenuation: true,
      });

      const stars = new THREE.Points(geometry, material);
      rootGroup.add(stars);

      const updateStarfield = () => {
        const pos = geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
          pos[i * 3 + 2] += velocities[i];
          if (pos[i * 3 + 2] > 700) {
            pos[i * 3 + 2] = -900;
          }

          // Mouse gravitational deflection
          const dx = mouse.x * 2.2 - pos[i * 3];
          const dy = -mouse.y * 2.2 - pos[i * 3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 260 && dist > 0) {
            const force = (260 - dist) / 260;
            pos[i * 3] -= (dx / dist) * force * 3.2;
            pos[i * 3 + 1] -= (dy / dist) * force * 3.2;
          }
        }
        geometry.attributes.position.needsUpdate = true;
      };

      cleanupCurrentMode = () => {
        geometry.dispose();
        material.dispose();
        starTexture.dispose();
        rootGroup.remove(stars);
      };

      (rootGroup as any).customUpdate = updateStarfield;
    }

    // ==========================================
    // MODE 2: 3D NEURAL SYNAPSE CONSTELLATION
    // ==========================================
    else if (mode === 'neural') {
      const nodeCount = 95;
      const nodes: { pos: THREE.Vector3; vel: THREE.Vector3 }[] = [];
      const nodeGeom = new THREE.SphereGeometry(3.5, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.95,
      });

      const nodeGroup = new THREE.Group();
      rootGroup.add(nodeGroup);

      const sphereRadius = 340;
      for (let i = 0; i < nodeCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        const pos = new THREE.Vector3(
          sphereRadius * Math.cos(theta) * Math.sin(phi),
          sphereRadius * Math.sin(theta) * Math.sin(phi),
          sphereRadius * Math.cos(phi)
        );
        const vel = new THREE.Vector3(
          (Math.random() - 0.5) * 0.45,
          (Math.random() - 0.5) * 0.45,
          (Math.random() - 0.5) * 0.45
        );
        nodes.push({ pos, vel });

        const mesh = new THREE.Mesh(nodeGeom, nodeMat);
        mesh.position.copy(pos);
        nodeGroup.add(mesh);
      }

      // Dynamic line segments
      const maxLines = (nodeCount * (nodeCount - 1)) / 2;
      const linePositions = new Float32Array(maxLines * 6);
      const lineColors = new Float32Array(maxLines * 6);
      const lineGeom = new THREE.BufferGeometry();
      lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeom.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });

      const lineMesh = new THREE.LineSegments(lineGeom, lineMat);
      rootGroup.add(lineMesh);

      const updateNeural = () => {
        nodeGroup.rotation.y += 0.002;
        nodeGroup.rotation.x += 0.001;

        let lineIdx = 0;
        const linePos = lineGeom.attributes.position.array as Float32Array;
        const lineCol = lineGeom.attributes.color.array as Float32Array;
        const maxDist = 145;

        for (let i = 0; i < nodeCount; i++) {
          const n1 = nodes[i];
          n1.pos.add(n1.vel);
          if (n1.pos.length() > sphereRadius + 50 || n1.pos.length() < sphereRadius - 50) {
            n1.vel.negate();
          }
          (nodeGroup.children[i] as THREE.Mesh).position.copy(n1.pos);

          for (let j = i + 1; j < nodeCount; j++) {
            const n2 = nodes[j];
            const dist = n1.pos.distanceTo(n2.pos);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist);
              linePos[lineIdx * 6] = n1.pos.x;
              linePos[lineIdx * 6 + 1] = n1.pos.y;
              linePos[lineIdx * 6 + 2] = n1.pos.z;
              linePos[lineIdx * 6 + 3] = n2.pos.x;
              linePos[lineIdx * 6 + 4] = n2.pos.y;
              linePos[lineIdx * 6 + 5] = n2.pos.z;

              const r = 0.22, g = 0.74, b = 0.97;
              lineCol[lineIdx * 6] = r * alpha;
              lineCol[lineIdx * 6 + 1] = g * alpha;
              lineCol[lineIdx * 6 + 2] = b * alpha;
              lineCol[lineIdx * 6 + 3] = r * alpha;
              lineCol[lineIdx * 6 + 4] = g * alpha;
              lineCol[lineIdx * 6 + 5] = b * alpha;

              lineIdx++;
            }
          }
        }

        lineGeom.setDrawRange(0, lineIdx * 2);
        lineGeom.attributes.position.needsUpdate = true;
        lineGeom.attributes.color.needsUpdate = true;
      };

      cleanupCurrentMode = () => {
        nodeGeom.dispose();
        nodeMat.dispose();
        lineGeom.dispose();
        lineMat.dispose();
        rootGroup.remove(nodeGroup);
        rootGroup.remove(lineMesh);
      };

      (rootGroup as any).customUpdate = updateNeural;
    }

    // ==========================================
    // MODE 3: 3D CYBERNETIC DATA WAVE MESH
    // ==========================================
    else if (mode === 'wave') {
      const planeWidth = 1500;
      const planeHeight = 1000;
      const widthSegments = 70;
      const heightSegments = 45;

      const geometry = new THREE.PlaneGeometry(
        planeWidth,
        planeHeight,
        widthSegments,
        heightSegments
      );

      const material = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.55 : 0.4,
        blending: THREE.AdditiveBlending,
      });

      const waveMesh = new THREE.Mesh(geometry, material);
      waveMesh.rotation.x = -Math.PI / 2.6;
      waveMesh.position.y = -160;
      waveMesh.position.z = 100;
      rootGroup.add(waveMesh);

      const count = geometry.attributes.position.count;
      let time = 0;

      const updateWave = () => {
        time += 0.025;
        const pos = geometry.attributes.position;

        for (let i = 0; i < count; i++) {
          const x = pos.getX(i);
          const y = pos.getY(i);

          const dMouse = Math.sqrt(
            Math.pow(x - mouse.x * 2.2, 2) + Math.pow(y - mouse.y * 2.2, 2)
          );
          const ripple = Math.sin(dMouse * 0.035 - time * 2.5) * Math.max(0, 45 - dMouse * 0.09);

          const z =
            Math.sin(x * 0.015 + time) * 28 +
            Math.cos(y * 0.018 + time * 1.5) * 22 +
            ripple;

          pos.setZ(i, z);
        }
        pos.needsUpdate = true;
      };

      cleanupCurrentMode = () => {
        geometry.dispose();
        material.dispose();
        rootGroup.remove(waveMesh);
      };

      (rootGroup as any).customUpdate = updateWave;
    }

    // ==========================================
    // MODE 4: 3D FLOATING POLYHEDRAL CRYSTALS
    // ==========================================
    else if (mode === 'crystals') {
      const crystalsGroup = new THREE.Group();
      rootGroup.add(crystalsGroup);

      const crystalObjects: {
        mesh: THREE.Mesh;
        rotSpeed: THREE.Vector3;
        initialPos: THREE.Vector3;
      }[] = [];

      const crystalCount = 16;
      const geometries = [
        new THREE.IcosahedronGeometry(28, 0),
        new THREE.OctahedronGeometry(25, 0),
        new THREE.TetrahedronGeometry(30, 0),
        new THREE.DodecahedronGeometry(24, 0),
      ];

      for (let i = 0; i < crystalCount; i++) {
        const geom = geometries[i % geometries.length];
        const mat = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x38bdf8 : 0x60a5fa,
          wireframe: true,
          transparent: true,
          opacity: 0.85,
        });

        const mesh = new THREE.Mesh(geom, mat);
        const pos = new THREE.Vector3(
          (Math.random() - 0.5) * 1100,
          (Math.random() - 0.5) * 750,
          (Math.random() - 0.5) * 450
        );
        mesh.position.copy(pos);

        const rotSpeed = new THREE.Vector3(
          (Math.random() - 0.5) * 0.025,
          (Math.random() - 0.5) * 0.025,
          (Math.random() - 0.5) * 0.025
        );

        crystalsGroup.add(mesh);
        crystalObjects.push({ mesh, rotSpeed, initialPos: pos.clone() });
      }

      // Floating dust particles
      const dustGeom = new THREE.BufferGeometry();
      const dustCount = 500;
      const dustPos = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount * 3; i += 3) {
        dustPos[i] = (Math.random() - 0.5) * 1800;
        dustPos[i + 1] = (Math.random() - 0.5) * 1300;
        dustPos[i + 2] = (Math.random() - 0.5) * 800;
      }
      dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
      const dustMat = new THREE.PointsMaterial({
        size: 3.5,
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.7,
      });
      const dust = new THREE.Points(dustGeom, dustMat);
      rootGroup.add(dust);

      const updateCrystals = () => {
        dust.rotation.y += 0.0006;

        crystalObjects.forEach(({ mesh, rotSpeed, initialPos }) => {
          mesh.rotation.x += rotSpeed.x;
          mesh.rotation.y += rotSpeed.y;
          mesh.rotation.z += rotSpeed.z;

          // Mouse repulsion force
          const dx = mesh.position.x - mouse.x * 1.6;
          const dy = mesh.position.y - (-mouse.y * 1.6);
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 280 && dist > 0) {
            const force = (280 - dist) / 280;
            mesh.position.x += (dx / dist) * force * 6;
            mesh.position.y += (dy / dist) * force * 6;
          } else {
            mesh.position.lerp(initialPos, 0.02);
          }
        });
      };

      cleanupCurrentMode = () => {
        geometries.forEach((g) => g.dispose());
        dustGeom.dispose();
        dustMat.dispose();
        rootGroup.remove(crystalsGroup);
        rootGroup.remove(dust);
      };

      (rootGroup as any).customUpdate = updateCrystals;
    }

    // ==========================================
    // ANIMATION & CAMERA LOOP
    // ==========================================
    let animId: number;
    const animate = () => {
      // Smooth camera parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 0.45;
      camera.position.y = -mouse.y * 0.45;
      camera.lookAt(scene.position);

      if ((rootGroup as any).customUpdate) {
        (rootGroup as any).customUpdate();
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      cleanupCurrentMode();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mode, theme]);

  const modesList: { id: Background3DMode; name: string; icon: string }[] = [
    { id: 'starfield', name: '3D Starfield', icon: '🌌' },
    { id: 'neural', name: 'Neural Mesh', icon: '🧠' },
    { id: 'wave', name: 'Cyber Wave', icon: '🌊' },
    { id: 'crystals', name: '3D Crystals', icon: '💎' },
  ];

  return (
    <>
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      {/* Floating 3D Mode Switcher (Interactive Preview Bar) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
        {panelOpen && (
          <div className="bg-[var(--s1)]/95 backdrop-blur-xl border border-[var(--border)] rounded-md p-3 shadow-2xl flex flex-col gap-1.5 animate-stack-up mb-1">
            <p className="font-mono text-[0.62rem] uppercase tracking-wider text-[var(--accent)] mb-1 px-1">
              Select 3D Background:
            </p>
            {modesList.map((m) => (
              <button
                key={m.id}
                onClick={() => changeMode(m.id)}
                className={`font-mono text-[0.7rem] uppercase tracking-wider px-3 py-2 rounded-sm border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  mode === m.id
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] font-semibold shadow-sm'
                    : 'bg-[var(--s2)] text-[var(--dim)] border-[var(--border)] hover:border-[var(--border-hi)] hover:text-[var(--text)]'
                }`}
              >
                <span>{m.icon}</span>
                <span>{m.name}</span>
                {mode === m.id && <span className="ml-auto text-xs">✓</span>}
              </button>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setPanelOpen(!panelOpen)}
          aria-label="Toggle 3D Background Selector"
          className="font-mono text-[0.68rem] tracking-[0.12em] uppercase px-3.5 py-2 rounded-full border border-[var(--border)] bg-[var(--s1)]/90 backdrop-blur-md text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-lg flex items-center gap-2 cursor-pointer hover-glow-breathe"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>3D FX: {modesList.find((m) => m.id === mode)?.name}</span>
        </button>
      </div>
    </>
  );
}
