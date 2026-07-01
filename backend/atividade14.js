const express = require('express');
const app = express();

// Permite que o servidor entenda dados enviados no formato JSON
app.use(express.json());

// 1. Rota POST para receber um aviso
app.post('/avisos', (req, res) => {
  const novoAviso = req.body;
  res.status(201).json({
    mensagem: 'Aviso recebido com sucesso!',
    dados: novoAviso
  });
});

// 2. Rota POST para receber uma tarefa
app.post('/tarefas', (req, res) => {
  const novaTarefa = req.body;
  res.status(201).json({
    mensagem: 'Tarefa recebida com sucesso!',
    dados: novaTarefa
  });
});

// 3. Rota POST para receber um usuário
app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  res.status(201).json({
    mensagem: 'Usuário recebido com sucesso!',
    dados: novoUsuario
  });
});

// 4. Rota POST para receber uma reserva
app.post('/reservas', (req, res) => {
  const novaReserva = req.body;
  res.status(201).json({
    mensagem: 'Reserva recebida com sucesso!',
    dados: novaReserva
  });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});