import { WritingResultContent } from '../../pages/WritingTestResultPage';

/**
 * Partial results page for free (non-subscribed) users.
 * Scores and criteria cards are visible; detailed analysis tabs are locked/blurred
 * with an upgrade CTA overlay.
 */
export function FreeUserView() {
  return <WritingResultContent userState="free" />;
}
