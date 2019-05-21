const calculateRoom=require('./noHotel.js');
var assert = require('assert');
const people = [
    {
        "name" : "Sherya",
        "commingOrNot":"Yes",
        "noOfPeople": 6
    },
    {
        "name" : "Amit",
        "commingOrNot":"Yes",
        "noOfPeople": 1
    },
    {
        "name" : "Nataliya",
        "commingOrNot":"No"
    },
    {
        "name" : "Shreyas",
        "commingOrNot":"Yes",
        "noOfPeople": 4
    },
    {
        "name" : "Mandar",
        "commingOrNot":"No"
    },
    {
        "name" : "Anup",
        "commingOrNot":"Yes",
        "noOfPeople": 5
    },
    {
        "name" : "Kamya",
        "commingOrNot":"Yes",
        "noOfPeople": 7
    }
]
var totalRooms=0;
var PeopleNotComming=0;
for(i=0;i<people.length;i++)
{
    var Comming=people[i].commingOrNot;
    if(Comming=="Yes")
    {
        var FamilyMember=people[i].noOfPeople;
        var name = people[i].name;
        const output = calculateRoom(FamilyMember,process.argv[2]);
        console.log(name+ ":" +output);
        totalRooms=totalRooms+output;
    }
    else
    {
        PeopleNotComming=PeopleNotComming+1;
    }
    
}
console.log("Total No of Rooms:"+totalRooms);
    console.log("People Said No:"+PeopleNotComming);