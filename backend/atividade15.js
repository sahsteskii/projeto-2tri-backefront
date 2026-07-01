const express = require('express');
const app = express();
app.use(express.json());

// Listas de dados (Exercícios 1 e 2)
let usuarios = [{ id: 1, nome: 'Ana' }];
let tarefas = [{ id: 1, descricao: 'Estudar' }];

// --- CRUD DE USUÁRIOS ---

// Criar (POST)
app.post('/usuarios', (req, res) => {
  const novo = { id: usuarios.length + 1, nome: req.body.nome };
  usuarios.push(novo);
  res.status(201).json(novo);
});

// Listar todos (GET - Exercício 5)
app.get('/usuarios', (req, res) => res.json(usuarios));

// Buscar por ID (GET - Exercício 5)
app.get('/usuarios/:id', (req, res) => {
  const item = usuarios.find(u => u.id === Number(req.params.id));
  res.json(item || { mensagem: 'Não encontrado' });
});

// Atualizar Nome (PUT - Exercício 3)
app.put('/usuarios/:id', (req, res) => {
  const item = usuarios.find(u => u.id === Number(req.params.id));
  if (item) item.nome = req.body.nome;
  res.json(item || { mensagem: 'Não encontrado' });
});

// Excluir por ID (DELETE - Exercício 4)
app.delete('/usuarios/:id', (req, res) => {
  usuarios = usuarios.filter(u => u.id !== Number(req.params.id));
  res.json({ mensagem: 'Removido' });
});

// --- CRUD DE TAREFAS ---

// Criar (POST)
app.post('/tarefas', (req, res) => {
  const nova = { id: tarefas.length + 1, descricao: req.body.descricao };
  tarefas.push(nova);
  res.status(201).json(nova);
});

// Listar todas (GET)
app.get('/tarefas', (req, res) => res.json(tarefas));

// Excluir por ID (DELETE - Exercício 4)
app.delete('/tarefas/:id', (req, res) => {
  tarefas = tarefas.filter(t => t.id !== Number(req.params.id));
  res.json({ mensagem: 'Removido' });
});

app.listen(3000);