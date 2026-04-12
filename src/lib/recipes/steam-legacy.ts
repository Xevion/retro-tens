/**
 * Shared PandaCSS recipes for the steam-legacy era.
 * Import these instead of duplicating css() calls across pages.
 */
import { css, cva, sva } from 'styled-system/css';

export const subNav = sva({
	slots: ['root', 'tab', 'sep', 'spacer', 'searchWrap', 'search'],
	base: {
		root: {
			background: 'surface.panel',
			borderBottom: '1px solid token(colors.border)',
			padding: '0 14px',
			display: 'flex',
			alignItems: 'center',
			gap: '0'
		},
		tab: {
			padding: '6px 12px',
			color: 'text.secondary',
			fontSize: 'sm',
			fontWeight: 'bold',
			letterSpacing: '0.3px',
			textTransform: 'uppercase',
			cursor: 'pointer',
			border: 'none',
			background: 'none',
			fontFamily: 'ui',
			borderBottom: '1px solid transparent',
			transition: 'token(transitions.DEFAULT)',
			_hover: { color: 'text.primary' },
			_selected: {
				color: 'text.primary',
				borderBottom: '2px solid token(colors.accent)'
			}
		},
		sep: {
			color: '#3d3d3f',
			fontSize: 'xs',
			padding: '0 2px'
		},
		spacer: { flex: '1' },
		searchWrap: {
			padding: '5px 0',
			display: 'flex',
			alignItems: 'center'
		},
		search: {
			background: 'surface.input',
			border: '1px solid token(colors.border.light)',
			borderRadius: 'sm',
			padding: '3px 8px',
			color: 'text.secondary',
			fontSize: 'sm',
			fontFamily: 'ui',
			width: '130px',
			outline: 'none',
			_focus: { borderColor: 'accent.dim' }
		}
	}
});

export const sectionHeader = sva({
	slots: ['root', 'title'],
	base: {
		root: {
			background: 'surface.sectionHead',
			padding: '6px 12px',
			borderBottom: '1px solid token(colors.border)',
			borderTop: '1px solid token(colors.border.light)'
		},
		title: {
			color: 'accent',
			fontSize: 'sm',
			fontWeight: 'bold',
			textTransform: 'uppercase',
			letterSpacing: '0.5px'
		}
	}
});

export const gameCard = sva({
	slots: ['root', 'img', 'overlay', 'icon', 'info', 'name', 'meta', 'tag'],
	base: {
		root: {
			background: 'surface.card',
			cursor: 'pointer',
			position: 'relative',
			overflow: 'hidden'
		},
		img: {
			height: '70px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
			overflow: 'hidden'
		},
		overlay: {
			position: 'absolute',
			inset: '0',
			background: 'accent.glow',
			opacity: '0',
			transition: 'opacity 0.1s',
			border: '1px solid token(colors.accent)'
		},
		icon: {
			fontSize: '22px',
			opacity: '0.6',
			position: 'relative',
			zIndex: '1'
		},
		info: { padding: '5px 7px' },
		name: {
			fontSize: 'sm',
			color: 'text.primary',
			fontWeight: 'bold',
			lineHeight: '1.2',
			marginBottom: '3px',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		meta: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between'
		},
		tag: {
			fontSize: 'xs',
			color: 'text.muted'
		}
	}
});

export const gamesGrid = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gap: '1px',
	background: 'border',
	padding: '1px'
});

export const discountBadge = css({
	position: 'absolute',
	top: '4px',
	right: '4px',
	background: 'accent.dim',
	color: 'accent.price',
	fontSize: '9px',
	fontWeight: 'bold',
	padding: '2px 5px',
	borderRadius: 'sm',
	zIndex: '1'
});

export const hoursBadge = css({
	position: 'absolute',
	bottom: '4px',
	right: '4px',
	background: 'rgba(0, 0, 0, 0.7)',
	color: 'accent.link',
	fontSize: '9px',
	fontWeight: 'bold',
	padding: '1px 4px',
	borderRadius: 'sm',
	zIndex: '1'
});

export const gamePrice = cva({
	base: {
		fontSize: 'sm',
		color: 'accent.price',
		fontWeight: 'bold'
	},
	variants: {
		type: {
			default: {},
			free: { color: 'accent.link' },
			sale: { color: 'accent.price' }
		}
	},
	defaultVariants: { type: 'default' }
});

