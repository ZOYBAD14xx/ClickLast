<template>

<vx-card title="Advertising" >
         <div class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
         <vs-input class="w-full" label-placeholder="Company background" v-model="input27" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2 mt-4">
     <v-select placeholder="Productinformation" :options="['Adventage','disadvantage','SWOT ','Other'
        ]" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>

<div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Objective of project" v-model="input27" />
    </div>
<div class="vx-col sm:w-1/2 w-full mb-2">
         <vs-input class="w-full" label-placeholder="Budget Estmation" v-model="input27" />
    </div>
<div class="vx-col sm:w-1/2 w-full mb-2">
<span>Target audience</span>
<vs-input class="w-full" label-placeholder="Area" v-model="input27" />
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
<span>Gender</span>
<div class="mt-5 vx-row ml-1">
    <vs-checkbox v-model="checkBox8" vs-value="carols">Male</vs-checkbox> &nbsp;&nbsp;&nbsp;&nbsp;
      <vs-checkbox v-model="checkBox9" vs-value="summer">Female</vs-checkbox> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
<vs-input class="w-full" label-placeholder="Age" v-model="input27" />

    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
<vs-input class="w-full" label-placeholder="Spending habit" v-model="input27" />

    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
<vs-input class="w-full" label-placeholder="Genaration" v-model="input27" />

    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
<vs-input class="w-full" label-placeholder="Values" v-model="input27" />

    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
<vs-input class="w-full" label-placeholder="Ordering habit" v-model="input27" />
    </div>

  </div>

  <div>
   <div class="mb-5">
    <a-select :default-value="listData[0]" class="sm:w-1/2 w-full"  @change="handleProvinceChange">
      <a-select-option v-for="province in listData" :key="province">
        {{ province }}
      </a-select-option>
    </a-select>
   </div>

   <div>
    <a-select v-model="secondCity" class="sm:w-1/2 w-full" >
      <a-select-option v-for="city in cities" :key="city">
        {{ city }}
      </a-select-option>
    </a-select>
   </div>
  </div>

        <div class=" mt-2"  >
    <vs-button style="color:white" @click="add" class="mr-5" >Add more</vs-button>
          <vs-button  color="primary" style="color:white" @click=" remove">remove</vs-button><br><br>
    </div>
  <div class="vx-row">

  </div>

  <div class="vx-row">
    <div class="flex justify-end">
         <vs-button @click="$router.push('/forms/form-elements/select/pdfAdvertising')" type="border" class="mb-2" >Create pdf</vs-button>&nbsp;&nbsp;
      <vs-button style="color:white" class="mr-3 mb-2">Submit</vs-button>

    </div>
  </div>


</vx-card>


</template>

<script>
import vSelect from 'vue-select'
import Datepicker from 'vuejs-datepicker';

import Vue from 'vue';
import { DatePicker } from 'ant-design-vue';
Vue.use(DatePicker);
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
const listData = ['OOH','Traditional','Digital',];
const Description = {
  OOH: ['Billboard',
  'LED',
  'Street banner',
  'Pole  sign',
  'Bus shelter',
  'Special effect',
  'Bus wrap',
  'Taxi wrap',
'Building wrap',
'Spacial location',
'Cinema Ads',
  ],
  Traditional:[
    'News paper',
    'Magazine',
    'Radio',
    'TV',
  ],
  Digital:[
    'Facebook ',
    'Youtube',
    'GDN',
    'SEO',
    'Application',
  ],
 };

export default{
   name:'Advertising',
  components: {
    'v-select': vSelect,
    Datepicker
  },
   methods:{

    add (index) {
      this.inputs.push({ name: '' })
    },
    remove (index) {
      this.inputs.splice(index, 1)
    },
     handleProvinceChange(value) {
      this.cities = Description[value];
      this.secondCity = Description[value][0];
    },


  },
    data () {
    return {
      listData,
      Description,
      cities: Description[listData[0]],
      secondCity: Description[listData[0]][0],

      inputs: [
        {
          name: '',
        }
      ],
      text1:[
        {
          text1:''
        }
      ],
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
      input7:'',
      input8:'',
      input9:'',
      input10:'',
      input11:'',
      input12:'',
      input13:'',
      input14:'',
      input15:'',
      input16:'',
      input17:'',
      input18:'',
      input19:'',
      input20:'',
      input21:'',
      input22:'',
      input23:'',
      input24:'',
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
  }
}
</script>
