import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Set to '0.0.0.0' to listen on all available network interfaces
    port: 3000, // Set to the desired port number
  },
});
