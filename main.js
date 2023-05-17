import { getChampions } from "./peticiones/peticion.js";

const btnChampions = document.querySelectorAll(".btn-champions");

btnChampions.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const role = e.target.id;

    getChampions(role);
  });
});
