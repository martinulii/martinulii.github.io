import React from 'react';

export interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface Skill {
  name: string;
  Icon: React.ComponentType<any>;
}

export type BranchKey = 'logical' | 'artistic';
export type MainView = 'trajectoria' | 'habilitats' | 'hobbies';

export interface BranchContent {
  formation: TimelineEvent[];
  projects: TimelineEvent[];
}

export interface Branch {
  name: string;
  color: string;
  Icon: React.ComponentType<any>;
  data: BranchContent;
  skills: Skill[];
  skillsTitle: string;
}