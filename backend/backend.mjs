//Mathilde Gatefait TDB2 

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
export default pb;


// films trié par date de projection

export async function allFilms() {
  const records = await pb.collection('films').getFullList({ sort: 'date_projection' });
    let films = records.map(film => {
    film.imgUrl = pb.files.getURL(film, film.image);
    return film; 
  });
  return films; 
}


//liste activités par date de projections
export async function allActivites() {
const records = await pb.collection('activites').getFullList({ sort: 'date_et_heure' }); 
let activites = records.map(activite => {
    activite.imgUrl = pb.files.getURL(activite, activite.image);
    return activite; 
  });
return records ;
}

//invites par ordre alphabetique
export async function allInvitesByAgentName() {
  const records = await pb.collection('invites').getFullList({ sort: 'nom' });
    let invites = records.map(invite => {
    invite.imgUrl = pb.files.getURL(invite, invite.image);
    return invite; 
  });
  return invites; 
}


//film par son id
export async function OneID(id) {
    let film = await pb.collection('films').getOne(id) ;
    film.imageUrl = pb.files.getURL(film, film.image);
    return film; 
}

//activite par son id
export async function OneIDAct(id) {
    let activite = await pb.collection('activites').getOne(id) ;
    activite.imageUrl = pb.files.getURL(activite, activite.image);
    return invite; 
}

//invite par son id
export async function OneIDInv(id) {
    let invite = await pb.collection('invites').getOne(id) ;
    invite.imageUrl = pb.files.getURL(invite, invite.image);
    return invite; 
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


