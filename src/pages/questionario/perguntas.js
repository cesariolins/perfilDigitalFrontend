// frontend/src/pages/Questionario/perguntas.js

// Perguntas de Perfil (10 perguntas)
export const perguntasPerfil = [
  {
    id: 'idade',
    pergunta: 'Qual sua faixa etária?',
    opcoes: [
      'Menos de 13 anos',
      '13 a 17 anos',
      '18 a 24 anos',
      '25 a 34 anos',
      '35 a 44 anos',
      '45 a 59 anos',
      '60 anos ou mais'
    ]
  },
  {
    id: 'genero',
    pergunta: 'Com qual gênero você se identifica?',
    opcoes: ['Masculino', 'Feminino', 'Não-binário', 'Prefiro não informar']
  },
  {
    id: 'regiao',
    pergunta: 'Em qual região você mora?',
    opcoes: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul']
  },
  {
    id: 'localidade',
    pergunta: 'Onde você mora?',
    opcoes: ['Zona urbana', 'Zona rural']
  },
  {
    id: 'ocupacao',
    pergunta: 'Qual sua ocupação atual?',
    opcoes: [
      'Estudante',
      'Trabalhador formal',
      'Trabalhador informal',
      'Desempregado',
      'Aposentado',
      'Outro'
    ]
  },
  {
    id: 'escolaridade',
    pergunta: 'Qual seu nível de escolaridade?',
    opcoes: [
      'Ensino Fundamental incompleto',
      'Ensino Fundamental completo',
      'Ensino Médio incompleto',
      'Ensino Médio completo',
      'Ensino Superior incompleto',
      'Ensino Superior completo',
      'Pós-graduação'
    ]
  },
  {
    id: 'renda',
    pergunta: 'Qual a renda familiar mensal?',
    opcoes: [
      'Até 1 salário mínimo',
      '1 a 3 salários mínimos',
      '3 a 5 salários mínimos',
      '5 a 10 salários mínimos',
      'Acima de 10 salários mínimos'
    ]
  },
  {
    id: 'dispositivo',
    pergunta: 'Qual dispositivo você mais usa para acessar a internet?',
    opcoes: ['Smartphone', 'Computador/Notebook', 'Tablet', 'Outro']
  },
  {
    id: 'horario',
    pergunta: 'Em qual horário você mais usa a internet?',
    opcoes: ['Manhã', 'Tarde', 'Noite', 'Madrugada', 'O dia todo']
  },
  {
    id: 'uso_principal',
    pergunta: 'Para qual contexto você mais utiliza a internet?',
    opcoes: [
      'Trabalho',
      'Estudos',
      'Entretenimento',
      'Redes sociais',
      'Comunicação',
      'Compras',
      'Outro'
    ]
  }
]

// Perguntas do Teste de Dependência (20 perguntas com pontos)
export const perguntasQuestionario = [
  {
    id: 1,
    pergunta: 'Com que frequência você fica online mais tempo do que pretendia?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 2,
    pergunta: 'Com que frequência você negligencia tarefas domésticas para passar mais tempo online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 3,
    pergunta: 'Com que frequência você prefere a emoção da internet à intimidade com seu parceiro(a)?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 4,
    pergunta: 'Com que frequência você forma novos relacionamentos com outros usuários online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 5,
    pergunta: 'Com que frequência outras pessoas em sua vida reclamam sobre a quantidade de tempo que você passa online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 6,
    pergunta: 'Com que frequência suas notas ou desempenho escolar sofrem devido ao tempo que você passa online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 7,
    pergunta: 'Com que frequência você verifica seu e-mail ou redes sociais antes de fazer algo que precisa ser feito?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 8,
    pergunta: 'Com que frequência seu desempenho no trabalho ou produtividade sofre devido à internet?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 9,
    pergunta: 'Com que frequência você fica na defensiva ou reservado quando alguém pergunta o que você faz online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 10,
    pergunta: 'Com que frequência você bloqueia pensamentos perturbadores sobre sua vida com pensamentos reconfortantes da internet?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 11,
    pergunta: 'Com que frequência você se pega antecipando quando estará online novamente?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 12,
    pergunta: 'Com que frequência você sente que a vida sem internet seria chata, vazia e sem alegria?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 13,
    pergunta: 'Com que frequência você grita, age mal ou fica irritado se alguém o incomoda enquanto está online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 14,
    pergunta: 'Com que frequência você perde o sono ficando online até tarde?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 15,
    pergunta: 'Com que frequência você se sente preocupado com a internet quando está offline?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 16,
    pergunta: 'Com que frequência você se pega dizendo "só mais alguns minutos" quando está online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 17,
    pergunta: 'Com que frequência você tenta reduzir o tempo gasto online e falha?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 18,
    pergunta: 'Com que frequência você tenta esconder quanto tempo ficou online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 19,
    pergunta: 'Com que frequência você escolhe passar mais tempo online ao invés de sair com outras pessoas?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  },
  {
    id: 20,
    pergunta: 'Com que frequência você se sente deprimido, mal-humorado ou nervoso quando está offline, e isso desaparece quando você volta online?',
    opcoes: [
      { texto: 'Raramente', pontos: 5 },
      { texto: 'Ocasionalmente', pontos: 4 },
      { texto: 'Frequentemente', pontos: 3 },
      { texto: 'Muitas vezes', pontos: 2 },
      { texto: 'Sempre', pontos: 1 }
    ]
  }
]

// Função para calcular classificação
export function calcularClassificacao(pontuacaoTotal) {
  if (pontuacaoTotal >= 80) {
    return {
      classificacao: 'Uso saudável e equilibrado',
      cor: '#10b981',
      mensagem: 'Você mantém um bom equilíbrio no uso da internet!'
    }
  } else if (pontuacaoTotal >= 50) {
    return {
      classificacao: 'Uso moderado / controlado',
      cor: '#fbbf24',
      mensagem: 'Fique atento ao tempo online para manter o equilíbrio.'
    }
  } else if (pontuacaoTotal >= 30) {
    return {
      classificacao: 'Uso excessivo',
      cor: '#f97316',
      mensagem: 'Seu uso da internet pode estar afetando outras áreas da sua vida.'
    }
  } else {
    return {
      classificacao: 'Uso problemático / dependência severa',
      cor: '#ef4444',
      mensagem: 'Recomendamos buscar ajuda profissional.'
    }
  }
}
