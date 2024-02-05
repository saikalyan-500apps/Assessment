// store/forms
import { defineStore } from "pinia";


export const useFormStore = defineStore('form', () => {
  const register_form = [
    {
      Form_Heading: 'Registration',
      Form_Fields: [
        { label: 'Name', inputfield: 'text', value: '' },
        { label: 'Password', inputfield: 'password', value: '' },
        { label: 'Age', inputfield: 'text', value: '' },
        { label: 'Gender', inputfield: 'radio', options: ['Male', 'Female', 'Other'], value: '' },
        { label: 'Date of Joining', inputfield: 'date', value: '' },
        { label: 'Designation', inputfield: 'text', value: '' }
      ],
      Form_button: 'Register'
    }
  ]

  const login_form = [
    {
        Form_Heading:"Login",
        Form_Fields : [
            {label:"Name",inputfield:"email",value:""},
            {label:"Password",inputfield:"password",value:""}
        ],
        Form_button: 'Login'
    }
]

   

  return { register_form , login_form}
})

export const useRouteStore = defineStore('route', () => {
  const route_form = [
    {id:1,route:'/',name:'Home'},
    {id:2,route:'/login',name:'Login'},
    {id:3,route:'/register',name:'Register'},
  ]
  return {route_form}
})


