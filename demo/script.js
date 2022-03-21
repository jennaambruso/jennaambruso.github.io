document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/Artboard 1.png", actionRadius: 100, timeBetweenNPCs: 1200, npcCollisionRadius: 100, actionDuration:600, jumpHeight: 300, npcSpeed: 150, maxSimultaneousNPCs: 1, removeNPCAfterInteracted: false, numOfCollectables: 1, removeCollectableAfterCollected: true, postGameScreenImageURLs:"./img/endscreen.png",pointsPerCollectable:1,playUntilScore: 3, pointsPerNPCInteracted: 0});
});