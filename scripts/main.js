function snapThis() {
  alert("Hello world!");
  var node = document.getElementById("tweet-box")
  console.log("Obtained the node!!");
    domtoimage.toBlob(node)
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
    // domtoimage.toPng(node)
    // .then(function (dataUrl) {
    //     var img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
    // })
    // .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    // });
}