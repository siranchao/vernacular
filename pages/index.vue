<template>
  <div>
    <Head>
      <Title>Vernacular - Home</Title>
      <Meta name="description" content="Home page" />
    </Head>

    <div id="main-slot">
      <div id="search-bar">
        <h3>Acronyms Dictionary</h3>
        <div class="input-bar">
          <label for="first-search" class="search-label"
            >Search Bar for OPS acronyms</label
          >

          <form class="input-warpper">
            <input
              id="first-search"
              type="text"
              v-model="keywordStore.keywords"
              placeholder="Search OPS acronym"
              list="datalistOptions"
              autofocus
              @keyup.enter="itemClicked"
            />

            <button
              type="reset"
              class="btn-close"
              aria-label="Close"
              @click="resetInput()"
            ></button>
          </form>

          <datalist id="datalistOptions">
            <option
              :key="autocompleteItem.acronym"
              v-text="autocompleteItem.acronym"
              v-for="autocompleteItem in autocompleteItems()"
            ></option>
          </datalist>
        </div>

        <button
          class="start-btn ontario-button"
          type="button"
          @click="itemClicked"
        >
          Search
        </button>
      </div>
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
resetInput();

const { data: rawData } = await useFetch("/api/data");
const results = rawData.value;

function autocompleteItems() {
  if (keywordStore.keywords == "" || keywordStore.keywords.length < 2) {
    return [];
  }
  return this.results.filter((result) =>
    result.acronym
      .toString()
      .toLowerCase()
      .includes(keywordStore.keywords.toLowerCase())
  );
}

function itemClicked() {
  window.location.href = "/search";
}

function resetInput() {
  keywordStore.updateKeyword();
}
</script>


<style scoped>
.start-btn {
  display: inline-block;
  vertical-align: middle;
  background-color: #0066cc;
  margin: 10px !important;
  color: white;
  max-width: 55%;
}
#start-btn-text {
  color: white;
  text-decoration: none;
}
#first-search {
  display: inline-block;
  vertical-align: middle;
  font-size: 1.5em;
  height: 1.5em;
  line-height: normal;
  margin-right: 5px;
  text-transform: uppercase;
  border-radius: 0.375rem;
}
#first-search::placeholder {
  font-size: 0.8em;
  padding-left: 5px;
  text-transform: none;
}

#main-slot {
  min-height: 70vh;
  background: url(@/src/assets/spring.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
}
#search-bar {
  padding-top: 3rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 32rem;
  border-radius: 0.375rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.input-bar {
  display: inline-block;
}

/* Add styling for resetable input box */
.input-warpper {
  position: relative;
}
.input-warpper input:placeholder-shown + button {
  opacity: 0;
  pointer-events: none;
}
.input-warpper button {
  position: absolute;
  border: none;
  display: block;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  right: 5%;
  margin: auto;
  padding: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
}

@media screen and (max-width: 320px) {
  #search-bar {
    width: 100vw;
  }
  #first-search {
    width: 80vw;
  }
}
@media screen and (min-width: 320px) and (max-width: 520px) {
  #search-bar {
    width: 90vw;
  }
  #first-search {
    width: 70%;
  }
  .input-warpper button {
    right: 15%;
  }
}

.search-label {
  display: none;
}
</style>