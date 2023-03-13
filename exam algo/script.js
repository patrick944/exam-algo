//exercice 1
// c = 24

//exercice 2
// c = "12312"

// exercice 3

// function utilisateurPht(){
//     let PHT = prompt('entrer le prix hors taxe du produit');
//     let ttc = PHT * 1.196;
//     alert(ttc);
// }
   

// let exercice3 = utilisateurPht()
    


// exercice 4
// function fullname(){
//     let prenom = prompt('Quel est votre prénom ?')
//     let nom = prompt('Quel est votre nom ?')
//     alert('Bonjour ' + prenom + ' votre nom est ' + nom);
// }

// let excercice4 = fullname()


/*exercice 5
function utilisateurNumber(A,B){
    let numberValue("Donner la valeur de A et B");
    if (A*B >= 0){
        return("le produit de ces 2 nombres est positif")
    }
    sinon 
    return("le produit de ces 2 nombres est négatif")
}

let exercice 5 = utilisateurNumber*/


// exercice 6 

/*function utilisateurAge(){
    let age = prompt('Quel age avez-vous ?')
    if(age < 13) {
        alert('Action Man');
    }
    else if(age >= 13 && age <= 18) {
        alert('Matrix')
    }
    else {
        alert('Evil Dead')
    }
}

let exercice6 = utilisateurAge()*/


/*exercice 7
function random(){
 let number = prompt('Entrer un nombre compris entre 0 et 10')
    console.log (Math.round(Math.random()*10)) ;
}

let exercice 7 = random()*/

/*exercice 8
function number(){
   let numberSelect = parseInt(prompt('Choisssez votre nombre.'))
   while(number !== 0){
    number--
    document.write(number + ', ')
   }
}*/

// exercice 10
function calculate(array){
    let sumarray = 0;
    for (let i = 0; i < chiffres.length; i++){
         sumarray += chiffres[i]
    
    }
      return sumarray;
}
console.log(calculate([1, 2, 3]))
// exercice 11
function notes(){
     let eleves = parseInt(prompt("Nombre d'eleves ?"));
     let moyenne = 0;
     let notes = [];
     for (let i = eleves; i > 0; i--){
        let note = parseInt(prompt("Note de l eleve"));
        notes.push(note);
     }
     alert(notes);
     
     for (let a = 0; a < notes.length; a++){
        moyenne = moyenne + notes[a]
     }
     alert(moyenne);
}
//   exercice 14
function compter(array){
    let array = array.split(' ');
    alert(array.length);
}












