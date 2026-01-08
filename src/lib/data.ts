import {
  PythonIcon,
  TypeScriptIcon,
  PyTorchIcon,
  TensorFlowIcon,
  HuggingFaceIcon,
  LangChainIcon,
  LlamaIndexIcon,
  AutoGenIcon,
  CrewAIIcon,
  MongoDBIcon,
  ElasticsearchIcon,
  QdrantIcon,
  FastAPIIcon,
  NextJsIcon,
  TailwindCssIcon,
  DockerIcon,
  GitHubActionsIcon,
  ReactIcon,
  NodeJsIcon,
  AWSIcon,
} from "@/components/icons";

export const siteConfig = {
  name: "Yohanes Egi",
  title: "Full Stack AI Engineer",
  tagline: "Building intelligent systems with LLMs, Computer Vision, and Multimodal AI.",
  linkedin: "https://www.linkedin.com/in/yohanesegipratamayudoutomo/",
  github: "https://github.com/hanes-projects",
  huggingface: "https://huggingface.co/hanes",
};

export const techStack = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: PythonIcon, description: "The go-to language for AI/ML development." },
      { name: "TypeScript", icon: TypeScriptIcon, description: "For building robust and scalable web applications." },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", icon: PyTorchIcon, description: "My primary deep learning framework for its flexibility and performance." },
      { name: "TensorFlow", icon: TensorFlowIcon, description: "Experienced in building and deploying models with TensorFlow/Keras." },
      { name: "HuggingFace", icon: HuggingFaceIcon, description: "Extensive use of Transformers, Datasets, and the entire ecosystem." },
    ],
  },
  {
    category: "LLM / Agent",
    items: [
      { name: "LangChain", icon: LangChainIcon, description: "Building complex LLM applications and agentic workflows." },
      { name: "LlamaIndex", icon: LlamaIndexIcon, description: "Specializing in Retrieval-Augmented Generation (RAG) pipelines." },
      { name: "Autogen", icon: AutoGenIcon, description: "Developing multi-agent conversational systems." },
      { name: "CrewAI", icon: CrewAIIcon, description: "Orchestrating role-playing autonomous AI agents." },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "MongoDB", icon: MongoDBIcon, description: "For flexible, schema-less data storage in modern applications." },
      { name: "Elasticsearch", icon: ElasticsearchIcon, description: "For powerful search, logging, and analytics." },
      { name: "Qdrant", icon: QdrantIcon, description: "High-performance vector database for semantic search and RAG." },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", icon: FastAPIIcon, description: "Building high-performance Python APIs for serving ML models." },
      { name: "Node.js", icon: NodeJsIcon, description: "For building scalable server-side applications." },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: NextJsIcon, description: "My framework of choice for building full-stack React applications." },
      { name: "React", icon: ReactIcon, description: "Building interactive and dynamic user interfaces." },
      { name: "TailwindCSS", icon: TailwindCssIcon, description: "For rapid, utility-first UI development." },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: DockerIcon, description: "Containerizing applications for consistent development and deployment." },
      { name: "GitHub Actions", icon: GitHubActionsIcon, description: "Automating CI/CD pipelines and workflows." },
      { name: "AWS", icon: AWSIcon, description: "Deploying and managing cloud infrastructure for AI services." },
    ],
  },
];


export const projects = [
  {
    title: "Toko GPT",
    category: "NLP",
    description: "LLM-powered system for news crawling, sentiment analysis, NER, and issue extraction.",
    tech: ["Python", "LangChain", "LLM", "Elasticsearch"],
    github: "https://github.com/hanes-projects/news-intelligence-engine",
    demo: "None",
    image: "/img/Toko-GPT.png"
  },
  // {
  //   title: "Real-time Object Detection for Retail",
  //   category: "Computer Vision",
  //   description: "A high-performance computer vision system to track foot traffic and product interaction in real-time.",
  //   tech: ["TensorFlow", "YOLOv8", "FastAPI", "Docker"],
  //   github: "https://github.com/hanes-projects/retail-object-detection",
  //   demo: "https://huggingface.co/spaces/hanes/retail-object-detection-demo",
  //   image: "/img/retail-object-detection.png"
  // },
  // {
  //   title: "Multimodal Image-to-Recipe Generator",
  //   category: "Multimodal",
  //   description: "A deep learning model that takes an image of a dish and generates a plausible cooking recipe.",
  //   tech: ["PyTorch", "Next.js", "CLIP", "ViT"],
  //   github: "https://github.com/hanes-projects/image-to-recipe",
  //   demo: "https://hanes-image-to-recipe.vercel.app",
  //   image: "/img/image-to-recipe.png"
  // },
  // {
  //   title: "Autonomous AI Agent for Web Research",
  //   category: "AI Agent",
  //   description: "An autonomous agent that can perform comprehensive web research, synthesize findings, and generate a report.",
  //   tech: ["CrewAI", "LangChain", "Serper API"],
  //   github: "https://github.com/hanes-projects/web-research-agent",
  //   demo: "",
  //   image: "/img/web-research-agent.png"
  // },
  {
    title: "Customer Support Chatbot with RAG",
    category: "NLP",
    description: "An intelligent chatbot using Retrieval-Augmented Generation to provide accurate answers from a knowledge base.",
    tech: ["LlamaIndex", "Qdrant", "FastAPI"],
    github: "https://github.com/hanes-projects/rag-chatbot",
    demo: "None",
    image: "/img/aiverse-chat.png"
  },
  // {
  //   title: "Multi-Agent Financial Analyst Swarm",
  //   category: "AI Agent",
  //   description: "A team of AI agents that collaborate to analyze stock data, read news, and provide investment insights.",
  //   tech: ["Autogen", "Python", "Tavily API"],
  //   github: "https://github.com/hanes-projects/financial-agent-swarm",
  //   demo: "",
  //   image: "/img/financial-agent-swarm.png"
  // },
];

