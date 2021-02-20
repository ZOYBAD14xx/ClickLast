
<template>
  <div>
    <vs-table pagination max-items="7" search :data="users">
      <template slot="thead">
        <vs-th sort-key="email">ID</vs-th>
        <vs-th sort-key="username">Product list</vs-th>
        <vs-th sort-key="username">Suppliier</vs-th>
        <vs-th sort-key="website">Quantity</vs-th>
        <vs-th sort-key="id">Actual cost</vs-th>
        <vs-th sort-key="id">Vat(%)</vs-th>
        <vs-th sort-key="id">Shipping cost</vs-th>
        <vs-th sort-key="id">Total actual cost</vs-th>
       
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
          <vs-td :data="data[indextr].quantity">
            {{ data[indextr].quantity }}
          </vs-td>
          <vs-td :data="data[indextr].actualcost">
            {{ data[indextr].actualcost }}
          </vs-td>
          <vs-td :data="data[indextr].vat">
            {{ data[indextr].vat }}
          </vs-td>
          <vs-td :data="data[indextr].shippingcost">
            {{ data[indextr].shippingcost }}
          </vs-td>
          <vs-td :data="data[indextr].total">
            {{ data[indextr].total }}
          </vs-td>
           <vs-button type="line">Create request payment</vs-button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      popupActive2: false,
      popupActive3: false,
      popupActive4: false,
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
          quantity: "50",
          actualcost: "1000$",
          vat: "70$",
          shippingcost: "50$",
          total: "1120$",
          status: "",
        },
        {
          id: 2,
          productlist: "Pen",
          supplier: "Lao suppliier",
          quantity: "50",
          actualcost: "1000$",
          vat: "70$",
          shippingcost: "50$",
          total: "1120$",
          status: "",
        },
        {
          id: 3,
          productlist: "pencil",
          supplier: "Lao suppliier",
          quantity: "50",
          actualcost: "1000$",
          vat: "70$",
          shippingcost: "50$",
          total: "1120$",
          status: "",
        },
        {
          id: 4,
          productlist: "Sticker",
          supplier: "Lao suppliier",
          quantity: "50",
          actualcost: "1000$",
          vat: "70$",
          shippingcost: "50$",
          total: "1120$",
          status: "",
        },
        {
          id: 5,
          productlist: "paper",
          supplier: "Lao suppliier",
          quantity: "50",
          actualcost: "1000$",
          vat: "70$",
          shippingcost: "50$",
          total: "1120$",
          status: "",
        },
      ],
    };
  },
};
</script>      
<style>
</style>