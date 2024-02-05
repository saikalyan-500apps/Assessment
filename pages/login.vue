<!-- pages/login.vue -->
<template>
    <FormComponent
      :heading="form.Form_Heading"
      :fields="form.Form_Fields"
      :button="form.Form_button"
      @form-submit="login"
    />
  </template>
  
  <script setup>
  import { useFormStore } from '~/store/forms';
  import { useLoginStore } from '~/store/login';
  
  const formStore = useFormStore();
  const form = formStore.login_form[0];
  
  const loginStore = useLoginStore();
  
  const login = (formData) => {
    console.log('Submitted form data:', formData);
  
    // Set name and password in login store
    loginStore.setName(formData.Name); // Change setEmail to setName
    loginStore.setPassword(formData.Password);
  
    // Check login credentials
    const loggedInUser = loginStore.checkLogin();
  
    console.log('Registered users:', loginStore.registeredUser_data);
  
    if (loggedInUser) {
      console.log('Login successful');
      navigateTo('/')
    } else {
      console.log('Invalid name or password');
    }
  }
  </script>
  