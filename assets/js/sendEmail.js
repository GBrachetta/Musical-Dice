// function sendMail(contactForm) {
//   emailjs
//     .send("gmail", "dice_game", {
//       from_name: contactForm.inputName.value,
//       from_email: contactForm.inputEmail.value,
//       info_request: contactForm.textArea.value
//     })
//     .then(
//       function(response) {
//         console.log("SUCCESS", response);
//       },
//       function(error) {
//         console.log("FAILED", error);
//       }
//     );
//   return true;
// }

var myform = $("form#myform");
myform.submit(function(event) {
  event.preventDefault();

  var params = myform.serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  var service_id = "gmail";

  var template_id = "dice_game";
  myform.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params).then(
    function() {
      myform.find("input").val("");
      myform.find("textarea").val("");
      alert("Sent!");
      myform.find("button").text("Submit");
    },
    function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Submit");
    }
  );

  return false;
});
