import * as React from "react";
import { Header, Footer, Container } from "../components";
import '../themes/themes.less';

export interface MainPageProps {}

export class MainPage extends React.Component<MainPageProps, {}> {
  render() {
    return (
      <div className="mainPage">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}
