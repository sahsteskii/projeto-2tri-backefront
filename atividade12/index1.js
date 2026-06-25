const express = require('express');
const app = express();

const usuarios = ['Carlos', 'Ana', 'Bruno'];
const tarefas = ['Limpar a quadra', 'Organizar os coletes', 'Encher as bolas'];
const reservas = ['Reserva da Quadra 1', 'Reserva da Quadra 2'];
const turmas = ['2º Ano A', '2º Ano B', '3º Ano A'];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.get('/reservas', (req, res) => {
  res.json(reservas);
});


app.get('/turmas', (req, res) => {
  res.json(turmas);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});