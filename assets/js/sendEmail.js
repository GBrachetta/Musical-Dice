let myform = $("form#myform");
myform.submit(function(event) {
  event.preventDefault();

  let params = myform.serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  let service_id = "gmail";

  let template_id = "dice_game";
  myform.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params).then(
    function() {
      myform.find("input").val("");
      myform.find("textarea").val("");
      myform.find("button").text("Submit");
    },
    function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Submit");
    }
  );
  let messages = document.getElementById("messages");
  messages.classList.add("message-style");
  let message = document.createTextNode("Your email was successfully sent");

  messages.appendChild(message);
  setTimeout(function() {
    messages.classList.remove("message-style");
    messages.removeChild(message);
  }, 5000);
  return false;
});
