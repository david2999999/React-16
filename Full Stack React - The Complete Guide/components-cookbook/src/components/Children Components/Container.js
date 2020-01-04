import React from 'react';

class Container extends React.Component {
    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        )
    }
}

export default Container;

// THe Container component will create a div with class='container' and the children
// of this React tree will render within that div.