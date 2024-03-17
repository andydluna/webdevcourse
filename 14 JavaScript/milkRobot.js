function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(money, costPerBottle); //remaining of the division
}

function calcBottles(startingMoney, costPerBottle) {
    var bottles = Math.floor(startingMoney / costPerBottle);
    return bottles;
}

function calcChange(startingMoney, costPerBottles) {
    var change = startingMoney % costPerBottles;
    return change;
}

console.log("Hello Master, here is your " + getMilk(10, 3) + " change.")
