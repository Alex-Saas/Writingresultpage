import { useState } from 'react';
import { UserState } from '../components/writing-result/types';
import { UserStateSwitcher } from '../components/writing-result/UserStateSwitcher';
import { PaidUserView } from '../components/writing-result/PaidUserView';
import { FreeUserView } from '../components/writing-result/FreeUserView';
import { UnverifiedUserView } from '../components/writing-result/UnverifiedUserView';
import { NoGoalUserView } from '../components/writing-result/NoGoalUserView';

/**
 * Main Writing Result page.
 *
 * Manages which user-state view is active and renders the appropriate
 * reusable view component alongside the developer state-switcher.
 *
 * Default state: 'free' (Free User / partial result).
 */
export function WritingResultPage() {
  const [userState, setUserState] = useState<UserState>('free');

  return (
    <>
      {userState === 'paid' && <PaidUserView />}
      {userState === 'free' && <FreeUserView />}
      {userState === 'unverified' && <UnverifiedUserView />}
      {userState === 'no-goal' && <NoGoalUserView />}

      <UserStateSwitcher value={userState} onChange={setUserState} />
    </>
  );
}
