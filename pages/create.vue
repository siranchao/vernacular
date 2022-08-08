<template>
  <div>
    <Head>
      <Title>Vernacular - Create New Acronym</Title>
      <Meta name="description" content="Create New Acronym" />
    </Head>

    <div class="container">
      <h3>Create an new acronym</h3>
      <form id="form-control" @submit.prevent="submit()">
        <div class="mb-3">
          <label for="acronymInput" class="form-label">Acronym *</label>
          <input
            v-model="acronym"
            type="text"
            class="form-control"
            id="acronymInput"
            aria-describedby="acronymHelp"
            required
          />
          <div id="acronymHelp" class="form-text">
            Enter an acronym e.g. CEO
          </div>
        </div>
        <div class="mb-3">
          <label for="fullNameInput" class="form-label">Definition *</label>
          <input
            v-model="meaning"
            type="text"
            class="form-control"
            id="fullNameInput"
            aria-describedby="nameHelp"
            required
          />
          <div id="nameHelp" class="form-text">
            Explain your acronym e.g. Chief Executive Officer
          </div>
        </div>

        <div class="mb-3">
          <label for="descInput" class="form-label">Description</label>
          <textarea
            v-model="desc"
            class="form-control"
            id="descInput"
            rows="3"
            placeholder="Tell us more about it"
          ></textarea>
        </div>

        <div class="mb-3">
          <label for="urlInput" class="form-label">Web Link</label>
          <input
            v-model="url"
            type="text"
            class="form-control"
            id="urlInput"
            placeholder="Enter url here"
          />
        </div>

        <div class="mb-3" v-if="!anonymous">
          <label for="contributor" class="form-label">Contributor</label>
          <input
            v-model="contributor"
            type="text"
            class="form-control"
            id="contributor"
            placeholder="Tell us your name"
          />
        </div>

        <div class="mb-3 form-check">
          <input
            v-model="anonymous"
            type="checkbox"
            class="form-check-input"
            id="submitCheck"
            aria-describedby="submitHelp"
          />
          <label class="form-check-label" for="submitCheck"
            >Anonymous submission</label
          >
          <div id="submitHelp" class="form-text">
            Your name will not be appeared on the Vernacular
          </div>
        </div>

        <div class="submit-btn-group">
          <button class="btn btn-secondary" type="button" @click="reset()">
            Reset
          </button>
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>

<script setup>
import { useKeywordStore } from "@/stores/keywords";
const keywordStore = useKeywordStore();

const acronym = ref("");
const meaning = ref("");
const desc = ref("");
const url = ref("");
const contributor = ref("");
const anonymous = ref(false);

function reset() {
  acronym.value = "";
  meaning.value = "";
  desc.value = "";
  url.value = "";
  contributor.value = "";
  anonymous.value = false;
}

async function submit() {
  const res = await $fetch("/api/submit", {
    method: "POST",
    body: {
      acronym: acronym.value,
      meaning: meaning.value,
      desc: desc.value,
      url: url.value,
      name: contributor.value,
      anonymous: anonymous.value,
    },
  });

  console.log(res);
  if (res.code === 400) {
    alert(`Submission Failed, Please try again`);
  }

  if (res.code === 200) {
    alert(
      `New acronym: ${res.data.acronym} has been created\n\nThank you for your contribution!`
    );
    keywordStore.keywords = res.data.acronym;
    return navigateTo("/search");
  }
}
</script>


<style scoped>
.container h3 {
  text-align: center;
  margin-top: 2rem;
}

#form-control {
  width: 60%;
  margin: 0 auto;
  padding-bottom: 4rem;
}

#acronymInput {
  text-transform: uppercase;
}

.submit-btn-group > .btn {
  min-width: 5em;
  margin-right: 5%;
}

@media screen and (max-width: 700px) {
  .container {
    width: 80vw;
  }
  #form-control {
    width: 90%;
  }
}
</style>

