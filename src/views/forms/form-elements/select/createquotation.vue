<template>
<div>
    <div class="vx-row">
    <div class="vx-col w-full mb-6">
        <vs-input class="w-full" label-placeholder="Project" v-model="input2" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Attend to" v-model="input25" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Address" v-model="input26" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Office number" v-model="input27" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Contact person" v-model="input28" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Contact number" v-model="input29" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input type="email" class="w-full" label-placeholder="Email" v-model="input30" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
   <v-select :options="['LAK: 010110000117963001   Account: Click Lao Marketing and Consultancy Sole Co.,Ltd','THB: 010110200117963001   Account: Click Lao Marketing and Consultancy Sole Co.,Ltd','USD: 090110100424949001   Account: Click Lao Marketing and Consultancy Sole Co.,Ltd']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input type="email" class="w-full" label-placeholder="Amount" v-model="input30" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Agency fee" v-model="input29" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input type="email" class="w-full" label-placeholder="Discount" v-model="input30" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/3 w-full mb-2">
      <vs-input class="w-full" label-placeholder="VAT" v-model="input29" />
    </div>
    <div class="vx-col sm:w-2/3 w-full mb-6">
      <vs-input type="email" class="w-full" label-placeholder="Grand ToTal" v-model="input30" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vs-button class="mr-3 mb-2">Create Quotation</vs-button>
      <vs-button color="warning" type="border" class="mb-2" @click="input25 = input26 = input27 = input28 = input29 = input30 = ''; check7 = false;">Reset</vs-button>
    </div>
  </div>
  </div>
</template>
    
<script>
 import vSelect from 'vue-select'

export default{
  components: {
    'v-select': vSelect,
  }
}
</script>
        
<style>

</style>