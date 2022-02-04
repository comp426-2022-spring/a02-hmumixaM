import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const guess = args['call'] || console.log('Error: no input.');

if (guess) console.log(flipACoin(guess));
 
