import { createRequestListener } from "@react-router/node";
import { createReadStream, stat } from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDir = path.join(__dirname, "build/client");

// Handler de React Router
const serverBuild = await import("./build/server/index.js");
const reactRouterHandler = createRequestListener({
  build: serverBuild,
});

// Servidor custom que sirve estáticos PRIMERO
const server = createServer(async (req, res) => {
  // Intentar servir archivo estático
  const filePath = path.join(clientDir, req.url || "/");
  
  stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      // Es un archivo, servirlo
      const ext = path.extname(filePath);
      const contentTypes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.ico': 'image/x-icon'
      };
      
      res.setHeader('Content-Type', contentTypes[ext] || 'application/octet-stream');
      res.setHeader('Cache-Control', 'public, max-age=31536000');
      createReadStream(filePath).pipe(res);
    } else {
      // No es un archivo, pasar a React Router
      reactRouterHandler(req, res);
    }
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});
