
<template>
<vx-card title="Rating" class="overflow-auto h-13">

<div class="flex mb-4">
<div class="w-1/2 bg-grid-color-secondary h-12 mx-5" >
<vx-card class=""
    title="User"
    title-color="primary"
    subtitle-color="warning"
    subtitle="@click123">
    <p class="mb-3">You can use <code>subtitle-color</code> prop to change color of subtitle of card. This prop supports hex, rgba, rgb and theme colors.</p>

<div class="flex flex-wrap items-center justify-between">
         <star-rating :rtl="$vs.rtl" :show-rating="false" @rating-selected="setRating" :star-size="30"></star-rating>
            <div class="font-semibold">{{rating}} </div>
              <vs-button @click="popupActive1=true" text-color="#ffffff" color="primary">Details</vs-button>
        </div>
        <div class="demo-alignment">
            <vs-popup title="Details" :active.sync="popupActive1">

    <vx-card title="Account" class="mb-base">

        <div class="vx-row">

          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png" height="300" />
            </div>
          </div>

          <div class="vx-col flex-2 mt-20" >
            <table>
              <tr>
                <td class="font-semibold">Username: </td>
                <td> KKKK123</td>
              </tr>
              <tr>
                <td class="font-semibold">Name:</td>
                <td>ggg123</td>
              </tr>
              <tr>
                <td class="font-semibold">Email:</td>
                <td>dddd@gmail.com</td>
              </tr>
            </table>
          </div>
          <div class="vx-col flex-2 mt-20" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Status:</td>
                <td>Supplier</td>
              </tr>
              <tr>
                <td class="font-semibold">Role:</td>
                <td>sss</td>
              </tr>
              <tr>
                <td class="font-semibold">Company:</td>
                <td>lllo</td>
              </tr>
            </table>
          </div>
       </div>
      </vx-card>
            </vs-popup>
        </div>

</vx-card>
</div>
<div class="w-1/2 bg-grid-color-secondary h-350 mx-5">
<vx-card class=""
    title="User"
    title-color="primary"
    subtitle-color="warning"
    subtitle="@click123">
    <p class="mb-3">You can use <code>subtitle-color</code> prop to change color of subtitle of card. This prop supports hex, rgba, rgb and theme colors.</p>

<div class="flex flex-wrap items-center justify-between">
         <star-rating :rtl="$vs.rtl" :show-rating="false" @rating-selected="setRating" :star-size="30"></star-rating>
            <div class="font-semibold">{{rating}} </div>
              <vs-button @click="popupActive1=true" text-color="#ffffff" color="primary">Details</vs-button>
        </div>

</vx-card>
</div>

</div>

<div class="flex mb-4">
<div class="w-1/2 bg-grid-color-secondary h-12 mx-5" >
<vx-card class=""
    title="User"
    title-color="primary"
    subtitle-color="warning"
    subtitle="@click123">
    <p class="mb-3">You can use <code>subtitle-color</code> prop to change color of subtitle of card. This prop supports hex, rgba, rgb and theme colors.</p>

<div class="flex flex-wrap items-center justify-between">
         <star-rating :rtl="$vs.rtl" :show-rating="false" @rating-selected="setRating" :star-size="30"></star-rating>
            <div class="font-semibold">{{rating}} </div>
              <vs-button @click="popupActive1=true" text-color="#ffffff" color="primary">Details</vs-button>
        </div>



</vx-card>
</div>
<div class="w-1/2 bg-grid-color-secondary h-350 mx-5">
<vx-card class=""
    title="User"
    title-color="primary"
    subtitle-color="warning"
    subtitle="@click123">
    <p class="mb-3">You can use <code>subtitle-color</code> prop to change color of subtitle of card. This prop supports hex, rgba, rgb and theme colors.</p>

<div class="flex flex-wrap items-center justify-between">
         <star-rating :rtl="$vs.rtl" :show-rating="false" @rating-selected="setRating" :star-size="30"></star-rating>
            <div class="font-semibold">{{rating}} </div>
              <vs-button @click="popupActive1=true"  color="primary" text-color="#ffffff">Details</vs-button>
        </div>

</vx-card>
</div>

</div>
<div class="flex mb-4">
<div class="w-1/2 bg-grid-color-secondary h-12 mx-5" >
<vx-card class=""
    title="User"
    title-color="primary"
    subtitle-color="warning"
    subtitle="@click123">
    <p class="mb-3">You can use <code>subtitle-color</code> prop to change color of subtitle of card. This prop supports hex, rgba, rgb and theme colors.</p>

<div class="flex flex-wrap items-center justify-between">
         <star-rating :rtl="$vs.rtl" :show-rating="false" @rating-selected="setRating" :star-size="30"></star-rating>
            <div class="font-semibold">{{rating}} </div>
              <vs-button @click="popupActive1=true" text-color="#ffffff" color="primary">Details</vs-button>
        </div>



</vx-card>
</div>
<div class="w-1/2 bg-grid-color-secondary h-350 mx-5">
<vx-card class=""
    title="User"
    title-color="primary"
    subtitle-color="warning"
    subtitle="@click123">
    <p class="mb-3">You can use <code>subtitle-color</code> prop to change color of subtitle of card. This prop supports hex, rgba, rgb and theme colors.</p>

<div class="flex flex-wrap items-center justify-between">
         <star-rating :rtl="$vs.rtl" :show-rating="false" @rating-selected="setRating" :star-size="30"></star-rating>
            <div class="font-semibold">{{rating}} </div>
              <vs-button @click="popupActive1=true" text-color="#ffffff" color="primary">Details</vs-button>
        </div>

</vx-card>
</div>

</div>
<div class="flex justify-end mt-10">
        <vs-button class="mx-5" text-color="#ffffff" @click="$router.push('/apps/eCommerce/wish-list')" type="filled">Add new</vs-button>
  </div>
 </vx-card>
</template>

<script>
import StarRating from 'vue-star-rating'
import VxCard from '../../../components/vx-card/VxCard.vue'

export default {
  methods: {

  },
  data () {
    return {
            popupActive1: false
    }
  },
  components: {
    StarRating,
    VxCard
  }
}
</script>

<style lang="scss">

  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }

</style>
