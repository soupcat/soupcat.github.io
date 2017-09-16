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



(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiBB6IAAj0IEDAAIAAD0g");
	this.shape.setTransform(13.1,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.2,24.6);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ACkiGIimCWIihiWIFHAAIAAENIlHAAIAAkN");
	this.shape.setTransform(17.2,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AjiDjIAAnFIHFAAIAAHFg");
	this.shape_1.setTransform(17.1,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-9.8,45.6,45.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(0.1,-1.2,1,1,0,0,0,16.4,13.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBuQgEgDgCgFQgCgGABgGQAHhZgHhYIAAgBIgBgBIAAgBIABgIIABgBQABgEACgDIABgBIACgCIABgBIABAAIADgBIAAAAIACAAIADABIABAAIBVApIAAAAIACABIAFAGIABADIABAEIABADQAGA/gGBJQgBAGgHAGIhbAQIgBAAQgDAAgDgCgAgdBHIA7gIQABgWAAgVQgGALgHAJQgDAEgEAAQgFABgEgDQgCgDgBgFQgLgggPgdQABAxgDAxgAAMgGQAHgOAFgSIgfgQIATAwg");
	this.shape.setTransform(14.5,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2.5,1,1).p("AABhDIgXAKQgOAtALAwIAZAPAABhDQAHBHgGBVIAXgoQANgggOhGIgYgiQAAAJABALg");
	this.shape_1.setTransform(15.4,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2.5,1,1).p("Ag5grQgOAqANAkIBwANQgIglATg6g");
	this.shape_2.setTransform(6.2,-3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA1Ig4gCIgbgBQgDAAgCgBQgEgDAAgCQgKgXABgVQgBgXAJgXQAAgDADgCQADgCAEAAQAlAAAdABQAdABAaADIAEACQADABABADIABAGQgKAlAEApIgBAFIgFAFQgCACgRAAIgQgBgAguggQgKAgAKAgQAsAEAygDQgDghAGgeQgkgCgtAAIgQAAg");
	this.shape_3.setTransform(1.1,-3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2.5,1,1).p("AgxghQgPAhATAvQAxgMAvACQgMgfASgzQg5AAgxAMg");
	this.shape_4.setTransform(-6.4,-3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1,1).p("AABBKQgBAIgBAHIgYgeQgMglAIg9QABgVAWgcQAFARACgDIAgAhQgGAmAGArgAABhKQgCBKACBK");
	this.shape_5.setTransform(-17.1,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBwIhWgMQgFAAgDgFQgEgFgBgGQgGhJAGg/IABgDIABgEIABgDIAFgGIACgBIAAAAIBVgpIABAAIADgBIACAAIAAAAIADABIABAAIABABIACACIABABQACADABAEIABABIABAIIAAABIgBABIAAABQgHBYAHBZQABAGgCAGQgCAFgEADQgDACgDAAIgBAAgAgdA/IA7AIQgDgxABgxQgPAdgLAgQgCAFgBADQgEADgFgBQgEAAgDgEQgHgJgGgLIABArgAgXgmQAFASAHAOIATgwg");
	this.shape_6.setTransform(-16.6,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(15).to({_off:false,x:0.5},0).wait(1).to({regX:17.1,regY:12.9,x:3.1,y:-1.8},0).wait(1).to({x:3.7},0).wait(1).to({x:4},0).wait(1).to({x:4.1},0).wait(1).to({regX:16.4,regY:13.5,x:3.5,y:-1.2},0).wait(1).to({regX:17.1,regY:12.9,x:4.2,y:-1.8},0).wait(1).to({x:3.9},0).wait(1).to({x:3.2},0).wait(1).to({x:0.9},0).wait(1).to({x:0.3},0).wait(1).to({x:0.1},0).wait(1).to({regX:16.4,regY:13.5,x:-0.6,y:-1.2},0).wait(1).to({regX:17.1,regY:12.9,x:0.1,y:-1.8},0).wait(1).to({x:0.3},0).wait(1).to({x:1.1},0).wait(1).to({x:1.9},0).wait(1).to({x:2.1},0).wait(1).to({regX:16.4,regY:13.5,x:1.4,y:-1.2},0).wait(1).to({regX:17.1,regY:12.9,x:2.1,y:-1.8},0).wait(1).to({x:2},0).wait(1).to({x:1.7},0).wait(1).to({x:1},0).wait(1).to({x:0.8},0).wait(1).to({regX:16.4,regY:13.5,x:0.1,y:-1.2},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-24.6,45.6,45.6);


// stage content:



(lib.envelope3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.mail.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("mailto:damien@soupcat.com", "_blank");
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45));

	// Layer 1
	this.mail = new lib.Symbol10();
	this.mail.setTransform(15.5,15.1,1,1,0,0,0,13.1,12.3);
	new cjs.ButtonHelper(this.mail, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.mail).wait(45));

	// Layer 5
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(14.7,15.4,0.6,0.6,0,0,0,16.4,13.6);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(23.1,21.7,0.6,0.6,0,0,0,14.2,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.4,16.3,27.4,27.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;