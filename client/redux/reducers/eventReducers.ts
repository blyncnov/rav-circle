import { CREATE_NEW_EVENT, DELETE_EVENT, EDIT_EVENT } from "../actions/action";

const InitialState = {
  events: [
    {
      id: 1,
      event_name: "Prom date",
      event_description: "A prome Date Organized by Colphyssa Excos",
      total_invites: 100,
      event_url: "http://revel.com/84hcdh4",
      event_start: new Date(),
      event_end: new Date(),
    },
    {
      id: 2,
      event_name: "Date Night",
      event_description: "A prome Date Organized by Colphyssa Excos",
      total_invites: 100,
      event_url: "http://revel.com/84hcdh4",
      event_start: new Date(),
      event_end: new Date(),
    },
  ],
  past_events: [
    {
      id: 1,
      event_name: "Prom date",
      event_description: "A prome Date Organized by Colphyssa Excos",
      total_invites: 100,
      event_url: "http://revel.com/84hcdh4",
      event_start: new Date(),
      event_end: new Date(),
    },
  ],
  isEditing: false,
};

export const modeReducers = (state = InitialState, action: any) => {
  switch (action.type) {
    case CREATE_NEW_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };

    case EDIT_EVENT:
      return {
        ...state,
        isEditing: !state.isEditing,
        // events: state.events.filter((event) => {
        //   if (event.id === action.payload) {
        //     console.log(state);
        //     return state;
        //   }
        // }),
      };

    default:
      return state;
  }
};

export default modeReducers;
