import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  Button,
  Box,
} from "@chakra-ui/react";
import { useGetWeatherData } from "../../hooks/useGetWeatherData";
import { useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import { DarkModes } from "../../components/DarkMode/DarkModes";
import { useGetWeatherDataEstimation } from "../../hooks/useGetWeatherDataEstimation";
import { ForecastCards } from "../../components/ForecastCards/ForecastCards";

export const HomePage = () => {
  const {
    isLoading: buttonLoading,
    fetchData,
    weatherData,
  } = useGetWeatherData();
  const [city, setCity] = useState();

  const { fetchDataEstimation, estimationData } = useGetWeatherDataEstimation();

  const bg = useColorModeValue("blue.100", "orange.800");
  const textColor = useColorModeValue("blue.600", "black");

  const handleClickSearch = async () => {
    await fetchData(city);
    await fetchDataEstimation(city);
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient={`linear(to-b, ${bg}, white)`}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={5}
    >
      <Heading
        as="h1"
        size="2xl"
        color={textColor}
        mb={8}
        textAlign="center"
        w="100%"
      >
        Hava Proqnozu
      </Heading>
      <DarkModes />

      <Box width="100%" maxWidth="600px" mb={8}>
        <Box mb={4}>
          <FormControl width="100%" color="black">
            <FormLabel>Ölkə və ya şəhər</FormLabel>
            <Input
              borderColor="black"
              placeholder="Ölkə daxil edin"
              width="100%"
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
        </Box>

        <Button
          colorScheme="blue"
          isLoading={buttonLoading}
          onClick={handleClickSearch}
          size="lg"
          width="100%"
        >
          Axtar
        </Button>
      </Box>

      <Box
        width="100%"
        maxWidth="900px"
        mt={8}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        {weatherData && <Cards weatherData={weatherData} />}
        {estimationData && estimationData.data?.list?.length > 0 && (
          <>
            <Heading
              as="h3"
              size="2xl"
              color={textColor}
              textAlign="center"
              w="100%"
              mt="5"
            >
              5 günlük hava təxmini
            </Heading>

            <Box display="flex" flexDirection="row" mt={5}>
              <ForecastCards estimationData={estimationData} />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
