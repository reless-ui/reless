const primaryColors = {
  white: "#fff",
  green: "#70c44b",
  greenLight: "#d6ffb1",
  grey: "#6c757d",
  greyDark: "#343a40",
  blue: "#3b73ac",
  blueLight: "#b1ecf5",
  blueLink: "#007bff",
  red: "#dc3545",
  redLight: "#FFCEDE",
  orange: "#ffc107",
  orangeLight: "#ffffd3"
};

const colors = {
  primary: primaryColors.blue,
  secondary: primaryColors.grey,
  success: primaryColors.green,
  info: primaryColors.blueLight,
  warning: primaryColors.orange,
  danger: primaryColors.red,
  dark: primaryColors.greyDark,
  link: primaryColors.blueLink,

  background: "#f9fbfd",

  textLight: "#95aac9",
  borderLight: "#e3ebf6",
  menuDark: "#313947",

  colorsToTextColors: {
    primary: primaryColors.white
  },

  ...primaryColors
};

export default colors;
