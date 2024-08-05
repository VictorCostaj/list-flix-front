import api from "./api";

export type EpisodeType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
};

export type CourseType = {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  episodes?: EpisodeType[];
};

const courseService = {
    getNewestCourses: async () => {
        try {
            const response = await api.get('/courses/popular');
            return response; // Verifique se a resposta tem a estrutura correta
        } catch (error) {
            console.error("Erro ao buscar os cursos mais recentes:", error);
            throw error;
        }
    }
};

export default courseService;
