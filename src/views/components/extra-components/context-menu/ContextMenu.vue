
<template>
  <div class="mt-5">
    
      <vs-table pagination max-items="7" search :data="users">

    <template slot="thead">
      <vs-th sort-key="email">No</vs-th>
      <vs-th sort-key="id">Project</vs-th>
      <vs-th sort-key="username">Customer name</vs-th>  
      <vs-th sort-key="website">Office number</vs-th>
      <vs-th sort-key="id">Contact person</vs-th>
      <vs-th sort-key="id">Contact number</vs-th>
      <vs-th sort-key="id">Email</vs-th>
       <vs-th sort-key="id">Paid Type</vs-th>
 
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
           <vs-td :data="data[indextr].pay">
          {{ data[indextr].pay }}
        </vs-td>
          <vs-button type="line" @click="$router.push('/forms/form-elements/select/printquotation')">Print</vs-button>
      </vs-tr>
    </template>
  </vs-table>
 <vs-button @click="$router.push( '/forms/form-elements/select/invoicecreate')" type="filled" text-color="#ffffff" >Create Invoice from Quotation</vs-button>
 </div>
 </template>

<script>
export default {
  data() {
    return {
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
          "contactperson": "MRX",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "pay":"1/3",
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
           "pay":"2/3",
          "project": "CLICKX PROJECT", 
        }, {
          "id": 3,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
           "pay":"1/2",
          "project": "CLICK PROJECT", 
        }, {
          "id": 4,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
           "pay":"3/3",
          "project": "CLICK PROJECT", 
        }, {
          "id": 5,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
           "pay":"1/1",
          "project": "CLICK PROJECT", 
        },
      ]
    }
  },
}
</script>      
<style>
</style>