export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  lessonsCount: number;
  progress: number;
  image: string;
}

export interface Lesson {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  videoUrl: string;
  youtubeId: string;
  thumbnailUrl: string;
  duration: string;
  order: number;
  completed: boolean;
}

export interface QuizQuestion {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UserProgress {
  lessonsCompleted: string[];
  quizScores: Record<string, number>;
  streak: number;
  totalMinutes: number;
  xp: number;
  level: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: number;
}
