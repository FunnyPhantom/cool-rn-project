import { type TextProps } from "react-native";

import styled, { css } from "styled-components/native";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

// export function Text({ style, type = "default", ...rest }: ThemedTextProps) {
//   const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

//   return (
//     <Text
//       style={[
//         { color },
//         type === "default" ? styles.default : undefined,
//         type === "title" ? styles.title : undefined,
//         type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
//         type === "subtitle" ? styles.subtitle : undefined,
//         type === "link" ? styles.link : undefined,
//         style,
//       ]}
//       {...rest}
//     />
//   );
// }

const variants = {
  title: css`
    font-size: 32px;
    font-weight: bold;
    line-height: 32px;
  `,
  subtitle: css`
    font-size: 20px;
    font-weight: bold;
    /* line-height: normal; */
  `,
  link: css`
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.link};
  `,
  defaultSemiBold: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  `,
  default: css`
    font-size: 16px;
    font-weight: normal;
    /* line-height: normal; */
  `,
};

type Variant = keyof typeof variants;

const Text = styled.Text<ThemedTextProps>`
  ${({ type = "default" }) => variants[type as Variant]}
`;

export { Text };

// const styles = StyleSheet.create({
//   default: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   defaultSemiBold: {
//     fontSize: 16,
//     lineHeight: 24,
//     fontWeight: "600",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     lineHeight: 32,
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   link: {
//     lineHeight: 30,
//     fontSize: 16,
//     color: "#0a7ea4",
//   },
// });
