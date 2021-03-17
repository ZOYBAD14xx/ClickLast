<template>
<div class="mt-5">

    <vs-tabs alignment="fixed">
      <vs-tab label="Posm/Product">
        <div></div>
       <template>
  <div class="vx-row" style="margin-top:20px">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card style="width:1250px" title="Posm Form" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Product name</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input  class="w-full" type="email" v-model="input1" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Model</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input2" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Color</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input3" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Other</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input4" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>material</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input5" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Size</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input6" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Amount</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input7" />
          </div>
          <ul class="centerx" style="margin-left:500px"><br>

    <vs-radio v-model="radios1" vs-value="luis">1</vs-radio> &nbsp;&nbsp;


    <vs-radio v-model="radios1" vs-value="carols">2</vs-radio> &nbsp;&nbsp;


    <vs-radio v-model="radios1" vs-value="summer">3</vs-radio> &nbsp;

          </ul>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">


          </div>
        </div>

      </vx-card><br><br>
       <vx-card  style="width:1250px" title="Design information" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Number of logo Position</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input8" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Logo 1</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input9" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Position1</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input10" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Color code logo1</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input11" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>More information</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input12" />
          </div>
        </div>

  <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Logo Pattern</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
       <ul class="centerx" ><br>

      <vs-checkbox v-model="checkBox1" vs-value="luis">Screen</vs-checkbox> &nbsp;&nbsp;


     <vs-checkbox v-model="checkBox1" vs-value="carols">Lasor</vs-checkbox> &nbsp;&nbsp;


      <vs-checkbox v-model="checkBox1" vs-value="summer">Emboidary</vs-checkbox> &nbsp;

          </ul>
          </div>
        </div>





        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Size of logo</span>
          </div>
     <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input13" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Logo 2</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input14" />
          </div>
        </div>

       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Position2</span>
          </div>
      <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input15" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Color code logo2</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input16" />
          </div>
        </div>


        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>More information</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input17" />
          </div>
        </div>


