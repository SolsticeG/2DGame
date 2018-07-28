/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * File: Startpage.js 
 * It will provide the interface to start the game. 
 */

/*jslint node: true, vars: true */
/*global gEngine, Scene, GameObjectset, TextureObject, Camera, vec2,
  FontRenderable, SpriteRenderable, LineRenderable,
  GameObject */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Startpage() {
       
    this.kBgClip = "assets/sounds/BGClip.mp3";
    
    this.kPlatformTexture = "assets/platform.png";
    this.kWallTexture = "assets/wall.png";
    this.kTargetTexture = "assets/target.png";
    this.kSquare="assets/box.png";
    this.kCloud="assets/cloud.png";
    this.kCloud1="assets/cloud1.png";
    this.kBallon="assets/ballon.png";
    this.kStair="assets/stair.png";
    this.kStone="assets/stone.png";
    this.kSign="assets/sign.png";
    this.kRoad="assets/Road.png";
    this.kCloud_t="assets/cloud_t.png";
    this.kSquare_t="assets/square_t.png";
    this.kHeroSprite="assets/hero_sprite.png";
    this.kBg="assets/background.png";
    this.kstartpic = "assets/startpic.png";/////////////////
    
    this.mState=2;
    this.flag=false;
    
    this.mSquare=null;
    this.mCloud=null;
    this.mCloud1=null;
    this.mBallon=null;
    this.mRoad1=null;
    this.mRoad2=null;
    this.mStone=null;
    this.mStair=null;
    this.mSign=null;
    this.mHero = null;
    this.mBg=null;
    this.mCloudt=null;
    this.mSquaret=null;
    
    this.mAllObjs = null;
    this.mNonRigid=null;
    
    this.mCamera = null;
    
    this.mMsg = null;
    this.mShapeMsg = null;
    
    this.mstartpic = null;////////////////////////
    
}
gEngine.Core.inheritPrototype(Startpage, Scene);

Startpage.prototype.loadScene = function () {
    gEngine.AudioClips.loadAudio(this.kBgClip);
    
    gEngine.Textures.loadTexture(this.kstartpic);
    /*
    gEngine.Textures.loadTexture(this.kPlatformTexture);
    gEngine.Textures.loadTexture(this.kWallTexture);
    gEngine.Textures.loadTexture(this.kTargetTexture);
    gEngine.Textures.loadTexture(this.kSquare);
    gEngine.Textures.loadTexture(this.kCloud);
    gEngine.Textures.loadTexture(this.kCloud1);
    gEngine.Textures.loadTexture(this.kBallon);
    gEngine.Textures.loadTexture(this.kStair);
    gEngine.Textures.loadTexture(this.kStone);
    gEngine.Textures.loadTexture(this.kSign);
    gEngine.Textures.loadTexture(this.kHeroSprite);
    gEngine.Textures.loadTexture(this.kRoad);
    gEngine.Textures.loadTexture(this.kCloud_t);
    gEngine.Textures.loadTexture(this.kSquare_t);
     */
            
};

Startpage.prototype.unloadScene = function () {
    gEngine.Textures.unloadTexture(this.kstartpic);
    /*
    gEngine.Textures.unloadTexture(this.kPlatformTexture);
    gEngine.Textures.unloadTexture(this.kWallTexture);
    gEngine.Textures.unloadTexture(this.kTargetTexture);
    gEngine.Textures.unloadTexture(this.kSquare);
    gEngine.Textures.unloadTexture(this.kCloud);
    gEngine.Textures.unloadTexture(this.kCloud1);
    gEngine.Textures.unloadTexture(this.kBallon);
    gEngine.Textures.unloadTexture(this.kStair);
    gEngine.Textures.unloadTexture(this.kStone);
    gEngine.Textures.unloadTexture(this.kSign);
    gEngine.Textures.unloadTexture(this.kHeroSprite);
    gEngine.Textures.unloadTexture(this.kRoad);
    gEngine.Textures.unloadTexture(this.kCloud_t);
    gEngine.Textures.unloadTexture(this.kSquare_t); 
     */
    
    var nextlevel=null;
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.S))
    {    
        nextlevel=new MyGame();
    }
            
    gEngine.Core.startScene(nextlevel);
    
};

