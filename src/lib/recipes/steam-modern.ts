/**
 * Shared PandaCSS recipes for the steam-modern era.
 * Import these instead of duplicating css() calls across pages.
 */
import { css, cva, sva } from 'styled-system/css';
import { grid } from 'styled-system/patterns';

export const btn = cva({
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		gap: '6px',
		/* sourced: .btn_small font-size/line-height/padding */
		padding: '0 15px',
		fontSize: '12px',
		lineHeight: '26px',
		fontWeight: '400',
		/* sourced: all buttons border-radius: 2px */
		borderRadius: 'sm',
		cursor: 'pointer',
		border: 'none',
		transition: 'token(transitions.DEFAULT)',
		fontFamily: 'ui'
	},
	variants: {
		visual: {
			primary: {
				/* sourced: .btnv6_blue_blue_innerfade */
				background: 'linear-gradient(180deg, rgba(47, 137, 188, 1), rgba(23, 67, 92, 1))',
				color: '#A4D7F5',
				_hover: {
					color: '#fff',
					background: 'linear-gradient(180deg, rgba(102, 192, 244, 1), rgba(47, 137, 188, 1))'
				}
			},
			secondary: {
				/* sourced: .btnv6_white_transparent */
				background: 'transparent',
				color: '#fff',
				border: '1px solid rgba(255, 255, 255, 0.4)',
				_hover: {
					border: '1px solid rgba(255, 255, 255, 1)'
				}
			},
			green: {
				/* sourced: .btnv6_green_white_innerfade */
				background: 'linear-gradient(180deg, rgba(121, 153, 5, 1), rgba(83, 105, 4, 1))',
				color: '#D2E885',
				_hover: {
					color: '#fff',
					background: 'linear-gradient(180deg, rgba(164, 208, 7, 1), rgba(107, 135, 5, 1))'
				}
			}
		}
	},
	defaultVariants: { visual: 'secondary' }
});

export const badge = cva({
	base: {
		display: 'inline-block',
		padding: '2px 7px',
		fontSize: '10px',
		fontWeight: '700',
		borderRadius: 'DEFAULT',
		textTransform: 'uppercase',
		letterSpacing: '0.04em',
		whiteSpace: 'nowrap'
	},
	variants: {
		color: {
			green: {
				background: 'rgba(79, 168, 50, 0.2)',
				color: 'accent.greenText',
				border: '1px solid rgba(79, 168, 50, 0.3)'
			},
			red: {
				background: 'rgba(201, 64, 64, 0.2)',
				color: 'accent.redText',
				border: '1px solid rgba(201, 64, 64, 0.3)'
			},
			yellow: {
				background: 'rgba(213, 165, 27, 0.2)',
				color: 'accent.goldText',
				border: '1px solid rgba(213, 165, 27, 0.3)'
			},
			blue: {
				background: 'rgba(102, 192, 244, 0.15)',
				color: 'accent',
				border: '1px solid rgba(102, 192, 244, 0.3)'
			},
			gray: {
				background: 'rgba(85, 107, 125, 0.2)',
				color: 'text.muted',
				border: '1px solid rgba(85, 107, 125, 0.3)'
			}
		}
	}
});

export const panel = sva({
	slots: ['root', 'header', 'body'],
	base: {
		root: {
			background: 'surface.panel',
			border: '1px solid token(colors.border)',
			borderRadius: 'DEFAULT'
		},
		header: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '10px 14px',
			/* sourced: styled after store sidebar section headers */
			background: 'linear-gradient(90deg, rgba(42, 71, 94, 0.6) 0%, rgba(0, 0, 0, 0.15) 100%)',
			borderBottom: '1px solid token(colors.border)',
			fontSize: 'sm',
			fontWeight: '700',
			textTransform: 'uppercase',
			letterSpacing: '0.08em',
			color: 'text.secondary'
		},
		body: {
			padding: '14px'
		}
	}
});

export const dataTable = css({
	width: '100%',
	borderCollapse: 'collapse',
	/* sourced: body.v6 font-size: 12px */
	fontSize: '12px',
	fontFamily: 'ui',
	'& th': {
		textAlign: 'left',
		padding: '8px 12px',
		fontSize: '10px',
		fontWeight: '700',
		letterSpacing: '0.1em',
		textTransform: 'uppercase',
		/* sourced: --gpSystemLightGrey */
		color: '#8B929A',
		borderBottom: '1px solid token(colors.border)',
		/* sourced: .tab_item background */
		background: 'rgba(0, 0, 0, 0.2)',
		whiteSpace: 'nowrap'
	},
	'& td': {
		padding: '7px 12px',
		/* sourced: .search_suggest .match border-top */
		borderBottom: '1px solid #13242e',
		/* sourced: body.v6 color */
		color: '#c6d4df'
	},
	'& tr:last-child td': {
		borderBottom: 'none'
	},
	'& tbody tr:hover': {
		/* sourced: .search_suggest .match:hover background */
		background: '#212d3d'
	}
});

export const searchBar = sva({
	slots: ['root', 'wrapper', 'icon', 'input'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			padding: '12px 16px',
			background: 'rgba(0, 0, 0, 0.15)',
			borderBottom: '1px solid token(colors.border)',
			flexWrap: 'wrap'
		},
		wrapper: {
			position: 'relative',
			display: 'flex',
			alignItems: 'center'
		},
		icon: {
			position: 'absolute',
			left: '9px',
			color: 'text.muted',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center'
		},
		input: {
			flex: '1',
			minWidth: '200px',
			/* sourced: .searchbox background-color */
			background: 'surface.input',
			/* sourced: .searchbox border */
			border: '1px solid rgba(0, 0, 0, 0.3)',
			/* sourced: .searchbox input color */
			color: '#eeeeee',
			padding: '5px 10px 5px 30px',
			fontSize: 'sm',
			borderRadius: 'sm',
			fontFamily: 'ui',
			outline: 'none',
			fontStyle: 'italic',
			_focus: {
				fontStyle: 'normal',
				borderColor: 'token(colors.accent.dim)'
			},
			'&::placeholder': {
				/* sourced: .searchbox input.default color */
				color: 'text.placeholder'
			}
		}
	}
});

