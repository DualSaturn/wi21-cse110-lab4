let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const thisKindOfCar in statistics){
    if (thisKindOfCar.substring(0, 1) === "r"){
        console.log(thisKindOfCar + ":" + statistics[thisKindOfCar])
    } else if (statistics[thisKindOfCar] % 2 === 1) {
        console.log(thisKindOfCar + ":" + statistics[thisKindOfCar])
    }
}