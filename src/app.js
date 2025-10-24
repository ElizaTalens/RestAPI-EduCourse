import 'dotenv/config';
import express from 'express';
import courseRoutes from './routes/course.routes.js';

const app = express();
app.use(express.json());
app.use('/api', courseRoutes);

app.get('/', (req, res) => res.json({ ok: true, app: 'EduCourse API' }));

export default app; 
