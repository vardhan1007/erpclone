  const nextButton = document.querySelector('button');
  const avatar = document.querySelector('.avatar');
  const inputBox = document.querySelector('.input-box');
  const userInput = inputBox.querySelector('input');

  nextButton.addEventListener('click', function () {
    if (userInput.placeholder === "User Name") {
      // Change avatar to photo
      avatar.innerHTML = '<img src="your-photo.jpg" alt="Profile" style="width: 65px; height: 65px; border-radius: 50%;">';

      // Add back arrow
      const backArrow = document.createElement('div');
      backArrow.innerHTML = '<i class="fas fa-arrow-left"></i>';
      backArrow.style.cursor = 'pointer';
      backArrow.style.marginTop = '-10px';
      backArrow.onclick = function() {
        // Go back to username step
        avatar.innerHTML = '<i class="fas fa-user"></i>';
        userInput.type = 'text';
        userInput.placeholder = 'User Name';
        nextButton.textContent = 'Next';
        // Remove additional links
        document.querySelectorAll('.extra-links').forEach(el => el.remove());
        this.remove();
      };
      avatar.parentNode.insertBefore(backArrow, avatar);

      // Change input to password
      userInput.type = "password";
      userInput.placeholder = "Enter Password";

      // Change button text
      nextButton.textContent = "Submit";

      // Add extra links below button
      const rightSection = document.querySelector('.right-section');
      const forgotLink = document.createElement('div');
      forgotLink.innerHTML = '<a href="#" class="extra-links">Forgot Your Password?</a>';
      forgotLink.style.marginTop = '10px';

      const resetLink = document.createElement('div');
      resetLink.innerHTML = '<a href="#" class="extra-links">Reset Password</a>';
      resetLink.style.marginTop = '5px';

      rightSection.appendChild(forgotLink);
      rightSection.appendChild(resetLink);
    } else {
      // Handle "Submit" action here if needed
        window.location.href = "dashboard.html";    }
  });
document.getElementById("marks-details-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("marks-details-content").style.display = "block";
});
