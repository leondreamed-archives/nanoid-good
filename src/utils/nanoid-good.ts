import { customAlphabet } from 'nanoid';

import naughtyWords from 'naughty-words/en.json';

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
