
<template>
<vx-card title="Finance approve" class="overflow-auto h-13">
  <div class="financeapprove">
    <vs-table pagination max-items="11" search :data="users">
      <template slot="thead">
        <vs-th sort-key="email">ID</vs-th>
        <vs-th sort-key="username">Product list</vs-th>
        <vs-th sort-key="username">Suppliier</vs-th>
        <vs-th sort-key="website">Quantity</vs-th>
        <vs-th sort-key="id">Actual cost</vs-th>
        <vs-th sort-key="id">Vat(%)</vs-th>
        <vs-th sort-key="id">Shipping cost</vs-th>
        <vs-th sort-key="id">Total actual cost</vs-th>
        <vs-th sort-key="10">  </vs-th>
        <vs-th sort-key="20">  </vs-th>
        <vs-th sort-key="30">  </vs-th>
        <vs-th sort-key="Sale_cost">Sale cost</vs-th>


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
          <vs-td :data="data[indextr].tenper">
             <vs-input label-placeholder="+10%" v-model="value11"/>
          </vs-td>
          <vs-td :data="data[indextr].twentyper">
             <vs-input label-placeholder="+20%" v-model="value22"/>
          </vs-td>
           <vs-td :data="data[indextr].thirdper">
             <vs-input label-placeholder="+30%" v-model="value33"/>
          </vs-td>

          <vs-td :data="data[indextr].Sale_cost">
          <vs-input v-model="data[indextr].Sale_cost" class="mt-5 w-500" v-validate="'required'"  />
          </vs-td>

        </vs-tr>
      </template>
    </vs-table>
    <div class="flex justify-between mt-10">
        <vs-button class="" text-color="#ffffff" @click="$router.go(-1)" type="filled">Back</vs-button>
        <vs-button class="" text-color="#ffffff" @click="$router.push('/forms/form-elements/select/fiapprove')" type="filled">Approve</vs-button>
  </div>
  </div>
</vx-card>
</template>

<script>
export default {
  data() {
    return {
      Sale_cost:"",
      value1: "",
      value2: "",

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
          Sale_cost:"1000$"
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
          Sale_cost:"1050$"
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
          Sale_cost:"1200$"

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
          Sale_cost:"1700$"
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
          Sale_cost:"1900$"
        },
      ],
    };
  },
};
</script>

<style lang="scss">
    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }
</style>
