import {FETCH_PEOPLE_REQUEST, FETCH_PEOPLE_SUCCESS} from "../action/fetchRequest";

const initialState = {
    people: [],
    isLoading: false,
    saveStatus: 'READY',
    person: {
        name: '',
        email: '',
        course: null,
        department: null
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PEOPLE_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case FETCH_PEOPLE_SUCCESS:
            return Object.assign({}, state, {
                people: action.people,
                isLoading: false
            })
    }
}