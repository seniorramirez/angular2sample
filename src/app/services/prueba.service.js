"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PruebaService = (function () {
    function PruebaService() {
    }
    PruebaService.prototype.getPrueba = function () {
        var arrInteractue = [];
        var arrPromise = [];
        function processPromise(data) {
            console.info(data);
            return Promise.resolve(data);
        }
        for (var i = 0; i < 1000; i++) {
            arrPromise.push(this.setrow());
        }
        Promise.all(arrPromise).then(function (data) { return processPromise(data); });
    };
    PruebaService.prototype.setrow = function () {
        var objPush = {};
        var arrPromise = [];
        for (var j = 1; j < 11; j++) {
            var color = "";
            var name = "";
            if (Math.floor((Math.random() * 2)) == 1) {
                color = "primary";
            }
            else {
                color = "danger";
            }
            name = "Prueba" + j;
            arrPromise.push(this.getText(j));
        }
        function processPromise(data) {
            console.info(data);
            return;
            return Promise.resolve(data);
        }
        Promise.all(arrPromise).then(function (data) { return processPromise(data); });
    };
    PruebaService.prototype.getText = function (position) {
        var stringReturn;
        if (position == 1) {
            return Promise.resolve("primero");
        }
        if (position == 2) {
            return Promise.resolve("segundo");
        }
        if (position == 3) {
            return Promise.resolve("tercero");
        }
        if (position == 4) {
            return Promise.resolve("cuarto");
        }
        if (position == 5) {
            return Promise.resolve("quinto");
        }
        if (position == 6) {
            return Promise.resolve("sexto");
        }
        if (position == 7) {
            return Promise.resolve("septimo");
        }
        if (position == 8) {
            return Promise.resolve("octavo");
        }
        if (position == 9) {
            return Promise.resolve("noveno");
        }
        if (position == 10) {
            return Promise.resolve("decimo");
        }
    };
    return PruebaService;
}());
PruebaService = __decorate([
    core_1.Injectable()
], PruebaService);
exports.PruebaService = PruebaService;
//# sourceMappingURL=prueba.service.js.map