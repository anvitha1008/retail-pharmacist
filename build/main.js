webpackJsonp([0],{

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kineticCalcuPage_kineticCalcuPage__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__albumCalcuPage_albumCalcuPage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bmiCalcuPage_bmiCalcuPage__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pediatricCalcuPage_pediatricCalcuPage__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
    }
    HelloIonicPage.prototype.albumPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__albumCalcuPage_albumCalcuPage__["a" /* albumCalcuPage */]);
    };
    HelloIonicPage.prototype.kineticsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kineticCalcuPage_kineticCalcuPage__["a" /* kineticCalcuPage */]);
    };
    HelloIonicPage.prototype.pediatricPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pediatricCalcuPage_pediatricCalcuPage__["a" /* pediatricCalcuPage */]);
    };
    HelloIonicPage.prototype.bmiPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bmiCalcuPage_bmiCalcuPage__["a" /* bmiCalcuPage */]);
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Retail Pharmacist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  class= "background" padding >\n\n  <p> <button ion-button block color="secondary" (click)="kineticsPage()"> Pharmokinetics </button> </p>\n\n  <p> <button ion-button block color="danger" (click)="pediatricPage()"> Pediatric Dosage </button> </p>\n\n  <p> <button ion-button block (click)="bmiPage()"> BMI </button> </p>\n\n</ion-content>\n\n\n<p> <button ion-button color="primary" menuToggle >Toggle Menu</button> </p>\n'/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return kineticCalcuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var kineticCalcuPage = /** @class */ (function () {
    function kineticCalcuPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    kineticCalcuPage.prototype.calculation1 = function (f) {
        this.a = f.controls['a'].value;
        this.b = f.controls['b'].value;
        this.c = f.controls['c'].value;
        this.d = f.controls['d'].value;
        this.result = (this.a / this.b) * (this.c / this.d) * 100;
        console.log(this.result);
        this.showAlert();
    };
    kineticCalcuPage.prototype.calculation2 = function (f) {
        this.x = f.controls['x'].value;
        this.y = f.controls['y'].value;
        this.result = (this.x / this.y);
        console.log(this.result);
        this.showAlert();
    };
    kineticCalcuPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'your Answer!',
            subTitle: this.result,
            buttons: ['OK']
        });
        alert.present();
    };
    kineticCalcuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kineticCalcuPage',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\kineticCalcuPage\kineticCalcuPage.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button menuToggle *ngIf="!selectedItem">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Pharmokinetics Calculations</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content padding class="style">\n\n        <div class="style1">\n\n                <h3> Bio availability (F) :</h3>\n\n                <form #f1 = "ngForm" (ngSubmit)="calculation1(f1)">\n\n                    <ion-item>\n\n                        <ion-label floating>AUC<sub>EV</sub> = </ion-label>\n\n                        <ion-input type="number" [(ngModel)]="a" name="a" required></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating> AUC<sub>IV</sub> = </ion-label>\n\n                        <ion-input type="number" [(ngModel)]="b" name="b"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating> Dose<sub>IV</sub> = </ion-label>\n\n                        <ion-input type="number" [(ngModel)]="c" name="c"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating> Dose<sub>EV</sub> = </ion-label>\n\n                        <ion-input type="number" [(ngModel)]="d" name="d"></ion-input>\n\n                    </ion-item>\n\n                    <button ion-button type="submit" block>result</button>\n\n                </form>\n\n            </div>\n\n    <div class="style1">\n\n        <h3> Dose of new dosage form:</h3>\n\n        <form #f2 = "ngForm" (ngSubmit)="calculation2(f2)">\n\n            <ion-item>\n\n                <ion-label floating>Amount of drug absorbed from current dosage form = </ion-label>\n\n                <ion-input type="number" [(ngModel)]="x" name="x"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>F of new dosage form =</ion-label>\n\n                <ion-input type="number" [(ngModel)]="y" name="y"></ion-input>\n\n            </ion-item>\n\n            <button ion-button type="submit" block>result</button>\n\n        </form>\n\n    </div>\n\n </ion-content>\n\n            \n\n'/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\kineticCalcuPage\kineticCalcuPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], kineticCalcuPage);
    return kineticCalcuPage;
}());

//# sourceMappingURL=kineticCalcuPage.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return albumCalcuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var albumCalcuPage = /** @class */ (function () {
    function albumCalcuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        console.log(this.selectedItem);
    }
    albumCalcuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-albumCalcuPage',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\albumCalcuPage\albumCalcuPage.html"*/''/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\albumCalcuPage\albumCalcuPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], albumCalcuPage);
    return albumCalcuPage;
}());

