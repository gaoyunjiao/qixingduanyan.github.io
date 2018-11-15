import * as React from 'react';
import '../themes/themes.less';

export interface HeaderComponentProps{};

export default class HeaderComponent extends React.Component<HeaderComponentProps, {}>{
    render(){
        return <div className="docHeader">BASE HEADER</div>
    }
}