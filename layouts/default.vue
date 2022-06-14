<template>
    <div id="page-container">
        <main id="container">
            <div id="header">
                <Header />
            </div>

            <div id="slot">
                <slot />
            </div>
        </main>

        <div id="footer">
            <Footer />
        </div>
    </div>
</template>


<style scoped>
#page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#container {
    flex: 1;
}

</style>