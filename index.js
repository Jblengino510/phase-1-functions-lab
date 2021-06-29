function distanceFromHqInBlocks(pickUp) {
    return Math.abs(42 - pickUp)
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264
}

function distanceTravelledInFeet(Start, End) {
    return Math.abs(Start - End) * 264
}

function calculatesFarePrice(Start, Destination) {
    if (distanceTravelledInFeet(Start, Destination) < 400){
        return 0
    }
    else if ((distanceTravelledInFeet(Start, Destination) > 400 && distanceTravelledInFeet(Start, Destination) <= 2000)){
        return (((distanceTravelledInFeet(Start, Destination) - 400) * 2) / 100)
    }
    else if (distanceTravelledInFeet(Start, Destination) > 2000 && (distanceTravelledInFeet(Start, Destination) < 2500)) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}