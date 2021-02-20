<template>

 <div>
  <div class="mt-5">
    
    <vs-tabs alignment="fixed">
      <vs-tab label="Project">
        <div><div>
      <vs-table pagination max-items="7" search :data="users">

    <template slot="thead">
      <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="username">Projectname</vs-th>
      <vs-th sort-key="website">Customer name</vs-th>
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

       
      </vs-tr>
    </template>
  </vs-table>
   </div></div>
      </vs-tab>
      <vs-tab label="History">
        <div> <vs-table   pagination max-items="7" search :data="users">

    <template slot="thead">
      <vs-th sort-key="email">ID</vs-th>
      <vs-th sort-key="username">Projectname</vs-th>
      <vs-th sort-key="website">Customer name</vs-th>
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
