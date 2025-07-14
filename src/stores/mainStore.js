import { defineStore } from 'pinia';

export const useMainStore = defineStore('store', {
    state: () => ({
        userInformation: {},
        arrEmployees:[]
    }),
    state: () =>{
        return{
            API:'http://10.169.142.136:8090', //LOCAL
            userAccount:[],
            userInformation: {},
            arrEmployees:[]
        }
    },
    getters: {
    },
    actions: {

    },
    persist: {
        key: 'store',
        paths: ['userInformation'] 
    }
});


// //this if have ang node.sj backend

// import { defineStore } from 'pinia';

// export const useMainStore = defineStore('store', {
//     state: () =>{
//         return{
//             API:'http://10.169.142.136:8069', //LOCAL
//             userAccount:[],
//         }
//     },
//     getters: {
//     },  
//     actions: {
//         updateUserAccount(userData) {
//             this.userAccount = userData;
//         }
//     },
//     persist: {
//         key: 'store',
//         paths: ['userInformation'] 
//     }
// });