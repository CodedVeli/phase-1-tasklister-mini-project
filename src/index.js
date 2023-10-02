document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      const task = event.target.Description.value;
      const list = document.getElementById("tasks");
      const item = document.createElement("li");
      item.innerText = task;
      list.appendChild(item);

      console.log(task);
  });
});
