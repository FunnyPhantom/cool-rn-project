import {
  ThemeProvider as ReactNavigationThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { useColorScheme } from "@/hooks";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { Colors } from "@/constants/Colors";

interface Props {}

const AppThemeProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  const theme = {
    // todo: this can become more unified and the same object would be passed to both styled and reactNavigation
    styled: {
      colors,
      mode: colorScheme,
    },
    reactNavigation: colorScheme === "dark" ? DarkTheme : DefaultTheme,
  } as const;

  return (
    <StyledThemeProvider theme={theme.styled}>
      <ReactNavigationThemeProvider value={theme.reactNavigation}>
        {children}
      </ReactNavigationThemeProvider>
    </StyledThemeProvider>
  );
};

export default AppThemeProvider;
