(() => {
    function updateViewportSize() {
        document.documentElement.style.setProperty(
            '--window-width',
            `${document.body.clientWidth}px`
        );
    };

    updateViewportSize();
    if (typeof ResizeObserver !== 'undefined') {
        const resizer = new ResizeObserver(updateViewportSize);
        resizer.observe(document.documentElement);
    } else {
        window.addEventListener('resize', updateViewportSize);
        window.addEventListener('load', updateViewportSize);
    }
})();
