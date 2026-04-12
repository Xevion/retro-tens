/** Shared types for the steam-modern era */

/** User online/offline status used by StatusBadge, dashboard, and user management */
export type UserStatus = 'online' | 'offline' | 'away' | 'banned';

/** Progress bar / health bar color variants — maps to progressBar SVA color variants */
export type ProgressColor = 'default' | 'green' | 'red' | 'gold';

/** Direction indicator for metric deltas */
export type DeltaDirection = 'up' | 'down';

/** Base shape for metric/stat display cards */
export interface MetricData {
	label: string;
	value: string;
	delta: string;
	direction: DeltaDirection;
}
