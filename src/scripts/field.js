let plants = [];


export const addPlant = (seed) => {
    if (!Array.isArray(seed)){
        plants.push(seed);
    } else {
        console.log('Argument cannot be an array.');
    }
}


export const usePlants = () => {
    return plants;
}