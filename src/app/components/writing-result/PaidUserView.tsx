import { WritingResultContent } from '../../pages/WritingTestResultPage';

/**
 * Full results page for paid/subscribed users.
 * All sections are visible with no restrictions.
 */
export function PaidUserView() {
  return <WritingResultContent userState="paid" />;
}
