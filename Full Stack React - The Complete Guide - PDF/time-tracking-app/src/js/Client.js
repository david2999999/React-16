const baseURL = 'http://localhost:3500';

export function getTimers(success) {
   return fetch(baseURL + '/function/timers', {
       headers: {
           Accept: 'application/json'
       }
   }).then(checkStatus)
     .then(parseJSON)
     .then(success)
}

export function startTimer(data) {
    return fetch(baseURL + '/function/timers/start', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

export function stopTimer(data) {
    return fetch(baseURL + '/function/timers/stop', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(checkStatus);
}

export function createTimer(data) {
    return fetch(baseURL + '/function/timers', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

export function updateTimer(data) {
    return fetch(baseURL + '/function/timers', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

export function deleteTimer(data) {
    return fetch(baseURL + '/function/timers', {
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}
