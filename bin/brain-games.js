#!/usr/bin/env node
import askName from '../src/cli.js';
Ы
console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
