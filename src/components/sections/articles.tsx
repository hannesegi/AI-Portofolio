"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Mock data, will be replaced with data from a data source
const initialArticles = [
    {
        title: "Build a Modern RAG Pipeline in 2026: Docling + Qdrant Hybrid (BM25 + Dense) + AI Agent Step-by-Step Guide with Practical Code",
        description: "Retrieval-Augmented Generation (RAG) continues to be the most practical way to build reliable, hallucination-resistant AI applications in 2026.",
        type: "medium"
    },
    {
        title: "Single-GPU vLLM Deployment: Running Nemotron-3-Nano-30B on RTX A6000 An Architecture Deep Dive",
        description: "NVIDIA’s Nemotron-3-Nano-30B-A3B (released December 2025) is a breakthrough in open-weight, efficient reasoning models. With a hybrid Mamba-Transformer + Mixture-of-Experts (MoE) architecture",
        link: "https://medium.com/@yohanesegipratama/single-gpu-vllm-deployment-running-nemotron-3-nano-30b-on-rtx-a6000-an-architecture-deep-dive-e99fa4fcc45c",
        type: "medium"
    }
];


export default function Articles() {
  const [articles, setArticles] = useState(initialArticles);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "", link: "", content: "", type: "custom" });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  
  const handleEdit = (article: any) => {
    setEditingArticle(article);
    setFormData(article);
    setIsDialogOpen(true);
  }

  const handleDelete = (articleTitle: string) => {
    setArticles(articles.filter(p => p.title !== articleTitle));
  }
  
  const handleFormChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingArticle) {
      setArticles(articles.map(p => p.title === (editingArticle as any).title ? formData : p));
    } else {
      setArticles([...articles, formData as any]);
    }
    setEditingArticle(null);
    setFormData({ title: "", description: "", link: "", content: "", type: "custom" });
    setIsDialogOpen(false);
  };

  const openNewArticleDialog = () => {
    setEditingArticle(null);
    setFormData({ title: "", description: "", link: "", content: "", type: "custom" });
    setIsDialogOpen(true);
  }

  return (
    <section id="articles" className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          My Articles & Thoughts
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A collection of my writings, tutorials, and thoughts on AI and technology.
        </p>
        {isLoggedIn && (
           <Button onClick={openNewArticleDialog}>
             <PlusCircle className="mr-2 h-4 w-4" /> Add New Article
           </Button>
         )}
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {articles.map((article) => (
          <motion.div
            key={article.title}
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="flex"
          >
            <Card className="flex flex-col w-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription className="h-10">{article.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                 {article.type === 'custom' && article.content && (
                    <p className="text-sm text-muted-foreground">{article.content}</p>
                 )}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                {article.type === 'medium' && (
                    <Button asChild>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            Read on Medium
                        </a>
                    </Button>
                )}
                 {isLoggedIn && (
                   <div className="flex gap-2">
                     <Button variant="outline" size="icon" onClick={() => handleEdit(article)}>
                       <Edit className="h-4 w-4" />
                     </Button>
                     <Button variant="destructive" size="icon" onClick={() => handleDelete(article.title)}>
                       <Trash className="h-4 w-4" />
                     </Button>
                   </div>
                 )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingArticle ? 'Edit Article' : 'Add New Article'}</DialogTitle>
              <DialogDescription>
                Fill in the details below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <select id="type" value={formData.type} onChange={handleFormChange} className="w-full p-2 border rounded">
                        <option value="custom">Custom</option>
                        <option value="medium">Medium Embed</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={formData.title} onChange={handleFormChange} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" value={formData.description} onChange={handleFormChange} required />
                </div>
                {formData.type === 'medium' ? (
                    <div className="space-y-2">
                        <Label htmlFor="link">Medium URL</Label>
                        <Input id="link" type="url" value={formData.link} onChange={handleFormChange} required />
                    </div>
                ) : (
                    <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea id="content" value={formData.content} onChange={handleFormChange} />
                    </div>
                )}
                <DialogFooter>
                    <Button type="submit">{editingArticle ? 'Save Changes' : 'Add Article'}</Button>
                </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    </section>
  );
}
