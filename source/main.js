

function applyFadeEffect() {
    var fadeables = document.querySelectorAll('.fadeable');
    fadeables.forEach(function(fadeable) {
        if (fadeable.classList.contains('fade-out')) {
        fadeable.classList.remove('fade-out');
        } else {
        fadeable.classList.add('fade-out');
        }
    });
}