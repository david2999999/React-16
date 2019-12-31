import uuid from 'react-uuid';

export function renderElapsedString(elapsedTime, runningSince) {
    runningSince = runningSince || 0;
    elapsedTime = elapsedTime + (Date.now() - runningSince);
    return convertToMMHHSS(elapsedTime);
}

function convertToMMHHSS(timeInMilliSecond) {
    let seconds = Math.floor(timeInMilliSecond / 1000);

    let hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;

    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    return hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
}

export function newTimer(timer) {
    return Object.assign({}, timer, {
        id: uuid(),
        elapsed: 0,
        runningSince: null
    });
}