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
var core_1 = require("@angular/core");
var ClasseComponent = (function () {
    function ClasseComponent() {
        this.classe = "4CinfoGL";
        this.etudiants = ["Kallali ali", "klai moez", "klai sawssen", "klai sonia"];
        this.etat = true;
    }
    ClasseComponent.prototype.onClick = function () {
        this.etat = !this.etat;
        console.log("Button was clicked.");
    };
    ClasseComponent.prototype.ajouterEtudiant = function (valeur) {
        this.etudiants.push(valeur.value);
        valeur.value = null;
        console.log("ajout yser");
    };
    ClasseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'classe',
            templateUrl: 'classe.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ClasseComponent);
    return ClasseComponent;
}());
exports.ClasseComponent = ClasseComponent;
//# sourceMappingURL=classe.component.js.map