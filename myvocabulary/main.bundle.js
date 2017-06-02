webpackJsonp([1,5],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCategoryComponent = (function () {
    function AddCategoryComponent(afo, helperService) {
        this.afo = afo;
        this.helperService = helperService;
        this.newCategory = {
            id: "",
            name: "",
            definition: ""
        };
        this.isDialog = 0;
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent.prototype.addCategory = function () {
        var _this = this;
        this.helperService.submitDisabled = 1;
        var requiredFields = [this.newCategory.name, this.newCategory.definition];
        if (!this.helperService.validateRequired(requiredFields)) {
            return false;
        }
        this.helperService.isDuplicate('categories', 'name', this.newCategory.name.toLowerCase().trim())
            .then(function (res) {
            if (!res) {
                var categories = _this.afo.database.list('/categories');
                var promise = categories.push({
                    name: _this.newCategory.name.toLowerCase().trim(),
                    definition: _this.newCategory.definition.trim(),
                    created_on: Math.round(new Date().getTime() / 1000)
                });
                promise.then(function (res) {
                    _this.newCategory.name = "";
                    _this.newCategory.definition = "";
                    _this.helperService.snackBar('Category added successfully');
                });
            }
            else {
                _this.helperService.snackBar('Category already exists');
            }
            _this.helperService.submitDisabled = 0;
        });
    };
    return AddCategoryComponent;
}());
AddCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(412),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_offline__["b" /* AngularFireOffline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_offline__["b" /* AngularFireOffline */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_index__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_index__["b" /* HelperService */]) === "function" && _b || Object])
], AddCategoryComponent);

var _a, _b;
//# sourceMappingURL=add-category.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddWordComponent = (function () {
    function AddWordComponent(route, afo, helperService) {
        this.route = route;
        this.afo = afo;
        this.helperService = helperService;
        this.newWord = {
            category: "",
            id: "",
            name: "",
            definition: ""
        };
        this.isDialog = 0;
    }
    AddWordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helperService.getAllCategories().then(function (data) {
            _this.categories = data;
        });
        if (this.route.snapshot.params.id) {
            this.newWord.category = this.route.snapshot.params.id;
        }
    };
    AddWordComponent.prototype.addWord = function () {
        var _this = this;
        this.helperService.submitDisabled = 1;
        var requiredFields = [this.newWord.category, this.newWord.name, this.newWord.definition];
        if (!this.helperService.validateRequired(requiredFields)) {
            return false;
        }
        this.helperService.isDuplicate('words', 'name', this.newWord.name.toLowerCase().trim())
            .then(function (res) {
            if (!res) {
                var categories = _this.afo.database.list('/words');
                var promise = categories.push({
                    category: _this.newWord.category,
                    name: _this.newWord.name.toLowerCase().trim(),
                    definition: _this.newWord.definition.trim(),
                    created_on: Math.round(new Date().getTime() / 1000)
                });
                promise.then(function (res) {
                    _this.newWord.name = "";
                    _this.newWord.definition = "";
                    _this.helperService.snackBar('Word added successfully');
                });
            }
            else {
                _this.helperService.snackBar('Word already exists');
            }
            _this.helperService.submitDisabled = 0;
        });
    };
    return AddWordComponent;
}());
AddWordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(417),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_offline__["b" /* AngularFireOffline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_offline__["b" /* AngularFireOffline */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_index__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_index__["b" /* HelperService */]) === "function" && _c || Object])
], AddWordComponent);

var _a, _b, _c;
//# sourceMappingURL=add-word.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditWordDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditWordDialogComponent = (function () {
    function EditWordDialogComponent(route, afo, helperService, dialogRef) {
        this.route = route;
        this.afo = afo;
        this.helperService = helperService;
        this.dialogRef = dialogRef;
        this.currentWord = {
            category: "",
            id: "",
            name: "",
            definition: ""
        };
    }
    EditWordDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helperService.getAllCategories().then(function (data) {
            _this.categories = data;
        });
        if (this.currentWord.id) {
            this.afo.database.object('/words/' + this.currentWord.id)
                .subscribe(function (word) {
                _this.currentWord.category = word["category"];
                _this.currentWord.name = word["name"];
                _this.currentWord.definition = word["definition"];
            });
        }
    };
    EditWordDialogComponent.prototype.editWord = function (id) {
        var _this = this;
        this.helperService.submitDisabled = 1;
        var requiredFields = [this.currentWord.category, this.currentWord.name, this.currentWord.definition];
        if (!this.helperService.validateRequired(requiredFields)) {
            return false;
        }
        this.helperService.isDuplicate('words', 'name', this.currentWord.name.toLowerCase().trim(), id)
            .then(function (res) {
            if (!res) {
                var words = _this.afo.database.list('/words');
                var promise = words.update(id, {
                    category: _this.currentWord.category,
                    name: _this.currentWord.name.toLowerCase().trim(),
                    definition: _this.currentWord.definition.trim(),
                    updated_on: Math.round(new Date().getTime() / 1000)
                });
                promise.then(function (res) {
                    _this.helperService.snackBar('Word updated successfully');
                    var updatedRecord = {
                        category: _this.currentWord.category,
                        name: _this.currentWord.name,
                        definition: _this.currentWord.definition
                    };
                    _this.dialogRef.close(updatedRecord);
                });
            }
            else {
                _this.helperService.snackBar('Word already exists');
            }
            _this.helperService.submitDisabled = 0;
        });
    };
    return EditWordDialogComponent;
}());
EditWordDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(418),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]) === "function" && _d || Object])
], EditWordDialogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-word-dialog.component.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_service__ = __webpack_require__(332);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__helper_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__(331);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delete_dialog_delete_dialog_component__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__delete_dialog_delete_dialog_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(330);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteDialogComponent = (function () {
    function DeleteDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DeleteDialogComponent.prototype.closeDialog = function (res) {
        if (res === void 0) { res = 0; }
        this.dialogRef.close(res);
    };
    return DeleteDialogComponent;
}());
DeleteDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(410),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], DeleteDialogComponent);

