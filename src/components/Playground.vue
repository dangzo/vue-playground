<template>
  <h1>Testing reactive objects:</h1>
  
  <ul>
    <li>Count: <span>{{ count }}</span></li>
    <li>Persona name: <span>{{ person.firstName }} {{ person.lastName }}</span></li>
    <li>Persona age: <span>{{ person.age }}</span></li>
  </ul>

  <div>
    <button @click="incCount">Increment count</button>
    <button @click="person.age++">Increment age</button>
    <button @click="toggleFirstName()">
      Toggle first name
    </button>
  </div>

  <div :style="{ marginTop: '24px' }">
    <div>Input text: {{ inputText }}</div>
    <div>Type here: <input v-model="inputText" /></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect, isRef } from 'vue'

const inputText = ref('')

const count = ref(0)
const person = reactive({
  firstName: 'Alice',
  lastName: 'Smith',
  age: 30
})

function toggleFirstName() {
  person.firstName = person.firstName === 'Alice' ? 'Bob' : 'Alice'
}

function incCount() {
  count.value++
}

watchEffect(() => {
  console.log(`Something changes! Count value: ${isRef(count)}, Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`)
})
</script>

<style scoped>
h1 {
  font-size: 32px;
  margin-bottom: 24px;
}

ul {
  width: 350px;
  margin: 0 auto 24px;
  list-style-type: none;
  padding: 0;
  text-align: left;

  > li {
    display: flex;
    justify-content: space-between;

    > span {
      font-weight: bold;
      text-align: right;
    }
  }
}

button {
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
}
</style>