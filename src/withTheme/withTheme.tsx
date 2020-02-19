// @ts-ignore
import * as React from "react";
import { withTheme as styledWithTheme } from "styled-components";
//
// interface LandingPageMainProps {
//   children: any;
// }
//
// interface LandingPageMainState {}

function withTheme(Component: any) {
  //const component = <Component />;
  console.log("withtheme naše..");

  return styledWithTheme(Component);
}

// class WithTheme extends React.Component<
//   LandingPageMainProps,
//   LandingPageMainState
// > {
//   public static defaultProps = {};
//
//   render() {
//    // const { children } = this.props;
//
//     console.log("WWWWW", this.props);
//
//     return <div>ddwit</div>
//
//     //return children;
//   }
// }

export default withTheme;
