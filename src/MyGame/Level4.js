/*
 * File: MyGame.js 
 * This is the logic of our game. 
 */

/*jslint node: true, vars: true */
/*global gEngine, Scene, GameObjectset, TextureObject, Camera, vec2,
  FontRenderable, SpriteRenderable, LineRenderable,
  GameObject */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Level4() {
    
    
    this.kPlatformTexture = "assets/platform.png";
    this.kWallTexture = "assets/wall.png";
    this.kTargetTexture = "assets/target.png";
    this.kSquare="assets/box.png";
    this.kCloud="assets/cloud.png";
    this.kCloud1="assets/cloud1.png";
    this.kBallon="assets/ballon.png";
    this.kStair="assets/stair.png";
    this.kStone="assets/stone.png";
    this.kSign="assets/s4.png";
    this.kRoad="assets/Road.png";
    this.kCloud_t="assets/cloud_t.png";
    this.kSquare_t="assets/square_h.png";
    this.kHeroSprite="assets/hero_sprite.png";
    this.kBg="assets/background.png";
    this.kPlayagain="assets/tips.png";
    this.klevel1pic="assets/level4pic.png";
    
    this.boxstate=0;
    
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
    this.mPlayagain=null;
    this.mlevel1pic=null;
    
    
    this.mAllObjs = null;
    this.mNonRigid=null;
    
    
    this.mCamera = null;

    this.mMsg = null;
    this.mMsg2 = null;
    this.mLevelMsg = null;
    this.mHelpMsg = null;
    
    this.mFocusObj = null;
    
    this.isdead=0;
    this.time1=0;
    this.time2=201;
    this.time= new Date();
    this.waitforkey = 0;
    this.wait2s = 0;
    
}
gEngine.Core.inheritPrototype(Level4, Scene);


Level4.prototype.loadScene = function () {
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
    gEngine.Textures.loadTexture(this.kPlayagain);
    gEngine.Textures.loadTexture(this.klevel1pic);
            
};

Level4.prototype.unloadScene = function () {
    
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
    gEngine.Textures.unloadTexture(this.kPlayagain);
    gEngine.Textures.unloadTexture(this.klevel1pic);
    
    var nextlevel=null;
    if(this.mHero.sta===1) {
        nextlevel=new End();
    }
    if(this.mHero.sta===2) {
        nextlevel=new Level4();
    }
        
    gEngine.Core.startScene(nextlevel);
    
 
};

Level4.prototype.initialize = function () {
    // Step A: set up the cameras
    this.mCamera = new Camera(
        vec2.fromValues(50, 40), // position of the camera
        100,                     // width of camera
        [0, 0, 1500, 600]         // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([0.8, 0.8, 0.8, 1]);
            // sets the background to gray
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);
      
    this.mAllObjs = new GameObjectSet();
    this.mNonRigid = new GameObjectSet();
    
    
    this.mCloud=new Cloud(this.kCloud,65,55.5,16,9.14);
    this.mCloud1=new Cloud_1(this.kCloud1,35,44,16,10);
    this.mSquare=new Square(this.kSquare,45,37,5,5);
    this.mSquare1=new Square(this.kSquare,55,47,5,5);
    this.mBallon=new Ballon(this.kBallon,10,35,5,10);
    this.mSign=new Sign(this.kSign,15,55,24,8);
    this.mStair=new Stair(this.kStair,94,33,10,13);
    this.mStone=new Stone(this.kStone,72,35,17,17);

    this.mCloudt=new Cloud_t(this.kCloud_t,65,55.5,18,10.2);
    this.mSquaret=new Squaret(this.kSquare_t,45,37,4.8,4.8);  
    this.mPlayagain = new Playagain(this.kPlayagain, 50,40,40,20);
    this.mlevel1pic = new Playagain(this.klevel1pic,50,40,40,20);

    this.mHero=new Hero2(this.kHeroSprite);
    


    
    this.mRoad1=new Road(this.kRoad,15,-20,30,92);
    this.mRoad2=new Road(this.kRoad,70,13,60,26);
    this.mRoad3=new Road(this.kRoad,100,-20,140,20);
    this.mRoad4=new Road(this.kRoad,120,0,5,5);
    this.mRoad5=new Road(this.kRoad,110,-7,5,5);
    this.mRoad6=new Road(this.kRoad,110,10,5,5);
    this.mRoad7=new Road(this.kRoad,105,18,5,5);
    this.mPlayagain.setVisibility(0);
    this.mlevel1pic.setVisibility(1);
    
    
    this.mCloudt.setVisibility(0);
    this.mSquaret.setVisibility(0);
    

    this.mAllObjs.addToSet(this.mStone);
    this.mAllObjs.addToSet(this.mSquare);
    this.mAllObjs.addToSet(this.mSquare1);
    this.mAllObjs.addToSet(this.mSquaret);
    this.mAllObjs.addToSet(this.mRoad1);
    this.mAllObjs.addToSet(this.mRoad2);
    this.mAllObjs.addToSet(this.mHero);
    
    
    
    this.mAllObjs.addToSet(this.mRoad3);
    this.mAllObjs.addToSet(this.mRoad4);
    this.mAllObjs.addToSet(this.mRoad5);
    this.mAllObjs.addToSet(this.mRoad6);
    this.mAllObjs.addToSet(this.mRoad7);

    
    this.mNonRigid.addToSet(this.mPlayagain);
    this.mNonRigid.addToSet(this.mlevel1pic);
    this.mNonRigid.addToSet(this.mSign);
    this.mNonRigid.addToSet(this.mCloud1);
    this.mNonRigid.addToSet(this.mCloud);
    this.mNonRigid.addToSet(this.mBallon);
    this.mNonRigid.addToSet(this.mStair);
    this.mNonRigid.addToSet(this.mCloudt);
    
           
    
    
    this.mMsg = new FontRenderable("Heavy");
    this.mMsg.setColor([0, 0, 0, 1]);
    this.mMsg.getXform().setPosition(70, 35);
    this.mMsg.setTextHeight(2);
    
    this.mLevelMsg = new FontRenderable("Level 4");
    this.mLevelMsg.setColor([0, 0, 0, 1]);
    this.mLevelMsg.getXform().setPosition(94, 58);
    this.mLevelMsg.setTextHeight(1.5);
    
    this.mHelpMsg = new FontRenderable("Try to hit the block and ...");
    this.mHelpMsg.setColor([0, 0, 0, 1]);
    this.mHelpMsg.getXform().setPosition(50, -26);
    this.mHelpMsg.setTextHeight(2);

};

