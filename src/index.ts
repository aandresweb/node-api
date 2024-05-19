import { healthcheckRoutes } from "./routes";
import Server from "./server";

const server = new Server();

server.run();

server.addRoutes("/api/healthcheck", healthcheckRoutes);
