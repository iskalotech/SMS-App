let phoneNumber = document.querySelector(".phoneNumber");
message = document.querySelector(".message");
submit = document.querySelector(".btnSend");
showMessage = document.querySelector(".showMessage");

submit.addEventListener("click", (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "App a9c1836b5443aa984369e356aa317f74-340786c3-96d0-4afb-9071-e778e173b045");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    const newJson = JSON.stringify({
        message: [
            {
                "destinations": [{ "to": phoneNumber.value }],
                "from": "Iskalo Tech",
                "text": message.value
            },
        ],
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: newJson,
        redirect: "follow",
    };

    showMessage.innerHTML = "Your message has been sent!";
    phoneNumber.value = "";
    message.value = "";

    fetch("https://e5drw1.api.infobip.com/sms/2/text/advanced", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
});
