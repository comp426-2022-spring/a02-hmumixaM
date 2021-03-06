import minimist from 'minimist';
import { coinFlips, countFlips } from './modules/coin.mjs';


const args = minimist(process.argv.slice(2));
const flip = parseInt(args['number']) || 1;

const result = coinFlips(flip);
console.log(result);
if (flip === 1) {
  console.log({ [result]: 1 })
} else {
  console.log(countFlips(result));
}
