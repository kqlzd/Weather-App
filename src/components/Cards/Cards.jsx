import { Card, CardBody, Text, Image, Flex } from "@chakra-ui/react";

export const Cards = ({ weatherData }) => {
  const weatherIcon = weatherData?.data?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <>
      {weatherData && (
        <Card
          width="350px"
          mt="20px"
          borderRadius="15px"
          bgGradient="linear(to-r, blue.400, purple.500)"
          shadow="lg"
          p="5"
        >
          <CardBody color="white" textAlign="center">
            <Flex justify="center">
              <Image src={iconUrl} alt="Weather Icon" boxSize="80px" mb="4" />
            </Flex>

            <Text fontSize="xl" fontWeight="bold">
              {weatherData?.data?.name} -{" "}
              {weatherData?.data?.weather[0]?.description}
            </Text>

            <Text fontSize="md" mt="2">
              🌫️ Nəmişlik: {weatherData?.data?.main?.humidity}%
            </Text>

            <Text fontSize="md" mt="2">
              💨 Küləyin sürəti: {weatherData?.data?.wind?.speed} m/s
            </Text>

            <Text fontSize="xl" fontWeight="medium" mt="3">
              🌡️ Hiss etdirir: {Math.round(weatherData?.data?.main?.feels_like)}
              °C
            </Text>
          </CardBody>
        </Card>
      )}
    </>
  );
};
