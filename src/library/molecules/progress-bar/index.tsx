/** @jsxImportSource @emotion/react */
import * as classNames from './style';

interface Props {
	progress: number;
}

export function ProgressBar(props: Props) {
	const { progress } = props;

	const state = progress > 100 ? 'red' : progress < 100 ? 'yellow' : 'green';

	return (
		<div css={classNames.progressContainer(state)}>
			<div css={classNames.progressUpdate(progress, state)} />
		</div>
	);
}