//# sourceMappingURL=albumCalcuPage.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bmiCalcuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var bmiCalcuPage = /** @class */ (function () {
    function bmiCalcuPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    bmiCalcuPage.prototype.bmi = function (f) {
        this.weight = f.controls['weight'].value;
        this.weight1 = f.controls['weight1'].value;
        this.feet = f.controls['feet'].value;
        this.inch = f.controls['inch'].value;
        this.meters = (this.feet * 0.3048) + (this.inch * 0.0254);
        this.inches = (this.feet * 12) + (this.inch * 1);
        console.log(this.meters);
        console.log(this.inches);
        if (this.weight1 == "kg") {
            this.result = (this.weight) / (this.meters * this.meters);
        }
        else if (this.weight1 == "lb") {
            this.result = (this.weight * 703) / (this.inches * this.inches);
        }
        console.log(Math.round(this.result));
        if (this.result < 18) {
            var alert_1 = this.alertCtrl.create({
                title: 'You are Underweight',
                subTitle: 'your BMI: ' + Math.round(this.result),
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if ((this.result > 18) && (this.result < 25)) {
            var alert_2 = this.alertCtrl.create({
                title: 'Your wieght is Normal',
                subTitle: 'your BMI: ' + Math.round(this.result),
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if ((this.result > 25) && (this.result < 30)) {
            var alert_3 = this.alertCtrl.create({
                title: 'You are overweight',
                subTitle: 'your BMI: ' + Math.round(this.result),
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if ((this.result > 30) && (this.result < 35)) {
            var alert_4 = this.alertCtrl.create({
                title: 'You have Class-1 obesity ',
                subTitle: 'your BMI: ' + Math.round(this.result),
                buttons: ['OK']
            });
            alert_4.present();
        }
        else if ((this.result > 35) && (this.result < 40)) {
            var alert_5 = this.alertCtrl.create({
                title: 'You have Class-2 obesity ',
                subTitle: 'your BMI: ' + this.result,
                buttons: ['OK']
            });
            alert_5.present();
        }
        else if ((this.result > 35) && (this.result < 40)) {
            var alert_6 = this.alertCtrl.create({
                title: 'You have Class-3 obesity ',
                subTitle: 'your BMI: ' + Math.round(this.result),
                buttons: ['OK']
            });
            alert_6.present();
        }
        else if (this.result > 40) {
            var alert_7 = this.alertCtrl.create({
                title: 'You have entered wrong values ',
                subTitle: 'your BMI: ' + Math.round(this.result),
                buttons: ['OK']
            });
            alert_7.present();
        }
    };
    bmiCalcuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bmiCalcuPage',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\bmiCalcuPage\bmiCalcuPage.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <button menuToggle *ngIf="!selectedItem">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>BMI Calculations</ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n    \n\n                \n\n    <ion-content padding="">\n\n      <form #form="ngForm" (ngSubmit)="bmi(form)">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-2 align-self-center>\n\n              \n\n                  <h4> Weight: </h4>\n\n              \n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                  <ion-input placeholder="Enter your weight" type="number" [(ngModel)]="weight" name="weight"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-3 align-self-center>\n\n              <ion-item>\n\n                  <ion-select placeholder="Kg" interface="popover" [(ngModel)]="weight1" name="weight1" required>\n\n                      <ion-option value = "kg"> Kg </ion-option>\n\n                      <ion-option value ="lb"> Lbs </ion-option>\n\n                    </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-2 align-self-center>\n\n                <h4> Height: </h4>\n\n            </ion-col>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-select placeholder="feet" interface="popover" [(ngModel)]="feet" name="feet" required>\n\n                  <ion-option value ="3"> 3\' </ion-option>\n\n                  <ion-option value ="4"> 4\' </ion-option>\n\n                  <ion-option value ="5"> 5\' </ion-option>\n\n                  <ion-option value ="6"> 6\' </ion-option>\n\n                  <ion-option value ="7"> 7\' </ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-item>\n\n                  <ion-select placeholder="inch" interface="popover" [(ngModel)]="inch" name="inch" required>\n\n                    <ion-option value ="1"> 1\'\' </ion-option>\n\n                    <ion-option value ="2"> 2\'\' </ion-option>\n\n                    <ion-option value ="3"> 3\'\' </ion-option>\n\n                    <ion-option value ="4"> 4\'\' </ion-option>\n\n                    <ion-option value ="5"> 5\'\' </ion-option>\n\n                    <ion-option value ="6"> 6\'\' </ion-option>\n\n                    <ion-option value ="7"> 7\'\' </ion-option>\n\n                    <ion-option value ="8"> 8\'\' </ion-option>\n\n                    <ion-option value ="9"> 9\'\' </ion-option>\n\n                    <ion-option value ="10"> 10\'\' </ion-option>\n\n                    <ion-option value ="11"> 11\'\' </ion-option>\n\n                    <ion-option value ="12"> 12\'\' </ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n              </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button [disabled]="!form.form.valid" type="submit"> Submit </button>\n\n      </form>\n\n    </ion-content>'/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\bmiCalcuPage\bmiCalcuPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], bmiCalcuPage);
    return bmiCalcuPage;
}());

//# sourceMappingURL=bmiCalcuPage.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pediatricCalcuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pediatricCalcuPage = /** @class */ (function () {
    function pediatricCalcuPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    pediatricCalcuPage.prototype.calculation1 = function (f) {
        this.a = f.controls['a'].value;
        this.b = f.controls['b'].value;
        this.result = (this.a / ((this.a * 1) + 12)) * this.b;
        console.log(this.result);
        this.showAlert();
    };
    pediatricCalcuPage.prototype.calculation2 = function (f) {
        this.x = f.controls['x'].value;
        this.y = f.controls['y'].value;
        this.result = (this.x / 150) * this.y;
        console.log(this.result);
        this.showAlert();
    };
    pediatricCalcuPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Dosage for the kid is',
            subTitle: this.result,
            buttons: ['OK']
        });
        alert.present();
    };
    pediatricCalcuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pediatricCalcuPage',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\pediatricCalcuPage\pediatricCalcuPage.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <button menuToggle *ngIf="!selectedItem">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>Pediatric Dosage Calculations</ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n    \n\n      <ion-content padding>\n\n            <div class="style1">\n\n                    <h3> Young\'s Formula </h3>\n\n                    <form #f1 = "ngForm" (ngSubmit)="calculation1(f1)">\n\n                        <ion-item>\n\n                            <ion-label floating> Enter the dosage for adults: </ion-label>\n\n                            <ion-input type="number" [(ngModel)]="a" name="a" required></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-label floating> Enter the age of the child </ion-label>\n\n                            <ion-input type="number" [(ngModel)]="b" name="b"></ion-input>\n\n                        </ion-item>\n\n                        <button ion-button type="submit" block>result</button>\n\n                    </form>\n\n                </div>\n\n        <div class="style1">\n\n            <h3> Clark\'s rule: </h3>\n\n            <form #f2 = "ngForm" (ngSubmit)="calculation2(f2)">\n\n                <ion-item>\n\n                    <ion-label floating>Enter the dosage for adults: </ion-label>\n\n                    <ion-input type="number" [(ngModel)]="x" name="x"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>Weight of the child in lbs:</ion-label>\n\n                    <ion-input type="number" [(ngModel)]="y" name="y"></ion-input>\n\n                </ion-item>\n\n                <button ion-button type="submit" block>result</button>\n\n            </form>\n\n        </div>\n\n     </ion-content>\n\n                \n\n    '/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\pediatricCalcuPage\pediatricCalcuPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], pediatricCalcuPage);
    return pediatricCalcuPage;
}());

