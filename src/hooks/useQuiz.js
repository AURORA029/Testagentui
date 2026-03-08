import { useState } from 'react';
import { quizQuestions } from '../data/quizData';

export function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswer = (option, index) => {
    if (showFeedback) return; // Empêche de cliquer plusieurs fois

    setSelectedAnswer(index);
    setShowFeedback(true);

    // Mise à jour du score si réponse correcte
    if (option.isCorrect) {
      setScore(score + 1);
    }

    // Passage à la question suivante ou fin du quiz après 1.5s
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
    isFinished,
    selectedAnswer,
    showFeedback,
    progress,
    handleAnswer,
    restartQuiz
  };
}
