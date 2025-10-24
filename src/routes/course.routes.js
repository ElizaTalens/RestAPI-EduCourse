// src/routes/course.routes.js
import { Router } from 'express';
import * as c from '../controllers/course.controller.js';

const router = Router();

router.get('/course', c.list);
router.get('/course/:id', c.detail);
router.post('/course', c.create);
router.patch('/course/:id', c.update);
router.put('/course/:id', c.update);
router.delete('/course/:id', c.remove);

export default router; // <— penting: default export
