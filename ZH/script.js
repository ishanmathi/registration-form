document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = {
      name: document.getElementById("name").value,
      donorId: document.getElementById("donorId").value,
      foodType: document.getElementById("foodType").value,
      foodQuantity: document.getElementById("foodQuantity").value,
      location: document.getElementById("location").value,
      email: document.getElementById("email").value,
      role: document.getElementById("role").value,
    };
  
    console.log("Form Submitted:", formData);
    alert("Registration successful!");
  });
  
  function goBack() {
    window.location.href = "index.html"; // Redirect to the landing page
  }
  
  
  
  