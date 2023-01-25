import { DataState, DataAction } from '../../types';

export function dataReducer(state: DataState, action: DataAction) {
	const { type, payload } = action;

	switch (type) {
		case 'UPDATE_MOOD_VALUE': {
			const { id, value } = payload;
			const updatedTeamMood = state.teamMood.map((personmMood) => {
				if (personmMood.id === id) {
					return { ...personmMood, value };
				}
				return { ...personmMood };
			});
			return { ...state, teamMood: updatedTeamMood };
		}
		default:
			return state;
	}
}
