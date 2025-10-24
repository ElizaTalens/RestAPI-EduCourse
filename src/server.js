import app from './app.js';

const port = Number(process.env.PORT || 3000);
const server = app.listen(port, () => {
  console.log(`[OK] EduCourse API running at http://localhost:${port}`);
});

server.on('error', (err) => {
  console.error('[Server Error]', err);
  process.exit(1);
});
