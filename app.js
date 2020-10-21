const htmlToImage = require("html-to-image");
require("downloadjs");

function downloadThis () {
    htmlToImage.toPng(document.getElementById("tweet-box"))
    .then(function (dataUrl) {
      download(dataUrl, 'my-node.png');
    });
  }