<template>

<vx-card title="Customer Requirement">

 <div class="vx-row">
   <div class="vx-col sm:w-1/2 w-full mb-2" >
<vs-input class="w-full" label-placeholder="Project Name" v-model="input1" />
   </div >
   <div class="vx-col sm:w-1/2 w-full mb-2 mt-5">
<v-select placeholder="Customer name" :options="['systory','it dev','lailaolab','Hal teach']" />
   </div>
 </div>

    <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mt-2">
     <datepicker placeholder="Quotation deadline" v-model="date"></datepicker>
    </div>
  <div class="vx-col sm:w-1/2 w-full mb-2 mt-2">
    <v-select placeholder="Working step plan" :options="['Wait for finace create quotation and sale send to customer','Meet her to get customer requirement','Wait for finace create quotation and sale send to customer','Wait for finace create quotation and sale send to customer']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Payment term" class="w-full" v-model="input19" />
          </div>

  </div>


  <div class="vx-row mt-4 ">
    <div class="vx-col">
        <span>Currency:</span>
    </div>
    <div class="vx-row mx-5">
    <vs-checkbox class="mx-2" v-model="checkBox7" vs-value="luis">LAK</vs-checkbox>
     <vs-checkbox class="mx-2" v-model="checkBox8" vs-value="carols">USD</vs-checkbox>
      <vs-checkbox class="mx-2" v-model="checkBox9" vs-value="summer">THB</vs-checkbox>
    </div>
          </div>


<div class="vx-row my-5">
  <div class="ml-5">
  <span>Payment Term:</span>
  </div>
     <v-select class="vx-col sm:w-1/5 w-full mb-2" placeholder="pay" :options="['1','2','3','4','5',]" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
</div>



     <div class="vx-row my-5">
       <div class="vx-col">
 <span>Price:</span>
          </div>
        <div class="vx-col ">
          <div class="vx-row">
          <vs-checkbox class="mx-5 " v-model="checkBox7" vs-value="luis">Include VAT</vs-checkbox>
          <vs-checkbox v-model="checkBox9" vs-value="summer">Exclude VAT</vs-checkbox>
          </div>
          </div>
      </div>

          <div class="vx-row flex justify-end">
             <vs-button style="color:white" @click="$router.push('/forms/form-elements/select/Posm')"  class="mb-2" >Posm</vs-button>&nbsp;&nbsp;
             <vs-button style="color:white" @click="$router.push('/forms/form-elements/select/event')"  class="mb-2" >Event</vs-button>&nbsp;&nbsp;
            <vs-button style="color:white" @click="$router.push('/forms/form-elements/select/Advertising')"  class="mb-2" >Advertising</vs-button>&nbsp;&nbsp;
        </div>

  </vx-card>
</template>

<script>
import vSelect from 'vue-select'
import Datepicker from 'vuejs-datepicker';

export default{
  components: {
    'v-select': vSelect,
     Datepicker
  },
  data(){
    return{
      input1:''

    }
  }
}
</script>
