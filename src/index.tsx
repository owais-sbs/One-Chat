import { serve } from "bun";

const DEFAULT_PORTS = [3000, 3001, 3002, 3003, 3004];

async function startServer() {
  for (const port of DEFAULT_PORTS) {
    try {
      const server = serve({
        port,
        routes: {
          "/*": index,

          "/api/hello": {
            async GET(req) {
              return Response.json({
                message: "Hello, world!",
                method: "GET",
              });
            },
            async PUT(req) {
              return Response.json({
                message: "Hello, world!",
                method: "PUT",
              });
            },
          },

          "/api/hello/:name": async (req) => {
            const name = req.params.name;
            return Response.json({
              message: `Hello, ${name}!`,
            });
          },
        },

        development: process.env.NODE_ENV !== "production",
      });

      console.log(`🚀 Server running at ${server.url}`);
      return server;
    } catch (error: any) {
      if (error.code === "EADDRINUSE") {
        console.log(`Port ${port} is busy, trying next port...`);
        continue;
      }
      throw error;
    }
  }

  console.error("No available ports found!");
  process.exit(1);
}

import index from "./index.html";

startServer();
