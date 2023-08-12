var ar=document.getElementById("arabic");
var fr=document.getElementById("french");
var en=document.getElementById("english");
var nnn=document.getElementById("title");
var text=document.getElementById("text");
ar.addEventListener("click",()=>{
    said("arabic");
    localStorage.setItem("lang","arabic");
})

fr.addEventListener("click",()=>{
    said("frensh")
    localStorage.setItem("lang","frensh")
})

en.addEventListener("click",()=>{
    said("english")
    localStorage.setItem("lang","english")
})
onload=()=>{
    var lang=localStorage.getItem("lang")
    if(lang){
        said(lang)
    }
}
function said (langue){
    console.log(langue)
    if(langue === "arabic"){
        nnn.innerHTML="سعيد حليش";

    }else if(langue === "frensh"){
        nnn.innerHTML="Said Halliche";

    }else if ( langue=== "english"){
        nnn.innerHTML="Coder Said "
    }

}