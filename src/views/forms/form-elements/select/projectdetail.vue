<template>

 
  <div class="mt-5">
 
        <vs-row>
   <vs-col    v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
   <vs-button @click="$router.push( '/forms/form-elements/select/bf')" type="filled" text-color="#ffffff" >Brief form</vs-button>
  </vs-col>
    <vs-col    v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
   <vs-button @click="$router.push(  '/forms/form-elements/select/compare')" type="filled" text-color="#ffffff" >Comparision form</vs-button>
  </vs-col>
   <vs-col    v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
   <vs-button @click="$router.push(  '/forms/form-elements/select/deliverytime')" type="filled" text-color="#ffffff" >Delivery product</vs-button>
  </vs-col>
   <vs-col    v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
   <vs-button @click="$router.push(  '/forms/form-elements/select/deliverynote')" type="filled" text-color="#ffffff" >Delivery note</vs-button>
  </vs-col>
</vs-row>
<br>
<vs-row>
   <vs-col    v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
   <vs-button @click="$router.push( '/forms/form-elements/select/posub')" type="filled" text-color="#ffffff" >Purchase order to supplier</vs-button>
  </vs-col>
    <vs-col    v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
   <vs-button @click="$router.push( '/forms/form-elements/select/pocus')" type="filled" text-color="#ffffff" >Purchase order from customer</vs-button>
  </vs-col>
    <vs-col    v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
   <vs-button @click="$router.push('/forms/form-elements/select/artappv')" type="filled" text-color="#ffffff" >Art work approve</vs-button>
  </vs-col>
