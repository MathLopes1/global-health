import Mongoose from "mongoose";

class Database {
    constructor() {
        this.connect();
    }

      public async connect(): Promise< typeof Mongoose | void > {
    try {
      console.log('connected to database');
      const db: string = process.env.DATABASE_URL;
      const connected: typeof Mongoose = await Mongoose.connect(db);
      return connected;
    } catch (error) {
      return console.log(error);
    }
  }
}

export default new Database()