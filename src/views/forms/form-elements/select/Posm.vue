/* eslint-disable no-dupe-keys */
<template>

     <div class="mt-5">
    
    <vs-tabs>
      <vs-tab label="Posm">
         <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
       <v-select placeholder="Posm type" :options="['catalog','Customize']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
    
  </div>
  <div id="Posm" class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k" >
      <vs-input class="w-full" label-placeholder="Product Name" v-model="input.name" />
   
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
    
    <br><vs-button color="primary" style="color:white" @click=" add">Add more</vs-button>&nbsp;&nbsp;
    <vs-button  color="primary" style="color:white"  @click=" remove">remove</vs-button>
    </div>
    
  </div>
  <div class="vx-row" >
      <div class="vx-col sm:w-1/2 w-full mb-2" >
       <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
      </div>
  </div>
   
  
  <div class="vx-row">
    <div class="vx-col w-full">
         <vs-button @click="$router.push('/forms/form-elements/select/pdfposm')" type="border" class="mb-2" >Create detail</vs-button>&nbsp;&nbsp;
      <vs-button style="color:white" @click="$router.push('/ui-elements/card/basic')" class="mr-3 mb-2">Submit</vs-button>
     
    </div>
  </div>
      </vs-tab>
     
    </vs-tabs>
   </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
import Vue from 'vue'


export default {
  name: 'Posm',
  
   
  data () {
    
    
    return {
      inputs: [
        {
          name: ''
        }
      ],
      time: null,
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
      icons:['PlusIcon'],
      radios1:'luis',
      checkBox1: ['luis'],
          
      // eslint-disable-next-line no-dupe-keys
      // eslint-disable-next-line vue/no-dupe-keys
      inputs: [
        {
          name: ''
        }
      ],
      input:'',     
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
      input7:'',
      input8:'',
      input9:''
     
    }
    
  },
  components: {
    Datepicker,
    flatPickr,
    'v-select': vSelect
  },
  methods:{
    
    add (index) {
      this.inputs.push({ name: '' })
    },
    remove (index) {
      this.inputs.splice(index, 1)
    }
            
                
  }
}
  

</script>
 