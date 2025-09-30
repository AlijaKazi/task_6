document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("successMessage").textContent = "";

  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  const message = document.getElementById("message").value.trim();
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    valid = false;
  }

  const dob = document.getElementById("DOB").value;
  if (dob === "") {
    document.getElementById("DOBError").textContent = "Date of birth is required";
    valid = false;
  }

  if (valid) {
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      alert("Please select your gender.");
      valid = false;
    }

    const check = document.querySelector('input[name="check"]:checked');
    if (!check) {
      alert("Please confirm you are not a robot.");
      valid = false;
    }
  }

  if (valid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset(); 
  }
});
