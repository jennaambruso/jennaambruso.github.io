document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 1200, npcCollisionRadius: 100, actionDuration:600, jumpHeight: 300, npcSpeed: 150, maxSimultaneousNPCs: 1});
});