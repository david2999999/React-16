import React from 'react';

class ThreadTabs extends React.Component {
    render() {
        const tabs = this.props.tabs.map((tab, index) => (
           <div key={index}
            className={tab.active ? 'active item' : 'item'}>
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