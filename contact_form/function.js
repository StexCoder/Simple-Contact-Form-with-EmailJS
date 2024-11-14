//Make acc on EmailJS

// Initialize EmailJS
(function(){
    emailjs.init("YOUR_PUBLIC_KEY");
  })();
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
  
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };
  
    emailjs.send(serviceID, templateID, params)
      .then(response => {
        document.getElementById("formResponse").innerText = "Message sent successfully!";
        document.getElementById("contactForm").reset();
      }, error => {
        document.getElementById("formResponse").innerText = "Failed to send message. Please try again.";
      });
  });
  