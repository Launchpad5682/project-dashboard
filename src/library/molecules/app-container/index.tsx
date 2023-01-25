/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../atoms/header';
import { Main } from '../../atoms/main';
import * as classNames from './style';

export function AppContainer() {
	return (
		<div css={classNames.appContainer}>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</div>
	);
}
