
// Record Collection
var collection = {  // create an object called collection
    "Genre1":"NuMetal",
    "NuMetal": {       // has multiple properties
        "Artists":{
    "System of a Down": {
        "albums": {
     "Steal This Album!":[
    "Chic 'N' Stu",
    "Innervison",
    "Bubbles",
    "Boom!",
    "Nuguns",
    "A.D.D.(American Dream Denial)",
    "Mr Jack",
    "I-E-A-I-A-I-O",
    "36",
    "Pictures",
    "Highway Song",
    "Fuck the System",
    "Ego Brain",
    "Thetawaves",
    "Roulette",
    "Streamline"]
}
}
}
}
};
/* Second genre
"Genre2":"Heavy Metal",   
"Heavy Metal": {
    // here the artist1 element is missing
     "album":"City of Evil",
     
     "tracks":[
        "Beast and the Harlot",
        "Burn it Down",
        "Blinded in Chains",
        "Bat Country",
        "Trashed and Scattered",
        "Seized the Day",
        "Sidewinder",
        "The Wicked End",
        "Strength of the World",
        "Betrayed",
        "M.I.A"]  
*/
var collectionCopy =JSON.parse(JSON.stringify(collection));

function updateRecords(Genre,Artists,Artist,Song){ //pass in the id, property, value and update the record collection
     if (Artist ==="") {
        delete collection[Genre][Artists][Artist];
     }
    /* }  else if (prop === "") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }   */
    else if (Artist.length === 0) {
        collection[Genre][Artists][Artist] =''
    }
    /* }  else {
        collection[id][prop] = value; */
                                    // if we have an empty string for the value it should delete that property
                                        // if we have a property of tracks, instead of changing all tracks, it should add it onto the end
    return collection;
};

console.log(updateRecords("NuMetal","Artists","Deftones"));
// now figure out how to add artist but put it in the position above tracks

// Hotel example from javascript book Duckett 9.16.22
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function() { 
        return "Rooms Available:"+ " "+ (this.rooms - this.booked);
    } 
}
var hotelName =hotel.name;
console.log(hotelName);

console.log(hotel.checkAvailability());
// to access the function that is associated with checkAvailability, you need to state "()"
// we gave this function the Parameters of rooms and booked#. This gives us a return value of the balance of the rooms left
