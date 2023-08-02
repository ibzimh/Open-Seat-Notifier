import { readFromJSONFile, writeToJSONFile } from './fileUtility.js';

readFromJSONFile('data.json').then(data => data.some(course => course.number === '426'))
.then(open => console.log(open))
.catch(err => console.log("File read error"));