export const listItem = sva({
	slots: ['root', 'img', 'rank', 'name', 'price', 'tag', 'hours', 'lastPlayed'],
	base: {
		root: {
			background: 'surface.card',
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			padding: '6px 8px',
			cursor: 'pointer',
			borderBottom: '1px solid token(colors.border.subtle)',
			transition: 'background 0.1s',
			_hover: { background: 'surface.cardHover' }
		},
		img: {
			width: '36px',
			height: '26px',
			borderRadius: 'sm',
			flexShrink: '0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '14px'
		},
		rank: {
			color: 'text.rank',
			fontSize: '13px',
			fontWeight: 'bold',
			minWidth: '18px',
			textAlign: 'center'
		},
		name: {
			flex: '1',
			fontSize: 'sm',
			color: 'text.primary',
			fontWeight: 'bold',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		price: {
			fontSize: 'sm',
			color: 'accent.price',
			fontWeight: 'bold',
			whiteSpace: 'nowrap'
		},
		tag: {
			fontSize: 'xs',
			color: 'text.muted',
			minWidth: '60px'
		},
		hours: {
			fontSize: 'sm',
			color: 'accent.link',
			fontWeight: 'bold',
			minWidth: '50px',
			textAlign: 'right'
		},
		lastPlayed: {
			fontSize: 'xs',
			color: 'text.dim',
			minWidth: '100px',
			textAlign: 'right'
		}
	}
});

export const playBtn = css({
	background: 'accent.dim',
	border: 'none',
	borderRadius: 'sm',
	padding: '3px 8px',
	color: 'text.primary',
	fontSize: '10px',
	fontWeight: 'bold',
	fontFamily: 'ui',
	cursor: 'pointer',
	whiteSpace: 'nowrap',
	transition: 'token(transitions.DEFAULT)',
	_hover: { background: 'accent' }
});

export const featuredBanner = sva({
	slots: [
		'root',
		'artGrid',
		'artCell',
		'overlay',
		'info',
		'tag',
		'title',
		'desc',
		'priceRow',
		'discount',
		'origPrice',
		'price',
		'dots',
		'dot'
	],
	base: {
		root: {
			position: 'relative',
			height: '190px',
			background: 'linear-gradient(135deg, #0d1b0a 0%, #1a3a0f 50%, #0a1208 100%)',
			overflow: 'hidden',
			cursor: 'pointer',
			_hover: { filter: 'brightness(1.05)' }
		},
		artGrid: {
			position: 'absolute',
			right: '0',
			top: '0',
			bottom: '0',
			width: '55%',
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gap: '2px',
			padding: '2px'
		},
		artCell: {
			border: '1px solid rgba(117, 176, 34, 0.1)'
		},
		overlay: {
			position: 'absolute',
			inset: '0',
			background:
				'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)'
		},
		info: {
			position: 'absolute',
			left: '0',
			top: '0',
			bottom: '0',
			width: '50%',
			padding: '20px 18px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end'
		},
		tag: {
			background: 'accent.dim',
			color: 'text.primary',
			fontSize: 'xs',
			fontWeight: 'bold',
			padding: '2px 8px',
			borderRadius: 'sm',
			display: 'inline-block',
			marginBottom: '8px',
			letterSpacing: '1px',
			textTransform: 'uppercase'
		},
		title: {
			fontSize: '22px',
			fontWeight: 'bold',
			color: 'text.bright',
			textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)',
			lineHeight: '1.1',
			marginBottom: '8px'
		},
		desc: {
			fontSize: 'sm',
			color: 'text.secondary',
			lineHeight: '1.5',
			marginBottom: '12px'
		},
		priceRow: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px'
		},
		discount: {
			background: 'accent.dim',
			color: 'accent.price',
			fontSize: '13px',
			fontWeight: 'bold',
			padding: '3px 6px',
			borderRadius: 'sm'
		},
		origPrice: {
			textDecoration: 'line-through',
			color: 'text.muted',
			fontSize: 'sm'
		},
		price: {
			color: 'accent.price',
			fontSize: '15px',
			fontWeight: 'bold'
		},
		dots: {
			position: 'absolute',
			right: '14px',
			top: '14px',
			display: 'flex',
			gap: '6px'
		},
		dot: {
			width: '8px',
			height: '8px',
			borderRadius: 'full',
			background: 'accent.deep',
			cursor: 'pointer'
		}
	}
});

