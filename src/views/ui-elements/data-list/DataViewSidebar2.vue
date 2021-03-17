<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE" }} ITEM</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>
    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

        <vs-input label="Supplier 1" v-model="dataSupplier1" class="mt-5 w-auto" name="item-supplier1" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-supplier1')">{{ errors.first('item-supplier1') }}</span>

        <vs-input label="Supplier 2" v-model="dataSupplier2" class="mt-5 w-auto" name="item-supplier2" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-supplier2')">{{ errors.first('item-supplier2') }}</span>

        <vs-input label="Supplier 3" v-model="dataSupplier3" class="mt-5 w-auto" name="item-supplier3" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-supplier3')">{{ errors.first('item-supplier3') }}</span>

        <!-- ===================== -->

        <vs-textarea height="150px" label="Reason Supplier 1" v-model="dataResonSupplier1" class="mt-5 w-auto" name="item-Resonsupplier1" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-Resonsupplier1')">{{ errors.first('item-Resonsupplier1') }}</span>

        <vs-textarea height="150px" label="Reason Supplier 2" v-model="dataResonSupplier2" class="mt-5 w-auto" name="item-Resonsupplier2" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-Resonsupplier2')">{{ errors.first('item-Resonsupplier2') }}</span>

        <vs-textarea height="150px" label="Reason Supplier 3" v-model="dataResonSupplier3" class="mt-5 w-auto" name="item-Resonsupplier3" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-Resonsupplier3')">{{ errors.first('item-Resonsupplier3') }}</span>
    </component>
    <div class="flex flex-wrap items-center justify-end p-6" slot="footer">
      <vs-button text-color="#ffffff" class="mr-6" @click="submitData" :disabled="!isFormValid">Submit</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    VuePerfectScrollbar
  },
  data () {
    return {

      dataId: null,
      dataSupplier: '',
      dataMeter: '',
      dataSize: '',
      dataColor: '',
      dataColor_code: '',
      dataOther: '',

      dataCategory: null,
      dataImg: null,
      dataOrder_status: 'pending',
      dataPrice: 0,

      category_choices: [
        {text:'Audio', value:'audio'},
        {text:'Computers', value:'computers'},
        {text:'Fitness', value:'fitness'},
        {text:'Appliance', value:'appliance'}
      ],

      order_status_choices: [
        {text:'Pending', value:'pending'},
        {text:'Canceled', value:'canceled'},
        {text:'Delivered', value:'delivered'},
        {text:'Waiting', value:'Waiting'}
      ],
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .30
      }
    }
  },
  watch: {
    isSidebarActive (val) {
      if (!val) return
      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        const { category, id, img, name, material,size,color,color_code,other, order_status, price } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataCategory = category
        this.dataImg = img

        this.dataSupplier = name
        this.dataMeter = material
        this.dataSize = size
        this.dataColor = color
        this.dataColor_code = color_code
        this.dataOther = other

        this.dataOrder_status = order_status
        this.dataPrice = price
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataSupplier, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid () {
      return !this.errors.any() && this.dataSupplier && this.dataMeter && this.dataSize&& this.dataColor&& this.dataColor_code&& this.dataOther && this.dataCategory && this.dataPrice > 0
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataSupplier = ''
      this.dataMeter = ''
      this.dataSize= ''
      this.dataColor= ''
      this.dataColor_code= ''
      this.dataOther= ''
      this.dataCategory = null
      this.dataOrder_status = 'pending'
      this.dataPrice = 0
      this.dataImg = null
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            name: this.dataSupplier,
            material: this.dataMeter,
            size: this.dataSize,
            color: this.dataColor,
            color_code: this.dataColor_code,
            other: this.dataOther,
            img: this.dataImg,
            category: this.dataCategory,
            order_status: this.dataOrder_status,
            price: this.dataPrice
          }

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch('dataList/updateItem', obj).catch(err => { console.error(err) })
          } else {
            delete obj.id
            this.$store.dispatch('dataList/addItem', obj).catch(err => { console.error(err) })
          }

          this.$emit('closeSidebar')
          this.initValues()
        }
      })
    },
    updateCurrImg (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
</script>


<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 500px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

    &:not(.ps) {
      overflow-y: auto;
    }
}
</style>
