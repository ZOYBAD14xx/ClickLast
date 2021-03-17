
<template>
 <div>
      <div class="vx-col w-full  mb-base">
 <vx-card title="Upload artwork" class="overflow-auto">
  <div class="mt-5">

    <vs-tabs alignment="fixed">
      <vs-tab label="Request artwork">
        <br>
  <div id="data-list-thumb-view" class="data-list-container">

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

    <vs-table ref="table" v-model="selected" pagination :max-items="itemsPerPage" search :data="products">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Add New</span>
          </div>
        </div>
      </div>

      <template slot="thead">
        <vs-th sort-key="name">Name</vs-th>
        <vs-th sort-key="material">Material</vs-th>
        <vs-th sort-key="size">Size</vs-th>
        <vs-th sort-key="color">Color</vs-th>
        <vs-th sort-key="color_code">Color code</vs-th>
        <vs-th sort-key="other">Other</vs-th>
        <vs-th sort-key="order_status">Order Status</vs-th>
          <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.name }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.material }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.size }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.color }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.color_code }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.other }}</p>
            </vs-td>
                  <vs-td>
              <vs-chip :color="getOrderStatusColor(tr.order_status)" class="product-order-status">{{ tr.order_status | title }}</vs-chip>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="MenuIcon" svgClasses="w-10 h-5 hover:text-primary stroke-current" @click="$router.push('/Design/APD')" />
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)"/>
            </vs-td>
          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
      </vs-tab>


       <vs-tab label="Already artwork">
        <br>
  <div id="data-list-thumb-view" class="data-list-container">

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

    <vs-table ref="table" v-model="selected" pagination :max-items="itemsPerPage" search :data="products">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Add New</span>
          </div>
        </div>
      </div>

      <template slot="thead">
        <vs-th sort-key="name">Name</vs-th>
        <vs-th sort-key="material">Material</vs-th>
        <vs-th sort-key="size">Size</vs-th>
        <vs-th sort-key="color">Color</vs-th>
        <vs-th sort-key="color_code">Color code</vs-th>
        <vs-th sort-key="other">Other</vs-th>
        <vs-th sort-key="order_status">Order Status</vs-th>
          <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.name }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.material }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.size }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.color }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.color_code }}</p>
            </vs-td>
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.other }}</p>
            </vs-td>
                  <vs-td>
              <vs-chip :color="getOrderStatusColor(tr.order_statusAlready)" class="product-order-status">{{ tr.order_statusAlready | title }}</vs-chip>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="MenuIcon" svgClasses="w-10 h-5 hover:text-primary stroke-current" @click="$router.push('/design/artwork/details')" />
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr)" />
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)"/>
            </vs-td>
          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
      </vs-tab>





    </vs-tabs>
  </div>
     </vx-card>
        </div>
 </div>
 </template>
</template>

<script>
import DataViewSidebar from '../DataViewSidebar.vue'
import moduleDataList from '@/store/data-list/moduleDataList.js'

export default {
  components: {
    DataViewSidebar
  },
  data () {
    return {
      selected: [],
      // products: [],
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      popupActive: false,
      sidebarData: {},

    }
  },
  computed: {

    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    products () {
      return this.$store.state.dataList.products
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.products.length
    }
  },
  methods: {

    addNewData () {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },

    editData (data) {
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    editData (data) {
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    deleteData(id){
     this.$store.dispatch('dataList/removeItem', id).catch(err => { console.error(err) })
    },

    getOrderStatusColor (status) {
      if (status === 'Waiting')   return 'warning'
      if (status === 'Success') return 'success'
      if (status === 'canceled')  return 'danger'
      return 'primary'
    },

    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    },

    },
  created () {
    if (!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }
    this.$store.dispatch('dataList/fetchDataListItems')
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style lang="scss">
#data-list-thumb-view {
  .vs-con-table {

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap-reverse;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;


      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 10px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
            &.img-container {
              // width: 1rem;
              // background: #fff;

              span {
                display: flex;
                justify-content: flex-start;
              }

              .product-img {
                height: 110px;
              }
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
