// Seed: 7710 — Windows 10 Action Center

import type { IconComponent } from '$lib/icons/types';
import {
	Airplane,
	BatterySaver,
	Bluetooth,
	Calendar,
	CheckMark,
	Mail,
	MapPin,
	QuietHours,
	Settings,
	TabletMode,
	Wifi
} from '$lib/icons/windows10';

export type Notif = {
	id: string;
	group: string;
	groupColor: string;
	groupIcon: IconComponent;
	title: string;
	body: string;
	time: string;
};

export const initialNotifications: Notif[] = [
	{
		id: 'n1',
		group: 'Mail',
		groupColor: '#0078D7',
		groupIcon: Mail,
		title: 'Alex Turner',
		body: 'Re: Q3 Design Review — Updated slides are attached, let me know what you think.',
		time: '3:42 PM'
	},
	{
		id: 'n2',
		group: 'Mail',
		groupColor: '#0078D7',
		groupIcon: Mail,
		title: 'Microsoft Outlook',
		body: 'You have a meeting in 15 minutes: Weekly Sync with Design Team',
		time: '1:15 PM'
	},
	{
		id: 'n3',
		group: 'Calendar',
		groupColor: '#E74856',
		groupIcon: Calendar,
		title: 'Reminder',
		body: 'Project deadline: UI Handoff — Today at 5:00 PM',
		time: '12:00 PM'
	},
	{
		id: 'n4',
		group: 'Windows Update',
		groupColor: '#107C10',
		groupIcon: CheckMark,
		title: 'Updates available',
		body: 'Cumulative Update for Windows 10 Version 1607 is ready to install.',
		time: '9:00 AM'
	}
];

type QaTile = { label: string; icon: IconComponent; flipX?: boolean };

export const qaTiles: QaTile[] = [
	{ label: 'Wi-Fi', icon: Wifi },
	{ label: 'Bluetooth', icon: Bluetooth },
	{ label: 'Airplane mode', icon: Airplane },
	{ label: 'Quiet hours', icon: QuietHours, flipX: true },
	{ label: 'Location', icon: MapPin },
	{ label: 'Battery saver', icon: BatterySaver },
	{ label: 'Tablet mode', icon: TabletMode },
	{ label: 'All settings', icon: Settings }
];
