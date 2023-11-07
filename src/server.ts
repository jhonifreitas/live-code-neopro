import app from './app';

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`API Iniciada: ouvindo na porta ${port}`);
});

export default app;
