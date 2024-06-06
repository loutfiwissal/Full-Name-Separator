function separe (){
    var nomcomplet = document.getElementById('name').value;
    var espace = nomcomplet.indexOf(" ")
    
    var nom = nomcomplet.slice(0,espace);
    var prenom = nomcomplet.slice(espace);
    document.write("Nom :",nom,"<br>");
    document.write("Prenom :",prenom);
}