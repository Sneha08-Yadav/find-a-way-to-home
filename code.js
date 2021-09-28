var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9f80deb8-628e-4cd5-88f4-aeade318f596","074ab17a-9a0f-4758-86a8-8d6d0bc994c3"],"propsByKey":{"9f80deb8-628e-4cd5-88f4-aeade318f596":{"name":"house","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"1_EgbDm.fySQwTK1Zj02YezKrpnXAF6U","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9f80deb8-628e-4cd5-88f4-aeade318f596.png"},"074ab17a-9a0f-4758-86a8-8d6d0bc994c3":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"rOCTdP1dAq2gEy_LFF9A5mCNO0RHEzIQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/074ab17a-9a0f-4758-86a8-8d6d0bc994c3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var wall1 = createSprite(17,75,39,20);
wall1.shapeColor="red";
var wall2 = createSprite(72,22,20,40);
wall2.shapeColor="red";
var wall3 = createSprite(100,152,120,20);
wall3.shapeColor=('red');
var wall4 = createSprite(160, 19,100,30);
wall4.shapeColor=('red');
var wall5 = createSprite(198, 147,20,100);
wall5.shapeColor=('red');
var wall6 = createSprite(249,61,20,100);
wall6.shapeColor=('red');
var wall7 = createSprite(288, 147,100,20);
wall7.shapeColor=('red');
var wall8 = createSprite(385, 142,20,100);
wall8.shapeColor=('red');
var wall9 = createSprite(347,84,100,20);
wall9.shapeColor=('red');
var wall10 = createSprite(1,235,90,20);
wall10.shapeColor=('red');
var wall11 = createSprite(76, 232,20,100);
wall11.shapeColor=('red');
var wall12 = createSprite(17,328,20,130);
wall12.shapeColor=('red');
var wall13 = createSprite(123,224,20,100);
wall13.shapeColor=('red');
var wall14 = createSprite(155, 392,20,170);
wall14.shapeColor=('red');
var wall15 = createSprite(148, 302,100,20);
wall15.shapeColor=('red');
var wall16 = createSprite(220, 398,100,20);
wall16.shapeColor=('red');
var wall17 = createSprite(286, 400,20,160);
wall17.shapeColor=('red');
var wall18 = createSprite(396, 225,190,20);
wall18.shapeColor=('red');
var wall19 = createSprite(300, 225,20,80);
wall19.shapeColor=('red');
var wall20 = createSprite(188, 257,20,50);
wall20.shapeColor=('red');
var home = createSprite(372,376,20,30);
home.setAnimation("house");
var girl = createSprite(27,36,13,13);
girl.shapeColor="green";

function draw() {
 background("pink");
createEdgeSprites();
girl.bounceOff(edges);
girl.bounceOff(wall1);
girl.bounceOff(wall2);
girl.bounceOff(wall3);
girl.bounceOff(wall4);
 girl.bounceOff(wall5);
 girl.bounceOff(wall6);
 girl.bounceOff(wall7);
 girl.bounceOff(wall8);
 girl.bounceOff(wall9);
 girl.bounceOff(wall10);
 girl.bounceOff(wall11);
 girl.bounceOff(wall12);
 girl.bounceOff(wall13);
 girl.bounceOff(wall14);
 girl.bounceOff(wall15);
 girl.bounceOff(wall16);
 girl.bounceOff(wall17);
 girl.bounceOff(wall18);
 girl.bounceOff(wall19);
 girl.bounceOff(wall20);
if(keyDown(ENTER)){
girl.velocityX=0;
girl.velocityY=4;}
if(keyDown(UP_ARROW)){
girl.velocityX=0;
girl.velocityY=-2;}
 if(keyDown(DOWN_ARROW)){
girl.velocityX=0;
 girl.velocityY=2;} 
 if(keyDown(LEFT_ARROW)){
 girl.velocityX=0;
 girl.velocityX=-2;}
 if(keyDown(RIGHT_ARROW)){
 girl.velocityX=0;
 girl.velocityX=2;}
 if(girl.isTouching(home)){
textSize(50);
textFont("Impact");
  fill("maroon");
  stroke("pink");
  strokeWeight(5);
text("YOU WON",168,158);
}
 
 
 
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
