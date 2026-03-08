import ReactPlayer from 'react-player';

const DEFAULT_VIDEO_URL = 'https://www.youtube.com/watch?v=ysz5S6PUM-U';

export default function VideoPlayer({ videoUrl = DEFAULT_VIDEO_URL, title = 'Lecon video' }) {
  return (
    <div className="rounded-2xl overflow-hidden border-4 border-gray-200 bg-white w-full max-w-md mx-auto">
      <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
        <ReactPlayer src={videoUrl} controls width="100%" height="100%" aria-label={title} />
      </div>
    </div>
  );
}
