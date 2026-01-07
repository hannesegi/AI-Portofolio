"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { huggingFaceProjects as initialHuggingFaceProjects, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HuggingFaceIcon } from "@/components/icons";
import { PlusCircle, Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function HuggingFace() {
  const [projects, setProjects] = useState(initialHuggingFaceProjects);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", task: "", description: "", link: "" });


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setFormData(project);
    setIsDialogOpen(true);
  };

  const handleDelete = (projectName: string) => {
    setProjects(projects.filter(p => p.name !== projectName));
  };
  
  const handleFormChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map(p => p.name === editingProject.name ? formData : p));
    } else {
      setProjects([...projects, formData]);
    }
    setEditingProject(null);
    setFormData({ name: "", task: "", description: "", link: "" });
    setIsDialogOpen(false);
  };
  
  const openNewProjectDialog = () => {
    setEditingProject(null);
    setFormData({ name: "", task: "", description: "", link: "" });
    setIsDialogOpen(true);
  };


  return (
    <section id="hugging-face" className="container py-12 md:py-24 bg-secondary/50 dark:bg-card">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Featured Hugging Face Spaces
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore some of my interactive demos and models hosted on Hugging Face.
        </p>
         {isLoggedIn && (
          <Button onClick={openNewProjectDialog}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Space
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
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="flex"
          >
            <Card className="flex flex-col w-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <Badge variant="secondary">{project.task}</Badge>
                </div>
                <CardDescription className="h-10">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                 {isLoggedIn && (
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(project)}>
                            <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDelete(project.name)}>
                            <Trash className="h-4 w-4" />
                        </Button>
                    </div>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <HuggingFaceIcon className="mr-2 h-5 w-5" /> Open on Hugging Face
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingProject ? 'Edit Space' : 'Add New Space'}</DialogTitle>
              <DialogDescription>
                Fill in the details for your Hugging Face Space.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={formData.name} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="task">Task (e.g. NLP, Computer Vision)</Label>
                <Input id="task" value={formData.task} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={formData.description} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link">Hugging Face URL</Label>
                <Input id="link" type="url" value={formData.link} onChange={handleFormChange} required />
              </div>
              <DialogFooter>
                <Button type="submit">{editingProject ? 'Save Changes' : 'Add Space'}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    </section>
  );
}