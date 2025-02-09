import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, blue.100, white)",
        color: "white",
      },
    },
  },
});

export default theme;
