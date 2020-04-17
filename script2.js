window.onload = function() {
  document.querySelector("#todo3").onchange = addBox;
  document.querySelector("#todo1").onchange = removeBox;
  document.querySelector("#todo2").onchange = removeBox;
};

function addBox() {
  var box = document.createElement("textarea");
  box.setAttribute("id", "box");

  var todo = document.querySelector("#todo");
  todo.appendChild(box);
}

function removeBox() {
  var box = document.querySelector("#box");
  var todo = document.querySelector("#todo");
  todo.removeChild(box);
}
