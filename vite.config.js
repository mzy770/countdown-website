import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({root:'source',base:'./',plugins:[tailwindcss()],build:{outDir:'../dist',emptyOutDir:true},server:{port:5173}});
