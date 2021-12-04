//Triagolnici
let a = parseFloat(prompt("Vnesi vrednost za strana a:"));
let b = parseFloat(prompt("Vnesi vrednost za strana b:"));
let c = parseFloat(prompt("Vnesi vrednost za strana c:"));
let Plostina = 0.25 * Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b -c));

if ((a + b > c) && (b + c > a) && (a + c > b)) {
    if (a == b && b == c) {
        console.log("Triagolnikot e pravoagolen, a negovata plostina iznesuva: ", Plostina);
    }

    else {
        console.log("Triagolnikot ne e pravoagolen, a negovata plostina iznesuva: ", Plostina);
    }
} else {
    alert("Triagolnikot ne moze da se izvede");
}

//y = x^n ---- Zasto da ne se koristi ** ? --- Resena na cas
let x = Number(prompt("Vnesi go x:"));
let y = 1;
let n = Number(prompt("Vnesi go n:"));
let i = 0;

while(i<n); {
    y *= x;
    i ++;
}
console.log(y);

//Presmetuvanje suma na site parni dvocifreni broevi -- l = a + (n - 1)d
let i = 10;
let suma = 0;

while (i <= 98) {
    suma = suma + i;
    i += 2;
}
console.log(suma);

//Да се напише програма коjа од непознат броj на цели броеви кои се внесуваат од тастатура ´ке ги определи двата броjа со наjголеми вредности. Програмата завршува ако наместо броj се внесе знак што не е цифра -- Resena na cas

let karakter = prompt("Vnesi broj");
let niza = [];
if(isNaN(karakter)) {
    console.log("Vnese karakter koj ne e broj");
}

else {
    while(!isNaN(karakter)){
        niza.push(karakter);
        karakter = prompt ("Vnesi broj");
    }
}
niza.sort()
console.log(niza[niza.length-1]+" "+niza[niza.length-2]);