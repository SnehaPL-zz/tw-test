module.exports = calculateRoom;
function calculateRoom(FamilyMember,noOfPeoplePerRoom){

    var capacity=Math.ceil(FamilyMember/noOfPeoplePerRoom);
    return capacity;
}
