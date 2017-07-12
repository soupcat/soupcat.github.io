(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 30,
	height: 30,
	fps: 30,
	color: "#666666",
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



(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiGCHIAAkNIENAAIAAENg");
	this.shape.setTransform(13.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.2,27.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ah4iTICjAAIBOBBIAADlIjxAAg");
	this.shape.setTransform(12.7,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAThwIAABBIBOAAAhgglIBBAAAhgAHICQAAAhgA+ICQAAAhgBxICQAA");
	this.shape_1.setTransform(15.2,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,0.4,28.3,33.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(12.7,102.1,1,1,0,0,0,12.7,17.1);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(12.7,17.1,1,1,0,0,0,12.7,17.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjkDnIAAnNIHJAAIAAHNg");
	this.shape.setTransform(13,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-5.9,45.9,124.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(0,42.5,1,1,0,0,0,12.7,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:12.9,regY:56.5,x:0.2,y:39.2},0).wait(1).to({y:38.6},0).wait(1).to({y:37.3},0).wait(1).to({y:35.2},0).wait(1).to({y:31.8},0).wait(1).to({y:26.5},0).wait(1).to({y:17.6},0).wait(1).to({y:0.3},0).wait(1).to({y:-23.7},0).wait(1).to({y:-36.3},0).wait(1).to({y:-42.6},0).wait(1).to({y:-46.2},0).wait(1).to({y:-48.2},0).wait(1).to({y:-49.2},0).wait(1).to({regX:12.7,regY:59.6,x:0,y:-46.4},0).wait(1).to({regX:12.9,regY:56.5,x:0.2,y:-49.5},0).wait(1).to({y:-49.3},0).wait(1).to({y:-49},0).wait(1).to({y:-48.3},0).wait(1).to({y:-46.1},0).wait(1).to({y:-44.6},0).wait(1).to({y:-44.1},0).wait(1).to({y:-43.9},0).wait(1).to({regX:12.7,regY:59.6,x:0,y:-40.8},0).wait(1).to({regX:12.9,regY:56.5,x:0.2,y:-43.9},0).wait(1).to({y:-44.1},0).wait(1).to({y:-44.8},0).wait(1).to({y:-45.7},0).wait(1).to({y:-45.9},0).wait(1).to({regX:12.7,regY:59.6,x:0,y:-42.8},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-23,45.9,124.9);


// stage content:



(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.resume.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("http://soupcat.com/assets/damienresume.pdf", "_blank");
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Actions
	this.resume = new lib.Symbol6();
	this.resume.setTransform(15.7,15.8,1,1,0,0,0,13.6,13.6);
	new cjs.ButtonHelper(this.resume, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.resume).wait(40));

	// Layer 2
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(15,66,0.6,0.6,0,0,0,12.7,17.2);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(15,15,0.6,0.6,0,0,0,12.7,17.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiICKIAAkTIERAAIAAETg");
	this.shape.setTransform(15.1,15);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(15,40.5,0.6,0.6,0,0,0,0.1,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.4,16.2,27.9,74.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;