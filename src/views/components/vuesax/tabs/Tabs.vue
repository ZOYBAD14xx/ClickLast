<template>
<vx-card title="Select Supplier" class="overflow-auto h-auto">

    <vs-table  pagination max-items="11" search :data="users">

      <template slot="thead">

        <vs-th sort-key="id">ID</vs-th>
        <vs-th sort-key="project">Project list</vs-th>
        <vs-th sort-key="name">Name</vs-th>
        <vs-th sort-key="date">Date</vs-th>
        <vs-th sort-key="time">Time</vs-th>
        <vs-th sort-key="action">Supplier details</vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].id">
            {{ data[indextr].id }}
          </vs-td>
          <vs-td :data="data[indextr].project">
            {{ data[indextr].project }}
          </vs-td>
          <vs-td :data="data[indextr].name">
            {{ data[indextr].name }}
          </vs-td>
          <vs-td :data="data[indextr].date">
            {{ data[indextr].date }}
          </vs-td>
          <vs-td :data="data[indextr].time">
            {{ data[indextr].time }}
          </vs-td>

          <vs-td :data="data[indextr].action">
          <button>
            <feather-icon icon="MenuIcon" svgClasses="w-10 h-5 hover:text-primary stroke-current" @click="$router.push('/components/tabs/select')"  />
         </button>
          </vs-td>


        </vs-tr>
      </template>
    </vs-table>
    <div class="flex justify-between mt-10">
        <vs-button class="" text-color="#ffffff" @click="$router.go(-1)" type="filled">Back</vs-button>
        <vs-button class="" text-color="#ffffff" @click="$router.push('/components/tabs')" type="filled">Approve</vs-button>
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
          project: "A",
          name: "Bottle",
          date: "12/2/21",
          time: "8:00 PM",
        },
        {
          id: 2,
          project: "B",
          name: "Cup",
          date: "1/1/21",
          time: "11:00 PM",
        },
        {
          id: 3,
          project: "C",
          name: "Bottle",
          date: "2/2/21",
          time: "11:00 PM",
        },
        {
          id: 4,
          project: "A",
          name: "Glass",
          date: "1/2/21",
          time: "12:00 PM",
        },

      ],
    };
  },
};
</script>

<style lang="scss">

</style>
