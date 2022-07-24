import Server, { Express } from 'express';
import cors from 'cors';
import Database from './database/index';
import IndexRoutes from './routes';

class App {
  readonly server: Express;

  constructor() {
    this.server = Server();
    this.middlewares();
    this.routes();
  }

  static async Starting() {
    const app: App = new App();
    await Database.connect();

    return app.server;
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(Server.json());
    this.server.use(Server.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.server.use('/api', IndexRoutes.routes());
  }
}

export default App;
