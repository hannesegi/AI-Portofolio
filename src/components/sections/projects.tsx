"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects as initialProjects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, PlusCircle, Edit, Trash } from "lucide-react";
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

const projectCategories = ["All", "NLP", "Computer Vision", "Multimodal", "AI Agent"];

function ProjectCard({ project, onEdit, onDelete, isLoggedIn }: { project: (typeof initialProjects)[0], onEdit: (project:any) => void, onDelete: (title: string) => void, isLoggedIn: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex"
    >
      <Card className="flex flex-col w-full hover:shadow-lg transition-shadow overflow-hidden">
        <div className="aspect-video relative bg-muted">
            <Image 
                src={project.image || "/img/placeholder.png"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <CardDescription className="h-10">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
          </div>
           {isLoggedIn && (
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => onEdit(project)}>
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="icon" onClick={() => onDelete(project.title)}>
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center mt-auto">
            <div className="flex gap-2">
                <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                    </a>
                </Button>
                {project.demo && (
                    <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                    </a>
                    </Button>
                )}
            </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [projects, setProjects] = useState(initialProjects);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({ title: "", category: "NLP", description: "", tech: "", github: "", demo: "", image: "" });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setFormData({ ...project, tech: project.tech.join(", ") });
    setIsDialogOpen(true);
  };

  const handleDelete = (projectTitle: string) => {
    setProjects(projects.filter(p => p.title !== projectTitle));
  };

  const handleFormChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      tech: formData.tech.split(",").map(t => t.trim())
    };

    if (editingProject) {
      setProjects(projects.map(p => p.title === (editingProject as any).title ? projectData : p));
    } else {
      setProjects([...projects, projectData]);
    }
    setEditingProject(null);
    setFormData({ title: "", category: "NLP", description: "", tech: "", github: "", demo: "", image: "" });
    setIsDialogOpen(false);
  };
  
  const openNewProjectDialog = () => {
    setEditingProject(null);
    setFormData({ title: "", category: "NLP", description: "", tech: "", github: "", demo: "", image: "" });
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="container py-12 md:py-24 bg-secondary/50 dark:bg-card">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A selection of projects that demonstrate my skills in AI and software development.
        </p>
        {isLoggedIn && (
          <Button onClick={openNewProjectDialog}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Project
          </Button>
        )}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-8">
          {projectCategories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onEdit={handleEdit} onDelete={handleDelete} isLoggedIn={isLoggedIn}/>
          ))}
        </motion.div>
      </Tabs>

       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
              <DialogDescription>
                Fill in the details for your project below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={formData.title} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image Path</Label>
                <Input id="image" type="text" value={formData.image} onChange={handleFormChange} placeholder="/img/project-name.png" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select id="category" value={formData.category} onChange={handleFormChange} className="w-full p-2 border rounded">
                  {projectCategories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={formData.description} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tech">Technologies (comma-separated)</Label>
                <Input id="tech" value={formData.tech} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub URL</Label>
                <Input id="github" type="url" value={formData.github} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo">Live Demo URL (optional)</Label>
                <Input id="demo" type="url" value={formData.demo} onChange={handleFormChange} />
              </div>
              <DialogFooter>
                <Button type="submit">{editingProject ? 'Save Changes' : 'Add Project'}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    </section>
  );
}
