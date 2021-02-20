<template>

 <div>
  <div class="mt-5">
        <div><div>
      <vs-table pagination max-items="7" search :data="users">

    <template slot="thead">
      <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="username">Projectname</vs-th>
      <vs-th sort-key="website">Paid to company</vs-th>
      <vs-th sort-key="id">Supplier</vs-th>
      <vs-th sort-key="id">Date</vs-th>
      <vs-th sort-key="id">Status</vs-th>

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

        <vs-td :data="data[indextr].supplier">
          {{ data[indextr].supplier }}
        </vs-td>
        <vs-td :data="data[indextr].date">
          {{ data[indextr].date }}
        </vs-td>
          <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
        </vs-td>
 <vs-button @click="$router.push( '/forms/form-elements/select/createreqpay')" type="line">Details</vs-button>
      </vs-tr>
    </template>
  </vs-table>
   <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="6">
        <vs-button     text-color="#ffffff" @click="$router.go(-1)" type="filled">Back</vs-button>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
         
      </vs-col>
    </vs-row>
   </div></div>
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
          "projectname": "Leanne Graham",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },
        {
          "id": 2,
          "projectname": "Leanne Graham",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },  {
          "id": 3,
          "projectname": "Leanne Graham",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },  {
          "id": 4,
          "projectname": "Leanne Graham",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },  {
          "id": 5,
          "projectname": "Leanne Graham",
          "customername": "Bret",
          "supplier": "Lao supplier",
          "date": "15.10.2020",
          "status": ""
        },  {
          "id": 6,
          "projectname": "Leanne Graham",
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
<style lang="scss">
@import "@/assets/scss/vuexy/pages/loading.scss";
</style>
