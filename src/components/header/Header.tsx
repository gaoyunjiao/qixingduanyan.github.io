import * as React from 'react';
import '../../themes/themes.less';

export interface HeaderComponentProps { };

export default class HeaderComponent extends React.Component<HeaderComponentProps, {}>{
    render() {
        return (
            <div className="docHeader">
                <div className="title">得闲读书</div>
                <div className="menuList">
                    <div className="menuItem">
                        <a href="http://www.gaoyunjiao.fun">首页</a>
                    </div>
                    <div className="menuItem">
                        <a>前端漫谈</a>
                    </div>
                    <div className="menuItem">
                        <a>项目和框架</a>
                    </div>
                    <div className="menuItem">
                        <a>技术拾趣</a>
                    </div>
                </div>
            </div>
        );
    }
}