<div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Logo Pattern</span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
       <ul class="centerx" ><br>

      <vs-checkbox v-model="checkBox1" vs-value="luis">Screen</vs-checkbox> &nbsp;&nbsp;


     <vs-checkbox v-model="checkBox1" vs-value="carols">Lasor</vs-checkbox> &nbsp;&nbsp;


      <vs-checkbox v-model="checkBox1" vs-value="summer">Emboidary</vs-checkbox> &nbsp;

          </ul>
          </div>
        </div>


        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Size of logo</span>
          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input18" />
          </div>
        </div>

           <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Insert Sample product simple</span>
          </div>
           <div style="margin-left:180px" class="vx-col sm:w-2/3 w-full">
            <vs-upload  style="color:#28E5B9" automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            &nbsp;&nbsp;  <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">


          </div>
        </div>
      </vx-card><br><br>
       <vx-card style="width:1250px" title="Payment details" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Payment term</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input19" />
          </div>
        </div>
       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Currency</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
       <ul class="centerx" ><br>

      <vs-checkbox v-model="checkBox1" vs-value="luis">LAK</vs-checkbox> &nbsp;&nbsp;


     <vs-checkbox v-model="checkBox1" vs-value="carols">USD</vs-checkbox> &nbsp;&nbsp;


      <vs-checkbox v-model="checkBox1" vs-value="summer">THB</vs-checkbox> &nbsp;&nbsp;
       <vs-checkbox v-model="checkBox1" vs-value="depo">Deposit payment 50%</vs-checkbox> &nbsp; &nbsp;
        <vs-checkbox v-model="checkBox1" vs-value="full">Full payment after delivery</vs-checkbox> &nbsp; &nbsp;
         <vs-checkbox v-model="checkBox1" vs-value="ohter">Other</vs-checkbox>

          </ul>
          </div>
        </div>
        <div  class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Price</span>
          </div>
                 <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
       <ul class="centerx" ><br>

      <vs-checkbox v-model="checkBox1" vs-value="vat">Include VAT</vs-checkbox> &nbsp;&nbsp;


     <vs-checkbox v-model="checkBox1" vs-value="exclude">Exclude VAT</vs-checkbox> &nbsp;&nbsp;




          </ul>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Other</span>
          </div>
     <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input20" />
          </div>
        </div>




        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">


          </div>
        </div>

      </vx-card>
    </div>
  </div>
       </template>
      </vs-tab>
      <vs-tab  label="Event">
        <div></div>
        <template>
  <div class="vx-row" style="margin-top:20px">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card style="width:1250px" title="Event form" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Date of Event</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                <datepicker placeholder="Select Date" v-model="date"></datepicker>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Time</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                  <vs-input class="w-full" v-model="input21" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Location</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" v-model="input22" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Type of Event</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
           <vs-select v-model="event1" class="w-full select-large" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                  </vs-select>
          </div>
        </div>
          <div  class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Guest</span>
          </div>
                 <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
       <ul class="centerx" ><br>

      <vs-checkbox v-model="checkBox1" vs-value="vat">VIP</vs-checkbox> &nbsp;&nbsp;


     <vs-checkbox v-model="checkBox1" vs-value="exclude">Normal guest</vs-checkbox> &nbsp;&nbsp;
          </ul>
          </div>
        </div>
         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Decoration theme</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" v-model="input23" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Site Survey</span>
          </div>

        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Sizing of location </span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" v-model="input24" />
          </div>
        </div>


        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Floor plan with scale  </span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" v-model="input25" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Check size of door  </span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" v-model="input26" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Check when we can install  </span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <datepicker placeholder="Select Date" v-model="date"></datepicker>
          </div>
        </div>

          <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Check Electricity supply  </span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" v-model="input27" />
          </div>
        </div>

           <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Take picture sine entrance  </span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" v-model="input28" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Stage zone</span>
          </div>

        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Stage size  </span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" v-model="input29" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>LED screen  </span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" label-placeholder="Amount" v-model="input30" /><br>
             <vs-input class="w-full" label-placeholder="Size" v-model="input31" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Tv  </span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" label-placeholder="Amount" v-model="input32" /><br>
             <vs-input class="w-full" label-placeholder="Size" v-model="input33" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Projector  </span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" label-placeholder="Amount" v-model="input34" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Sound system  </span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-select v-model="soundsystem9" class="w-full select-large" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in Soundsystem" class="w-full" />
                  </vs-select>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Lighthing </span>
          </div>
      <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-select v-model="lighting" class="w-full select-large" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in lighthing" class="w-full" />
                  </vs-select>
          </div>
        </div>


        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Special effect  </span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-select v-model="specialeffect" class="w-full select-large" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in Specialeffect" class="w-full" />
                  </vs-select>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Cloth Cover stage  </span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" label-placeholder="Color" v-model="input35" /><br>
              <vs-input class="w-full" label-placeholder="design" v-model="input36" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Ribbon cuting  </span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-input class="w-full" label-placeholder="Amount" v-model="input37" /><br>
                 <vs-input class="w-full" label-placeholder="Style" v-model="input38" />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>

          </div>
        </div>
      </vx-card><br><br>

        <vx-card style="width:1250px" title="Production" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Stage backdrop</span>
          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Name of banner" v-model="input39" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input40" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input41" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input42" /><br>
                             <vs-select v-model="copywriting8" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input43" /><br>

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Photo backdrop (insert)</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
           <vs-input class="w-full" label-placeholder="Name of banner" v-model="input44" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input45" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input46" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input47" /><br>
                             <vs-select v-model="copywrting7" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input48" /><br>

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Pop up</span>
          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-input class="w-full" label-placeholder="Name of banner" v-model="input49" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input50" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input51" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input52" /><br>
                             <vs-select v-model="copywriting6" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input53" /><br>

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Podium</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Name of banner" v-model="input54" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input55" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input56" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input57" /><br>
                             <vs-select v-model="copywriting5" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input58" /><br>

          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Logo display</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
           <vs-input class="w-full" label-placeholder="Name of banner" v-model="input59" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input60" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input61" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input62" /><br>
                             <vs-select v-model="copywriting4" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input63" /><br>

          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Gate entrance</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
           <vs-input class="w-full" label-placeholder="Name of banner" v-model="input64" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input65" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input66" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input67" /><br>
                             <vs-select v-model="copywriting3" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input68" /><br>

          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Booth</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
         <vs-input class="w-full" label-placeholder="Name of banner" v-model="input69" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input70" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input71" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input72" /><br>
                             <vs-select v-model="copywriting2" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input73" /><br>
          </div>
        </div>

             <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
            <span>Banner</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
         <vs-input class="w-full" label-placeholder="Name of banner" v-model="input74" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input75" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input76" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input77" /><br>
                             <vs-select v-model="copywrting1" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input78" /><br>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Partition</span>
          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
         <vs-input class="w-full" label-placeholder="Name of banner" v-model="input79" />
                <vs-input class="w-full" label-placeholder="Size" v-model="input80" />
                    <vs-input class="w-full" label-placeholder="Material" v-model="input81" />
                        <vs-input class="w-full" label-placeholder="Insert logo" v-model="input82" /><br>
                             <vs-select v-model="copywriting" class="w-full select-large" label="">
                      <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in copywritting" class="w-full" />
                  </vs-select><br>
                                <vs-input class="w-full" label-placeholder="Amount"  v-model="input83" /><br>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Function</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
              <vs-select v-model="select" class="w-full select-large" placeholder="select function">
                  <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in funtion" class="w-full" />
                        </vs-select><br>

          </div>
        </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Decoration</span>
                 </div>
                      </div>


            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Flower</span>
                 </div>
                     <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                         <vs-input class="w-full" label-placeholder="Amount" v-model="input84" />
                               </div>
                                      </div>


            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Carpet</span>
                 </div>
                <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                         <vs-input class="w-full" label-placeholder="Amount" v-model="input85" />

          </div>
        </div>

            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Ballon</span>
                 </div>
                  <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                         <vs-input class="w-full" label-placeholder="Amount" v-model="input86" />

                          </div>
                             </div>

                                <div class="vx-row mb-6">
                                    <div class="vx-col sm:w-1/3 w-full">
                                      <span>Light decoration</span>
                                          </div>
                                         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                                            <vs-input class="w-full" label-placeholder="Amount" v-model="input87" />

                                                </div>
                                                    </div>

                     <div class="vx-row mb-6">
                          <div class="vx-col sm:w-1/3 w-full">
                             <span>Q barriers</span>
                                          </div>
                                          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                                                 <vs-input class="w-full" label-placeholder="Amount" v-model="input88" />
                                                </div>
                                                  </div>

                         <div class="vx-row mb-6">
                              <div class="vx-col sm:w-1/3 w-full">
                                    <span>Other</span>
                                           </div>
                                            <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                                                  <vs-input class="w-full" label-placeholder="Amount" v-model="input89" />

                                                     </div>
                                                      </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">


          </div>
        </div>

      </vx-card><br><br>

 <vx-card  style="width:1250px" title="Performance" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>MC</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-select v-model="gender" class="w-full select-large" placeholder="Lao">
                  <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in gender" class="w-full" />
                        </vs-select><br>
                          <vs-select v-model="gender1" class="w-full select-large" placeholder="English">
                  <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in gender" class="w-full" />
                        </vs-select><br>
                          <vs-select v-model="gender2" class="w-full select-large" placeholder="Chinese">
                  <vs-select-item :key="index"  :value="item.value" :text="item.text" v-for="(item,index) in gender" class="w-full" />
                        </vs-select><br>
                           <vs-input class="w-full" type="email" label-placeholder="Other" v-model="input2" /><br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Lao traditional performance</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input  class="w-full" type="email" label-placeholder="Male-Amount" v-model="input90" />
             <vs-input  class="w-full" type="email" label-placeholder="Female-Amount" v-model="input91" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Lion show</span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-select v-model="soungsystem2" class="w-full select-large" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in Soundsystem" class="w-full" />
                  </vs-select>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Cover Dance show</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-select v-model="soundsystem1" class="w-full select-large" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in Soundsystem" class="w-full" />
                  </vs-select>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Fashion show</span>
          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input  class="w-full" type="email" label-placeholder="Male-Amount" v-model="input92" /><br>
             <vs-input  class="w-full" type="email" label-placeholder="Female-Amount" v-model="input93" /><br>
          </div>
        </div>

    <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>PG</span>
          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
       <vs-input  class="w-full" type="email" label-placeholder="Amount" v-model="input94" /><br>
          </div>
        </div>





        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Live band style</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-select v-model="soundsystem1" class="w-full select-large" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in Soundsystem" class="w-full" />
                  </vs-select><br>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Singer</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-input  class="w-full" type="email" label-placeholder="Male-Amount" v-model="input95" /><br>
             <vs-input  class="w-full" type="email" label-placeholder="Female-Amount" v-model="input96" /><br>
          </div>
        </div>

       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Influencer</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-input  class="w-full" type="email" label-placeholder="Male-Amount" v-model="input97" /><br>
             <vs-input  class="w-full" type="email" label-placeholder="Female-Amount" v-model="input98" /><br>
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Other</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input99" />
          </div>
        </div>


       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Food and beverage</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">

          </div>
        </div>

          <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Food style</span>
          </div>
     <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-select v-model="food" class="w-full select-large" placeholder="choose style food" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in foodstyle" class="w-full" />
                  </vs-select><br>
          </div>
        </div>

          <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Beverage style</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
             <vs-select v-model="beverage2" class="w-full select-large" placeholder="choose style Beverage" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in beverage" class="w-full" />
                  </vs-select><br>
          </div>
        </div>







        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">


          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card><br><br>

         <vx-card  style="width:1250px" title="Event Equipment" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Rental tent</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Size" v-model="input100" /><br>
            <vs-input class="w-full" label-placeholder="Amount" v-model="input101" /><br>
            <vs-input class="w-full" label-placeholder="Decorate color" v-model="input102" /><br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Round table</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-input class="w-full" label-placeholder="Size" v-model="input103" /><br>
            <vs-input class="w-full" label-placeholder="Amount" v-model="input104" /><br>
            <vs-input class="w-full" label-placeholder="tablecloth color" v-model="input105" /><br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Square table</span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-input class="w-full" label-placeholder="Size" v-model="input106" /><br>
            <vs-input class="w-full" label-placeholder="Amount" v-model="input107" /><br>
            <vs-input class="w-full" label-placeholder="tablecloth color" v-model="input108" /><br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Chair</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-input class="w-full" label-placeholder="Style" v-model="input109" /><br>
            <vs-input class="w-full" label-placeholder="Amount" v-model="input110" /><br>
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Fabric</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
           <vs-input class="w-full" label-placeholder="Color" v-model="input111" /><br>
            <vs-input class="w-full" label-placeholder="Amount" v-model="input112" /><br>
          </div>
        </div>

  <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Support team </span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">

          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Photo camera man</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Amount" v-model="input113" />
          </div>
        </div>

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Video camera man</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Amount" v-model="input114" />
          </div>
        </div>

       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Staff freeland</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Amount" v-model="input115" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Design freeland</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Amount" type="email" v-model="input116" />
          </div>
        </div>


        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Other</span>
          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input117" />
          </div>
        </div>


