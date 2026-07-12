document.addEventListener("DOMContentLoaded", () => {
    if (!window.hljs) {
        return;
    }

    document.querySelectorAll("pre code").forEach((block) => {
        window.hljs.highlightElement(block);
    });
});
