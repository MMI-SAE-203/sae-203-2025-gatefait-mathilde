//Mathilde Gatefait TDB2 

import { allFilms,allActivites,allInvitesByAgentName,OneID,OneIDAct,OneIDInv,
    ActInvitesById,ActInvitesByName,updateActiviteById,filterByCategory,allFilmsDate} from './backend.mjs'


/* films trié par date de projection
try {
const records = await allFilms() ;
console.log(records) ;
} catch (e) {
console.error(e) ;
} 


//liste activités par date de projections
try {
const records = await allActivites() ;
console.log(records) ;
} catch (e) {
console.error(e) ;
} 


//invites par ordre alphabetique
try {
const records = await allInvitesByAgentName();
console.log(records);
} catch (e) {
console.error(e);
}


//film par son id
try {
const Onerecord = await OneID('1bq6kbo1067og10') ;
console.log(Onerecord) ;
} catch (e) {
console.error(e) ;
}


//activite par son id
try {
const Onerecord = await OneIDAct('jthu6s19y2v47v4') ;
console.log(Onerecord) ;
} catch (e) {
console.error(e) ;
}


//invites par son id 
try {
const Onerecord = await OneIDInv('25573k3yl63290y') ;
console.log(Onerecord) ;
} catch (e) {
console.error(e) ;
}


//act d'un invites par son id
try {
const records = await ActInvitesById('2815zge6b0113tm') ;
console.log(records) ;
} catch (e) {
console.error(e) ;
}


//act d'un invites par son nom
try {
const records = await ActInvitesByName('Dubois') ;
console.log(records) ;
} catch (e) {
console.error(e) ;
}


//modifier info activité
const data = {
"nom" : "Atelier de Sculptures Hantées",
"type_activite" : "atelier",
};  
await updateActiviteById('3k6z7q443u17hvx',data);


// films trié par date de projection
try {
  const date_projection = "2025-10-30"; 
  const records = await allFilmsDate(date_projection);
  console.log(records);
} catch (e) {
  console.error(e);
}
*/
//filter films par categorie

const test = async () => {
  try {
    const categories = "Horreur"; // Ex. de catégorie
    const records = await filterByCategory(categories);
    console.log("Films trouvés :", records);
  } catch (e) {
    console.error("Erreur :", e);
  }
};

test();

