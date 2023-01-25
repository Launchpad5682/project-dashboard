/** @jsxImportSource @emotion/react */
import React from 'react';
import Icon from 'react-icons-kit';
import { ic_notifications_active_twotone } from 'react-icons-kit/md/ic_notifications_active_twotone';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';

import { Link, useLocation } from 'react-router-dom';
import { colors } from '../../constants/colors';
import * as classNames from './style';
import { H2, P } from '../typography';
import { Avatar } from '../avatar';

export function Header() {
	const location = useLocation();

	const paths = [
		{ name: 'Dashboard', to: '/dashboard' },
		{ name: 'Projects', to: '/projects' },
		{ name: 'Team', to: '/team' },
		{ name: 'Clients', to: '/clients' },
		{ name: 'Time', to: '/time' },
		{ name: 'Reports', to: '/reports' },
	];

	return (
		<header css={classNames.headerContainer}>
			<div css={classNames.headerElementsContainer}>
				<H2
					style={classNames.brandHeading}
					color={colors.white}
					fontWeight="bold"
				>
					<span css={classNames.brandHeadingHighlight}>H</span>
					ours
				</H2>
				<nav>
					<ul css={classNames.navBar}>
						{paths.map((path, _) => (
							<li key={path.to}>
								<Link
									to={path.to}
									css={classNames.linkItem(path.to === location.pathname)}
								>
									<P size="T200" color={colors.white}>
										{path.name}
									</P>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div css={classNames.profileAndNotificationContainer}>
					<span css={classNames.notificationIcon}>
						<Icon icon={ic_notifications_active_twotone} size={25} />
						<span css={classNames.notificationDot} />
					</span>
					<span css={classNames.profileSection}>
						<Avatar />
						<P color={colors.white}>Saurabh</P>
						<Icon icon={ic_keyboard_arrow_down} size={25} />
					</span>
				</div>
			</div>
		</header>
	);
}
