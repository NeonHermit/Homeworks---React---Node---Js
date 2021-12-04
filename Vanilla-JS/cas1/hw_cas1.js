//Pozitiven negativen ili nula
let number = prompt("Vnesi nekoj broj: ");

if (number > 0) {
    alert("Mnogu si pozitiven");
}

else if (number == 0) {
    alert("Jao nula");
}

else if (number < 0) {
    alert("Mnogu si negativen");
}

else {
    alert("Ne znam sto se toa bukvi jas");
}

//Maksimum od dva broja cii vrednosti se vnesuvaat od tastatura
let vrednostA = parseInt (prompt("Vnesi vrednost A: "));
let vrednostB = parseInt (prompt("Vnesi vrednost B: "));

if (vrednostA > vrednostB) {
    alert(Number(vrednostA));
} 

else if (vrednostA == vrednostB) {
    alert("Zamisli isti se");
}

else {
    alert(Number(vrednostB));
}

//Prestapna godina -- -- Ova neli e popametno so funkcija da se napravi? -- Valjda moze i vo eden red ova
let leapYear = prompt("Vnesi godina: ");

if (leapYear %4 !== 0) {
    alert("Ne e prestapna");
}

else if (leapYear %100 !==0 || leapYear %400 == 0) {
    alert("Prestapna");
}

else {
    alert("Ne e prestapna");
}

//Cartesian координати кошмари --- ---
let x = parseInt (prompt("Vnesi vrednost za x"));
let y = parseInt (prompt("Vnesi vrednost za y"));

if(x > 0 && y > 0) {
    alert("Koordinatnata tocka lezi vo prviot kvadrant");
}
else if (x < 0 && y > 0) {
    alert("Koordinatnata tocka lezi vo vtoriot kvadrant");
}

else if (x < 0 && y < 0) {
    alert("Koordinatnata tocka lezi vo tretiot kvadrant");
}

else if (x > 0 && y < 0) {
    alert("Koordinatnata tocka lezi vo cetvrtiot kvadrant");
}

else if (x == 0 && y == 0) {
    alert("Koordinaten pocetok");
}

else {
    alert("Haha nesto tamu");
}

//Minimalen Kalkulator
let denum1 = parseInt (prompt("Vnesi prv broj"));
let operator = prompt("Odberi operator: +, -, *, /: ");
let denum2 = parseInt (prompt("Vnesi vtor broj"));

if (operator == "+") {
    alert(denum1 + denum2);
}

else if (operator == "-") {
    alert(denum1 - denum2);
}

else if (operator == "*") {
    alert(denum1 * denum2);
}

else if (operator == "/") {
    alert(denum1 / denum2);
}