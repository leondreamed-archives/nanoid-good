import { createRequire } from 'node:module';
import { customAlphabet } from 'nanoid';

const require = createRequire(import.meta.url);
const naughtyWords = require('naughty-words/en.json') as string[];

export function hasNaughtyWord(id: string) {
	const idWithNumbersReplaced = id
		.replace('1', 'i')
		.replace('3', 'e')
		.replace('5', 's')
		.replace('8', 'b')
		.replace('0', 'o');

	for (const naughtyWord of naughtyWords) {
		const word = naughtyWord.replace(/ /, '').replace('l', 'i');
		if (new RegExp(word, 'gi').test(idWithNumbersReplaced)) return true;
	}

	return false;
}

export function nanoid(size = 30) {
	const gen = customAlphabet('6789BCDFGHJKLMNPQRTWbcdfghjkmnpqrtwz', size);

	let id = gen();
	while (hasNaughtyWord(id)) {
		id = gen();
	}

	return id;
}
