<template>
<vx-card title="Supplier details" class="overflow-auto h-13">
  <div>
    <vs-table pagination max-items="11" search :data="users">
      <template slot="thead">
        <vs-th sort-key="email">ID</vs-th>
        <vs-th sort-key="username">Product list</vs-th>
        <vs-th sort-key="username">Suppliier</vs-th>
        <vs-th sort-key="quality">Quality</vs-th>
        <vs-th sort-key="cost">Cost</vs-th>
        <vs-th sort-key="delivery">Delivery Time</vs-th>
        <vs-th sort-key="producing">Producing</vs-th>
        <vs-th sort-key="contact">Contact</vs-th>

      </template>
      <template slot-scope="{ data }">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].id">
            {{ data[indextr].id }}
          </vs-td>
          <vs-td :data="data[indextr].productlist">
            {{ data[indextr].productlist }}
          </vs-td>
          <vs-td :data="data[indextr].supplier">
            {{ data[indextr].supplier }}
          </vs-td>
          <vs-td :data="data[indextr].quality">
            {{ data[indextr].quality }}
          </vs-td>
          <vs-td :data="data[indextr].cost">
            {{ data[indextr].cost+' $' }}
          </vs-td>
          <vs-td :data="data[indextr].delivery">
            {{ data[indextr].delivery+ ' Days'}}
          </vs-td>
          <vs-td :data="data[indextr].producing">
            {{ data[indextr].producing +' Days' }}
          </vs-td>
          <vs-td :data="data[indextr].contact">
            {{'020 '+ data[indextr].contact }}
          </vs-td>

        </vs-tr>
      </template>
    </vs-table>
  </div>

 <div class="flex justify-end mt-10">
        <vs-button class="" text-color="#ffffff" @click="$router.push('/components/tabs')" type="filled">Back</vs-button>
        <vs-button class="mx-5" text-color="#ffffff" @click="$router.push('/components/tabs/select/2')" type="filled">Select supplier</vs-button>

  </div>

</vx-card>

</template>
<script>
export default {
  data() {
    return {
      selected: [],
      tableList: [
        "vs-th: Component",
        "vs-tr: Component",
        "vs-td: Component",
        "thread: Slot",
        "tbody: Slot",
        "header: Slot",
      ],
      users: [
        {
          id: 1,
          productlist: "Bottle",
          supplier: "Lao suppliier",
          quality:"ddd",
          cost:"100",
          delivery:"2",
          producing: "7",
          contact: "55546436",
        },
        {
          id: 2,
          productlist: "Bottle",
          supplier: "Lao suppliier",
          quality:"gdf",
          cost:"190",
          delivery:"2",
          producing: "7",
          contact: "55546436",
        },
        {
          id: 3,
          productlist: "Bottle",
          supplier: "Lao suppliier",
          quality:"tdy",
          cost:"100",
          delivery:"2",
          producing: "6",
          contact: "55576346",
        },
        {
          id: 4,
          productlist: "Bottle",
          supplier: "Lao suppliier",
           quality:"ddd",
          cost:"100",
          delivery:"2",
          producing: "5",
          contact: "58546436",
        },
        {
          id: 5,
          productlist: "Bottle",
          supplier: "Lao suppliier",
          quality:"htd",
          cost:"150",
          delivery:"2",
          producing: "9",
          contact: "99546436",
        },

      ],
    };
  },
};
</script>
