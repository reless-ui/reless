import { useState } from "react";
import {
  Layout as LayoutProvider,
  Card,
  PageHeader,
  Container,
  Row,
  Col,
  Menu,
  Icon,
  Tag,
  Tooltip
} from "reless";

const { Layout, Sider, Header, Content } = LayoutProvider;

const Gg = () => <div>gg</div>;

const Dashboard = () => {
  const [isSiderCollapsed, setIsSiderCollapsed] = useState("revealed");

  return (
    <Layout>
      <Sider fixed collapsed={isSiderCollapsed} bg={"light"}>
        <div style={{ padding: 15, textAlign: "center", fontWeight: "bold" }}>
          Reless: UI kit
        </div>
        <Menu mode={"vertical"}>
          <Menu.Item>
            <Icon type={"area-chart"} />
            First menu item
          </Menu.Item>
          <Menu.Item>
            <Icon type={"home"} />
            Second menu item
          </Menu.Item>

          <Menu.SubMenu title={<div>Submenu</div>} collapsible>
            <Menu.Item>Item 4</Menu.Item>
            <Menu.Item>Item 5</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Content hasLeftSiderFixed hasLeftSiderCollapsed={isSiderCollapsed}>
        <Header bg={"light"}>
          <div>
            <span
              onClick={() =>
                setIsSiderCollapsed(
                  isSiderCollapsed === "revealed"
                    ? "partial"
                    : isSiderCollapsed === "partial"
                    ? "collapsed"
                    : "revealed"
                )
              }
            >
              Toggle
            </span>
          </div>
        </Header>
        <Container fluid>
          <PageHeader
            title={"Homepage"}
            subtitle={"All you need to know in one place"}
            subtitlePosition={"bottom"}
            breadcrumbs={{
              routes: [
                { title: "first", path: "" },
                { title: "second", path: "" },
                { title: "third", path: "" }
              ],
              itemRender: () => <span>Sth</span>
            }}
            extra={<button>extratlačítko</button>}
            tags={[
              <Tag>very easy to use</Tag>,
              <Tag>tested</Tag>,
              <Tag>fresh and new</Tag>,
              <Tooltip title="So contact me!" placement="bottom">
                <Tag>do you need some help?</Tag>
              </Tooltip>
            ]}
          />
          <Row spacing={[10, 10]} style={{ marginBottom: 10 }}>
            <Col xs={12} md={6} xl={4}>
              <Card
                title="Card titulekč č.1"
                titleExtraTabList={[
                  { label: "Tab jedna", key: "1" },
                  { label: "Tab 2", key: "2" },
                  { label: "Tab 3", key: "3" }
                ]}
                activeTabKey="1"
                titleExtra={<button>tlačítko1</button>}
              >
                obsah karty1
              </Card>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <Card
                title="Card title"
                titleExtraTabList={[
                  { label: "Tab 1", key: "1" },
                  { label: "Tab 2", key: "2" },
                  { label: "Tab 3", key: "3" }
                ]}
                activeTabKey="1"
                titleExtra={<button>tlačítko</button>}
              >
                obsah karty
              </Card>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <Card
                title="Card title"
                titleExtraTabList={[
                  { label: "Tab 1", key: "1" },
                  { label: "Tab 2", key: "2" },
                  { label: "Tab 3", key: "3" }
                ]}
                activeTabKey="1"
                titleExtra={<button>tlačítko</button>}
              >
                obsah karty
              </Card>
            </Col>
          </Row>
          <Row spacing={10}>
            <Col>další</Col>
            <Col>další</Col>
            <Col>další</Col>
          </Row>
        </Container>
      </Content>
    </Layout>
  );
};

export default Dashboard;