//# sourceMappingURL=pediatricCalcuPage.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_details_item_details__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchQuery = '';
        /* this.guidelines = db.object('/guidelines');*/
        this.initialItems();
    }
    ListPage.prototype.initialItems = function () {
        this.items = [
            {
                'title': 'Cardiology',
                'icon': 'heart',
                'description': 'http://www.acc.org/guidelines#doctype=Guidelines',
                'color': '#E63135'
            },
            {
                'title': 'Renal Disease',
                'icon': 'leaf',
                'description': 'http://www.kdigo.org/clinical_practice_guidelines/pdf/CKD/KDIGO_2012_CKD_GL.pdf',
                'color': '#0CA9EA'
            },
            {
                'title': 'Pain',
                'icon': 'walk',
                'description': 'https://www.cdc.gov/drugoverdose/prescribing/guideline.html',
                'color': '#F46529'
            },
            {
                'title': 'Bipolar Disorder',
                'icon': 'man',
                'description': 'https://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/bipolar.pdf',
                'color': '#FFD439'
            },
            {
                'title': 'Huamn Immunodeficiency virus',
                'icon': 'man',
                'description': 'https://aidsinfo.nih.gov/contentfiles/lvguidelines/adultandadolescentgl.pdf',
                'color': '#CE6296'
            },
            {
                'title': 'Diabetes',
                'icon': 'color-filter',
                'description': 'https://diabetesed.net/wp-content/uploads/2017/12/2018-ADA-Standards-of-Care.pdf',
                'color': '#78BD43'
            },
        ];
    };
    ListPage.prototype.openNavDetailsPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_details_item_details__["a" /* ItemDetailsPage */], { item: item });
        console.log(this.items);
    };
    ListPage.prototype.getItems = function (ev) {
        this.initialItems();
        var val = ev.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Guidelines</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list >\n    <button style="background-color:rgba(200,200,200,0.7)" ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>\n      <ion-icon [name]="item.icon" [ngStyle]="{\'color\': item.color}" item-start></ion-icon>\n      {{ item.title }}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        console.log(this.selectedItem);
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n      <ion-icon [name]="selectedItem.icon" [ngStyle]="{\'color\': selectedItem.color}"></ion-icon> {{selectedItem.title}}\n  </h3>\n  <h5 style="background-color:rgba(200,200,200,0.7)" *ngIf="selectedItem">\n      <a href ="{{selectedItem.description}}"> {{selectedItem.description}} </a>\n  </h5>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return procedures; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drypowder_drypowder__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metered_dose_metered_dose__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var procedures = /** @class */ (function () {
    function procedures(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
    }
    procedures.prototype.clickedDry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__drypowder_drypowder__["a" /* drypowder */]);
    };
    procedures.prototype.clickedMetered = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__metered_dose_metered_dose__["a" /* meteredDose */]);
    };
    procedures = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-procedures',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\procedures\procedures.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title> Inhaler Techniques </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n    <ion-content class="style">\n\n        <h3> Astama Inhalers:</h3>\n\n        <ion-item-group>\n\n          <ion-item-divider style="font-size: 20px; color: red " color="light" on-tap="clickedDry()"> Dry Powder Inhalers </ion-item-divider>\n\n          <ion-item style="background-color:rgba(200,200,200,0.7)" on-tap="clickedDry()"> Advair Diskus </ion-item>\n\n        </ion-item-group>\n\n        <ion-item-group>\n\n          <ion-item-divider style="font-size: 20px; color:red " color="light" on-tap="clickedMetered()"> Metered-Dose Inhalers </ion-item-divider>\n\n          <ion-item style="background-color:rgba(200,200,200,0.7)" on-tap="clickedMetered()"> Ventolin, ProAir HFA,Proventill </ion-item>\n\n        </ion-item-group>\n\n\n\n    </ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\procedures\procedures.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], procedures);
    return procedures;
}());

