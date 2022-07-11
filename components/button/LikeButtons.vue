<template>
  <div>
    <div id="btn-slot" @click="clickedBtn()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#999999"
        :class="{ checked: btnChecked }"
      >
        <path
          d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.3l.95-4.57.03-.32c0-.4-.17-.8-.44-1.06L14.17 1 7.6 7.6c-.37.36-.6.86-.6 1.4v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.1-.23.14-.47.14-.73v-2z"
        />
      </svg>

      <span class="num" :class="{ checked: btnChecked }">{{ like }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  likes: Number,
  id: String,
});

const btnChecked = ref(false);
const like = ref(props.likes);

function clickedBtn() {
  btnChecked.value = !btnChecked.value;
  submit(btnChecked.value);
}

async function submit(action) {
  const res = await $fetch("/api/like", {
    method: "POST",
    body: {
      id: props.id,
      action: action,
    },
  });
  like.value = res;
}
</script>


<style scoped>
#btn-slot {
  display: flex;
  cursor: pointer;
  align-items: center;
}
.num {
  text-decoration: underline;
  padding-left: 0.3rem;
  color: #4d4d4d;
}
.checked {
  fill: #0066cc;
  color: #0066cc;
}
</style>