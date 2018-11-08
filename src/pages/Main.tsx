import * as React from "react";
import { HeaderComponent } from "../components/Header";
import { FooterComponent } from "../components/Footer";
//import * as themes from '../themes/themes';

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
