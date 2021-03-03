
<template>

 <div> 
    
<vs-row
  vs-align="center"
  vs-type="flex" vs-justify="space-around" vs-w="12">
  <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    <vs-button type="relief">CFO finance</vs-button>
  </vs-col>
  <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
     <vs-button type="filled">Don't have  product</vs-button>
  </vs-col><vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    <vs-button type="filled">Inactive product</vs-button>
  </vs-col>
</vs-row>
   
   <vs-table   pagination max-items="7" search :data="users">
    <template slot="thead">
      <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="username">Supplier</vs-th>
      <vs-th sort-key="website">Price</vs-th>
      <vs-th sort-key="id">Action</vs-th>
      
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].id">
          {{ data[indextr].id }}
        </vs-td>
         <vs-td :data="data[indextr].supplier">
          {{ data[indextr].supplier }}
        </vs-td>
         <vs-td :data="data[indextr].price">
          {{ data[indextr].price }}
        </vs-td>

        <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
  <vs-button @click="$router.push('/apps/calendar/vue-simple-calendar')" type="filled" >Back</vs-button>
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
          "supplier": "Lao Supplier",
          "price": "10.000$",
          "status": "",
        },
     {
          "id": 2,
          "supplier": "Lao Supplier",
          "price": "10.000$",
          "status": "",
        },{
          "id": 3,
          "supplier": "Lao Supplier",
          "price": "10.000$",
          "status": "",
        },{
          "id": 4,
          "supplier": "Lao Supplier",
          "price": "10.000$",
          "status": "",
        },{
          "id": 5,
          "supplier": "Lao Supplier",
          "price": "10.000$",
          "status": "",
        },
      ]
    }
  },
}
</script>      
<style>
</style>