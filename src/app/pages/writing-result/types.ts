export type UserState = 'paid' | 'free' | 'unverified' | 'no-goal';

export const USER_STATE_LABELS: Record<UserState, string> = {
  paid: 'Paid User',
  free: 'Free User (partial)',
  unverified: 'Unverified User',
  'no-goal': 'User without Goal',
};
