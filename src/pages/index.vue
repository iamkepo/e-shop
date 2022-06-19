<template>
    <!-- <div class="w-full bg-gray-200 flex content-center justify-center min-h-screen overflow-y-scroll">
      <div class="w-4/5 mt-20 grid grid-cols-none gap-10">
        <div 
          class="bg-white shadow-lg row-start-1 row-end-4 col-start-1 col-end-2"
          v-for="(item, i) in list" :key="i"
        >
          <div class="text-xl font-medium text-black">{{item.title}}</div>
          <p class="text-slate-500">{{item.desc}}</p>
        </div>
      </div>
    </div> -->

  <div class="container my-12 w-screen">
    <div class="min-h-screen w-11/12 mx-auto flex flex-wrap -mx-1 lg:-mx-4">
      <router-link 
        class="my-5 px-1 w-full h-1/2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:scale-105 ease-in duration-500" 
        v-for="(item, i) in list" :key="i"
        :to="baselink+item.id+1"
      >

        <div class="h-96 w-11/12 overflow-hidden rounded-lg shadow-lg">

          <div class="h-2/3">
            <Scene :id="item.id+1" />
          </div>

          <div class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">{{item.title}}</h1>
          </div>

          <div class="flex items-center justify-between leading-none p-2 md:p-4">
            <p class="text-sm">{{item.desc}}</p>
          </div>

        </div>

      </router-link>

    </div>
  </div>     
</template>

<script>
import Scene from '@/components/Scene/Scene';
// import Editor from '@/components/Editor/Editor';

export default {
    components: {
        Scene,
        // Editor
    },
    data() {
      return {
        baselink: "/produit/",
        list: [
          { id: 0, title: "ChitChat", desc: "You have a new message!"},
          { id: 1, title: "ChitChat", desc: "You have a new message!"},
          { id: 2, title: "ChitChat", desc: "You have a new message!"},
          { id: 3, title: "ChitChat", desc: "You have a new message!"},
        ],
      };
    },
};
</script>

<style lang="scss" scoped>

</style>
