import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { endpoints } from "../api/routing";

export const useGetWeatherDataEstimation = () => {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState();
  const [estimationData, setEstimationData] = useState(false);

  const fetchDataEstimation = async (city) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${endpoints.GET_WEATHER_DATA_ESTIMATION(city)}`
      );
      setEstimationData(response);
      return response;
    } catch (error) {
      toast({
        title: "Error",
        description: "xeta",
        status: "error",
        position: "top-right",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return {
    fetchDataEstimation,
    isLoading,
    estimationData,
  };
};
