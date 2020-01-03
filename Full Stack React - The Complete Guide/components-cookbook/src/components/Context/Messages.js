import React from 'react';
import PropTypes from 'prop-types';
import ThreadList from "./ThreadList";
import ChatWindow from "./ChatWindow";
import { pick } from 'lodash';
import moment from 'moment';

class Messages extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        initialActiveChatIdx: PropTypes.number,
        messages: PropTypes.array.isRequired
    };

    static childContextTypes = {
        users: PropTypes.array,
        userMap: PropTypes.object
    };

    getChildContext() {
        return {
            users: this.getUsers(),
            userMap: this.getUserMap()
        }
    }

    getUsers = () => {
        const users = this.props.users
            .map(m => pick(m, [ 'uuid', 'username', 'avatar', 'lastOnline' ]))
            .sort((a, b) => moment(a.lastOnline).isBefore(b.lastOnline));
        return users;
    };


    getUserMap = () => {
        return this.props.users.reduce(
            (memo, u) => {
                memo[u.uuid] = u;
                return memo;
            },
            {}
        );
    };

    render() {
        return (
            <div>
                <ThreadList/>
                <ChatWindow/>
            </div>
        )
    }
}