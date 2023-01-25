/** @jsxImportSource @emotion/react */
import { colors } from '../../constants/colors';
import * as classNames from './style';

interface Props {
	progress: number;
}

export function ProgressBar(props: Props) {
	const { progress } = props;

	const colorHelper = (overlap: boolean): string => {
		if (progress > 100) return overlap ? colors.red.R1 : colors.red.R2;
		if (progress < 100) return overlap ? colors.green.G1 : colors.green.G2;
		return overlap ? colors.yellow.Y1 : colors.yellow.Y2;
	};

	return (
		<div css={classNames.progressContainer(colorHelper(false))}>
			<div css={classNames.progressUpdate(progress, colorHelper(true))} />
		</div>
	);
}
