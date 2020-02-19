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
import { componentsList } from "../../data/components";

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
          title="Reless components"
          breadcrumbs={{
            routes: [
              { title: "Reless", path: "/" },
              { title: "Docs", path: "/docs" }
            ]
          }}
        />
        {componentsList.map(component => (
          <h3>{component.name}</h3>
        ))}
      </div>
    );
  }
}

export default Home;
