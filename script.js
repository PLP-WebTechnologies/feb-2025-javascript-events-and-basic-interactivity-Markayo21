// Change button text on click
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("changeTextBtn").textContent = "Clicked!";
});

// Show alert on double click
document.getElementById("dblClickBtn").addEventListener("dblclick", () => {
  alert("Double-clicked!");
});

// Change background color on hover (mouseenter and mouseleave)
document.getElementById("hoverBox").addEventListener("mouseenter", () => {
  document.getElementById("hoverBox").style.background = "lightblue";
});
document.getElementById("hoverBox").addEventListener("mouseleave", () => {
  document.getElementById("hoverBox").style.background = "lightgray";
});

// Log key pressed inside input box
document.getElementById("keypressInput").addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

// Image gallery logic
const images = [
  "boat.webp",
  "Butterfly.webp",
  "free-photo-of-golden-gate-bridge-at-sunset-with-ocean-waves.jpeg"
];
let currentImg = 0;

// Function to switch to the next image
function changeImage() {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById("galleryImg").src = images[currentImg];
}

// Tab switching logic
document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");

    // Hide all tab content
    document.querySelectorAll(".tabContent").forEach(tab => {
      tab.style.display = "none";
    });

    // Show selected tab
    document.getElementById(tabId).style.display = "block";
  });
});

// Form validation logic
document.getElementById("signupForm").addEventListener("submit", function(event) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  // Check if email contains "@"
  if (!email.includes("@")) {
    feedback.textContent = "Invalid email!";
    event.preventDefault(); // Prevent form from submitting
    return;
  }

  // Check if password is at least 8 characters
  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    event.preventDefault(); // Prevent form from submitting
    return;
  }

  // Success message
  feedback.textContent = "Form submitted successfully!";
});
