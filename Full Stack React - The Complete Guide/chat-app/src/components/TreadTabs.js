import React from 'react';
import {store} from "../App";

class ThreadTabs extends React.Component {
    handleClick = (id) => {
        store.dispatch({
            type: 'OPEN_THREAD',
            id: id
        })
    };

    render() {
        const tabs = this.props.tabs.map((tab, index) => (
           <div key={index}
            className={tab.active ? 'active item' : 'item'}
            onClick={() => this.handleClick(tab.id)}>
               { tab.title }
           </div>
        ));

        return (
            <div className='ui top attached tabular menu'>
                { tabs }
            </div>
        )
    }
}

export default ThreadTabs;