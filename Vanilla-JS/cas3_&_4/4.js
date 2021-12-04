// 1 Да се напише програма што ´ке овозможи претворање на двоцифрените броеви во зборови на следниот начин: За двоцифрениот борj 89 на екран ´ке се испечати "osum devet". ---Znam deka ima i drug nacin za ovaa zadaca 
let broj = Number(prompt("Vnesi bilo koj dvocifren broj:"));

switch (Math.floor (broj/10)) {
    case 1 : console.log("eden");
    break;
    case 2 : console.log("dva");
    break;
    case 3 : console.log("tri");
    break;
    case 4 : console.log("cetiri");
    break;
    case 5 : console.log("pet");
    break;
    case 6 : console.log("sest");
    break;
    case 7 : console.log("sedum");
    break;
    case 8 : console.log("osum");
    break;
    case 9 : console.log("devet");
    break;
}

switch (broj%10) {
    case 0 : console.log("nula");
    break;
    case 1 : console.log("eden");
    break;
    case 2 : console.log("dva");
    break;
    case 3 : console.log("tri");
    break;
    case 4 : console.log("cetiri");
    break;
    case 5 : console.log("pet");
    break;
    case 6 : console.log("sest");
    break;
    case 7 : console.log("sedum");
    break;
    case 8 : console.log("osum");
    break;
    case 9 : console.log("devet");
    break;
    default:console.log("Vnesovte pogresno");
}

// 2 Да се напише програма коjа од n броеви (внесени од тастатура) ´ке го определи броjот на броеви што се деливи со 3, при делењето со 3 имаат остаток 1, односно 2. Забелeшка: Задачата да се реши со while, do. . . while и for



// 3 Да се напише програма коjа на екран ´ке ги испечати сите четири-цифрени броеви каj кои збирот на трите наjмалку значаjни цифри е еднаков со наjзначаjната цифра



// 4 Да се напише програма коjа од непознат броj на цели броеви кои се внесуваат од тастатура ´ке ги определи позициите (редните броеви на внесување) на двата последователни броеви кои jа имаат наjголемата сума. Програмата завршува ако едно по друго (последователно) се внесат два негативни цели броjа
// let br1 = Number(prompt("1 broj"));
// let br2 = Number(prompt("2 broj"));
// let maxsum = br1 + br2;
// let niza = [];
// let idx1 = 0;
// let idx2 = 1;

// while (br1 > 0 || br2 > 0) {
//     niza.push(br1);
//     niza.push(br2);
//     br1 = Number(prompt("1 broj"));
//     br2 = Number(prompt("2 broj"));
// }
// console.log(niza);
// if(niza.length > 2) {
//     let idx1 = 0;
//     let idx2 = 1;
//     maxsum = niza[0] + niza[1];

//     for(let i = 1; i < niza.length -1; i++) {
//         if(niza[i] + niza[i + 1] > maxsum) {
//             idx1 = i;
//             idx2 = i + 1;
//             maxsum = niza[i] + niza[i +1];
//         }
//     }
//     console.log("Indeksite se " +idx1 +" "+idx2 +" i nivniot zbir e " +maxsum);
// }

// 5 Да се напише објект кој ќе содржи повеќе клуч-вредност парови, каде што вредностите ќе бидат од тип стринг, број, низа и објект.
let korisnik = {
    ime: "Mojshe",
    prezime: "Serbezovski",
    godini: 90,
    vestini: ["sah", "pazarenje", "politika"],
    vnuci: {
        ime: "Mojshe Pomladiot",
        godini: 9,
    },
};
console.log(JSON.stringify(korisnik, null, 4));
// for(let [key, value] of Object.entries(korisnik)){
//     console.log(`${key}: ${value}`);
// }
// Да се испечатат сите својства на објектот во следниот формат клуч: вредност. Доколку вредноста е низа да се напишат елементите од низата во нов ред со празни места пред елементот. (edited) 

// 6 Да се напише програма која ќе ги испечати само насловите на книгите од објектот Library
var library = [ 
    {
        author: 'J.K Rowling',
        title: "Harry Potter and the Philosopher's Stone",
        readingStatus: true
    },
    {
        author: 'Emily Bronte',
        title: 'Wuthering Heights',
        readingStatus: true
    },
    {
        author: 'Stieg Larsson',
        title:  'The Girl with the Dragon Tattoo', 
        readingStatus: false
    }
];
let naslovi = library[0];
for (let i = 0; i < library.length; i++) {
    let naslovi = library[i];
    console.log(naslovi.title);
}