export const dotActive = css({ background: 'accent' });

export const activityItem = sva({
	slots: [
		'root',
		'iconCol',
		'typeIcon',
		'avatar',
		'body',
		'line',
		'user',
		'action',
		'target',
		'detail',
		'time'
	],
	base: {
		root: {
			display: 'flex',
			alignItems: 'flex-start',
			gap: '8px',
			padding: '8px 12px',
			borderBottom: '1px solid token(colors.border.subtle)',
			cursor: 'pointer',
			transition: 'background 0.1s',
			_hover: { background: 'surface.cardHover' }
		},
		iconCol: {
			width: '16px',
			flexShrink: '0',
			paddingTop: '1px'
		},
		typeIcon: { fontSize: '12px' },
		avatar: {
			width: '24px',
			height: '24px',
			borderRadius: 'sm',
			flexShrink: '0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: 'xs',
			fontWeight: 'bold',
			color: 'text.bright'
		},
		body: { flex: '1', minWidth: '0' },
		line: { fontSize: 'sm', lineHeight: '1.4' },
		user: {
			color: 'accent.link',
			fontWeight: 'bold',
			cursor: 'pointer',
			_hover: { textDecoration: 'underline' }
		},
		action: { color: 'text.secondary' },
		target: {
			color: 'text.primary',
			fontWeight: 'bold',
			cursor: 'pointer',
			_hover: { textDecoration: 'underline' }
		},
		detail: {
			fontSize: 'xs',
			color: 'text.muted',
			marginTop: '2px',
			fontStyle: 'italic',
			lineHeight: '1.3'
		},
		time: {
			fontSize: 'xs',
			color: 'text.dim',
			whiteSpace: 'nowrap',
			paddingTop: '1px'
		}
	}
});

export const communityHeader = sva({
	slots: ['root', 'title', 'subtitle'],
	base: {
		root: {
			background: 'surface.card',
			padding: '10px 14px',
			borderBottom: '1px solid token(colors.border)'
		},
		title: {
			color: 'text.primary',
			fontSize: '14px',
			fontWeight: 'bold'
		},
		subtitle: {
			color: 'text.muted',
			fontSize: 'xs',
			marginTop: '2px'
		}
	}
});

export const discussionItem = sva({
	slots: ['root', 'game', 'title', 'replies', 'views'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			padding: '6px 12px',
			borderBottom: '1px solid token(colors.border.subtle)',
			cursor: 'pointer',
			transition: 'background 0.1s',
			_hover: { background: 'surface.cardHover' }
		},
		game: {
			fontSize: 'xs',
			color: 'accent.link',
			minWidth: '120px'
		},
		title: {
			flex: '1',
			fontSize: 'sm',
			color: 'text.primary',
			fontWeight: 'bold',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		replies: {
			fontSize: 'xs',
			color: 'text.muted',
			minWidth: '70px',
			textAlign: 'right'
		},
		views: {
			fontSize: 'xs',
			color: 'text.dim',
			minWidth: '70px',
			textAlign: 'right'
		}
	}
});

export const browseBar = sva({
	slots: ['root', 'tab', 'count'],
	base: {
		root: {
			background: 'surface.base',
			padding: '6px 12px 0',
			display: 'flex',
			alignItems: 'flex-end',
			gap: '2px'
		},
		tab: {
			padding: '4px 10px',
			fontSize: 'xs',
			color: 'text.secondary',
			border: '1px solid token(colors.border.light)',
			borderBottom: 'none',
			borderRadius: 'token(radii) token(radii) 0 0',
			cursor: 'pointer',
			background: 'surface.card',
			transition: 'token(transitions.DEFAULT)',
			_selected: {
				color: 'text.primary',
				background: 'surface.card',
				borderColor: '#2a4a50'
			}
		},
		count: {
			marginLeft: 'auto',
			fontSize: 'xs',
			color: 'text.dim',
			paddingBottom: '4px'
		}
	}
});

export const emptyState = css({
	padding: '30px',
	textAlign: 'center',
	color: 'text.muted',
	fontSize: 'sm'
});
