const taskInput = document.getElementById("create") as HTMLInputElement;
const container = document.querySelector(".tasks-container") as HTMLElement;

const addTask = (): void => {
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

container.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;
  if (target instanceof HTMLLIElement) {
    target.classList.toggle("checked");
  } else if (target instanceof HTMLSpanElement) {
    target.parentElement?.remove();
  }
  save();
});

const save = (): void => {
  localStorage.setItem("tasks", container.innerHTML);
};

const getSave = (): void => {
  const savedData = localStorage.getItem("tasks");
  if (savedData) {
    container.innerHTML = savedData;
  }
};

getSave();

const date: Date = new Date();
const day: number = date.getDate();
const years: number = date.getFullYear();
let month: number = date.getMonth() + 1;
let formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
const formatDay: string = `${day}/${formattedMonth}/${years}`;
