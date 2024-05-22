document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".timeline-event");

    events.forEach(event => {
        const title = event.querySelector("h2");

        title.addEventListener("click", () => {
            event.classList.toggle("active");
        });
    });
});
