export function renderElapsedString(elapsedTime) {
    let seconds = Math.floor(elapsedTime / 1000);

    let hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;

    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    return hours.toString().padStart(2, '0') + ':' +
           minutes.toString().padStart(2, '0') + ':' +
           seconds.toString().padStart(2, '0');
}