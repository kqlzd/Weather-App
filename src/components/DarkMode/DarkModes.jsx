import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

export const DarkModes = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} mt={4}>
      {colorMode === "light" ? "🌙" : "☀️"}
    </Button>
  );
};
