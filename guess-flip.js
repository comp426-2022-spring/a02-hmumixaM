import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const guess = args['call'] || console.log('Error: no input.');

if (call == "heads" || call == "tails") {
    console.log(flipACoin(call));
} else {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}
