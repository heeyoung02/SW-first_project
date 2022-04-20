const nameForm = document.getElementById("name_form");
const nameInput = document.getElementById("name");

function nameSubmit() {
  const localName = nameInput.value;
  localStorage.setItem("Name", localName);
}

nameForm.addEventListener("submit", nameSubmit);
