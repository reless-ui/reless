import {
  Col,
  ComplexLayout,
  Footer,
  Header,
  Icon,
  Menu,
  Row,
  ThemeProvider,
  withTheme
} from "reless";
import Link from "next/link";
import * as React from "react";

const theme = {
  general: {
    centered: false,
    mode: "wireframe"
  },
  colors: {
    backgroundPrimary: "#FFF", // #
    backgroundSecondary: "#F0F4FF", //#
    background: "yellow" //
  },
  fonts: {
    fontPrimary: '"Karla", "Helvetica", "Arial", sans-serif;', // texts
    fontSecondary: '"Rubik", "Helvetica", "Arial", sans-serif' // titles
  }
};

const SampleComponent = props => {
  return (
    <ThemeProvider theme={theme}>
      <ComplexLayout
        layoutConfig={{
          header: {
            sticky: false,
            aboveContent: false
          },
          leftSider: {
            fixed: true
          },
          rightSider: {},
          footer: {
            underContent: false
          }
        }}
        header={
          <Header
            extraLinks={[
              <Link href={"/docs"}>Components</Link>,
              <span>Get started</span>,
              <span>GitHub</span>
            ]}
          />
        }
        leftSider={
          <div>
            <div
              style={{ padding: 15, textAlign: "center", fontWeight: "bold" }}
            >
              Reless: UI kit
            </div>
            <Menu mode={"vertical"}>
              <Menu.Item>
                <Link href={"/docs/showcase"}>
                  <a>
                    <Icon type={"area-chart"} />
                    Showcase
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={"/docs/get-started"}>
                  <a>
                    <Icon type={"home"} />
                    Get started
                  </a>
                </Link>
              </Menu.Item>

              <Menu.SubMenu
                title={
                  <div>
                    <Link href={"/docs/components"}>
                      <a>Components</a>
                    </Link>
                  </div>
                }
                collapsible
              >
                <Menu.Item>...</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div>
        }
        footer={
          <Footer>
            <Row>
              <Col sm={6}>
                <h3>Help</h3>
                <div>
                  <Link href={"/docs"}>
                    <a>Whole documentation</a>
                  </Link>
                </div>
                <div>
                  <Link href={"#"}>
                    <a>Get started</a>
                  </Link>
                </div>
                <div>
                  <Link href={"#"}>
                    <a>Report a bug</a>
                  </Link>
                </div>
              </Col>
              <Col sm={6}>
                <h3>Useful links</h3>
                <div>
                  <Link href={"#"}>
                    <a>
                      Official Reless blog about dashboards/design
                      systems/programming
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Footer>
        }
      >
        {props.children}
      </ComplexLayout>
    </ThemeProvider>
  );

  // return <div>samplecomonnnet{props.children}</div>;
};

export default withTheme(SampleComponent);
