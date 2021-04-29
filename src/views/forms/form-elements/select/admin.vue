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
       <vs-th sort-key="email">No</vs-th>
      <vs-th sort-key="username">Project name</vs-th>
      <vs-th sort-key="website">Plan name</vs-th>
      <vs-th sort-key="id">Amount</vs-th>
      <vs-th sort-key="id">Deadline</vs-th>
       <vs-th sort-key="id">Comment</vs-th>
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
          <vs-chip color="        #FFB300" >10 days left</vs-chip>
        </vs-td>
                <vs-td :data="data[indextr].comment">
          {{ data[indextr].comment }}
        </vs-td>
          <vs-button type="line" @click="$router.push('/forms/form-elements/select/projectdetail')">Details</vs-button>
      </vs-tr>
    </template>
  </vs-table>
   </div></div>
      </vs-tab>
      <vs-tab label="History">
        <div> <vs-table   pagination max-items="7" search :data="users">

      <template slot="thead">
        <vs-th sort-key="email">No</vs-th>
      <vs-th sort-key="username">Project name</vs-th>
      <vs-th sort-key="website">Plan name</vs-th>
      <vs-th sort-key="id">Amount</vs-th>
      <vs-th sort-key="id">Deadline</vs-th>
       <vs-th sort-key="id">Comment</vs-th>
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
          <vs-chip color="        #FFB300" >10 days left</vs-chip>
        </vs-td>
                <vs-td :data="data[indextr].comment">
          {{ data[indextr].comment }}
        </vs-td>
          <vs-button type="line" @click="$router.push('/forms/form-elements/select/projectdetail')">Details</vs-button>
      </vs-tr>
    </template>
  </vs-table></div>
      </vs-tab>
    </vs-tabs>
  </div>
   <vs-button @click="$router.push(  '/forms/form-elements/select/external')" type="filled" text-color="#ffffff" >Create Internal plan</vs-button>
   <vs-button @click="$router.push(  '/forms/form-elements/select/selectproplan')" type="filled" text-color="#ffffff" >Create External plan</vs-button>
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
          "id": "1",
          "projectname": "External plan",
          "customername": "electric",
          "contactperson": "1.000.000kip",
          "contactnumber": "02055667788",
          "Servicetype": "Posm",
          "Registerdate":"25.12.2020",
        },
        {
          "id": "2",
          "projectname": "External plan",
          "customername": "water",
          "contactperson": "500.000kip",
          "contactnumber": "02055667788",
          "Servicetype": "Posm",
          "Registerdate":"25.12.2020"
        },  {
          "id": "3",
          "projectname": "Project c",
          "customername": "bottle",
          "contactperson": "10.000.000kip",
          "contactnumber": "02055667788",
          "Servicetype": "Event",
          "Registerdate":"25.12.2020"
        },  {
          "id": "4",
          "projectname": "Project D",
          "customername": "sticker",
          "contactperson": "3.000.000kip",
          "contactnumber": "02055667788",
          "Servicetype": "Event",
          "Registerdate":"25.12.2020"
        },  {
          "id": "5",
          "projectname": "Project E",
          "customername": "billboard",
          "contactperson": "20.000.000kip",
          "contactnumber": "02055667788",
          "Servicetype": "Advertising",
          "Registerdate":"25.12.2020"
        },  {
          "id": "6",
          "projectname": "Project F",
          "customername": "Bret",
          "contactperson": "100.000kip",
          "contactnumber": "02055667788",
          "Servicetype": "Advertising",
          "Registerdate":"25.12.2020"
        },
      ]
    }
  },
}
</script>      


