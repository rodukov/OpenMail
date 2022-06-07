import { createStore } from 'vuex'
import axios from 'axios'
import {AxiosResponse} from 'axios';

export default createStore({
  state: {
    emails: [],
    window_with_emails: false,
    inbox: [],
    readletter: [],
    readshow: false,
    email: localStorage.email
  },
  mutations: {
    updateEmails(state, emails) { state.emails = emails },
    updateWindow(state, new_state) { state.window_with_emails = new_state },
    updateInbox(state, inbox_data) { state.inbox = inbox_data },
    updateReadLetter(state, new_read_letter) { state.readletter = new_read_letter },
    updateReadShow(state, show) { state.readshow = show }
  },
  actions: {
    register_mail: async function(ctx) {
      await axios.get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10')
        .then((response: AxiosResponse) => {
            console.log(response.data);
            ctx.commit("updateEmails", response.data)
            ctx.commit("updateWindow", true)
        });
    },
    inbox: async function(ctx, email) {
      await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${email.split('@')[0]}&domain=${email.split('@')[1]}`)
        .then((response: AxiosResponse) => {
            console.log(response.data);
            ctx.commit("updateInbox", response.data)
        });
    },
    read: async function(ctx, _mail: any) { /* _mail - is id of inbox message */
      console.log(_mail)
      await axios.get(`https://www.1secmail.com/api/v1/?action=readMessage&login=${localStorage.email.split('@')[0]}&domain=${localStorage.email.split('@')[1]}&id=${_mail['id']}`)
          .then((response: AxiosResponse) => {
            ctx.commit("updateReadLetter", response.data)
          });
      ctx.commit("updateReadShow", true)    
    }
  },
  getters: {
    getEmails(state) { return [state.window_with_emails, state.emails] },
    getInbox(state) { return state.inbox },
    getReadLetter(state) { return state.readletter },
    getReadShow(state) { return state.readshow },
    getEmail(state) { return state.email }
  },
  modules: {
  }
})
