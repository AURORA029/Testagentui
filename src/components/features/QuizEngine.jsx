import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuiz } from '../../hooks/useQuiz';
import { useUserStore } from '../../store/useUserStore';
import { learningModules } from '../../data/moduleData';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import Button from '../ui/Button';

export default function QuizEngine() {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const numericModuleId = useMemo(() => Number(moduleId), [moduleId]);
  const availableModuleIds = useMemo(() => learningModules.map((module) => module.id), []);
  const nextModuleId = useMemo(() => {
    const currentModuleIndex = availableModuleIds.indexOf(numericModuleId);

    if (currentModuleIndex < 0 || currentModuleIndex >= availableModuleIds.length - 1) {
      return null;
    }

    return availableModuleIds[currentModuleIndex + 1];
  }, [availableModuleIds, numericModuleId]);

  const addXp = useUserStore((state) => state.addXp);
  const unlockModule = useUserStore((state) => state.unlockModule);
  const unlockedModules = useUserStore((state) => state.unlockedModules);
  const [rewardGranted, setRewardGranted] = useState(false);

  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
    isFinished,
    selectedAnswer,
    showFeedback,
    handleAnswer,
    restartQuiz
  } = useQuiz();

  useEffect(() => {
    if (!isFinished || rewardGranted) {
      return;
    }

    addXp(50);

    if (nextModuleId) {
      unlockModule(nextModuleId);
    }

    setRewardGranted(true);
  }, [addXp, isFinished, nextModuleId, rewardGranted, unlockModule]);

  const handleRestart = () => {
    setRewardGranted(false);
    restartQuiz();
  };

  const handleFinishModule = () => {
    navigate('/parcours');
  };

  if (Number.isNaN(numericModuleId) || !availableModuleIds.includes(numericModuleId)) {
    return (
      <section className="rounded-2xl border border-red-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-zinc-900">Module introuvable</h2>
        <p className="mt-2 text-sm text-zinc-500">Le module demande n'existe pas.</p>
        <Button className="mt-4" onClick={handleFinishModule}>
          Retour au parcours
        </Button>
      </section>
    );
  }

  if (!unlockedModules.includes(numericModuleId)) {
    return (
      <section className="rounded-2xl border border-red-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-zinc-900">Module verrouille</h2>
        <p className="mt-2 text-sm text-zinc-500">Terminez d'abord les modules precedents pour y acceder.</p>
        <Button className="mt-4" onClick={handleFinishModule}>
          Retour au parcours
        </Button>
      </section>
    );
  }

  if (isFinished) {
    return (
      <QuizResult
        score={score}
        totalQuestions={totalQuestions}
        onRestart={handleRestart}
        onFinishModule={handleFinishModule}
      />
    );
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      questionIndex={currentQuestionIndex}
      totalQuestions={totalQuestions}
      onAnswer={handleAnswer}
      selectedAnswer={selectedAnswer}
      showFeedback={showFeedback}
    />
  );
}
