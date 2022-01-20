import { hasNaughtyWord } from '~/utils/index.js';

test('my test', () => {
	expect(hasNaughtyWord('a5s')).toBe(true);
	expect(hasNaughtyWord('monke')).toBe(false);
});
