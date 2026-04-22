import { create } from 'zustand';
import type { UserProgress, ChatMessage } from '@/types';
import { defaultUserProgress } from '@/constants/mockData';

function loadProgress(): UserProgress {
  try {
    const saved = localStorage.getItem('aedu-progress');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Validate structure
      if (parsed && Array.isArray(parsed.lessonsCompleted) && typeof parsed.quizScores === 'object') {
        return parsed;
      }
    }
  } catch {
    // ignore parse errors
  }
  return { ...defaultUserProgress };
}

function saveProgress(p: UserProgress) {
  localStorage.setItem('aedu-progress', JSON.stringify(p));
}

interface UserStore {
  userName: string;
  grade: string;
  progress: UserProgress;
  chatHistory: ChatMessage[];
  setUserName: (name: string) => void;
  setGrade: (grade: string) => void;
  completeLesson: (lessonId: string) => void;
  saveQuizScore: (lessonId: string, score: number) => void;
  addXP: (amount: number) => void;
  addChatMessage: (msg: ChatMessage) => void;
  clearChat: () => void;
  resetProgress: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userName: localStorage.getItem('aedu-username') || 'Öğrenci',
  grade: localStorage.getItem('aedu-grade') || '8. Sınıf',
  progress: loadProgress(),
  chatHistory: (() => {
    try {
      return JSON.parse(localStorage.getItem('aedu-chat') || '[]');
    } catch {
      return [];
    }
  })(),

  setUserName: (name) => {
    localStorage.setItem('aedu-username', name);
    set({ userName: name });
  },

  setGrade: (grade) => {
    localStorage.setItem('aedu-grade', grade);
    set({ grade });
  },

  completeLesson: (lessonId) =>
    set((state) => {
      if (state.progress.lessonsCompleted.includes(lessonId)) {
        return state;
      }
      const updated: UserProgress = {
        ...state.progress,
        lessonsCompleted: [...state.progress.lessonsCompleted, lessonId],
        totalMinutes: state.progress.totalMinutes + 20,
        xp: state.progress.xp + 50,
        level: Math.floor((state.progress.xp + 50) / 500) + 1,
      };
      saveProgress(updated);
      return { progress: updated };
    }),

  saveQuizScore: (lessonId, score) =>
    set((state) => {
      const xpGain = Math.round(score / 10) * 5;
      const updated: UserProgress = {
        ...state.progress,
        quizScores: { ...state.progress.quizScores, [lessonId]: score },
        xp: state.progress.xp + xpGain,
        level: Math.floor((state.progress.xp + xpGain) / 500) + 1,
      };
      saveProgress(updated);
      return { progress: updated };
    }),

  addXP: (amount) =>
    set((state) => {
      const newXP = state.progress.xp + amount;
      const newLevel = Math.floor(newXP / 500) + 1;
      const updated = { ...state.progress, xp: newXP, level: newLevel };
      saveProgress(updated);
      return { progress: updated };
    }),

  addChatMessage: (msg) =>
    set((state) => {
      const updated = [...state.chatHistory, msg];
      localStorage.setItem('aedu-chat', JSON.stringify(updated));
      return { chatHistory: updated };
    }),

  clearChat: () => {
    localStorage.removeItem('aedu-chat');
    set({ chatHistory: [] });
  },

  resetProgress: () => {
    const fresh = { ...defaultUserProgress };
    saveProgress(fresh);
    set({ progress: fresh });
  },
}));
