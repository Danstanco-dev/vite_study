import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import CSV from './src/MyPlugin'


// https://vite.dev/config/
export default defineConfig({

  // public Directory Change folder name
  publicDir: "staticPublic",

  // .env prefix
   envPrefix: "VITE_" ,

  // plugins
  plugins: [
    react(), 
    inspect(),
     checker({
     
     }),
     CSV(),
     // Vite Image Optimizer plugin for our Static Images
      ViteImageOptimizer({
        /* pass your config */
        jpg: {
          quality: 40
        }
      }),
    ],

  // Path Alias configuration
  resolve: {
  alias: {
    '@': path.resolve(__dirname, "./src/assets")
   }
  },
   // For bundling of our page's in the appliccation singlely
   build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit:2024,
    rollupOptions: {
      input: {
        page1: 'src/Page1.jsx',
        page2: 'src/Page2.jsx'
      }
    }
  },
   
  // Specifing the port our application should
  server: {
    port: 3334,
    strictPort: false, 
    // specify custom headers for vite Responses
    headers: {
      a: 'b'
    }, 
    // proxy helps us to fetch something doing production mode it holds an object when keys are addressed where the vite is going to redirect those request
    proxy: {
        '/products': 'https://facebook.com' 
    }
  },
  
  // custom port for preview
  preview: {
    port: 2222,
    strictPort: true,
    // the open value loads our targeted proxy request inmmediately after build and we can see this change runing preview
    open: '/products',
    headers: {
      a: 'b'
    }
  } 
});
