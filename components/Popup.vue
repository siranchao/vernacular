<template>
    <div class="root">
        <teleport to="body">
            <div class="modal" v-if="isOpen">
                <div>
                    <h1>Notification</h1>
                    <p>Submission successful</p>
                    <button @click="isOpen = false">CLOSE</button> 
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
const isOpen = useState('isOpen')
</script>

<style scoped>
.root {
    position: relative;
}
.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0 , 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal > div {
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
}
</style>
