import { type TextProps } from "react-native";

import styled, { css } from "styled-components/native";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

const variants = {
  title: css`
    font-size: 32px;
    font-weight: bold;
    line-height: 32px;
  `,
  subtitle: css`
    font-size: 20px;
    font-weight: bold;
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
  `,
};

type Variant = keyof typeof variants;

const Text = styled.Text<ThemedTextProps>`
  ${({ type = "default" }) => variants[type as Variant]}
`;

export { Text };
