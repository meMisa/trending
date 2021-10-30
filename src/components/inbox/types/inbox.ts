export enum StepTypes {
  MAIL = 'mail',
  COMMENT = 'comment',
  ON_CALL = 'on-call',
  CALL = 'call',
}

export interface InboxesItems {
  id: string;
  title: string;
  description: string;
  steps: string[];
  status: string;
  email: string;
  name: string;
  userAvatar?: string;
  phoneNumber?: string;
  interactions?: number;
  interactionsType?: string;
  supportType?: string;
  closedStatus?: string;
  actions: object[];
  customerJourney?: JourneyStepsTypes[];
  conversations?: Conversations[];
  date: number;
  replyTime: string;
}

export interface ActionProps {
  key: string;
  text: string;
  src?: string;
  tag: boolean;
  replyTimeUnit?: string;
}

export interface JourneyStepsTypes {
  id: string;
  step: string;
  date: string;
  status: string;
}

export interface Conversations {
  id: string;
  title: string;
  description: string;
  date: number;
  email?: string;
  username: string;
  avatar?: string;
  step: string;
  supportEmail: string;
  supportUserName: string;
}
