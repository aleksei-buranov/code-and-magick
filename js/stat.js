"use strict";

window.renderStatistics = function (ctx, names, times) {
  if (names.length !== times.length) {
    return;
  }

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var FONT_SIZE = 16;
  var MARGIN = 15;
  var CHART_MARGIN = 50;
  var COLUMN_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var PLAYER_COLUMN_COLOR = "rgba(255,0,0,1)";

  ctx.fillStyle = "rgba(0,0,0,0.7)";
  ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = "rgb(255,255,255)";
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  var textPositionX = CLOUD_X + MARGIN;
  var textPositionY = CLOUD_Y + MARGIN + FONT_SIZE;
  ctx.font = FONT_SIZE + "px 'PT Mono'";
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillText("Ура вы победили!", textPositionX, textPositionY, CLOUD_WIDTH);

  textPositionY += FONT_SIZE;
  ctx.fillText(
    "Список результатов:",
    textPositionX,
    textPositionY,
    CLOUD_WIDTH
  );

  var chartLineX = CLOUD_X + CHART_MARGIN;
  var chartLineY = CLOUD_Y + CLOUD_HEIGHT - MARGIN;
  var maxTime = Math.max.apply(null, times);
  var heightRate = (maxTime / COLUMN_HEIGHT).toFixed(0);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], chartLineX, chartLineY, COLUMN_WIDTH);

    var currentFill =
      names[i] === "Вы"
        ? PLAYER_COLUMN_COLOR
        : "hsl(240," + (Math.random() * 100).toFixed(0) + "%,50%)";
    ctx.fillStyle = currentFill;
    var currentColumnHeight = (times[i] / heightRate).toFixed();
    ctx.fillRect(
      chartLineX,
      chartLineY - currentColumnHeight - FONT_SIZE - 5,
      COLUMN_WIDTH,
      currentColumnHeight
    );

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText(
      times[i].toFixed(0),
      chartLineX,
      chartLineY - currentColumnHeight - FONT_SIZE - 15,
      COLUMN_WIDTH
    );

    chartLineX += COLUMN_WIDTH + CHART_MARGIN;
  }
};