var _a;
//# sourceMappingURL=delete-dialog.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add_category_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit_category_dialog_component__ = __webpack_require__(210);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriesComponent = (function () {
    function CategoriesComponent(afo, renderer, helperService, dialog, ele) {
        this.afo = afo;
        this.renderer = renderer;
        this.helperService = helperService;
        this.dialog = dialog;
        this.ele = ele;
        this.hideSpinner = 0;
        this.showSearchBox = 0;
        this.firstSubscribe = 1;
        this.filterValue = { name: "", definition: "" };
        this.filterByDefinition = 0;
    }
    CategoriesComponent.prototype.ngAfterViewChecked = function () {
        this.getAllCategories();
    };
    CategoriesComponent.prototype.getAllCategories = function (orderBy, desc) {
        var _this = this;
        if (orderBy === void 0) { orderBy = "name"; }
        if (desc === void 0) { desc = 0; }
        this.categories = this.afo.database.list('/categories').map(function (data) {
            data = _this.helperService.sortData(data, orderBy, desc);
            _this.helperService.setAlphabetScroll(data);
            if (_this.firstSubscribe) {
                _this.helperService.listAnimation(data);
                _this.firstSubscribe = 0;
            }
            _this.dataLength = data.length;
            _this.hideSpinner = 1;
            return data;
        });
    };
    CategoriesComponent.prototype.deleteCategory = function (id) {
        this.helperService.deleteRecord('categories', id);
    };
    CategoriesComponent.prototype.setFocus = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.focusElement.nativeElement, 'focus');
        }, 0);
    };
    CategoriesComponent.prototype.listen = function (text) {
        this.helperService.listen(text);
    };
    CategoriesComponent.prototype.add = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_add_category_component__["a" /* AddCategoryComponent */]);
        dialogRef.componentInstance.isDialog = 1;
    };
    CategoriesComponent.prototype.edit = function (id) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__edit_edit_category_dialog_component__["a" /* EditCategoryDialogComponent */]);
        dialogRef.componentInstance.currentCategory.id = id;
    };
    CategoriesComponent.prototype.openWords = function (id) {
        this.helperService.navigate('/words/catid/', id);
    };
    CategoriesComponent.prototype.onPanEnd = function (event, id) {
        this.helperService.onPanEnd(event, id);
        if (event.deltaY <= 50 && event.deltaY >= -50 && event.distance >= this.helperService.listPanMaxDistance) {
            if (event.deltaX < 0) {
                this.deleteCategory(id);
            }
            else if (event.deltaX > 0) {
                this.edit(id);
            }
        }
    };
    CategoriesComponent.prototype.scrollToAlphabet = function (alphabet) {
        if (alphabet == "top") {
            this.helperService.scrollContent();
        }
        else if (alphabet == "bottom") {
            this.helperService.scrollContent(-1);
        }
        else {
            var ele = this.ele.nativeElement.querySelector("#" + alphabet.toLowerCase());
            if (ele) {
                this.helperService.scrollContent(ele.offsetTop);
            }
        }
    };
    return CategoriesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('focusElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], CategoriesComponent.prototype, "focusElement", void 0);
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(413),
        animations: [
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["d" /* fabAnimation */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["e" /* listAnimation */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["c" /* listIconAnimation */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_offline__["b" /* AngularFireOffline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_offline__["b" /* AngularFireOffline */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_index__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_index__["b" /* HelperService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], CategoriesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCategoryDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCategoryDialogComponent = (function () {
    function EditCategoryDialogComponent(route, afo, helperService, dialogRef) {
        this.route = route;
        this.afo = afo;
        this.helperService = helperService;
        this.dialogRef = dialogRef;
        this.currentCategory = {
            id: "",
            name: "",
            definition: ""
        };
    }
    EditCategoryDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentCategory.id) {
            this.afo.database.object('/categories/' + this.currentCategory.id)
                .subscribe(function (cat) {
                _this.currentCategory.name = cat["name"];
                _this.currentCategory.definition = cat["definition"];
            });
        }
    };
    EditCategoryDialogComponent.prototype.editCategory = function (id) {
        var _this = this;
        this.helperService.submitDisabled = 1;
        var requiredFields = [this.currentCategory.name, this.currentCategory.definition];
        if (!this.helperService.validateRequired(requiredFields)) {
            return false;
        }
        this.helperService.isDuplicate('categories', 'name', this.currentCategory.name.toLowerCase().trim(), id)
            .then(function (res) {
            if (!res) {
                var categories = _this.afo.database.list('/categories');
                var promise = categories.update(id, {
                    name: _this.currentCategory.name.toLowerCase().trim(),
                    definition: _this.currentCategory.definition.trim(),
                    updated_on: Math.round(new Date().getTime() / 1000)
                });
                promise.then(function (res) {
                    _this.helperService.snackBar('Category updated successfully');
                    var updatedRecord = {
                        name: _this.currentCategory.name,
                        definition: _this.currentCategory.definition
                    };
                    _this.dialogRef.close(updatedRecord);
                });
            }
            else {
                _this.helperService.snackBar('Category already exists');
            }
            _this.helperService.submitDisabled = 0;
        });
    };
    return EditCategoryDialogComponent;
}());
EditCategoryDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(414),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]) === "function" && _d || Object])
], EditCategoryDialogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-category-dialog.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__words_edit_edit_word_dialog_component__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuizComponent = (function () {
    function QuizComponent(afo, route, router, dialog, helperService) {
        this.afo = afo;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.helperService = helperService;
        this.quizeSet = -1;
        this.quizWordsLength = 0;
        this.finishedQuiz = 0;
        this.quizeSetFinished = 1;
        this.hideSpinner = 0;
        this.categorySelected = [];
        this.isAllSelected = 1;
    }
    QuizComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.data[0].start) {
            this.getWords();
        }
        else {
            this.getCategories();
        }
    };
    QuizComponent.prototype.getCategories = function () {
        var _this = this;
        var preSelected = this.route.snapshot.params.id;
        if (preSelected) {
            this.helperService.quizSelectedCategories = [];
        }
        if (preSelected || this.helperService.quizSelectedCategories.length > 0) {
            this.isAllSelected = 0;
        }
        this.helperService.getAllCategories().then(function (data) {
            _this.categories = data;
            data.map(function (d) {
                if (d.$key == preSelected || _this.isAllSelected || _this.helperService.quizSelectedCategories.indexOf(d.$key) >= 0) {
                    _this.categorySelected[d.$key] = true;
                }
                else {
                    _this.categorySelected[d.$key] = false;
                }
            });
            if (_this.isAllSelected == 0 && Object.keys(_this.categorySelected).length == _this.helperService.quizSelectedCategories.length) {
                _this.isAllSelected = 1;
            }
            _this.hideSpinner = 1;
        });
    };
    QuizComponent.prototype.startQuiz = function () {
        this.helperService.quizSelectedCategories = [];
        for (var i in this.categorySelected) {
            if (this.categorySelected[i] == true) {
                this.helperService.quizSelectedCategories.push(i);
            }
        }
        this.router.navigate(['/quiz/start']);
    };
    QuizComponent.prototype.getWords = function () {
        var _this = this;
        this.helperService.getAllWords(this.helperService.quizSelectedCategories).then(function (data) {
            _this.quizWordsLength = data.length;
            if (_this.quizWordsLength == 0) {
                _this.helperService.snackBar('Selected category has no word.');
                _this.router.navigate(['/quiz']);
                return false;
            }
            data.forEach(function (d) {
                d["showAnswer"] = 0;
            });
            data = _this.helperService.shuffleData(data);
            _this.quizWords = data;
            _this.getQuizWords();
            _this.hideSpinner = 1;
        });
    };
    QuizComponent.prototype.getQuizWords = function (direction) {
        if (direction === void 0) { direction = "next"; }
        if (direction == "next") {
            this.quizeSet++;
        }
        else {
            this.quizeSet--;
        }
        var limit = 10;
        var start = this.quizeSet * limit;
        var end = start + limit;
        if (this.quizWordsLength <= (this.quizeSet + 1) * limit && this.quizWordsLength) {
            this.quizeSetFinished = 1;
        }
        else {
            this.quizeSetFinished = 0;
        }
        this.quizWords.forEach(function (d) { return d["showQuiz"] = 0; });
        for (var i = start; i < end; i++) {
            if (this.quizWords[i]) {
                this.quizWords[i]["showQuiz"] = 1;
            }
        }
    };
    QuizComponent.prototype.listen = function (text) {
        this.helperService.listen(text);
    };
    QuizComponent.prototype.edit = function (wordId, index) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__words_edit_edit_word_dialog_component__["a" /* EditWordDialogComponent */]);
        dialogRef.componentInstance.currentWord.id = wordId;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.quizWords[index]['name'] = result.name;
                _this.quizWords[index]['definition'] = result.definition;
            }
        });
    };
    QuizComponent.prototype.selectAll = function () {
        var selectValue;
        if (this.isAllSelected) {
            this.isAllSelected = 0;
            selectValue = 0;
        }
        else {
            this.isAllSelected = 1;
            selectValue = 1;
        }
        for (var i in this.categorySelected) {
            this.categorySelected[i] = selectValue;
        }
    };
    QuizComponent.prototype.onPanEnd = function (event, id, index, text) {
        this.helperService.onPanEnd(event, id);
        if (event.deltaY <= 50 && event.deltaY >= -50 && event.distance >= this.helperService.listPanMaxDistance) {
            if (event.deltaX < 0) {
                this.listen(text);
            }
            else if (event.deltaX > 0) {
                this.edit(id, index);
            }
        }
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(415),
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["c" /* listIconAnimation */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */]) === "function" && _e || Object])
], QuizComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(af, router, snackBar) {
        this.af = af;
        this.router = router;
        this.snackBar = snackBar;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.af.auth.login({
            email: this.email,
            password: this.password
        }).then(function (res) {
            _this.router.navigate(['/']);
        }).catch(function (error) {
            _this.snackBar.open(error.toString(), '', {
                duration: 3000
            });
        });
    };
    LoginComponent.prototype.googleLogin = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthMethods */].Popup
        }).then(function (res) {
            _this.router.navigate(['/']);
        }).catch(function (error) {
            _this.snackBar.open(error.toString(), '', {
                duration: 3000
            });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(416)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdSnackBar */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_add_word_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_word_dialog_component__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WordsComponent = (function () {
    function WordsComponent(afo, route, renderer, helperService, dialog, ele) {
        this.afo = afo;
        this.route = route;
        this.renderer = renderer;
        this.helperService = helperService;
        this.dialog = dialog;
        this.ele = ele;
        this.hideSpinner = 0;
        this.showSearchBox = 0;
        this.isSpeechOn = 0;
        this.firstSubscribe = 1;
        this.filterValue = { name: "", definition: "" };
        this.filterByDefinition = 0;
    }
    WordsComponent.prototype.ngAfterViewChecked = function () {
        this.getAllWords();
    };
    WordsComponent.prototype.getAllWords = function (orderBy, desc) {
        var _this = this;
        if (orderBy === void 0) { orderBy = "name"; }
        if (desc === void 0) { desc = 0; }
        this.words = this.afo.database.list('/words').map(function (data) {
            if (_this.route.snapshot.params.id) {
                data = _this.helperService.getCategoryData(data, 'category', _this.route.snapshot.params.id);
            }
            data = _this.helperService.sortData(data, orderBy, desc);
            _this.helperService.setAlphabetScroll(data);
            // if (this.firstSubscribe) {
            // 	this.helperService.listAnimation(data);
            // 	this.firstSubscribe = 0;
            // }
            _this.dataLength = data.length;
            _this.hideSpinner = 1;
            return data;
        });
    };
    WordsComponent.prototype.deleteWord = function (id) {
        this.helperService.deleteRecord('words', id);
    };
    WordsComponent.prototype.setFocus = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.focusElement.nativeElement, 'focus');
        }, 0);
    };
    WordsComponent.prototype.listen = function (text) {
        this.helperService.listen(text, this.isSpeechOn);
    };
    WordsComponent.prototype.add = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_add_word_component__["a" /* AddWordComponent */]);
        dialogRef.componentInstance.isDialog = 1;
        if (this.route.snapshot.params.id) {
            dialogRef.componentInstance.newWord.category = this.route.snapshot.params.id;
        }
    };
    WordsComponent.prototype.edit = function (id) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__edit_edit_word_dialog_component__["a" /* EditWordDialogComponent */]);
        dialogRef.componentInstance.currentWord.id = id;
    };
    WordsComponent.prototype.onPanEnd = function (event, id) {
        this.helperService.onPanEnd(event, id);
        if (event.deltaY <= 50 && event.deltaY >= -50 && event.distance >= this.helperService.listPanMaxDistance) {
            if (event.deltaX < 0) {
                this.deleteWord(id);
            }
            else if (event.deltaX > 0) {
                this.edit(id);
            }
        }
    };
    WordsComponent.prototype.scrollToAlphabet = function (alphabet) {
        if (alphabet == "top") {
            this.helperService.scrollContent();
        }
        else if (alphabet == "bottom") {
            this.helperService.scrollContent(-1);
        }
        else {
            var ele = this.ele.nativeElement.querySelector("#" + alphabet.toLowerCase());
            if (ele) {
                this.helperService.scrollContent(ele.offsetTop);
            }
        }
    };
    return WordsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('focusElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], WordsComponent.prototype, "focusElement", void 0);
WordsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(419),
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["d" /* fabAnimation */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["e" /* listAnimation */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["c" /* listIconAnimation */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object])
], WordsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=words.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
var environment = {
    production: true
};
var firebaseConfig = {
    apiKey: 'AIzaSyB2KLSCR0PtNQO0YbGtlAU2SoBDQNhTX3k',
    authDomain: 'myvocabularylive.firebaseapp.com',
    databaseURL: 'https://myvocabularylive.firebaseio.com',
    storageBucket: 'myvocabularylive.appspot.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 280;


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(214);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, af) {
        this.router = router;
        this.af = af;
    }
    AuthGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.af.auth.map(function (auth) {
            if (auth) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fabAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return listAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listIconAnimation; });

var fabAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('snackbarState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateY(-48px)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('225ms cubic-bezier(0.4,0.0,1,1)')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('195ms cubic-bezier(0.0,0.0,0.2,1)'))
]);
var listAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('listState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'scale(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('fade-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ display: 'none' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('fade-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => fade-out', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(200, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(-50px)', offset: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
        ]))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => fade-in', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('out => in', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'scale(1)' }))
    ])
]);
var listIconAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('listIconState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ display: 'inline-block' }))
]);
//# sourceMappingURL=animation.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delete_dialog_delete_dialog_component__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HelperService = (function () {
    function HelperService(afo, sb, dialog, router) {
        this.afo = afo;
        this.sb = sb;
        this.dialog = dialog;
        this.router = router;
        this.snackbarState = 'inactive';
        this.animationState = [];
        this.submitDisabled = 0;
        this.panDeleteEnabled = 0;
        this.listPanMaxDistance = 50;
        this.listIconState = {
            delete: [],
            edit: []
        };
        this.pan = {
            left: [],
            iconWidth: [],
            iconPosition: []
        };
        this.quizSelectedCategories = [];
        this.alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        this.alphabetsEnabled = [];
        this.alphabetsHover = [];
    }
    HelperService.prototype.ngOnInit = function () {
    };
    HelperService.prototype.getAllCategories = function () {
        var _this = this;
        return this.afo.database.list('/categories').map(function (data) {
            return _this.sortData(data, 'name');
        }).first().toPromise();
    };
    HelperService.prototype.getAllWords = function (category) {
        var _this = this;
        if (category === void 0) { category = ''; }
        return this.afo.database.list('/words').map(function (data) {
            if (category != "") {
                data = _this.getCategoryData(data, 'category', category);
            }
            return data;
        }).first().toPromise();
    };
    HelperService.prototype.deleteRecord = function (table, id) {
        var _this = this;
        if (this.panDeleteEnabled) {
            this.proceedDeleteRecords(table, id);
        }
        else {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__delete_dialog_delete_dialog_component__["a" /* DeleteDialogComponent */]);
            dialogRef.afterClosed().subscribe(function (res) {
                if (res == 1) {
                    _this.proceedDeleteRecords(table, id);
                }
            });
        }
    };
    HelperService.prototype.proceedDeleteRecords = function (table, id) {
        var _this = this;
        var deleteDelay = 10000;
        this.animationState[id] = 'fade-out';
        this.snackbarTimeout = setTimeout(function () {
            var observable = _this.afo.database.list('/' + table);
            observable.remove(id);
        }, deleteDelay);
        this.snackBar('Record deleted.', deleteDelay, 'Undo', id);
    };
    HelperService.prototype.deleteDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__delete_dialog_delete_dialog_component__["a" /* DeleteDialogComponent */]);
        dialogRef.afterClosed().subscribe(function (res) {
            console.log(res);
            return false;
        });
    };
    HelperService.prototype.sortData = function (data, value, desc) {
        if (desc === void 0) { desc = 0; }
        data.sort(function (a, b) {
            if (a[value] > b[value]) {
                return 1;
            }
            else if (a[value] < b[value]) {
                return -1;
            }
            else {
                return 0;
            }
        });
        if (desc) {
            data.reverse();
        }
        return data;
    };
    HelperService.prototype.getCategoryData = function (data, cat, id) {
        var result = [];
        data.map(function (d) {
            if (d[cat] == id || id.indexOf(d[cat]) >= 0) {
                result.push(d);
            }
        });
        return result;
    };
    HelperService.prototype.isDuplicate = function (table, column, value, key) {
        if (key === void 0) { key = ""; }
        var isDuplicate = 0;
        return this.afo.database.list('/' + table + '/').map(function (data) {
            data.forEach(function (d) {
                if (d[column] == value && (key == "" || d.$key != key)) {
                    isDuplicate = 1;
                }
            });
            return isDuplicate;
        }).first().toPromise();
    };
    HelperService.prototype.validateRequired = function (fields) {
        var isError = 0;
        fields.forEach(function (field) {
            if (field.trim() == "") {
                isError = 1;
                return false;
            }
        });
        if (isError == 1) {
            this.submitDisabled = 0;
            this.snackBar("Please fill all required field(s).");
            return false;
        }
        else {
            return true;
        }
    };
    HelperService.prototype.shuffleData = function (array) {
        var i = 0, j = 0, temp = null;
        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    HelperService.prototype.listen = function (text, isOn) {
        if (isOn === void 0) { isOn = 1; }
        if (isOn) {
            responsiveVoice.speak(text);
        }
    };
    HelperService.prototype.snackBar = function (message, duration, action, animationStateId) {
        var _this = this;
        if (duration === void 0) { duration = 3000; }
        if (action === void 0) { action = ''; }
        if (animationStateId === void 0) { animationStateId = ''; }
        this.snackbarState = 'active';
        var sb = this.sb.open(message, action, {
            duration: duration,
        });
        sb.afterDismissed().subscribe(function () {
            _this.snackbarState = 'inactive';
        });
        sb.onAction().subscribe(function () {
            clearTimeout(_this.snackbarTimeout);
            _this.animationState[animationStateId] = 'fade-in';
        });
    };
    HelperService.prototype.listAnimation = function (data) {
        var _this = this;
        this.animationState = [];
        data.forEach(function (d) {
            _this.animationState[d.$key] = 'out';
        });
        var t = 1;
        data.forEach(function (d) {
            setTimeout(function () {
                _this.animationState[d.$key] = 'in';
            }, t * 100);
            t++;
        });
    };
    HelperService.prototype.navigate = function (url, param) {
        if (param === void 0) { param = ""; }
        this.router.navigate([url, param]);
    };
    HelperService.prototype.onPan = function (event, id) {
        if (event.deltaY <= 50 && event.deltaY >= -50 && event.distance <= this.listPanMaxDistance + 25) {
            this.pan.iconWidth[id] = event.distance + 'px';
            this.pan.left[id] = event.deltaX + 'px';
            if (event.deltaX < 0) {
                this.pan.iconPosition[id] = event.deltaX + 'px';
                this.listIconState.edit[id] = '';
                this.listIconState.delete[id] = 'active';
            }
            else if (event.deltaX > 0) {
                this.pan.iconPosition[id] = '-' + event.deltaX + 'px';
                this.listIconState.delete[id] = '';
                this.listIconState.edit[id] = 'active';
            }
        }
        else if (event.deltaY > 50 || event.deltaY < -50) {
            this.pan.left[id] = '0px';
            this.pan.iconWidth[id] = '0px';
            this.pan.iconPosition[id] = '0px';
            this.listIconState.delete[id] = '';
            this.listIconState.edit[id] = '';
        }
    };
    HelperService.prototype.onPanEnd = function (event, id) {
        this.pan.left[id] = '0px';
        this.pan.iconWidth[id] = '0px';
        this.pan.iconPosition[id] = '0px';
        this.listIconState.delete[id] = '';
        this.listIconState.edit[id] = '';
    };
    HelperService.prototype.scrollContent = function (offsetTop) {
        if (offsetTop === void 0) { offsetTop = 0; }
        if (offsetTop == -1) {
            offsetTop = this.eleSidenavContent.scrollHeight;
        }
        this.eleSidenavContent.scrollTop = offsetTop;
    };
    HelperService.prototype.setAlphabetScroll = function (data) {
        var _this = this;
        if (data === void 0) { data = []; }
        this.alphabetsHover['top'] = 0;
        this.alphabetsHover['bottom'] = 0;
        this.alphabets.forEach(function (alphabet, key) {
            _this.alphabetsEnabled[alphabet.toLowerCase()] = 0;
            _this.alphabetsHover[key] = 0;
        });
        if (data.length > 0) {
            data.forEach(function (d) {
                _this.alphabetsEnabled[d.name.slice(0, 1)] = 1;
            });
        }
    };
    HelperService.prototype.onAlphabetsHover = function (key) {
        var _this = this;
        this.alphabetsHover[key] = 1;
        setTimeout(function () {
            _this.alphabetsHover[key] = 0;
        }, 1000);
    };
    return HelperService;
}());
HelperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_offline__["b" /* AngularFireOffline */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], HelperService);

