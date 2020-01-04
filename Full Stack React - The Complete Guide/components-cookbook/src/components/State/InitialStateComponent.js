import React from "react";

class InitialStateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentValue: 1,
            currentUser: {
                name: 'Ari'
            }
        }
    }
}

export default InitialStateComponent;