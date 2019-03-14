import * as React from 'react';
import '../themes/themes.less'; 

export interface ContainerComponentProps {};

export default class ContainerComponent extends React.Component<ContainerComponentProps, {}>{
    state = {
        html: ''
    }
    render(){
        return (
            <div className="container">
                <a href="../articals/Program-Feature.html">打开html</a>
            </div>
        );
    }
}