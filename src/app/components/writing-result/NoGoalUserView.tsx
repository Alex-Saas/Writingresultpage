import { WritingResultContent } from '../../pages/WritingTestResultPage';

/**
 * Results page for users who have not set a target score/goal.
 * The goal-progress card is replaced with a "Set your goal" banner,
 * and a modal prompts the user to configure their target.
 */
export function NoGoalUserView() {
  return <WritingResultContent userState="no-goal" />;
}
