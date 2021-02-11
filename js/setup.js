"use strict";

var setup = document.querySelector(".setup");
var setupSimilar = document.querySelector(".setup-similar");
var setupSimilarList = document.querySelector(".setup-similar-list");
var WIZARD_TEMPLATE = document
  .querySelector("#similar-wizard-template")
  .content.querySelector(".setup-similar-item");

setup.classList.remove("hidden");

var FIRST_NAMES = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон",
];

var LAST_NAMES = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг",
];

var COAT_COLORS = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)",
];

var EYES_COLORS = ["black", "red", "blue", "yellow", "green"];

var WIZARDS_COUNT = 4;

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var randName =
      getRandomElement(FIRST_NAMES) + " " + getRandomElement(LAST_NAMES);
    var randCoatColor = getRandomElement(COAT_COLORS);
    var randEyesColor = getRandomElement(EYES_COLORS);

    wizards[i] = {
      name: randName,
      coatColor: randCoatColor,
      eyesColor: randEyesColor,
    };
  }

  return wizards;
};

var renderWizard = function (wizardObject) {
  var wizardElement = WIZARD_TEMPLATE.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent =
    wizardObject.name;
  wizardElement.querySelector(".wizard-coat").style.fill =
    wizardObject.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill =
    wizardObject.eyesColor;
  return wizardElement;
};

var getWizardFragment = function (wizardsArray) {
  var wizardFragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsArray.length; i++) {
    var wizardElement = renderWizard(wizardsArray[i]);
    wizardFragment.append(wizardElement);
  }
  return wizardFragment;
};

var renderWizards = function () {
  var wizards = generateWizards();
  var wizardFragment = getWizardFragment(wizards);
  setupSimilarList.append(wizardFragment);
};

renderWizards();
setupSimilar.classList.remove("hidden");
