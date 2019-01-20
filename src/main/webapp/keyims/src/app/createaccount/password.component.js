"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var zxcvbn = require("zxcvbn");
var PasswordComponent = /** @class */ (function () {
    // private currentPassScore : number;
    function PasswordComponent() {
    }
    PasswordComponent.prototype.ngOnInit = function () {
        // this.currentPassScore = 0;
        this.passwordDOM = document.getElementById('passwordfield');
        // todo change to whatever passwordfield is
        console.log("init of pw checker");
    };
    PasswordComponent.prototype.addEvent = function () {
        this.passwordDOM.addEventListener('onchange', this.checkPassword);
        console.log("added event listener to pw");
    };
    PasswordComponent.prototype.checkPassword = function () {
        var currentPass = this.passwordDOM.innerHTML;
        if (currentPass.length >= 8) {
            var result = zxcvbn(currentPass).score;
            console.log("pw score: " + result);
            // this.currentPassScore = result;
            return result;
        }
        return 0;
    };
    PasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-pass',
            templateUrl: './password.component.html'
        })
    ], PasswordComponent);
    return PasswordComponent;
}());
exports.PasswordComponent = PasswordComponent;
