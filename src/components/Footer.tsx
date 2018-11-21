import * as React from 'react';
import '../themes/themes.less';
export interface FooterComponentProps {};

export default class FooterComponent extends React.Component<FooterComponentProps, {}>{
    render(){
        return <div className="footer">Powered by Yunjiao</div>
    }
}