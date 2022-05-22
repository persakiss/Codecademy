const getSleepHours = (day) => {
    switch (day) {
        case ('sunday'):
            return 8; // Input
            break;
        case ('monday'):
            return 6; // Input
            break;
        case ('tuesday'):
            return 6; // Input
            break;
        case ('wednesday'):
            return 6; // Input
            break;
        case ('thursday'):
            return 6; // Input
            break;
        case ('friday'):
            return 5; // Input
            break;
        case ('saturday'):
            return 6; // Input
            break;
        default:
    }
}

const getActualSleepHours = _ => {
    let slept = 0;
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'saturday'];
    for (const day in days) {
        slept += getSleepHours(days[day]);
    }
    return slept;
}

const getIdealSleepHours = _ => {
    ////////////////////////////
    let idealHours = 8; // Input
    ////////////////////////////
    return idealHours * 7;
}

const calculateSleepDebt = _ => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    let net = actualSleepHours - idealSleepHours;
    switch(true) {
        case(net == 0):
            return("You got the perfect amount of sleep");
            break;
        case(net > 0):
            return(`You got ${net} hour(s) more sleep than needed`);
            break;
        case(net < 0):
            return(`You should get some rest, you need ${Math.abs(net)} more hour(s)!`);
            break;
        default:
            return("broken");
    }
}

console.log(calculateSleepDebt());