(function () {
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    document.addEventListener("keydown", function (event) {
        const key = event.key.toUpperCase();

        if (event.key === "F12" ||
            (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(key)) ||
            (event.ctrlKey && key === "U") ||
            (event.metaKey && event.altKey && key === "I")) {
            event.preventDefault();
            event.stopPropagation();
        }
    }, true);
})();