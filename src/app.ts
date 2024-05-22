import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/students', StudentRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//console.log(process.cwd());
// F:\next_level_2\mongoose-learn/.env

export default app;
