function constructInformativesTop(json) {
  const $wrapper = document.querySelector(".header__informatives-wrapper");

  for (completeText of json) {
    $wrapper.innerHTML += `
    <span class="header__informatives-top--text
      ${completeText.firstBold ? "-strong" : ""}">
      ${completeText.text}
      <strong class= "header__informatives-top--text${
        completeText.firstBold === false ? "-strong" : "-margin"
      }">
        ${completeText.bold}
      </strong>
   </span>`;
  }
}

function informativesTop() {
  fetch("../../src/mocks/INFORMATIVES_TOP.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructInformativesTop(json);
    });
}

function requestMenuDesktop() {
  fetch("../../src/mocks/MENU.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructMenuDesktop(json);
    });
}

function constructMenuDesktop(json) {
  let structureMenu = "";
  const $containerMenu = document.querySelector(".header__menu");

  for (const menu of json) {
    structureMenu += `<div class="header__menu-wrapper">
    <a href=${menu.url} class="header__menu-department script">${menu.name}
    </div>`;
  }

  console.log("Funcionou");

  $containerMenu.innerHTML = structureMenu;
}

informativesTop();
requestMenuDesktop();
