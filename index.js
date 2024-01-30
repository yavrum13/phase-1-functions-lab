// Code your solution in this file!
const hq = 42
const blockToFeet = 264

function distanceFromHqInBlocks(blocks){
    let distance;
    switch (true){
        case blocks > hq:
            distance = blocks - hq;
            break;
        case blocks < hq:
            distance = hq - blocks;
            break;
        default:
            console.log('Unknown Error.');
            distance = 0;
    }
    return distance;
}

function distanceFromHqInFeet(blocks){
    let distanceInFeet = distanceFromHqInBlocks(blocks) * blockToFeet;
    return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock){
    let distanceTravelled;
    switch (true){
        case startBlock > endBlock:
            distanceTravelled = (startBlock - endBlock) * blockToFeet;
            console.log(distanceTravelled);
            break;
        case startBlock < endBlock:
            distanceTravelled = (endBlock - startBlock) * blockToFeet;
            console.log(distanceTravelled);
            break;
        default:
            console.log('Unknown Error.');
            distance = 0;
    }
    return distanceTravelled;
}

function calculatesFarePrice(start, destination){
    let fareCalc = (distanceTravelledInFeet(start, destination) - 400) * .02;
    let finalPrice;
    switch (true){
        case distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <=2000:
            finalPrice = fareCalc;
            break;
        case distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500:
            finalPrice = 25
            break;
        case distanceTravelledInFeet(start, destination) > 2500:
            finalPrice = 'cannot travel that far';
            break;
        default:
            finalPrice = 0;
    }
    return finalPrice;
}