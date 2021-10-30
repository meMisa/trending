import { InboxesItems } from '../types/inbox';

export enum InboxAction {
  INBOX_SELECT_ROW = '@@inbox/INBOX_SELECT_ROW',
}

export type Action = {
  type: InboxAction.INBOX_SELECT_ROW;
  payload: InboxesItems;
};

export function selectInboxRow(payload: InboxesItems): Action {
  return { type: InboxAction.INBOX_SELECT_ROW, payload };
}