</vs-row>
      <vs-table pagination max-items="7" search :data="users">
           <template slot="header">
       
        </template>
    <template slot="thead">
       <vs-th sort-key="email">No</vs-th>
      <vs-th sort-key="username">Project name</vs-th>
      <vs-th sort-key="website">Customer name</vs-th>
      <vs-th sort-key="id">Service Type</vs-th>
      <vs-th sort-key="id">Status</vs-th>
       <vs-th sort-key="id">Quotation Deadline</vs-th>
       <vs-th sort-key="id">Product Deadline</vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="data[indextr].id">
          {{ data[indextr].id }}
        </vs-td>
         <vs-td :data="data[indextr].projectname">
          {{ data[indextr].projectname }}
        </vs-td>

        <vs-td :data="data[indextr].customername">
          {{ data[indextr].customername }}
        </vs-td>

        <vs-td :data="data[indextr].contactperson">
          {{ data[indextr].contactperson }}
        </vs-td>
         <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
          <vs-chip color="lightblue" >Wait for Quotation</vs-chip>
        </vs-td>
         
         <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
          <vs-chip color="orange" >14 days left</vs-chip>
        </vs-td>
         <vs-td :data="data[indextr].status">
          {{ data[indextr].status }}
          <vs-chip color="        #FFB300" >10 days left</vs-chip>
        </vs-td>
        
    <vs-button @click=" popupActivo=true"  type="line">Edit status</vs-button>
             <vs-popup class="holamundo"  title="Payment options" :active.sync="popupActivo">
             <p>Select Time of payment</p>
    <div>
    <vs-textarea v-model="textarea" />
  </div> <br><br><br><br><br><br><br><br>
  <vs-button  text-color="#ffffff"  type="filled">Create Invoice</vs-button>
    </vs-popup>
      </vs-tr>
    </template>
  </vs-table>

  <div>
        <vs-table pagination max-items="7" multiple v-model="selected" search :data="user">
      <template slot="thead">
        <vs-th sort-key="email">ID</vs-th>
        <vs-th sort-key="username">Product list</vs-th>
        <vs-th sort-key="username">Suppliier</vs-th>
        <vs-th sort-key="website">Quantity</vs-th>
        <vs-th sort-key="id">Actual cost</vs-th>
        <vs-th sort-key="id">Vat(%)</vs-th>
        <vs-th sort-key="id">Shipping cost</vs-th>
        <vs-th sort-key="id">Total actual cost</vs-th>
        <vs-th sort-key="id">Product status</vs-th>
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
          <vs-td :data="data[indextr].status">
            <vs-chip color="success"> Active </vs-chip>
            {{ data[indextr].status }}
          </vs-td>
          <vs-button @click="popupActive2 = true" type="line"
            >Product Details</vs-button
          >
          <center>
          <vs-popup
            classContent="popup-example"
            title="Product Detail"
            :active.sync="popupActive2"
          >
          <span>product name</span>
            <vs-input
              disabled
              class="inputx mb-3"
              placeholder="Bottle"
              v-model="value1"
            />
            <span>Model</span>
            <vs-input
              disabled
              class="inputx mb-3"
              placeholder="model2"
              v-model="value2"
            />
            <span>Color</span>
             <vs-input
              disabled
              class="inputx mb-3"
              placeholder=" #ffffff"
              v-model="value3"
            />
            <span>Material</span>
             <vs-input
              disabled
              class="inputx mb-3"
              placeholder="plastic"
              v-model="value4"
            />
            <span>Size</span>
             <vs-input
              disabled
              class="inputx mb-3"
              placeholder="12x30cm"
              v-model="value5"
            />
            <span>Amount</span>
             <vs-input
              disabled
              class="inputx mb-3"
              placeholder="20"
              v-model="value6"
            />
            <vs-row>
              <vs-col
                v-tooltip="'col - 1'"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="3"
              >
                <vs-button
                  @click="popupActive3 = true"
                  color="primary"
                   text-color="#ffffff"
                  type="filled"
                  >Ok</vs-button
                >
              </vs-col>
              <vs-col
                v-tooltip="'col - 1'"
                vs-type="flex"
                vs-justify="left"
                vs-align="center"
                vs-w="3"
              >
                <vs-button
                  @click="popupActive3 = true"
                  color="warning"
                   text-color="#ffffff"
                  type="filled"
                  >Edit</vs-button
                >
              </vs-col>
            </vs-row>
            <vs-popup title="Edit product details" :active.sync="popupActive3">
          <span>product name</span>
            <vs-input
               
              class="inputx mb-3"
              placeholder="Bottle"
              v-model="value1"
            />
            <span>Model</span>
            <vs-input
               
              class="inputx mb-3"
              placeholder="model2"
              v-model="value2"
            />
            <span>Color</span>
             <vs-input
              
              class="inputx mb-3"
              placeholder=" #ffffff"
              v-model="value3"
            />
            <span>Material</span>
             <vs-input
              
              class="inputx mb-3"
              placeholder="plastic"
              v-model="value4"
            />
            <span>Size</span>
             <vs-input
               
              class="inputx mb-3"
              placeholder="12x30cm"
              v-model="value5"
            />
            <span>Amount</span>
             <vs-input
              
              class="inputx mb-3"
              placeholder="20"
              v-model="value6"
            />
             <vs-button
                  @click="popupActive4 = true"
                  color="success"
                   text-color="#ffffff"
                  type="filled"
                  >Save</vs-button
                >
      </vs-popup>
          </vs-popup>
          </center>
        </vs-tr>
      </template>
        </vs-table>
  </div>  <vs-button     text-color="#ffffff" @click="$router.go(-1)" type="filled">Back</vs-button>
  </div>
  
 </template>
 
<script>
  import vSelect from 'vue-select'
export default {
    components: {
    'v-select': vSelect,
  },
  data() {
    return {
          popupActivo:false,
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
          "id": "1",
          "projectname": "Project A",
          "customername": "Bret",
          "contactperson": "Advertising",
          "contactnumber": "02055667788",
          "Servicetype": "Posm",
          "Registerdate":"25.12.2020",
        }
        ],
           user: [
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
        },
      ],
      
    }
  },
}
</script>      


