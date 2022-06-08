<template>

    <Head>
        <Title>Vernacular - Create New Acronym</Title>
        <Meta name="description" content="Create New Acronym" />
    </Head>
    <div class="page-container">
        <main>
            <div class="slot">
                <Header />
            </div>

            <div class="slot">
                <h3>Create an new acronym</h3>
                <form id="form-control">
                    <div class="mb-3">
                        <label for="acronymInput" class="form-label">Acronym *</label>
                        <input type="text" class="form-control" id="acronymInput" aria-describedby="acronymHelp"
                            required>
                        <div id="acronymHelp" class="form-text">Enter an acronym e.g. CEO</div>
                    </div>
                    <div class="mb-3">
                        <label for="fullNameInput" class="form-label">Acronym Definition *</label>
                        <input type="text" class="form-control" id="fullNameInput" aria-describedby="nameHelp" required>
                        <div id="nameHelp" class="form-text">Explain the acronym in words e.g. Chief Executive Officer
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="descInput" class="form-label">Description</label>
                        <textarea class="form-control" id="descInput" rows="3"
                            placeholder="Tell us more about it"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="urlInput" class="form-label">Relevant URL</label>
                        <input type="text" class="form-control" id="urlInput" placeholder="Enter url here">
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="submitCheck" aria-describedby="submitHelp">
                        <label class="form-check-label" for="submitCheck">Anonymous submission</label>
                        <div id="submitHelp" class="form-text">Your name will not be appeared on the Vernacular</div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </main>


        <div class="slot">
            <Footer />
        </div>
    </div>
</template>



<style scoped>
.slot h3 {
    text-align: center;
    margin-top: 3rem;
}

#form-control {
    width: 60%;
    margin: 0 auto;
    padding-bottom: 4rem;
}
</style>