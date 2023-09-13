//outputs string with random rainbow color in hex value
export function returnRandColor(): string {
	const colors: string[] = [
		'#e81416',
		'#ffa500',
		'#faeb36',
		'#79c314',
		'#487de7',
		'#4b369d',
		'#70369d'
	];
	return colors[Math.floor(Math.random() * 6)];
}

//outputs an array of rainbow colors in random order without repeating
export function returnRandColors(): string[] {
	const colors: string[] = [
		'#e81416',
		'#ffa500',
		'#faeb36',
		'#79c314',
		'#487de7',
		'#4b369d',
		'#70369d'
	];
	for (let i = colors.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[colors[i], colors[j]] = [colors[j], colors[i]];
	}
	return colors;
}

export function returnRandGreyColors(): string[] {
	const colors: string[] = ['#b2bEb5', '#a9a9a9', '#818589', '#e5e4e2'];
	for (let i = colors.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[colors[i], colors[j]] = [colors[j], colors[i]];
	}
	return colors;
}
