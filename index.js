// binds an event listener in addingEventListener()

const input = document.getElementById("input");

function addingEventListener() {
  input.addEventListener("click", () => alert("I was clicked!"))
};

//need to call the function to invoke it
addingEventListener();