document.addEventListener("DOMContentLoaded", function () {
    // Floating message button functionality
    const messageButton = document.createElement("button");
    messageButton.innerText = "Send Message";
    messageButton.style.position = "fixed";
    messageButton.style.bottom = "20px";
    messageButton.style.right = "20px";
    messageButton.style.background = "#2575fc";
    messageButton.style.color = "white";
    messageButton.style.border = "none";
    messageButton.style.padding = "10px 15px";
    messageButton.style.borderRadius = "5px";
    messageButton.style.cursor = "pointer";

    document.body.appendChild(messageButton);

    // Message form
    const messageForm = document.createElement("div");
    messageForm.innerHTML = `
        <div style="position: fixed; bottom: 70px; right: 20px; background: white; padding: 15px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); display: none;">
            <h3>Contact Me</h3>
            <input type="text" id="name" placeholder="Your Name" style="width: 100%; margin-bottom: 10px; padding: 5px;">
            <input type="email" id="email" placeholder="Your Email" style="width: 100%; margin-bottom: 10px; padding: 5px;">
            <textarea id="message" placeholder="Your Message" style="width: 100%; margin-bottom: 10px; padding: 5px;"></textarea>
            <button id="sendMessage" style="background: #2575fc; color: white; border: none; padding: 10px; width: 100%; cursor: pointer;">Send</button>
        </div>
    `;

    document.body.appendChild(messageForm);
    const formDiv = messageForm.firstElementChild;

    // Toggle form visibility
    messageButton.addEventListener("click", function () {
        formDiv.style.display = formDiv.style.display === "block" ? "none" : "block";
    });

    // Handle message sending
    document.getElementById("sendMessage").addEventListener("click", function () {
        alert("Message Sent! (Functionality to send messages can be implemented)");
        formDiv.style.display = "none";
    });
});
