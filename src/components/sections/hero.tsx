"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ArrowRight, Download, Upload, BrainCircuit, FileText, Film, Globe, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


// --- SVG Animation Components ---

const SemanticEmbeddingArt = () => (
  <motion.div
    key="semantic"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full h-full"
  >
    <svg viewBox="0 0 400 400">
      <defs>
        <radialGradient id="grad-semantic">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      {[
        { text: "King", x: 280, y: 120 },
        { text: "Queen", x: 280, y: 280 },
        { text: "Man", x: 120, y: 120 },
        { text: "Woman", x: 120, y: 280 },
      ].map((item, i) => (
        <motion.g
          key={i}
          initial={{ x: 200, y: 200, scale: 0 }}
          animate={{ x: item.x, y: item.y, scale: 1 }}
          transition={{ duration: 1, delay: i * 0.1, ease: "backOut" }}
        >
          <circle cx="0" cy="0" r="15" fill="url(#grad-semantic)" />
          <circle cx="0" cy="0" r="15" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
          <text x="20" y="5" fill="hsl(var(--foreground))" fontSize="14" style={{ userSelect: 'none' }}>
            {item.text}
          </text>
        </motion.g>
      ))}
      {[
        { from: { x: 280, y: 120 }, to: { x: 120, y: 120 } },
        { from: { x: 280, y: 280 }, to: { x: 120, y: 280 } },
        { from: { x: 280, y: 120 }, to: { x: 280, y: 280 } },
        { from: { x: 120, y: 120 }, to: { x: 120, y: 280 } },
      ].map((line, i) => (
         <motion.line
          key={i}
          x1={line.from.x}
          y1={line.from.y}
          x2={line.to.x}
          y2={line.to.y}
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeInOut" }}
        />
      ))}
    </svg>
  </motion.div>
);

const RagPipelineArt = () => (
  <motion.div
    key="rag"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full h-full"
  >
    <svg viewBox="0 0 400 400">
      {/* Documents */}
      {[
        { label: "PDF", y: 100 },
        { label: "Web", y: 150 },
        { label: "Docs", y: 200 },
      ].map((doc, i) => (
        <motion.g
            key={i}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
        >
            <rect
                x={0}
                y={doc.y}
                width={80}
                height={30}
                rx={5}
                fill="hsl(var(--primary) / 0.1)"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
            />
            <text x="40" y={doc.y + 20} textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))" style={{ userSelect: 'none' }}>
                {doc.label}
            </text>
        </motion.g>
      ))}
      {/* Arrow to Retriever */}
      <motion.path
        d="M140 170 Q 180 170, 200 200"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
      />
      {/* Retriever */}
      <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <circle
            cx="200"
            cy="200"
            r="30"
            fill="hsl(var(--accent) / 0.2)"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
        />
         <text x="200" y="205" textAnchor="middle" fontSize="10" fill="hsl(var(--accent))" style={{ userSelect: 'none' }}>Retrieve</text>
      </motion.g>
      {/* Arrow to Generator */}
      <motion.path
        d="M230 200 H 280 L 320 170"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
      />
      {/* Generator (Brain) */}
       <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <path
            d="M320,150 C300,150 300,120 320,120 C340,120 340,150 320,150 M320,150 C310,150 310,170 320,170 C330,170 330,150 320,150"
            fill="hsl(var(--primary))"
          />
          <text x="320" y="185" textAnchor="middle" fontSize="10" fill="hsl(var(--foreground))" style={{ userSelect: 'none' }}>Generate</text>
       </motion.g>
    </svg>
  </motion.div>
);

const VideoMimicArt = () => (
    <motion.div
      key="video"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <svg viewBox="0 0 400 400">
        <defs>
            <linearGradient id="grad-video" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.8 }} />
               <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.8 }} />
            </linearGradient>
        </defs>
        {/* Main video shape */}
        <motion.rect 
            x="100" y="125" width="200" height="150" rx="15" 
            stroke="url(#grad-video)" 
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Play button morphing */}
        <motion.path
            fill="hsl(var(--accent))"
            initial={{ d: "M 185 175 L 185 225 L 225 200 Z" }} // Triangle
            animate={{
                d: ["M 185 175 L 185 225 L 225 200 Z", "M 185 185 L 215 185 L 215 215 L 185 215 Z", "M 185 175 L 185 225 L 225 200 Z"], // Triangle -> Square -> Triangle
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
         <motion.path
            d="M 250 200 C 270 180, 290 180, 310 200"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="none"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 0.7, 0], scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
);

