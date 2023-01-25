import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { AppContainer } from '../library';
import { Dashboard } from './dashboard';
import { Home } from './home';

export function Routes() {
	return (
		<RouterRoutes>
			<Route path="/" element={<AppContainer />}>
				<Route index element={<Home />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Route>
		</RouterRoutes>
	);
}
