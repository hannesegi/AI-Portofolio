'use server';

/**
 * @fileOverview An AI agent for generating concise and engaging project descriptions.
 *
 * - generateProjectDescription - A function that generates a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  title: z.string().describe('The title of the project.'),
  category: z.string().describe('The category of the project (e.g., NLP, Computer Vision).'),
  tech: z.array(z.string()).describe('An array of technologies used in the project.'),
  descriptionKeywords: z.string().describe('Relevant keywords that help to describe the project, separated by commas.'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('A concise and engaging description of the project.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an AI Engineer expert at creating concise and engaging project descriptions for your portfolio.

  Based on the project's title, category, tech stack, and keywords, generate a compelling 1-2 sentence description that highlights the project's value and accomplishments.

  Project Title: {{{title}}}
  Category: {{{category}}}
  Tech Stack: {{#each tech}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Keywords: {{{descriptionKeywords}}}

  Concise Project Description: `,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
