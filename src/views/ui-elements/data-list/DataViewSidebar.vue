<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE" }} ITEM</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>
    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6">

        <!-- Product Image -->
        <template v-if="dataImg">

          <!-- Image Container -->
          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img :src="dataImg" alt="img" class="responsive">
          </div>

          <!-- Image upload Buttons -->
          <div class="modify-img flex items-center justify-center mt-5">
            <input type="file" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
            <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Update Image</vs-button>
            <vs-button type="flat" color="#999" @click="dataImg = null">Remove Image</vs-button>
          </div>
        </template>

        <!-- NAME -->
  <div class="flex mx-10">

     <div class=" w-1/6 bg-grid-color-secondary h-12">
        <vs-input label="Name" v-model="dataName" class="mt-5 w-500" name="item-name" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>
    </div>

  <div class="w-1/6 bg-grid-color h-12">
        <vs-input label="Material" v-model="dataMeter" class="mt-5 w-500" name="item-material" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-material')">{{ errors.first('item-material') }}</span>
</div>
  <div class="w-1/6 bg-grid-color-secondary h-12">
        <vs-input label="Size" v-model="dataSize" class="mt-5 w-500" name="item-size" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-size')">{{ errors.first('item-size') }}</span>
</div>
  <div class="w-1/6 bg-grid-color h-12">

        <vs-input label="Color" v-model="dataColor" class="mt-5 w-500" name="item-color" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-color')">{{ errors.first('item-color') }}</span>
</div>
  <div class="w-1/6 bg-grid-color-secondary h-12">

        <vs-input label="Color code" v-model="dataColor_code" class="mt-5 w-500" name="item-color_code" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-color_code')">{{ errors.first('item-color_code') }}</span>
</div>
  <div class="w-1/6 bg-grid-color h-12">
        <vs-input label="Other" v-model="dataOther" class="mt-5 w-500" name="item-other" v-validate="'required'"  />
        <span class="text-danger text-sm " v-show="errors.has('item-other')">{{ errors.first('item-other') }}</span>
</div>

</div>


<div class="flex mb-4 mt-10 mx-10">
        <!-- CATEGORY -->
          <!-- ORDER STATUS -->
            <div class="w-1/3 bg-grid-color h-12">

        <vs-select v-model="dataOrder_status" label="Order Status" class="mt-5 w-500">
          <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in order_status_choices" />
        </vs-select>
        </div>
               <!-- PRICE -->
</div>
      </div>
       <div class=" upload mt-10 mx-10">
        <vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
    </div>
    </component>

    <div class="flex flex-wrap items-center justify-end p-6" slot="footer">
      <vs-button text-color="#ffffff" class="mr-6" @click="submitData" :disabled="!isFormValid">Done</vs-button>
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
      dataName: '',
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

        this.dataName = name
        this.dataMeter = material
        this.dataSize = size
        this.dataColor = color
        this.dataColor_code = color_code
        this.dataOther = other

        this.dataOrder_status = order_status
        this.dataPrice = price
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
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
      return !this.errors.any() && this.dataName && this.dataMeter && this.dataSize&& this.dataColor&& this.dataColor_code&& this.dataOther && this.dataCategory && this.dataPrice > 0
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
     successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    },
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataName = ''
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
            name: this.dataName,
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
    width: full;
    max-width: 100vw;

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
