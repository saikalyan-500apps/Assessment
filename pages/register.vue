<template>
    <div>
      <FormComponent
        :heading="form.Form_Heading"
        :fields="form.Form_Fields"
        :button="form.Form_button"
        @form-submit="register"
      />
      <p v-if="registrationSuccess" class="success-message">Registration successful!</p>
    </div>
  </template>
  
  <script setup>
  import { useFormStore } from '~/store/forms';
  import { useLoginStore } from '~/store/login';
  import { ref } from 'vue';
  
  const formStore = useFormStore();
  const form = formStore.register_form[0];
  
  const loginStore = useLoginStore();
  
  const registrationSuccess = ref(false);
  
  const register = (formData) => {
    console.log(formData);
    const userData = {
      Name: formData.Name,
      Password: formData.Password,
      Age: formData.Age,
      Gender: formData.Gender,
      DateOfJoining: formData['Date of Joining'],
      Designation: formData.Designation
    };
  
    console.log('Registering the data', userData);
  
    loginStore.storeUser(userData);
    registrationSuccess.value = true;
  };
  </script>
  
  <style>
  .success-message {
    color: green;
    font-weight: bold;
  }
  </style>
  