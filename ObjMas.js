const pokémon = Object.freeze([
{ "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
{ "id": 5,   "name": "Charmeleon", "types": ["fire"] },
{ "id": 9,   "name": "Blastoise",  "types": ["water"] },
{ "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
{ "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
{ "id": 23,  "name": "Ekans",      "types": ["poison"] },
{ "id": 24,  "name": "Arbok",      "types": ["poison"] },
{ "id": 25,  "name": "Pikachu",    "types": ["electric"] },
{ "id": 37,  "name": "Vulpix",     "types": ["fire"] },
{ "id": 52,  "name": "Meowth",     "types": ["normal"] },
{ "id": 63,  "name": "Abra",       "types": ["psychic"] },
{ "id": 67,  "name": "Machamp",    "types": ["fighting"] },
{ "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
{ "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
{ "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
{ "id": 98,  "name": "Krabby",     "types": ["water"] },
{ "id": 115, "name": "Kangaskhan", "types": ["normal"] },
{ "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
{ "id": 133, "name": "Eevee",      "types": ["normal"] },
{ "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
{ "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
{ "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
{ "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn)
// const pkmnIds = pokémon.map( p => p.id )
// console.log(pkmnIds)
/*1*/
// const pkId = pokémon.filter (p => p.id%3 == 0);
// console.log(pkId)
/*2*/
// const firepk = pokémon.filter(p =>p.types == "fire");
// console.log(firepk)
/*3*/
// const difpk = pokémon.filter (p =>p.types.length >1 );
// console.log(difpk)
/*4*/
// const namepk = pokémon.map(p => p.name);
// console.log(namepk)
/*5*/
// const nmidpk = pokémon.filter(p => p.id>99).map(p => p.name);
// console.log(nmidpk)
/*6*/
// const psntype = pokémon.filter(p => p.types == "poison").map(p => p.name);
// console.log(psntype)
/*7*/
// const mntypes = pokémon.filter(pokemon => pokemon.types.length > 1 && pokemon.types[1] === "flying").map(pokemon => pokemon.types[0]);
// console.log(mntypes)
/*8*/
// const norpok = pokémon.filter(p => p.types == ("normal")).length;
// console.log (norpok)
