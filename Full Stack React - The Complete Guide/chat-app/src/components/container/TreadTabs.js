import React from 'react';
import { Tabs } from "../generic/Tabs";
import { connect } from 'react-redux';

const mapStateToTabsProps = (state) => {
    const tabs = state.threads.map(t => (
        {
            title: t.title,
            active: t.id === state.activeThreadId,
            id: t.id
        }
    ));

    return {
        tabs
    }
};

const mapDispatchToTabsProps = (dispatch) => (
    {
        onClick: (id) => (
            dispatch({
                type: 'OPEN_THREAD',
                id: id
            })
        )
    }
);

const ThreadTabs = connect(
    mapStateToTabsProps,
    mapDispatchToTabsProps
)(Tabs);

export default ThreadTabs;