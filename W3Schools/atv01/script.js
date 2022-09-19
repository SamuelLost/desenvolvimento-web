let isClicked = true

function onClick() {
    // if (isClicked) {
    //     document.getElementById('demo').innerHTML = 'Hello'
    // } else {
    //     document.getElementById('demo').innerHTML = 'Hello World'
    // }
    document.getElementById('demo').innerHTML = isClicked ? 'Hello' : 'Hello World'
    isClicked ^= 1
}