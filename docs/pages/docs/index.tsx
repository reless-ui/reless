import {
  Alert,
  Button,
  Card,
  Modal,
  notification,
  PageHeader,
  Table,
  TextArea
} from "reless";
import * as React from "react";
import Link from "next/link";
import DocsLayout from "../../components/DocsLayout";

const components = ["Button"];

class Home extends React.Component {
  state = {
    showClassicModal: false
  };

  static getLayout = page => {
    return (
      <div>
        <DocsLayout>{page}</DocsLayout>
      </div>
    );
  };

  render() {
    return (
      <div style={{}}>
        <PageHeader
          title="Official Reless documentation"
          subtitle={"All you need to know"}
          subtitlePosition={"bottom"}
          breadcrumbs={{
            routes: [
              { title: "Reless", path: "/" },
              { title: "Docs", path: "/docs" }
            ]
          }}
        />
        <h1>Components Links</h1>
        {components.map(component => (
          <Link href={"/docs/component/" + component}>
            <a>{component}</a>
          </Link>
        ))}
        <h1>Components</h1>
        <h3 style={{ position: "sticky", top: 0 }}>Button</h3>
        <Button color="primary">primary</Button>
        <Button color="secondary">second</Button>
        <Button color="warning">warning</Button>
        <Button color="danger" size={"lg"}>
          danger lg
        </Button>
        <h3>Card</h3>
        <Card>card</Card>
        <h3>Grid - Row and Col</h3>
        <p>No descriptiona</p>
        <h3>Page Header</h3>
        <PageHeader
          title={"Title of the page"}
          subtitle="Subtitle of the page"
          subtitlePosition="bottom"
        />
        <h3>TextArea</h3>
        <TextArea />
        <h3>Alert</h3>
        <Alert
          type="success"
          message={"Success alert without icon and not closable"}
        />
        <Alert
          type="info"
          message={"Info alert without icon closable"}
          closable
        />
        <Alert
          type="danger"
          message={"Danger alert with icon"}
          description={"And description..."}
          icon
        />
        <h3>Modal</h3>
        <button onClick={() => this.setState({ showClassicModal: true })}>
          show classic modal
        </button>
        <Modal
          show={this.state.showClassicModal}
          onCancel={() => this.setState({ showClassicModal: false })}
          onOk={() => console.log("okOk")}
          title="Modal title"
        >
          <div>Content of modal</div>
        </Modal>
        {/*<button onClick={() => Modal.showModal()}>show portal modal</button>*/}
        <h3>Notification</h3>
        <Button
          color="primary"
          onClick={() => {
            notification({
              type: "info",
              size: "small",
              placement: "top",
              content: "Obsah jo",
              duration: 5,
              onClose: () => console.log("zezhora zabru")
            });
          }}
        >
          Display small info notification (=message) center
        </Button>
        <Button
          color="primary"
          onClick={() => {
            notification({
              type: "success",
              size: "large",
              placement: "topRight",
              duration: 5,
              onClose: () => console.log("zezhora zabru"),
              title: "Titulek vpravo",
              description: "Popisek vpravo..."
            });
          }}
        >
          Display large notification success on right with title and desc
        </Button>
        <Button
          color="primary"
          onClick={() => {
            notification({
              type: "success",
              size: "small",
              placement: "bottom",
              content: "Obsah jo",
              duration: 5,
              onClose: () => console.log("zezhora zabru"),
              title: "Titulek vpravo",
              description: "Popisek vpravo..."
            });
          }}
        >
          Display small notification bottom
        </Button>
        <Button
          color="primary"
          onClick={() => {
            notification({
              type: "error",
              size: "small",
              placement: "bottomLeft",
              content: "Obsah jo",
              duration: 5,
              onClose: () => console.log("zezhora zabru"),
              title: "Titulek vpravo",
              description: "Popisek vpravo..."
            });
          }}
        >
          Display small error notification bottom left
        </Button>
        <h3>Table</h3>
        <Table
          dataSource={[{ key: "0", id: "1", username: "First username..." }]}
          columns={[
            {
              index: "id",
              title: "User ID"
            },
            { index: "username", title: "Username" }
          ]}
        />
      </div>
    );
  }
}

export default Home;
