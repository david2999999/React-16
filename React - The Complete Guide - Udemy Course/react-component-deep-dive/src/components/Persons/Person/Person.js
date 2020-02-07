import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import withClass from "../../../hoc/withClass";
import './Person.css';

// const StyleDiv = styled.div`
//     width: 60%;
//     margin: 10px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//
//     @media(min-width: 500px) {
//         width: 450px;
//     }
// `;

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering....');
        return (
            <React.Fragment>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>
                    I'm { this.props.name } and I am { this.props.age } years old.
                </p>
                <p>{ this.props.children }</p>
                <input type="text"
                       //ref={(inputEl) => {this.inputElement = inputEl}}
                       ref={this.inputElementRef}
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </React.Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, 'Person');