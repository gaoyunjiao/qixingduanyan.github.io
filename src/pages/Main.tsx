import * as React from "react";
import { HeaderComponent } from "../components/Header";
import { FooterComponent } from "../components/Footer";

export interface MainPageProps {}

export class MainPage extends React.Component<MainPageProps, {}> {
  render() {
    return (
      <div>
        <HeaderComponent />
        <FooterComponent />
      </div>
    );
  }
}
