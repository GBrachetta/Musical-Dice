function sendMail(contactForm) {
  emailjs
    .send("gmail", "dice_game", {
      from_name: contactForm.inputName.value,
      from_email: contactForm.inputEmail.value,
      info_request: contactForm.textArea.value
    })
    .then(
      function(response) {
        console.log("SUCCESS", response);
      },
      function(error) {
        console.log("FAILED", error);
      }
    );
  return true;
}