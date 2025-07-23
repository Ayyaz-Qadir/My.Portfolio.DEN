function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
function handleSubmit() {
      const form = document.getElementById("contact-form");
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const message = form.querySelector('textarea[name="message"]').value;
      //  ... process the data or send it to the server using AJAX
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
    }

    // Add an event listener to the form submission
    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
      handleSubmit();
    });