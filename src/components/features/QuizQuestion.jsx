import { CheckCircle, XCircle } from 'lucide-react';
import Badge from '../ui/Badge';

export default function QuizQuestion({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  selectedAnswer,
  showFeedback
}) {
  const baseOptionStyles =
    'w-full text-left rounded-2xl border-2 px-5 py-4 text-sm font-bold transition-all disabled:cursor-not-allowed';

  return (
    <div className="w-full">
      {/* Badge avec numéro de question */}
      <Badge showIndicator={true}>
        Question {questionIndex + 1} sur {totalQuestions}
      </Badge>

      {/* Barre de progression */}
      <div className="mb-8 h-1.5 w-full rounded-full bg-red-100 overflow-hidden">
        <div
          className="h-full bg-red-900 transition-all duration-500"
          style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-zinc-900 leading-tight sm:text-3xl">
        {question.question}
      </h2>

      {/* Options de réponses */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = option.isCorrect;

          let buttonStyles =
            'border-gray-200 border-b-4 border-b-gray-300 bg-white text-zinc-900 active:border-b-0 active:translate-y-1';

          if (showFeedback) {
            if (isSelected) {
              buttonStyles = isCorrect
                ? 'border-green-300 border-b-4 border-b-green-500 bg-green-100 text-green-900'
                : 'border-red-300 border-b-4 border-b-red-500 bg-red-100 text-red-900';
            } else {
              buttonStyles = 'bg-gray-100 text-gray-400 border-gray-200 border-b-4 border-b-gray-200';
            }
          }

          return (
            <button
              key={index}
              onClick={() => onAnswer(option, index)}
              disabled={showFeedback}
              className={`${baseOptionStyles} ${buttonStyles}`}
            >
              <div className="flex items-center justify-between">
                <span>{option.text}</span>
                {showFeedback && isSelected && (
                  isCorrect ? (
                    <CheckCircle className="text-green-600 shrink-0" size={20} strokeWidth={2} />
                  ) : (
                    <XCircle className="text-red-600 shrink-0" size={20} strokeWidth={2} />
                  )
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
