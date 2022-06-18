<template>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
        </div>
    </div>

           
</template>

<script>
// import Scene from '@/components/Scene/Scene';
// import Editor from '@/components/Editor/Editor';

export default {
    components: {
        // Scene,
        // Editor
    }
};
</script>

<style lang="scss" scoped>
// Full-height row cards
.content-row {
    height: 100%;

    & > .col {
        height: 100%;
        position: relative;
        padding-top: 0;

        & > .v-card {
            height: 100%;
            border-radius: 5px !important;
            overflow: hidden;
        }
    }
}
</style>
