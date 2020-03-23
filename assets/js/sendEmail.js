(() => {
    emailjs.init("user_bXMwDjNNrfAYxbs0D1MYH");
})();
const myform = $("form#form-contact");
myform.submit(event => {
    event.preventDefault();

    let params = myform.serializeArray().reduce((obj, item) => {
        obj[item.name] = item.value;
        return obj;
    }, {});

    const service_id = "gmail";

    const template_id = "dice_game";
    myform.find("button").text("Sending...");
    emailjs.send(service_id, template_id, params).then(
        () => {
            myform.find("input").val("");
            myform.find("textarea").val("");
            myform.find("button").text("Submit");
        },
        (err) => {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Submit");
        }
    );
    const messages = document.getElementById("messages");
    messages.classList.add("message-style");
    const message = document.createTextNode("Your email was successfully sent");

    messages.appendChild(message);
    setTimeout(() => {
        messages.classList.remove("message-style");
        messages.removeChild(message);
    }, 5000);
    return false;
});
