(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./main-page.js": "./main-page.js",
	"./main-page.xml": "./main-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Frame defaultPage=\"main-page\">\n</Frame>\n";;
    if (false) {}


/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            
            if (false) {}
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        /*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

var application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

    
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-page.js":
/***/ (function(module, exports, __webpack_require__) {

/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/ 
var createViewModel = __webpack_require__("./main-view-model.js").createViewModel;

function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and JavaScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = createViewModel();
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;;
    if (false) {}


/***/ }),

/***/ "./main-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<!--\nThe markup in NativeScript apps contains a series of user interface components, each\nof which NativeScript renders with a platform-specific iOS or Android native control.\nYou can find a full list of user interface components you can use in your app at\nhttps://docs.nativescript.org/ui/components.\n-->\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\" class=\"page\">\n    <!--\n    The ActionBar is the NativeScript common abstraction over the Android ActionBar and iOS NavigationBar.\n    http://docs.nativescript.org/ui/action-bar\n    -->\n    <Page.actionBar>\n        <ActionBar title=\"My App\" icon=\"\" class=\"action-bar\">\n        </ActionBar>\n    </Page.actionBar>\n    <!--\n    The StackLayout stacks UI components on the screen—either vertically or horizontally.\n    In this case, the StackLayout does vertical stacking; you can change the stacking to\n    horizontal by applying a orientation=\"horizontal\" attribute to the <StackLayout> element.\n    You can learn more about NativeScript layouts at\n    https://docs.nativescript.org/ui/layout-containers.\n\n    These components make use of several CSS class names that are part of the NativeScript\n    core theme, such as p-20, btn, h2, and text-center. You can view a full list of the\n    class names available for styling your app at https://docs.nativescript.org/ui/theme.\n    -->\n    <StackLayout class=\"p-20\">\n        <Label text=\"Tap the button\" class=\"h1 text-center\"/>\n        <Button text=\"TAP\" tap=\"{{ onTap }}\" class=\"btn btn-primary btn-active\"/>\n        <Label text=\"{{ message }}\" class=\"h2 text-center\" textWrap=\"true\"/>\n    </StackLayout>\n</Page>\n";;
    if (false) {}


/***/ }),

/***/ "./main-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

var Observable = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

},[["./app.js","snapshot-entry","vendor"]]]);