// This is the draw function, make sure to setup proper drawing environment, and more
// importantly, make sure to _NOT_ change any state.
Level4.prototype.draw = function () {
    // Step A: clear the canvas
    gEngine.Core.clearCanvas([0.9, 0.9, 0.9, 1.0]); // clear to light gray

    this.mCamera.setupViewProjection();
    

    this.mCollisionInfos = []; 
    

    this.mAllObjs.draw(this.mCamera);
    this.mNonRigid.draw(this.mCamera);
    
    this.mMsg.draw(this.mCamera);
    this.mLevelMsg.draw(this.mCamera);
    this.mHelpMsg.draw(this.mCamera);

};


Level4.prototype.update = function () {
    if(this.wait2s < 120)
        this.wait2s +=1;
    else
        this.mlevel1pic.setVisibility(0);
    
    var zoomDelta = 0.5;
    
    this.mCamera.update();  




     
     if(this.time2-this.time1===20)
     {
         gEngine.GameLoop.stop();
     }

    
     this.mBallon.rotateObjPointTo(this.mHero.getXform().getPosition(), 1);

    this.mFocusObj = this.mHero;

    // zoom
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.J)) {
        this.mCamera.zoomTowards(this.mFocusObj.getXform().getPosition(), 1 - zoomDelta);
    }
    if (gEngine.Input.isKeyClicked(gEngine.Input.keys.K)) {
        this.mCamera.zoomTowards(this.mFocusObj.getXform().getPosition(), 1 + zoomDelta);
    }
    this.mCamera.update();
    
    var ypos=this.mHero.getXform().getYPos();
    // interaction with the WC bound
    //if(ypos>=-10 )
        //this.mCamera.panWith(this.mHero.getXform(), 0.999999999);
    
    if(this.boxstate)
        this.mCamera.panWith(this.mHero.getXform(), 0.8);
        
    this.mCamera.update();    
    
    this.mAllObjs.update(this.mCamera);    
    gEngine.Physics.processCollision(this.mAllObjs, []);
    this.mNonRigid.update(this.mCamera);   
    
    this.xsize = 20;
    this.ysize = 20;
    
    this.mCamera.update();
    
    var xform = this.mHero.getXform();
    var xpos = xform.getXPos();
    var ypos = xform.getYPos();
    
    if(!this.boxstate)
    {
        if(ypos<=20 && !this.isdead) 
        { 
        this.mHero.mode=10;
        this.isdead=1;
        this.mHero.sta=2;       
        this.time1=this.time.getMilliseconds();
        this.time2=this.time1;   
         }
            
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.H)) {
        this.mHelpMsg.getXform().setYPos(25); 
    }
    if(xpos<=60 && xpos>=53 && ypos>47&& !this.isdead) {
        this.flag=true;
        this.mHero.mode=10;
        this.mHero.sta=2;
        this.isdead=1;
        this.mCloudt.setVisibility(1);
        this.time1=this.time.getMilliseconds();
        this.time2=this.time1;       
        
    }
    
    
    var xsquare=this.mSquare.getXform().getXPos();
    if(xpos>xsquare-2 && xpos<xsquare+2 && ypos===31.25)
    {
        this.boxstate=1;
        this.mSquare.setVisibility(0);
        this.mSquaret.setVisibility(1);
        
        
    }
    
    if(this.isdead)
    {
        if(gEngine.Input.isKeyClicked(gEngine.Input.keys.S))
            this.waitforkey = -1;
        if(this.waitforkey>=0){
            this.mPlayagain.setVisibility(1);
            this.waitforkey = 1;
        }
        else{
            this.time2=this.time2+1;
            this.mHero.setMode(10);
            this.mHero.sta=2;   
        }   
    }
    
};