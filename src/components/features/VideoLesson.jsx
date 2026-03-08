import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { learningModules } from '../../data/moduleData';
import { useUserStore } from '../../store/useUserStore';
import Button from '../ui/Button';
import VideoPlayer from '../ui/VideoPlayer';
import LessonText from './LessonText';

const DEFAULT_LESSON_VIDEO = 'https://www.youtube.com/watch?v=ysz5S6PUM-U';
const DEFAULT_LESSON_TEXT =
  "La rhetorique repose sur une idee forte, une argumentation claire et un ton adapte a l'audience.";
const LESSON_XP_REWARD = 15;

export default function VideoLesson() {
  const navigate = useNavigate();
  const { moduleId } = useParams();

  const completeLesson = useUserStore((state) => state.completeLesson);
  const unlockedModules = useUserStore((state) => state.unlockedModules);

  const numericModuleId = useMemo(() => Number(moduleId), [moduleId]);
  const lessonModule = useMemo(
    () => learningModules.find((module) => module.id === numericModuleId),
    [numericModuleId]
  );

  if (Number.isNaN(numericModuleId) || !lessonModule || !unlockedModules.includes(numericModuleId)) {
    return <Navigate to="/parcours" replace />;
  }

  const lessonVideoUrl = lessonModule.lessonVideoUrl || DEFAULT_LESSON_VIDEO;
  const lessonText = lessonModule.lessonText || DEFAULT_LESSON_TEXT;

  const handleCompleteLesson = () => {
    completeLesson(numericModuleId, LESSON_XP_REWARD);
    navigate(`/quiz/${numericModuleId}`);
  };

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border-2 border-gray-200 bg-white p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-red-600">Lecon du niveau</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900">{lessonModule.title}</h2>
        <p className="mt-2 text-sm font-medium text-zinc-500">
          Commencez par le cours texte puis regardez la video avant de lancer le quiz.
        </p>
      </div>

      <LessonText content={lessonText} />

      <VideoPlayer videoUrl={lessonVideoUrl} title={lessonModule.title} />

      <Button
        onClick={handleCompleteLesson}
        className="mx-auto flex w-full max-w-md justify-center rounded-2xl border-b-4 border-red-800 bg-red-600 py-4 text-base active:translate-y-1 active:border-b-0"
      >
        Passer au Quiz
      </Button>
    </section>
  );
}
