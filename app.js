chrome.browserAction.onClicked.addListener(function(tab) {
  var myAudio = new Audio();
  myAudio.src = "parrot_wtf.mp3";
  myAudio.play();
});