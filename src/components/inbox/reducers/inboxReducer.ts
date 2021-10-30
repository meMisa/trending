// actions
import { Action, InboxAction } from '../actions/inboxActions';
import { InboxesItems } from '../types/inbox';

export interface State {
  selectedRow: InboxesItems | null;
  showDetails: boolean;
  inboxes: InboxesItems[];
}

// temperory state
export const initialState: State = {
  selectedRow: null,
  showDetails: false,
  inboxes: [
    {
      id: '#195515',
      title: 'I’ve got a problem with my invoice ',
      description: `I’ve got a problem with my invoice\n Can you help me?\n \n dear\n Christina`,
      steps: ['mail', 'comment'],
      status: 'open',
      email: 'max.stalham12@gmail.com',
      name: 'Max Stålhammar',
      userAvatar: '',
      phoneNumber: '+46 706 933 921',
      interactions: 2,
      interactionsType: 'mail',
      supportType: 'Support',
      closedStatus: '',
      actions: [
        {
          key: 'viewBy',
          text: 'test test',
          src:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          tag: true,
        },
        { key: 'replyIn', text: '2h', src: '', tag: false, replyTimeUnit: 'h' },
      ],
      date: new Date().getTime(),
      replyTime: '2h',
      customerJourney: [
        { id: '#195515', date: '21 feb', status: 'Closed', step: 'comment' },
        {
          id: '#195471',
          date: '21 dec',
          status: 'Closed',
          step: 'comment',
        },
        { id: '#958229', date: '20 dec', status: 'Closed', step: 'on-call' },
      ],
      conversations: [
        {
          id: '1',
          title: 'Re: Re: I’ve got a problem with my invoice',
          description:
            '<span>But please can’t you help me with my problem?</span>\n' +
            '\n' +
            '\n' +
            '<strong>Regards</strong>\n' +
            'Max',
          date: new Date().getTime(),
          email: 'max.stalham12@gmail.com',
          username: 'Max Stålhammar',
          avatar: '',
          step: 'mail',
          supportEmail: 'support-general@atlas.io',
          supportUserName: 'Support General',
        },
        {
          id: '2',
          title: 'Re: I’ve got a problem with my invoice',
          description:
            'Hello Max!\n' +
            '\n' +
            'I’m sorry I can’t see any problem with invoices on your account. Can you please provde a little more information?',
          date: new Date().getTime(),
          email: '',
          username: 'Andy pan',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          step: 'mail',
          supportEmail: 'max.stalham12@gmail.com',
          supportUserName: 'Max Stålhammar',
        },
      ],
    },
    {
      id: '#150563',
      title: 'Lotta Andersen ',
      description: `I’ve got a problem with my invoice\n Can you help me?\n \n dear\n Christina`,
      steps: ['comment'],
      status: 'closed',
      email: 'min.xyz@gmail.com',
      name: 'Min xxxxx',
      userAvatar:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      phoneNumber: '+46 123 456 789',
      interactions: 0,
      interactionsType: 'none',
      supportType: 'Finance',
      closedStatus: 'Deposit',
      actions: [],
      date: new Date().getTime(),
      replyTime: '',
      customerJourney: [
        { id: '#195515', date: '21 feb', status: 'Closed', step: 'comment' },
        { id: '#958229', date: '20 dec', status: 'Closed', step: 'call' },
      ],
      conversations: [],
    },
    {
      id: '#170772',
      title: 'some another problem',
      description: `blah blah blah`,
      steps: ['call'],
      status: 'open',
      email: 'test@yahoo.com',
      name: 'Test Test',
      userAvatar: '',
      phoneNumber: '098 912 333 444 55',
      interactions: 1,
      interactionsType: 'phone',
      supportType: '2nd line Support',
      closedStatus: '',
      actions: [
        {
          key: 'viewBy',
          text: 'M Q',
          src:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          tag: true,
        },
        {
          key: 'replyIn',
          text: '30m',
          src: '',
          tag: false,
          replyTimeUnit: 'm',
        },
      ],
      date: new Date().getTime(),
      replyTime: '30m',
      customerJourney: [],
      conversations: [],
    },
    {
      id: '#011166',
      title: 'no problem',
      description: `foo bar`,
      steps: ['on-call', 'on-call'],
      status: 'closed',
      email: 'q.misa@yahoo.com',
      name: 'M Q',
      userAvatar: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      phoneNumber: '098 912 680 11 04',
      interactions: 2,
      interactionsType: 'phone',
      supportType: '2nd line Support',
      closedStatus: 'Closed-unmanaged',
      actions: [],
      date: new Date().getTime(),
      replyTime: '',
      customerJourney: [],
      conversations: [],
    },
  ],
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case InboxAction.INBOX_SELECT_ROW:
      return {
        ...state,
        selectedRow: action.payload,
        showDetails:
          state.showDetails && state.selectedRow.id === action.payload.id
            ? !state.showDetails
            : true,
      };

    default: {
      return state;
    }
  }
}