const GeospatialAIArt = () => (
    <motion.div
      key="geospatial"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center justify-center"
    >
        <svg viewBox="0 0 400 400">
            {/* Globe */}
            <motion.circle 
                cx="200" cy="200" r="120" 
                fill="hsl(var(--primary) / 0.1)"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
            />
            {/* Latitude/Longitude lines */}
            {[...Array(5)].map((_, i) => (
                <motion.path
                    key={`lat-${i}`}
                    d={`M 80 ${140 + i * 30} C 150 ${120 + i * 30}, 250 ${120 + i * 30}, 320 ${140 + i * 30}`}
                    fill="none"
                    stroke="hsl(var(--primary) / 0.3)"
                    strokeWidth="0.5"
                />
            ))}
            <motion.ellipse cx="200" cy="200" rx="60" ry="118" fill="none" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.5" />
            <motion.ellipse cx="200" cy="200" rx="95" ry="118" fill="none" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.5" />

            {/* Animated data points */}
            {[
                { cx: 150, cy: 160 }, { cx: 250, cy: 250 }, { cx: 200, cy: 120 }, { cx: 280, cy: 180 }
            ].map((pt, i) => (
                <motion.circle
                    key={`point-${i}`}
                    cx={pt.cx}
                    cy={pt.cy}
                    r="4"
                    fill="hsl(var(--accent))"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                />
            ))}
        </svg>
    </motion.div>
);

const AIAgentArt = () => (
    <motion.div
      key="agent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center justify-center"
    >
      <svg viewBox="0 0 400 400">
        <defs>
          <radialGradient id="grad-agent-glow">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Central LLM Brain */}
        <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
        >
          <circle cx="200" cy="200" r="70" fill="url(#grad-agent-glow)" />
          <path
            d="M200,175 C190,165 180,175 180,185 C180,195 190,205 200,205 C210,215 220,205 220,195 C220,185 210,175 200,175Z M190,195 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
          />
          <text x="200" y="225" textAnchor="middle" fontSize="16" fontWeight="bold" fill="hsl(var(--accent))" style={{ userSelect: 'none' }}>LLM</text>
        </motion.g>

        {/* Orbiting automated tasks */}
        {[
          {text: "Analyze Data", angle: 0}, 
          {text: "Write Report", angle: 120}, 
          {text: "Generate Code", angle: 240}
        ].map((task, i) => (
          <motion.g 
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <motion.g
              initial={{ x: 200, y: 200, scale: 0 }}
              animate={{
                x: 200 + 150 * Math.cos(task.angle * Math.PI / 180),
                y: 200 + 150 * Math.sin(task.angle * Math.PI / 180),
                scale: 1,
              }}
              transition={{ duration: 1, delay: 0.5 + i * 0.2, ease: "backOut" }}
            >
              <rect x="-45" y="-15" width="90" height="30" rx="8" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" strokeWidth="1" />
              <text x="0" y="5" textAnchor="middle" fontSize="11" fill="hsl(var(--secondary-foreground))" style={{ userSelect: 'none' }}>{task.text}</text>
            </motion.g>
          </motion.g>
        ))}

        {/* Communication lines */}
        {[...Array(3)].map((_, i) => (
            <motion.line
                key={`line-${i}`}
                x1="200"
                y1="200"
                x2={200 + 105 * Math.cos((i * 120) * Math.PI / 180)}
                y2={200 + 105 * Math.sin((i * 120) * Math.PI / 180)}
                stroke="hsl(var(--accent))"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
            >
              <animate attributeName="stroke-dashoffset" values="24;0" dur="1s" repeatCount="indefinite" />
            </motion.line>
        ))}
      </svg>
    </motion.div>
);


