
<template>

 <div> 
    
<vs-row
  vs-align="center"
  vs-type="flex" vs-justify="space-around" vs-w="12">
  <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    <vs-button  @click="$router.push('/apps/email')" type="filled">CFO finance</vs-button>
  </vs-col>
  <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
     <vs-button type="filled">Don't have  product</vs-button>
  </vs-col><vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
    <vs-button @click="$router.push('/apps/calendar/inactive')" type="filled">Inactive product</vs-button>
  </vs-col>
</vs-row>
   
   <vs-table multiple v-model="selected" pagination max-items="7" search :data="users">
    <template slot="thead">
      <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="username">Product list</vs-th>
      <vs-th sort-key="website">Price</vs-th>
      <vs-th sort-key="id">Status</vs-th>
      
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].id">
          {{ data[indextr].id }}
        </vs-td>
         <vs-td :data="data[indextr].productlist">
          {{ data[indextr].productlist }}
        </vs-td>
         <vs-td :data="data[indextr].price">
          {{ data[indextr].price }}
        </vs-td>

        <vs-td :data="data[indextr].status">
                 <vs-chip color="success">
                 Active price
                 </vs-chip>
          {{ data[indextr].status }}
        </vs-td>
          <vs-button type="line">Update price</vs-button>
      </vs-tr>
    </template>
  </vs-table>
  <vs-button @click="$router.push('/extensions/clipboard')" type="filled" >Back</vs-button>
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
          "productlist": "Bottle",
          "price": "1.00$",
          "status": "",
        },
       {
          "id": 2,
          "productlist": "Pen",
          "price": "1.00$",
          "status": "",
        },  {
          "id": 3,
          "productlist": "pencil",
          "price": "1.00$",
          "status": "",
        },  {
          "id": 4,
          "productlist": "Sticker",
          "price": "1.00$",
          "status": "",
        },  {
          "id": 5,
          "productlist": "paper",
          "price": "1.00$",
          "status": "",
        },
      ]
    }
  },
}
</script>      
<style>
</style>