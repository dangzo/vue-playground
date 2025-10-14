<template>
  <h1>Testing reactive objects:</h1>
  
  <ul>
    <li>Count: <span>{{ count }}</span></li>
    <li>Persona name: <span>{{ person.firstName }} {{ person.lastName }}</span></li>
    <li>Persona age: <span>{{ person.age }}</span></li>
  </ul>

  <div>
    <button @click="count++">Increment count</button>
    <button @click="person.age++">Increment age</button>
    <button @click="person.firstName = person.firstName === 'Alice' ? 'Bob' : 'Alice'">
      Toggle first name
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const count = ref(0)
const person = reactive({
  firstName: 'Alice',
  lastName: 'Smith',
  age: 30
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