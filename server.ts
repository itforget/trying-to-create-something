import app from "./src/app";

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor executando em porta: ${porta}`);
});