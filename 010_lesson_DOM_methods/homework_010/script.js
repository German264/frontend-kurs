const btn = document.querySelector("#magic-btn");

let btn2 = document.createElement("button");
btn2.setAttribute("id", "magic-btn-2"); // Устанавливаем id
btn2.innerText = "🤬 Я изменю тебя!";
btn2.style.backgroundColor = "#a78b71";
btn2.style.color = "white";

btn.addEventListener("click", () => {
  document.body.append(btn2);
});
btn2.addEventListener("click", () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});
