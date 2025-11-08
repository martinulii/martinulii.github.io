import {
  BrainCircuit,
  Paintbrush,
  Code2,
  GitBranch,
  FileCode,
  Binary,
  Drum,
  Music,
  SlidersHorizontal,
  Feather,
  Languages,
  Server,
  Database,
  Milestone,
  Rocket,
  Sparkles,
  Train,
  Scale,
  Github,
  Mail,
  Instagram,
  Youtube,
} from 'lucide-react';
import { Branch, BranchKey } from './types';

export const ICONS = {
  Milestone,
  Rocket,
  Sparkles,
  Train,
  Scale,
  Github,
  Mail,
  Instagram,
  Youtube,
  Music, // Per Spotify
}

export const BRANCH_DATA: Record<BranchKey, Branch> = {
  logical: {
    name: 'Tècnica',
    color: '#3b82f6', // blue-500
    Icon: BrainCircuit,
    skillsTitle: 'Habilitats Tècniques',
    skills: [
      { name: 'Python', Icon: Code2 },
      { name: 'C', Icon: Binary },
      { name: 'JavaScript', Icon: Code2 },
      { name: 'HTML & CSS', Icon: FileCode },
      { name: 'Git', Icon: GitBranch },
      { name: 'Swift', Icon: Code2 },
      { name: 'Node.js', Icon: Server },
      { name: 'React', Icon: Code2 },
      { name: 'Supabase', Icon: Database },
    ],
    data: {
      formation: [
        {
          year: 'Cursant',
          title: 'Grau en Intel·ligència Artificial',
          company: 'Universitat Autònoma de Barcelona (UAB)',
          description: '3r curs. Formació en programació (Python, C), matemàtiques i estadística. Especialització en Aprenentatge Automàtic, Xarxes Neuronals, Visió per Computador i Processament del Llenguatge Natural.',
          tags: ['IA', 'Machine Learning', 'Deep Learning', 'NLP', 'Visió per Computador'],
        },
        {
          year: '2023',
          title: 'Batxillerat Científic-Tecnològic',
          company: 'Institut Arnau Cadell, Sant Cugat del Vallès',
          description: 'Finalització del batxillerat amb enfocament en ciències i tecnologia.',
          tags: ['Ciència', 'Tecnologia', 'Matemàtiques'],
        },
        {
            year: '2021',
            title: 'Educació Secundària Obligatòria (ESO)',
            company: 'Institut Arnau Cadell, Sant Cugat del Vallès',
            description: 'Finalització dels estudis secundaris amb itinerari cientificotècnic.',
            tags: ['Ciència', 'Tecnologia'],
        },
      ],
      projects: [
        {
          year: '2024 - Actual',
          title: 'Perdo el Tren - Beta pública',
          company: 'perdoeltren.onrender.com',
          description: 'Creació d\'una interfície per veure en temps real la posició dels trens de Rodalies (s\'hi aniran afegint més) degut al caos constant del servei.',
          tags: ['Web Apps', 'Front-end', 'UI/UX', 'Node', ],
        },
        {
          year: '2024 - Actual',
          title: "AlertApp - Beta privada",
          company: 'Projecte Personal',
          description: 'Desenvolupament d\'una app basada en un sistema d\'alertes públiques en un mapa a temps real, principalment per evitar assetjament masclista, entre d\'altres.',
          tags: ['Web Apps', 'Swift (Frontend)', 'Supabase (Backend)'],
        },
      ],
    },
  },
  artistic: {
    name: 'Creativitat',
    color: '#8b5cf6', // violet-500
    Icon: Paintbrush,
    skillsTitle: 'Habilitats Creatives i Idiomes',
    skills: [
        { name: 'Bateria', Icon: Drum },
        { name: 'Piano', Icon: Music },
        { name: 'Producció Musical', Icon: SlidersHorizontal },
        { name: 'Escriptura', Icon: Feather },
        { name: 'Anglès (B2)', Icon: Languages },
        { name: 'Francès (B2)', Icon: Languages },
        { name: 'Català (N)', Icon: Languages },
        { name: 'Castellà (N)', Icon: Languages },
        { name: 'Noruec (Principiant)', Icon: Languages },
    ],
    data: {
      formation: [
        {
          year: '2023 - Actual',
          title: 'Formació de Bateria',
          company: 'Taller de Músics, Barcelona',
          description: 'Formació superior amb especialització en estils de Jazz i Latin.',
          tags: ['Bateria', 'Jazz', 'Latin', 'Improvisació'],
        },
        {
          year: '2017 - 2023',
          title: 'Formació de Bateria',
          company: 'Particular, Martí Hosta',
          description: 'Aprofundiment tècnic i estilístic en la bateria, explorant diversos gèneres musicals.',
          tags: ['Bateria', 'Tècnica'],
        },
        {
          year: '2015 - 2017',
          title: 'Formació de Bateria',
          company: 'Conservatori El Musical de Bellaterra',
          description: 'Iniciació a la bateria, aprenentatge de ritmes bàsics i coordinació.',
          tags: ['Bateria', 'Coordinació'],
        },
        {
          year: '2011 - 2016',
          title: 'Formació de Piano',
          company: 'Conservatori El Musical de Bellaterra',
          description: 'Estudis de piano, incloent tècnica, lectura de partitures i repertori clàssic.',
          tags: ['Piano', 'Teoria Musical', 'Solfeig'],
        },
      ],
      projects: [
        {
          year: '2020 - Actual',
          title: 'Producció Musical',
          company: '@marsmusic',
          description: 'Composició, producció i publicació de projectes musicals en xarxes socials, incloent participació en concerts i actuacions en directe.',
          tags: ['Producció', 'Composició', 'Música'],
        },
        {
          year: '2024',
          title: 'Trencall',
          company: 'Novel·la autopublicada',
          description: 'Disponible a Amazon en català. Juvenil, Distopia.',
          tags: ['Escriptura', 'Novel·la', 'Autopublicació'],
          url: 'https://www.amazon.es/dp/B0F5QH1D3H',
        },
      ],
    },
  },
};