import * as plan from './plan.js';
import * as seeds from './seeds/seeds-index.js';

console.log("Welcome to the main module")

let yearlyPlan = plan.createPlan();

console.log(yearlyPlan);
console.log(seeds.createAsparagus());
console.log(seeds.createCorn());
console.log(seeds.createPotato());
console.log(seeds.createSoybean());
console.log(seeds.createSunflower());
console.log(seeds.createWheat());