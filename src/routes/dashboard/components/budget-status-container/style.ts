import { css } from '@emotion/react';

export const container = css`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: fit-content;
`;

export const titleContainer = css`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

export const cardsContainer = css`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 3rem;
`;