//# sourceMappingURL=procedures.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drypowder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var drypowder = /** @class */ (function () {
    function drypowder() {
        this.steps = [];
        this.steps = [
            {
                'title': 'Step 1 ',
                'img': '/assets/imgs/Advair-Step-1.jpg',
                'description': 'Expose the mouthpiece.'
            },
            {
                'title': 'Step 2 ',
                'img': '/assets/imgs/Advair-Step-2.jpg',
                'description': 'Push the lever to prepare the dose.'
            },
            {
                'title': 'Step 3',
                'img': '/assets/imgs/Advair-Step-3.jpg',
                'description': 'Breathe out as much as you can'
            },
            {
                'title': 'Step 4',
                'img': '/assets/imgs/Advair-Step-4.jpg',
                'description': 'Inhale.'
            },
            {
                'title': 'Step 5',
                'img': '/assets/imgs/Advair-Step-5.jpg',
                'description': 'Hold it in.'
            },
            {
                'title': 'Step 6',
                'img': '/assets/imgs/Advair-Step-4.jpg',
                'description': 'Inhale.'
            },
            {
                'title': 'Step 7',
                'img': '/assets/imgs/Advair-Step-4.jpg',
                'description': 'Inhale.'
            }
        ];
    }
    drypowder = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-drypowder',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\drypowder\drypowder.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n          <ion-title> Dry Powder Inhalers Procedure/Techniques </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>  \n\n        <ion-list>\n\n            <ion-item *ngFor="let steps of steps"> <p style="color:blue"> {{steps.title}}  </p>\n\n                <ion-img style="float:left; width:100px; height:100px; margin-right:15px" src= {{steps.img}} > </ion-img>\n\n                {{ steps.description }}\n\n            </ion-item>\n\n        </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\drypowder\drypowder.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], drypowder);
    return drypowder;
}());

