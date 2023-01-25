export type MoodEmoji = '😊' | '😔' | '😭' | '😩';

export interface PersonMood {
	id: string;
	avatarURL: string;
	name: string;
	department: string;
	mood: MoodEmoji;
	value: number;
}

export interface DataState {
	teamMood: PersonMood[];
}

export type DataAction = {
	type: 'UPDATE_MOOD_VALUE';
	payload: {
		id: string;
		value: number;
	};
};
