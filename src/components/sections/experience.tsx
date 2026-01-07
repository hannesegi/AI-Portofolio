"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { experience as initialExperience } from "@/lib/data";
import { Briefcase, PlusCircle, Edit, Trash } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

export default function Experience() {
  const [experience, setExperience] = useState(initialExperience);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);
  const [formData, setFormData] = useState({ company: "", role: "", duration: "", accomplishments: "" });


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const handleEdit = (exp: any) => {
    setEditingExperience(exp);
    setFormData({ ...exp, accomplishments: exp.accomplishments.join("\n") });
    setIsDialogOpen(true);
  };

  const handleDelete = (company: string) => {
    setExperience(experience.filter(exp => exp.company !== company));
  };
  
  const handleFormChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const experienceData = {
      ...formData,
      accomplishments: formData.accomplishments.split("\n").filter(a => a.trim() !== "")
    };

    if (editingExperience) {
      setExperience(experience.map(exp => exp.company === (editingExperience as any).company ? experienceData : exp));
    } else {
      setExperience([experienceData, ...experience]);
    }
    setEditingExperience(null);
    setFormData({ company: "", role: "", duration: "", accomplishments: "" });
    setIsDialogOpen(false);
  };

  const openNewExperienceDialog = () => {
    setEditingExperience(null);
    setFormData({ company: "", role: "", duration: "", accomplishments: "" });
    setIsDialogOpen(true);
  };

  return (
    <section id="experience" className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Career Experience
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          My professional journey in the world of Artificial Intelligence.
        </p>
        {isLoggedIn && (
          <Button onClick={openNewExperienceDialog}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Experience
          </Button>
        )}
      </div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 md:left-6 h-full w-0.5 bg-border"></div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="space-y-12"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={FADE_IN_ANIMATION_VARIANTS}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="absolute left-1/2 -translate-x-1/2 md:left-6 w-4 h-4 mt-1.5 rounded-full bg-primary border-4 box-content border-background"></div>
                
                <div className="w-full md:pl-16">
                  <div className="p-6 rounded-lg border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{item.role}</h3>
                      <p className="text-sm text-muted-foreground">{item.duration}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Briefcase className="h-4 w-4"/>
                            <span>{item.company}</span>
                        </div>
                        {isLoggedIn && (
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" onClick={() => handleEdit(item)}>
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="icon" onClick={() => handleDelete(item.company)}>
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      {item.accomplishments.map((acc, i) => (
                        <li key={i}>{acc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingExperience ? 'Edit Experience' : 'Add New Experience'}</DialogTitle>
              <DialogDescription>
                Fill in the details for your work experience.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" value={formData.company} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" value={formData.role} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" value={formData.duration} onChange={handleFormChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accomplishments">Accomplishments (one per line)</Label>
                <Textarea id="accomplishments" value={formData.accomplishments} onChange={handleFormChange} required  rows={5}/>
              </div>
              <DialogFooter>
                <Button type="submit">{editingExperience ? 'Save Changes' : 'Add Experience'}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    </section>
  );
}
