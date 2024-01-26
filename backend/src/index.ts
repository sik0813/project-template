import express from 'express';
import cors from 'cors';
import tempRoute from './routes/temp.ts';

export const app = express();
const port = 5000;

//
// Enables JSON in the request body.
//
app.use(express.json());

//
// Enables cross origin resource sharing so the frontend can us this REST API.
//
app.use(cors());

app.use('/temp', tempRoute);

app.listen(port, () => {
  console.log(`backend app listening on port ${port}`);
});
