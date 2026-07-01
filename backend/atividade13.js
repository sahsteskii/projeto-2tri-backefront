// 1. Crie um mock com três usuários da escola.
const usuariosEscola = [
    { id: 1, nome: 'Mariana', cargo: 'Aluna' },
    { id: 2, nome: 'Marcos', cargo: 'Professor' },
    { id: 3, nome: 'Fernanda', cargo: 'Diretora' }
  ];
  
  // 2. Crie um mock com quatro avisos.
  const avisosMural = [
    { id: 1, titulo: 'Reunião de Pais', data: '10/04' },
    { id: 2, titulo: 'Feira de Ciências', data: '18/05' },
    { id: 3, titulo: 'Feriado Escolar', data: '01/05' },
    { id: 4, titulo: 'Entrega de Notas', data: '30/06' }
  ];
  
  // 3. Crie um mock com três tarefas.
  const tarefasAlunos = [
    { id: 1, materia: 'Matemática', descricao: 'Exercícios de fração' },
    { id: 2, materia: 'História', descricao: 'Resumo sobre o Brasil Colônia' },
    { id: 3, materia: 'Biologia', descricao: 'Desenho da célula' }
  ];
  
  // 4. Crie um mock com duas reservas de sala.
  const reservasSalas = [
    { id: 1, sala: 'Laboratório de Informática', horario: '08:00' },
    { id: 2, sala: 'Sala de Vídeo', horario: '10:30' }
  ];
  
  // 5. Mostre os dados criados usando console.log.
  console.log("--- USUÁRIOS ---");
  console.log(usuariosEscola);
  
  console.log("--- AVISOS ---");
  console.log(avisosMural);
  
  console.log("--- TAREFAS ---");
  console.log(tarefasAlunos);
  
  console.log("--- RESERVAS DE SALA ---");
  console.log(reservasSalas);