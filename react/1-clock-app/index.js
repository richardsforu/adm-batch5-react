let indianClockDiv = document.querySelector('#indianClock');
let dubaiClockDiv = document.querySelector('#dubaiClock');
let usClockDiv = document.querySelector('#usClock');

let indianClockDivV1 = document.querySelector('#indianClockV1');
let dubaiClockDivV1 = document.querySelector('#dubaiClockV1');
let usClockDivv1 = document.querySelector('#usClockV1');


function jsClock(props) {
    let time = new Date().toLocaleTimeString('en-US', { timeZone: props });
    let ui = `
    <div>
    <div> ${props} </div>
    <p> ${time}</p>
    </div>
    `
    return ui;
}

function reactClock(props) {
    let time = new Date().toLocaleTimeString('en-US', { timeZone: props });
    let ui =
        <div>
            <div> {props} </div>
            <p> {time}</p>
        </div>

    return ui;
}

setInterval(() => {
    indianClockDiv.innerHTML = jsClock('Asia/Kolkata');
    dubaiClockDiv.innerHTML = jsClock('Asia/Dubai');
    usClockDiv.innerHTML = jsClock('America/New_York');

    ReactDOM.render(reactClock('Asia/Kolkata'), indianClockV1)
    ReactDOM.render(reactClock('Asia/Dubai'), dubaiClockV1)
    ReactDOM.render(reactClock('America/New_York'), usClockV1)


}, 1000);

