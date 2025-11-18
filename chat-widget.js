// Open-source chat widget logic
const chatWidget = document.getElementById("chat-widget");
const chatOpenBtn = document.getElementById("chat-open-btn");
const chatToggleBtn = document.getElementById("chat-toggle");

chatOpenBtn.addEventListener("click", () => {
  chatWidget.style.display = "flex";
  chatOpenBtn.style.display = "none";
});

chatToggleBtn.addEventListener("click", () => {
  chatWidget.style.display = "none";
  chatOpenBtn.style.display = "block";
});