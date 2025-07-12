function help(){
    let nom =document.getElementById("no").value 
    if (nom.length==0 || !alpha(nom)) {
        alert("nom invalide")
        return false
    }
    let pre=document.getElementById("pre").value
    if (pre.length==0 || !alpha(pre)) {
        alert("champ prenom !!!")
        return false
    }
    let adr=document.getElementById("ad").value
    if (adr.length<6 || adr.length>50) {
        alert("verifier votre adresse")
        return false
    }
    let type=document.getElementById("s").value
    if (type=="") {
        alert("type d'aide obligatoire")
        return false
    }
    let num=document.getElementById("tel").value
    if (num.length!=8 || !chiffre(num)) {
        alert("erreur de numero")
        return false
    }
    let d=new Date()
    let m=d.getMonth()+1
    let da=d.getDate()+10
    let yea=d.getFullYear()
    let affichage=String(yea)+"/"+String(m)+"/"+String(da)
    alert("en"+affichage+"Notre équipe se déplacera chez vous pour vous apporter l'assistance que vous nous avez fournie et Merci")
    return true
}



function alpha(ch){
    ch=ch.toUpperCase()
    for( let i=0 ; i<ch.length ; i++){
        if (ch[i]<"A" || ch[i]>"Z") {
            return false
        }
    }
    return true
}

function chiffre(chaine){
    chaine=chaine.toUpperCase()
    for(let j=0; j<chaine.length ; j++){
        if (chaine[j]<"0" || chaine[j]>"9") {
            return false
        }
    }
    return true
}