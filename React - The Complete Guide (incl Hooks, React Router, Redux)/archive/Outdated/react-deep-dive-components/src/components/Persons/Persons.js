import React, {PureComponent} from 'react';
import Person from './Person/Person';

// complete props check for shouldComponentUpdate using PureComponent
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.components] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.components] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;    // execute component update
    //     } else {
    //         return false;    // do not execute component update
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.components] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.components] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Person.components] component will unmount');
    }

    render() {
        console.log('[Persons.components] rendering...');

        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}


export default Persons;