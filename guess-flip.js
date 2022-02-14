import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const guess = args['call'] || console.log('Error: no input.');

if (!guess || guess !== 'heads' || guess !== 'tails') {
 console.log('Error: wrong input.');
 console.log('Usage: node guess-flip --call=[heads|tails]');
} else console.log(flipACoin(guess));
