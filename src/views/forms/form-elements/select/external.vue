<template>
<div>
    <div class="vx-row">
    <div class="vx-col w-full mb-6">
        <vs-input class="w-full" label-placeholder="Plan name" v-model="input2" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Amount" v-model="input25" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Deadline" v-model="input26" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Comment" v-model="input27" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col w-full">
     <vs-button     text-color="#ffffff" @click="$router.go(-1)" type="filled">Create plan</vs-button>
      <!-- <vs-button color="warning" type="border" class="mb-2" @click="input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;">Reset</vs-button> -->
    </div>
  </div>
  </div>
</template>
    
<script>
 import vSelect from 'vue-select'

export default{
  components: {
    'v-select': vSelect,
  },
data(){
  return{
 
  }
}
}
</script>
        
<style>

</style>