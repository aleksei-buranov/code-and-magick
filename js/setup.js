"use strict";

var setup = document.querySelector(".setup");
var setupSimilar = document.querySelector(".setup-similar");
setup.classList.remove("hidden");
setupSimilar.classList.remove("hidden");

var firstNames = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон",
];

var lastNames = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг",
];

var coatColors = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)",
];

var eyesColors = ["black", "red", "blue", "yellow", "green"];

var characters = [];

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var template = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");
var setupSimilarList = document.querySelector(".setup-similar-list");

for (var i = 0; i < 4; i++) {
  var randName =
    getRandomElement(firstNames) + " " + getRandomElement(lastNames);
  var randCoatColor = getRandomElement(coatColors);
  var randEyesColor = getRandomElement(eyesColors);
  characters[i] = {
    name: randName,
    coatColor: randCoatColor,
    eyesColor: randEyesColor,
  };
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent =
    characters[i].name;
  wizardElement.querySelector(".wizard-coat").style.fill =
    characters[i].coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill =
    characters[i].eyesColor;
  setupSimilarList.append(wizardElement);
}