export const actionLink = cva({
	base: {
		color: 'accent',
		fontSize: '11px',
		cursor: 'pointer',
		marginRight: '8px',
		_hover: {
			textDecoration: 'underline'
		}
	},
	variants: {
		color: {
			red: { color: 'accent.redText' },
			green: { color: 'accent.green' }
		}
	}
});

export const userAvatar = cva({
	base: {
		width: '24px',
		height: '24px',
		borderRadius: 'DEFAULT',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '9px',
		fontWeight: '700',
		color: '#fff',
		verticalAlign: 'middle',
		marginRight: '6px'
	},
	variants: {
		visual: {
			user: {
				background:
					'linear-gradient(135deg, token(colors.surface.avatarStart), token(colors.surface.avatarEnd))'
			},
			app: {
				background:
					'linear-gradient(135deg, token(colors.surface.appAvatarStart), token(colors.surface.appAvatarEnd))',
				border: '1px solid token(colors.border)',
				fontSize: '12px',
				fontWeight: '400'
			}
		}
	},
	defaultVariants: { visual: 'user' }
});

export const filterLabel = css({
	color: 'text.muted',
	fontSize: '11px',
	textTransform: 'uppercase',
	letterSpacing: '0.08em'
});

export const progressBar = sva({
	slots: ['track', 'fill'],
	base: {
		track: {
			height: '6px',
			background: 'rgba(0, 0, 0, 0.3)',
			borderRadius: '1px',
			overflow: 'hidden'
		},
		fill: {
			height: '100%',
			background: 'linear-gradient(90deg, token(colors.accent.dim), token(colors.accent))',
			borderRadius: '1px',
			transition: 'width 1s ease'
		}
	},
	variants: {
		color: {
			green: {
				fill: {
					background:
						'linear-gradient(90deg, token(colors.accent.greenDark), token(colors.accent.green))'
				}
			},
			red: {
				fill: {
					background:
						'linear-gradient(90deg, token(colors.accent.redDark), token(colors.accent.red))'
				}
			},
			gold: {
				fill: {
					background:
						'linear-gradient(90deg, token(colors.accent.goldDark), token(colors.accent.gold))'
				}
			}
		}
	}
});

export const twoCol = css({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '16px',
	margin: '16px 20px'
});

export const pageHeader = sva({
	slots: ['root', 'title', 'subtitle', 'actions'],
	base: {
		root: {
			/* sourced: styled after --gpGradient-StoreBackground (lighter for headers) */
			background: 'linear-gradient(180deg, rgba(42, 71, 94, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%)',
			borderBottom: '1px solid token(colors.divider)',
			padding: '16px 24px 14px',
			display: 'flex',
			alignItems: 'flex-end',
			justifyContent: 'space-between'
		},
		title: {
			/* sourced: body.v6 h2 font-family/weight, headingLg size */
			fontSize: 'headingLg',
			fontWeight: '300',
			color: 'text.bright',
			letterSpacing: '0.02em',
			fontFamily: 'ui'
		},
		subtitle: {
			fontSize: 'sm',
			color: 'text.muted',
			marginTop: '2px'
		},
		actions: {
			display: 'flex',
			gap: '8px'
		}
	}
});

export const cellText = cva({
	base: {},
	variants: {
		tone: {
			secondary: { color: 'text.secondary' },
			muted: { color: 'text.muted', fontSize: '11px' },
			disabled: { color: 'text.disabled', fontSize: '11px' }
		}
	}
});

export const dataRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	padding: '7px 0',
	borderBottom: '1px solid token(colors.divider)',
	'&:last-child': { borderBottom: 'none' }
});

export const delta = cva({
	base: {
		marginTop: '4px',
		fontSize: '11px'
	},
	variants: {
		direction: {
			up: { color: 'accent.green' },
			down: { color: 'accent.red' }
		}
	}
});

export const metricCard = sva({
	slots: ['root', 'label', 'value', 'delta'],
	base: {
		root: {
			background: 'surface.panel'
		},
		label: {
			fontSize: '10px',
			textTransform: 'uppercase',
			letterSpacing: '0.1em',
			color: 'text.muted',
			fontWeight: '700',
			marginBottom: '6px'
		},
		value: {
			fontWeight: '300',
			color: 'text.bright',
			lineHeight: '1'
		},
		delta: {
			marginTop: '4px',
			fontSize: '11px'
		}
	},
	variants: {
		size: {
			sm: {
				root: { padding: '14px 16px' },
				value: { fontSize: '22px' }
			},
			lg: {
				root: { padding: '16px 20px', position: 'relative' },
				value: {
					fontSize: '26px',
					letterSpacing: '-0.02em',
					'& span': { fontSize: '14px', fontWeight: '400', color: 'text.secondary' }
				}
			}
		}
	},
	defaultVariants: { size: 'sm' }
});

export const entityName = css({ fontSize: '12.5px', fontWeight: '600' });
export const entityId = css({ color: 'text.muted', fontSize: '10px', paddingLeft: '32px' });

export const metricsGrid = (columns: number) =>
	grid({
		columns,
		gap: '1px',
		background: 'divider',
		borderBottom: '1px solid token(colors.divider)'
	});
