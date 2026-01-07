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
  name: "Hanes",
  title: "AI Engineer",
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
    title: "AI News Intelligence Engine",
    category: "NLP",
    description: "LLM-powered system for news crawling, sentiment analysis, NER, and issue extraction.",
    tech: ["Python", "LangChain", "LLM", "Elasticsearch"],
    github: "https://github.com/hanes-projects/news-intelligence-engine",
    demo: "https://huggingface.co/spaces/hanes/news-analyzer"
  },
  {
    title: "Real-time Object Detection for Retail",
    category: "Computer Vision",
    description: "A high-performance computer vision system to track foot traffic and product interaction in real-time.",
    tech: ["TensorFlow", "YOLOv8", "FastAPI", "Docker"],
    github: "https://github.com/hanes-projects/retail-object-detection",
    demo: "https://huggingface.co/spaces/hanes/retail-object-detection-demo"
  },
  {
    title: "Multimodal Image-to-Recipe Generator",
    category: "Multimodal",
    description: "A deep learning model that takes an image of a dish and generates a plausible cooking recipe.",
    tech: ["PyTorch", "Next.js", "CLIP", "ViT"],
    github: "https://github.com/hanes-projects/image-to-recipe",
    demo: "https://hanes-image-to-recipe.vercel.app"
  },
  {
    title: "Autonomous AI Agent for Web Research",
    category: "AI Agent",
    description: "An autonomous agent that can perform comprehensive web research, synthesize findings, and generate a report.",
    tech: ["CrewAI", "LangChain", "Serper API"],
    github: "https://github.com/hanes-projects/web-research-agent",
    demo: ""
  },
  {
    title: "Customer Support Chatbot with RAG",
    category: "NLP",
    description: "An intelligent chatbot using Retrieval-Augmented Generation to provide accurate answers from a knowledge base.",
    tech: ["LlamaIndex", "Qdrant", "FastAPI"],
    github: "https://github.com/hanes-projects/rag-chatbot",
    demo: "https://huggingface.co/spaces/hanes/rag-support-bot"
  },
  {
    title: "Multi-Agent Financial Analyst Swarm",
    category: "AI Agent",
    description: "A team of AI agents that collaborate to analyze stock data, read news, and provide investment insights.",
    tech: ["Autogen", "Python", "Tavily API"],
    github: "https://github.com/hanes-projects/financial-agent-swarm",
    demo: ""
  },
];

export const experience = [
  {
    company: "Intelligent Systems Corp",
    role: "Lead AI Engineer",
    duration: "Jan 2021 - Present",
    accomplishments: [
      "Led the development of a production-scale NLP engine for document summarization, NER, and sentiment analysis, improving data processing efficiency by 300%.",
      "Designed and implemented multimodal pipelines combining vision and language models for innovative product features.",
      "Architected and deployed scalable AI agent workflows for task automation, reducing manual effort by 40%.",
      "Deployed and maintained AI systems in production environments using Docker, Kubernetes, and AWS services.",
    ],
  },
  {
    company: "Data Insights Inc.",
    role: "Machine Learning Engineer",
    duration: "Jun 2018 - Dec 2020",
    accomplishments: [
      "Developed and trained computer vision models for image classification and object detection, achieving 95% accuracy.",
      "Built data pipelines for ETL processes, handling terabytes of data for model training.",
      "Collaborated with the software engineering team to integrate ML models into the main application via REST APIs.",
    ],
  },
  {
    company: "Tech Innovators (Internship)",
    role: "AI Research Intern",
    duration: "May 2017 - Aug 2017",
    accomplishments: [
      "Researched and implemented state-of-the-art algorithms in natural language processing.",
      "Contributed to the development of a prototype for an internal knowledge base search engine.",
    ],
  },
];

export const huggingFaceProjects = [
  {
    name: "News Analyzer",
    task: "NLP",
    description: "Analyze sentiment, extract entities, and summarize any news article URL.",
    link: "https://huggingface.co/spaces/hanes/news-analyzer"
  },
  {
    name: "Retail Object Detection Demo",
    task: "Computer Vision",
    description: "A live demo showcasing real-time object detection for retail analytics.",
    link: "https://huggingface.co/spaces/hanes/retail-object-detection-demo"
  },
  {
    name: "RAG Support Bot",
    task: "NLP",
    description: "Interact with a Retrieval-Augmented Generation chatbot for customer support.",
    link: "https://huggingface.co/spaces/hanes/rag-support-bot"
  },
];