//# sourceMappingURL=drypowder.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meteredDose; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var meteredDose = /** @class */ (function () {
    function meteredDose() {
        this.steps = [];
        this.steps = [
            {
                'title': 'Step 1',
                'img': '/assets/imgs/Step-2.jpg',
                'description': 'Remove the cap and Inspect the inhaler.'
            },
            {
                'title': 'Step 2',
                'img': '/assets/imgs/Step-3.jpg',
                'description': 'Hold the inhaler upright and shake it 5-10 times.'
            },
            {
                'title': 'Step 3',
                'img': '/assets/imgs/Step-4.jpg',
                'description': 'Prepare your spacer if you’re using one.'
            },
            {
                'title': 'Step 4',
                'img': '/assets/imgs/Step-6.jpg',
                'description': 'Tilt your head back and Exhale slowly.'
            },
            {
                'title': 'Step 5',
                'img': '/assets/imgs/Step-8.jpg',
                'description': 'Place the inhaler or the inhaler with the spacer in your mouth. '
            },
            {
                'title': 'Step 6',
                'img': '/assets/imgs/Step-9.jpg',
                'description': 'Breathe in as you press down on the canister.'
            },
            {
                'title': 'Step 7',
                'img': '/assets/imgs/Step-10.jpg',
                'description': 'Hold your breath and count to 10.'
            },
        ];
    }
    meteredDose = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-metered-dose',template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\pages\metered-dose\metered-dose.html"*/'<ion-header>\n\n        <ion-navbar>\n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n              <ion-title> Metered-Dosa Inhalers Procedure/Techniques </ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n        \n\n       <ion-content>  \n\n                <ion-list>\n\n                    <ion-item *ngFor="let steps of steps"> <p style="color:blue"> {{steps.title}} </p>\n\n                        <ion-img style="float:left; width:100px; height:100px; margin-right:15px" src= {{steps.img}} > </ion-img>\n\n                        {{ steps.description }} \n\n                    </ion-item>    \n\n                </ion-list>\n\n        </ion-content>\n\n        '/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\pages\metered-dose\metered-dose.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], meteredDose);
    return meteredDose;
}());

//# sourceMappingURL=metered-dose.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_item_details_item_details__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_procedures_procedures__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_kineticCalcuPage_kineticCalcuPage__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_albumCalcuPage_albumCalcuPage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bmiCalcuPage_bmiCalcuPage__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pediatricCalcuPage_pediatricCalcuPage__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_drypowder_drypowder__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_metered_dose_metered_dose__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseConfig = {
    apiKey: "AIzaSyA0K0HOBus4myKddwgK9p0a3GAEos4EzNo",
    authDomain: "pharmacists-333bf.firebaseapp.com",
    databaseURL: "https://pharmacists-333bf.firebaseio.com",
    projectId: "pharmacists-333bf",
    storageBucket: "pharmacists-333bf.appspot.com",
    messagingSenderId: "994600173900"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kineticCalcuPage_kineticCalcuPage__["a" /* kineticCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_albumCalcuPage_albumCalcuPage__["a" /* albumCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bmiCalcuPage_bmiCalcuPage__["a" /* bmiCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kineticCalcuPage_kineticCalcuPage__["a" /* kineticCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pediatricCalcuPage_pediatricCalcuPage__["a" /* pediatricCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_procedures_procedures__["a" /* procedures */],
                __WEBPACK_IMPORTED_MODULE_16__pages_drypowder_drypowder__["a" /* drypowder */],
                __WEBPACK_IMPORTED_MODULE_17__pages_metered_dose_metered_dose__["a" /* meteredDose */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kineticCalcuPage_kineticCalcuPage__["a" /* kineticCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_albumCalcuPage_albumCalcuPage__["a" /* albumCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bmiCalcuPage_bmiCalcuPage__["a" /* bmiCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kineticCalcuPage_kineticCalcuPage__["a" /* kineticCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pediatricCalcuPage_pediatricCalcuPage__["a" /* pediatricCalcuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_procedures_procedures__["a" /* procedures */],
                __WEBPACK_IMPORTED_MODULE_16__pages_drypowder_drypowder__["a" /* drypowder */],
                __WEBPACK_IMPORTED_MODULE_17__pages_metered_dose_metered_dose__["a" /* meteredDose */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_procedures_procedures__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Calculations', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Guidelines', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Inhaler Techniques', component: __WEBPACK_IMPORTED_MODULE_4__pages_procedures_procedures__["a" /* procedures */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Anvitha\helloWorld\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class = "background">\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Anvitha\helloWorld\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map