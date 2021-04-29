
<template>

 <div>
  <div class="mt-5">
    
   
      <vs-table   pagination max-items="7" search :data="users">

    <template slot="thead">
      <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="id">Project</vs-th>
      <vs-th sort-key="username">Customer name</vs-th>
      <vs-th sort-key="website">Office number</vs-th>
      <vs-th sort-key="id">Contact person</vs-th>
      <vs-th sort-key="id">Contact number</vs-th>
      <vs-th sort-key="id">Email</vs-th> 
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].id">
          {{ data[indextr].id }}
        </vs-td>
       <vs-td :data="data[indextr].project">
          {{ data[indextr].project }}
        </vs-td>
         <vs-td :data="data[indextr].attendto">
          {{ data[indextr].attendto }}
        </vs-td>
        <vs-td :data="data[indextr].officenumber">
          {{ data[indextr].officenumber}}
        </vs-td>

        <vs-td :data="data[indextr].contactperson">
          {{ data[indextr].contactperson }}
        </vs-td>
        <vs-td :data="data[indextr].tel">
          {{ data[indextr].tel }}
        </vs-td>
          <vs-td :data="data[indextr].email">
          {{ data[indextr].email }}
        </vs-td>
          <vs-button @click=" popupActivo=true"  type="line">Create Invoice</vs-button>
           <vs-popup class="holamundo"  title="Payment options" :active.sync="popupActivo">
             <p>Select Time of payment</p>
    <div>
       <v-select :options="['1/1','1/2','1/3','2/2','2/3','3/3']" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div> <br><br><br><br><br><br><br><br>
  <vs-button  text-color="#ffffff"  type="filled">Create Invoice</vs-button>
    </vs-popup>
      </vs-tr>
    </template>
  </vs-table>
   </div></div>
     
    </template>
  </vs-table></div>
  <vs-button     text-color="#ffffff" @click="$router.go(-1)" type="filled">Back</vs-button>
 </div>
 </template>

<script>
   import vSelect from 'vue-select'
export default {
   components: {
    'v-select': vSelect,
  },
  data() {
    return {
         popupActivo:false,
      selected: [],
      'tableList': [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],
      users: [
       {
          "id": 1,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "project": "CLICK PROJECT", 
        },   {
          "id": 1,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "project": "CLICK PROJECT", 
        },
       {
          "id": 2,
          "attendto": "Leanne X",
          "addressnumber": "Laos",
          "officenumber": "31234",
          "contactperson": "Sincersde@april.biz",
          "tel": "02058778888",
          "email": "mrclickx@gmail.la",
          "project": "CLICKX PROJECT", 
        }, {
          "id": 3,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "project": "CLICK PROJECT", 
        }, {
          "id": 4,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "project": "CLICK PROJECT", 
        }, {
          "id": 5,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "project": "CLICK PROJECT", 
        },
      ]
    }
  },
}
</script>      
<style>
</style>


