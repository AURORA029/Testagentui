import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './components/features/Dashboard';
import Home from './components/features/Home';
import Onboarding from './components/features/Onboarding';
import Profile from './components/features/Profile';
import QuizEngine from './components/features/QuizEngine';
import VideoLesson from './components/features/VideoLesson';
import AppLayout from './components/layout/AppLayout';
import { useUserStore } from './store/useUserStore';

function RootRoute() {
  const hasSeenOnboarding = useUserStore((state) => state.hasSeenOnboarding);

  if (!hasSeenOnboarding) {
    return <Onboarding />;
  }

  return <AppLayout />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />}>
        <Route index element={<Home />} />
        <Route path="parcours" element={<Dashboard />} />
        <Route path="profil" element={<Profile />} />
        <Route path="lesson/:moduleId" element={<VideoLesson />} />
        <Route path="quiz/:moduleId" element={<QuizEngine />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
