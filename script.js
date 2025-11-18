// Mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
// UPDATED to target the new menu ID
const navMenu = document.getElementById('navMenu'); 

menuBtn.addEventListener('click', () => {
  // UPDATED: Toggle display for navMenu
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
    navMenu.style.flexDirection = "column";
    navMenu.style.position = "absolute";
    navMenu.style.right = "20px";
    navMenu.style.top = "72px";
    navMenu.style.background = "rgba(255,255,255,0.05)";
    navMenu.style.padding = "14px";
    navMenu.style.borderRadius = "12px";
    navMenu.style.gap = "0"; // Reset gap for stacked mobile links
  }
});

// Fake form
document.getElementById("startBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  if (!email) return alert("Please enter your work email.");
  alert("Thanks! A demo link will be emailed to: " + email);
});