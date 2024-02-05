<template>
    <div class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 class="text-lg font-semibold mb-4">{{ heading }}</h2>
  
      <!-- form fields -->
      <div v-for="(field, index) in fields" :key="index" class="mb-4">
        <label class="block text-sm font-medium text-gray-700" :for="field.label">{{ field.label }}</label>
        <template v-if="field.inputfield === 'radio'">
          <div class="flex items-center space-x-2">
            <div v-for="(option, optionIndex) in field.options" :key="optionIndex">
              <input type="radio" :id="option" :value="option" v-model="field.value" class="text-indigo-600 focus:ring-indigo-500 h-4 w-4">
              <label :for="option" class="ml-2 text-sm text-gray-700">{{ option }}</label>
            </div>
          </div>
        </template>
        <template v-else-if="field.inputfield === 'date'">
          <input :type="field.inputfield" v-model="field.value" class="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
        </template>
        <template v-else>
          <input :type="field.inputfield" v-model="field.value" class="mt-1 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
        </template>
      </div>
  
      <!-- button -->
      <button @click="handleSubmit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {{ button }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    heading: String,
    fields: Array,
    button: String,
  })
  
  const emits = defineEmits(['form-submit'])
  
  const handleSubmit = () => {
    const formData = {}
    props.fields.forEach(field => {
      formData[field.label] = field.value
      field.value = '' // reset value of the field after submitting.
    })
    emits("form-submit", formData)
  }
  </script>
  