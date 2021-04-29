<template>
    <vx-card id="invoice-container"  style="width:1250px" title="Design information" >
        <div class="vx-row ">
            
          <div class="flex items-center">
            <vs-button class="mb-base mr-3" type="border" icon-pack="feather" icon="icon icon-download"    text-color="blue"  >Download</vs-button>
            <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice"    text-color="#ffffff" >Print</vs-button>
          </div>
         
        
        </div>
        <div class="vx-row" >
            <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Number of logo Position" class="w-full" v-model="input25" />
          </div>
          <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Logo 1" class="w-full" type="textbox" v-model="input26" />
          </div>
        </div>
        
        <div class="vx-row ">
         
         <div  class="vx-col sm:w-1/2 w-full mb-2">
           <vs-input label-placeholder="Position1" class="w-full" v-model="input27" />
          </div>
            
        <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Color code logo1" class="w-full" type="email" v-model="input28" />
          </div>

        </div>
        <div class="vx-row ">
         
         <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="More information" class="w-full" v-model="input29" />
          </div>
          <div  class="vx-col sm:w-1/2 w-full mb-2">
       <ul class="centerx" ><br>
       <label>Logo pattern:</label><br>
  
      <vs-checkbox v-model="checkBox1" vs-value="luis">Screen</vs-checkbox> &nbsp;&nbsp;
       <vs-checkbox v-model="checkBox2" vs-value="carols">Lasor</vs-checkbox> &nbsp;&nbsp;
        <vs-checkbox v-model="checkBox3" vs-value="summer">Emboidary</vs-checkbox> &nbsp;
          </ul>
          </div>
           <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Size of logo" class="w-full" v-model="input30" />
          </div> 
        </div>
       
        
        <div class="vx-row">
          
         <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Logo 2" class="w-full" v-model="input31" />
          </div>
          <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Position 2" class="w-full" v-model="input32" />
          </div>
        </div>

       <div class="vx-row ">
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Color code logo2" class="w-full" type="email" v-model="input33" />
          </div>
           <div  class="vx-col sm:w-1/2 w-full mb-2">
       <ul class="centerx" ><br>
       <label>Logo pattern:</label><br>
  
      <vs-checkbox v-model="checkBox1" vs-value="luis">Screen</vs-checkbox> &nbsp;&nbsp;
       <vs-checkbox v-model="checkBox2" vs-value="carols">Lasor</vs-checkbox> &nbsp;&nbsp;
        <vs-checkbox v-model="checkBox3" vs-value="summer">Emboidary</vs-checkbox> &nbsp;
          </ul>
          </div>
        </div>

         <div class="vx-row ">
          <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input label-placeholder="More information" class="w-full" v-model="input34" />
          </div>
          
           <div  class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input label-placeholder="Size of logo" class="w-full" v-model="input35" />
          </div>
        </div>
      
          
       
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
     
           
          </div>
        </div>
      
        
      </vx-card>
</template>
<script>

export default{
  data () {
    return {
      input25:'',
      input26:'',
      input27:'',
      input28:'',
       input29:'',
      input30:'',
       input31:'',
      input32:'',
       input33:'',
      input34:'',
      input35:''
    }
  },
  computed: {

  },
  methods: {
    printInvoice () {
      window.print()
    }
    
  },
  components: {},
  mounted () {
    this.$emit('setAppClasses', 'invoice-page')
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
