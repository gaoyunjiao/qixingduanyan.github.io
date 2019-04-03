import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import './less/index.less';
import * as ProgramFeature from '../../articals/Program-Feature.md';

export interface ContainerComponentProps { 
};

export interface state {
    html: any
}

class ContainerComponent extends React.Component<ContainerComponentProps, state>{
    constructor(props: any) {
        super(props);
        this.state = {
            html: ''
        }
    }

    componentDidMount() {
        console.log('markContent =====>', ProgramFeature);
        this.setState({
            html: ProgramFeature
        })
    }

    render() {
        const { html } = this.state
        return (
            <div className="container">
                 <ReactMarkdown
                    className="markdown-body"
                    source={html}
                    escapeHtml={false}
                />
            </div>
        );
    }
}

export default ContainerComponent