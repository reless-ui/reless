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
          title="Showcase"
          breadcrumbs={{
            routes: [
              { title: "Reless", path: "/" },
              { title: "Docs", path: "/docs" }
            ]
          }}
        />
      </div>
    );
  }
}

export default Home;
