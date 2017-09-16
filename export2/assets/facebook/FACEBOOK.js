(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 30,
	height: 30,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhqCEIAAkHIDVAAIAAEHg");
	this.shape.setTransform(10.8,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,26.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BGQgIAAgGgGQgGgFAAgJQAAgJAGgGQAGgGAIAAIATAAIAAgGQAAgVAEgPQADgSAJgMQAIgMAPgHQANgHAWAAQAYAAAOAFQAOAFAAAQQAAAMgGAIQgEAHgQAAQgUAAgIAJQgJAHAAAXIAAAGIAgAAQAJAAAGAGQAGAGAAAJQAAAJgGAFQgGAGgJAAg");
	this.shape.setTransform(8.4,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,14.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AAAheIAAC9");
	this.shape.setTransform(-1,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AAAhdQAABdAABe");
	this.shape_1.setTransform(-1.1,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgEhdQALBXgCBk");
	this.shape_2.setTransform(-1.6,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("Ag2hTQB2BHgKBg");
	this.shape_3.setTransform(-6.5,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("Ag2hSQB1BFgIBh");
	this.shape_4.setTransform(-6.6,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AA9BWQAHhhiAhK");
	this.shape_5.setTransform(-7.2,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AA1BaQAFhhhvhS");
	this.shape_6.setTransform(-6.4,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AArBpQgBhdhUh0");
	this.shape_7.setTransform(-5.4,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AAGh4QgJCPgCBi");
	this.shape_8.setTransform(-0.4,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgoBnQAGhqBLhj");
	this.shape_9.setTransform(3.1,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgyBcQAGhgBfhX");
	this.shape_10.setTransform(4.1,5.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AA2hcQhhBRgKBo");
	this.shape_11.setTransform(4.4,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AA0haQhdBNgKBo");
	this.shape_12.setTransform(4.2,5.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AAuhhQhSBbgKBo");
	this.shape_13.setTransform(3.7,4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgChqQAKBrgIBq");
	this.shape_14.setTransform(-0.9,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgThhQAvBbgKBo");
	this.shape_15.setTransform(-2.9,4.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgUhfQAxBXgKBo");
	this.shape_16.setTransform(-3,4.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgJhjQAaBegKBp");
	this.shape_17.setTransform(-1.8,4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AANheQgPBVgKBo");
	this.shape_18.setTransform(0.3,4.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AAQhdQgVBTgKBo");
	this.shape_19.setTransform(0.6,5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AAPheQgUBUgKBp");
	this.shape_20.setTransform(0.6,5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgGhfQAUBXgKBo");
	this.shape_21.setTransform(-1.5,4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgIhfQAQBXAABo");
	this.shape_22.setTransform(-1.9,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AgGhfQANBXAABo");
	this.shape_23.setTransform(-1.8,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AABhdQgBBTAABo");
	this.shape_24.setTransform(-0.9,5.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AAChdQgDBTAABo");
	this.shape_25.setTransform(-0.8,5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(6.5,1,1).p("AAAhdQAABTAABo");
	this.shape_26.setTransform(-1,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_26}]},1).wait(3));

	// Layer 2
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghCnQgKgJAAgNIAAizIgTAAQgIAAgGgGQgGgFAAgKQAAgIAGgGQAGgGAIAAIATAAIAAgGQAAgVAEgSQADgRAJgMQAIgNAPgGQANgIAWABQAYAAAOAFQAOAFAAAQQAAAMgGAHQgEAIgQAAQgUAAgIAJQgJAIAAAYIAAAGIAgAAQAJAAAGAGQAGAGAAAIQAAAKgGAFQgGAGgJAAIggAAIAACzQAAANgJAJQgKAJgLAAQgNAAgKgJg");
	this.shape_27.setTransform(0.1,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.008)").s().p("AizDfIAAm9IFmAAIAAG9g");
	this.shape_28.setTransform(0,-0.2);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-1.1,17.9,1,1,0,0,0,7.2,35.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({rotation:-0.5,x:-0.9},0).wait(1).to({regX:7.1,rotation:-6,x:-0.5,y:17.2},0).wait(1).to({regX:7.2,scaleX:1,scaleY:1,rotation:-54.1,x:5.3,y:12.5},0).wait(1).to({rotation:-54.4,x:5.7,y:12.4},0).wait(1).to({x:5.9},0).wait(1).to({regX:8.4,regY:7.1,rotation:-53.1,x:-16.2,y:-5.4},0).wait(1).to({rotation:-47.9,x:-14.9,y:-6.8},0).wait(1).to({regX:7.2,regY:35.5,scaleX:1,scaleY:1,rotation:-34.1,x:4.2,y:14.4},0).to({scaleX:1,scaleY:1,rotation:5.8,x:-2.3,y:16.9},1).wait(1).to({regX:8.4,regY:7.1,scaleX:1,scaleY:1,rotation:36.2,x:12.2,y:-9.2},0).wait(1).to({rotation:44.9,x:14.5,y:-7.5},0).wait(1).to({regX:7.2,regY:35.5,scaleX:1,scaleY:1,rotation:46.9,x:-6.6,y:11.6},0).wait(1).to({regX:8.4,regY:7.1,rotation:45.1,x:14.6,y:-7.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:35.9,x:12.6,y:-9.5},0).wait(1).to({regX:7.3,regY:35.5,rotation:-8.8,x:1.9,y:17.5},0).wait(1).to({regX:8.4,regY:7.1,rotation:-21.9,x:-5.8,y:-9.7},0).wait(1).to({regX:7.2,regY:35.5,scaleX:1,scaleY:1,rotation:-24.1,x:3.9,y:16.9},0).to({regY:35.6,scaleX:1,scaleY:1,rotation:-22.6,x:3.6,y:17},1).to({regX:7.3,scaleX:1,scaleY:1,rotation:-11.8,x:2.1,y:17.7},1).to({rotation:6.6,x:-0.5,y:17.5},1).to({regY:35.4,scaleX:1,scaleY:1,rotation:8.4,x:-0.8,y:17.4},1).to({regY:35.5,scaleX:1,scaleY:1,rotation:7.1,x:-0.7,y:17.3},1).to({regX:7.4,rotation:-3.5,y:17.7},1).to({regX:7.3,scaleX:1,scaleY:1,rotation:-5.3,x:-0.8,y:17.8},1).wait(1).to({regX:8.4,regY:7.1,rotation:-4.7,x:-2,y:-10.6},0).wait(1).to({regX:7.3,regY:35.6,scaleX:1,scaleY:1,rotation:0,x:-0.8,y:17.8},0).to({regX:7.4,scaleX:1,scaleY:1,rotation:0.9,y:18.1},1).wait(1).to({regX:8.4,regY:7.1,rotation:0.4,x:0.4,y:-10.4},0).wait(1).to({regX:7.4,regY:35.7,rotation:-0.3,x:-0.8,y:18},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-22.6,36,44.7);


// stage content:



(lib.FACEBOOK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.fb.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.facebook.com/damien.lefevre1","_blank");
		}
		this.stop();
		
		canvas.addEventListener("mouseover", over.bind(this));
		 
		function over()
		{
		  this.play();
		}
		
		canvas.style.backgroundColor="rgba(0,0,0,0)";
		
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));

	// Actions
	this.fb = new lib.Symbol5();
	this.fb.setTransform(15.7,15.4,1,1,0,0,0,10.8,13.3);
	new cjs.ButtonHelper(this.fb, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.fb).wait(35));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBkQgGgGAAgHIAAhrIgLAAQgFAAgEgDQgEgEAAgFQAAgFAEgEQAEgDAFAAIALAAIAAgEQAAgNACgKQACgLAFgHQAFgHAJgEQAHgFAOAAQAOAAAJAEQAIADAAAJQAAAHgEAFQgCAEgKAAQgMAAgFAGQgFAFAAAOIAAAEIATAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgEADgFAAIgTAAIAABrQAAAHgGAGQgGAGgFAAQgIAAgGgGg");
	this.shape.setTransform(14.9,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhqCFIAAkJIDVAAIAAEJg");
	this.shape_1.setTransform(14.9,14.8);

	this.instance = new lib.Symbol2();
	this.instance.setTransform(14.9,15,0.6,0.6,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.1,16.4,22.3,27.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;