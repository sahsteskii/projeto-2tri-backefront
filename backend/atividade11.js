const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema');
});


app.get('/sobre', (req, res) => {
  res.send('Descrição do projeto de agendamento de quadra');
});


app.get('/equipe', (req, res) => {
  res.send('Mensagem sobre o grupo do projeto');
});


app.get('/contato', (req, res) => {
  res.send('Entre em contato com a coordenação');
});

app.get('/projeto', (req, res) => {
  res.send('Informações adicionais do projeto');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});