//  --Map-- \\ 
// 1. -- 
const kolegium = [
    {
        ime: 'Kumanovce Seljance',
        zanimanje: 'stvor',
        hobi: 'seljance',
    },
    {
        ime: 'Proekt Menadzerce',
        zanimanje: 'dete',
        hobi: 'sostanocinja',
    },
    {
        ime: 'Direktorce',
        zanimanje: 'dzudze',
        hobi: 'aj ako ne te mrzi',
    },
    {
        ime: 'Gazdice',
        zanimanje: 'supak',
        hobi: 'ke pustime smooth jazz',
    },
];

const zaStrelanje = kolegium.map(
    (kolegi) => kolegi.ime
);

console.log(zaStrelanje);

// 2. --
const nizice = [2, 4, 6, 8, 10];

const duplirana = nizice.map(
    clen => clen * 2
);

console.log(duplirana);


// --Filter-- \\
// 1. --
const broevi = [12, 43, 22, 47, 99, 666];

const parni = broevi.filter(
    broj => broj % 2 == 0
);

console.log(parni);

// 2. --
const ucenici = [
    {
        ime: "Jonathan", ocena: 5
    },
    {
        ime: "Evjul", ocena: 2
    },
    {
        ime: "Mevljuda", ocena: 4
    },
    {
        ime: "Talijanka", ocena: 3
    }
];

const ocenki = ucenici.filter(ucenik => ucenik.ocena < 4);
console.log(ocenki);


// --Reduce-- \\
// 1. --
const brojcinja = [1, 2, 3, 4, 567, 89];
const broj = brojcinja.reduce((acc, broj) => {
    return acc + broj
});
console.log(broj);

// 2. --
const personal = [
    {
        godini: 30,
        okupacija: "Nesto",
        eGlup: true,
    },
    {
        godini: 50,
        okupacija: "Nesto drugo",
        eGlup: true,
    },
    {
        godini: 20,
        okupacija: "Nesto treto",
        eGlup: false,
    }
];

const godinki = personal.reduce((suma, vozrast) => {
   return suma + vozrast.godini
}, 0);

console.log(godinki);

// --forEach -- \\
// 1.-- 2.--
const timovi = [
    {
        ime: "Quick Step",
        velo: "Govnolized",
        Boneke: true,
    },
    {
        ime: "Lotto Soudal",
        velo: "Ridley",
        Boneke: false,
    },
    {
        ime: "Penzionerski dom Trek",
        velo: "Trek",
        Boneke: false,
    }
];

const drogasi = timovi.forEach(klub => {
    console.log(klub.ime)
});

const sponzor = timovi.forEach(sponzor => {
    console.log(sponzor.velo)
});

// --Join-- \\
// 1.--
const tockovi = ["Pegoretti", "Chinarello", "Trolnago", "Sobim"];
const conc = tockovi.join (" > ");
console.log(conc);

// --Some-- \\
// 1.--
const veloKlub = [
    {
        ime: "Grenadiers",
        gc: true,
        klasicari: false,
    },
    {
        ime: "Brooklyn",
        gc: false,
        klasicari: true,
    },
    {
        ime: "Dumbo Visma",
        gc: true,
        klasicari: false,
    }
];

const bogovi = veloKlub.some (velo =>{
    return velo.klasicari === true
})

console.log(bogovi)
