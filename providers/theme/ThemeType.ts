import { Colors } from "@/constants/Colors";

type Mode = "light" | "dark";

export interface ThemeType {
  colors: (typeof Colors)[Mode];
  mode: Mode;
}
