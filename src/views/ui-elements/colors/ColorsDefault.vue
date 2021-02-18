<!-- =========================================================================================
    File Name: ColorDefault.vue
    Description: Theme's main colors(primary, success etc.)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Default Colors" code-toggler>

        <p>We have a series of colors that are used by default. They include:</p>

        <vx-list :list="defaultColors"></vx-list>

        <p class="mb-5">For each color, we think has its functionality in the application as alerts of errors (<strong>danger</strong>), warnings to the user (<strong>warning</strong>), communications of approval (<strong>success</strong>), or main color of the application (<strong>primary</strong>).</p>

        <ul class="demo-alignment text-white">
           
            <li class="bg-success">
                success
            </li>
          
           
        </ul>

        <template slot="codeContainer">
&lt;ul class=&quot;demo-alignment text-white&quot;&gt;
 
  &lt;li class=&quot;bg-success&quot;&gt;success&lt;/li&gt;
  
        </template>

    </vx-card>
</template>

<script>
export default{
  data () {
    return {
      'defaultColors': [
        
        'success',
        
        'dark'
      ]
    }
  }
}
</script>
