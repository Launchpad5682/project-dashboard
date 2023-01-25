/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import * as classNames from './style';

interface Props {
	children: ReactNode;
}

function Main(props: Props) {
	const { children } = props;

	return (
		<main css={classNames.mainContainer}>
			<div css={classNames.mainElementsContainer}>{children}</div>
		</main>
	);
}

export { Main };
