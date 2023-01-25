/** @jsxImportSource @emotion/react */
import { P } from '../typography';
import * as classNames from './style';

interface Props {
	mode: 'on' | 'off';
	on: string;
	off: string;
	clickHandler: () => void;
}

export function Switch(props: Props) {
	const { mode, on, off, clickHandler } = props;

	return (
		<span css={classNames.switchContainer}>
			<P fontWeight={mode === 'off' ? 'semibold' : 'extralight'}>{off}</P>
			<button
				css={classNames.switchButton}
				onClick={clickHandler}
				type="button"
			>
				<span css={classNames.toggle(mode)} />
			</button>
			<P fontWeight={mode === 'on' ? 'semibold' : 'extralight'}>{on}</P>
		</span>
	);
}