Startpage.prototype.initialize = function () {
    // Step A: set up the cameras
    this.mCamera = new Camera(
        vec2.fromValues(50, 40), // position of the camera
        100,                     // width of camera
        [0, 0, 1500, 600]         // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([1, 1, 1, 1]);
            // sets the background to gray
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);
      
    //this.mAllObjs = new GameObjectSet();
    //this.mNonRigid = new GameObjectSet();
    
    this.mstartpic = new startpic(this.kstartpic,50,40,100,50);//////////
    
    //this.mAllObjs.addToSet(this.mstartpic);
    /*
    //this.createBounds();    
    
    this.mCloud=new Cloud(this.kCloud,65,57,16,9.14);
    this.mCloud1=new Cloud_1(this.kCloud1,35,44,10,6.25);
    this.mSquare=new Square(this.kSquare,45,37,5,5);
    this.mSquare1=new Square(this.kSquare,55,47,5,5);
    this.mBallon=new Ballon(this.kBallon,10,35,5,10);
    this.mSign=new Sign(this.kSign,15,55,24,8);
    this.mStair=new Stair(this.kStair,94,33,10,13);
    this.mStone=new Stone(this.kStone,72,35,17,17);
    this.mHero=new Hero(this.kHeroSprite);
    this.mRoad1=new Road(this.kRoad,12,14,28,26);
    this.mRoad2=new Road(this.kRoad,70,14,65,26);
    this.mCloudt=new Cloud_t(this.kCloud_t,65,57,18,10.2);
    this.mSquaret=new Square_t(this.kSquare_t,54,35,5.8,5.8);
    
    this.mCloudt.setVisibility(0);
    
    this.mAllObjs.addToSet(this.mStone);
    this.mAllObjs.addToSet(this.mSquare);
    this.mAllObjs.addToSet(this.mSquare1);
    this.mAllObjs.addToSet(this.mRoad1);
    this.mAllObjs.addToSet(this.mRoad2);
    this.mAllObjs.addToSet(this.mHero);

    
    this.mNonRigid.addToSet(this.mSign);
    this.mNonRigid.addToSet(this.mCloud1);
    this.mNonRigid.addToSet(this.mCloudt);
    this.mNonRigid.addToSet(this.mCloud);
    this.mNonRigid.addToSet(this.mBallon);
    this.mNonRigid.addToSet(this.mStair);
    
    
    this.mMsg = new FontRenderable("Heavy");
    this.mMsg.setColor([0, 0, 0, 1]);
    this.mMsg.getXform().setPosition(70, 35);
    this.mMsg.setTextHeight(2);
     */ 
    gEngine.AudioClips.playBackgroundAudio(this.kBgClip);
};

// This is the draw function, make sure to setup proper drawing environment, and more
// importantly, make sure to _NOT_ change any state.
Startpage.prototype.draw = function () {
    // Step A: clear the canvas

    gEngine.Core.clearCanvas([1, 1, 1, 1.0]); // clear to white

    this.mCamera.setupViewProjection();

    // for now draw these ...
    /*for (var i = 0; i<this.mCollisionInfos.length; i++) 
        this.mCollisionInfos[i].draw(this.mCamera); */
    //this.mCollisionInfos = []; 
    
    //this.mNonRigid.draw(this.mCamera);
    this.mstartpic.draw(this.mCamera);
    
    //this.mMsg.draw(this.mCamera);
    
    if(this.flag)
    {
        setTimeout(function() {
            console.log('Woke up!!');
    }, 10000);
        
    }
    
    //this.mMsg.draw(this.mCamera);   // only draw status in the main camera
    
};


Startpage.prototype.update = function () {
    this.mstartpic.update(this.mCamera);
    var nextlevel = null;
    if(gEngine.Input.isKeyClicked(gEngine.Input.keys.S))
    {    
        gEngine.GameLoop.stop();
    }
            
    /*
    this.mAllObjs.update(this.mCamera);    
    gEngine.Physics.processCollision(this.mAllObjs, []);
    this.mNonRigid.update(this.mCamera);   
    
    var xform = this.mHero.getXform();
    var xpos = xform.getXPos();
    var ypos = xform.getYPos();
    if(xpos<=65 && xpos>=57 && ypos>47) {
        this.flag=true;
        this.mHero.sta=2;
        this.mCloudt.setVisibility(1);
        //      
        
    }
    
  //this.mBallon.setSpeed(0.1);
  this.mBallon.rotateObjPointTo(this.mHero.getXform().getPosition(), 1);
  
  //GameObject.prototype.update.call(this.mBallon);
    */
    
};
