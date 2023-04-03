import { axios_hostel } from "@/axios.config";

export const useFetch = (endpoint: string) => {
  try {
    axios_hostel.get(endpoint).then((response) => {
      return response.data;
    });
  } catch (error) {
    return console.log(error);
  }

  return "Hello";
};

export default useFetch;
