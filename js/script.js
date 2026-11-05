function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let demo = document.getElementById("demo");
  demo.innerHTML="";

  let n = document.getElementById("qty").value;

  let titre = document.getElementById("titre").value;
  let texte = document.getElementById("contenu").value;
  for(let i = 0; i < n; i++){

    let h = document.createElement("h2");

    h.textContent =  titre + " " + i;
    let p = document.createElement("p")
    p.textContent =  texte + " " + i;

    demo.appendChild(h);
    demo.appendChild(p);
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}