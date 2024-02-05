<!-- pages/contact.vue -->
<template>
    <div class="container mx-auto p-4">
      <h1>Add Contact</h1>
      <FormComponent
        :heading="form.Form_Heading"
        :fields="form.Form_Fields"
        :button="form.Form_button"
        @form-submit="addContact"
      />
    </div>
  </template>
  
  <script setup>
  import { useFormStore } from '~/store/forms';
  
  const formStore = useFormStore();
  const form = formStore.register_form[0];
  
  const addContact = (formData) => {
    // Logic to add contact using form data
  };
  </script>
  