import * as React from "react";
import { Header, Footer, Container } from "../components";
import './less/index.less'
import '../articals/Program-Feature.md'

export interface MainPageProps { }

export class MainPage extends React.Component<MainPageProps, {}> {
  render() {
    return (
      <div className="mainPage">
        <div className="mainPageHeader">
          <Header />
        </div>
        <div className="mainPageContent">
          <Container />
        </div>
        <div className="mainPageFooter">
          <Footer />
        </div>
      </div>
    );
  }
}