<div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Welcome guest</span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
               <vs-select v-model="beverage" class="w-full select-large" placeholder="choose style Beverage" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in guest" class="w-full" />
                  </vs-select><br>
          </div>
        </div>


        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Out of vientiane</span>
          </div>
             <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-select v-model="beverage1" class="w-full select-large" placeholder="choose style Beverage" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in outof" class="w-full" />
                  </vs-select><br>
          </div>
        </div>


        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">


          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card><br><br>

            <vx-card  style="width:1250px" title="Pre-anouncement" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Traditional media</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Radio" v-model="input118" /><br>
            <vs-input class="w-full" label-placeholder="News paper" v-model="input119" /><br>
            <vs-input class="w-full" label-placeholder="Magazine" v-model="input120" /><br>
            <vs-input class="w-full" label-placeholder="Television" v-model="input121" /><br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>OOH</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <vs-input class="w-full" type="email" label-placeholder="Size" v-model="input103" /><br>
            <vs-input class="w-full" label-placeholder="Billboard" v-model="input122" /><br>
            <vs-input class="w-full" label-placeholder="Street banner" v-model="input123" /><br>
            <vs-input class="w-full" label-placeholder="Bus shelter" v-model="input124" /><br>
            <vs-input class="w-full" label-placeholder="Bus wrap" v-model="input125" /><br>
            <vs-input class="w-full" label-placeholder="LED" v-model="input126" /><br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Digital media</span><br>
          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
         <ul class="centerx" ><br>
       <span>Facebook</span><br><br>
      <vs-checkbox v-model="checkBox1" vs-value="Post">Post</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox1" vs-value="Video">Video</vs-checkbox> &nbsp;&nbsp;
          </ul>
            <vs-input class="w-full" label-placeholder="Youtube" v-model="input127" /><br>
            <vs-input class="w-full" label-placeholder="GDN" v-model="input128" /><br>
              <vs-input class="w-full" label-placeholder="Bumper ads" v-model="input129" /><br>
          </div>
        </div>

             <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Media</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="TV" v-model="input130" /><br>
            <vs-input class="w-full" label-placeholder="News paper" v-model="input131" /><br>
            <vs-input class="w-full" label-placeholder="Radio" v-model="input132" /><br>
            <vs-input class="w-full" label-placeholder="Influencer" v-model="input133" /><br>
          </div>
        </div>


             <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Insert Logo</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
              <vs-upload  style="color:#28E5B9" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />

          </div>
        </div>

             <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Insert Design</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
               <vs-input class="w-full" label-placeholder="Color code" v-model="input134" /><br>

          </div>
        </div>



        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">


          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card><br><br>



    </div>
  </div>
       </template>
      </vs-tab>
      <vs-tab label="Advertising">
        <div></div>
        <template>
  <div class="vx-row" style="margin-top:20px">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card style="width:1250px" title="Advertising Form" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Company Background</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input135" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>product Information</span>
          </div>
      <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Advantage" type="email" v-model="input136" /><br>
            <vs-input class="w-full" label-placeholder="disadvantage" type="email" v-model="input137" /><br>
            <vs-input class="w-full" label-placeholder="SWOT" type="email" v-model="input138" /><br>
            <vs-input class="w-full" label-placeholder="Other" type="email" v-model="input139" /><br>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Objective of project</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input140" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Budget Estmation</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full"  v-model="input141" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Target audience</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Area" type="email" v-model="input142" /><br>
             <vs-checkbox v-model="checkBox1" vs-value="Male">Male</vs-checkbox> &nbsp;&nbsp;
             <vs-checkbox v-model="checkBox1" vs-value="Female">Female</vs-checkbox> &nbsp;&nbsp;
            <vs-input class="w-full" label-placeholder="Age" type="email" v-model="input143" /><br>
            <vs-input class="w-full" label-placeholder="Speding habit" type="email" v-model="input144" /><br>
             <vs-input class="w-full" label-placeholder="Genaration" type="email" v-model="input145" /><br>
              <vs-input class="w-full" label-placeholder="Values" type="email" v-model="input146" /><br>
                 <vs-input class="w-full" label-placeholder="Ordering habit" type="email" v-model="input147" />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>

          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card>
    </div>
  </div>
       </template>
      </vs-tab>
      <vs-tab label="Traditional">
        <div></div>
        <template>
  <div class="vx-row" style="margin-top:20px">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card style="width:1250px" title=" News paper" >

        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">


          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">


          <vs-select v-model="newspaper" class="w-full select-large"  label="Newspaper">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in newspaper" class="w-full" />
                  </vs-select><br>
            <vs-input class="w-full" label-placeholder="Amount" v-model="input148" /><br>
              <vs-input class="w-full" label-placeholder="Size" v-model="input149" /><br>
                <vs-input class="w-full" label-placeholder="Page No" v-model="input150" /><br>
                  <vs-select v-model="pagecolor" class="w-full select-large" placeholder="Page color" label="">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in pag" class="w-full" />
                  </vs-select><br>
                  <span>Period</span><br>
                      <vs-input class="w-full"  v-model="input151" /><br>

                   <datepicker  placeholder="Start" v-model="date1"></datepicker><br>
                       <datepicker placeholder="End" v-model="date2"></datepicker>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
      <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>


        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>

          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card><br><br>

        <vx-card style="width:1250px" title="Magazine" >
            <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

                  <vs-select v-model="magazine" class="w-full select-large"  label="Magazine">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in magazine" class="w-full" />
                  </vs-select><br>

            <vs-input class="w-full" label-placeholder="Amount" v-model="input164" /><br>
              <vs-input class="w-full" label-placeholder="Size" v-model="input165" /><br>
                <vs-input class="w-full" label-placeholder="Page No" v-model="input166" /><br>

                  <span>Period</span><br>
                      <vs-input class="w-full"  v-model="input167" /><br>

                   <datepicker  placeholder="Start" v-model="date3"></datepicker><br>
                       <datepicker placeholder="End" v-model="date4"></datepicker>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>


        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>

          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card><br><br>


        <vx-card style="width:1250px" title="Radio" >
            <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">


                  <vs-select v-model="radio" class="w-full select-large"  label="Radio">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in radio" class="w-full" />
                  </vs-select><br>
            <vs-input class="w-full" label-placeholder="Radio Program" v-model="input188" /><br>
               <flat-pickr :config="configdateTimePicker" v-model="timer" placeholder="time" /><br><br>
               <span>PR</span>
                <vs-input class="w-full" label-placeholder="Amount" v-model="input189" /><br>
                  <span>Spot</span>
                     <vs-input class="w-full" label-placeholder="Amount"  v-model="input190" /><br>
                  <span>Period</span><br>
                      <vs-input class="w-full"  v-model="input191" /><br>

                   <datepicker  placeholder="Start" v-model="date5"></datepicker><br>
                       <datepicker placeholder="End" v-model="date6"></datepicker>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
      <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>


        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>

          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card><br><br>

         <vx-card style="width:1250px" title="TV" >
            <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">


                  <vs-select v-model="Tv" class="w-full select-large"  label="Tv">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in tv" class="w-full" />
                  </vs-select><br>
            <vs-input class="w-full" label-placeholder="TV Program" v-model="input220" /><br>
               <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="time" /><br><br>
               <span>Commercial ad</span>
                <vs-input class="w-full" label-placeholder="Amount" v-model="input221" /><br>
                  <span>Sponsor</span>
                     <vs-input class="w-full" label-placeholder="Amount"  v-model="input222" /><br>
                     <span>News</span>
                     <vs-input class="w-full" label-placeholder="Amount"  v-model="input223" /><br>
                  <span>Period</span><br>
                      <vs-input class="w-full"  v-model="input224" /><br>

                   <datepicker  placeholder="Start" v-model="date7"></datepicker><br>
                       <datepicker placeholder="End" v-model="date8"></datepicker>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>






        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>

          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card>




    </div>
  </div>
       </template>
      </vs-tab>
        <vs-tab label="Out of home"><br>
        <div></div>

            <vx-card style="width:1250px" title="OOH form" >
            <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">


          <vs-select v-model="outofhome" class="w-full select-large"  label="Out of home">
            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in outofhome" class="w-full" />
                  </vs-select><br>
            <vs-input class="w-full" label-placeholder="Amount" v-model="input246" /><br>


                <vs-input class="w-full" label-placeholder="Location" v-model="input247" /><br>

                     <vs-input class="w-full" label-placeholder="Size"  v-model="input248" /><br>
                     <span>Design</span>
                      <vs-checkbox v-model="checkBox1" vs-value="Yes">Yes</vs-checkbox> &nbsp;&nbsp;
                      <vs-checkbox v-model="checkBox1" vs-value="No">No</vs-checkbox> &nbsp;&nbsp;
                     <br>
                  <span>Period</span><br>
                      <vs-input class="w-full"  v-model="input250" /><br>

                   <datepicker  placeholder="Start" v-model="date9"></datepicker><br>
                       <datepicker placeholder="End" v-model="date10"></datepicker>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>


       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>


       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>


       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>


       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">

          </div>
        </div>


       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span> Cinema Ads </span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <span>Screen ads</span><br>

         <vs-input class="w-full" label-placeholder="Amount" v-model="input282" /><br>


                <vs-input class="w-full" label-placeholder="Location" v-model="input283" /><br>

                     <vs-input class="w-full" label-placeholder="Video length"  v-model="input284" /><br>
                     <span>Design</span>
                      <vs-checkbox v-model="checkBox1" vs-value="Yes">Yes</vs-checkbox> &nbsp;&nbsp;
                      <vs-checkbox v-model="checkBox1" vs-value="No">No</vs-checkbox> &nbsp;&nbsp;
                     <br>
                  <span>Period</span><br>
                      <vs-input class="w-full"  v-model="input285" /><br>

                   <datepicker  placeholder="Start" v-model="date11"></datepicker><br>
                       <datepicker placeholder="End" v-model="date12"></datepicker>
          </div>
        </div>


       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">

          </div>
           <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <span> Internal signage </span><br>
         <vs-input class="w-full" label-placeholder="Amount" v-model="input286" /><br>


                <vs-input class="w-full" label-placeholder="Location" v-model="input287" /><br>

                     <vs-input class="w-full" label-placeholder="Size"  v-model="input288" /><br>
                     <span>Design</span>
                      <vs-checkbox v-model="checkBox1" vs-value="Yes">Yes</vs-checkbox> &nbsp;&nbsp;
                      <vs-checkbox v-model="checkBox1" vs-value="No">No</vs-checkbox> &nbsp;&nbsp;
                     <br>
                  <span>Period</span><br>
                      <vs-input class="w-full"  v-model="input289" /><br>

                   <datepicker  placeholder="Start" v-model="date13"></datepicker><br>
                       <datepicker placeholder="End" v-model="date14"></datepicker>
          </div>
        </div>





        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>

          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card>


      </vs-tab>
      <vs-tab label="Digital"><br>
        <div></div>

           <vx-card style="width:1250px" title="Digital form" >
            <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Facebook </span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" label-placeholder="Page Name" v-model="input290" /><br>


                <vs-input class="w-full" label-placeholder="Influencer Name" v-model="input291" /><br>

                <span>Post</span><br>

                     <vs-input class="w-full" label-placeholder="Amount"  v-model="input292" /><br>
                     <vs-input class="w-full" label-placeholder="Budget"  v-model="input293" /><br>
                     <vs-input class="w-full" label-placeholder="Period"  v-model="input294" /><br>
                      <datepicker  placeholder="Start" v-model="date"></datepicker><br>
                       <datepicker placeholder="End" v-model="date"></datepicker><br>


                  <span>Video</span><br>
                     <vs-input class="w-full" label-placeholder="Amount"  v-model="input295" /><br>
                     <vs-input class="w-full" label-placeholder="Budget"  v-model="input296" /><br>
                     <vs-input class="w-full" label-placeholder="Period"  v-model="input297" /><br>
                      <datepicker  placeholder="Start" v-model="date15"></datepicker><br>
                       <datepicker placeholder="End" v-model="date16"></datepicker>
          </div>
        </div>

          <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Youtube </span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
          <span>Bumper ads</span><br>
           <vs-input class="w-full" label-placeholder="Amount"  v-model="input299" /><br>
                     <vs-input class="w-full" label-placeholder="Budget"  v-model="input300" /><br>
                     <vs-input class="w-full" label-placeholder="Period"  v-model="input301" /><br>
                      <datepicker  placeholder="Start" v-model="date"></datepicker><br>
                       <datepicker placeholder="End" v-model="date"></datepicker><br>

                <span>Video Content</span><br>

                     <vs-input class="w-full" label-placeholder="Amount"  v-model="input302" /><br>
                     <vs-input class="w-full" label-placeholder="Budget"  v-model="input303" /><br>
                     <vs-input class="w-full" label-placeholder="Period"  v-model="input304" /><br>
                      <datepicker  placeholder="Start" v-model="date17"></datepicker><br>
                       <datepicker placeholder="End" v-model="date18"></datepicker>


          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span> GDN (Google Display Network) </span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" label-placeholder="Amount" v-model="input305" /><br>
                <vs-input class="w-full" label-placeholder="Budget"  v-model="input306" /><br>
                     <vs-input class="w-full" label-placeholder="Period"  v-model="input307" /><br>


                   <datepicker  placeholder="Start" v-model="date19"></datepicker><br>
                       <datepicker placeholder="End" v-model="date20"></datepicker>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>SEO (Search Engine Optimization)</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" label-placeholder="Amount" v-model="input308" /><br>
                <vs-input class="w-full" label-placeholder="Budget"  v-model="input309" /><br>
                     <vs-input class="w-full" label-placeholder="Period"  v-model="input310" /><br>


                   <datepicker  placeholder="Start" v-model="date21"></datepicker><br>
                       <datepicker placeholder="End" v-model="date22"></datepicker>
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span> Application </span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
         <vs-input class="w-full" label-placeholder="Application Name" v-model="input311" /><br>


                <span>Photo</span><br>
           <vs-input class="w-full" label-placeholder="Amount"  v-model="input312" /><br>
                     <vs-input class="w-full" label-placeholder="Budget"  v-model="input313" /><br>
                     <vs-input class="w-full" label-placeholder="Period"  v-model="input314" /><br>
                      <datepicker  placeholder="Start" v-model="date23"></datepicker><br>
                       <datepicker placeholder="End" v-model="date24"></datepicker><br>

                <span>Video</span><br>

                     <vs-input class="w-full" label-placeholder="Amount"  v-model="input315" /><br>
                     <vs-input class="w-full" label-placeholder="Budget"  v-model="input316" /><br>
                     <vs-input class="w-full" label-placeholder="Period"  v-model="input317" /><br>
                      <datepicker  placeholder="Start" v-model="date25"></datepicker><br>
                       <datepicker placeholder="End" v-model="date26"></datepicker>


          </div>
        </div>









        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>

          </div>
        </div>
         <template slot="codeContainer">
