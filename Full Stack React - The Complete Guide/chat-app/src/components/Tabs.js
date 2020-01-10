import React from 'react';

export const Tabs = (props) => (
    <div className='ui top attached tabular menu'>
        {
            props.tabs.map((tab, index) => (
              <div key={index}
                   className={tab.action ? 'active item' : 'item'}
                   onClick={() => props.onClick(tab.id)}>
                  { tab.title }
              </div>
            ))
        }
    </div>
);