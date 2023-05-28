function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const boxes = document.querySelectorAll('.anim');

document.addEventListener('scroll', function () {
    boxes.forEach((box) => {
        if (isInViewport(box)) {
            var id = null;
            var pos = 0;
            var opacity = 0;
            clearInterval(id);
            id = setInterval(frame, 10);
            function frame() {
                if (pos == 0) {
                    clearInterval(id);
                } else {
                    pos--;
                    opacity + 0.05;
                    box.style.paddingTop = pos + 'px';
                    box.style.opacity = opacity;
                }
            }
        }
    }
    )
});
