<template>
   <vx-card style="width:1250px" title="Payment details" >
        <div class="vx-row ">
          
          <div style="" class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Payment term" class="w-full" v-model="input19" />
          </div>
        </div>
       <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <span>Currency</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
       
   <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    <vs-checkbox v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w v-model="checkBox7" vs-value="luis">LAK</vs-checkbox> &nbsp;&nbsp;&nbsp;&nbsp;
     <vs-checkbox v-model="checkBox8" vs-value="carols">USD</vs-checkbox> &nbsp;&nbsp;&nbsp;&nbsp;
      <vs-checkbox v-model="checkBox9" vs-value="summer">THB</vs-checkbox> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <vs-checkbox v-model="checkBox10" vs-value="depo">Deposit payment 50%</vs-checkbox> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <vs-checkbox v-model="checkBox11" vs-value="full">Full payment after delivery</vs-checkbox> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </vs-col>
     
  
         
          </div>
        </div>
        <div  class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
          
          </div>
                 <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
       <vs-col vs-offset="0" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-checkbox v-model="checkBox13" vs-value="Price">Price</vs-checkbox>&nbsp;&nbsp;&nbsp;&nbsp;
      <vs-checkbox v-model="checkBox13" vs-value="vat">Include VAT</vs-checkbox> &nbsp;&nbsp;&nbsp;&nbsp;
        <vs-checkbox v-model="checkBox14" vs-value="exclude">Exclude VAT</vs-checkbox> &nbsp;&nbsp;&nbsp;&nbsp;
       </vs-col>
          </div>
        </div>
        <div class="vx-row">
         
      <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" label-placeholder="other" type="email" v-model="input20" />
          </div>
        </div> 
        <div class="vx-row ">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-button class="" text-color="#ffffff" @click="$router.go(-1)" type="filled">Back</vs-button>&nbsp;&nbsp;&nbsp;
              <vs-button @click="$router.push('/forms/form-elements/select/customerrequire')" class="mr-3 mb-2" style="color:white">Submit</vs-button>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
         
           
          </div>
        </div>
       
      </vx-card>
    
  <!-- Posm -->
       </template>
