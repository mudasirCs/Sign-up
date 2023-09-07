const form = document.querySelector(".project_form");
const password = document.querySelector(".form_row .password");
const confirm_password = document.querySelector(".form_row .confirm_password");
const password_matches = document.querySelector(".form_row .password_matches");

form.addEventListener("submit", (e) => {
  if (password.value !== confirm_password.value) {
    e.preventDefault(); // Prevent form submission
    password_matches.textContent = "*Passwords do not match";
    console.log(`password was ${password.textContent}`);
    console.log(`confrim password was ${confrim_password.textContent}`);
  }
});
