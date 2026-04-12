import { WritingResultContent } from '../../pages/WritingTestResultPage';

/**
 * Results page for users who have not verified their email.
 * Score gauges and recommendation cards are blurred with a centered
 * "Verify your account" modal overlay.
 */
export function UnverifiedUserView() {
  return <WritingResultContent userState="unverified" />;
}
