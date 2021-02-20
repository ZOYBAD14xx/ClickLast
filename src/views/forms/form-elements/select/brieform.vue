  <template>
  <div class="vx-row" style="margin-top:20px">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card style="width:1250px" title="Brief Form" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Date</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <datepicker   v-model="date"></datepicker><br>
         <datepicker v-model="date"></datepicker>
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>No</span>
          </div>
      <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            BF-YY0001
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Product Name</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
      <vs-input class="w-full" type="email" v-model="input318" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Model</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input319" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Color</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input320" />
          </div>
        </div>
          <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Color code</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input336" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Other</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input321" />
          </div>
        </div>
       
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>material</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input322" />
          </div>
        </div>
      
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Size</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input323" />
          </div>
        </div>
        
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Amount</span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input324" />
          </div>
          
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
            <vs-input class="w-full" v-model="input325" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Logo 1</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
                <vs-upload  style="color:#28E5B9" automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Position1</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input327" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Color code logo1</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input328" />
          </div>
        </div>
       
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>More information</span>
          </div>
          <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input329" />
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
            <vs-input class="w-full" v-model="input330" />
          </div>
        </div>
        
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Logo 2</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
              <vs-upload  style="color:#28E5B9" automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
          </div>
        </div>

       <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Position2</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input332" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Color code logo2</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input333" />
          </div>
        </div>

        
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>More information</span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input334" />
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
            <vs-input class="w-full" v-model="input335" />
          </div>
        </div>
          
           <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Insert Design</span>
          </div>
       <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-upload  style="color:#28E5B9" automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Insert Design</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-upload  style="color:#28E5B9" automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Insert Design</span>
          </div>
     <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-upload  style="color:#28E5B9" automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Insert Design</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-upload  style="color:#28E5B9" automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
          </div>
        </div>

        <span>Please send Quotation to</span><br><br>
        
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Contract person</span>
          </div>
     <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input336" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Tel</span>
          </div>
        <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input336" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Email</span>
          </div>
      <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input336" />
          </div>
        </div>

         <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Line ID</span>
          </div>
         <div style="margin-left:200px" class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input336" />
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
       
      ]
    }
  },
  components: {
    Datepicker,
     flatPickr
  }
  
}
</script>
  