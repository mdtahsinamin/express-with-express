import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// parser

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

//console.log(process.cwd());
// F:\next_level_2\mongoose-learn/.env

export default app
