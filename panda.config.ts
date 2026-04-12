import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{js,ts,svelte}'],
	exclude: [],
	outdir: 'styled-system',

	staticCss: {
		themes: ['steamLegacy', 'steamModern', 'windows10']
	},

	themes: {
		steamLegacy: {
			tokens: {
				colors: {
					surface: {
						root: { value: '#1a1a1a' },
						base: { value: '#1b2426' },
						panel: { value: '#1e1e1e' },
						card: { value: '#1e2d2f' },
						cardHover: { value: '#243436' },
						elevated: { value: '#252525' },
						input: { value: '#111111' },
						sectionHead: { value: '#1a2729' },
						sidebar: { value: '#1e1e1e' },
						topBar: { value: '#252525' },
						titleBar: { value: '#1a1a1a' },
						footer: { value: '#171717' }
					},
					text: {
						bright: { value: '#ffffff' },
						primary: { value: '#c6d4df' },
						secondary: { value: '#8f98a0' },
						muted: { value: '#738895' },
						dim: { value: '#4a6a7a' },
						rank: { value: '#4a7010' }
					},
					accent: {
						DEFAULT: { value: '#75b022' },
						hover: { value: '#90ba3c' },
						dim: { value: '#4a7010' },
						deep: { value: '#3d5a1f' },
						glow: { value: 'rgba(117, 176, 34, 0.15)' },
						price: { value: '#acf24d' },
						link: { value: '#57cbde' },
						saleBg: { value: '#4a7010' }
					},
					status: {
						online: { value: '#57cbde' },
						ingame: { value: '#90ba3c' },
						away: { value: '#856c20' },
						offline: { value: '#555555' }
					},
					border: {
						DEFAULT: { value: '#0d0d0d' },
						subtle: { value: '#111111' },
						light: { value: '#2a3a3e' },
						accent: { value: '#4a7010' }
					}
				},
				radii: {
					DEFAULT: { value: '2px' },
					sm: { value: '1px' }
				},
				fonts: {
					ui: { value: 'Arial, Helvetica, sans-serif' }
				},
				fontSizes: {
					xs: { value: '10px' },
					sm: { value: '11px' },
					base: { value: '12px' },
					nav: { value: '12px' }
				},
				durations: {
					DEFAULT: { value: '0.1s' }
				},
				transitions: {
					DEFAULT: { value: 'all 0.1s ease' }
				}
			}
		},

		steamModern: {
			tokens: {
				colors: {
					surface: {
						root: { value: '#0e1219' },
						base: { value: '#171a21' },
						panel: { value: '#1b2838' },
						elevated: { value: '#2a475e' },
						card: { value: '#213347' },
						row: { value: '#1b2838' },
						rowAlt: { value: '#1e2d3f' },
						rowHover: { value: '#24405a' },
						input: { value: '#101922' },
						btnPrimary: { value: '#76b4d6' },
						btnPrimaryMid: { value: '#4a88aa' },
						btnPrimaryEnd: { value: '#3c7493' },
						btnPrimaryHover: { value: '#8ac4e4' },
						btnPrimaryHoverMid: { value: '#5a98ba' },
						btnPrimaryHoverEnd: { value: '#4c84a3' },
						btnSecondary: { value: '#5c7a8e' },
						btnSecondaryEnd: { value: '#3d5a6e' },
						btnSecondaryHover: { value: '#6c8a9e' },
						btnSecondaryHoverEnd: { value: '#4d6a7e' },
						header: { value: '#1b2838' },
						headerGradientEnd: { value: '#182636' },
						sidebar: { value: '#15202e' },
						tooltip: { value: '#c2c2c2' },
						chrome: { value: '#101318' },
						avatarStart: { value: '#2a6591' },
						avatarEnd: { value: '#1b4a6b' },
						appAvatarStart: { value: '#2a475e' },
						appAvatarEnd: { value: '#1b2838' }
					},
					text: {
						bright: { value: '#ffffff' },
						primary: { value: '#c7d5e0' },
						secondary: { value: '#8ba3b7' },
						muted: { value: '#556b7d' },
						disabled: { value: '#3a5068' }
					},
					accent: {
						DEFAULT: { value: '#66c0f4' },
						dim: { value: '#4a9fc8' },
						bright: { value: '#84cef8' },
						glow: { value: 'rgba(102, 192, 244, 0.15)' },
						gold: { value: '#d5a51b' },
						green: { value: '#4fa832' },
						red: { value: '#c94040' },
						orange: { value: '#d8832a' },
						purple: { value: '#9c72b5' },
						greenText: { value: '#6dcf4a' },
						redText: { value: '#e07070' },
						goldText: { value: '#e8c44e' },
						greenDark: { value: '#3c7022' },
						redDark: { value: '#843030' },
						goldDark: { value: '#8a6810' }
					},
					border: {
						DEFAULT: { value: '#2a475e' },
						light: { value: '#3c6080' },
						btnPrimary: { value: '#2a5f7e' }
					},
					divider: { value: '#1a2d40' }
				},
				radii: {
					DEFAULT: { value: '3px' },
					sm: { value: '2px' }
				},
				fonts: {
					ui: {
						value: '"Source Sans 3 Variable", "Source Sans 3", Arial, sans-serif'
					}
				},
				fontSizes: {
					xs: { value: '11px' },
					sm: { value: '12px' },
					base: { value: '13px' }
				},
				sizes: {
					navHeight: { value: '36px' },
					sidebarW: { value: '200px' }
				},
				durations: {
					DEFAULT: { value: '0.15s' },
					fast: { value: '0.1s' }
				},
				transitions: {
					DEFAULT: { value: 'all 0.15s ease' },
					fast: { value: 'all 0.1s ease' },
					color: { value: 'color 0.15s ease, background 0.15s ease' }
				}
			},
			semanticTokens: {
				colors: {
					layerchart: {
						surface100: { value: '#213347' },
						surface200: { value: '#1b2838' },
						surface300: { value: '#2a475e' },
						surfaceContent: { value: '#c7d5e0' }
					}
				}
			}
		},

		windows10: {
			tokens: {
				colors: {
					desktop: {
						bg: { value: '#2d7ab8' },
						gradientStart: { value: '#1a6eb0' },
						gradientEnd: { value: '#0f4e8a' }
					},
					surface: {
						base: { value: '#ffffff' },
						panel: { value: 'rgba(242, 242, 242, 0.97)' },
						elevated: { value: '#f5f5f5' },
						hover: { value: '#f5f5f5' },
						input: { value: '#ffffff' },
						ribbon: { value: '#f2f2f2' },
						sidebar: { value: '#f7f7f7' },
						statusBar: { value: '#f2f2f2' },
						card: { value: '#fafafa' },
						chip: { value: '#e3f0fb' },
						notifCard: { value: '#ffffff' },
						taskbar: { value: 'rgba(0, 0, 0, 0.78)' },
						taskbarHover: { value: 'rgba(255, 255, 255, 0.12)' },
						taskbarIconHover: { value: 'rgba(255, 255, 255, 0.1)' },
						taskbarActiveNotif: { value: 'rgba(0, 120, 215, 0.3)' },
						desktopIconHover: { value: 'rgba(255, 255, 255, 0.18)' },
						appTile: { value: 'rgba(255, 255, 255, 0.15)' },
						appTileHover: { value: 'rgba(255, 255, 255, 0.25)' },
						launcher: { value: 'rgba(255, 255, 255, 0.12)' },
						qa: { value: 'rgba(0, 0, 0, 0.07)' },
						qaHover: { value: 'rgba(0, 0, 0, 0.12)' },
						qaActive: { value: 'rgba(0, 120, 215, 0.18)' },
						qaActiveHover: { value: 'rgba(0, 120, 215, 0.26)' },
						qaArea: { value: 'rgba(235, 235, 235, 0.8)' }
					},
					text: {
						bright: { value: '#ffffff' },
						primary: { value: '#1a1a1a' },
						secondary: { value: '#444444' },
						muted: { value: '#666666' },
						disabled: { value: '#888888' },
						heading: { value: '#111111' },
						desktopIcon: { value: '#ffffff' },
						taskbar: { value: 'rgba(255, 255, 255, 0.85)' },
						taskbarBright: { value: 'rgba(255, 255, 255, 0.9)' },
						taskbarSubtle: { value: 'rgba(255, 255, 255, 0.75)' },
						taskbarMuted: { value: 'rgba(255, 255, 255, 0.5)' },
						taskbarDim: { value: 'rgba(255, 255, 255, 0.7)' }
					},
					accent: {
						DEFAULT: { value: '#0078d7' },
						hover: { value: '#106ebe' },
						dim: { value: '#005a9e' },
						glow: { value: 'rgba(0, 120, 215, 0.18)' },
						subtle: { value: 'rgba(0, 120, 215, 0.06)' },
						red: { value: '#e81123' },
						redSubtle: { value: '#fff0f0' },
						green: { value: '#107c10' }
					},
					border: {
						DEFAULT: { value: 'rgba(0, 0, 0, 0.08)' },
						medium: { value: 'rgba(0, 0, 0, 0.12)' },
						light: { value: '#e0e0e0' },
						input: { value: '#ababab' },
						inputHover: { value: '#767676' },
						chip: { value: '#b8d8f5' },
						launcher: { value: 'rgba(255, 255, 255, 0.2)' },
						window: { value: '#aaaaaa' },
						section: { value: '#e8e8e8' },
						dashed: { value: '#ababab' }
					},
					divider: { value: 'rgba(0, 0, 0, 0.07)' },
					shadow: {
						window: { value: 'rgba(0, 0, 0, 0.18)' },
						desktopIcon: { value: 'rgba(0, 0, 0, 0.6)' }
					}
				},
				radii: {
					DEFAULT: { value: '0px' }
				},
				fonts: {
					ui: {
						value: '"Segoe UI", system-ui, -apple-system, Arial, sans-serif'
					}
				},
				fontSizes: {
					xs: { value: '10.5px' },
					sm: { value: '11px' },
					base: { value: '12.5px' },
					md: { value: '13px' }
				},
				sizes: {
					taskbarHeight: { value: '40px' }
				},
				durations: {
					DEFAULT: { value: '0.12s' },
					fast: { value: '0.1s' }
				},
				transitions: {
					DEFAULT: { value: 'all 0.12s ease' },
					fast: { value: 'all 0.1s ease' }
				}
			}
		}
	},

	globalCss: {
		/* LayerChart surface tokens — injected globally so the Tailwind shim in app.css can reference them */
		':root': {
			'--color-surface-100': '#213347',
			'--color-surface-200': '#1b2838',
			'--color-surface-300': '#2a475e',
			'--color-surface-content': '#c7d5e0'
		}
	}
});
