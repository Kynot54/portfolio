import { defineConfig } from 'vite'
import cspPlugin from "vite-plugin-csp"
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ cspPlugin({
    policy: {
      'default-src': "'self'",
      'base-uri': "'self'",
      'object-src': "'none'",
      'script-src': ["'self'"],
      'style-src': ["'self'", "fonts.googleapis.com", `unsafe-inline`],
      'font-src': ["fonts.gstatic.com"],
      'img-src': ["'self'", "data:", "www.w3.org/2000/svg"]
    },
    hashInlineScripts: true
  }), react()],
})
