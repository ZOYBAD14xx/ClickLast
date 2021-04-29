<template>

<vx-card title="Event" class="overflow-auto">
  <div class="mt-5">

     <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2 mt-4">
             <datepicker
                placeholder="Date of event"
                v-model="date"
              ></datepicker>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
           <vs-input
                class="w-full"
                label-placeholder="Time"
                v-model="input27"
              />
          </div>
        </div>

          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                label-placeholder="Location"
                v-model="input27"
              />
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2 mt-4">
              <v-select
                placeholder="Type of Event"
                :options="[
                  'Grand openning',
                  'Gala dinner',
                  'Contest',
                  'Aniversary',
                  'Load show',
                  'Award Presentation',
                  'Entertainment',
                  'Sport Event',
                  'Meeting',
                  'Competition'
                ]"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
              />
            </div>
          </div>
            <br>
            <div class="vx-row flex justify-between">

            <div class="vx-row my-10" >
              <div >
          <h4 class="ml-10">Guest:</h4>
              </div>
              <div class="vx-row mx-10">
              <vs-checkbox v-model="checkBox15" vs-value="vat" class="mx-2">VIP</vs-checkbox>
              <vs-checkbox v-model="checkBox16" vs-value="exclude">Normal guest</vs-checkbox>
            </div>
              </div>


              <div class="vx-col sm:w-1/2 w-full mb-2 ">
               <vs-input
                class="w-full ml-5"
                label-placeholder="Decoration theme"
                v-model="input27"

              />
            </div>

            </div>
          <div>




          </div>
<div id="event" class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <span>Site survey</span>
            </div>
            <div style="margin-left:4px" class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input
                class="w-full"
                label-placeholder="Sizing of location"
                v-model="input2"
              /><br />
              <span>Floor plan with scale</span>
              <vs-upload
                automatic
                action="https://jsonplaceholder.typicode.com/posts/"
                @on-success="successUpload"
              />
              <vs-input
                class="w-full"
                label-placeholder="Check size of door"
                v-model="input2"
              /><br />
              <datepicker
                placeholder="Check when we can install"
                v-model="date"
              ></datepicker>
              <vs-input
                class="w-full"
                label-placeholder="Check Electricity supply"
                v-model="input2"
              /><br />
              <span>Take picture sine entrance </span>
              <vs-upload
                automatic
                action="https://jsonplaceholder.typicode.com/posts/"
                @on-success="successUpload"
              />
            </div>
          </div>

          <div id="event">
            <div
              v-for="(input, k) in inputs"
              :key="k"
            >
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
            </div>

            <div class="mt-5">
              <vs-button  style="color:white" @click="add">Add more</vs-button>
              <vs-button class="ml-5" color="primary" style="color:white" @click="remove">remove</vs-button
              ><br /><br />
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col w-full flex justify-between">
              <vs-button @click="$router.push('#')" type="border" class="mb-2"
                >Back</vs-button
              >&nbsp;&nbsp;
              <div class="">
                <vs-button
                  @click="$router.push('/forms/form-elements/select/pdfevent')"
                  type="border"
                  class="mb-2"
                  >Create pdf</vs-button
                >&nbsp;&nbsp;
                <vs-button
                  style="color:white"
                  @click="$router.push('/ui-elements/card/basic')"
                  class="mr-3 mb-2"
                  >Submit</vs-button
                >
              </div>
            </div>
          </div>
  </div>
  </vx-card>
</template>

<script>
import vSelect from "vue-select";
import Datepicker from "vuejs-datepicker";

import Vue from 'vue';
import { DatePicker } from 'ant-design-vue';
Vue.use(DatePicker);
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
const listData = ['Stage_zone','Function','Decoration','Performance'];
const Description = {
  Stage_zone: ['LED screen',
  'TV ',
  'Projector',
  'Sound system',
  'Lighthing',
  'Special effect',
  'Cloth Cover stage',
  'Ribbon cuting',
  ],
  Function:[
    'Theater style',
    'Gala dinner',
    'Cocktial function',

  ],
  Decoration:[
    'Flower ',
    'Carpet',
    'Balloon',
    'Light decoration',
    'Q barriers',
  ],
  Performance:[
    'MC',
    'Lao traditional performance',
    'Lion show : List',
    'Cover Dance show',
    'Fashion show',
    '',
  ],


};
export default {
   name: "event",

  components: {
    "v-select": vSelect,
    Datepicker,
  },
  methods: {
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
     handleProvinceChange(value) {
      this.cities = Description[value];
      this.secondCity = Description[value][0];
    },
  },
  data() {

    return {
      listData,
      Description,
      cities: Description[listData[0]],
      secondCity: Description[listData[0]][0],

      inputs: [
        {
          name: ""
        }
      ],
      text1: [
        {
          text1: ""
        }
      ],
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",
      input12: "",
      input13: "",
      input14: "",
      input15: "",
      input16: "",
      input17: "",
      input18: "",
      input19: "",
      input20: "",
      input21: "",
      input22: "",
      input23: "",
      input24: "",
      input25: "",
      input26: "",
      input27: "",
      input28: "",
      input29: "",
      input30: "",
      input31: "",
      input32: "",
      input33: "",
      input34: "",
      input35: ""
    };
  },
  };
</script>
