import {
  Button,
  Header,
  LandingPageMain,
  LandingPageTextStripe,
  LandingPageContentStripe,
  LandingPageTwoSideContent,
  LandingPageRowPointsStripe,
  TabbedContent,
  Footer,
  ThemeProvider,
  Row,
  Col,
  Card
} from "reless";
import Link from "next/link";

const theme = {
  general: {
    centered: true,
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

const Home = props => {
  return (
    <ThemeProvider theme={theme}>
      <Header
        logo="Reless"
        extraLinks={[
          <Link href={"/docs"}>
            <a>Complete documentation</a>
          </Link>,
          <Link href={"/docs/get-started"}>
            <a>Get started</a>
          </Link>,
          <Link href={"/docs/components"}>
            <a>Components</a>
          </Link>,
          <span>GitHub</span>
        ]}
      />
      <LandingPageMain
        title="Design system and UI framework for writing dashboards and interactive applications in React"
        description="Create React apps with less code. Reless"
        actions={[
          <Button color="primary">Find out more</Button>,
          <Button color="primary">Get started</Button>,
          <Button color="secondary">GitHub</Button>
        ]}
        sideContent={
          <p>
            <Link href={"/dashboard"}>
              <a>This is all possible...</a>
            </Link>
          </p>
        }
      />
      <LandingPageTextStripe
        text="Reless is inspired by the currently most beloved React UI frameworks,
        unifies their API, adds advanced layout builder, theming support and
        complex components for much easier and faster use. Detailed examples of
        every feature included."
      />
      <LandingPageRowPointsStripe
        points={[
          <div>
            <h3>Made for developers</h3>
            <p>
              All in all - you are our main user. Everything is made to make
              your work as easy and quick as possible.
            </p>
          </div>,
          <div>
            <h3>Easy to use for users</h3>
            <p>Smooth usage, animations, no distractions.</p>
          </div>,
          <div>
            <h3>Business ready</h3>
            <p>
              Made after looking at many best practices in dashboard and app
              field.
            </p>
          </div>
        ]}
      ></LandingPageRowPointsStripe>
      <LandingPageContentStripe title="What makes Reless unique?">
        <p>
          Reless takes the best from the currently top React UI frameworks and
          has a similar API, so that you can start using it quickly.
        </p>
        <p>
          If you just want a few primitive components, just import them and use
          them. They will working well, just like at similar UI frameworks.
        </p>
        <p>
          The real fun begins, when you want to build entire UI using the layout
          builder and/or theming functionality.
        </p>
      </LandingPageContentStripe>
      <LandingPageContentStripe title="What Reless offers?">
        <LandingPageTwoSideContent
          firstContent={
            <div>
              <h3>1. UI Components</h3>
              <p>Primitive and complex</p>
            </div>
          }
          secondContent={"image..."}
        />
        <LandingPageTwoSideContent
          secondContent={
            <div>
              <h3>Layout builder</h3>
              <p>Description...</p>
            </div>
          }
          firstContent={"image..."}
        />
        <LandingPageTwoSideContent
          firstContent={
            <div>
              <h3>Themes</h3>
              <p>Just like at Theme UI...</p>
            </div>
          }
          secondContent={"image..."}
        />
        <p>... and another list of other great features</p>
      </LandingPageContentStripe>
      <LandingPageContentStripe title="How to try out Reless?">
        <p>First, make sure you understand what Reless is capable of.</p>
        <p>
          If you want just some primitive components, use them in your project.
          Pretty simple.
        </p>
        <p>
          If you want to use everything Reless offers, install it, use
          LayoutBuilder, choose mode, select color scheme and go.
        </p>
      </LandingPageContentStripe>
      <LandingPageContentStripe title="Compare with similar projects">
        <TabbedContent
          tabsPosition={"left"}
          tabsTitles={[
            "(React) Bootstrap",
            "Ant Design",
            "Material UI",
            "Theme UI"
          ]}
          tabsContents={[
            <div>
              React Bootstrap has the most similar API to Reless. Main
              difference is that bootstrap is too simple, not really aiming at
              making beautiful dashboards, but merely just functional. Reless
              wants to do both.
            </div>,
            <div>
              Ant Design is main inspiration for types of primitive components
              and structuring the code.
            </div>,
            <div>
              Material UI is the number 1 UI framework for React right now. So
              it had to be very thoroughly inspected. But it's mostly for
              Android mobiles and takes up too much space.
            </div>,
            <div>
              Theme UI has interesting theming capability, which Reless is
              lightly inspired by.
            </div>
          ]}
        />
      </LandingPageContentStripe>
      <LandingPageContentStripe title="Some geeky info :)">
        <Row>
          <Col sm={4}>
            <Card>
              31 components <br />
              24 primitive, 7 complex
            </Card>
          </Col>
          <Col sm={4}>
            <Card>300kb gzipped</Card>
          </Col>
          <Col sm={4}>
            <Card>
              3 modes
              <br />3 predefined color palettes
              <br />3 different layouts
              <br />
              ...endless possibilites to make your own
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              Super emphasise on great documentation <br />
              Examples for every single feature <br />
              Fully working demo/starterkit in Next.js
            </Card>
          </Col>
        </Row>
      </LandingPageContentStripe>
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
              <Link href={"/docs/get-started"}>
                <a>Get started</a>
              </Link>
            </div>
            <div>
              <Link href={"/docs/components"}>
                <a>Components</a>
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
    </ThemeProvider>
  );
};

export default Home;
