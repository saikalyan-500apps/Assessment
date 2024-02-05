<!-- pages/register.vue -->
<template>
    <FormComponent
      :heading="form.Form_Heading"
      :fields="form.Form_Fields"
      :button="form.Form_button"
      @form-submit="register"
    />
  </template>
  
  <script setup>
  import { useFormStore } from '~/store/forms';
  import { useLoginStore } from '~/store/login';
  
  const formStore = useFormStore();
  const form = formStore.register_form[0];
  
  const loginStore = useLoginStore();
  
  const register = (formData) => {
    console.log(formData);
    const userData = {
      Name: formData.Name,
      Password : formData.Password,
      Age: formData.Age,
      Gender: formData.Gender,
      DateOfJoining: formData['Date of Joining'],
      Designation: formData.Designation
    };
  
    console.log('Registering the data', userData);
  
    loginStore.storeUser(userData);
  };
  </script>
  