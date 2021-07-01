var contacts = [
    {
        "firstName":"Akira",
        "lastName":"Laine",
        "number":"0543236543",
        "likes":["Pizza","Codeing","Brownie Points"]
    },

    {
        "firstName":"Harry",
        "lastName":"Potter",
        "number":"099437268",
        "likes":["Hogwarts","Magic","Hagrid"]
    },
    
    {
        "firstName":"Sherlock",
        "lastName":"Holmes",
        "number":"048735643",
        "likes":["Intriguing Case","Violin"]
    },

    {
        "firstName":"Kristian",
        "lastName":"Vos",
        "number":"unknow",
        "likes":["JavaScript","Gaming","Foxes"]
    }
];

function lookupProfile(name,prop){
    for (var i =0 ; i< contacts.length; i++){
        if(contacts[i].firstName ==name){
            return contacts[i][prop] || "No such property"

        }
    }
        return "NO such Contacts !"
}

var data = lookupProfile("Sherlock","likes")
console.log(data)
