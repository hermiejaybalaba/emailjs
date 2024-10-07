
(function () {
  emailjs.init("ZivlGgdTDC2V3ZmTk");
})();


const modal = document.getElementById("success-modal");
const closeBtn = document.querySelector(".close-btn");


document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    emailjs
      .send("service_aquhbjn", "template_beyu9yb", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(
        function (response) {
         
          modal.style.display = "flex";
          document.getElementById("contact-form").reset(); 
        },
        function (error) {
      
          document.getElementById("response-message").innerText =
            "Sorry, there was an error sending your message. Please try again later.";
          document.getElementById("response-message").style.color = "red";
          console.error("EmailJS error:", error);
        }
      );
  });


closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
