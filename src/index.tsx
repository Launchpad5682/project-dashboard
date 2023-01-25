import React from 'react';
import ReactDOM from 'react-dom/client';
import { css, Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './contexts/data-context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Global
			styles={css`
				* {
					padding: 0;
					margin: 0;
					font-size: 62.5%;
					font-family: 'Poppins', sans-serif;
				}
			`}
		/>
		<BrowserRouter>
			<DataProvider>
				<App />
			</DataProvider>
		</BrowserRouter>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
