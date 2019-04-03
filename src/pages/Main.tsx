import * as React from "react";
import { Header, Footer, Container } from "../components";
import './less/index.less'
import '../articals/Program-Feature.md'

export interface MainPageProps { }

export interface state {
  menuArray: any[]
}

export class MainPage extends React.Component<MainPageProps, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuArray:[
        {
          id: 1,
          name: '首页',
          isActive: false
        },
        {
          id: 2,
          name: '前端漫谈',
          isActive: false
        },
        {
          id: 3,
          name: '项目和框架',
          isActive: false
        },
        {
          id: 4,
          name: '技术拾趣',
          isActive: false
        }
      ]
    }
  }

  render() {

    const { menuArray } = this.state
    
    return (
      <div className="mainPage">
        <div className="mainPageHeader">
          <Header menuArray={menuArray} />
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