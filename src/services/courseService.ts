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
      const response = await api.get("/courses/popular");
      return response; // Verifique se a resposta tem a estrutura correta
    } catch (error) {
      console.error("Erro ao buscar os cursos mais recentes:", error);
      throw error;
    }
  },
  // getFeaturedCourses: async () => {
  //   const token = sessionStorage.getItem("flixlist-token");
  //   const res = await api
  //     .get("/courses/featured", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.message);
  //       return error.response;
  //     });

  //   return res;
  // },

  getFeaturedCourses: async () => {
    const token = sessionStorage.getItem("flixlist-token");

    const res = await api
      .get("/courses/featured", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        console.log(error.response.data.message);

        return error.response;
      });

    return res;
  },
};

export default courseService;
