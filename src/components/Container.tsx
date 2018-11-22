import * as React from 'react';
import '../themes/themes.less'; 

export interface ContainerComponentProps {};

export default class ContainerComponent extends React.Component<ContainerComponentProps, {}>{
    render(){
        return (
            <div className="container">
            </div>
        );
    }
}