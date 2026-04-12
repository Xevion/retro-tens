// Seed: 7830 — Windows 10 File Explorer
import { faker } from '@faker-js/faker';

faker.seed(7830);

export type FileEntry = {
	name: string;
	type: 'folder' | 'file';
	ext?: string;
	size?: string;
	modified: string;
	icon: 'folder' | 'document' | 'image' | 'code' | 'archive' | 'executable';
};

export type FolderNode = {
	name: string;
	path: string;
	children?: FolderNode[];
};

const extensions = [
	'.txt',
	'.docx',
	'.pdf',
	'.xlsx',
	'.pptx',
	'.png',
	'.jpg',
	'.zip',
	'.exe',
	'.ts',
	'.js',
	'.html',
	'.css'
];

function iconForExt(ext: string): FileEntry['icon'] {
	if (['.png', '.jpg', '.bmp', '.gif'].includes(ext)) return 'image';
	if (['.ts', '.js', '.html', '.css', '.json'].includes(ext)) return 'code';
	if (['.zip', '.rar', '.7z'].includes(ext)) return 'archive';
	if (['.exe', '.msi'].includes(ext)) return 'executable';
	return 'document';
}

function formatSize(): string {
	const kb = faker.number.int({ min: 1, max: 50000 });
	if (kb > 1024) return `${(kb / 1024).toFixed(1)} MB`;
	return `${kb} KB`;
}

function formatDate(): string {
	const d = faker.date.between({ from: '2019-01-01', to: '2021-06-30' });
	return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours() % 12 || 12}:${String(d.getMinutes()).padStart(2, '0')} ${d.getHours() >= 12 ? 'PM' : 'AM'}`;
}

function generateFiles(count: number, folderCount: number): FileEntry[] {
	const entries: FileEntry[] = [];

	for (let i = 0; i < folderCount; i++) {
		entries.push({
			name: faker.system.directoryPath().split('/').pop() || faker.word.noun(),
			type: 'folder',
			modified: formatDate(),
			icon: 'folder'
		});
	}

	for (let i = 0; i < count; i++) {
		const ext = faker.helpers.arrayElement(extensions);
		entries.push({
			name: faker.system.commonFileName(ext.replace('.', '')),
			type: 'file',
			ext,
			size: formatSize(),
			modified: formatDate(),
			icon: iconForExt(ext)
		});
	}

	return entries;
}

export const folderTree: FolderNode[] = [
	{
		name: 'Quick Access',
		path: 'Quick Access',
		children: [
			{ name: 'Desktop', path: 'C:\\Users\\User\\Desktop' },
			{ name: 'Downloads', path: 'C:\\Users\\User\\Downloads' },
			{ name: 'Documents', path: 'C:\\Users\\User\\Documents' },
			{ name: 'Pictures', path: 'C:\\Users\\User\\Pictures' }
		]
	},
	{
		name: 'This PC',
		path: 'This PC',
		children: [
			{ name: 'Desktop', path: 'C:\\Users\\User\\Desktop' },
			{ name: 'Documents', path: 'C:\\Users\\User\\Documents' },
			{ name: 'Downloads', path: 'C:\\Users\\User\\Downloads' },
			{ name: 'Music', path: 'C:\\Users\\User\\Music' },
			{ name: 'Pictures', path: 'C:\\Users\\User\\Pictures' },
			{ name: 'Videos', path: 'C:\\Users\\User\\Videos' },
			{
				name: 'Local Disk (C:)',
				path: 'C:\\',
				children: [
					{ name: 'Program Files', path: 'C:\\Program Files' },
					{ name: 'Program Files (x86)', path: 'C:\\Program Files (x86)' },
					{ name: 'Users', path: 'C:\\Users' },
					{ name: 'Windows', path: 'C:\\Windows' }
				]
			}
		]
	},
	{ name: 'Network', path: 'Network' }
];

const documentsFiles = generateFiles(12, 3);
const downloadsFiles = generateFiles(8, 1);
const desktopFiles = generateFiles(5, 2);
const picturesFiles = generateFiles(6, 2);

export const filesByPath: Record<string, FileEntry[]> = {
	'C:\\Users\\User\\Documents': documentsFiles,
	'C:\\Users\\User\\Downloads': downloadsFiles,
	'C:\\Users\\User\\Desktop': desktopFiles,
	'C:\\Users\\User\\Pictures': picturesFiles,
	'Quick Access': documentsFiles.slice(0, 6),
	'This PC': [],
	Network: []
};
