<template>
  <div class="letter-search">
    <button class="letter-button" @click="classify('a')">A</button>
    <button class="letter-button" @click="classify('b')">B</button>
    <button class="letter-button" @click="classify('c')">C</button>
    <button class="letter-button" @click="classify('d')">D</button>
    <button class="letter-button" @click="classify('e')">E</button>
    <button class="letter-button" @click="classify('f')">F</button>
    <button class="letter-button" @click="classify('g')">G</button>
    <button class="letter-button" @click="classify('h')">H</button>
    <button class="letter-button" @click="classify('i')">I</button>
    <button class="letter-button" @click="classify('j')">J</button>
    <button class="letter-button" @click="classify('k')">K</button>
    <button class="letter-button" @click="classify('l')">L</button>
    <button class="letter-button" @click="classify('m')">M</button>
    <button class="letter-button" @click="classify('n')">N</button>
    <button class="letter-button" @click="classify('o')">O</button>
    <button class="letter-button" @click="classify('p')">P</button>
    <button class="letter-button" @click="classify('q')">Q</button>
    <button class="letter-button" @click="classify('r')">R</button>
    <button class="letter-button" @click="classify('s')">S</button>
    <button class="letter-button" @click="classify('t')">T</button>
    <button class="letter-button" @click="classify('u')">U</button>
    <button class="letter-button" @click="classify('v')">V</button>
    <button class="letter-button" @click="classify('w')">W</button>
    <button class="letter-button" @click="classify('x')">X</button>
    <button class="letter-button" @click="classify('y')">Y</button>
    <button class="letter-button" @click="classify('z')">Z</button>
  </div>
</template>


<script setup>
const props = defineProps({
  classify: Function
})
</script>


<style scoped>
.letter-search {
  text-align: center;
  background-color: #0066CC;
  padding: 10px
}

.letter-button {
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5em;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  cursor: pointer;
}

.letter-button:hover {
  background-color: #142C34;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.letter-button:focus {
  background-color: #142C34;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>