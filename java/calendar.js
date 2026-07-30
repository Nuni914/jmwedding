document.addEventListener("DOMContentLoaded", () => {

    const calendar = document.querySelector(".calendar");
    const front = document.querySelector(".front");
    const back = document.querySelector(".back");

    const days = document.querySelectorAll(".weeks span");

    const input = document.querySelector(".back input");

    const buttons = document.querySelectorAll(".back button");

    // Hide the back when the page loads
    back.style.display = "none";

    // Flip to the back when a calendar day is clicked
    days.forEach(day => {
        day.addEventListener("click", () => {

            calendar.classList.add("is-flipped");

            front.style.display = "none";
            back.style.display = "block";

            input.focus();
        });
    });

    // Flip back when Save or Dismiss is clicked
    buttons.forEach(button => {
        button.addEventListener("click", () => {

            calendar.classList.remove("is-flipped");

            back.style.display = "none";
            front.style.display = "block";
        });
    });

});