webpackJsonp([2,5],{

/***/ 231:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(399);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(667)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../node_modules/postcss-loader/index.js!./style.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../node_modules/postcss-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(231)();
// imports


// module
exports.push([module.i, ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-ripple{overflow:hidden}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;background-color:rgba(0,0,0,.1);-webkit-transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.mat-option{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;font-size:16px;font-family:Roboto,\"Helvetica Neue\",sans-serif;text-align:start;text-decoration:none;position:relative;cursor:pointer;outline:0}.mat-option[disabled]{cursor:default}.mat-option .mat-icon{margin-right:16px}[dir=rtl] .mat-option .mat-icon{margin-left:16px}.mat-option[aria-disabled=true]{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mat-option-ripple{position:absolute;top:0;left:0;bottom:0;right:0}@media screen and (-ms-high-contrast:active){.mat-option-ripple{opacity:.5}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;text-transform:none;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-transition:opacity .4s cubic-bezier(.25,.8,.25,1);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.cdk-overlay-transparent-backdrop{background:0 0}.mat-option.mat-active,.mat-option.mat-selected,.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected{color:#673ab7}.mat-option.mat-active{color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{border:none}.mat-pseudo-checkbox-checked.mat-primary,.mat-pseudo-checkbox-indeterminate.mat-primary{background:#673ab7}.mat-pseudo-checkbox-checked.mat-accent,.mat-pseudo-checkbox-indeterminate.mat-accent{background:#ffc107}.mat-pseudo-checkbox-checked.mat-warn,.mat-pseudo-checkbox-indeterminate.mat-warn{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa}.mat-autocomplete-panel,.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active){background:#fff;color:rgba(0,0,0,.87)}.mat-button.mat-button-focus.mat-primary .mat-button-focus-overlay,.mat-fab.mat-button-focus.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-button-focus.mat-primary .mat-button-focus-overlay,.mat-mini-fab.mat-button-focus.mat-primary .mat-button-focus-overlay,.mat-raised-button.mat-button-focus.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-button-focus.mat-accent .mat-button-focus-overlay,.mat-fab.mat-button-focus.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-button-focus.mat-accent .mat-button-focus-overlay,.mat-mini-fab.mat-button-focus.mat-accent .mat-button-focus-overlay,.mat-raised-button.mat-button-focus.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-button-focus.mat-warn .mat-button-focus-overlay,.mat-fab.mat-button-focus.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-button-focus.mat-warn .mat-button-focus-overlay,.mat-mini-fab.mat-button-focus.mat-warn .mat-button-focus-overlay,.mat-raised-button.mat-button-focus.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button,.mat-icon-button{background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled]{color:rgba(0,0,0,.38)}.mat-button:hover.mat-primary .mat-button-focus-overlay,.mat-icon-button:hover.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button:hover.mat-accent .mat-button-focus-overlay,.mat-icon-button:hover.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button:hover.mat-warn .mat-button-focus-overlay,.mat-icon-button:hover.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-fab,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:rgba(255,255,255,.87);background-color:#673ab7}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87);background-color:#ffd740}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff;background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.38);background-color:rgba(0,0,0,.12)}.mat-fab,.mat-mini-fab{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle-checked{background-color:#e0e0e0;color:#000}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.38)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:#000}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffc107}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip:not(.mat-basic-chip){background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-chip-selected:not(.mat-basic-chip){background-color:grey;color:rgba(255,255,255,.87)}.mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-primary{background-color:#673ab7;color:rgba(255,255,255,.87)}.mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-accent{background-color:#ffc107;color:rgba(0,0,0,.87)}.mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-warn{background-color:#f44336;color:#fff}.mat-dialog-container{background:#fff}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-placeholder{color:rgba(0,0,0,.38)}.mat-input-placeholder.mat-focused{color:#673ab7}.mat-input-placeholder.mat-focused.mat-accent{color:#ffd740}.mat-input-placeholder.mat-focused.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-placeholder.mat-float.mat-focused .mat-placeholder-required,input.mat-input-element:-webkit-autofill+.mat-input-placeholder .mat-placeholder-required{color:#ffd740}.mat-input-underline{border-color:rgba(0,0,0,.12)}.mat-input-underline .mat-input-ripple{background-color:#673ab7}.mat-input-underline .mat-input-ripple.mat-accent{background-color:#ffd740}.mat-input-underline .mat-input-ripple.mat-warn{background-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item{color:#000}.mat-list .mat-subheader,.mat-nav-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-nav-list .mat-list-item-content.mat-list-item-focus,.mat-nav-list .mat-list-item-content:hover{background:rgba(0,0,0,.04)}.mat-menu-content{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled]{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon{color:rgba(0,0,0,.54);vertical-align:middle}.mat-menu-item:focus:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-progress-bar-background{background:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23d1c4e9%27%2F%3E%3C%2Fsvg%3E)}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#5e35b1}.mat-progress-bar.mat-accent .mat-progress-bar-background{background:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffecb3%27%2F%3E%3C%2Fsvg%3E)}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffecb3}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffb300}.mat-progress-bar.mat-warn .mat-progress-bar-background{background:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E)}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#e53935}.mat-progress-circle path,.mat-progress-spinner path,.mat-spinner path{stroke:#5e35b1}.mat-progress-circle.mat-accent path,.mat-progress-spinner.mat-accent path,.mat-spinner.mat-accent path{stroke:#ffb300}.mat-progress-circle.mat-warn path,.mat-progress-spinner.mat-warn path,.mat-spinner.mat-warn path{stroke:#e53935}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-inner-circle{background-color:#ffd740}.mat-radio-disabled .mat-radio-inner-circle{background-color:rgba(0,0,0,.38)}.mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-select-trigger{color:rgba(0,0,0,.38)}.mat-select:focus:not(.mat-select-disabled) .mat-select-trigger{color:#673ab7}.mat-select.ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-trigger{color:#f44336}.mat-select-underline{background-color:rgba(0,0,0,.12)}.mat-select:focus:not(.mat-select-disabled) .mat-select-underline{background-color:#673ab7}.mat-select.ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-underline{background-color:#f44336}.mat-select-arrow{color:rgba(0,0,0,.38)}.mat-select:focus:not(.mat-select-disabled) .mat-select-arrow{color:#673ab7}.mat-select.ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-arrow{color:#f44336}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-sidenav,.mat-slider-thumb-label-text,.mat-toolbar{color:rgba(0,0,0,.87)}.mat-sidenav-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-sidenav,.mat-sidenav.mat-sidenav-push{background-color:#fff}.mat-sidenav-backdrop.mat-sidenav-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle.mat-slide-toggle-focused:not(.mat-checked) .mat-ink-ripple{background-color:rgba(0,0,0,.12)}.mat-slide-toggle.mat-slide-toggle-focused .mat-ink-ripple{background-color:rgba(255,193,7,.26)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary.mat-slide-toggle-focused:not(.mat-checked) .mat-ink-ripple{background-color:rgba(0,0,0,.12)}.mat-slide-toggle.mat-primary.mat-slide-toggle-focused .mat-ink-ripple{background-color:rgba(103,58,183,.26)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn.mat-slide-toggle-focused:not(.mat-checked) .mat-ink-ripple{background-color:rgba(0,0,0,.12)}.mat-slide-toggle.mat-warn.mat-slide-toggle-focused .mat-ink-ripple{background-color:rgba(244,67,54,.26)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-thumb,.mat-slider-thumb-label,.mat-slider-track-fill{background-color:#ffd740}.mat-slider-active .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill,.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:#000}.mat-slider-min-value.mat-slider-thumb-label-showing.mat-slider-active .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.mat-slider-active .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).mat-slider-active .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).mat-slider-active.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid #e0e0e0}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid #e0e0e0;border-bottom:none}.mat-tab-label:focus{background-color:rgba(209,196,233,.3)}.mat-ink-bar{background-color:#673ab7}.mat-toolbar{background:#f5f5f5}.mat-toolbar.mat-primary{background:#673ab7;color:rgba(255,255,255,.87)}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-tooltip{background:rgba(97,97,97,.9)}", ""]);

// exports


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(231)();
// imports
exports.i(__webpack_require__(398), "");

// module
exports.push([module.i, "/*! normalize.css v6.0.0 | MIT License | github.com/necolas/normalize.css */\r\n/* Document ========================================================================== */\r\n/** 1. Correct the line height in all browsers. 2. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS. */\r\nhtml { line-height: 1.15; /* 1 */ -ms-text-size-adjust: 100%; /* 2 */ -webkit-text-size-adjust: 100%; /* 2 */ }\r\n\r\n/* Sections ========================================================================== */\r\n/** Add the correct display in IE 9-. */\r\narticle, aside, footer, header, nav, section { display: block; }\r\n\r\n/** Correct the font size and margin on `h1` elements within `section` and `article` contexts in Chrome, Firefox, and Safari. */\r\nh1 { font-size: 2em; margin: 0.67em 0; }\r\n\r\n/* Grouping content ========================================================================== */\r\n/** Add the correct display in IE 9-. 1. Add the correct display in IE. */\r\nfigcaption, figure, main { /* 1 */ display: block; }\r\n\r\n/** Add the correct margin in IE 8. */\r\nfigure { margin: 1em 40px; }\r\n\r\n/** 1. Add the correct box sizing in Firefox. 2. Show the overflow in Edge and IE. */\r\nhr { box-sizing: content-box; /* 1 */ height: 0; /* 1 */ overflow: visible; /* 2 */ }\r\n\r\n/** 1. Correct the inheritance and scaling of font size in all browsers. 2. Correct the odd `em` font sizing in all browsers. */\r\npre { font-family: monospace, monospace; /* 1 */ font-size: 1em; /* 2 */ }\r\n\r\n/* Text-level semantics ========================================================================== */\r\n/** 1. Remove the gray background on active links in IE 10. 2. Remove gaps in links underline in iOS 8+ and Safari 8+. */\r\na { background-color: transparent; /* 1 */ -webkit-text-decoration-skip: objects; /* 2 */ }\r\n\r\n/** 1. Remove the bottom border in Chrome 57- and Firefox 39-. 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. */\r\nabbr[title] { border-bottom: none; /* 1 */ text-decoration: underline; /* 2 */ text-decoration: underline dotted; /* 2 */ }\r\n\r\n/** Prevent the duplicate application of `bolder` by the next rule in Safari 6. */\r\nb, strong { font-weight: inherit; }\r\n\r\n/** Add the correct font weight in Chrome, Edge, and Safari. */\r\nb, strong { font-weight: bolder; }\r\n\r\n/** 1. Correct the inheritance and scaling of font size in all browsers. 2. Correct the odd `em` font sizing in all browsers. */\r\ncode, kbd, samp { font-family: monospace, monospace; /* 1 */ font-size: 1em; /* 2 */ }\r\n\r\n/** Add the correct font style in Android 4.3-. */\r\ndfn { font-style: italic; }\r\n\r\n/** Add the correct background and color in IE 9-. */\r\nmark { background-color: #ff0; color: #000; }\r\n\r\n/** Add the correct font size in all browsers. */\r\nsmall { font-size: 80%; }\r\n\r\n/** Prevent `sub` and `sup` elements from affecting the line height in all browsers. */\r\nsub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }\r\n\r\nsub { bottom: -0.25em; }\r\n\r\nsup { top: -0.5em; }\r\n\r\n/* Embedded content ========================================================================== */\r\n/** Add the correct display in IE 9-. */\r\naudio, video { display: inline-block; }\r\n\r\n/** Add the correct display in iOS 4-7. */\r\naudio:not([controls]) { display: none; height: 0; }\r\n\r\n/** Remove the border on images inside links in IE 10-. */\r\nimg { border-style: none; }\r\n\r\n/** Hide the overflow in IE. */\r\nsvg:not(:root) { overflow: hidden; }\r\n\r\n/* Forms ========================================================================== */\r\n/** Remove the margin in Firefox and Safari. */\r\nbutton, input, optgroup, select, textarea { margin: 0; }\r\n\r\n/** Show the overflow in IE. 1. Show the overflow in Edge. */\r\nbutton, input { /* 1 */ overflow: visible; }\r\n\r\n/** Remove the inheritance of text transform in Edge, Firefox, and IE. 1. Remove the inheritance of text transform in Firefox. */\r\nbutton, select { /* 1 */ text-transform: none; }\r\n\r\n/** 1. Prevent a WebKit bug where (2) destroys native `audio` and `video` controls in Android 4. 2. Correct the inability to style clickable types in iOS and Safari. */\r\nbutton, html [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { -webkit-appearance: button; /* 2 */ }\r\n\r\n/** Remove the inner border and padding in Firefox. */\r\nbutton::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; padding: 0; }\r\n\r\n/** Restore the focus styles unset by the previous rule. */\r\nbutton:-moz-focusring, [type=\"button\"]:-moz-focusring, [type=\"reset\"]:-moz-focusring, [type=\"submit\"]:-moz-focusring { outline: 1px dotted ButtonText; }\r\n\r\n/** 1. Correct the text wrapping in Edge and IE. 2. Correct the color inheritance from `fieldset` elements in IE. 3. Remove the padding so developers are not caught out when they zero out `fieldset` elements in all browsers. */\r\nlegend { box-sizing: border-box; /* 1 */ color: inherit; /* 2 */ display: table; /* 1 */ max-width: 100%; /* 1 */ padding: 0; /* 3 */ white-space: normal; /* 1 */ }\r\n\r\n/** 1. Add the correct display in IE 9-. 2. Add the correct vertical alignment in Chrome, Firefox, and Opera. */\r\nprogress { display: inline-block; /* 1 */ vertical-align: baseline; /* 2 */ }\r\n\r\n/** Remove the default vertical scrollbar in IE. */\r\ntextarea { overflow: auto; }\r\n\r\n/** 1. Add the correct box sizing in IE 10-. 2. Remove the padding in IE 10-. */\r\n[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; /* 1 */ padding: 0; /* 2 */ }\r\n\r\n/** Correct the cursor style of increment and decrement buttons in Chrome. */\r\n[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button { height: auto; }\r\n\r\n/** 1. Correct the odd appearance in Chrome and Safari. 2. Correct the outline style in Safari. */\r\n[type=\"search\"] { -webkit-appearance: textfield; /* 1 */ outline-offset: -2px; /* 2 */ }\r\n\r\n/** Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */\r\n[type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration { -webkit-appearance: none; }\r\n\r\n/** 1. Correct the inability to style clickable types in iOS and Safari. 2. Change font properties to `inherit` in Safari. */\r\n::-webkit-file-upload-button { -webkit-appearance: button; /* 1 */ font: inherit; /* 2 */ }\r\n\r\n/* Interactive ========================================================================== */\r\n/* Add the correct display in IE 9-. 1. Add the correct display in Edge, IE, and Firefox. */\r\ndetails, menu { display: block; }\r\n\r\n/* Add the correct display in all browsers. */\r\nsummary { display: list-item; }\r\n\r\n/* Scripting ========================================================================== */\r\n/** Add the correct display in IE 9-. */\r\ncanvas { display: inline-block; }\r\n\r\n/** Add the correct display in IE. */\r\ntemplate { display: none; }\r\n\r\n/* Hidden ========================================================================== */\r\n/** Add the correct display in IE 10-. */\r\n[hidden] { display: none; }\r\n\r\n@font-face { font-family: 'Material Icons'; font-style: normal; font-weight: 400; src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(" + __webpack_require__(668) + ") format(\"woff2\"); }\r\n.material-icons { font-family: 'Material Icons'; font-weight: normal; font-style: normal; font-size: 24px; /* Preferred icon size */ display: inline-block; line-height: 1; text-transform: none; letter-spacing: normal; word-wrap: normal; white-space: nowrap; direction: ltr; /* Support for all WebKit browsers. */ -webkit-font-smoothing: antialiased; /* Support for Safari and Chrome. */ text-rendering: optimizeLegibility; /* Support for Firefox. */ -moz-osx-font-smoothing: grayscale; /* Support for IE. */ -webkit-font-feature-settings: 'liga'; font-feature-settings: 'liga'; }\r\n\r\n* { -webkit-tap-highlight-color: transparent; }\r\n\r\nbody { margin: 0; font-family: Roboto, sans-serif; max-width: 100%; margin-left: auto; margin-right: auto; background-color: #fff; overflow: hidden; }\r\nbody:after { content: \" \"; display: block; clear: both; }\r\n\r\nbutton:-moz-focusring { outline: none !important; }\r\n\r\n.hide { display: none !important; }\r\n\r\n.fill-space { -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex: 1 1 auto; }\r\n\r\n.capitalize:first-letter { text-transform: capitalize; }\r\n\r\n.icon-20 { font-size: 20px; }\r\n\r\n.no-record { background: #fff; text-align: center; margin: 0; padding-top: 50px; font-size: 20px; text-transform: uppercase; }\r\n@media (min-width: 798px) { .no-record { padding-bottom: 50px; } }\r\n\r\n.container { padding: 0; padding-top: 56px; }\r\n@media (min-width: 961px) { .container { padding-top: 64px; } }\r\n\r\n.spinner-container { background: #fff; }\r\n\r\nmd-sidenav-container { height: calc(100vh); }\r\n\r\n.mat-sidenav-container, .mat-sidenav-content { -webkit-transform: none !important; transform: none !important; }\r\n\r\n.mat-sidenav-content { overflow-x: hidden !important; }\r\n\r\n.mat-sidenav-backdrop { z-index: 4 !important; }\r\n\r\nmd-sidenav { width: 300px; max-width: 80%; box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3); z-index: 5 !important; }\r\nmd-sidenav .mat-list-icon { color: rgba(0, 0, 0, 0.54); }\r\nmd-sidenav .mat-list-item-focus { background: transparent !important; }\r\nmd-sidenav .mat-list-item.active { background: rgba(0, 0, 0, 0.04); color: #b71c1c; }\r\nmd-sidenav .mat-list-item.active .mat-list-icon { color: #b71c1c; }\r\n@media (max-width: 767px) { md-sidenav .mat-list-item-content:hover { background: transparent !important; } }\r\n@media (min-width: 601px) { md-sidenav { width: 250px; } }\r\n\r\n.sidenav-edge { width: 20px; position: fixed; top: 0; bottom: 0; left: 0; z-index: 4; }\r\n\r\n.sidenav-pan { height: 100vh; }\r\n\r\n.sidenav-image { height: 150px; background: #ffd740; text-align: center; }\r\n.sidenav-image img { height: 100px; margin-top: 25px; -webkit-user-drag: none; }\r\n\r\n.mat-toolbar { position: fixed; top: 0; right: 0; z-index: 2; padding-left: 5px !important; padding-right: 0 !important; }\r\n@media (min-width: 768px) { .mat-toolbar { padding-left: 20px !important; padding-right: 15px !important; } }\r\n.mat-toolbar .mat-toolbar-row { height: 56px !important; }\r\n.mat-toolbar .mat-button-focus-overlay { background-color: transparent; }\r\n\r\nmd-card-content:after { content: \" \"; display: block; clear: both; }\r\n\r\nmd-input-container { width: 100%; }\r\n\r\nmd-select { width: 100%; padding: 1em 0; }\r\n\r\nsnack-bar-container { height: auto !important; }\r\nsnack-bar-container .mat-simple-snackbar-message { white-space: normal !important; }\r\n\r\n.mat-option:first-letter { text-transform: capitalize; }\r\n\r\n.mat-select-value-text:first-letter { display: block; text-transform: capitalize; }\r\n\r\n.mat-simple-snackbar-action { color: #ffd740 !important; }\r\n\r\nmd-spinner { margin: auto; width: 50px !important; }\r\n\r\na.mat-list-item:focus { outline: none; }\r\n\r\n.mat-sidenav-container { background: #e8e8e8 !important; }\r\n\r\n.mat-toolbar.mat-primary { box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); }\r\n\r\n#secondary-toolbar { width: calc(100% - 45px); padding-left: 0; background-color: transparent; z-index: 3; }\r\n@media (min-width: 768px) { #secondary-toolbar { width: calc(100% - 80px); } }\r\n@media (min-width: 768px) { #secondary-toolbar .mat-input-container { max-width: 300px; } }\r\n#secondary-toolbar .mat-input-wrapper { padding-bottom: 0; }\r\n#secondary-toolbar md-icon, #secondary-toolbar .mat-input-element { color: #fff; }\r\n#secondary-toolbar .mat-input-element { font-size: 17px; }\r\n#secondary-toolbar .mat-input-underline { border-color: transparent; }\r\n#secondary-toolbar .mat-input-placeholder { font-size: 18px; line-height: 31px; color: rgba(255, 255, 255, 0.7); }\r\n#secondary-toolbar .quiz-count { color: #fff; padding-right: 15px; font-size: 16px; }\r\n\r\n.fixed-fab, .left-fixed-fab { position: fixed !important; z-index: 1; bottom: 16px; }\r\n@media (min-width: 768px) { .fixed-fab, .left-fixed-fab { bottom: 50px; } }\r\n\r\n.fixed-fab { right: 16px; }\r\n@media (min-width: 768px) { .fixed-fab { right: 50px; } }\r\n\r\n.left-fixed-fab { left: 16px; }\r\n@media (min-width: 768px) { .left-fixed-fab { right: 120px; left: auto; } }\r\n\r\n.pan-icon { position: absolute; overflow: hidden; width: 0; display: none; text-align: center; height: 100%; color: #fff; }\r\n.pan-icon .mat-icon { line-height: 61px; }\r\n.pan-icon.edit-icon { background: #4CAF50; }\r\n.pan-icon.delete-icon { background: #F44336; }\r\n.pan-icon.listen-icon { background: #03a9f4; }\r\n\r\n.form-card { margin: 10px; padding: 20px !important; }\r\n.form-card md-card-content { margin: 0; }\r\n.form-card md-card-actions { text-align: center; margin-bottom: 0; padding: 0; }\r\n@media (min-width: 768px) { .form-card { margin: 20px auto; max-width: 600px; } }\r\n\r\n.main-card { margin: 0; padding: 0 0 70px !important; }\r\n.main-card md-card-content { margin: 0; }\r\n.main-card md-list-item *:focus { outline: none; }\r\n.main-card .mat-list-item-content { height: auto !important; border-bottom: 1px solid rgba(0, 0, 0, 0.12); padding: 10px !important; }\r\n.main-card .mat-list-item .mat-line { white-space: normal !important; text-overflow: initial !important; }\r\n.main-card .definition { font-size: 12px !important; line-height: 22px; }\r\n@media (min-width: 768px) { .main-card { margin: 20px auto; max-width: 600px; } }\r\n@media (min-width: 798px) { .main-card { padding: 0 !important; } }\r\n\r\n.quiz-card { background: transparent !important; padding-bottom: 0 !important; border-bottom: 70px solid #fff; }\r\n.quiz-card .mat-list-item-content { padding: 0 !important; }\r\n.quiz-card .mat-line { padding: 12px 10px !important; }\r\n.quiz-card .name { line-height: 25px; }\r\n.quiz-card .definition { font-size: 14px !important; line-height: 25px; }\r\n.quiz-card .mat-list { padding-top: 0; }\r\n.quiz-card md-list-item { background: #fff; position: relative; }\r\n.quiz-card .fixed-fab, .quiz-card .left-fixed-fab { bottom: 10px; }\r\n@media (min-width: 958px) { .quiz-card .fixed-fab, .quiz-card .left-fixed-fab { bottom: 50px; } }\r\n@media (max-width: 767px) { .quiz-card .mat-list-item-content { height: calc((100vh - 126px) / 10) !important; min-height: 45px; } }\r\n@media (min-width: 958px) { .quiz-card { border: 0; } }\r\n.quiz-card .pan-icon .mat-icon { line-height: 50px; }\r\n\r\n.quiz-form .mat-list-item-content { padding: 10px 20px !important; border-bottom: 0 !important; }\r\n.quiz-form .capitalize { display: inline-block; }\r\n\r\n.list-card { background: transparent !important; padding-bottom: 0 !important; border-bottom: 70px solid #fff; }\r\n@media (min-width: 798px) { .list-card { border: 0; } }\r\n.list-card .mat-list { padding-top: 0; }\r\n.list-card md-list-item { background: #fff; position: relative; }\r\n.list-card .mat-icon-button { margin-right: 10px; }\r\n\r\n.form-dialog { max-width: 400px; }\r\n.form-dialog md-dialog-actions { display: block; padding-top: 0; text-align: center; }\r\n.form-dialog md-dialog-actions button { margin: 2px 5px; }\r\n\r\n.confirm-dialog .mat-dialog-content { padding-top: 10px; padding-bottom: 10px; }\r\n.confirm-dialog md-dialog-actions { display: block; text-align: center; }\r\n.confirm-dialog md-dialog-actions button { margin: 2px 5px; }\r\n\r\n.alphabet-scroll { position: fixed; right: 0; top: 56px; width: 30px; height: calc(100vh - 120px); z-index: 1; }\r\n.alphabet-scroll .mat-icon { font-size: 18px; height: 18px; }\r\n.alphabet-scroll .alphabet { display: block; text-align: center; font-size: 11px; height: calc(100% / 28); color: #c7c5c5; cursor: pointer; line-height: 20px; position: relative; }\r\n.alphabet-scroll .alphabet.active { color: #000; }\r\n.alphabet-scroll .alphabet .tooltip { position: absolute; left: -150%; background: #fff; color: #000; width: 50px; height: 50px; font-size: 25px; line-height: 50px; border-radius: 50% 0 50% 50%; top: 50%; box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\r\n.alphabet-scroll .alphabet .tooltip .mat-icon { font-size: 30px; line-height: 50px; width: 50px; }\r\n@media (min-width: 601px) { .alphabet-scroll { top: 70px; right: 15px; }\r\n  .alphabet-scroll .alphabet { font-size: 14px; } }\r\n", ""]);

// exports


/***/ }),

/***/ 667:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MaterialIcons-Regular.570eb83859dc23dd0eec.woff2";

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(283);


/***/ })

},[670]);
//# sourceMappingURL=styles.bundle.js.map