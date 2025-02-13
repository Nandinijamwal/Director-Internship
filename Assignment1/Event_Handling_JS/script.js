document.addEventListener("DOMContentLoaded", function() {
    // Button click event
    document.getElementById("myButton").addEventListener("click", function() {
        document.getElementById("message").textContent = "Button Clicked! JavaScript is working!";
        alert("Button was clicked!");
    });

    // Input field event
    document.getElementById("textInput").addEventListener("input", function() {
        let userInput = this.value;
        document.getElementById("outputText").textContent = "You typed: " + userInput;
    });

    // Hover event
    document.getElementById("hoverBox").addEventListener("mouseover", function() {
        document.getElementById("hoverMessage").textContent = "You hovered over the box!";
        this.style.backgroundColor = "#ffcc00";
    });

    document.getElementById("hoverBox").addEventListener("mouseout", function() {
        document.getElementById("hoverMessage").textContent = "";
        this.style.backgroundColor = "#4CAF50";
    });
});
