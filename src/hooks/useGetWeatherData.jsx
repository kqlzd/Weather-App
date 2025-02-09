import axios from "axios";
import { useState } from "react";
import { endpoints } from "../api/routing";
import { useToast } from "@chakra-ui/react";

export const useGetWeatherData = () => {
  const toast = useToast();
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (city) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${endpoints.GET_WEATHER_DATA(city)}`);
      setWeatherData(response);
      return response.data;
    } catch (error) {
      toast({
        title: "Xəta!",
        description: "Məlumat tapılmadı",
        status: "error",
        position: "top-right",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    fetchData,
    weatherData,
  };
};
