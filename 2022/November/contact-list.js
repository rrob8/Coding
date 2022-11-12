var contacts = [ {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "05432",
    "likes": ["Pizza", "Coding", "Brownie Points"]
}
,
{
    "firstName":"Harry",
    "lastName": "Potter",
    "number":"09943",
    "likes":["Quidditch", "Hogwarts","Dumbledore"]

},
{
    "firstName":"Sherlock",
    "lastName":"Holmes",
    "number":"04873",
    "likes":["Intriguing Cases","Violin"]
},
{
    "firstName":"Kristina",
    "lastName":"Vos",
    "number":"unknown",
    "likes":["Javascript","Gaming","Foxes"]
}
];

function ContactLookup (firstName, prop) {
    for (var i =0; i<contacts.length; i++) {
if (contacts[i].firstName === firstName) {
return contacts[i][prop] || "No such property";
}
 } return "No such contact";
}

var data = ContactLookup ("Harry","likes" )

console.log(data);

git init