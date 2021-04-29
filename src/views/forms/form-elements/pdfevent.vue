<template>
  <vx-card id="invoice-container"  style="width:1250px"  >
     <div class="mt-5">
    
 <div class="flex items-center">
            <vs-button class="mb-base mr-3" type="border" icon-pack="feather" icon="icon icon-download"    text-color="blue"  >Download</vs-button>
            <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice"    text-color="#ffffff" >Print</vs-button>
          </div>
       <div  class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
         <datepicker placeholder="Date of event" v-model="date"></datepicker>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Time" v-model="input27" /><br>
    </div>
  </div>
  <div class="vx-row">
      <div class="vx-col sm:w-1/2 w-full mb-2"  >
      <vs-input class="w-full" label-placeholder="Location"  v-model="input27" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
        <v-select placeholder="Type of Event" :options="['Grand openning','Gala dinner','Contest','Aniversary','Load show',
        'Award Presentation','Entertainment','Sport Event','Meeting','Competition']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
  </div>
    <div class="vx-row">
    
    
  </div>
    <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
        <v-select placeholder="Type of Event" :options="['Grand openning','Gala dinner','Contest','Aniversary','Load show',
        'Award Presentation','Entertainment','Sport Event','Meeting','Competition']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
       
  </div>
    <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
        <span>Guest</span>
    </div>
    
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
       <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">VIP</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">Normal guest</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Decoration theme" v-model="input27" />
    </div>
  </div>

  <div id="event" class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2"  >
     <v-select placeholder="Site survey" :options="['Sizing of location','Floor plan with scale','Check size of door','Check when we can install'
     ,'Check Electricity supply',
        'Take picture sine entrance ']" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
    
      
        <vs-button @click="add" >Add more</vs-button>&nbsp;&nbsp;&nbsp;
          <vs-button  color="primary"  @click=" remove">remove</vs-button>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
          <vs-input class="w-full" label-placeholder="Text" v-model="input.name" /><br>
 <datepicker placeholder="Date of event" v-model="date"></datepicker>
  <vs-input class="w-full" label-placeholder="Text" v-model="input.name" />
  <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
    </div>
 
     
  </div>
  
  <div id="event" class="vx-row">
  <div class="vx-col sm:w-1/2 w-full mb-2"  >
    <v-select placeholder="Stage zone" :options="['Stage size','LED screen','TV ','Projector','Sound system',
        'Lighthing','Special effect','Cloth Cover stage','Ribbon cuting']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
         <vs-button @click="add" >Add more</vs-button>&nbsp;&nbsp;&nbsp;
          <vs-button  color="primary"  @click=" remove">remove</vs-button>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
          <vs-input class="w-full" label-placeholder="Amount" v-model="input.text1" />
               <vs-input class="w-full" label-placeholder="Size" v-model="input.text1" />
                    <vs-input class="w-full" label-placeholder="text" v-model="input.text1" />
                     <label>Small</label>&nbsp;&nbsp;
         <label>Medium</label>&nbsp;&nbsp;
           <label>Large</label>
    </div>
     
     
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <v-select placeholder="Production" :options="['Stage backdrop','Photo backdrop','Popup ','Podium','Logo display',
        'Gate entrance','Booth','Banner','Partition']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
        <vs-button @click="add" >Add more</vs-button>&nbsp;&nbsp;&nbsp;
          <vs-button  color="primary"  @click=" remove">remove</vs-button>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
          <vs-input class="w-full" label-placeholder="Name of banner" v-model="input.name" />
            <vs-input class="w-full" label-placeholder="Size" v-model="input.name" />
                 <vs-input class="w-full" label-placeholder="Material" v-model="input.name" />
                  <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
                   <vs-input class="w-full" label-placeholder="Color code" v-model="input.name" />
                        <vs-input class="w-full" label-placeholder="Copy writing" v-model="input.name" />
                              <vs-input class="w-full" label-placeholder="Amount" v-model="input.name" />
    </div>
     
    
    
    
    
     
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
       <v-select placeholder="Function" :options="['Theater style','Gala dinner','Cocktial function ']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>
    
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
    <span>Decoration</span>
      <vs-input class="w-full" label-placeholder="Flower" v-model="input99" />
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Carpet" v-model="input50" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Balloon" v-model="input60" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Light decoration" v-model="input70" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Q barries" v-model="input55" />
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2">
     <vs-input class="w-full" label-placeholder="other" v-model="input45" />
    </div>

  </div>
  
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
    <v-select placeholder="Performance" :options="['MC','Lao traditional performance','Lion show','Cover Dance show','Fashion show',
        'Live band: Style','Singer','Influencer','Other']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
        <vs-button @click="add" >Add more</vs-button>&nbsp;&nbsp;&nbsp;
          <vs-button  color="primary"  @click=" remove">remove</vs-button>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    <v-select placeholder="Lao" :options="['Male','Female']" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
    <v-select placeholder="English" :options="['Male','Female']" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
    <v-select placeholder="Chinese" :options="['Male','Female']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
        
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
         <vs-input class="w-full" label-placeholder="Male Amount" v-model="input.name" />
          <vs-input class="w-full" label-placeholder="Female Amount" v-model="input.name" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
         <label>Small</label>&nbsp;&nbsp;
         <label>Medium</label>&nbsp;&nbsp;
           <label>Large</label>
          <vs-input class="w-full" label-placeholder="Female Amount" v-model="input.name" />
    </div>
  </div>
 <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
 <v-select placeholder="Food style" :options="['Western style','Cocktail','Buffe','Chinese table',
        ]" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
         <v-select placeholder=" beverage" :options="['Red wine','White wine','Beer','Wisky','soft drink water','Coffee-tea','Champian'
        ]" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
    </div>
    
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
 <v-select placeholder="Event equipment" :options="['Rental tent','Round Table','Square Table','Chair','Fabric',
        'Live band: Style','Singer','Influencer','Other']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
         <vs-button @click="add" >Add more</vs-button>&nbsp;&nbsp;&nbsp;
          <vs-button  color="primary"  @click=" remove">remove</vs-button>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
          <vs-input class="w-full" label-placeholder="Size" v-model="input.name" />
          <vs-input class="w-full" label-placeholder="Amount" v-model="input.name" />
          <vs-input class="w-full" label-placeholder="Decoration" v-model="input.name" />
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <v-select placeholder="Support team" :options="['Photo camera man ','Video camera man','Staff freeland','Design freeland','Other']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
     <vs-button @click="add" >Add more</vs-button>&nbsp;&nbsp;&nbsp;
          <vs-button  color="primary"  @click=" remove">remove</vs-button>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
          <vs-input class="w-full" label-placeholder="Amount" v-model="input.name" />
    </div>
  </div>
   <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
 <v-select placeholder="Welcome guest" :options="['Airport ','Register guest','Hotel']" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
  </div>
  
  </div>
   <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
 <v-select placeholder="Out of vientiane" :options="['Hotel ','Rental truck','Rental bus','Rental van']" :dir="$vs.rtl ? 'rtl' : 'ltr'" /><br>
 
    </div>
     
  </div>
  <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
 <v-select placeholder="Pre-anouncement" :options="['Traditional media ','OOH','Digital media']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
 <vs-button @click="add" >Add more</vs-button>&nbsp;&nbsp;&nbsp;
          <vs-button  color="primary"  @click=" remove">remove</vs-button>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
          <vs-input class="w-full" label-placeholder="Radio" v-model="input.name" />
             <vs-input class="w-full" label-placeholder="Newspaper" v-model="input.name" />
                <vs-input class="w-full" label-placeholder="Magazine" v-model="input.name" />
                   <vs-input class="w-full" label-placeholder="Television" v-model="input.name" />
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
          <vs-input class="w-full" label-placeholder="Billboard" v-model="input.name" />
             <vs-input class="w-full" label-placeholder="Street banner" v-model="input.name" />
                <vs-input class="w-full" label-placeholder="Bus shelter" v-model="input.name" />
                   <vs-input class="w-full" label-placeholder="Bus wrap" v-model="input.name" />
                   <vs-input class="w-full" label-placeholder="LED" v-model="input.name" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k"  >
    
        <vs-checkbox v-model="checkBox50" vs-value="carols">Post</vs-checkbox> &nbsp;&nbsp;&nbsp;&nbsp;
      <vs-checkbox v-model="checkBox51" vs-value="summer">Video</vs-checkbox>
             <vs-input class="w-full" label-placeholder="Youtube" v-model="input.name" />
                <vs-input class="w-full" label-placeholder="GDN" v-model="input.name" />
                   <vs-input class="w-full" label-placeholder="Bumper ads" v-model="input1" />
                   
    </div>
  </div>

  <div class="vx-row" >
      <div class="vx-col sm:w-1/2 w-full mb-2" >
        <div class="vx-col sm:w-1/2 w-full mb-2">
    <span>Media</span>
      <vs-input class="w-full" label-placeholder="Tv" v-model="input99" />
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
    <vs-input class="w-full" label-placeholder="Newspaper" v-model="input50" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Radio" v-model="input60" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Influencer" v-model="input70" />
    </div>
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
 