<template>
 <div>
  <div class="mt-5">
   
        <div><div>
      <vs-table pagination max-items="7" search :data="users">
           <template slot="header">
          <vs-button  text-color="#ffffff" @click="popupActive2=true">New Customer</vs-button>
          <vs-popup classContent="popup-example" title="New customer" :active.sync="popupActive2" >
            
      <vs-input class="inputx mb-3" placeholder="Customer name" v-model="value1" />
      <vs-input  class="inputx mb-3" placeholder="Address" v-model="value2" />
       <vs-input class="inputx mb-3" placeholder="Office number" v-model="value3" />
      <vs-input  class="inputx mb-3" placeholder="Contact person" v-model="value4" />
       <vs-input class="inputx mb-3" placeholder="Contact number" v-model="value5" />
      <vs-input  class="inputx mb-3" placeholder="email" v-model="value6" />
       <vs-input class="inputx mb-3" placeholder="website" v-model="value7" />
      <vs-input  class="inputx mb-3" placeholder="Request received " v-model="value8" />
       <vs-input class="inputx mb-3" placeholder="Delivery date" v-model="value9" />
     
      <vs-button>Submit</vs-button>
          </vs-popup>
        </template>
    <template slot="thead">
      <vs-th sort-key="email">Customer name</vs-th>
      <vs-th sort-key="id">Address</vs-th>
      <vs-th sort-key="username">Office number</vs-th>
      <vs-th sort-key="id">Contact person</vs-th>
      <vs-th sort-key="website">Contact number</vs-th>
      <vs-th sort-key="id">Email</vs-th>
      <vs-th sort-key="id">Website</vs-th>
      <vs-th  sort-key="id">Request received by</vs-th>
      <vs-th  sort-key="id">Delivery date</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="data[indextr].customername">
          {{ data[indextr].customername }}
        </vs-td>
          <vs-td :data="data[indextr].address">
          {{ data[indextr].address }}
        </vs-td>
         <vs-td :data="data[indextr].officenumber">
          {{ data[indextr].officenumber }}
        </vs-td>
         <vs-td :data="data[indextr].contactperson">
          {{ data[indextr].contactperson }}
        </vs-td>

        <vs-td :data="data[indextr].contactnumber">
          {{ data[indextr].contactnumber}}
        </vs-td>

        <vs-td :data="data[indextr].email">
          {{ data[indextr].email }}
        </vs-td>
        <vs-td :data="data[indextr].website">
          {{ data[indextr].website }}
        </vs-td>
         <vs-td :data="data[indextr].requestreceived">
          {{ data[indextr].requestreceived }}
        </vs-td>
          <vs-td :data="data[indextr].deliverydate">
          {{ data[indextr].deliverydate }}
        </vs-td>
          
      </vs-tr>
    </template>
  </vs-table>
   </div></div>
    
     
   
  
  </div>
  
 </div>
 </template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      popupActive2: false,
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
          "customername": "kinimosawa",
          "address": "Laos",
          "officenumber": "31524",
          "contactperson": "MRX",
          "contactnumber": "02055445566",
          "email": "kinimosawa@gmail.com",
          "website": "www.example.com",
          "requestreceived":"MRX",
          "deliverydate": "29/12/2020", 
        },
       {
         "customername": "kinimosawa",
          "address": "Laos",
          "officenumber": "31524",
          "contactperson": "MRX",
          "contactnumber": "02055445566",
          "email": "kinimosawa@gmail.com",
          "website": "www.example.com",
          "requestreceived":"MRX",
          "deliverydate": "29/12/2020",  
        }, {
         "customername": "kinimosawa",
          "address": "Laos",
          "officenumber": "31524",
          "contactperson": "MRX",
          "contactnumber": "02055445566",
          "email": "kinimosawa@gmail.com",
          "website": "www.example.com",
          "requestreceived":"MRX",
          "deliverydate": "29/12/2020", 
        }, {
          "customername": "kinimosawa",
          "address": "Laos",
          "officenumber": "31524",
          "contactperson": "MRX",
          "contactnumber": "02055445566",
          "email": "kinimosawa@gmail.com",
          "website": "www.example.com",
          "requestreceived":"MRX",
          "deliverydate": "29/12/2020", 
        }, {
         "customername": "kinimosawa",
          "address": "Laos",
          "officenumber": "31524",
          "contactperson": "MRX",
          "contactnumber": "02055445566",
          "email": "kinimosawa@gmail.com",
          "website": "www.example.com",
          "requestreceived":"MRX",
          "deliverydate": "29/12/2020", 
        },
      ]
    }
  },
}
</script>      
<style>
</style>