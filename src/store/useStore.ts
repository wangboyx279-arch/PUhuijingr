import { create } from 'zustand';

interface AppState {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  quizAnswers: number[];
  setQuizAnswer: (index: number, answer: number) => void;
  resetQuiz: () => void;
  articleLikes: Record<string, number>;
  likeArticle: (articleId: string) => void;
}

export const useStore = create<AppState>((set, _get) => ({
  currentPage: 'home',
  setCurrentPage: (page) => set({ currentPage: page }),
  
  quizAnswers: [],
  setQuizAnswer: (index, answer) => set((state) => {
    const newAnswers = [...state.quizAnswers];
    newAnswers[index] = answer;
    return { quizAnswers: newAnswers };
  }),
  resetQuiz: () => set({ quizAnswers: [] }),
  
  articleLikes: {},
  likeArticle: (articleId) => set((state) => ({
    articleLikes: {
      ...state.articleLikes,
      [articleId]: (state.articleLikes[articleId] || 0) + 1,
    },
  })),
}));
