 

<template>
    <div class="todo__filters-container">

        <!-- all -->
       
 

        <!-- starred -->
        <div class="px-6 py-4">
            

            <template v-for="filter in todoFilters">
                <router-link tag="span" class="flex mt-6 cursor-pointer" :class="{'text-primary': todoFilter == filter.filter}" :to="`${baseUrl}/${filter.filter}`" :key="filter.filter">
                    <feather-icon :icon="filter.icon" :svgClasses="[{'text-primary stroke-current': todoFilter == filter.filter}, 'h-6 w-6']"></feather-icon>
                    <span class="text-lg ml-3">{{ filter.filterName }}</span>
                </router-link>
            </template>

        </div>

        <vs-divider></vs-divider>

        <div class="px-6 py-4">
            <h5>Labels</h5>
            <div class="todo__lables-list">
                <router-link tag="span" class="todo__label flex items-center mt-6 cursor-pointer" v-for="(tag, index) in taskTags" :key="index" :to="`${baseUrl}/${tag.value}`">
                    <div class="ml-1 h-3 w-3 rounded-full mr-4" :class="'border-2 border-solid border-' + tag.color" />
                    <span class="text-lg" :class="{'text-primary': todoFilter == tag.value}">{{ tag.text }}</span>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>

export default{
  data () {
    return {
      todoFilters: [
         
      ]
    }
  },
  computed: {
    taskTags () {
      return this.$store.state.todo.taskTags
    },
    todoFilter () {
      return this.$route.params.filter
    },
    baseUrl () {
      const path = this.$route.path
      return path.slice(0, path.lastIndexOf('/'))
    }
  }
}
</script>
