<template>
<div class="mt-5">
    
    <vs-tabs alignment="fixed">
      <vs-tab label="Posm/Product">
        <div></div>
       <template>
  <div class="vx-row" style="margin-top:20px">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card title="Posm Form" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Project name</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input1" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Model</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input2" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Color</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input3" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Other</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input4" />
          </div>
        </div>
       
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>material</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input1" />
          </div>
        </div>
      
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Size</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input1" />
          </div>
        </div>
        
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Amout</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input1" />
          </div>
          <ul class="centerx" style="margin-left:250px"><br>
  
    <vs-radio v-model="radios1" vs-value="luis">1</vs-radio> &nbsp;&nbsp;
  
  
    <vs-radio v-model="radios1" vs-value="carols">2</vs-radio> &nbsp;&nbsp;

  
    <vs-radio v-model="radios1" vs-value="summer">3</vs-radio> &nbsp;
  
          </ul>
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
      </vx-card>
    </div>
  </div>
       </template>
      </vs-tab>
      <vs-tab label="Event">
        <div></div>
        <template>
  <div class="vx-row" style="width:100%">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card title="Posm Form" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>First Name</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input1" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Email</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input2" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Mobile</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input3" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Password</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="password" v-model="input4" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-checkbox class="inline-flex" v-model="check1">Remember Me</vs-checkbox>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button>
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
      <vs-tab label="Advertising">
        <div></div>
        <template>
  <div class="vx-row" style="width:100%">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card title="Posm Form" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>First Name</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input1" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Email</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input2" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Mobile</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input3" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Password</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="password" v-model="input4" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-checkbox class="inline-flex" v-model="check1">Remember Me</vs-checkbox>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button>
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
  <div class="vx-row" style="width:100%">

    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-1/2 w-full mb-base">
      <vx-card title="Posm Form" >
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>First Name</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input1" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Email</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="email" v-model="input2" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Mobile</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" v-model="input3" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Password</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input class="w-full" type="password" v-model="input4" />
          </div>
        </div>
        <div class="vx-row mb-6">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-checkbox class="inline-flex" v-model="check1">Remember Me</vs-checkbox>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-2/3 w-full ml-auto">
            <vs-button class="mr-3 mb-2" style="color:white">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button>
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
        <vs-tab label="Out of home">
        <div></div>
      </vs-tab>
      <vs-tab label="Digital">
        <div></div>
      </vs-tab>
    </vs-tabs>
  </div>

</template>

<script>
export default {
  data(){
    return {
      radios1:'luis',
    }
  }
}
</script>
