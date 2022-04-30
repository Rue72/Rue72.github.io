(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CharacterSheet_atlas_1", frames: [[0,0,1920,1080],[0,1082,1277,793]]},
		{name:"CharacterSheet_atlas_2", frames: [[1284,0,758,800],[1278,802,550,450],[1278,1254,550,450],[0,651,1276,640],[0,1293,1276,505],[0,0,1282,649]]},
		{name:"CharacterSheet_atlas_3", frames: [[0,904,600,82],[0,0,550,450],[0,452,550,450]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.background = function() {
	this.initialize(ss["CharacterSheet_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BardanTitle = function() {
	this.initialize(ss["CharacterSheet_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bardan = function() {
	this.initialize(ss["CharacterSheet_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Character = function() {
	this.initialize(ss["CharacterSheet_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Character_Detail = function() {
	this.initialize(ss["CharacterSheet_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Combat = function() {
	this.initialize(ss["CharacterSheet_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Combat_Detail = function() {
	this.initialize(ss["CharacterSheet_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Magitek = function() {
	this.initialize(ss["CharacterSheet_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Magitek_Detail = function() {
	this.initialize(ss["CharacterSheet_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ToolsandTrade = function() {
	this.initialize(ss["CharacterSheet_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tools_Detail = function() {
	this.initialize(ss["CharacterSheet_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tools = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ToolsandTrade();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tools, new cjs.Rectangle(0,0,550,450), null);


(lib.toolbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ToolsandTrade();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,450);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Magitek_Detail();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,1276,505), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BardanTitle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,600,82), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bardan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,758,800), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Combat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ToolsandTrade();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Character();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Combat_Detail();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,1276,640), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BardanTitle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,600,82), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bardan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,758,800), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Magitek();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ToolsandTrade();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Character();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tools_Detail();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,1282,649), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BardanTitle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,600,82), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bardan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,758,800), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Magitek();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Combat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Character();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Character_Detail();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,1277,793), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BardanTitle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,600,82), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bardan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,758,800), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Combat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Magitek();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,550,450), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ToolsandTrade();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,550,450), null);


(lib.magit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Magitek();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.magit, new cjs.Rectangle(0,0,550,450), null);


(lib.magibtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Magitek();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,450);


(lib.combbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Combat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,450);


(lib.comba = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Combat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.comba, new cjs.Rectangle(0,0,550,450), null);


(lib.charbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Character();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,450);


(lib.chara = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Character();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chara, new cjs.Rectangle(0,0,550,450), null);


(lib.bardantitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BardanTitle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bardantitle, new cjs.Rectangle(0,0,600,82), null);


(lib.bardan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bardan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bardan, new cjs.Rectangle(0,0,758,800), null);


// stage content:
(lib.CharacterSheet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {load:0,image_load:1,load_stop:2,charin:3,charout:31,toolin:59,toolout:87,combin:115,combout:143,magiin:171,magiout:199};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,30,31,58,59,86,87,114,115,142,143,170,171,198,199,226];
	// timeline functions:
	this.frame_0 = function() {
		root = this;
		//this.lightningbtn.visible = false;
		
		status = 'main'
		
		
		// This Function is for the Fire Button
		////////////////////////////////////////////////
		this.charbtn.addEventListener("click", charnext)
		function charnext () {
		
			if(status == 'main'){
				root.gotoAndPlay('charin');
				status = 'sub'
			}
		    else{
				root.gotoAndPlay('charout');
				status = 'main'
			}
		}
		
		this.toolbtn.addEventListener("click", toolnext)
		function toolnext () {
		
			if(status == 'main'){
				root.gotoAndPlay('toolin');
				status = 'sub'
			}
		    else{
				root.gotoAndPlay('toolout');
				status = 'main'
			}
		}
		
		this.combbtn.addEventListener("click", combnext)
		function combnext () {
		
			if(status == 'main'){
				root.gotoAndPlay('combin');
				status = 'sub'
			}
		    else{
				root.gotoAndPlay('combout');
				status = 'main'
			}
		}
		
		this.magibtn.addEventListener("click", maginext)
		function maginext () {
		
			if(status == 'main'){
				root.gotoAndPlay('magiin');
				status = 'sub'
			}
		    else{
				root.gotoAndPlay('magiout');
				status = 'main'
			}
		}
	}
	this.frame_1 = function() {
		this.charbtn.visible = true;
		this.toolbtn.visible = true;
		this.combbtn.visible = true;
		this.magibtn.visible = true;
		
		this.chara.visible = false;
		this.tools.visible = false;
		this.comba.visible = false;
		this.magit.visible = false;
		
		this.bardan.visible = true;
		this.bardantitle.visible = true;
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.charbtn.visible = false;
		this.toolbtn.visible = false;
		this.combbtn.visible = false;
		this.magibtn.visible = false;
		
		this.chara.visible = true;
		this.tools.visible = false;
		this.comba.visible = false;
		this.magit.visible = false;
		
		this.bardan.visible = false;
		this.bardantitle.visible = false;
	}
	this.frame_30 = function() {
		this.stop();
		
		this.charbtn.visible = true;
		
		this.chara.visible = false;
	}
	this.frame_31 = function() {
		this.charbtn.visible = false;
		
		this.chara.visible = true;
	}
	this.frame_58 = function() {
		this.stop();
		this.gotoAndPlay('image_load');
	}
	this.frame_59 = function() {
		this.charbtn.visible = false;
		this.toolbtn.visible = false;
		this.combbtn.visible = false;
		this.magibtn.visible = false;
		
		this.chara.visible = false;
		this.tools.visible = true;
		this.comba.visible = false;
		this.magit.visible = false;
		
		this.bardan.visible = false;
		this.bardantitle.visible = false;
	}
	this.frame_86 = function() {
		this.stop();
		
		this.toolbtn.visible = true;
		
		this.tools.visible = false;
	}
	this.frame_87 = function() {
		this.toolbtn.visible = false;
		
		this.tools.visible = true;
	}
	this.frame_114 = function() {
		this.stop();
		this.gotoAndPlay('image_load');
	}
	this.frame_115 = function() {
		this.charbtn.visible = false;
		this.toolbtn.visible = false;
		this.combbtn.visible = false;
		this.magibtn.visible = false;
		
		this.chara.visible = false;
		this.tools.visible = false;
		this.comba.visible = true;
		this.magit.visible = false;
		
		this.bardan.visible = false;
		this.bardantitle.visible = false;
	}
	this.frame_142 = function() {
		this.stop();
		
		this.combbtn.visible = true;
		
		this.comba.visible = false;
	}
	this.frame_143 = function() {
		this.combbtn.visible = false;
		
		this.comba.visible = true;
	}
	this.frame_170 = function() {
		this.stop();
		this.gotoAndPlay('image_load');
	}
	this.frame_171 = function() {
		this.charbtn.visible = false;
		this.toolbtn.visible = false;
		this.combbtn.visible = false;
		this.magibtn.visible = false;
		
		this.chara.visible = false;
		this.tools.visible = false;
		this.comba.visible = false;
		this.magit.visible = true;
		
		this.bardan.visible = false;
		this.bardantitle.visible = false;
	}
	this.frame_198 = function() {
		this.stop();
		
		this.magibtn.visible = true;
		
		this.magit.visible = false;
	}
	this.frame_199 = function() {
		this.magibtn.visible = false;
		
		this.magit.visible = true;
	}
	this.frame_226 = function() {
		this.stop();
		this.gotoAndPlay('image_load');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(27).call(this.frame_30).wait(1).call(this.frame_31).wait(27).call(this.frame_58).wait(1).call(this.frame_59).wait(27).call(this.frame_86).wait(1).call(this.frame_87).wait(27).call(this.frame_114).wait(1).call(this.frame_115).wait(27).call(this.frame_142).wait(1).call(this.frame_143).wait(27).call(this.frame_170).wait(1).call(this.frame_171).wait(27).call(this.frame_198).wait(1).call(this.frame_199).wait(27).call(this.frame_226).wait(1));

	// Button
	this.magibtn = new lib.magibtn();
	this.magibtn.name = "magibtn";
	this.magibtn.setTransform(1637,847,1,1,0,0,0,275,225);
	new cjs.ButtonHelper(this.magibtn, 0, 1, 1);

	this.combbtn = new lib.combbtn();
	this.combbtn.name = "combbtn";
	this.combbtn.setTransform(1637,233,1,1,0,0,0,275,225);
	new cjs.ButtonHelper(this.combbtn, 0, 1, 1);

	this.toolbtn = new lib.toolbtn();
	this.toolbtn.name = "toolbtn";
	this.toolbtn.setTransform(283,847,1,1,0,0,0,275,225);
	new cjs.ButtonHelper(this.toolbtn, 0, 1, 1);

	this.charbtn = new lib.charbtn();
	this.charbtn.name = "charbtn";
	this.charbtn.setTransform(283,233,1,1,0,0,0,275,225);
	new cjs.ButtonHelper(this.charbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.charbtn},{t:this.toolbtn},{t:this.combbtn},{t:this.magibtn}]}).wait(227));

	// magitext
	this.instance = new lib.Symbol24();
	this.instance.setTransform(674,312.5,1,1,0,0,0,638,252.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185).to({_off:false},0).wait(1).to({alpha:0.0754},0).wait(1).to({alpha:0.1508},0).wait(1).to({alpha:0.2262},0).wait(1).to({alpha:0.3015},0).wait(1).to({alpha:0.3769},0).wait(1).to({alpha:0.4523},0).wait(1).to({alpha:0.5277},0).wait(1).to({alpha:0.6031},0).wait(1).to({alpha:0.6785},0).wait(1).to({alpha:0.7538},0).wait(1).to({alpha:0.8292},0).wait(1).to({alpha:0.9046},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.91},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(14));

	// magititle
	this.instance_1 = new lib.Symbol23();
	this.instance_1.setTransform(960,59,1,1,0,0,0,300,41);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(171).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(1));

	// magibard
	this.instance_2 = new lib.Symbol22();
	this.instance_2.setTransform(959,540,1,1,0,0,0,379,400);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(171).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(1));

	// magicomb
	this.instance_3 = new lib.Symbol21();
	this.instance_3.setTransform(1637,233,1,1,0,0,0,275,225);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(171).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(1));

	// magitool
	this.instance_4 = new lib.Symbol20();
	this.instance_4.setTransform(283,847,1,1,0,0,0,275,225);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(171).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(1));

	// magichar
	this.instance_5 = new lib.Symbol19();
	this.instance_5.setTransform(283,233,1,1,0,0,0,275,225);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(171).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(1));

	// combtext
	this.instance_6 = new lib.Symbol18();
	this.instance_6.setTransform(674,380,1,1,0,0,0,638,320);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130).to({_off:false},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(70));

	// combchar
	this.instance_7 = new lib.Symbol13();
	this.instance_7.setTransform(283,233,1,1,0,0,0,275,225);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(115).to({_off:false},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).wait(29).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(56));

	// combtool
	this.instance_8 = new lib.Symbol14();
	this.instance_8.setTransform(283,847,1,1,0,0,0,275,225);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(115).to({_off:false},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).wait(29).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(56));

	// combmagi
	this.instance_9 = new lib.Symbol15();
	this.instance_9.setTransform(1637,847,1,1,0,0,0,275,225);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(115).to({_off:false},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).wait(29).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(56));

	// combbard
	this.instance_10 = new lib.Symbol16();
	this.instance_10.setTransform(959,540,1,1,0,0,0,379,400);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(115).to({_off:false},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).wait(29).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(56));

	// combtitle
	this.instance_11 = new lib.Symbol17();
	this.instance_11.setTransform(960,59,1,1,0,0,0,300,41);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115).to({_off:false},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).wait(29).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(56));

	// tooltext
	this.instance_12 = new lib.Symbol12();
	this.instance_12.setTransform(1245,384.5,1,1,0,0,0,641,324.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(73).to({_off:false},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(126));

	// tooltitle
	this.instance_13 = new lib.Symbol11();
	this.instance_13.setTransform(960,59,1,1,0,0,0,300,41);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(112));

	// toolbard
	this.instance_14 = new lib.Symbol10();
	this.instance_14.setTransform(959,540,1,1,0,0,0,379,400);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(59).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(112));

	// toolmagi
	this.instance_15 = new lib.Symbol9();
	this.instance_15.setTransform(1637,847,1,1,0,0,0,275,225);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(59).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(112));

	// toolcom
	this.instance_16 = new lib.Symbol8();
	this.instance_16.setTransform(1637,233,1,1,0,0,0,275,225);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(59).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(112));

	// toolchar
	this.instance_17 = new lib.Symbol7();
	this.instance_17.setTransform(283,233,1,1,0,0,0,275,225);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(59).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(112));

	// chartext
	this.instance_18 = new lib.Symbol6();
	this.instance_18.setTransform(1242.5,456.5,1,1,0,0,0,638.5,396.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(17).to({_off:false},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.9286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.7857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.6429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.3571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.2143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.0714},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(182));

	// chartitle
	this.instance_19 = new lib.Symbol5();
	this.instance_19.setTransform(960,59,1,1,0,0,0,300,41);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(168));

	// charbard
	this.instance_20 = new lib.Symbol4();
	this.instance_20.setTransform(959,540,1,1,0,0,0,379,400);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(168));

	// charcomba
	this.instance_21 = new lib.Symbol3();
	this.instance_21.setTransform(1637,233,1,1,0,0,0,275,225);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(168));

	// charmagi
	this.instance_22 = new lib.Symbol2();
	this.instance_22.setTransform(1637,847,1,1,0,0,0,275,225);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(3).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(168));

	// chartools
	this.instance_23 = new lib.Symbol1();
	this.instance_23.setTransform(283,847,1,1,0,0,0,275,225);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(3).to({_off:false},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).wait(30).to({alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(168));

	// Items
	this.bardantitle = new lib.bardantitle();
	this.bardantitle.name = "bardantitle";
	this.bardantitle.setTransform(960,59,1,1,0,0,0,300,41);

	this.bardan = new lib.bardan();
	this.bardan.name = "bardan";
	this.bardan.setTransform(959,540,1,1,0,0,0,379,400);

	this.magit = new lib.magit();
	this.magit.name = "magit";
	this.magit.setTransform(1637,847,1,1,0,0,0,275,225);

	this.comba = new lib.comba();
	this.comba.name = "comba";
	this.comba.setTransform(1637,233,1,1,0,0,0,275,225);

	this.tools = new lib.tools();
	this.tools.name = "tools";
	this.tools.setTransform(283,847,1,1,0,0,0,275,225);

	this.chara = new lib.chara();
	this.chara.name = "chara";
	this.chara.setTransform(283,233,1,1,0,0,0,275,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chara},{t:this.tools},{t:this.comba},{t:this.magit},{t:this.bardan},{t:this.bardantitle}]}).wait(227));

	// Background
	this.instance_24 = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(227));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,540);
// library properties:
lib.properties = {
	id: '8C690D7FF1842A4C98D887D5AB8910C7',
	width: 1920,
	height: 1080,
	fps: 14,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CharacterSheet_atlas_1.png", id:"CharacterSheet_atlas_1"},
		{src:"images/CharacterSheet_atlas_2.png", id:"CharacterSheet_atlas_2"},
		{src:"images/CharacterSheet_atlas_3.png", id:"CharacterSheet_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8C690D7FF1842A4C98D887D5AB8910C7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;