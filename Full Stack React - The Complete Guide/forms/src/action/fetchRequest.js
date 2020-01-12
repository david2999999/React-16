export const FETCH_PEOPLE_REQUEST = 'FETCH_PEOPLE_REQUEST';
export function fetchPeopleRequest() {
    return {
        type: FETCH_PEOPLE_REQUEST
    }
}

export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export function fetchPeopleSuccess(people) {
    return {
        type: FETCH_PEOPLE_SUCCESS,
        people
    }
}