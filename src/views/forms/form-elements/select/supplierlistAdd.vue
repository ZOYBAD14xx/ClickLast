<template>
<body>



<div>
<vx-card title="Supplier details" >
    <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="VENDOR NAME PER BUSINESS LICENSE" v-model="input1" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="ADDRESS" v-model="input2" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="VENDOR CONTACT PERSON" v-model="input3" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="POSITION" v-model="input4" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="WEBSITE" v-model="input5" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-6">
      <vs-input type="email" class="w-full" label-placeholder="EMAIL" v-model="input6" />
    </div>
  </div>
  </vx-card>
</div>

<div class="mt-10">
<vx-card title="BANKING INFORMATION" >
    <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Bank Name" v-model="input7" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="SWIFT Code" v-model="input8" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="BANK ACCOUNT NAME" v-model="input9" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="BANK ACCOUNT NO" v-model="input10" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="BANK ACCOUNT CURRENCY" v-model="input11" />
    </div>
    <div></div>
  </div>

  <div class="my-10">
    <h4>
      For oversea supplier
    </h4>
  </div>

    <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Intermediary Bank Name" v-model="input12" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Intermediary Bank Name SWIFT Code" v-model="input13" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Bank Account Number" v-model="input14" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Bank Account Holder" v-model="input15" />
    </div>
  </div>

  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="IBAN Code" v-model="input16" />
    </div>
    </div>

    <div class="mt-10">
      <div class="flex justify-between">
        <div>
        <vs-button text-color="#ffffff" class="mr-3 mb-2" @click="$router.go(-1)">back</vs-button>
        </div>
        <div>
    <vs-button  text-color="#ffffff"  @click="$router.push('/apps/eCommerce/shop')" > Submit </vs-button>
      </div>
      </div>
   </div>
  </vx-card>
</div>
</body>
</template>

<script>
export default {
  data() {
    return {
      name:'Click',
      address:'VT, LAOS',
      contact:'02055252525',
      position:'Leader',
      tel:'0205565655',
      fax:'NULL',
      phone:'0205552152',
      website:'www.click.la',
      facebook:'Click'
    }
  },
}
</script>
<style>
</style>
