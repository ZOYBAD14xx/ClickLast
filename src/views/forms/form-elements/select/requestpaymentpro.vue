
<template>

 <div>
  <div class="mt-5">
    
    <vs-tabs alignment="fixed">
      <vs-tab label="Request payment">
        <div><div>
      <vs-table  pagination max-items="7" search :data="users">

    <template slot="thead">
      <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="id">Project</vs-th>
      <vs-th sort-key="username">Paid to Company</vs-th>
      <vs-th sort-key="website">Office number</vs-th>
      <vs-th sort-key="id">Contact person</vs-th>
      <vs-th sort-key="id">Contact number</vs-th>
      <vs-th sort-key="id">Status</vs-th> 
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
          <vs-td :data="data[indextr].status">
                 <vs-chip color="warning">
                 Onhold
                 </vs-chip>
          {{ data[indextr].status }}
        </vs-td>
          <vs-button type="line">Detail</vs-button>
      </vs-tr>
    </template>
  </vs-table>
   </div></div>
      </vs-tab>
      <vs-tab label="Request already">
        <div> <vs-table   pagination max-items="7" search :data="users">

     <template slot="thead">
      <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="id">Project</vs-th>
      <vs-th sort-key="username">Paid to company</vs-th>
      <vs-th sort-key="website">Office number</vs-th>
      <vs-th sort-key="id">Contact person</vs-th>
      <vs-th sort-key="id">Contact number</vs-th>
      <vs-th sort-key="id">Status</vs-th>
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
        <vs-td :data="data[indextr].status">
                 <vs-chip color="success">
                 Paid
                 </vs-chip>
          {{ data[indextr].status }}
        </vs-td>
          <vs-button type="line">Detail</vs-button>
      </vs-tr>
    </template>
  </vs-table></div>
      </vs-tab>
    </vs-tabs>
     <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="right" vs-w="6">
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="right" vs-w="6">
        <vs-button
          @click="$router.push('/forms/form-elements/select/createreqpayfirst')"
          type="filled" text-color="#ffffff" 
          >Create Request Payment</vs-button
        >
      </vs-col>
    </vs-row>
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
          "id": 1,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
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
          "project": "CLICKX PROJECT", 
        }, {
          "id": 3,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "project": "CLICK PROJECT", 
        }, {
          "id": 4,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "project": "CLICK PROJECT", 
        }, {
          "id": 5,
          "attendto": "Leanne Graham",
          "addressnumber": "Laos",
          "officenumber": "31524",
          "contactperson": "Sincere@april.biz",
          "tel": "02058788888",
          "email": "mrclickx@gmail.la",
          "project": "CLICK PROJECT", 
        },
      ]
    }
  },
}
</script>      
<style>
</style>