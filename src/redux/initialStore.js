import {combineReducers, createStore} from "redux";
import {chatReducer} from "./chatReducer/chatReducer";
import {messageReducer} from "./messagesReducer/messageReducer";


const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

export const store = createStore(reducer)