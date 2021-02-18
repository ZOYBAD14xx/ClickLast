<template>

   <div class="vx-col w-full ">
    <vx-card title="Approve" class="overflow-auto">
  <div class="mt-5">
    <vs-tabs alignment="fixed">
      <vs-tab label="Request approve">
        <div>
      <vs-table pagination max-items="4" search :data="users">

     <template slot="thead">
      <vs-th sort-key="no">NO.</vs-th>
      <vs-th sort-key="name">NAME</vs-th>
      <vs-th sort-key="category">CATEGORY</vs-th>
      <vs-th sort-key="status">STATUS</vs-th>
      <vs-th sort-key="action">ACTION</vs-th>

    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].no">
          {{ data[indextr].no }}
        </vs-td>
         <vs-td :data="data[indextr].name">
          {{ data[indextr].name}}
        </vs-td>

        <vs-td :data="data[indextr].category">
          {{ data[indextr]. category}}
        </vs-td>

        <vs-td :data="data[indextr].status">
        <vs-chip color="warning">
                 Waiting
            </vs-chip>
            </vs-td>
        <vs-td :data="data[indextr].edit" class="whitespace-no-wrap">
                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" />
              </vs-td>
      </vs-tr>
    </template>
  </vs-table>
   </div>
   </vs-tab>
      <vs-tab label="Approve already">
        <div> <vs-table   pagination max-items="4" search :data="users">

    <template slot="thead">
      <vs-th sort-key="no">NO.</vs-th>
      <vs-th sort-key="name">NAME</vs-th>
      <vs-th sort-key="category">CATEGORY</vs-th>
      <vs-th sort-key="status">STATUS</vs-th>
      <vs-th sort-key="action">ACTION</vs-th>

    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].no">
          {{ data[indextr].no }}
        </vs-td>
         <vs-td :data="data[indextr].name">
          {{ data[indextr].name}}
        </vs-td>

        <vs-td :data="data[indextr].category">
          {{ data[indextr]. category}}
        </vs-td>

        <vs-td :data="data[indextr].status">
          <vs-chip color="success">
              Done
            </vs-chip>
        </vs-td>
        <vs-td :data="data[indextr].edit" class="whitespace-no-wrap">
                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" />
              </vs-td>
      </vs-tr>
    </template>
  </vs-table></div>
      </vs-tab>
    </vs-tabs>
  </div>
   </vx-card>
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
          "no":"1",
          "name":"Product1",
          "category":"",
        },
        {
          "no":"2",
          "name":"Product2",
          "category":"",


        },
        {
          "no":"3",
          "name":"Product3",
          "category":"",


        },
        {
          "no":"4",
          "name":"Product4",
          "category":"",


        },
      ]
    }
  },
}
</script>
