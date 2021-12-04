//Faktoriel na broj

let broj = parseInt(prompt("Vnesi broj"));
let odgovor = faktoriel(broj);
console.log("Faktoriel od " + broj + " e " + odgovor);

function faktoriel(broj) {
    if (broj < 0) {
        alert("Greska");
    }

    else if(broj === 0) {
        return 1;
    }

    else {
        return broj * faktoriel(broj-1);
    }
}

// function faktoriel(broj) {
//     if (broj == 0) {
//         return 1;
//     }
//     for(var i = broj - 1; i >=1; i--) {
//         broj *= 1;
//     }
//     return broj;
// }

// function faktoriel(broj) {
//     return broj ? broj * faktoriel(broj - 1) : 1;
// }


//Kolicnik
let broj1 = parseInt(prompt("Vnesi broj 1"));
let broj2 = parseInt(prompt("Vnesi broj 2"));
let resenie = kolicnik(broj1, broj2);

function kolicnik(broj1, broj2) {
    if (broj2 === 0 || isNaN(broj2)) {
        alert("Error");
        return -1;
    }
    else {
        return broj1 / broj2;
    }
}

console.log(`Kolicnikot od ${broj1} i ${broj2} e ` + resenie);

//Kreiraj lista
let sizici = [
    "Hilbert",
    ["epsilon"], 
    "Church",
    ["lambda"],
    "Russel",
    ["iota"]
    ];

    function niza(arr) {
        let ul = document.createElement("ul"), li;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                li.appendChild(niza(arr[i]));
            } else {
                li = document.createElement("li");
                li.appendChild(document.createTextNode(arr[i]));
                ul.appendChild(li);
            }
        }
        return ul;
    }

    document.body.appendChild(niza(sizici));