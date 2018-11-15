import * as React from "react";
import { Header, Footer } from "../components";

export interface MainPageProps {}

export class MainPage extends React.Component<MainPageProps, {}> {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
