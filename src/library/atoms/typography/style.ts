import { css, SerializedStyles } from '@emotion/react';

export const typography = (
	size: number,
	fontWeight: number,
	color: string,
): SerializedStyles => css`
	color: ${color};
	font-weight: ${fontWeight};
	font-size: ${size}rem;
`;