var _a, _b, _c, _d;
//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(af, router, helperService, ele) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.helperService = helperService;
        this.ele = ele;
        this.currentUser = {
            id: ""
        };
        this.sidenavPosition = "";
        this.sidenavVisiblity = "";
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
                _this.sideNav.close();
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.helperService.eleSidenavContent = this.ele.nativeElement.querySelector(".mat-sidenav-content");
        this.getUser();
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.currentUser.id = auth.uid;
            }
        });
    };
    AppComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.currentUser.id = "";
        this.router.navigate(['/']);
    };
    AppComponent.prototype.onSidenavOpen = function (event) {
        if (event.deltaX > 0) {
            var percentage = 100 - (event.distance / this.sideNav._width * 100);
            if (event.deltaY <= 50 && event.deltaY >= -50) {
                this.sidenavVisiblity = "visible";
                this.sidenavPosition = "translateX(-" + percentage + "%)";
            }
        }
    };
    AppComponent.prototype.onSidenavOpenEnd = function (event) {
        var percentage = event.distance / this.sideNav._width * 100;
        this.sidenavPosition = "";
        this.sidenavVisiblity = "";
        if (event.deltaY <= 50 && event.deltaY >= -50 && percentage >= 40) {
            this.sideNav.open();
        }
    };
    AppComponent.prototype.onSidenavClose = function (event) {
        if (event.deltaX < 0) {
            var percentage = event.deltaX / this.sideNav._width * 100;
            if (event.deltaY <= 50 && event.deltaY >= -50) {
                this.sidenavPosition = "translateX(" + percentage + "%)";
            }
        }
    };
    AppComponent.prototype.onSidenavCloseEnd = function (event) {
        var percentage = event.distance / this.sideNav._width * 100;
        this.sidenavPosition = "";
        if (event.deltaY <= 50 && event.deltaY >= -50 && percentage >= 35) {
            this.sideNav.close();
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sideNav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSidenav */]) === "function" && _a || Object)
], AppComponent.prototype, "sideNav", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(411)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_index__["b" /* HelperService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_offline__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_filter_pipe__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_focus__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_focus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_focus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_index__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_index__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_login_login_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__categories_categories_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__categories_add_add_category_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__categories_edit_edit_category_dialog_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__words_words_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__words_add_add_word_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__words_edit_edit_word_dialog_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__quiz_quiz_component__ = __webpack_require__(211);
/* unused harmony export firebaseAuthConfig */
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_8_angularfire2__["b" /* AuthMethods */].Password
};
var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'pinch': { enable: false },
            'rotate': { enable: false }
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* HammerGestureConfig */]));

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_18__categories_add_add_category_component__["a" /* AddCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_19__categories_edit_edit_category_dialog_component__["a" /* EditCategoryDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_20__words_words_component__["a" /* WordsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__words_add_add_word_component__["a" /* AddWordComponent */],
            __WEBPACK_IMPORTED_MODULE_22__words_edit_edit_word_dialog_component__["a" /* EditWordDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_23__quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_index__["a" /* DeleteDialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__categories_edit_edit_category_dialog_component__["a" /* EditCategoryDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_22__words_edit_edit_word_dialog_component__["a" /* EditWordDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_index__["a" /* DeleteDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["c" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["b" /* firebaseConfig */], firebaseAuthConfig),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_offline__["a" /* AngularFireOfflineModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_filter_pipe__["Ng2FilterPipeModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_focus__["FocusModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__shared_index__["b" /* HelperService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */],
                useClass: MyHammerConfig
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login_login_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_add_add_category_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__words_words_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__words_add_add_word_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__ = __webpack_require__(211);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__user_login_login_component__["a" /* LoginComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_3__categories_categories_component__["a" /* CategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]] },
    { path: 'categories/add', component: __WEBPACK_IMPORTED_MODULE_4__categories_add_add_category_component__["a" /* AddCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]] },
    { path: 'words', component: __WEBPACK_IMPORTED_MODULE_5__words_words_component__["a" /* WordsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]] },
    { path: 'words/catid/:id', component: __WEBPACK_IMPORTED_MODULE_5__words_words_component__["a" /* WordsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]] },
    { path: 'words/add', component: __WEBPACK_IMPORTED_MODULE_6__words_add_add_word_component__["a" /* AddWordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]] },
    { path: 'words/add/:id', component: __WEBPACK_IMPORTED_MODULE_6__words_add_add_word_component__["a" /* AddWordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]] },
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__["a" /* QuizComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]], data: [{ start: false }] },
    { path: 'quiz/catid/:id', component: __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__["a" /* QuizComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]], data: [{ start: false }] },
    { path: 'quiz/start', component: __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__["a" /* QuizComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]], data: [{ start: true }] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<div class=\"confirm-dialog\">\r\n    <md-dialog-content>Are you sure to delete this item?</md-dialog-content>\r\n    <md-dialog-actions>\r\n        <button md-raised-button color=\"accent\" (click)=\"closeDialog(1)\">Yes</button>\r\n        <button md-raised-button (click)=\"closeDialog()\">No</button>\r\n    </md-dialog-actions>\r\n</div>"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n    <md-toolbar color=\"primary\">\n        <button md-icon-button (click)=\"sideNav.toggle()\">\n            <md-icon>menu</md-icon>\n        </button>\n        <span class=\"fill-space\"></span>\n    </md-toolbar>\n    <md-sidenav align=\"start\" #sideNav [style.transform]=\"sidenavPosition\" [style.visibility]=\"sidenavVisiblity\">\n        <div (pan)=\"onSidenavClose($event)\" (panend)=\"onSidenavCloseEnd($event)\" class=\"sidenav-pan\">\n            <div class=\"sidenav-image\"><img src=\"assets/icons/android-chrome-192x192.png\"></div>\n            <md-nav-list>\n                <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"/\" md-list-item><md-icon md-list-icon>home</md-icon><p md-line>Home</p></a>\n                <a *ngIf=\"!currentUser.id\" routerLinkActive=\"active\" routerLink=\"/login\" md-list-item><md-icon md-list-icon>exit_to_app</md-icon><p md-line>Login</a>\n                <a *ngIf=\"currentUser.id\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"/categories\" md-list-item><md-icon md-list-icon>list</md-icon><p md-line>Categories</a>\n                <a *ngIf=\"currentUser.id\" routerLinkActive=\"active\" routerLink=\"/categories/add\" md-list-item><md-icon md-list-icon>add</md-icon><p md-line>Add Category</a>\n                <a *ngIf=\"currentUser.id\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLink=\"/words\" md-list-item><md-icon md-list-icon>list</md-icon><p md-line>Words</a>\n                <a *ngIf=\"currentUser.id\" routerLinkActive=\"active\" routerLink=\"/words/add\" md-list-item><md-icon md-list-icon>add</md-icon><p md-line>Add Word</a>\n                <a *ngIf=\"currentUser.id\" routerLinkActive=\"active\" routerLink=\"/quiz\" md-list-item><md-icon md-list-icon>lightbulb_outline</md-icon><p md-line>Quiz</a>\n                <md-divider *ngIf=\"currentUser.id\"></md-divider>\n                <a *ngIf=\"currentUser.id\" (click)=\"logout()\" md-list-item><md-icon md-list-icon>exit_to_app</md-icon><p md-line>Logout</p></a>\n            </md-nav-list>\n        </div>\n    </md-sidenav>\n\n    <div class=\"container\">\n        <div class=\"sidenav-edge\" (pan)=\"onSidenavOpen($event)\" (panend)=\"onSidenavOpenEnd($event)\"></div>\n        <router-outlet></router-outlet>\n    </div>\n</md-sidenav-container>"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"!isDialog\" class=\"form-card\">\r\n    <form (submit)=\"addCategory()\" autocomplete=\"off\">\r\n        <md-card-content>\r\n            <md-input-container>\r\n                <input mdInput type=\"text\" [(ngModel)]=\"newCategory.name\" name=\"name\" placeholder=\"Category\" required>\r\n            </md-input-container>\r\n            <md-input-container>\r\n                <input mdInput type=\"text\" [(ngModel)]=\"newCategory.definition\" name=\"definition\" placeholder=\"Definition\" required>\r\n            </md-input-container>\r\n        </md-card-content>\r\n        <md-card-actions>\r\n            <button md-raised-button color=\"accent\" [disabled]=\"helperService.submitDisabled == 1\">Submit</button>\r\n        </md-card-actions>\r\n    </form>\r\n</md-card>\r\n\r\n<form *ngIf=\"isDialog\" (submit)=\"addCategory()\" autocomplete=\"off\" class=\"form-dialog\">\r\n    <md-dialog-content>\r\n        <md-input-container>\r\n            <input mdInput type=\"text\" [(ngModel)]=\"newCategory.name\" name=\"name\" placeholder=\"Category\" required>\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input mdInput type=\"text\" [(ngModel)]=\"newCategory.definition\" name=\"definition\" placeholder=\"Definition\" required>\r\n        </md-input-container>\r\n    </md-dialog-content>\r\n    <md-dialog-actions>\r\n        <button md-raised-button md-dialog-close>Close</button>\r\n        <button md-raised-button color=\"accent\" [disabled]=\"helperService.submitDisabled == 1\">Submit</button>\r\n    </md-dialog-actions>\r\n</form>"

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = "<md-toolbar id=\"secondary-toolbar\">\n    <span class=\"fill-space\"></span>\n    <md-input-container [class.hide]=\"!showSearchBox\" floatPlaceholder=\"never\">\n        <input *ngIf=\"!filterByDefinition\" mdInput type=\"text\" [(ngModel)]=\"filterValue.name\" placeholder=\"Search category\" [focus]=\"true\" #focusElement>\n        <input *ngIf=\"filterByDefinition\" mdInput type=\"text\" [(ngModel)]=\"filterValue.definition\" placeholder=\"Search definition\" [focus]=\"true\" #focusElement>\n    </md-input-container>\n    <button *ngIf=\"!showSearchBox\" md-icon-button (click)=\"showSearchBox = 1;setFocus()\"><md-icon>search</md-icon></button>\n    <button *ngIf=\"showSearchBox\" md-icon-button (click)=\"showSearchBox = 0;filterValue.name=filterValue.definition=''\"><md-icon>close</md-icon></button>\n    <button md-icon-button [mdMenuTriggerFor]=\"topMenu\"><md-icon>more_vert</md-icon></button>\n    <md-menu #topMenu=\"mdMenu\">\n        <button md-menu-item (click)=\"getAllCategories('created_on', 1)\">Recent</button>\n        <button md-menu-item (click)=\"getAllCategories('created_on')\">Earlier</button>\n        <button md-menu-item (click)=\"getAllCategories('name')\">Ascending</button>\n        <button md-menu-item (click)=\"getAllCategories('name', 1)\">Descending</button>\n        <button *ngIf=\"filterByDefinition\" md-menu-item (click)=\"filterByDefinition = 0;filterValue.definition = '';\"><md-icon>search</md-icon>Category</button>\n        <button *ngIf=\"!filterByDefinition\" md-menu-item (click)=\"filterByDefinition = 1;filterValue.name = '';\"><md-icon>search</md-icon>Definition</button>\n        <button *ngIf=\"!helperService.panDeleteEnabled\" md-menu-item (click)=\"helperService.panDeleteEnabled = 1\"><md-icon>delete</md-icon>Enable</button>\n        <button *ngIf=\"helperService.panDeleteEnabled\" md-menu-item (click)=\"helperService.panDeleteEnabled = 0\"><md-icon>delete_forever</md-icon>Disable</button>\n    </md-menu>\n</md-toolbar>\n<md-card class=\"main-card list-card\">\n    <div class=\"spinner-container\">\n        <md-spinner *ngIf=\"!hideSpinner\" color=\"accent\"></md-spinner>\n    </div>\n    <md-list>\n        <md-list-item id=\"{{category.name | slice:0:1}}\" *ngFor=\"let category of categories | async | filterBy: filterValue\" [@listState]=\"helperService.animationState[category.$key]\" (pan)=\"helperService.onPan($event, category.$key)\" (panend)=\"onPanEnd($event, category.$key)\" [style.left]=\"helperService.pan.left[category.$key]\">\n            <p md-line (tap)=\"openWords(category.$key)\" class=\"capitalize\"><b>{{category.name}}</b></p>\n            <p md-line (tap)=\"openWords(category.$key)\" class=\"definition\">{{category.definition}}</p>\n            <span class=\"fill-space\"></span>\n            <button md-icon-button [mdMenuTriggerFor]=\"catMenu\">\n\t\t\t\t<md-icon>more_vert</md-icon>\n            </button>\n            <md-menu #catMenu=\"mdMenu\">\n                <button md-menu-item (click)=\"listen(category.name)\">Listen</button>\n                <button md-menu-item [routerLink]=\"['/words/add/', category.$key]\">Add</button>\n                <button md-menu-item [routerLink]=\"['/quiz/catid/', category.$key]\">Quiz</button>\n            </md-menu>\n            <span class=\"pan-icon edit-icon\" [@listIconState]=\"helperService.listIconState.edit[category.$key]\" [style.left]=\"helperService.pan.iconPosition[category.$key]\" [style.width]=\"helperService.pan.iconWidth[category.$key]\">\n                <md-icon>edit</md-icon>\n            </span>\n            <span class=\"pan-icon delete-icon\" [@listIconState]=\"helperService.listIconState.delete[category.$key]\" [style.right]=\"helperService.pan.iconPosition[category.$key]\" [style.width]=\"helperService.pan.iconWidth[category.$key]\">\n                <md-icon>delete</md-icon>\n            </span>\n        </md-list-item>\n        <p *ngIf=\"dataLength == 0\" class=\"no-record\">No record found</p>\n    </md-list>\n</md-card>\n<button md-fab class=\"fixed-fab\" [@snackbarState]=\"helperService.snackbarState\" (click)=\"add()\" (panleft)=\"helperService.scrollContent()\">{{dataLength}}</button>\n\n<div class=\"alphabet-scroll\" *ngIf=\"dataLength > 0\">\n    <span class=\"alphabet active\" (click)=\"scrollToAlphabet('top')\" (mouseenter)=\"helperService.alphabetsHover['top'] = 1\" (mouseleave)=\"helperService.alphabetsHover['top'] = 0\" (tap)=\"helperService.onAlphabetsHover('top')\">\n        <md-icon>arrow_upward</md-icon>\n        <span class=\"tooltip\" *ngIf=\"helperService.alphabetsHover['top']\"><md-icon>arrow_upward</md-icon></span>\n    </span>\n    <span *ngFor=\"let alphabet of helperService.alphabets; let i = index\" class=\"alphabet\" [class.active]=\"helperService.alphabetsEnabled[alphabet|lowercase]\" (click)=\"scrollToAlphabet(alphabet)\" (mouseenter)=\"helperService.alphabetsHover[i] = 1\"  (mouseleave)=\"helperService.alphabetsHover[i] = 0\" (tap)=\"helperService.onAlphabetsHover(i)\">\n        <span class=\"tooltip\" *ngIf=\"helperService.alphabetsHover[i]\">{{alphabet}}</span>\n        {{alphabet}}\n    </span>\n    <span class=\"alphabet active\" (click)=\"scrollToAlphabet('bottom')\" (mouseenter)=\"helperService.alphabetsHover['bottom'] = 1\" (mouseleave)=\"helperService.alphabetsHover['bottom'] = 0\" (tap)=\"helperService.onAlphabetsHover('bottom')\">\n        <md-icon>arrow_downward</md-icon>\n         <span class=\"tooltip\" *ngIf=\"helperService.alphabetsHover['bottom']\"><md-icon>arrow_downward</md-icon></span>\n    </span>\n</div>"

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"editCategory(currentCategory.id)\" autocomplete=\"off\" class=\"form-dialog\">\r\n    <md-dialog-content>\r\n        <md-input-container>\r\n            <input mdInput type=\"text\" [(ngModel)]=\"currentCategory.name\" name=\"name\" placeholder=\"Category\" required>\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input mdInput type=\"text\" [(ngModel)]=\"currentCategory.definition\" name=\"definition\" placeholder=\"Definition\" required>\r\n        </md-input-container>\r\n    </md-dialog-content>\r\n    <md-dialog-actions>\r\n        <button md-raised-button color=\"accent\" [disabled]=\"helperService.submitDisabled == 1\">Update</button>\r\n    </md-dialog-actions>\r\n</form>"

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<md-toolbar id=\"secondary-toolbar\">\r\n    <span class=\"fill-space\"></span>\r\n    <span *ngIf=\"quizWordsLength\" class=\"quiz-count\">{{finishedQuiz}} / {{quizWordsLength}}</span>\r\n</md-toolbar>\r\n\r\n<md-card class=\"main-card quiz-form\" *ngIf=\"quizWordsLength == 0\">\r\n    <md-card-content>\r\n        <md-spinner *ngIf=\"!hideSpinner\" color=\"accent\"></md-spinner>\r\n        <md-list>\r\n            <md-list-item *ngFor=\"let category of categories\">\r\n                <md-checkbox [(ngModel)]=\"categorySelected[category.$key]\">\r\n                    <span class=\"capitalize\">{{category.name}}</span>\r\n                </md-checkbox>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-card-content>\r\n    <button md-fab class=\"left-fixed-fab\" (click)=\"selectAll()\">\r\n        <md-icon *ngIf=\"!isAllSelected\">check_box_outline_blank</md-icon>\r\n        <md-icon *ngIf=\"isAllSelected\">check_box</md-icon>\r\n    </button>\r\n    <button md-fab class=\"fixed-fab\" (click)=\"startQuiz()\"><md-icon>play_arrow</md-icon></button>\r\n</md-card>\r\n\r\n<md-card class=\"main-card quiz-card\" *ngIf=\"quizWordsLength > 0\">\r\n    <md-spinner *ngIf=\"!hideSpinner\" color=\"accent\"></md-spinner>\r\n    <md-list>\r\n        <div *ngFor=\"let word of quizWords; let i = index;\">\r\n            <md-list-item *ngIf=\"word.showQuiz\" (pan)=\"helperService.onPan($event, word.$key)\" (panend)=\"onPanEnd($event, word.$key, i, word.name)\" [style.left]=\"helperService.pan.left[word.$key]\">\r\n                <p md-line (tap)=\"word.showAnswer = 1;finishedQuiz = finishedQuiz + 1;\" *ngIf=\"!word.showAnswer\" class=\"definition\">{{word.definition}}</p>\r\n                <p md-line (tap)=\"word.showAnswer = 0;finishedQuiz = finishedQuiz - 1;\" *ngIf=\"word.showAnswer\" class=\"capitalize name\"><b>{{word.name}}</b></p>\r\n\r\n                <span class=\"pan-icon edit-icon\" [@listIconState]=\"helperService.listIconState.edit[word.$key]\" [style.left]=\"helperService.pan.iconPosition[word.$key]\" [style.width]=\"helperService.pan.iconWidth[word.$key]\">\r\n                    <md-icon>edit</md-icon>\r\n                </span>\r\n                <span class=\"pan-icon listen-icon\" [@listIconState]=\"helperService.listIconState.delete[word.$key]\" [style.right]=\"helperService.pan.iconPosition[word.$key]\" [style.width]=\"helperService.pan.iconWidth[word.$key]\">\r\n                    <md-icon>volume_up</md-icon>\r\n                </span>\r\n            </md-list-item>\r\n        </div>\r\n        <p *ngIf=\"quizWordsLength == 0\" class=\"no-record\">No record found</p>\r\n    </md-list>\r\n    <button *ngIf=\"quizeSet > 0\" md-fab class=\"left-fixed-fab\" (click)=\"getQuizWords('prev')\"><md-icon>arrow_back</md-icon></button>\r\n    <button *ngIf=\"!quizeSetFinished\" md-fab class=\"fixed-fab\" (click)=\"getQuizWords()\"><md-icon>arrow_forward</md-icon></button>\r\n</md-card>\r\n"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"form-card\">\r\n    <form (submit)=\"login()\">\r\n        <md-card-content>\r\n            <md-input-container>\r\n                <input mdInput type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n            </md-input-container>\r\n            <md-input-container>\r\n                <input mdInput type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\r\n            </md-input-container>\r\n        </md-card-content>\r\n        <md-card-actions>\r\n            <button md-raised-button color=\"accent\">Submit</button>\r\n            <button md-raised-button color=\"accent\" type=\"button\" (click)=\"googleLogin()\">Log in with Google</button>\r\n        </md-card-actions>\r\n    </form>\r\n</md-card>"

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"!isDialog\" class=\"form-card\">\r\n    <form (submit)=\"addWord()\" autocomplete=\"off\">\r\n        <md-card-content>\r\n            <md-select placeholder=\"Category\" [(ngModel)]=\"newWord.category\" name=\"category\" required>\r\n                <md-option *ngFor=\"let category of categories\" [value]=\"category.$key\">{{category.name}}</md-option>\r\n            </md-select>\r\n            <md-input-container>\r\n                <input mdInput type=\"text\" [(ngModel)]=\"newWord.name\" name=\"name\" placeholder=\"Word\" required>\r\n            </md-input-container>\r\n            <md-input-container>\r\n                <input mdInput type=\"text\" [(ngModel)]=\"newWord.definition\" name=\"definition\" placeholder=\"Definition\" required>\r\n            </md-input-container>\r\n        </md-card-content>\r\n        <md-card-actions>\r\n            <button md-raised-button color=\"accent\" [disabled]=\"helperService.submitDisabled == 1\">Submit</button>\r\n        </md-card-actions>\r\n    </form>\r\n</md-card>\r\n\r\n<form *ngIf=\"isDialog\" (submit)=\"addWord()\" autocomplete=\"off\" class=\"form-dialog\">\r\n    <md-dialog-content>\r\n        <md-select placeholder=\"Category\" [(ngModel)]=\"newWord.category\" name=\"category\" required>\r\n            <md-option *ngFor=\"let category of categories\" [value]=\"category.$key\">{{category.name}}</md-option>\r\n        </md-select>\r\n        <md-input-container>\r\n            <input mdInput type=\"text\" [(ngModel)]=\"newWord.name\" name=\"name\" placeholder=\"Word\" required>\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input mdInput type=\"text\" [(ngModel)]=\"newWord.definition\" name=\"definition\" placeholder=\"Definition\" required>\r\n        </md-input-container>\r\n    </md-dialog-content>\r\n    <md-dialog-actions>\r\n        <button md-raised-button md-dialog-close>Close</button>\r\n        <button md-raised-button color=\"accent\" [disabled]=\"helperService.submitDisabled == 1\">Submit</button>\r\n    </md-dialog-actions>\r\n</form>"

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"editWord(currentWord.id)\" autocomplete=\"off\" class=\"form-dialog\">\r\n    <md-dialog-content>\r\n        <md-select placeholder=\"Category\" [(ngModel)]=\"currentWord.category\" name=\"category\" required>\r\n            <md-option *ngFor=\"let category of categories\" [value]=\"category.$key\">{{category.name}}</md-option>\r\n        </md-select>\r\n        <md-input-container>\r\n            <input mdInput type=\"text\" [(ngModel)]=\"currentWord.name\" name=\"name\" placeholder=\"Word\" required>\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input mdInput type=\"text\" [(ngModel)]=\"currentWord.definition\" name=\"definition\" placeholder=\"Definition\" required>\r\n        </md-input-container>\r\n    </md-dialog-content>\r\n    <md-dialog-actions>\r\n        <button md-raised-button color=\"accent\" [disabled]=\"helperService.submitDisabled == 1\">Update</button>\r\n    </md-dialog-actions>\r\n</form>"

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<md-toolbar id=\"secondary-toolbar\">\r\n    <span class=\"fill-space\"></span>\r\n    <md-input-container [class.hide]=\"!showSearchBox\" floatPlaceholder=\"never\">\r\n        <input *ngIf=\"!filterByDefinition\" mdInput type=\"text\" [(ngModel)]=\"filterValue.name\" placeholder=\"Search word\" [focus]=\"true\" #focusElement>\r\n        <input *ngIf=\"filterByDefinition\" mdInput type=\"text\" [(ngModel)]=\"filterValue.definition\" placeholder=\"Search definition\" [focus]=\"true\" #focusElement>\r\n    </md-input-container>\r\n    <button *ngIf=\"!showSearchBox\" md-icon-button (click)=\"showSearchBox = 1;setFocus()\"><md-icon>search</md-icon></button>\r\n    <button *ngIf=\"showSearchBox\" md-icon-button (click)=\"showSearchBox = 0;filterValue.name=filterValue.definition=''\"><md-icon>close</md-icon></button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"topMenu\"><md-icon>more_vert</md-icon></button>\r\n    <md-menu #topMenu=\"mdMenu\">\r\n        <button md-menu-item (click)=\"getAllWords('created_on', 1)\">Recent</button>\r\n        <button md-menu-item (click)=\"getAllWords('created_on')\">Earlier</button>\r\n        <button md-menu-item (click)=\"getAllWords('name')\">Ascending</button>\r\n        <button md-menu-item (click)=\"getAllWords('name', 1)\">Descending</button>\r\n        <button *ngIf=\"filterByDefinition\" md-menu-item (click)=\"filterByDefinition = 0;filterValue.definition = '';\"><md-icon>search</md-icon>Word</button>\r\n        <button *ngIf=\"!filterByDefinition\" md-menu-item (click)=\"filterByDefinition = 1;filterValue.name = '';\"><md-icon>search</md-icon>Definition</button>\r\n        <button *ngIf=\"!helperService.panDeleteEnabled\" md-menu-item (click)=\"helperService.panDeleteEnabled = 1\"><md-icon>delete</md-icon>Enable</button>\r\n        <button *ngIf=\"helperService.panDeleteEnabled\" md-menu-item (click)=\"helperService.panDeleteEnabled = 0\"><md-icon>delete_forever</md-icon>Disable</button>\r\n        <button *ngIf=\"!isSpeechOn\" md-menu-item (click)=\"isSpeechOn = 1\"><md-icon>volume_off</md-icon>OFF</button>\r\n        <button *ngIf=\"isSpeechOn\" md-menu-item (click)=\"isSpeechOn = 0\"><md-icon>volume_up</md-icon>ON</button>\r\n    </md-menu>\r\n</md-toolbar>\r\n<md-card class=\"main-card list-card\">\r\n    <div class=\"spinner-container\"><md-spinner *ngIf=\"!hideSpinner\" color=\"accent\"></md-spinner></div>\r\n    <md-list>\r\n        <md-list-item id=\"{{word.name | slice:0:1}}\" *ngFor=\"let word of words | async | filterBy: filterValue\" [@listState]=\"helperService.animationState[word.$key]\" (pan)=\"helperService.onPan($event, word.$key)\" (panend)=\"onPanEnd($event, word.$key)\" [style.left]=\"helperService.pan.left[word.$key]\">\r\n            <p md-line class=\"capitalize\" (tap)=\"listen(word.name)\"><b>{{word.name}}</b></p>\r\n            <p md-line class=\"definition\" (tap)=\"listen(word.name)\">{{word.definition}}</p>\r\n            <span class=\"pan-icon edit-icon\" [@listIconState]=\"helperService.listIconState.edit[word.$key]\" [style.left]=\"helperService.pan.iconPosition[word.$key]\" [style.width]=\"helperService.pan.iconWidth[word.$key]\">\r\n                <md-icon>edit</md-icon>\r\n            </span>\r\n            <span class=\"pan-icon delete-icon\" [@listIconState]=\"helperService.listIconState.delete[word.$key]\" [style.right]=\"helperService.pan.iconPosition[word.$key]\" [style.width]=\"helperService.pan.iconWidth[word.$key]\">\r\n                <md-icon>delete</md-icon>\r\n            </span>\r\n        </md-list-item>\r\n        <p *ngIf=\"dataLength == 0\" class=\"no-record\">No record found</p>\r\n    </md-list>\r\n</md-card>\r\n<button md-fab class=\"fixed-fab\" [@snackbarState]=\"helperService.snackbarState\" (click)=\"add()\" (panleft)=\"helperService.scrollContent()\">{{dataLength}}</button>\r\n\r\n<div class=\"alphabet-scroll\" *ngIf=\"dataLength > 0\">\r\n    <span class=\"alphabet active\" (click)=\"scrollToAlphabet('top')\" (mouseenter)=\"helperService.alphabetsHover['top'] = 1\" (mouseleave)=\"helperService.alphabetsHover['top'] = 0\" (tap)=\"helperService.onAlphabetsHover('top')\">\r\n        <md-icon>arrow_upward</md-icon>\r\n        <span class=\"tooltip\" *ngIf=\"helperService.alphabetsHover['top']\"><md-icon>arrow_upward</md-icon></span>\r\n    </span>\r\n    <span *ngFor=\"let alphabet of helperService.alphabets; let i = index\" class=\"alphabet\" [class.active]=\"helperService.alphabetsEnabled[alphabet|lowercase]\" (click)=\"scrollToAlphabet(alphabet)\" (mouseenter)=\"helperService.alphabetsHover[i] = 1\"  (mouseleave)=\"helperService.alphabetsHover[i] = 0\" (tap)=\"helperService.onAlphabetsHover(i)\">\r\n        <span class=\"tooltip\" *ngIf=\"helperService.alphabetsHover[i]\">{{alphabet}}</span>\r\n        {{alphabet}}\r\n    </span>\r\n    <span class=\"alphabet active\" (click)=\"scrollToAlphabet('bottom')\" (mouseenter)=\"helperService.alphabetsHover['bottom'] = 1\" (mouseleave)=\"helperService.alphabetsHover['bottom'] = 0\" (tap)=\"helperService.onAlphabetsHover('bottom')\">\r\n        <md-icon>arrow_downward</md-icon>\r\n         <span class=\"tooltip\" *ngIf=\"helperService.alphabetsHover['bottom']\"><md-icon>arrow_downward</md-icon></span>\r\n    </span>\r\n</div>"

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(281);


/***/ })

},[671]);
//# sourceMappingURL=main.bundle.js.map