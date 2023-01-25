import {
	createContext,
	Dispatch,
	ReactElement,
	ReactNode,
	useContext,
	useReducer,
} from 'react';
import { initialState } from './data';
import { dataReducer } from './reducer/data-reducer';
import { DataAction, DataState } from './types';

export interface DataContextInterface extends DataState {
	dispatch: Dispatch<DataAction>;
}

const DataContext = createContext<DataContextInterface | null>(null);

export const useDataContext = () => useContext(DataContext);

export function DataProvider({
	children,
}: {
	children: ReactElement | ReactNode;
}) {
	const [state, dispatch] = useReducer(dataReducer, initialState);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		...state,
		dispatch,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
