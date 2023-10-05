import {
  Typescript,
  Html,
  Json,
  Jsx,
  Markdown,
  Structure,
  Book,
  Documents,
  Commit,
  Text
} from '@/public/icons/';

type NavLinkProps = {
  title: string,
  path: string,
  icon: string,
  name: string
}

type Project = {
  title: string,
  description: string,
  link: string
}

export const sidebarLinks: NavLinkProps[] = [
  {
    title: 'about.json',
    path: '/about',
    icon: Documents,
    name: 'About',
  },
  {
    title: 'contact.html',
    path: '/contact',
    icon: Commit,
    name: 'Contact',
  },
  {
    title: 'projects.jsx',
    path: '/projects',
    icon: Structure,
    name: 'Projects',
  },
  {
    title: 'articles.md',
    path: '/articles',
    icon: Book,
    name: 'Articles',
  },
];

export const navLinks: NavLinkProps[] = [
  {
    title: 'index.ts',
    path: '/',
    icon: Typescript,
    name: 'index.ts',
  },
  {
    title: 'about.json',
    path: '/about',
    icon: Json,
    name: 'about.json',
  },
  {
    title: 'contact.html',
    path: '/contact',
    icon: Html,
    name: 'contact.html',
  },
  {
    title: 'projects.jsx',
    path: '/projects',
    icon: Jsx,
    name: 'projects.jsx',
  },
  {
    title: 'articles.md',
    path: '/articles',
    icon: Markdown,
    name: 'articles.md',
  },
  {
    title: 'resume.pdf',
    path: '/pdf/resume-v2.pdf',
    icon: Text,
    name: 'resume.pdf',
  },
];

export const projects: Project[] = [
  {
    title: 'e-surat',
    description: 'Aplikasi ini saya kembangkan untuk memenuhi salah satu syarat kelulusan perkuliahan saya di STMIK Sinar Nusantara. Aplikasi ini dibangun menggunakan ReactJS pada sisi Front End, ExpressJS pada sisi Back End dan menggunakan database MySQL serta Sequelize sebagai ORM.',
    link: 'https://github.com/yugmade13/e-surat'
  },
  {
    title: 'forum app',
    description: 'Aplikasi ini saya kembangkan sebagai submission atau syarat kelulusan kelas Expert React Developer di Dicoding Academy.',
    link: 'https://forum-app-beta.vercel.app/'
  },
  {
    title: 'catat app',
    description: 'Aplikasi ini saya kembangkan sebagai submission atau syarat kelulusan kelas Fundamental React Developer di Dicoding Academy.',
    link: 'https://catat-app.vercel.app/'
  }
];