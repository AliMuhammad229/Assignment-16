for (var i = 0; i <= 100; i++) {
    document.getElementById('for_hours').innerHTML += '<option>' + i + '</option>'
}
for (var i = 0; i <= 59; i++) {
    document.getElementById('for_minute').innerHTML += '<option>' + i + '</option>'
}

var second = 0
var milisecond = 0
var minute = 0
var hr = 0
var dispalyHR = document.getElementById('hr')
var displayMin = document.getElementById('min')
var displaySec = document.getElementById('sec')
dispalyHR.innerHTML = hr
displayMin.innerHTML = minute
displaySec.innerHTML = second
var interval;

function timer() {
    var current_hours = document.getElementById('for_hours').value
    var current_minutes = document.getElementById('for_minute').value
    if (current_hours != 0 || current_minutes != 0) {
        document.getElementById('hr').style.backgroundColor = 'darkgreen'
        document.getElementById('hr').style.display = 'inline-block'
        document.getElementById('hr').style.color = 'white'
        document.getElementById('min').style.backgroundColor = 'darkgreen'
        document.getElementById('min').style.display = 'inline-block'
        document.getElementById('min').style.color = 'white'
        document.getElementById('sec').style.backgroundColor = 'darkgreen'
        document.getElementById('sec').style.display = 'inline-block'
        document.getElementById('sec').style.color = 'white'
        milisecond++
        dispalyHR.innerHTML = current_hours
        displayMin.innerHTML = current_minutes
        displaySec.innerHTML = second
        if (milisecond == 100) {
            second++
            displaySec.innerHTML = second
            milisecond = 0

        } else if (second == 60 && current_minutes != 0) {
            // console.log(Min)
            displayMin.innerHTML = displayMin.innerHTML - 1
            second = 0
        } else if (current_minutes == 0 && current_hours != 0) {
            // current_hours--
            document.getElementById('hr').innerHTML = (current_hours - 1)
            if (current_hours == 0 && second == 60 && current_minutes != 0) {
                var updated_minutes = 60
                    // displayMin.innerHTML = updated_minutes
                second = 0
                updated_minutes--
                displayMin.innerHTML = updated_minutes
            }
        }
    } else {
        alert("Please Select the Hours and Minutes then you Start it!")
        reset()
    }



}
// interval = setInterval(timer, 1)
function start() {
    document.getElementById('start').style.display = 'none'
    interval = setInterval(timer, 1)
    document.getElementById('for_hours').style.display = 'none'
    document.getElementById('for_minute').style.display = 'none'
}

function pause() {
    document.getElementById('start').style.display = 'inline-block'
    document.getElementById('for_hours').style.display = 'inline-block'
    document.getElementById('for_minute').style.display = 'inline-block'
        // It stops or hault the setinterval
    clearInterval(interval)
}

function reset() {
    pause()
    hr = 0
    minute = 0
    second = 0
    dispalyHR.innerHTML = hr
    displayMin.innerHTML = minute
    displaySec.innerHTML = second
    for (var i = 0; i <= 100; i++) {
        document.getElementById('for_hours').innerHTML += '<option>' + i + '</option>'
    }
    for (var i = 0; i <= 59; i++) {
        document.getElementById('for_minute').innerHTML += '<option>' + i + '</option>'
    }
    document.getElementById('hr').style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
    document.getElementById('hr').style.display = 'inline-block'
    document.getElementById('hr').style.color = 'white'
    document.getElementById('min').style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
    document.getElementById('min').style.display = 'inline-block'
    document.getElementById('min').style.color = 'white'
    document.getElementById('sec').style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
    document.getElementById('sec').style.display = 'inline-block'
    document.getElementById('sec').style.color = 'white'
}
// timer()