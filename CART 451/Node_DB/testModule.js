let petName = "Cum";

module.exports.name = function() {
    return "Hugo";
}

module.exports.age = function() {
    return "29 (really)";
}

module.exports.setPetName = function(inComing) {
    petName = inComing;
}

module.exports.getPetName = function() {
    appendPetName();
    return petName;
}

function appendPetName(){
    petName = petName +"****";
  }