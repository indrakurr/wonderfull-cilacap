import axios, { AxiosError } from "axios";

const APIURL = "https://653b3f582e42fd0d54d4d7d9.mockapi.io/destination";

export const APIDestination = {
  //GET all destination
  getDestination: async () => {
    try {
      const result = await axios.get(`${APIURL}/destination`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //GET destination by ID
  getDestinationById: async (id) => {
    try {
      const result = await axios.get(`${APIURL}/destination/${id}`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //POST destination or create new destination
  postDestination: async (data) => {
    try {
      const result = await axios.post(`${APIURL}/destination`, data);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //DELETE destination
  deleteDestination: async (id) => {
    try {
      const result = await axios.delete(`${APIURL}/destination/${id}`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //UPDATE or EDIT destination
  updateDestination: async (id, data) => {
    try {
      const result = await axios.put(`${APIURL}/destination/${id}`, data);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },
};
