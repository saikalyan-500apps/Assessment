<template>
    <div class="container mx-auto p-4">
      <h1>Employees</h1>
      <ul>
        <li v-for="(employee, index) in employees" :key="index">{{ employee.Name }}</li>
      </ul>
      <h1>Contacts</h1>
      <ul>
        <li v-for="(contact, index) in contacts" :key="index">{{ contact.Name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useLoginStore } from '~/store/login';
  import { ref } from 'vue';
  
  const loginStore = useLoginStore();
  
  const employees = ref([]);
  const contacts = ref([]);
  
  // Load employees and contacts data when the component is mounted
  const loadEmployeesAndContacts = () => {
    employees.value = loginStore.registeredUser_data.filter(user => user.Type === 'Employee');
    contacts.value = loginStore.registeredUser_data.filter(user => user.Type === 'Contact');
  };
  
  loadEmployeesAndContacts();
  </script>
  