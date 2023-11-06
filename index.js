"use strict";
const taskInput = document.getElementById("create");
const container = document.querySelector(".tasks-container");
const addTask = () => {
  if (taskInput.value === "") {
    alert("Please write something");
  } else {
    const li = document.createElement("li");
    li.textContent = `${taskInput.value} add the ${formatDay}`;
    container.appendChild(li);
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    save();
  }
  taskInput.value = "";
};
container.addEventListener("click", (e) => {
  const target = e.target;
  if (target instanceof HTMLLIElement) {
    target.classList.toggle("checked");
  } else if (target instanceof HTMLSpanElement) {
    target.parentElement?.remove();
  }
  save();
});
const save = () => {
  localStorage.setItem("tasks", container.innerHTML);
};
const getSave = () => {
  const savedData = localStorage.getItem("tasks");
  if (savedData) {
    container.innerHTML = savedData;
  }
};
getSave();
const date = new Date();
const day = date.getDate();
const years = date.getFullYear();
let month = date.getMonth() + 1;
let formattedMonth = month < 10 ? `0${month}` : `${month}`;
const formatDay = `${day}/${formattedMonth}/${years}`;