const animations = [
  { id: 'embedding', name: 'Embedding', component: SemanticEmbeddingArt, icon: BrainCircuit },
  { id: 'rag', name: 'RAG', component: RagPipelineArt, icon: FileText },
  { id: 'video', name: 'Multimodal', component: VideoMimicArt, icon: Film },
  { id: 'geospatial', name: 'Geospatial', component: GeospatialAIArt, icon: Globe },
  { id: 'agent', name: 'AI Agent', component: AIAgentArt, icon: Bot },
];


export default function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resumeUrl, setResumeUrl] = useState("/path/to/your/resume.pdf"); // Default path
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeAnimation, setActiveAnimation] = useState(animations[0].id);

  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const TYPING_TEXT = "AI Engineer";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Animation cycle effect
    const interval = setInterval(() => {
      setActiveAnimation(prev => {
        const currentIndex = animations.findIndex(a => a.id === prev);
        const nextIndex = (currentIndex + 1) % animations.length;
        return animations[nextIndex].id;
      });
    }, 5000); // Change animation every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      const storedResume = localStorage.getItem("resumeUrl");
      if (storedResume) {
        setResumeUrl(storedResume);
      }
    }
    
    // Typing effect
    if (typedText.length < TYPING_TEXT.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(TYPING_TEXT.slice(0, typedText.length + 1));
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [typedText]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const newResumeUrl = URL.createObjectURL(file);
      localStorage.setItem("resumeUrl", newResumeUrl);
      setResumeUrl(newResumeUrl);
      toast({ title: "Success", description: "Resume uploaded successfully. It's stored locally in your browser." });
    } else {
      toast({ variant: "destructive", title: "Error", description: "Please upload a PDF file." });
    }
  };
  
  const ActiveComponent = animations.find(a => a.id === activeAnimation)?.component;

  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center justify-center text-center lg:text-left min-h-[calc(100vh-4rem)] py-20 md:py-32">
      {/* Left Column: Text Content */}
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col items-center lg:items-start"
      >
        <motion.div variants={FADE_IN_ANIMATION_VARIANTS}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>&lt;</motion.span>
             <span className="relative inline-block">
                Yohanes Egi
                <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
                />
            </span>
            <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}> /&gt;</motion.span>
          </h1>
        </motion.div>
        
        <motion.div variants={FADE_IN_ANIMATION_VARIANTS} className="mb-6">
          <Badge variant="default" className="text-base bg-primary text-primary-foreground h-8">
            {typedText}
            <span className="animate-ping">_</span>
          </Badge>
        </motion.div>

        <motion.p
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
        >
          {siteConfig.tagline}
        </motion.p>
        
        <motion.div
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
        >
          <Button asChild size="lg">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={resumeUrl} download="YohanesEgi-Resume.pdf">
              <Download className="mr-2 h-4 w-4" /> CV
            </a>
          </Button>
           {isLoggedIn && (
            <>
              <Button variant="outline" size="lg" onClick={handleUploadClick}>
                <Upload className="mr-2 h-4 w-4" /> Upload CV
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf"
              />
            </>
          )}
        </motion.div>
         <motion.div
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8"
        >
            <Button variant="ghost" size="icon" asChild>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                </a>
            </Button>
        </motion.div>
      </motion.div>

      {/* Right Column: Animation */}
      <motion.div 
        variants={FADE_IN_ANIMATION_VARIANTS}
        className="relative w-full max-w-md mx-auto lg:max-w-none h-80 lg:h-96 flex flex-col items-center justify-center"
      >
        <div className="w-full h-full">
            <AnimatePresence mode="wait">
                {ActiveComponent && <ActiveComponent />}
            </AnimatePresence>
        </div>
        <div className="absolute bottom-0 flex flex-wrap justify-center gap-2 p-2 bg-background/50 backdrop-blur-sm rounded-lg border">
            {animations.map(anim => (
                <Button 
                    key={anim.id}
                    variant={activeAnimation === anim.id ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setActiveAnimation(anim.id)}
                    className="flex gap-2 items-center transition-all"
                >
                    <anim.icon className={`h-4 w-4 transition-colors ${activeAnimation === anim.id ? 'text-accent' : ''}`} />
                    <span className={`transition-colors ${activeAnimation === anim.id ? 'text-accent-foreground' : 'text-muted-foreground'}`}>{anim.name}</span>
                </Button>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
