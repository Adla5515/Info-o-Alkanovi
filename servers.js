function ovladacsekce(){
    const obrazeksekce = document.getElementById("logo")
    const sekce = document.getElementById("platno-sekce");

    sekce.addEventListener("mouseover",function(){
        obrazeksekce.style.borderColor = "red";
     
    });
    sekce.addEventListener("mouseleave",function(){
        obrazeksekce.style.borderColor = "white";
    });

    
}

ovladacsekce();




function vypisdatum(){
  const datum = new Date ();
const den = datum.getDay();
const měsíc = datum.getMonth() +1; //tohle měsíc
const rok = datum.getFullYear(); //rok
const zobrazdatum = `${den}/${měsíc}/${rok}`;

const casovíelement = document.getElementById("cas");
casovíelement.innerHTML = zobrazdatum;  
}
vypisdatum();


const nadpis = document.getElementsByTagName("h1") [0];
nadpis.addEventListener("click",(e) => {
  e.target.innerHTML = "jméno:David Gärtner, narozen:17/4/1997, prítelkině:Karolína Minksová ,počet odběrů:379 000, bydliště:neznámé, rodiče:neznámí. Je prosnulí hraním FORTNITE na různích platformách např. twitch nebo youtube.";
}
)
  


