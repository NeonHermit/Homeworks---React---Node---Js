class Vraboten {
    constructor(ime, prezime, plata, pozicija) {
        this.ime = ime;
        this.prezime = prezime;
        this.plata = plata;
        this.pozicija = pozicija;
    }
    pecatiVraboten() {
        console.log(this.ime + " " + this.prezime + " " + this.pozicija);
    }
}

let brojVraboteni = Number(prompt("kolku vraboteni"));

let vraboteni = [];
for (let i = 0; i < brojVraboteni; i++) {
    let ime = prompt("Vnesi ime");
    let prezime = prompt("prezime");
    let pozicija = prompt("pozicija");
    let plata = Number(prompt("plata"));
    let user = new Vraboten(ime, prezime, plata, pozicija);
    vraboteni.push(user);
}

for(vraboten of vraboteni) {
    vraboten.toString();
}