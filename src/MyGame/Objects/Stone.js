/* File: Hero.js 
 *
 * Creates and initializes the Hero (Dye)
 * overrides the update function of GameObject to define
 * simple Dye behavior
 */

/*jslint node: true, vars: true */
/*global gEngine: false, GameObject: false, SpriteRenderable: false */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Stone(spriteTexture, atX, atY, size1,size2) {
        
    this.xsize = size1;
    this.ysize = size2;
    this.mStone = new SpriteRenderable(spriteTexture);
    this.mStone.setColor([1, 1, 1, 0]);
    this.mStone.getXform().setPosition(atX, atY);
    this.mStone.getXform().setSize(size1, size2);
    this.mStone.setElementUVCoordinate(0.22, 0.76,0.28,0.71);

    GameObject.call(this, this.mStone);
    
    var r;

    r = new RigidRectangle(this.getXform(), size1, size2);
    this.setRigidBody(r);
    r.setRestitution(0);
    r.setMass(0);
    r.setFriction(0.1);
    //this.toggleDrawRenderable();
    //this.toggleDrawRigidShape();
    
}

gEngine.Core.inheritPrototype(Stone, WASDObj);


Stone.prototype.update = function (mCamera) {
    GameObject.prototype.update.call(this);
    /*var kWASDDelta = 0.3;
    var xform = this.getXform();
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Up)) {
        xform.incYPosBy(kWASDDelta);
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Down)) {
        xform.incYPosBy(-kWASDDelta);
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Left)) {
        xform.incXPosBy(-kWASDDelta);
    }
    if (gEngine.Input.isKeyPressed(gEngine.Input.keys.Right)) {
        xform.incXPosBy(kWASDDelta);
    }*/
    
    if(gEngine.Input.isButtonPressed(gEngine.Input.mouseButton.Left)) {
        /*if(mCamera.isMouseInViewport()) {
            var WCX = mCamera.mouseWCX();
            var WCY = mCamera.mouseWCY();
            var mX = this.mStone.getXform().getXPos();
            var mY = this.mStone.getXform().getYPos();
            console.log(mX,mY,WCX,WCY);
            
            if(WCX <= mX + this.xsize && WCX >= mX - this.xsize && WCY <= mY + this.ysize && WCY >= mY - this.ysize) {
                console.log(1);
                this.mStone.getXform().setXPos(mCamera.mouseWCX());
                this.mStone.getXform().setYPos(mCamera.mouseWCY());
            }
        }*/
        
    }
    
    
};
