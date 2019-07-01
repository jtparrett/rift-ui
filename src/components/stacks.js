import { View } from "./elements";

export const Stack = (...children) => {
  return View(...children).display("flex");
};

export const HStack = (...children) => {
  return Stack(...children).flexDirection("row");
};

export const VStack = (...children) => {
  return Stack(...children).flexDirection("column");
};
