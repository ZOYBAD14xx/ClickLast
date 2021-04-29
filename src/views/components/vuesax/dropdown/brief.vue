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
      <vs-th sort-key="username">Project name</vs-th>
      <vs-th sort-key="website">Customer name</vs-th>
      <vs-th sort-key="id">Contact Person</vs-th>
      <vs-th sort-key="id">Contact Number</vs-th>
       <vs-th sort-key="id">Service Type</vs-th>
       <vs-th sort-key="id">Register date</vs-th>
   
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
        <vs-td :data="data[indextr].contactnumber">
          {{ data[indextr].contactnumber }}
        </vs-td>
          <vs-td :data="data[indextr].Servicetype">
          {{ data[indextr].Servicetype }}
        
        </vs-td>
         
          <vs-td :data="data[indextr].Registerdate">
          {{ data[indextr].Registerdate }}
        <vs-button type="line" @click="$router.push('/import-export/export')" >Detail</vs-button>
         
            
        </vs-td>
         
      </vs-tr>
         <vs-button  @click="$router.push('/components/dropdown')" >Create Brief form</vs-button>
    </template>
  </vs-table>
   </div></div>
      </vs-tab>
      <vs-tab label="History">
        <div> <vs-table   pagination max-items="7" search :data="users">

     <template slot="thead">
     <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="username">Project name</vs-th>
      <vs-th sort-key="website">Customer name</vs-th>
      <vs-th sort-key="id">Contact Person</vs-th>
      <vs-th sort-key="id">Contact Number</vs-th>
       <vs-th sort-key="id">Service Type</vs-th>
       <vs-th sort-key="id">Register date</vs-th>
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
        <vs-td :data="data[indextr].contactnumber">
          {{ data[indextr].contactnumber }}
        </vs-td>
          <vs-td :data="data[indextr].Servicetype">
          {{ data[indextr].Servicetype }}
        
        </vs-td>
         
          <vs-td :data="data[indextr].Registerdate">
          {{ data[indextr].Registerdate }}
     
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
          "id": "PJ-PM-210001",
          "projectname": "Project A",
          "customername": "Bret",
          "contactperson": "Mrx",
          "contactnumber": "02055667788",
          "Servicetype": "Posm",
          "Registerdate":"25.12.2020",
        },
        {
          "id": "PJ-EV-210002",
          "projectname": "Project B",
          "customername": "Bret",
          "contactperson": "Mrx",
          "contactnumber": "02055667788",
          "Servicetype": "Posm",
          "Registerdate":"25.12.2020"
        },  {
          "id": "PJ-EV-210001",
          "projectname": "Project c",
          "customername": "Bret",
          "contactperson": "Mrx",
          "contactnumber": "02055667788",
          "Servicetype": "Event",
          "Registerdate":"25.12.2020"
        },  {
          "id": "PJ-EV-210002",
          "projectname": "Project D",
          "customername": "Bret",
          "contactperson": "kinimosawa",
          "contactnumber": "02055667788",
          "Servicetype": "Event",
          "Registerdate":"25.12.2020"
        },  {
          "id": "PJ-AD-210001",
          "projectname": "Project E",
          "customername": "Bret",
          "contactperson": "Mrx",
          "contactnumber": "02055667788",
          "Servicetype": "Advertising",
          "Registerdate":"25.12.2020"
        },  {
          "id": "PJ-AD-210002",
          "projectname": "Project F",
          "customername": "Bret",
          "contactperson": "Mrx",
          "contactnumber": "02055667788",
          "Servicetype": "Advertising",
          "Registerdate":"25.12.2020"
        },
      ]
    }
  },
}
</script>      


