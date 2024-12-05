const btn = document.querySelector("#magic-btn");
btn.addEventListener("click", () => {
  let newElement = document.createElement("button");
  newElement.setAttribute("id", "magic-btn-2"); // Устанавливаем id
  newElement.innerText = "🤬 Я изменю тебя!";
  newElement.style.backgroundColor = "#a78b71";
  newElement.style.color = "white";
  document.body.append(newElement);

  const btn2 = document.querySelector("#magic-btn-2");
  btn2.addEventListener("click", () => {
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
  });
});
