export type EraId = 'steam-legacy' | 'steam-modern' | 'windows10';

export interface PageMeta {
	title: string;
	description: string;
	era?: EraId;
}
