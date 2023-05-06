import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      grey: string;
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      border: string;
      info: string;
      light: string;
      dark: string;
    };
    fonts: {
      body: string;
    };
    fontSizes: {
      small: string;
      mediumSmall: string;
      medium: string;
      mediumLarge: string;
      large: string;
      larger: string;
      extraLarge: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
