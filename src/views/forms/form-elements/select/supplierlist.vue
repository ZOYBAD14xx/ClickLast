<template>
  <body>
    <div>
      <vx-card title="Supplier details">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mt-4"
              label="VENDOR NAME PER BUSINESS LICENSE"
              v-model="name"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full mt-4" label="ADDRESS" v-model="address" />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mt-4"
              label="VENDOR CONTACT PERSON"
              v-model="contact"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full mt-4" label="POSITION" v-model="position" />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full mt-4" label="WEBSITE" v-model="website" />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-6">
            <vs-input class="w-full mt-4" label="EMAIL" v-model="email" />
          </div>
        </div>
      </vx-card>
    </div>

    <div class="mt-10">
      <vx-card title="BANKING INFORMATION">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mt-4"
              label="Bank name"
              v-model="bankname"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full mt-4" label="SWIFT Code" v-model="scode" />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mt-4"
              label="BANK ACCOUNT CURRENCY"
              v-model="bac"
            />
          </div>
          <div></div>
        </div>

        <div class="my-10">
          <h4>
            For oversea supplier
          </h4>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mt-4"
              label="Intermediary Bank Name"
              v-model="ibn"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mt-4"
              label="Intermediary Bank Name SWIFT Code"
              v-model="ibns"
            />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mt-4"
              label="Bank Account Number"
              v-model="banum"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full mt-4"
              label="Bank Account Holder"
              v-model="bah"
            />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full mt-4" label="IBAN Code" v-model="IBAN" />
          </div>
        </div>

      </vx-card>
    </div>
<div class="mt-15">
     <vx-card class="mt-10" title="Rating">
          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <h6>Your rating</h6>
              <star-rating
                :rtl="$vs.rtl"
                :rating="4"
                :round-start-rating="false"
              ></star-rating>
            </div>

            <div class="vx-col sm:w-1/2 w-full mb-2">
              <h6>Average rating</h6>
              <star-rating
                :rtl="$vs.rtl"
                :rating="4"
                :read-only="true"
              ></star-rating>
            </div>
          </div>
        </vx-card>
</div>
        <div class="mt-10">
          <div class="flex justify-between">
            <div>
              <vs-button
                text-color="#ffffff"
                class="mr-3 mb-2"
                @click="$router.go(-1)"
                >back</vs-button
              >
            </div>
            <div>
    <vs-button color="success"  text-color="#ffffff"  @click="$router.push('/apps/eCommerce/shop')" > Done </vs-button>
      </div>
          </div>
        </div>
  </body>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components:{
    StarRating
  },
  data() {
    return {
      name: "Click",
      address: "VT, LAOS",
      contact: "02055252525",
      position: "Leader",
      tel: "0205565655",
      phone: "0205552152",
      website: "www.click.la",
      email: "click@gmail.com",
      bankname: "Null",
      scode: "Null",
      bac: "Null",
      ibn: "Null",
      ibns: "Null",
      banum: "Null",
      bah: "Null",
      IBAN: "Null"
    };
  }
};
</script>
<style></style>












