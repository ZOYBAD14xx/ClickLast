<template>
 <div>
  <div class="mt-5">
    <h3>Purchase order</h3>
    <vs-tabs alignment="fixed">
      <vs-tab label="Pending">
        <div><div>
      <vs-table  search :data="users">
           <template slot="header">
       
        </template>
    <template slot="thead">
       <vs-th sort-key="email">Project</vs-th>
      <vs-th sort-key="username">Supplier</vs-th>
      <vs-th sort-key="website">Product</vs-th>
      <vs-th sort-key="id">Price</vs-th>
      <vs-th sort-key="id">Quality</vs-th>
      <vs-th sort-key="id">Delivery time</vs-th>
   
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="data[indextr].project">
          {{ data[indextr].project }}
        </vs-td>
         <vs-td :data="data[indextr].supplier">
          {{ data[indextr].supplier }}
        </vs-td>

        <vs-td :data="data[indextr].Product">
          {{ data[indextr].Product }}
        </vs-td>

        <vs-td :data="data[indextr].Price">
          {{ data[indextr].Price }}
        </vs-td>
        <vs-td :data="data[indextr].Quality">
          {{ data[indextr].Quality }}
        </vs-td>
          <vs-td :data="data[indextr].deliverytime">
          {{ data[indextr].deliverytime }}
        </vs-td>
         
         <vs-chip color="#AA00FF">Upload Po</vs-chip>
      </vs-tr>
    
    </template>
    
  </vs-table>
  <vs-button style="margin-left:1100px " >Submit to CFO</vs-button>
   </div></div>
      </vs-tab>
      <vs-tab label="Done">
        <div> <vs-table   pagination max-items="7" search :data="users">

     <template slot="thead">
     <vs-th sort-key="email">Project</vs-th>
      <vs-th sort-key="username">Supplier</vs-th>
      <vs-th sort-key="website">Product</vs-th>
      <vs-th sort-key="id">Price</vs-th>
      <vs-th sort-key="id">Quality</vs-th>
      <vs-th sort-key="id">Delivery time</vs-th>
      <vs-th sort-key="id">Contract</vs-th>
      <vs-th sort-key="id">Status</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
 <vs-td :data="data[indextr].project">
          {{ data[indextr].project }}
        </vs-td>
         <vs-td :data="data[indextr].supplier">
          {{ data[indextr].supplier }}
        </vs-td>

        <vs-td :data="data[indextr].Product">
          {{ data[indextr].Product}}
        </vs-td>

        <vs-td :data="data[indextr].Price">
          {{ data[indextr].Price}}
        </vs-td>
        <vs-td :data="data[indextr].Quality">
          {{ data[indextr].Quality }}
        </vs-td>
          <vs-td :data="data[indextr].deliverytime">
          {{ data[indextr].deliverytime}}
        </vs-td>
         <vs-td :data="data[indextr].Contract">
          {{ data[indextr].Contract}}
          <vs-chip color="#AA00FF">PO Contract </vs-chip>
        </vs-td>
         <vs-td :data="data[indextr].Status">
          {{ data[indextr].Status}}
          <vs-chip color="#00E676">Approve</vs-chip>
        </vs-td>
       
      
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
          "project": "A",
          "supplier": "Company 1",
          "Product": "Table",
          "Price": "120.000kip",
          "Quality": "Good",
          "deliverytime": "3 days"
        },
        {
          "project": "A",
          "supplier": "Company 1",
          "Product": "Table",
          "Price": "120.000kip",
          "Quality": "Good",
          "deliverytime": "3 days"
        },  {
          "project": "A",
          "supplier": "Company 1",
          "Product": "Table",
          "Price": "120.000kip",
          "Quality": "Good",
          "deliverytime": "3 days"
        },  {
          "project": "A",
          "supplier": "Company 1",
          "Product": "Table",
          "Price": "120.000kip",
          "Quality": "Good",
          "deliverytime": "3 days"
        },  {
         "project": "A",
          "supplier": "Company 1",
          "Product": "Table",
          "Price": "120.000kip",
          "Quality": "Good",
          "deliverytime": "3 days"
        },  {
          "project": "A",
          "supplier": "Company 1",
          "Product": "Table",
          "Price": "120.000kip",
          "Quality": "Good",
          "deliverytime": "3 days"
        },
      ]
    }
  },
}
</script>      
<style>
</style>


