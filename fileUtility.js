import { readFile, writeFile } from 'node:fs/promises';

// writeToJSONFile(path: string, data: object | object[]): Promise<void>
export function writeToJSONFile(path, data) {
  return writeFile(path, JSON.stringify(data));
}

// readFromJSONFile(path: string): Promise<object | object[]>
export function readFromJSONFile(path) {
  return readFile(path).then(jsonData => JSON.parse(jsonData));
}