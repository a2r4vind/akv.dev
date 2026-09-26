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
    email: "arvindverma24004@gmail.com",
    github: "https://github.com/a2r4vind",
    linkedin: "https://www.linkedin.com/in/rahuldaga0211/",
    instagram: "https://instagram.com/_rahul.md04",
    location: "Ahmedabad, Gujarat, India",
    education: "New L.J. Institute of Engineering & Technology, Ahmedabad · B.E. (AI/ML) 2022–2026 (CPI: 9.54 | CGPA: 9.52)",
    bioParagraphs: [
      "I am an AI/ML Engineer with hands-on experience building and deploying machine learning, computer vision, and full-stack software applications. My core philosophy: I think, I research, I build.",
      "From engineering local-first desktop applications for satellite ocean data at ISRO Space Applications Centre to deploying production-ready computer vision pipelines and ML models, I focus on building reliable end-to-end intelligent systems."
    ],
    interests: [
      { label: "Coding", desc: "I Develop" },
      { label: "Music", desc: "I listen" },
      { label: "Sports", desc: "I Play" },
      { label: "Gyming", desc: "I lift" },
      { label: "Binge Watching", desc: "I watch" }
    ]
  },
  projects: [
    {
      num: "001",
      name: "Waste Image Classification System",
      metric: "91% Test Accuracy · ResNet Transfer Learning",
      badge: "Computer Vision",
      type: "cv",
      github: "https://github.com/a2r4vind",
      description: "An end-to-end AI-based waste image classification system using deep learning and computer vision to automatically classify waste materials (glass, metal, paper, plastic) for efficient segregation. Implemented transfer learning with ResNet architectures with differential learning rates, achieving ~91% test accuracy. Built complete ML pipeline and deployed a containerized Streamlit app via Docker.",
      stack: ["Python", "PyTorch", "ResNet", "Computer Vision", "Docker", "Streamlit"]
    },
    {
      num: "002",
      name: "OC-ECV Local Engine (ISRO SAC)",
      metric: "55x Query Speedup · 6 Missions Validated",
      badge: "Geospatial Software",
      type: "ml",
      github: "https://github.com/a2r4vind",
      description: "A local-first desktop application for ingesting, processing, and visualizing Ocean Color and Essential Climate Variable satellite data across 6 missions (MODIS-Aqua, SMAP, CCMP, SWOT, Oceansat-3). Features local caching layer delivering ~55x speedup on repeated queries with roadmap deep learning modules for automated algal-bloom detection.",
      stack: ["Tauri", "React", "TypeScript", "Python", "FastAPI", "xarray", "GDAL", "rasterio"]
    },
    {
      num: "003",
      name: "Crop Disease Classification",
      metric: "5-Class Balanced · Custom CNN + ResNet-50",
      badge: "Deep Learning",
      type: "cv",
      github: "https://github.com/a2r4vind",
      description: "Balanced an imbalanced 5-class cassava disease dataset (healthy, mosaic disease, brown streak disease, green mottle, bacterial blight) via normalization and undersampling. Built custom CNN with 6 convolution + max pooling layers and resolved overfitting using ResNet-50 transfer learning, learning rate scheduling, and early stopping callbacks.",
      stack: ["Python", "PyTorch", "ResNet-50", "Scikit-Learn", "Jupyter Notebook"]
    },
    {
      num: "004",
      name: "Wildlife Conservation in Côte d'Ivoire",
      metric: "8 Species Multi-Class Classifier",
      badge: "Computer Vision",
      type: "cv",
      github: "https://github.com/a2r4vind",
      description: "Built a CNN-based multiclass classifier to categorize camera-trap animal images into 8 species classes (antelope duiker, bird, blank, civet genet, hog, leopard, monkey prosimian, rodent), achieving strong classification accuracy to support automated wildlife monitoring and ecological protection efforts.",
      stack: ["Python", "PyTorch", "Scikit-Learn", "CNN", "Jupyter Notebook"]
    },
    {
      num: "005",
      name: "Insurance Premium Category Prediction",
      metric: "97% Test Accuracy · Random Forest",
      badge: "ML & API",
      type: "ml",
      github: "https://github.com/a2r4vind",
      description: "Built a Random Forest classifier predicting insurance premium categories (High / Medium / Low) with 97% accuracy on the test set. Containerized the model and served through a high-performance FastAPI backend with an interactive Streamlit frontend using Docker.",
      stack: ["Python", "FastAPI", "Docker", "Scikit-Learn", "Streamlit", "Random Forest"]
    },
    {
      num: "006",
      name: "AgriPulse: Agriculture Profitability & Sustainability",
      metric: "Dynamic Dashboard · Agricultural Analytics",
      badge: "Data Analytics",
      type: "misc",
      github: "https://github.com/a2r4vind",
      description: "Performed data preprocessing on agricultural datasets including handling missing values, outlier removal, and data cleaning. Designed and built an interactive dynamic Tableau dashboard 'AgriPulse' helping farmers and analysts make data-driven agricultural decisions.",
      stack: ["Tableau", "Microsoft Excel", "Data Analytics", "Data Preprocessing"]
    }
  ],
  experiences: [
    {
      role: "AI Research Intern (Software Development)",
      org: "Space Applications Centre (SAC), ISRO · Ahmedabad",
      badge: "Jul – Sep 2026 (12 weeks)",
      badgeType: "past",
      accent: "isro",
      points: [
        "Independently designed and built OC-ECV Local Engine, a local-first desktop application (Tauri, React/TypeScript, Python/FastAPI) for ingesting, processing, and visualizing Ocean Color and Essential Climate Variable satellite data, delivered as a fully packaged installable application.",
        "Validated the system end-to-end against real satellite data from 6 missions (MODIS-Aqua, SMAP, CCMP, SWOT, Oceansat-3) across 11 of 13 target climate-variable categories; diagnosed I/O bottlenecks and implemented local caching achieving ~55x speedup on repeated queries.",
        "Continuing development post-internship to implement planned ML-based analysis modules (e.g. automated algal-bloom detection) applying deep learning and computer vision to satellite geospatial feeds."
      ],
      chips: ["Tauri", "React", "TypeScript", "Python", "FastAPI", "Satellite Remote Sensing", "Geospatial Data", "NetCDF"]
    },
    {
      role: "AI Developer Intern",
      org: "Cognyx AI Pvt. Ltd.",
      badge: "Jan – Apr 2026 (14 weeks)",
      badgeType: "past",
      accent: "archsoft",
      points: [
        "Developed an end-to-end AI-based Waste Image Classification System using deep learning and computer vision to automatically classify waste materials (glass, metal, paper, plastic) for efficient segregation.",
        "Implemented transfer learning with ResNet architectures, applying fine-tuning and differential learning rates to achieve ~91% test accuracy on the final model.",
        "Built and managed the complete ML pipeline — data preprocessing, model training, evaluation, experiment tracking, and deployed a Streamlit web application containerised using Docker."
      ],
      chips: ["PyTorch", "ResNet", "Computer Vision", "Docker", "Streamlit", "Transfer Learning", "Python"]
    },
    {
      role: "Data Analyst Intern",
      org: "IBM-CSRBOX — Summer GTU Internship Program",
      badge: "Jul 2025 (2 weeks)",
      badgeType: "past",
      accent: "ibm",
      points: [
        "Performed data preprocessing on agricultural datasets including handling missing values, outlier removal, and data cleaning using Microsoft Excel.",
        "Designed and built an interactive dynamic Tableau dashboard 'AgriPulse' using agricultural data to help farmers make informed, data-driven decisions."
      ],
      chips: ["Tableau", "Microsoft Excel", "Data Cleaning", "Data Analytics", "Visualization"]
    }
  ],
  skillTabs: [
    {
      id: "programming",
      label: "Programming",
      skills: [
        { name: "Python (Advanced)", icon: "python", tone: "accent" },
        { name: "Java (Intermediate)", icon: "java", tone: "default" },
        { name: "SQL", icon: "mysql", tone: "accent" },
        { name: "TypeScript / JS", icon: "typescript", tone: "default" }
      ]
    },
    {
      id: "ml-frameworks",
      label: "ML & DL Frameworks",
      skills: [
        { name: "PyTorch", icon: "pytorch", tone: "accent" },
        { name: "TensorFlow", icon: "tensorflow", tone: "accent" },
        { name: "Keras", icon: "keras", tone: "default" },
        { name: "Scikit-Learn", icon: "scikitlearn", tone: "accent" },
        { name: "CNNs", icon: "brain", tone: "default" },
        { name: "Transfer Learning", icon: "zap", tone: "default" }
      ]
    },
    {
      id: "cv",
      label: "Computer Vision",
      skills: [
        { name: "Image Classification", icon: "image", tone: "accent" },
        { name: "Object Detection", icon: "eye", tone: "accent" },
        { name: "Semantic Segmentation", icon: "layers", tone: "default" },
        { name: "Object Tracking", icon: "crosshair", tone: "default" },
        { name: "CVAT Annotation", icon: "tag", tone: "default" }
      ]
    },
    {
      id: "software-tools",
      label: "Software, Tools & OS",
      skills: [
        { name: "FastAPI", icon: "fastapi", tone: "accent" },
        { name: "Docker", icon: "docker", tone: "accent" },
        { name: "Tauri", icon: "app", tone: "default" },
        { name: "React", icon: "react", tone: "default" },
        { name: "Streamlit", icon: "streamlit", tone: "accent" },
        { name: "Git / GitHub", icon: "github", tone: "default" },
        { name: "Tableau", icon: "bar-chart", tone: "default" },
        { name: "xarray & GDAL", icon: "map", tone: "default" },
        { name: "Linux (Ubuntu)", icon: "linux", tone: "default" },
        { name: "NumPy & Pandas", icon: "pandas", tone: "accent" },
        { name: "Matplotlib & Seaborn", icon: "chart", tone: "default" }
      ]
    }
  ],
  publications: [],
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
