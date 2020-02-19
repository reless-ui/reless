/**
 * @class ExampleComponent
 */

import * as React from "react";

import styles from "./styles.css";

export type Props = { text: string };

export { default as Button } from "./Button";
export { default as Layout } from "./Layout";
export { default as Card } from "./Card";
export { default as Container } from "./Container";
export { default as Row } from "./Row";
export { default as Col } from "./Col";
export { default as PageHeader } from "./PageHeader";
export { default as Menu } from "./Menu";
export { default as Icon } from "./Icon";
export { default as Tag } from "./Tag";
export { default as Tooltip } from "./Tooltip";
export { default as TextArea } from "./TextArea";
export { default as Alert } from "./Alert";
export { default as Modal } from "./Modal";
export { default as notification } from "./notification";
export { default as Table } from "./Table";
export { default as Header } from "./Header";
export { default as Footer } from "./Footer";
export { default as LandingPageMain } from "./LandingPageMain";
export { default as LandingPageTextStripe } from "./LandingPageTextStripe";
export { default as LandingPageContentStripe } from "./LandingPageContentStripe";
export { default as LandingPageTwoSideContent } from "./LandingPageTwoSideContent";
export { default as LandingPageRowPointsStripe } from "./LandingPageRowPointsStripe";
export { default as TabbedContent } from "./TabbedContent";
export { default as ThemeProvider } from "./ThemeProvider";
export { default as ComplexLayout } from "./ComplexLayout";
export { default as withTheme } from "./withTheme";

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Componentaxas: {text}</div>;
  }
}
