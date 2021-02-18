<template>
 <div>
  <div class="mt-5">
    <vs-tabs alignment="fixed">
      <vs-tab label="Project">
        <div><div>
      <vs-table pagination max-items="7" search :data="users">
           <template slot="header">
       
        </template>
    <template slot="thead">
       <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="username">Product Name</vs-th>
      <vs-th sort-key="website">Supplier</vs-th>
      <vs-th sort-key="id">Quantity</vs-th>
       <vs-th sort-key="website">Actual Cost</vs-th>
      <vs-th sort-key="id">VAT</vs-th>
      <vs-th sort-key="website">Shipping cost</vs-th>
      <vs-th sort-key="id">Total actual cost</vs-th>
      <vs-th sort-key="id">Last update</vs-th>
     
     
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="data[indextr].id">
          {{ data[indextr].id }}
        </vs-td>
         <vs-td :data="data[indextr].productname">
          {{ data[indextr].productname }}
        </vs-td>

        <vs-td :data="data[indextr].Supplier">
          {{ data[indextr].Supplier }}
        </vs-td>
         <vs-td :data="data[indextr].Quantity">
          {{ data[indextr].Quantity }}
        </vs-td>
          <vs-td :data="data[indextr].Actualcost">
          {{ data[indextr].Actualcost }}
        </vs-td>
          <vs-td :data="data[indextr].Vat">
          {{ data[indextr].Vat }}
        </vs-td>
         <vs-td :data="data[indextr].shippingcost">
          {{ data[indextr].shippingcost }}
        </vs-td>
         <vs-td :data="data[indextr].totalactualcost">
          {{ data[indextr].totalactualcost }}
        </vs-td>
          <vs-td :data="data[indextr].lastupdate">
          {{ data[indextr].lastupdate }}
      
              <vs-button type="line" @click="popupActive2=true">Product Detail</vs-button>
          <vs-popup classContent="popup-example" title="Product detail" :active.sync="popupActive2" >

 <vs-input class="inputx mb-3" placeholder="Product name" v-model="value1" />
      <vs-input  class="inputx mb-3" placeholder="Model" v-model="value2" />
       <vs-input class="inputx mb-3" placeholder="Color" v-model="value3" />
      <vs-input  class="inputx mb-3" placeholder="Color code" v-model="value4" />
       <vs-input class="inputx mb-3" placeholder="Other" v-model="value5" />
      <vs-input  class="inputx mb-3" placeholder="Material" v-model="value6" />
       <vs-input class="inputx mb-3" placeholder="Size" v-model="value7" />
      <vs-input  class="inputx mb-3" placeholder="Amount " v-model="value8" />
      
     
      <vs-button>Submit</vs-button>

          </vs-popup>
        </vs-td>
         
      </vs-tr>
    </template>
  </vs-table>
   </div></div>
      </vs-tab>
      <vs-tab label="History">
        <div> <vs-table   pagination max-items="7" search :data="users">

     <template slot="thead">
     <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="username">Product Name</vs-th>
      <vs-th sort-key="website">Supplier</vs-th>
      <vs-th sort-key="id">Quantity</vs-th>
       <vs-th sort-key="website">Actual Cost</vs-th>
      <vs-th sort-key="id">VAT</vs-th>
      <vs-th sort-key="website">Shipping cost</vs-th>
      <vs-th sort-key="id">Total actual cost</vs-th>
      <vs-th sort-key="id">Last update</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
    <vs-td :data="data[indextr].id">
          {{ data[indextr].id }}
        </vs-td>
         <vs-td :data="data[indextr].productname">
          {{ data[indextr].productname }}
        </vs-td>

        <vs-td :data="data[indextr].Supplier">
          {{ data[indextr].Supplier }}
        </vs-td>
         <vs-td :data="data[indextr].Quantity">
          {{ data[indextr].Quantity }}
        </vs-td>
          <vs-td :data="data[indextr].Actualcost">
          {{ data[indextr].Actualcost }}
        </vs-td>
          <vs-td :data="data[indextr].Vat">
          {{ data[indextr].Vat }}
        </vs-td>
         <vs-td :data="data[indextr].shippingcost">
          {{ data[indextr].shippingcost }}
        </vs-td>
         <vs-td :data="data[indextr].totalactualcost">
          {{ data[indextr].totalactualcost }}
        </vs-td>
          <vs-td :data="data[indextr].lastupdate">
          {{ data[indextr].lastupdate }}
      
        </vs-td>
           <vs-chip color="#00E676">Done </vs-chip>
          
      </vs-tr>
    </template>
  </vs-table></div>
      </vs-tab>
    </vs-tabs>
  </div>
  
 </div>
 </template>

<script>
export default {
  data() {
    return {
       value1: '',
      value2: '',
       value3: '',
      value4: '',
       value5: '',
      value6: '',
       value7: '',
      value8: '',
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
          "id": 310,
          "productname": "Bottle",
          "Supplier": "A",
          "Quantity": "100",
          "Actualcost": "10",
          "Vat":"0.70",
          "shippingcost":"5",
          "totalactualcost":"15.70",
          "lastupdate":"1.1.2021"
        },
        {
          "id": 311,
           "productname": "Pen",
           "Supplier": "A",
          "Quantity": "100",
          "Actualcost": "10",
          "Vat":"0.70",
          "shippingcost":"5",
          "totalactualcost":"15.70",
          "lastupdate":"2.1.2021"
        },  {
          "id": 312,
           "productname": "Pencil",
           "Supplier": "A",
          "Quantity": "100",
          "Actualcost": "10",
          "Vat":"0.70",
          "shippingcost":"5",
          "totalactualcost":"15.70",
          "lastupdate":"3.1.2021"
        },  {
          "id": 313,
           "productname": "ruler",
            "Supplier": "A",
          "Quantity": "100",
          "Actualcost": "10",
          "Vat":"0.70",
          "shippingcost":"5",
          "totalactualcost":"15.70",
          "lastupdate":"4.1.2021"
        },  {
          "id": 314,
         "productname": "Book",
           "Supplier": "A",
          "Quantity": "100",
          "Actualcost": "10",
          "Vat":"0.70",
          "shippingcost":"5",
          "totalactualcost":"15.70",
          "lastupdate":"5.1.2021"
        },  {
          "id": 315,
          "productname": "eraser",
           "Supplier": "A",
          "Quantity": "100",
          "Actualcost": "10",
          "Vat":"0.70",
          "shippingcost":"5",
          "totalactualcost":"15.70",
          "lastupdate":"6.1.2021"
        },
      ]
    }
  },
}
</script>      
<style>
</style>