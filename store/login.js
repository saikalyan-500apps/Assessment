// store/login.js
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
    const state = {
        name: '', 
        password: '',
        registeredUser_data: [],
        loggedInUser: null
    }

    const setName = (value) => { 
        state.name = value
    }

    const setPassword = (value) => {
        state.password = value
    }

    const clearCredentials = () => {
        state.name = '' 
        state.password = ''
    }

    const initialize = () => {
        if (typeof localStorage !== 'undefined') {
            state.registeredUser_data = JSON.parse(localStorage.getItem('registeredUser_data')) || [];
        }
    }

    const storeUser = (user) => {
        state.registeredUser_data.push(user);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('registeredUser_data', JSON.stringify(state.registeredUser_data));
        }
    }

    const checkLogin = () => {
        state.loggedInUser = state.registeredUser_data.find(user => user.Name === state.name && user.Password === state.password); // Change Email to Name
        return state.loggedInUser;
    }

    return { 
        name: state.name, 
        password: state.password,
        setName, 
        setPassword,
        clearCredentials,
        initialize,
        storeUser,
        checkLogin,
        registeredUser_data: state.registeredUser_data  
    }
})
