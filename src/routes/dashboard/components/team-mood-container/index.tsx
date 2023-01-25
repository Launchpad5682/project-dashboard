/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import {
	DataContextInterface,
	useDataContext,
} from '../../../../contexts/data-context';
import { P } from '../../../../library';
import { TeamMoodCard } from '../team-mood-card';
import * as classNames from './style';

interface Props {
	style: SerializedStyles;
}

export function TeamMoodContainer(props: Props) {
	const { style } = props;
	const { teamMood = [] } = useDataContext() as DataContextInterface;

	return (
		<div css={[classNames.container, style]}>
			<P fontWeight="semibold">Team Mood</P>
			{teamMood.map((data) => (
				<TeamMoodCard data={data} key={data.id} />
			))}
		</div>
	);
}
