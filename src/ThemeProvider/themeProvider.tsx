import * as React from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props: any) => props.theme.fonts.fontSecondary};
    ${(props: any) => {
      return "background-color: " + props.theme.colors.backgroundPrimary;
    }}
    
`;

// type ThemeMode = "wireframe" | "neumorphism" | "simple";

export interface Theme {
  general?: {
    centered: boolean;
    mode?: string;
  };
  colors?: any;
  fonts?: any;
}

interface ThemeProviderProps {
  children: any;
  theme: Theme;
}

interface ThemeProviderState {}

class ThemeProvider extends React.Component<
  ThemeProviderProps,
  ThemeProviderState
> {
  public static defaultProps = {};

  render() {
    const { children, theme } = this.props;

    return (
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    );
  }
}

export default ThemeProvider;
