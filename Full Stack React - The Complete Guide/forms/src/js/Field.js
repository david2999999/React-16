import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired
    };

    onChange = (evt) => {
        const name = this.props.name;
        const value = evt.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;

        this.props.onChange({
            name, value, error
        });
    };

    render() {
        return (
            <div>
                <input type="text"
                       placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={this.onChange}/>
                <span style={{ color: 'red'}}>
                    { this.props.error }
                </span>
            </div>
        );
    }
}

export default Field;