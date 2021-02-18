<template>
<vx-card title="New Supplier" class="overflow-auto h-13">

    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/3 w-full">
        <span>Username</span>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
        <vs-input class="w-full" v-model="input1" />
      </div>
    </div>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/3 w-full">
        <span>Name</span>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
        <vs-input class="w-full"  v-model="input2" />
      </div>
    </div>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/3 w-full">
        <span>Email</span>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
        <vs-input class="w-full" type="email" v-model="input3" />
      </div>
    </div>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/3 w-full">
        <span>Status</span>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
        <vs-input class="w-full" v-model="input4" />
      </div>
    </div>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/3 w-full">
        <span>Role</span>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
        <vs-input class="w-full" v-model="input5" />
      </div>
    </div>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/3 w-full">
        <span>Company</span>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
        <vs-input class="w-full" v-model="input6" />
      </div>
    </div>
    <div>
    </div>
    <div>
      <div class="flex justify-between">
        <vs-button text-color="#ffffff" class="mr-3 mb-2" @click="$router.push('/apps/eCommerce/shop')">back</vs-button>
      <div>
        <vs-button class="mr-3 mb-2" text-color="#ffffff">Submit</vs-button>
        <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = input5 = input6 = ''">Reset</vs-button>
      </div>
      </div>
    </div>
</vx-card>
</template>

<script>
export default {
  data() {
    return {
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
    }
  },

}
</script>

<style>

</style>