export const experience = [
  {
    company: "PT Verset Teknologi Nusantara",
    role: "Full Stack AI Engineer",
    duration: "July 2025 - Present",
    accomplishments: [
      "Developed and deployed end-to-end AI systems covering backend services, LLM integration, and multimodal generative applications.",
      "Designed and implemented scalable AI pipelines from data ingestion to model inference, including locally hosted LLM deployment and optimization.",
      "Built intelligent AI agents for social media automation, enabling autonomous comment generation, content scheduling, and data scraping workflows.",
      "Created AI narrative tools capable of generating content from images, videos, text, and audio using multimodal models.",
      "Developed interactive AI chatbots with text and image generation capabilities, supporting real-time user interactions.",
      "Led the development of the Aiverse chatbot, a ChatGPT-like conversational AI powered by locally hosted LLMs with full control over data and inference.",
      "Architected modular and scalable AI services to support agent-based systems and production-ready AI products.",
    ]
    ,
  },
  {
    company: "PT Ebdesk Teknologi.",
    role: "AI Researcher",
    duration: "August 2023 - June 2025",
    accomplishments: [
      "Joined the AI Research and Development team focusing on LLMs, multi-agent systems, and computer vision for AI product development.",
      "Designed multi-agent pipelines for large-scale data acquisition using Google, DuckDuckGo, and social media crawling tools.",
      "Built end-to-end RAG (Retrieval-Augmented Generation) workflows leveraging Qdrant and ElasticSearch to improve information retrieval accuracy and LLM response quality.",
      "Implemented LangChain-based agent systems to orchestrate data processing, reasoning, and automated analysis generation.",
      "Developed and fine-tuned multimodal AI models including Text-to-Speech (TTS) for natural voice synthesis, Text-to-Image for high-quality visual generation, and video mimic models for realistic avatar animation.",
      "Optimized large language models such as Qwen using parameter-efficient fine-tuning techniques (LoRA) and distributed training frameworks like DeepSpeed for scalable production deployment.",
      "Conducted data annotation and dataset preparation using Label Studio for computer vision tasks, including YOLO training and Vision-Language Model (VLM) fine-tuning.",
      "Collaborated on research-driven AI solutions, translating experimental models into production-ready systems.",
    ]
    ,
  },
  // {
  //   company: "Tech Innovators (Internship)",
  //   role: "AI Research Intern",
  //   duration: "May 2017 - Aug 2017",
  //   accomplishments: [
  //     "Researched and implemented state-of-the-art algorithms in natural language processing.",
  //     "Contributed to the development of a prototype for an internal knowledge base search engine.",
  //   ],
  // },
];

export const huggingFaceProjects = [
  // {
  //   name: "News Analyzer",
  //   task: "NLP",
  //   description: "Analyze sentiment, extract entities, and summarize any news article URL.",
  //   link: "https://huggingface.co/spaces/hanes/news-analyzer"
  // },
  // {
  //   name: "Retail Object Detection Demo",
  //   task: "Computer Vision",
  //   description: "A live demo showcasing real-time object detection for retail analytics.",
  //   link: "https://huggingface.co/spaces/hanes/retail-object-detection-demo"
  // },
  // {
  //   name: "RAG Support Bot",
  //   task: "NLP",
  //   description: "Interact with a Retrieval-Augmented Generation chatbot for customer support.",
  //   link: "https://huggingface.co/spaces/hanes/rag-support-bot"
  // },
];
