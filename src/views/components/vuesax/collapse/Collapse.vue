
<template>
  <div>
    <vs-table pagination max-items="7" search :data="users">
      <template slot="thead">
        <vs-th sort-key="email">ID</vs-th>
        <vs-th sort-key="username">Product list</vs-th>
        <vs-th sort-key="website">Price</vs-th>
        <vs-th sort-key="id">Status</vs-th>
      </template>
      <template slot-scope="{ data }">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].id">
            {{ data[indextr].id }}
          </vs-td>
          <vs-td :data="data[indextr].productlist">
            {{ data[indextr].productlist }}
          </vs-td>
          <vs-td :data="data[indextr].price">
            {{ data[indextr].price }}
          </vs-td>

          <vs-td :data="data[indextr].status">
            <vs-chip color="success"> Active price </vs-chip>
            {{ data[indextr].status }}
          </vs-td>
          <vs-button @click="popupActive2 = true" type="line"
            >Update price</vs-button
          >
          <vs-popup
            classContent="popup-example"
            title="Update price"
            :active.sync="popupActive2"
          >
            <vs-input
              class="inputx mb-3"
              placeholder="update price"
              v-model="value1"
            />
            <vs-input
              disabled
              class="inputx mb-3"
              placeholder=""
              v-model="value2"
            />
            <vs-button
              @click="popupActive3 = true"
              color="primary"
              type="filled"
              >Submit</vs-button
            >
          </vs-popup>
        </vs-tr>
      </template>
    </vs-table>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="6">
      <vs-button     text-color="#ffffff" @click="$router.go(-1)" type="filled">Back</vs-button>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-button
          @click="$router.push('/apps/calendar/inactive')"
          type="filled" text-color="#ffffff" 
          >Product request</vs-button
        >
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
          price: "1.00$",
          status: "",
        },
        {
          id: 2,
          productlist: "Pen",
          price: "1.00$",
          status: "",
        },
        {
          id: 3,
          productlist: "pencil",
          price: "1.00$",
          status: "",
        },
        {
          id: 4,
          productlist: "Sticker",
          price: "1.00$",
          status: "",
        },
        {
          id: 5,
          productlist: "paper",
          price: "1.00$",
          status: "",
        },
      ],
    };
  },
};
</script>      
<style>
</style>