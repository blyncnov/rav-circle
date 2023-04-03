import { axios_rav } from "@/axios.config";

export const useFetch = (endpoint: string) => {
  try {
    axios_rav.get(endpoint).then((response) => {
      return response.data;
    });
  } catch (error) {
    return console.log(error);
  }

  return "Hello";
};

export default useFetch;
