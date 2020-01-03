import React from "react";
import PropTypes from 'prop-types';
import UserListing from "./UserListing";

class ThreadList extends React.Component {
    static contextType = {
        users: PropTypes.array
    };

    render() {
        return (
            <div className={styles.ThreadList}>
                <ul className={styles.list}>
                    {this.context.users.map((u, idx) => {
                        return (
                            <UserListing
                                onClick={this.props.onClick}
                                key={idx}
                                index={idx}
                                user={u}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ThreadList;