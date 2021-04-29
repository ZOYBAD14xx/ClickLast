<template>
  <vx-card id="invoice-container"  style="width:1250px"  >
     <div class="mt-5">
    
 <div class="flex items-center">
            <vs-button class="mb-base mr-3" type="border" icon-pack="feather" icon="icon icon-download"    text-color="blue"  >Download</vs-button>
            <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice"    text-color="#ffffff" >Print</vs-button>
          </div>
       <div  class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input class="w-full" label-placeholder="Text" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <v-select placeholder="Sound system" :options="['Small','Meduim','Large']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <v-select placeholder="Lighting" :options="['Small','Meduim','Large']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <v-select placeholder="Special effect" :options="['Paper shooter','Smoke (Co2)','Foam','Bubble','Dry ice','Lasor']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Color" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <vs-input class="w-full" label-placeholder="Design" v-model="input1" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <vs-input class="w-full" label-placeholder="Style" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Name of banner" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Material" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Insert logo</span>
   
     <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Color code" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
  <v-select placeholder="Copy writing" :options="['Lao','English']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <v-select placeholder="Lao" :options="['Male','female']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
   <v-select placeholder="English" :options="['Male','female']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     <v-select placeholder="Chinese" :options="['Male','female']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Male</span>
    <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Female</span>
    <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <v-select placeholder="Lion show" :options="['Small','Meduim','Large']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
   <v-select placeholder="Cover Dance show" :options="['Small','Meduim','Large']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Fashion show</span>
    <vs-input class="w-full" label-placeholder="Male Amount" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Fashion show</span>
    <vs-input class="w-full" label-placeholder="Female Amount" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     
    <vs-input class="w-full" label-placeholder="PG Amount" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     
  <v-select placeholder="Live band style" :options="['Small','Meduim','Large']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Singer</span>
     
    <vs-input class="w-full" label-placeholder="Male Amount" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Influencer</span>
     
    <vs-input class="w-full" label-placeholder="Male Amount" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     
     
    <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     
     
    <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     
     
    <vs-input class="w-full" label-placeholder="Decorate color" v-model="input27" /><br>
    
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2">
     
     
    <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     
     
    <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     
     
    <vs-input class="w-full" label-placeholder="Tablecloth color" v-model="input27" /><br>
    
    </div>

<div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Chair</span>
     
    <vs-input class="w-full" label-placeholder="Style" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     
     
    <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <span>Fabric</span>
     
    <vs-input class="w-full" label-placeholder="Style" v-model="input27" /><br>
    
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     
     
    <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
     <vs-input class="w-full" label-placeholder="Radio" v-model="input27" /><br>  
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Newspaper" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Magazine" v-model="input27" /><br>
    </div>    
     <div class="vx-col sm:w-1/2 w-full mb-2"> 
    <vs-input class="w-full" label-placeholder="Television" v-model="input27" /><br>
     </div>  
<div class="vx-col sm:w-1/2 w-full mb-2">
     <vs-input class="w-full" label-placeholder="Billboard" v-model="input27" /><br>  
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Street banner" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Bus shelter" v-model="input27" /><br>
    </div>    
     <div class="vx-col sm:w-1/2 w-full mb-2"> 
    <vs-input class="w-full" label-placeholder="Bus wrap" v-model="input27" /><br>
     </div>  
      <div class="vx-col sm:w-1/2 w-full mb-2"> 
    <vs-input class="w-full" label-placeholder="LED" v-model="input27" /><br>
     </div> 
      <div class="vx-col sm:w-1/2 w-full mb-2">
      <span>Facebook</span>
     <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Post</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">Video</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>    
     <div class="vx-col sm:w-1/2 w-full mb-2"> 
    <vs-input class="w-full" label-placeholder="Youtube" v-model="input27" /><br>
     </div>  
      <div class="vx-col sm:w-1/2 w-full mb-2"> 
    <vs-input class="w-full" label-placeholder="GDN" v-model="input27" /><br>
     </div> 
     <div class="vx-col sm:w-1/2 w-full mb-2"> 
    <vs-input class="w-full" label-placeholder="Bumper ads" v-model="input27" /><br>
     </div> 
  </div>
  
  
  
    
     

    
  </div>
  </vx-card>
</template>

<script>
import vSelect from 'vue-select'
import Datepicker from 'vuejs-datepicker'

export default{
  name:'event',
  
  components: {
    'v-select': vSelect,
    Datepicker
  },
  methods:{
     printInvoice () {
      window.print()
    },
    
    add (index) {
      this.inputs.push({ name: '' })
    },
    remove (index) {
      this.inputs.splice(index, 1)
    }
            
                
  },
  data () {
    return {
      inputs: [
        {
          name: ''
        }
      ]
    
    }
  }
}
</script>

<style lang="scss">
@media print {
  .invoice-page {
    * {
      visibility: hidden;
    }

    #content-area {
      margin: 0 !important;
    }

    .vs-con-table {
      .vs-con-tbody {
        overflow: hidden !important;
      }
    }

    #invoice-container,
    #invoice-container * {
      visibility: visible;
    }
    #invoice-container {
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: none;
    }
  }
}

@page {
  size: auto;
}
</style>
 