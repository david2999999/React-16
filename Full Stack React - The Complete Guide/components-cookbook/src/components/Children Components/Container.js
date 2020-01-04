import React from 'react';

class Container extends React.Component {
    static propTypes = {
        component: PropTypes.element.isRequired,
        children: PropTypes.element.isRequired
    };

    renderChild = (childData, index) => {
        return React.createElement(
            this.props.component,
            {}, // <- child props
            childData // <- child's children
        )
    };

    render() {
        return (
            <div className='container'>
                { React.Children.map(this.props.children, this.renderChild) }
            </div>
        )
    }
}

export default Container;

// THe Container component will create a div with class='container' and the children
// of this React tree will render within that div.