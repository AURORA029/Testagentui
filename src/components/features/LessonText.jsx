export default function LessonText({ content }) {
  return (
    <article className="rounded-3xl border-2 border-gray-200 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-red-600">Cours Texte</p>
      <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-700">{content}</p>
    </article>
  );
}
