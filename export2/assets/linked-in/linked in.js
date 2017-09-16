(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 30,
	height: 30,
	fps: 30,
	color: "#999999",
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



(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah9CDIAAkFID7AAIAAEFg");
	this.shape.setTransform(12.6,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.3,26.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQALgKAMAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgMAAgLgKg");
	this.shape.setTransform(3.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,6.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaCAQgLgKAAgOIAAiFQAAgLgEgJQgEgKgGgGQgGgHgIgEQgKgDgKgBQgKABgJADQgLADgGAFQgHAFgDAKIgEAQIgBAGIAAhDIAJgJQALgNAJgFQAKgFANgEQANgDAQAAQARAAAQAGQAQAGAMALQANALAGAQQAIAQgBASIAACdQAAAOgJAKQgKALgPAAQgPAAgJgLg");
	this.shape.setTransform(8.8,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbCAQgLgKAAgOIAAiFQAAgLgEgJQgEgKgGgGQgFgHgJgEQgJgDgKgBQgJgBgGABQgHABgLAFQgLADgDAMIgDATIgBAKIgDg/QADgBAKgLQAQgRAGgEQAGgEANgEQANgDARAAQAQAAARAGQAPAGANALQAMALAHAQQAHAQAAASIAACdQAAAOgKAKQgKALgPAAQgOAAgKgLg");
	this.shape_1.setTransform(8.7,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbCAQgLgKAAgOIAAiFQAAgLgEgJQgEgKgGgGQgFgHgJgEQgJgDgLgBQgKABgJACIgSADQgJAAgBANIgCAVIgBAKIgDhCQAEAFAJgPQAJgOAKgFQAJgFANgEQANgDARAAQAQAAARAGQAPAGANALQAMALAHAQQAHAQAAASIAACdQAAAOgKAKQgKALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(8.7,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAOQgGgHAAgHQAAgHAGgFQAGgHAHAAQAHAAAHAHQAGAFAAAHQAAAHgGAHQgHAGgHAAQgHAAgGgGg");
	this.shape_3.setTransform(3.9,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMB/QgLgKAAgOIAAiFQAAgLgCgJQgEgJgGgHQgHgGgNgGQgNgFgTgBIgHgjQARgRAcgBQAZgBARAGQAPAGANAMQAMAKAHAQQAHAQAAATIAACcQAAAOgKAKQgKALgPAAQgOAAgKgLg");
	this.shape_4.setTransform(10.2,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAVQgKgJAAgMQAAgLAKgKQAJgJALAAQAMAAAJAJQAKAKAAALQAAAMgKAJQgJAKgMAAQgLAAgJgKg");
	this.shape_5.setTransform(7.9,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJCAQgKgKAAgOIAAiFQAAgLgEgJQgDgGgEgGIgEgEIAAAAQgGgGgHgEIAAg+IAIAAIAFAAQAQABAOAFQAOAGAMALQAMALAHAQQAGAMABAOIAAAIIAACdQAAAOgJAKQgKALgPAAQgOAAgJgLg");
	this.shape_6.setTransform(12.4,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAgoIAABR");
	this.shape_7.setTransform(13.8,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAgWIAAAt");
	this.shape_8.setTransform(13.8,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAgKIAAAV");
	this.shape_9.setTransform(13.8,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAgHIAAAP");
	this.shape_10.setTransform(13.8,15.2);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(13.9,16.7,1,1,0,0,0,3.5,3.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).wait(1).to({y:17.9},0).wait(1).to({y:18.3},0).wait(1).to({y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({y:19.1},0).wait(1).to({startPosition:0},0).wait(1).to({y:19.2},0).wait(1).to({y:19.1},0).wait(1).to({y:19},0).wait(1).to({y:18.8},0).wait(1).to({y:18.4},0).wait(1).to({y:17.4},0).wait(1).to({y:16.3},0).wait(1).to({y:15.8},0).wait(1).to({y:15.5},0).wait(1).to({y:15.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({y:16.2},0).wait(1).to({y:17.3},0).wait(1).to({y:18.1},0).wait(1).to({y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:18.4},0).wait(1).to({y:18.1},0).wait(1).to({y:17.3},0).wait(1).to({y:16.2},0).wait(1).to({y:15.8},0).wait(1).to({y:15.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:15.7},0).wait(1).to({y:16},0).wait(1).to({y:16.8},0).wait(1).to({y:17.7},0).wait(1).to({y:18},0).wait(1).to({y:18.1},0).wait(1).to({startPosition:0},0).wait(1).to({y:17.9},0).wait(1).to({y:17.3},0).wait(1).to({y:16.1},0).wait(1).to({y:14},0).wait(1).to({y:10.4},0).wait(1).to({y:0.1},0).to({_off:true},1).wait(52));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABwCAQgLgKAAgOIAAiFQAAgLgDgJQgFgKgGgGQgHgHgIgEQgKgDgLgBQgKABgJADQgJAEgIAHQgGAGgEAKQgEAJAAALIAACFQAAAOgIAKQgKALgPAAQgOAAgKgLQgLgKAAgOIAAjPQAAgOALgKQAKgKAOAAQAPAAAKAKQAIAKAAAOIAMgLQAHgGAJgFQALgFANgEQANgDAQAAQATAAAQAGQAPAGANALQAMALAHAQQAHAQAAASIAACdQAAAOgJAKQgLALgOAAQgPAAgKgLgAifCAQgLgKAAgOIAAjIQAAgPALgJQAKgLANAAQAPAAAKALQAKAJAAAPIAADIQAAAOgKALQgKAJgPABQgNAAgKgLg");
	this.shape_11.setTransform(0.2,4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.008)").s().p("AjdDjIAAnFIG7AAIAAHFg");
	this.shape_12.setTransform(-0.1,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXBLQgKgKAAgOIAAiHIBDAAIAACHQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_13.setTransform(-13.5,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAtQgKgKAAgOIAAhMIBDAAIAABMQAAAPgKAKQgKAKgOAAQgNAAgKgLg");
	this.shape_14.setTransform(-13.5,13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAbQgKgKAAgOIAAgnIBDAAIAAAnQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_15.setTransform(-13.5,14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXARQgKgKAAgMIAAgWIBDAAIAAAWQAAAMgKALQgKAJgOABQgNAAgKgLg");
	this.shape_16.setTransform(-13.5,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAJQgKgJAAgNIAAgGIBDAAIAAAGQAAANgKAKQgKAKgOAAQgNAAgKgLg");
	this.shape_17.setTransform(-13.5,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAMQgKgKAAgMIAAgMIBDAAIAAAMQAAANgKAKQgKAKgOAAQgNAAgKgLg");
	this.shape_18.setTransform(-13.5,16.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXARQgKgKAAgMIAAgWIBDAAIAAAWQAAANgKAKQgKAKgOAAQgNAAgKgLg");
	this.shape_19.setTransform(-13.5,15.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAlQgKgKAAgOIAAg8IBDAAIAAA8QAAAPgKAKQgKAKgOAAQgNAAgKgLg");
	this.shape_20.setTransform(-13.5,13.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAxQgKgKAAgOIAAhUIBDAAIAABUQAAAOgKALQgKAJgOABQgNAAgKgLg");
	this.shape_21.setTransform(-13.5,12.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXB9QgKgKAAgOIAAjIQAAgPAKgKQALgKAMAAQAOAAAKAKQAKAKAAAPIAADIQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_22.setTransform(-13.5,5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABwB9QgLgKAAgOIAAgLIBGAAIAAALQAAAOgJAKQgLAKgOAAQgPAAgKgKgAifB9QgLgKAAgOIAAjIQAAgPALgKQAKgKANAAQAPAAAKAKQAKAKAAAPIAADIQAAAOgKAKQgKAKgPAAQgNAAgKgKg");
	this.shape_23.setTransform(0.2,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABwB9QgLgKAAgOIAAgzIBGAAIAAAzQAAAOgJAKQgLAKgOAAQgPAAgKgKgAifB9QgLgKAAgOIAAjIQAAgPALgKQAKgKANAAQAPAAAKAKQAKAKAAAPIAADIQAAAOgKAKQgKAKgPAAQgNAAgKgKg");
	this.shape_24.setTransform(0.2,5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABwB9QgLgKAAgOIAAiUIBGAAIAACUQAAAOgJAKQgLAKgOAAQgPAAgKgKgAifB9QgLgKAAgOIAAjIQAAgPALgKQAKgKANAAQAPAAAKAKQAKAKAAAPIAADIQAAAOgKAKQgKAKgPAAQgNAAgKgKg");
	this.shape_25.setTransform(0.2,5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABwCAQgLgKAAgOIAAiUIBGAAIAACUQAAAOgJAKQgLALgOAAQgPAAgKgLgAg4CAQgLgKAAgOIAAjPQAAgOALgKQAKgKAOAAQAPAAAKAKQAIAKAAAOIABAAIAABCIgBAIIAACFQAAAOgIAKQgKALgPAAQgOAAgKgLgAifCAQgLgKAAgOIAAjIQAAgPALgJQAKgLANAAQAPAAAKALQAKAJAAAPIAADIQAAAOgKALQgKAJgPABQgNAAgKgLg");
	this.shape_26.setTransform(0.2,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_13}]},24).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).to({state:[{t:this.shape_18}]},46).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},3).to({state:[{t:this.shape_11}]},2).wait(48));

	// Layer 3
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAhlIAADL");
	this.shape_27.setTransform(-3.2,4.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAABjIAAjF");
	this.shape_28.setTransform(-3.2,5.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAABfIAAi9");
	this.shape_29.setTransform(-3.2,5.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAAgIAAg/");
	this.shape_30.setTransform(-3.2,12.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAgYIAAAx");
	this.shape_31.setTransform(-3.2,13.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAgSIAAAl");
	this.shape_32.setTransform(-3.2,14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAADIAAgG");
	this.shape_33.setTransform(-3.2,15.8);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(-3.2,16.7,1,1,0,0,0,3.5,3.5);
	this.instance_1._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAABIAAgB");
	this.shape_34.setTransform(-3.1,16.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAgOIAAAd");
	this.shape_35.setTransform(-3.1,14.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAgVIAAAr");
	this.shape_36.setTransform(-3.1,13.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAABiIAAjD");
	this.shape_37.setTransform(-3.1,5.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAABlIAAjJ");
	this.shape_38.setTransform(-3.1,5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAAhmIAADN");
	this.shape_39.setTransform(-3.1,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},24).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29,p:{x:-3.2,y:5.5}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_29,p:{x:-3.1,y:5.8}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).wait(1).to({y:17.9},0).wait(1).to({y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({y:18.6},0).wait(1).to({y:18.7},0).wait(1).to({y:18.8},0).wait(1).to({y:18.7},0).wait(1).to({startPosition:0},0).wait(1).to({y:18.6},0).wait(1).to({y:18.4},0).wait(1).to({y:18},0).wait(1).to({y:17.1},0).wait(1).to({y:16.2},0).wait(1).to({y:15.7},0).wait(1).to({y:15.5},0).wait(1).to({y:15.4},0).wait(1).to({y:15.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({y:16.3},0).wait(1).to({y:17.2},0).wait(1).to({y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.6},0).wait(1).to({startPosition:0},0).wait(1).to({y:17.5},0).wait(1).to({y:17.2},0).wait(1).to({y:16.6},0).wait(1).to({y:15.8},0).wait(1).to({y:15.5},0).wait(1).to({y:15.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({y:16.2},0).wait(1).to({y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({y:17},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(57));

	// Layer 4
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(-13.5,-15.6,1,1,0,0,0,3.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({y:-15.7},0).wait(1).to({y:-15.8},0).wait(1).to({y:-15.9},0).wait(1).to({y:-16.2},0).wait(1).to({y:-16.6},0).wait(1).to({y:-17.4},0).wait(1).to({y:-19.2},0).wait(1).to({y:-20.3},0).wait(1).to({y:-20.8},0).wait(1).to({y:-21.1},0).wait(1).to({y:-21.2},0).wait(1).to({y:-21.3},0).wait(1).to({startPosition:0},0).wait(1).to({y:-21.2},0).wait(1).to({y:-21},0).wait(1).to({y:-20.6},0).wait(1).to({y:-20},0).wait(1).to({y:-19.1},0).wait(1).to({y:-17.8},0).wait(1).to({y:-15.8},0).wait(1).to({y:-12.6},0).wait(1).to({y:-7.3},0).wait(1).to({y:1.2},0).wait(1).to({y:7.7},0).wait(1).to({y:11.2},0).wait(1).to({y:13.4},0).wait(1).to({y:14.7},0).wait(1).to({y:15.6},0).wait(1).to({y:16.1},0).wait(1).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({y:16.4},0).wait(1).to({startPosition:0},0).wait(1).to({y:16.3},0).wait(1).to({y:16.1},0).wait(1).to({y:15.7},0).wait(1).to({y:14.6},0).wait(1).to({y:13.5},0).wait(1).to({y:13},0).wait(1).to({y:12.8},0).wait(1).to({y:12.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:12.8},0).wait(1).to({y:13.1},0).wait(1).to({y:13.7},0).wait(1).to({y:15.2},0).wait(1).to({y:17.2},0).wait(1).to({y:18},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({y:18.4},0).wait(1).to({y:18.3},0).wait(1).to({y:18.1},0).wait(1).to({y:17.5},0).wait(1).to({y:16.1},0).wait(1).to({y:14.7},0).wait(1).to({y:14.1},0).wait(1).to({y:13.8},0).wait(1).to({y:13.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:13.8},0).wait(1).to({y:14.1},0).wait(1).to({y:15.3},0).wait(1).to({y:16.2},0).wait(1).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({y:16.6},0).to({y:15.4},1).to({y:15},1).to({y:14.2},1).to({y:12.6},1).to({y:9.5},1).to({y:7.2},1).to({y:-13.3},1).to({y:-14.9},1).to({y:-16.4},1).to({y:-17.2},1).to({y:-17.6},1).to({y:-18.7},1).wait(1).to({startPosition:0},0).wait(1).to({y:-18.6},0).wait(1).to({y:-18.4},0).wait(1).to({y:-18},0).wait(1).to({y:-17.2},0).wait(1).to({y:-15.6},0).wait(1).to({y:-14.4},0).wait(1).to({y:-13.9},0).wait(1).to({y:-13.6},0).wait(1).to({y:-13.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:-13.6},0).wait(1).to({y:-14},0).wait(1).to({y:-15.1},0).wait(1).to({y:-16.4},0).wait(1).to({y:-16.9},0).wait(1).to({y:-17.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:-17},0).wait(1).to({y:-16.9},0).wait(1).to({y:-16.5},0).wait(1).to({y:-15.8},0).wait(1).to({y:-15},0).wait(1).to({y:-14.7},0).wait(1).to({y:-14.5},0).wait(1).to({y:-14.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:-14.5},0).wait(1).to({y:-14.6},0).wait(1).to({y:-14.8},0).wait(1).to({y:-15.6},0).wait(1).to({y:-16.1},0).wait(1).to({y:-16.3},0).wait(1).to({startPosition:0},0).wait(1).to({y:-16.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:-16.3},0).wait(1).to({y:-16.1},0).wait(1).to({y:-15.6},0).wait(1).to({y:-15.3},0).wait(1).to({y:-15.2},0).wait(1).to({y:-15.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:-15.2},0).wait(1).to({y:-15.4},0).wait(1).to({y:-15.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-22.6,44.6,45.5);


// stage content:



(lib.linkedin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		canvas.addEventListener("mouseover", over.bind(this));
		 
		function over()
		{
		  this.play();
		}
		
		canvas.style.backgroundColor="rgba(0,0,0,0)";
		
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.linkedin.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.linkedin.com/in/soupcat", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(137));

	// Actions
	this.linkedin = new lib.Symbol9();
	this.linkedin.setTransform(15.2,14.9,1,1,0,0,0,12.6,13.1);
	new cjs.ButtonHelper(this.linkedin, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.linkedin).wait(137));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDBNQgHgGAAgJIAAhPQAAgGgCgGQgCgGgEgDIgKgHQgFgCgHAAQgFAAgGACQgGADgEAEQgDADgDAGQgCAGAAAGIAABPQgBAJgEAGQgFAGgKAAQgIAAgGgGQgGgGgBgJIAAh7QABgJAGgGQAGgGAIAAQAKAAAFAGQAEAGABAJIAGgHQAFgDAGgDIANgGQAIgCAKAAQALAAAKAEQAJAEAHAGQAIAHAEAJQAEAKABALIAABdQAAAJgHAGQgGAGgIAAQgJAAgGgGgAhfBNQgGgGgBgJIAAh3QABgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJIAAB3QAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape.setTransform(14.5,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AiFCIIAAkPIEKAAIAAEPg");
	this.shape_1.setTransform(14.3,15);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(6.2,5.5,0.6,0.6,0,0,0,3.5,3.5);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(14.3,14.9,0.6,0.6,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.9,16.3,27,27.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;