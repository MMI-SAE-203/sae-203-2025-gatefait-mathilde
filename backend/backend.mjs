//Mathilde Gatefait TDB2 

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
export default pb;


// films trié par date de projection
export async function allFilms() {
const records = await pb.collection('films').getFullList({ sort: 'date_projection' }); ;
return records ;
}

//liste activités par date de projections
export async function allActivites() {
const records = await pb.collection('activites').getFullList({ sort: 'date_et_heure' }); ;
return records ;
}

//invites par ordre alphabetique

export async function allInvitesByAgentName() {
const records = await pb.collection('invites').getFullList({ sort: 'nom' }); 
return records;
}

//film par son id
export async function OneID(id) {
const oneRecords = await pb.collection('films').getOne(id) ;
return oneRecords ;
}

//activite par son id
export async function OneIDAct(id) {
const oneRecords = await pb.collection('activites').getOne(id) ;
return oneRecords ;
}

//invite par son id
export async function OneIDInv(id) {
const oneRecords = await pb.collection('invites').getOne(id) ;
return oneRecords ;
}

//act d'un invite par son id
export async function ActInvitesById(id) {
const records = await pb.collection('activites').getFullList({ filter: `invites.id='${id}'` , expand: 'invites'});
return records;
}

//act d'un invite par son nom
export async function ActInvitesByName(nom) {
  const records = await pb.collection('activites').getFullList({ filter: `invites.nom='${nom}'` , expand: 'invites'});
  return records;
}

//modifier info activité
export async function updateActiviteById(id, data) {
  await pb.collection('activites').update(id, data) ;
} 