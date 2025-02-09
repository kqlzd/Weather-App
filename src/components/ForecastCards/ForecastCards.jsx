import { Text, Card, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const ForecastCards = ({ estimationData }) => {
  const bg = useColorModeValue("gray.100");
  return (
    <>
      {estimationData?.data?.list?.slice(0, 5).map((item, index) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        return (
          <Card
            key={index}
            width="250px"
            bg={bg}
            p={4}
            m={2}
            cursor="pointer"
            _hover={{
              bgGradient: "linear(to-r, blue.400, purple.500)",
              boxShadow: "xl",
              transform: "scale(1.05)",
            }}
          >
            <Text fontSize="lg" fontWeight="bold">
              📅 {date}
            </Text>
            <Text>🌡️ MAX: {item.main.temp_max}</Text>
            <Text>🌡️ MIN: {item.main.temp_min}</Text>
            <Text>🌬️ Külək: {item.wind.speed} m/s</Text>
          </Card>
        );
      })}
    </>
  );
};
