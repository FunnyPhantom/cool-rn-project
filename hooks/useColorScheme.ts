import { useColorScheme as useColorSchemeRN } from "react-native";

//disabling theming for now
// todo: use react native color scheme.
export const useColorScheme = (): "light" | "dark" => {
  return "light";
};
