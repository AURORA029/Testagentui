import { Trophy, Award, Target } from 'lucide-react';
import Button from '../ui/Button';
import { quizConfig } from '../../data/quizData';

export default function QuizResult({ score, totalQuestions, onRestart, onFinishModule = () => {} }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassing = score >= quizConfig.passingScore;

  return (
    <div className="w-full max-w-2xl text-center">
      {/* Icône de résultat */}
      <div className="mb-8 flex justify-center">
        {isPassing ? (
          <div className="rounded-3xl border-4 border-red-700 bg-red-600 p-6">
            <Trophy className="text-white" size={48} strokeWidth={1.5} />
          </div>
        ) : (
          <div className="rounded-3xl border-4 border-gray-300 bg-gray-200 p-6">
            <Target className="text-zinc-600" size={48} strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Titre */}
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
        {isPassing ? 'Félicitations !' : 'Continuez vos efforts !'}
      </h2>

      {/* Message */}
      <p className="mx-auto mb-8 max-w-md text-base font-medium text-zinc-500">
        {isPassing 
          ? "Vous avez demontre une excellente maitrise de la rhetorique et de l'art oratoire."
          : "La rhetorique demande de la pratique. Reessayez pour ameliorer votre score."
        }
      </p>

      {/* Score */}
      <div className="mb-10 rounded-3xl border-2 border-gray-200 bg-white p-8">
        <div className="flex items-center justify-center gap-8">
          <div>
            <p className="mb-1 text-sm font-bold text-zinc-500">Votre score</p>
            <p className="text-5xl font-extrabold tracking-tight text-red-600">{score}/{totalQuestions}</p>
          </div>
          <div className="h-16 w-0.5 bg-gray-200" />
          <div>
            <p className="mb-1 text-sm font-bold text-zinc-500">Pourcentage</p>
            <p className="text-5xl font-extrabold tracking-tight text-red-600">{percentage}%</p>
          </div>
        </div>
      </div>

      {/* Badge de réussite */}
      {isPassing && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border-2 border-red-200 bg-red-50 px-5 py-2">
          <Award className="text-red-600" size={16} strokeWidth={2} />
          <span className="text-sm font-extrabold text-red-600">
            Module validé avec succès
          </span>
        </div>
      )}

      {/* Boutons d'action */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="primary" onClick={onRestart}>
          Recommencer le quiz
        </Button>
        <Button variant="secondary" onClick={onFinishModule}>
          Terminer le module
        </Button>
      </div>
    </div>
  );
}
