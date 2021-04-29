<template>
    <div id="invoice-page">

        <div class="flex flex-wrap items-center justify-between">


          <div class="flex items-center">
            <vs-button class="mb-base mr-3" type="border" icon-pack="feather" icon="icon icon-download"    text-color="blue"  >Download</vs-button>
            <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice"    text-color="#ffffff" >Print</vs-button>
          </div>
        </div>

        <vx-card id="invoice-container">

            <!-- INVOICE METADATA -->
            <div class="vx-row leading-loose p-base">

                <div class="vx-col w-1/2 mt-top">
                    <img src="https://i.ibb.co/yNfDNCX/click.png" alt="click" border="0" height="150" >
                </div>
                <div class="vx-col w-1/2 text-right">
                    <h1>Click</h1>
                    <div class="invoice__invoice-detail mt-6">
                        <h6>INVOICE NO.</h6>
                        <p>{{ invoiceDetails.invoiceNo }}</p>

                        <h6 class="mt-4">INVOICE DATE</h6>
                        <p>{{ invoiceDetails.invoiceDate | date(true) }}</p>
                    </div>
                </div>
                <div class="vx-col w-1/2 mt-12">
                    <h5>Recipient</h5>
                    <div class="invoice__recipient-info my-4">
                        <p>{{ recipientDetails.fullName }}</p>
                        <p>{{ recipientDetails.addressLine1 }}</p>
                        <p>{{ recipientDetails.addressLine2 }}</p>
                        <p>{{ recipientDetails.zipcode }}</p>
                    </div>
                    <div class="invoice__recipient-contact ">
                        <p class="flex items-center">
                            <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ recipientDetails.mailId }}</span>
                        </p>
                        <p class="flex items-center">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ recipientDetails.mobile }}</span>
                        </p>
                    </div>
                </div>
                <div class="vx-col w-1/2 mt-base text-right mt-12">
                    <h5>{{ companyDetails.name }}</h5>
                    <div class="invoice__company-info my-4">
                        <p>{{ companyDetails.addressLine1 }}</p>
                        <p>{{ companyDetails.addressLine2 }}</p>
                        <p>{{ companyDetails.zipcode }}</p>
                    </div>
                    <div class="invoice__company-contact">
                        <p class="flex items-center justify-end">
                            <span class="ml-2">{{ companyDetails.mailId }}</span>
                        </p>
                        <p class="flex items-center justify-end">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2">{{ companyDetails.mobile }}</span>
                        </p>
                    </div>

                </div>
            </div>


            <!-- INVOICE FOOTER -->
            <div class="invoice__footer text-right p-base">
                <p class="mb-4">Transfer the amounts to the business amount below. Please include invoice number on your check.</p>
                <p>
                    <span class="mr-8">BANK: <span class="font-semibold">FTSBUS33</span></span>
                    <span>IBAN: <span class="font-semibold"> G882-1111-2222-3333 </span></span>
                </p>
            </div>
        </vx-card>
    </div>
</template>

<script>

export default{
  data () {
    return {
      mailTo: '',
      companyDetails: {
        name: 'Click., Ltd.',
        addressLine1: '',
        addressLine2: 'VT, LAOS',
        zipcode: '11010',
        mailId: '',
        mobile: '+856 20 556 55 665'
      },
      recipientDetails: {
        fullName: 'Systory CO., Ltd',
        addressLine1: '',
        addressLine2: 'VT, LAOS',
        zipcode: '10010',
        mailId: 'Click@mail.com',
        mobile: '+856 20 555 55 555'
      },
      invoiceDetails: {
        invoiceNo: '001/2019',
        invoiceDate: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)'
      },
    }
  },
  computed: {

  },
  methods: {
    printInvoice () {
      window.print()
    }
  },
  components: {},
  mounted () {
    this.$emit('setAppClasses', 'invoice-page')
  }
}
</script>

<style lang="scss">
@media print {
  .invoice-page {
    * {
      visibility: hidden;
    }

    #content-area {
      margin: 0 !important;
    }

    .vs-con-table {
      .vs-con-tbody {
        overflow: hidden !important;
      }
    }

    #invoice-container,
    #invoice-container * {
      visibility: visible;
    }
    #invoice-container {
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: none;
    }
  }
}

@page {
  size: auto;
}
</style>
