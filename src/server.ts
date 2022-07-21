import 'reflect-metadata'
import 'dotenv/config'
import App from './App';


const Server: Function = async (): Promise<void> => {
  const app = await App.Starting();
  const Port:string = process.env.PORT;

  app.listen(Port, () => console
    .info(`online application at -> http://localhost:/${Port}`));
};

Server();