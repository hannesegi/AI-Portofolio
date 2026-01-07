"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { techStack as initialTechStack } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
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
import { PlusCircle, Edit, Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "@/components/icons";

const iconMap: { [key: string]: React.ComponentType<any> } = {
    PythonIcon: Icons.PythonIcon,
    TypeScriptIcon: Icons.TypeScriptIcon,
    PyTorchIcon: Icons.PyTorchIcon,
    TensorFlowIcon: Icons.TensorFlowIcon,
    HuggingFaceIcon: Icons.HuggingFaceIcon,
    LangChainIcon: Icons.LangChainIcon,
    LlamaIndexIcon: Icons.LlamaIndexIcon,
    AutoGenIcon: Icons.AutoGenIcon,
    CrewAIIcon: Icons.CrewAIIcon,
    MongoDBIcon: Icons.MongoDBIcon,
    ElasticsearchIcon: Icons.ElasticsearchIcon,
    QdrantIcon: Icons.QdrantIcon,
    FastAPIIcon: Icons.FastAPIIcon,
    NextJsIcon: Icons.NextJsIcon,
    TailwindCssIcon: Icons.TailwindCssIcon,
    DockerIcon: Icons.DockerIcon,
    GitHubActionsIcon: Icons.GitHubActionsIcon,
    ReactIcon: Icons.ReactIcon,
    NodeJsIcon: Icons.NodeJsIcon,
    AWSIcon: Icons.AWSIcon,
};


export default function TechStack() {
  const [techStack, setTechStack] = useState(initialTechStack);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", icon: "PythonIcon", description: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const handleEdit = (item: any, categoryName: string) => {
    setEditingItem(item);
    setEditingCategory(categoryName);
    setFormData({
        ...item,
        icon: Object.keys(iconMap).find(key => iconMap[key] === item.icon) || "PythonIcon",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (itemName: string, categoryName: string) => {
    setTechStack(techStack.map(cat => {
        if (cat.category === categoryName) {
            return {
                ...cat,
                items: cat.items.filter(item => item.name !== itemName)
            };
        }
        return cat;
    }));
  };

  const handleFormChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
        ...formData,
        icon: iconMap[formData.icon],
    };

    if (editingItem && editingCategory) {
       setTechStack(techStack.map(cat => {
            if (cat.category === editingCategory) {
                return {
                    ...cat,
                    items: cat.items.map(item => item.name === editingItem.name ? newItem : item)
                };
            }
            return cat;
       }));
    } else if(editingCategory) {
        setTechStack(techStack.map(cat => {
            if (cat.category === editingCategory) {
                return { ...cat, items: [...cat.items, newItem] };
            }
            return cat;
        }));
    }
    
    setEditingItem(null);
    setEditingCategory(null);
    setFormData({ name: "", icon: "PythonIcon", description: "" });
    setIsDialogOpen(false);
  };

  const openNewItemDialog = (categoryName: string) => {
    setEditingItem(null);
    setEditingCategory(categoryName);
    setFormData({ name: "", icon: "PythonIcon", description: "" });
    setIsDialogOpen(true);
  };
  

  return (
    <section id="tech-stack" className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            My Tech Stack
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            A curated list of technologies I use to build modern, intelligent applications.
          </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-4xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {techStack.map((category) => (
            <motion.div key={category.category} variants={FADE_IN_ANIMATION_VARIANTS}>
                <AccordionItem value={category.category}>
                    <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                      <div className="flex items-center gap-4">
                        {category.category}
                        {isLoggedIn && (
                            <Button size="sm" onClick={(e) => { e.stopPropagation(); openNewItemDialog(category.category); }}>
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Add Tech
                            </Button>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4">
                        {category.items.map((item) => (
                        <div key={item.name} className="relative group">
                            <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                <Card className="flex h-full w-full items-center justify-center p-4 hover:bg-accent/50 transition-colors">
                                    <CardContent className="p-0 flex flex-col items-center justify-center gap-2">
                                    <item.icon className="h-8 w-8" />
                                    <span className="text-sm font-medium text-center">{item.name}</span>
                                    </CardContent>
                                </Card>
                                </TooltipTrigger>
                                <TooltipContent>
                                <p>{item.description}</p>
                                </TooltipContent>
                            </Tooltip>
                            </TooltipProvider>
                            {isLoggedIn && (
                                <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => handleEdit(item, category.category)}>
                                        <Edit className="h-3 w-3" />
                                    </Button>
                                    <Button variant="destructive" size="icon" className="h-6 w-6" onClick={() => handleDelete(item.name, category.category)}>
                                        <Trash className="h-3 w-3" />
                                    </Button>
                                </div>
                            )}
                        </div>
                        ))}
                    </div>
                    </AccordionContent>
                </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingItem ? 'Edit Tech' : 'Add New Tech'}</DialogTitle>
              <DialogDescription>
                Fill in the details for the technology.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={formData.name} onChange={handleFormChange} required />
              </div>
               <div className="space-y-2">
                    <Label htmlFor="icon">Icon</Label>
                    <select id="icon" value={formData.icon} onChange={handleFormChange} className="w-full p-2 border rounded">
                        {Object.keys(iconMap).map(iconName => (
                            <option key={iconName} value={iconName}>{iconName}</option>
                        ))}
                    </select>
                </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" value={formData.description} onChange={handleFormChange} required />
              </div>
              <DialogFooter>
                <Button type="submit">{editingItem ? 'Save Changes' : 'Add Tech'}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    </section>
  );
}
