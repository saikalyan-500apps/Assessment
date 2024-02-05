<template>
    <div class="container mx-auto p-4">
        <h1>Register and login to view the users!</h1>
        <!-- Display information of each registered user -->
            <div v-for="(user, index) in registeredUsers" :key="index" class="border-b border-gray-200 py-2">
            <p>Login user - {{ user.Name }}</p>
            </div>
            
            <!-- Add User link -->
            <NuxtLink to="/register" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Add User</NuxtLink>
      <h1 class="text-2xl font-bold mb-4">Registered Users</h1>
      <ul>
        <li v-for="(user, index) in registeredUsers" :key="index" class="border-b border-gray-200 py-2 flex justify-between items-center">
          <span class="text-lg">{{ user.Name }}</span>
          <span class="text-lg">{{ user.Age }}</span>
          <span class="text-lg">{{ user.Gender }}</span>
          <span class="text-lg">{{ user.DateOfJoining }}</span>
          <span class="text-lg">{{ user.Designation }}</span>
          <div>
            <button @click="editUser(index)" class="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
            <button @click="deleteUser(index)" class="text-red-500 hover:text-red-700">Delete</button>
          </div>
        </li>
      </ul>
  
      <!-- Edit User Form -->
      <div v-if="editingUser !== null" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-md">
          <h2 class="text-2xl font-semibold mb-4">Edit User</h2>
          <FormComponent
            :heading="editUserFields[0].Form_Heading"
            :fields="editUserFields[0].Form_Fields"
            :button="updateButton"
            @form-submit="updateUser"
          />
          <button @click="cancelEdit" class="mt-4 text-red-500 hover:text-red-700">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useLoginStore } from '~/store/login';
  import { ref, computed } from 'vue';
  
  const loginStore = useLoginStore();
  const registeredUsers = loginStore.registeredUser_data;
  
  const editingUser = ref(null);
  const editedUser = ref({
    Name: '',
    Age: '',
    Gender: '',
    DateOfJoining: '',
    Designation: ''
  });
  
  const editUser = (index) => {
    editingUser.value = index;
    // Populate editedUser with the details of the user to be edited
    editedUser.value = { ...registeredUsers[index] };
  };
  
  const updateUser = () => {
    // Update the user in the registeredUsers array
    registeredUsers[editingUser.value] = { ...editedUser.value };
    // Reset editing state
    editingUser.value = null;
  };
  
  const cancelEdit = () => {
    // Reset editing state
    editingUser.value = null;
  };
  
  const deleteUser = (index) => {
    const isConfirmed = confirm("Are you sure you want to delete this user?");
    if (isConfirmed) {
      registeredUsers.splice(index, 1);
      // Update the registered user data in the store
      loginStore.registeredUser_data = [...registeredUsers];
    }
  };
  
  const editUserFields = computed(() => {
    return [
      {
        Form_Heading: 'Update User',
        Form_Fields: [
          { label: 'Name', inputfield: 'text', value: editedUser.value.Name },
          { label: 'Age', inputfield: 'text', value: editedUser.value.Age },
          { label: 'Gender', inputfield: 'radio', options: ['Male', 'Female', 'Other'], value: editedUser.value.Gender },
          { label: 'Date of Joining', inputfield: 'date', value: editedUser.value.DateOfJoining },
          { label: 'Designation', inputfield: 'text', value: editedUser.value.Designation }
        ],
        Form_button: 'Update'
      }
    ];
  });
  
  const updateButton = computed(() => {
    return editingUser.value !== null ? 'Update' : 'Register';
  });
  </script>
  