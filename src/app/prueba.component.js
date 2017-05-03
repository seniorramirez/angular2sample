"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prueba_service_1 = require("./prueba.service");
var PruebaComponent = (function () {
    function PruebaComponent(pruebaService) {
        this.pruebaService = pruebaService;
        this.ARRPRUEBA = [];
    }
    PruebaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pruebaService.getPrueba()
            .then(function (arrprueba) { return _this.ARRPRUEBA = arrprueba; });
    };
    return PruebaComponent;
}());
PruebaComponent = __decorate([
    core_1.Component({
        selector: 'my-prueba',
        templateUrl: './prueba.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [prueba_service_1.PruebaService])
], PruebaComponent);
exports.PruebaComponent = PruebaComponent;
//# sourceMappingURL=prueba.component.js.map