&lt;template&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;First Name&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Email&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;email&quot; v-model=&quot;input2&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Mobile&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; v-model=&quot;input3&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-1/3 w-full&quot;&gt;
        &lt;span&gt;Password&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full&quot;&gt;
        &lt;vs-input class=&quot;w-full&quot; type=&quot;password&quot; v-model=&quot;input4&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row mb-6&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-checkbox class=&quot;inline-flex&quot; v-model=&quot;check1&quot;&gt;Remember Me&lt;/vs-checkbox&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;vx-row&quot;&gt;
      &lt;div class=&quot;vx-col sm:w-2/3 w-full ml-auto&quot;&gt;
        &lt;vs-button class=&quot;mr-3 mb-2&quot;&gt;Submit&lt;/vs-button&gt;
        &lt;vs-button color=&quot;warning&quot; type=&quot;border&quot; class=&quot;mb-2&quot; @click=&quot;input1 = input2 = input3 = input4 = input4 = ''; check1 = false;&quot;&gt;Reset&lt;/vs-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </template>
      </vx-card>


      </vs-tab>
    </vs-tabs>
  </div>

</template>

<script>


import Datepicker from 'vuejs-datepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  data(){

    return {
       time: null,
            configdateTimePicker: {
              enableTime: true,
              enableSeconds: true,
              noCalendar: true
            },
      radios1:'luis',
           checkBox1: ['luis'],
            cityOptions: [
        { text: "Grand openning", value: "Grand openning" },
        { text: "Gala dinner", value: "Gala dinner" },
        { text: "Contest", value: "Contest" },
        { text: "Aniversary", value: "Aniversary" },
        { text: "Load show", value: "Load show" },
        { text: "Award Presentation", value: "Award Presentation" },
        { text: "Entertainment", value: "Entertainment" },
        { text: "Sport Event", value: "Sport Event" },
         { text: "Meeting", value: "Meeting" },
          { text: "Competition", value: "Competition" },
      ],

      Soundsystem:[
        { text: "Small", value: "Small" },
        { text: "Medium", value: "Medium" },
        { text: "Large", value: "Large" },

      ],
      lighthing:[
         { text: "Small", value: "Small" },
        { text: "Medium", value: "Medium" },
        { text: "Large", value: "Large" },
      ],
      Specialeffect:[
        { text: "Paper shooter", value: "Paper shooter" },
        { text: "Smoke(Co2)", value: "Smoke(Co2)" },
        { text: "Foam", value: "Foam" },
        { text: "Bubble", value: "Bubble" },
        { text: "Dry ice", value: "Dry ice" },
        { text: "Lasor", value: "Lasor" },
      ],
      copywritting:[
        { text: "Lao", value: "Lao " },
        { text: "English", value: "English" },
        { text: "Other", value: "Other" },

      ],
      funtion:[
        { text: "Theater style", value: " Theater style" },
        { text: "Gala dinner", value: "Gala dinner" },
        { text: "Cocktail function", value: "Cocktail function" },
      ],
      gender:[
        { text: "Male", value: " Male" },
        { text: "Female", value: "Female" },

      ],
      foodstyle:[
         { text: "Western style", value: "Western style" },
        { text: "Cocktail", value: "Cocktail" },
        { text: "Buffe", value: "Buffe" },
        { text: "Chinese table", value: "chinese table" },
        { text: "Other", value: "Other" },

      ],
      newspaper:[
         { text: "Vientiane Mai", value: "Vientian Mai" },
        { text: "Vientiane Time", value: "Vientiane Time" },
        { text: "Lao Economic Daily", value: "Lao Economic Daily" },
        { text: "Socio-Economic News(Sethakit-ppx)", value: "Socio-Economic News(Sethakit-ppx)" },
        { text: " lsecurity News       ໜັງສືພິມ ປກສ ", value: " lsecurity News       ໜັງສືພິມ ປກສ " },
         { text: " Pasaxon ", value: " Pasaxon " },
      ],
      magazine:[
         { text: "Mahason Magazine", value: "Mahason Magazine" },
        { text: "Target Magazine", value: "Target Magazine" },
        { text: "Champa-Meuang Lao  Magazine", value: "Champa-Meuang Lao  Magazine" },
        { text: "Kuanjai  Magazine", value: "Kuanjai  Magazine" },
        { text: "Update Magazine", value: "Update Magazine" },
         { text: " ICT Magazine", value: "ICT Magazine " },
         { text: "Phaphern Magazine", value: "Phaphern Magazine" },
         { text: " Culture Magazine ", value: "Culture Magazine " },
      ],
      radio:[
          { text: "FM 90.0 Mhz Lao Youth Radio ", value: "FM 90.0 Mhz Lao Youth Radio " },
        { text: "FM 93.0 Mhz China Radio International ", value: "FM 93.0 Mhz China Radio International " },
        { text: "Fm 94.3 Mhz Lao national Radio ", value: "Fm 94.3 Mhz Lao national Radio " },
        { text: "FM 95.0 Mhz Climax Radio", value: "FM 95.0 Mhz Climax Radio" },
        { text: "FM 98.8 Mhz  VV Radio ", value: "FM 98.8 Mhz  VV Radio " },
         { text: " FM 99.7 MHz ວິທະຍຸກະຈາຍສຽງກອງທັບ ", value: " FM 99.7 MHz ວິທະຍຸກະຈາຍສຽງກອງທັບ " },
         { text: "FM 103.7Mhz Lao National Radio ", value: "FM 103.7Mhz Lao National Radio " },
         { text: "FM 103.7Mhz VTE Radio ", value: "FM 103.7Mhz VTE Radio " },

      ],
      tv:[
           { text: "Lao National Television", value: "Lao National Television" },
        { text: "Lao Star", value: " Lao Star" },
        { text: " lao PSTV", value: " lao PSTV" },
        { text: "Vte9 channel", value: "Vte9 channel" },
        { text: "TV Lao ", value: "TV Lao" },
      ],
      outofhome:[
         { text: "Billboard ", value: "Billboard " },
        { text: "LED", value: "LED" },
        { text: "Street banner", value: "Street banner" },
        { text: "Pole  sign ", value: "Pole  sign " },
        { text: "Bus shelter", value: "Bus shelter" },
         { text: "Bus wrap ", value: " Bus wrap" },
         { text: "Taxi wrap", value: "Taxi wrap" },
         { text: " Building wrap ", value: "Building wrap " },
           { text: "Spacial location( Air port, Shopping mall…)", value: "Spacial location( Air port, Shopping mall…)" },
         { text: " Cinema Ads ", value: "Cinema Ads " },
      ],
      beverage:[
         { text: "Red wine", value: "Red wine" },
        { text: "White", value: "white" },
        { text: "Beer", value: "Beer" },
        { text: "Wisky", value: "Wisky" },
        { text: "soft drink water", value: "soft drink water" },
        { text: "Coffee-tea", value: "Coffee-tea" },
        { text: "Champian", value: "Champian" },
        { text: "Other", value: "Other" },

      ],
      guest:[
         { text: "Airport", value: "Airport" },
        { text: "Register guest", value: "Register guest" },
        { text: "Hotel", value: "Hotel" },
      ],
      outof:[
        { text: "Hotel", value: "Hotel" },
        { text: "Rental Truck", value: "Rental Truck" },
        { text: "Rental bus", value: "Rental bus" },
        { text: "Rental van", value: "Rental van" },
        { text: "Other", value: "Other" },
      ],
      pag:[
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" },

      ],

      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',


    }
  },
  components: {
    Datepicker,
     flatPickr
  },
  methods:{

  }

}
</script>
