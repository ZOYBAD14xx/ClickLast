<template>
<div class="mt-5">
    <h3> Sale/marketing manager  </h3>
    <vs-tabs alignment="fixed">
      <vs-tab label="Approve">
        <div><div>
      <vs-table  search :data="users">
           <template slot="header">
       
        </template>
    <template slot="thead">
       <vs-th sort-key="email">Project name</vs-th>
      <vs-th sort-key="username">Date</vs-th>
      <vs-th sort-key="website">Status</vs-th>
      
   
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="data[indextr].projectname">
          {{ data[indextr].projectname }}
        </vs-td>
         <vs-td :data="data[indextr].date">
          {{ data[indextr].date }}
        </vs-td>

        <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
          <vs-chip color="#FFB300" >Pending</vs-chip>
        </vs-td>

        
         
      </vs-tr>
    </template>
  </vs-table>
   </div></div>
      </vs-tab>
      <vs-tab label="Approve already">
        <div> <vs-table   pagination max-items="7" search :data="users">

     <template slot="thead">
    <vs-th sort-key="email">Project name</vs-th>
      <vs-th sort-key="username">Date</vs-th>
      <vs-th sort-key="website">Status</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
 <vs-td :data="data[indextr].projectname">
          {{ data[indextr].projectname }}
        </vs-td>
         <vs-td :data="data[indextr].date">
          {{ data[indextr].date }}
        </vs-td>

        <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
          <vs-chip color="#00E676">Done</vs-chip>
        </vs-td>

          
      </vs-tr>
    </template>
  </vs-table></div>
      </vs-tab>
    </vs-tabs>
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
          "projectname": "Project 1",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status":""
        },
        {
          "id": 2,
          "projectname": "Project 2",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },  {
          "id": 3,
         "projectname": "Project 3",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },  {
          "id": 4,
        "projectname": "Project 4",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },  {
          "id": 5,
        "projectname": "Project 5",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },  {
          "id": 6,
         "projectname": "Project 6",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },
      ]
    }
  },
}
</script>      
<style>
</style>


