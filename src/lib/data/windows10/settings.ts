// Seed: 5512 — Windows 10 Settings app

export type SettingType = 'toggle' | 'select' | 'slider' | 'info';

export type SettingDef = {
	label: string;
	description?: string;
	type: SettingType;
	value: boolean | string | number;
	options?: string[];
	min?: number;
	max?: number;
};

export type SettingsCategory = {
	id: string;
	name: string;
	icon: string;
	settings: SettingDef[];
};

export const categories: SettingsCategory[] = [
	{
		id: 'system',
		name: 'System',
		icon: 'monitor',
		settings: [
			{
				label: 'Night light',
				description: 'Reduce blue light in the evening',
				type: 'toggle',
				value: false
			},
			{
				label: 'Display resolution',
				type: 'select',
				value: '1920 x 1080',
				options: ['1920 x 1080', '2560 x 1440', '3840 x 2160', '1366 x 768']
			},
			{
				label: 'Scale and layout',
				type: 'select',
				value: '100%',
				options: ['100%', '125%', '150%', '175%']
			},
			{ label: 'Brightness', type: 'slider', value: 75, min: 0, max: 100 },
			{
				label: 'Notifications & actions',
				description: 'Show notifications on the lock screen',
				type: 'toggle',
				value: true
			}
		]
	},
	{
		id: 'devices',
		name: 'Devices',
		icon: 'printer',
		settings: [
			{
				label: 'Bluetooth',
				description: 'Allow devices to find this PC',
				type: 'toggle',
				value: true
			},
			{
				label: 'Touchpad',
				description: 'Enable three-finger gestures',
				type: 'toggle',
				value: true
			},
			{
				label: 'Typing',
				description: 'Show text suggestions as I type',
				type: 'toggle',
				value: false
			},
			{
				label: 'AutoPlay',
				description: 'Use AutoPlay for all media and devices',
				type: 'toggle',
				value: true
			}
		]
	},
	{
		id: 'network',
		name: 'Network & Internet',
		icon: 'globe',
		settings: [
			{ label: 'Wi-Fi', description: 'Connected to NETGEAR-5G', type: 'toggle', value: true },
			{ label: 'Airplane mode', type: 'toggle', value: false },
			{
				label: 'Mobile hotspot',
				description: 'Share your internet connection',
				type: 'toggle',
				value: false
			},
			{ label: 'Data usage', type: 'info', value: '12.4 GB used this month' },
			{ label: 'Proxy', description: 'Use a proxy server', type: 'toggle', value: false }
		]
	},
	{
		id: 'personalization',
		name: 'Personalization',
		icon: 'palette',
		settings: [
			{
				label: 'Background',
				type: 'select',
				value: 'Picture',
				options: ['Picture', 'Solid color', 'Slideshow']
			},
			{
				label: 'Color',
				description: 'Choose your accent color',
				type: 'select',
				value: 'Default blue',
				options: ['Default blue', 'Dark blue', 'Teal', 'Green', 'Orange']
			},
			{
				label: 'Lock screen',
				type: 'select',
				value: 'Windows spotlight',
				options: ['Windows spotlight', 'Picture', 'Slideshow']
			},
			{ label: 'Themes', type: 'info', value: 'Windows (default)' },
			{ label: 'Show accent color on title bars', type: 'toggle', value: true }
		]
	},
	{
		id: 'apps',
		name: 'Apps',
		icon: 'package',
		settings: [
			{
				label: 'Installing apps',
				type: 'select',
				value: 'Anywhere',
				options: ['Anywhere', 'Prefer Microsoft Store', 'Microsoft Store only']
			},
			{ label: 'Default apps', type: 'info', value: 'Web: Edge · Email: Outlook · Maps: Maps' },
			{
				label: 'Offline maps',
				description: 'Download maps for offline use',
				type: 'toggle',
				value: false
			},
			{
				label: 'Apps for websites',
				description: 'Open links with compatible apps',
				type: 'toggle',
				value: true
			}
		]
	},
	{
		id: 'privacy',
		name: 'Privacy',
		icon: 'lock',
		settings: [
			{
				label: 'Location',
				description: 'Allow apps to access your location',
				type: 'toggle',
				value: true
			},
			{
				label: 'Camera',
				description: 'Allow apps to access your camera',
				type: 'toggle',
				value: true
			},
			{
				label: 'Microphone',
				description: 'Allow apps to access your microphone',
				type: 'toggle',
				value: true
			},
			{
				label: 'Diagnostics & feedback',
				type: 'select',
				value: 'Required',
				options: ['Required', 'Optional']
			},
			{
				label: 'Activity history',
				description: 'Store my activity history on this device',
				type: 'toggle',
				value: false
			}
		]
	},
	{
		id: 'update',
		name: 'Update & Security',
		icon: 'refresh-cw',
		settings: [
			{ label: 'Windows Update', type: 'info', value: 'Your device is up to date' },
			{
				label: 'Active hours',
				type: 'select',
				value: '8:00 AM - 5:00 PM',
				options: ['8:00 AM - 5:00 PM', '9:00 AM - 6:00 PM', '7:00 AM - 11:00 PM']
			},
			{
				label: 'Delivery optimization',
				description: 'Allow downloads from other PCs',
				type: 'toggle',
				value: true
			},
			{ label: 'Windows Security', type: 'info', value: 'No actions needed' },
			{
				label: 'Backup',
				description: 'Automatically back up my files',
				type: 'toggle',
				value: false
			}
		]
	}
];
