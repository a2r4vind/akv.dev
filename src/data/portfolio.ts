export interface Profile {
  name: string;
  roleTitle: string;
  heroHeadline: string;
  bioSubtitle: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  location: string;
  education: string;
  bioParagraphs: string[];
  interests: { label: string; desc: string }[];
}

export interface Project {
  num: string;
  name: string;
  metric: string;
  badge: string;
  type: 'cv' | 'sec' | 'ml' | 'misc';
  github?: string;
  demo?: string;
  description: string;
  stack: string[];
}

export interface Experience {
  role: string;
  org: string;
  badge: string;
  badgeType: 'past' | 'present';
  accent: string;
  points: string[];
  chips: string[];
}

export interface Skill {
  name: string;
  icon: string;
  tone: 'accent' | 'default' | 'red' | 'green' | 'amber';
}

export interface SkillTab {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Publication {
  venue: string;
  title: string;
  body: string;
  tags: string[];
  link: string;
}

export interface Certification {
  issuer: string;
  name: string;
  link: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  timeAgo: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: string;
}

export const portfolioData: {
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  skillTabs: SkillTab[];
  publications: Publication[];
  certifications: Certification[];
  blogPosts: BlogPost[];
  tickerItems: string[];
} = {
  profile: {
    name: "Arvind Kumar Verma",
    roleTitle: "AIML Engineer · AI Research",
    heroHeadline: "Arvind Kumar Verma",
    bioSubtitle: "An AIML Engineer specializing in agentic systems, computer vision forensics, and machine learning solutions.",
    email: "arvind.kumar.verma@example.com",
    github: "https://github.com/rahul02-dat",
    linkedin: "https://www.linkedin.com/in/rahuldaga0211/",
    instagram: "https://instagram.com/_rahul.md04",
    location: "India",
    education: "B.Tech · 2026",
    bioParagraphs: [
      "I am an AIML engineer with a deep interest in AI and Machine Learning fields. My core philosophy: I think, I research, I build. I deliver real-world solutions, automated workflows, and measurable business outcomes.",
      "In my career of engineering, I have worked on RAG systems, Data Engineering, Development of Agentic systems and workflows, and learned failure mode debugging from deploying workflows to production."
    ],
    interests: [
      { label: "Coding", desc: "I Develop" },
      { label: "Music", desc: "I play with strings" },
      { label: "Gaming", desc: "I Play" },
      { label: "Gyming", desc: "I lift" },
      { label: "Binge Watching", desc: "I watch" }
    ]
  },
  projects: [
    {
      num: "001",
      name: "Forensic AI Image Detector",
      metric: "Real vs AI-generated · GradCAM",
      badge: "Computer Vision",
      type: "cv",
      github: "https://github.com/rahul02-dat/Image_Forensicsv2",
      description: "A dual-stream CNN classifying images as real photographs or AI-generated, trained on the GenImage benchmark dataset. It uses an EfficientNet-B4 spatial stream to process RGB patterns alongside a parallel Patch-DCT frequency stream that analyzes frequency-domain artifacts. A GradCAM heatmap is overlaid on input images to highlight the exact spatial regions that triggered the AI-generated verdict, all wrapped in a Dockerized FastAPI backend deployable to Hugging Face Spaces.",
      stack: ["Python", "EfficientNet-B4", "GradCAM", "FastAPI", "PyTorch", "Docker"]
    },
    {
      num: "002",
      name: "Containerized Security Evaluation and Threat Modeling",
      metric: "secp256k1 · Lattice Reduction",
      badge: "Cryptanalysis",
      type: "sec",
      github: "https://github.com/rahul02-dat/cryptography",
      description: "A security cryptanalysis pipeline for recovering a 256-bit ECDSA private key over the secp256k1 elliptic curve from biased nonces. The system casts signature equations into instances of the Hidden Number Problem (HNP) and solves them via lattice reduction, effectively modeling side-channel and firmware leak scenarios where nonce generators leak partial bits per signature.",
      stack: ["Python", "Cryptography", "Lattice Reduction", "Cryptanalysis", "ECDSA"]
    },
    {
      num: "003",
      name: "Transformer Training and Gradient Optimization Infrastructure",
      metric: "AMP Scaler · Distributed",
      badge: "MLOps",
      type: "ml",
      github: "https://github.com/rahul02-dat/ML-Infrastructures",
      description: "A benchmarking harness developed to diagnose and fix subtle gradient accumulation defects that corrupt mixed-precision training dynamics. It focuses on resolving issues with PyTorch's torch.amp.GradScaler and torch.autocast when scaling across micro-batches, optimizing modern distributed pipelines to prevent silent corruption when simulating large batch sizes on constrained memory.",
      stack: ["Python", "PyTorch AMP", "Distributed Training", "MLOps", "CUDA"]
    },
    {
      num: "004",
      name: "DataPrepX — AI Data Handler",
      metric: "90% accuracy · Auto ETL",
      badge: "ML Pipeline",
      type: "ml",
      github: "https://github.com/rahul02-dat/Data-PrepX-v1.2",
      description: "An AI-assisted preprocessing engine that automatically detects data quality issues (missing values, inconsistent types, outliers) using intelligent heuristic analysis. It recommends operations via modular YAML/JSON configurations and features adaptive model selection across 7 regression and classification models, reducing manual data preparation time by 70% with an interactive Streamlit UI for real-time visualization.",
      stack: ["Python", "Golang", "ReactJS", "PyTorch", "Streamlit"]
    },
    {
      num: "005",
      name: "Multi-Agent Cybersecurity Framework",
      metric: "LangGraph · Local LLMs",
      badge: "Cybersecurity",
      type: "sec",
      github: "https://github.com/rahul02-dat/Multi_Agent_Cybersecurity_Framework",
      description: "An air-gapped, multi-agent Intrusion Prevention System (IPS) leveraging local LLMs and Retrieval-Augmented Generation (RAG). It uses a heuristic Watchdog to filter traffic, routing anomalies to a LangGraph-orchestrated AI swarm where an Analyst agent proposes threats, a Critic acts as a Red Team, and a Judge arbitrates to deploy active firewall mitigations, all grounded by a ChromaDB threat intelligence vector store.",
      stack: ["Python", "LangGraph", "Ollama", "ChromaDB", "LLMs", "RAG"]
    },
    {
      num: "006",
      name: "ASCII Camera — Real-Time Renderer",
      metric: "30 FPS · Multi-threaded",
      badge: "Creative CV",
      type: "misc",
      github: "https://github.com/rahul02-dat/ASCII_Camera",
      description: "A real-time webcam-to-ASCII art renderer running at up to 30 FPS in a dedicated Tkinter GUI window. The application uses a multi-threaded background CaptureThread to read frames and maps pixels to ASCII via a vectorized NumPy lookup table. It features six selectable character palettes switchable on the fly, alongside a full CLI with adjustable columns, target FPS, and live keyboard shortcuts.",
      stack: ["Python", "OpenCV", "NumPy", "Tkinter", "Multithreading"]
    }
  ],
  experiences: [
    {
      role: "AI Research Intern",
      org: "ISRO — Indian Space Research Organisation",
      badge: "Feb – Aug 2026",
      badgeType: "past",
      accent: "isro",
      points: [
        "At ISRO, I was a part of the Atmospheric Sciences Division at Indian Space Research Organization - Space Application Centre (SAC).",
        "Conducted research on existing satellite data retrieval methods and proposed an automated AI/ML architecture to directly retrieve atmospheric parameters using INSAT-3DS satellite data.",
        "Designed and trained an ensemble of machine learning regressors coupled with a custom deep neural network, achieving autonomous parameter retrieval with an R² score of 98.73% on real satellite feeds."
      ],
      chips: ["Python", "TensorFlow", "NetCDF / HDF5", "NumPy / SciPy", "Satellite Remote Sensing", "Atmospheric Science"]
    },
    {
      role: "AI and Machine Learning Engineer",
      org: "Archsoft · Raipur, Chhattisgarh",
      badge: "Jun – Sep 2025",
      badgeType: "past",
      accent: "archsoft",
      points: [
        "Spearheaded development of a production-ready image forensics web application to identify synthetic deepfakes, spliced images, and verify cryptographic metadata integrity.",
        "Engineered a GradCAM explanation layer fusing spatial EfficientNet-B4 features and DCT frequency coefficients, generating visual heatmaps mapping forensic anomalies with an ROC-AUC score of 93.85%."
      ],
      chips: ["Python", "FastAPI", "SHA-256 Hashing", "EXIF Analysis", "Computer Vision", "Docker"]
    }
  ],
  skillTabs: [
    {
      id: "dev",
      label: "Development",
      skills: [
        { name: "Python", icon: "python", tone: "accent" },
        { name: "JavaScript / TS", icon: "javascript", tone: "accent" },
        { name: "Golang", icon: "go", tone: "default" },
        { name: "ReactJS", icon: "react", tone: "default" },
        { name: "Next.js", icon: "nextdotjs", tone: "default" },
        { name: "Node.js", icon: "nodedotjs", tone: "default" },
        { name: "Django", icon: "django", tone: "default" },
        { name: "FastAPI", icon: "fastapi", tone: "accent" },
        { name: "Flask", icon: "flask", tone: "default" },
        { name: "GraphQL", icon: "graphql", tone: "default" },
        { name: "TailwindCSS", icon: "tailwindcss", tone: "default" }
      ]
    },
    {
      id: "databases",
      label: "Databases",
      skills: [
        { name: "SQL", icon: "mysql", tone: "default" },
        { name: "PostgreSQL", icon: "postgresql", tone: "default" },
        { name: "MongoDB", icon: "mongodb", tone: "default" },
        { name: "Redis", icon: "redis", tone: "default" },
        { name: "Supabase", icon: "supabase", tone: "default" },
        { name: "ChromaDB", icon: "database", tone: "accent" }
      ]
    },
    {
      id: "ml",
      label: "AI / ML",
      skills: [
        { name: "PyTorch", icon: "pytorch", tone: "accent" },
        { name: "TensorFlow", icon: "tensorflow", tone: "accent" },
        { name: "Scikit-Learn", icon: "scikitlearn", tone: "default" },
        { name: "OpenCV", icon: "opencv", tone: "default" },
        { name: "EfficientNet", icon: "keras", tone: "default" },
        { name: "NumPy & Pandas", icon: "pandas", tone: "accent" },
        { name: "Ollama", icon: "ollama", tone: "default" },
        { name: "AI Forensics", icon: "huggingface", tone: "red" }
      ]
    },
    {
      id: "tools",
      label: "Tools & Cloud",
      skills: [
        { name: "Git / GitHub", icon: "github", tone: "accent" },
        { name: "Docker", icon: "docker", tone: "default" },
        { name: "Kubernetes", icon: "kubernetes", tone: "default" },
        { name: "Google Cloud", icon: "googlecloud", tone: "default" },
        { name: "Linux", icon: "linux", tone: "default" },
        { name: "Unix / macOS", icon: "apple", tone: "default" },
        { name: "Streamlit", icon: "streamlit", tone: "default" },
        { name: "Jupyter", icon: "jupyter", tone: "default" },
        { name: "Raspberry Pi", icon: "raspberrypi", tone: "default" },
        { name: "NetCDF / HDF5", icon: "scipy", tone: "default" },
        { name: "GitLab CI", icon: "gitlab", tone: "default" }
      ]
    }
  ],
  publications: [
    {
      venue: "IEEE ICESCI 2025 · Peer-Reviewed Conference Paper",
      title: "Securing Automotive Using Iris Recognition",
      body: "Presents an end-to-end iris biometric authentication system designed for automotive security, implemented on Raspberry Pi hardware. The pipeline covers iris capture, segmentation, feature extraction, and KNN-based classification — achieving 2.5–3.5 second recognition and unlock speeds. Demonstrates feasibility of embedded biometric security for vehicle access control without cloud dependency.",
      tags: ["Biometrics", "Computer Vision", "KNN", "Raspberry Pi", "Automotive Security"],
      link: "https://ieeexplore.ieee.org/document/10988056"
    },
    {
      venue: "GRENZE International Journal of Engineering and Technology · 2025",
      title: "Online Vocal Interviewer: based on AI for Candidate Response Analysis and Evaluation",
      body: "This paper presents an implementation of an AI-powered Voice-Based interviewer. It includes dynamic generation of interview questions from a given job profile description, conversational interaction in real time, and a scoring system via Sentiment Analysis based on structural coherence and content relevance. A web dashboard aggregates scoring and statistics with a summary of the whole interview. The core tech stack used is Next.js, Supabase, and Retell AI.",
      tags: ["Voice AI", "Next.js", "Supabase", "Retell AI", "LangChain", "OpenAI"],
      link: "https://drive.google.com/file/d/1a-KH-cm5O2PHuekEGZmbp6MbnDnAKuIP/view?usp=sharing"
    }
  ],
  certifications: [
    {
      issuer: "Anthropic",
      name: "AI Fluency: Framework & Foundations",
      link: "https://verify.skilljar.com/c/kwmkrz9vnqpn"
    },
    {
      issuer: "Anthropic",
      name: "Claude 101",
      link: "https://verify.skilljar.com/c/isvw4jzh6y9u"
    },
    {
      issuer: "IBM",
      name: "Python for Data Science, AI and Development",
      link: "https://www.coursera.org/account/accomplishments/verify/E1CW7GW90Q6F"
    },
    {
      issuer: "IBM",
      name: "Developing AI Applications with Python and Flask",
      link: "https://www.coursera.org/account/accomplishments/verify/RUIAC1GBYEF4"
    },
    {
      issuer: "Microsoft",
      name: "Career Essentials in Generative AI",
      link: "https://www.linkedin.com/learning/certificates/3e856ffcdca7ade49feef6754d738f4c6e907cdf563b78db840929a0724b4160"
    },
    {
      issuer: "Microsoft",
      name: "Azure AI Essentials",
      link: "https://www.linkedin.com/learning/certificates/908a274f54dce90e75f8980d8117e15b16e5d52178a9fcc6d6357a9841e0b3e1"
    }
  ],
  blogPosts: [
    {
      slug: "4d-framework-for-ai-fluency",
      title: "The 4D Framework for AI Fluency",
      date: "2026-02-01",
      timeAgo: "1 Month Ago",
      readTime: "4 min read",
      summary: "Most people think AI fluency = writing better prompts. It doesn't. Here is the 4D framework that separates users from experts.",
      tags: ["AI", "Fluency", "Prompting", "Framework"],
      content: `
# The 4D Framework for AI Fluency

Most people think AI fluency simply means writing better prompts. It doesn't. 
Prompt engineering is merely syntax; true AI fluency is a mental model for cognitive delegation and computational synthesis.

## 1. Deconstruction (Problem Modeling)
Before touching any prompt input, expert AI engineers break down monolithic problems into atomic tasks that fit within context windows and deterministic evaluation loops.

- Identify cognitive bottlenecks
- Isolate deterministic vs generative steps
- Map dependencies and state transitions

## 2. Direction (Context & Constraint Architecture)
Providing rich, unambiguous context along with strict negative constraints guarantees model alignment.

- Specify schema formats (JSON, Zod, Protobuf)
- Provide few-shot exemplar demonstrations
- Enforce strict negative boundaries ("Do NOT hallucinate missing fields")

## 3. Dynamic Iteration (Feedback Loops)
Static prompts always degrade under edge cases. Building automated evaluation loops and multi-agent reflection turns fragile prototypes into resilient production systems.

## 4. Deployment (System Integration)
Integrating LLMs into existing microservices with caching, semantic routing, and graceful fallbacks.
      `
    }
  ],
  tickerItems: [
    "MACHINE LEARNING",
    "DEEP LEARNING",
    "COMPUTER VISION",
    "AGENTIC AI",
    "CRYPTANALYSIS",
    "PYTORCH",
    "FASTAPI",
    "SATELLITE REMOTE SENSING",
    "DISTRIBUTED TRAINING",
    "ISRO SAC"
  ]
};
