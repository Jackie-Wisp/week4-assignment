//The main purpose is to handle the data from the form

//Select the form from the DOM
const guestForm = document.querySelector("#guestBook")
//We need to build an event that handles the data from the form
function handleSubmitMessageForm(event) {
      event.preventDefault();

      const formData = new FormData(guestForm)
      const formValues = Object.fromEntries(formData)

      fetch("http://localhost:8080/guestBook", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ formValues }),
      })
      console.log(formValues);
}
//event handler


guestForm.addEventListener("submit", handleSubmitMessageForm);
//event listener


//the server url should be your local host while you are developing
//! when you finish, you should replace it with your RENDER server url
//https://week4-assignment.onrender.com
//fetch("server url", {
 // method: "POST",
 // headers: {
  //  "Content-type": "application/json",
 // },
 // body: JSON.stringify({ formValues }),
//});

//The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM

