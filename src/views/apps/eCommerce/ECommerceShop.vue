<template>

 <div>
  <div class="mt-5">

        <div><div>

      <vs-table pagination max-items="7" search :data="users">

              <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer text-lg font-medium text-base text-primary border border-solid border-primary">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary"  @click="$router.push('/forms/form-elements/select/supplierlistAdd')">Add New</span>
          </div>
        </div>
        </div>


    <template slot="thead">
      <vs-th sort-key="name">COMPANY NAME</vs-th>
      <vs-th sort-key="address">ADDRESS</vs-th>
      <vs-th sort-key="tel">COMPANY TEL</vs-th>
      <vs-th sort-key="contact">CONTACT PERSON</vs-th>
      <vs-th sort-key="position">POSITION</vs-th>
      <vs-th sort-key="phone">CONTACT NUMBER</vs-th>
      <vs-th sort-key="website">WEBSITE</vs-th>
      <vs-th sort-key="rating">AVG RATING</vs-th>
      <vs-th sort-key="status">STATUS</vs-th>

    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

        <vs-td :data="data[indextr].name">
          {{ data[indextr].name }}
        </vs-td>
         <vs-td :data="data[indextr].address">
          {{ data[indextr].address }}
        </vs-td>
        <vs-td :data="data[indextr].tel">
          {{ data[indextr].tel }}
        </vs-td>
        <vs-td :data="data[indextr].contact">
          {{ data[indextr].contact }}
        </vs-td>

        <vs-td :data="data[indextr].position">
          {{ data[indextr].position }}
        </vs-td>

        <vs-td :data="data[indextr].phone">
          {{ data[indextr].phone }}
        </vs-td>
        <vs-td :data="data[indextr].website">
          {{ data[indextr].website }}
        </vs-td>
        <vs-td :data="data[indextr].rating">
          <star-rating :rtl="$vs.rtl" :inline="true" :star-size="20" :read-only="true" :show-rating="false" :rating="4"></star-rating>
        </vs-td>

          <vs-td :data="data[indextr].status">
           <feather-icon icon="MenuIcon" svgClasses="w-10 h-5 hover:text-primary stroke-current" @click="$router.push('/forms/form-elements/select/supplierlist')" />
        </vs-td>


      </vs-tr>
    </template>
  </vs-table>
   </div></div>
  </div>
 </div>
 </template>

<script>
import StarRating from 'vue-star-rating'

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
        name:'Click',
        address:'VT, Laos',
        contact:'02055252525',
        position:'Leader',
        tel:'5565565',
        fax:'001001101',
        phone:'25254452',
        website:'www.click.la',
        status:'',
      },
       {
        name:'Click2',
        address:'VT, Laos',
        contact:'02055252525',
        position:'Leader',
        tel:'5565565',
        fax:'001001101',
        phone:'25254452',
        website:'www.click.la',
        status:'',
      },
       {
        name:'Click3',
        address:'VT, Laos',
        contact:'02055252525',
        position:'Leader',
        tel:'5565565',
        fax:'001001101',
        phone:'25254452',
        website:'www.click.la',
        status:'',
      },
       {
        name:'Click4',
        address:'VT, Laos',
        contact:'02055252525',
        position:'Leader',
        tel:'5565565',
        fax:'001001101',
        phone:'25254452',
        website:'www.click.la',
        status:'',
      },
       {
        name:'Click5',
        address:'VT, Laos',
        contact:'02055252525',
        position:'Leader',
        tel:'5565565',
        fax:'001001101',
        phone:'25254452',
        website:'www.click.la',
        status:'',
      },
      ],
    }
  },
  components: {
    StarRating
  }
}
</script>
