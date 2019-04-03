import * as React from 'react';
import './less/index.less';

export interface FooterComponentProps {};

class FooterComponent extends React.Component<FooterComponentProps, {}>{
    render(){
        return <div className="footer">Powered by Yunjiao</div>
    }
}

export default FooterComponent