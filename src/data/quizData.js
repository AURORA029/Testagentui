// Donnees du Quiz sur le Kabary malgache (Rhetorique et art oratoire traditionnel)
export const quizQuestions = [
  {
    id: 1,
    question: "Qu'est-ce que le 'Kabary' dans la tradition malgache ?",
    options: [
      { text: "Un type de danse traditionnelle", isCorrect: false },
      { text: "Un art rhetorique et oratoire utilisant des metaphores et proverbes", isCorrect: true },
      { text: "Un instrument de musique à percussion", isCorrect: false },
      { text: "Une cérémonie religieuse", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Quel est le rôle principal du 'Mpikabary' lors d'une cérémonie traditionnelle ?",
    options: [
      { text: "Divertir l'assemblée avec des chants", isCorrect: false },
      { text: "Servir les repas aux invités", isCorrect: false },
      { text: "Porter la parole et négocier au nom d'un groupe", isCorrect: true },
      { text: "Organiser les décorations", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "Dans le Kabary, que signifie l'expression 'Miala tsiny, mifidy baraka' ?",
    options: [
      { text: "Demander pardon et solliciter la bénédiction", isCorrect: true },
      { text: "Proposer un toast à l'assemblée", isCorrect: false },
      { text: "Conclure un mariage", isCorrect: false },
      { text: "Présenter les invités d'honneur", isCorrect: false }
    ]
  }
];

// Configuration du Quiz
export const quizConfig = {
  passingScore: 2, // Score minimum pour réussir (sur 3)
  title: "Quiz : Maitrise de la Rhetorique et de l'Art Oratoire"
};
