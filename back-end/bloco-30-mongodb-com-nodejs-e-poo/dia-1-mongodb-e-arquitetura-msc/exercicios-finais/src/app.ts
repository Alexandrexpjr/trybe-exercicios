import express from 'express';
import CupRoute from './routes/CupRoute';
import createConnection from './models/connection';

class App {
  public express: express.Application;


  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();

    createConnection();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use('/cups', CupRoute);
  }
}

export default App;