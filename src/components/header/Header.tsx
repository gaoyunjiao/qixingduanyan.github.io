import * as React from 'react';
import * as _ from 'lodash';
import './less/index.less';

export interface HeaderComponentProps { 
    menuArray: any[]
};

export interface DefaultState {
    menuArray: any []
}

class HeaderComponent extends React.Component<HeaderComponentProps, DefaultState>{
    constructor(props: any) {
        super(props);
        this.state = {
            menuArray: this.props.menuArray
        }
    }

    clickItem = (menu: any) => {
        const { menuArray } = this.state;
        const newArray = _.cloneDeep(menuArray);
        _.each(newArray, item => {
            if (item.id === menu.id) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
        })

        this.setState({
            menuArray: newArray
        })
    }
    
    render() {
        const { menuArray } = this.state;
        return (
            <div className="docHeader">
                <div className="title">得闲读书</div>
                <ul className="menuList">
                    {
                        _.map(menuArray, (menu) => {
                            return (
                                <li
                                    className={menu.isActive ? 'menuItem menuItemActive' : 'menuItem'}
                                    key={menu.id}
                                    role="presentation"
                                    onClick={() => this.clickItem(menu)}>
                                    {menu.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default HeaderComponent