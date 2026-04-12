/**
 * Dashboard-specific PandaCSS styles. Shared/reusable styles live in $lib/recipes/steam-modern.
 */
import { css, cx } from 'styled-system/css';
import { grid } from 'styled-system/patterns';

export const statsGrid = grid({
	columns: 4,
	gap: '1px',
	background: 'divider',
	borderBottom: '1px solid token(colors.divider)'
});

export const statCard = css({
	background: 'surface.panel',
	padding: '16px 20px',
	position: 'relative'
});

export const statLabel = css({
	fontSize: '10px',
	textTransform: 'uppercase',
	letterSpacing: '0.1em',
	color: 'text.muted',
	fontWeight: '700',
	marginBottom: '6px'
});

export const statValue = css({
	fontSize: '26px',
	fontWeight: '300',
	color: 'text.bright',
	lineHeight: '1',
	letterSpacing: '-0.02em',
	'& span': { fontSize: '14px', fontWeight: '400', color: 'text.secondary' }
});

export const statDelta = css({ marginTop: '4px', fontSize: '11px' });
export const statDeltaUp = css({ color: 'accent.green' });
export const statDeltaDown = css({ color: 'accent.red' });

export const statBar = css({
	position: 'absolute',
	bottom: '0',
	left: '0',
	right: '0',
	height: '2px',
	background: 'divider'
});

export const statBarFill = css({
	height: '100%',
	background: 'linear-gradient(90deg, token(colors.accent.dim), token(colors.accent))',
	transition: 'width 1s ease'
});

export const chartContainer = css({
	padding: '8px 14px 14px',
	flex: '1',
	minHeight: '160px'
});

export const revTooltipInner = css({
	background: 'surface.elevated',
	border: '1px solid token(colors.border.light)',
	borderRadius: 'DEFAULT',
	padding: '8px 10px',
	fontSize: '11px',
	minWidth: '130px',
	boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
});

export const revTooltipDate = css({
	color: 'text.muted',
	fontSize: '10px',
	fontWeight: '700',
	textTransform: 'uppercase',
	letterSpacing: '0.06em',
	marginBottom: '6px'
});

export const revTooltipRow = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: '12px',
	padding: '2px 0',
	color: 'text.secondary',
	'& span:last-child': { color: 'text.primary', fontWeight: '600' }
});

export const revTooltipTotal = css({
	display: 'flex',
	justifyContent: 'space-between',
	gap: '12px',
	marginTop: '5px',
	paddingTop: '5px',
	borderTop: '1px solid token(colors.divider)',
	color: 'text.bright',
	fontWeight: '700'
});

const revDotBase = css({
	display: 'inline-block',
	width: '6px',
	height: '6px',
	borderRadius: 'full',
	marginRight: '5px',
	verticalAlign: 'middle'
});

export const revDotBlue = cx(revDotBase, css({ background: 'accent' }));
export const revDotGold = cx(revDotBase, css({ background: 'accent.gold' }));
export const revDotGreen = cx(revDotBase, css({ background: 'accent.green' }));

export const activityItem = css({
	display: 'flex',
	gap: '10px',
	padding: '8px 0',
	borderBottom: '1px solid token(colors.divider)',
	fontSize: 'sm',
	'&:last-child': { borderBottom: 'none' },
	'& strong': { color: 'accent', fontWeight: '600' }
});

export const activityTime = css({
	color: 'text.muted',
	whiteSpace: 'nowrap',
	minWidth: '40px'
});

const activityDotBase = css({
	width: '6px',
	height: '6px',
	borderRadius: 'full',
	flexShrink: '0',
	marginTop: '4px'
});

export const activityDotStyles = {
	warn: cx(activityDotBase, css({ background: 'accent.gold' })),
	info: cx(activityDotBase, css({ background: 'accent' })),
	danger: cx(activityDotBase, css({ background: 'accent.red' })),
	success: cx(activityDotBase, css({ background: 'accent.green' }))
};

export const activityText = css({
	color: 'text.secondary',
	lineHeight: '1.4',
	flex: '1'
});

export const healthRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	padding: '7px 0',
	borderBottom: '1px solid token(colors.divider)',
	'&:last-child': { borderBottom: 'none' }
});

export const healthName = css({ width: '110px', color: 'text.secondary', fontSize: 'sm' });
export const healthBarWrap = css({ flex: '1' });
export const healthVal = css({
	width: '40px',
	textAlign: 'right',
	color: 'text.primary',
	fontSize: 'sm',
	fontWeight: '600'
});
