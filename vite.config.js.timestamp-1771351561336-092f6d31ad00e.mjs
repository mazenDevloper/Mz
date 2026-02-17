// vite.config.js
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///home/project/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
import safeParser from "file:///home/project/node_modules/postcss-safe-parser/lib/safe-parse.js";
import { fileURLToPath } from "url";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///home/project/vite.config.js";
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: true
  },
  resolve: {
    alias: {
      "@": "/src",
      "@utils": path.resolve(__dirname, "src/utils"),
      "@content": path.resolve(__dirname, "src/content"),
      "@tailwind": path.resolve(__dirname, "src/tailwind"),
      "@ts-default": path.resolve(__dirname, "src/ts-default"),
      "@ts-tailwind": path.resolve(__dirname, "src/ts-tailwind"),
      "react-virtualized": "react-virtualized/dist/commonjs"
    }
  },
  css: {
    postcss: {
      parser: safeParser
    }
  },
  assetsInclude: ["**/*.glb"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHNhZmVQYXJzZXIgZnJvbSAncG9zdGNzcy1zYWZlLXBhcnNlcic7XG5cbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmNvbnN0IF9fZGlybmFtZSA9IHBhdGguZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdGFpbHdpbmRjc3MoKV0sXG4gIHNlcnZlcjoge1xuICAgIGhtcjogdHJ1ZVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogJy9zcmMnLFxuICAgICAgJ0B1dGlscyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdXRpbHMnKSxcbiAgICAgICdAY29udGVudCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29udGVudCcpLFxuICAgICAgJ0B0YWlsd2luZCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdGFpbHdpbmQnKSxcbiAgICAgICdAdHMtZGVmYXVsdCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdHMtZGVmYXVsdCcpLFxuICAgICAgJ0B0cy10YWlsd2luZCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdHMtdGFpbHdpbmQnKSxcbiAgICAgICdyZWFjdC12aXJ0dWFsaXplZCc6ICdyZWFjdC12aXJ0dWFsaXplZC9kaXN0L2NvbW1vbmpzJ1xuICAgIH1cbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGFyc2VyOiBzYWZlUGFyc2VyXG4gICAgfVxuICB9LFxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouZ2xiJ11cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixPQUFPLFdBQVc7QUFDM08sT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBRXZCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsb0JBQW9CO0FBTnFHLElBQU0sMkNBQTJDO0FBUW5MLElBQU0sWUFBWSxLQUFLLFFBQVEsY0FBYyx3Q0FBZSxDQUFDO0FBRTdELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0FBQUEsRUFDaEMsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFVBQVUsS0FBSyxRQUFRLFdBQVcsV0FBVztBQUFBLE1BQzdDLFlBQVksS0FBSyxRQUFRLFdBQVcsYUFBYTtBQUFBLE1BQ2pELGFBQWEsS0FBSyxRQUFRLFdBQVcsY0FBYztBQUFBLE1BQ25ELGVBQWUsS0FBSyxRQUFRLFdBQVcsZ0JBQWdCO0FBQUEsTUFDdkQsZ0JBQWdCLEtBQUssUUFBUSxXQUFXLGlCQUFpQjtBQUFBLE1BQ3pELHFCQUFxQjtBQUFBLElBQ3ZCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlLENBQUMsVUFBVTtBQUM1QixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
