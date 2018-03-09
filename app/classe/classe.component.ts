import { Component } from "@angular/core";
@Component({
    moduleId:module.id,
    selector:'classe',
    templateUrl:'classe.component.html'
})
export class ClasseComponent{
    classe="4CinfoGL";
    etudiants:string[]=["Kallali ali","klai moez","klai sawssen","klai sonia"];
    etat=true;
    onClick(){
        this.etat=!this.etat;
       console.log("Button was clicked.");}
       ajouterEtudiant(valeur)
       {
           this.etudiants.push(valeur.value);
           valeur.value=null;
           console.log("ajout yser");
       }
    
}