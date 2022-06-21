<template>
    <Head>
        <Title>Vernacular - Create New Acronym</Title>
        <Meta name="description" content="Create New Acronym" />
    </Head>

    <div class="container">
        <h3>Create an new acronym</h3>
        <form id="form-control">
            <div class="mb-3">
                <label for="acronymInput" class="form-label">Acronym *</label>
                <input v-model="acronym" type="text" class="form-control" id="acronymInput" aria-describedby="acronymHelp"
                    required>
                <div id="acronymHelp" class="form-text">Enter an acronym e.g. CEO</div>
            </div>
            <div class="mb-3">
                <label for="fullNameInput" class="form-label">Acronym Definition *</label>
                <input v-model="meaning" type="text" class="form-control" id="fullNameInput" aria-describedby="nameHelp" required>
                <div id="nameHelp" class="form-text">Explain the acronym in words e.g. Chief Executive Officer
                </div>
            </div>

            <div class="mb-3">
                <label for="descInput" class="form-label">Description</label>
                <textarea v-model="desc" class="form-control" id="descInput" rows="3"
                    placeholder="Tell us more about it"></textarea>
            </div>

            <div class="mb-3">
                <label for="urlInput" class="form-label">Relevant URL</label>
                <input v-model="url" type="text" class="form-control" id="urlInput" placeholder="Enter url here">
            </div>

            <div class="mb-3 form-check">
                <input v-model="anonymous" type="checkbox" class="form-check-input" id="submitCheck" aria-describedby="submitHelp">
                <label class="form-check-label" for="submitCheck">Anonymous submission</label>
                <div id="submitHelp" class="form-text">Your name will not be appeared on the Vernacular</div>
            </div>

            <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
        </form>
    </div>
  
</template>

<script setup>
const acronym = ref("")
const meaning = ref("")
const desc = ref("")
const url = ref("")
const anonymous = ref(false)

async function submit() {
    await $fetch('/api/submit', {
        method: 'POST',
        body: {
            acronym: acronym.value,
            meaning: meaning.value,
            desc: desc.value,
            url: url.value,
            anonymous: anonymous.value
        }
    })
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
</style>

