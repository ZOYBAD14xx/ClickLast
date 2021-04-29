<template>
<div>
  <vx-card id="invoice-container"  style="width:1250px"  >
     <!-- <div class="mt-5">

 <div class="flex items-center">
            <vs-button class="mb-base mr-3" type="border" icon-pack="feather" icon="icon icon-download"    text-color="blue"  >Download</vs-button>
            <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice"    text-color="#ffffff" >Print</vs-button>
          </div>
       <div id="Advertising" class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Location" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2">
         <span>Design</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

        <vs-button @click="add" >Add more</vs-button>&nbsp;&nbsp;&nbsp;
          <vs-button  color="primary"  @click=" remove">remove</vs-button>

  </div>

  <div id="Advertising" class="vx-row">
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k">
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k">
      <vs-input class="w-full" label-placeholder="Location" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k">
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k">
         <span>Design</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k">
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" v-for="(input,k) in inputs" :key="k">
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>


  </div>
  <div id="Advertising" class="vx-row">
      <div class="vx-col sm:w-1/2 w-full mb-2" >

        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Location" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Video length" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Design</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>
  </div>
    <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span>Vientiane mai</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page No" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
    <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span>Vientiane Time</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
    <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span>Lao Economic Daily</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span>Socio-Economic News(Sethakit-ppx)</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> lsecurity News       ໜັງສືພິມ ປກສ </span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Pasaxon </span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Mahason Magazine</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Target Magazine</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Champa-Meuang Lao  Magazine</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Kuanjai  Magazine </span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Update Magazine </span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> ICT Magazine </span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Phaphern Magazine</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Culture Magazine</span>
        <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Size" v-model="input27" /><br>
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Page" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>Page color</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> FM 90.0 Mhz Lao Youth Radio  </span>
        <vs-input class="w-full" label-placeholder="Radio Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>PR</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> FM 93.0 Mhz China Radio International  </span>
        <vs-input class="w-full" label-placeholder="Radio Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>PR</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Fm 94.3 Mhz Lao national Radio  </span>
        <vs-input class="w-full" label-placeholder="Radio Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>PR</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> FM 95.0 Mhz Climax Radio  </span>
        <vs-input class="w-full" label-placeholder="Radio Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>PR</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> FM 98.8 Mhz  VV Radio   </span>
        <vs-input class="w-full" label-placeholder="Radio Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>PR</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> FM 99.7 MHz ວິທະຍຸກະຈາຍສຽງກອງທັບ  </span>
        <vs-input class="w-full" label-placeholder="Radio Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>PR</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> FM 103.7Mhz Lao National Radio   </span>
        <vs-input class="w-full" label-placeholder="Radio Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>PR</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> FM 103.7Mhz VTE Radio  </span>
        <vs-input class="w-full" label-placeholder="Radio Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
         <div class="vx-col sm:w-1/2 w-full mb-2" >
         <span>PR</span>
    <ul class="centerx" ><br>
      <vs-checkbox v-model="checkBox15" vs-value="vat">Yes</vs-checkbox> &nbsp;&nbsp;
     <vs-checkbox v-model="checkBox16" vs-value="exclude">No</vs-checkbox> &nbsp;&nbsp;
          </ul>
    </div>

      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
   <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Lao National Television  </span>
        <vs-input class="w-full" label-placeholder="TV Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
        <span>Commercial ad</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>Sponsor</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>News</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>


      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Lao Star </span>
        <vs-input class="w-full" label-placeholder="TV Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
        <span>Commercial ad</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>Sponsor</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>News</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>


      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> lao PSTV  </span>
        <vs-input class="w-full" label-placeholder="TV Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
        <span>Commercial ad</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>Sponsor</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>News</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>


      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> Vte9 channel  </span>
        <vs-input class="w-full" label-placeholder="TV Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
        <span>Commercial ad</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>Sponsor</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>News</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>


      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >
       <span> TV Lao </span>
        <vs-input class="w-full" label-placeholder="TV Program" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >
     <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Program time" />
    </div>
        <div class="vx-col sm:w-1/2 w-full mb-2" >
        <span>Commercial ad</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>Sponsor</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>News</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
    </div>


      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2">
       <datepicker placeholder="Start" v-model="date"></datepicker><br>
    </div>

    <div class="vx-col sm:w-1/2 w-full mb-2" >
      <datepicker placeholder="End" v-model="date"></datepicker>
    </div>

  </div>
  <div class="vx-row">
       <div class="vx-col sm:w-1/2 w-full mb-2" >

        <vs-input class="w-full" label-placeholder="Page name" v-model="input27" /><br>
    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2" >

        <vs-input class="w-full" label-placeholder="Influencer name" v-model="input27" /><br>
    </div>

        <div class="vx-col sm:w-1/2 w-full mb-2" >
        <span>Post</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Budget" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
       <datepicker placeholder="Start" v-model="date"></datepicker><br>
        <datepicker placeholder="End" v-model="date"></datepicker>
    </div>
      <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>Video</span>
       <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Budget" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
       <datepicker placeholder="Start" v-model="date"></datepicker><br>
        <datepicker placeholder="End" v-model="date"></datepicker>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>Bumper ads</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Budget" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
       <datepicker placeholder="Start" v-model="date"></datepicker><br>
        <datepicker placeholder="End" v-model="date"></datepicker>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >
      <span>Video content</span>
      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Budget" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
       <datepicker placeholder="Start" v-model="date"></datepicker><br>
        <datepicker placeholder="End" v-model="date"></datepicker>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >

      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Budget" v-model="input27" /><br>
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
       <datepicker placeholder="Start" v-model="date"></datepicker><br>
        <datepicker placeholder="End" v-model="date"></datepicker>
    </div>


      <div class="vx-col sm:w-1/2 w-full mb-2" >
     <vs-input class="w-full" label-placeholder="Application name" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2" >

      <vs-input class="w-full" label-placeholder="Amount" v-model="input27" /><br>


    </div>
    <div class="vx-col sm:w-1/2 w-full mb-2">
     <vs-input class="w-full" label-placeholder="Budget" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
      <vs-input class="w-full" label-placeholder="Period" v-model="input27" /><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
             <datepicker placeholder="Start" v-model="date"></datepicker><br>
    </div>
     <div class="vx-col sm:w-1/2 w-full mb-2">
  <datepicker placeholder="End" v-model="date"></datepicker>
    </div>
  </div>

  </div> -->
  </vx-card>

  <div v-for="(input, i) in inputs" :key="i">
  <vx-card class="mt-5">
    <h1>hello</h1>
  </vx-card>
  </div>




<div class="mt-5">
<vs-button @click="add" >Add more1</vs-button>&nbsp;&nbsp;&nbsp;
<vs-button  color="primary"  @click=" remove">remove</vs-button>
</div>

<div v-for="(input2, k) in inputs2" :key="k">
  <vx-card class="mt-5">
    <h1>hello2</h1>
  </vx-card>
  </div>

<div class="mt-5">
<vs-button @click="add2" >Add more2</vs-button>&nbsp;&nbsp;&nbsp;
<vs-button  color="primary"  @click=" remove2">remove</vs-button>
</div>

</div>

</template>

<script>
export default{
  name:'Advertising',
  components: {
   },
  methods:{
    add (index) {
      this.inputs.push({ name: '' })
    },
    add2 (index) {
      this.inputs2.push({ name2: '' })
    },
    remove (index) {
      this.inputs.splice(index, 1)
    },
    remove2 (index) {
      this.inputs2.splice(index, 1)
    }
  },
  data () {
    return {
      inputs: [
        {
          name: ''
        }
      ],
       inputs2: [
        {
          name2: ''
        }
      ],

  }
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
