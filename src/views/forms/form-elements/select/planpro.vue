<template>
 
 
 
      <vs-table pagination max-items="7" search :data="users">
           <template slot="header">
       
        </template>
    <template slot="thead">
       <vs-th sort-key="email">No</vs-th>
      <vs-th sort-key="username">Project name</vs-th>
      <vs-th sort-key="website">Customer name</vs-th>
      <vs-th sort-key="id">Service Type</vs-th>
      <vs-th sort-key="id">Status</vs-th>
       <vs-th sort-key="id">Quotation Deadline</vs-th>
       <vs-th sort-key="id">Product Deadline</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="data[indextr].id">
          {{ data[indextr].id }}
        </vs-td>
         <vs-td :data="data[indextr].projectname">
          {{ data[indextr].projectname }}
        </vs-td>

        <vs-td :data="data[indextr].customername">
          {{ data[indextr].customername }}
        </vs-td>

        <vs-td :data="data[indextr].contactperson">
          {{ data[indextr].contactperson }}
        </vs-td>
         <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
          <vs-chip color="lightblue" >Wait for Quotation</vs-chip>
        </vs-td>
         
         <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
          <vs-chip color="orange" >14 days left</vs-chip>
        </vs-td>
         <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
          <vs-chip color="        #FFB300" >10 days left</vs-chip>
        </vs-td>
          <vs-button type="line" @click="$router.push('/apps/todo')">Details</vs-button>
      </vs-tr>
    </template>
  </vs-table>
  
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
          "id": "1",
          "projectname": "Project A",
          "customername": "Bret",
          "contactperson": "Advertising",
          "contactnumber": "02055667788",
          "Servicetype": "Posm",
          "Registerdate":"25.12.2020",
        },
        {
          "id": "2",
          "projectname": "Project B",
          "customername": "Bret",
          "contactperson": "Advertising",
          "contactnumber": "02055667788",
          "Servicetype": "Posm",
          "Registerdate":"25.12.2020"
        },  {
          "id": "3",
          "projectname": "Project c",
          "customername": "Bret",
          "contactperson": "POSM",
          "contactnumber": "02055667788",
          "Servicetype": "Event",
          "Registerdate":"25.12.2020"
        },  {
          "id": "4",
          "projectname": "Project D",
          "customername": "Bret",
          "contactperson": "Event",
          "contactnumber": "02055667788",
          "Servicetype": "Event",
          "Registerdate":"25.12.2020"
        },  {
          "id": "5",
          "projectname": "Project E",
          "customername": "Bret",
          "contactperson": "Event",
          "contactnumber": "02055667788",
          "Servicetype": "Advertising",
          "Registerdate":"25.12.2020"
        },  {
          "id": "6",
          "projectname": "Project F",
          "customername": "Bret",
          "contactperson": "Traditional",
          "contactnumber": "02055667788",
          "Servicetype": "Advertising",
          "Registerdate":"25.12.2020"
        },
      ]
    }
  },
}
</script>      


