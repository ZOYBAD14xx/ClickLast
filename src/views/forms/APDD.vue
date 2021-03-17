<template>
<vx-card title="Product Detail" class="overflow-auto h-13">

          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img src="https://www.nicepng.com/png/full/304-3048415_business-advice-product-icon-png.png" alt="img" class="responsive" width="80px">
          </div>

<div class="flex mb-10 mt-10">

  <div class="w-1/5 bg-grid-color h-12">
  <h4>
    NAME:
  </h4>
  <p class="mt-5">
    Project
  </p>
  </div>
  <div class="w-1/5 bg-grid-color-secondary h-12">
  <h4>
    MATERIAL:
  </h4>
  <p class="mt-5">
    Project
  </p >
  </div>
  <div class="w-1/5 bg-grid-color h-12">  <h4>
    SIZE:
  </h4>
  <p class="mt-5">
    10
  </p>
  </div>
  <div class="w-1/5 bg-grid-color-secondary h-12">  <h4>
    COLOR:
  </h4>
  <p class="mt-5">
    White
  </p>
  </div>
  <div class="w-1/5 bg-grid-color h-12">  <h4>
    COLOR CODE:
  </h4>
  <p class="mt-5">
    #FFFFFF
  </p>
  </div>
</div>
<br>
<h3>Image Product</h3>

<div class="flex mb-4">
  <div class="w-1/4 bg-grid-color h-12">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png" alt="img" class="responsive" width="auto" height="150px">
  </div>
  <div class="w-1/4 bg-grid-color-secondary h-12">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png" alt="img" class="responsive" width="auto" height="150px">
  </div>
  <div class="w-1/4 bg-grid-color h-12">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png" alt="img" class="responsive" width="auto" height="150px">
  </div>
  <div class="w-1/4 bg-grid-color-secondary h-12">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/NYCS-bull-trans-4-red.svg/1200px-NYCS-bull-trans-4-red.svg.png" alt="img" class="responsive" width="auto" height="150px">
  </div>
</div>


<br><br><br><br><br><br><br><br><br>
<hr class="my-10">
<h4>Design1 information</h4>

<div class="flex mb-4 mt-10">
  <div class="w-1/5 bg-grid-color h-12">
  <h4>
    LOGO PATTERN:
  </h4>
  <p class="mt-5">
    Screen
  </p>
  </div>
  <div class="w-1/5 bg-grid-color-secondary h-12">
  <h4>
    SIZE OF LOGO:
  </h4>
  <p class="mt-5">
    10
  </p>
  </div>
  <div class="w-1/5 bg-grid-color h-12">  <h4>
    COLOR CODE LOGO:
  </h4>
  <p class="mt-5">
    #FFFFFF
  </p >
  </div>
  <div class="w-1/5 bg-grid-color-secondary h-12">  <h4>
    POSITION:
  </h4>
  <p class="mt-5">
    Center
  </p>
  </div>

  <div class="img-container w-64 mx-auto ">
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="img" class="responsive" width="auto" height="200px">
          </div>
</div>


<hr class="my-10">
<h4>Design2 information</h4>

<div class="flex mb-4 mt-10">
  <div class="w-1/5 bg-grid-color h-12">
  <h4>
    LOGO PATTERN:
  </h4>
  <p class="mt-5">
    Screen
  </p>
  </div>
  <div class="w-1/5 bg-grid-color-secondary h-12">
  <h4>
    SIZE OF LOGO:
  </h4>
  <p class="mt-5">
    10
  </p>
  </div>
  <div class="w-1/5 bg-grid-color h-12">  <h4>
    COLOR CODE LOGO:
  </h4>
  <p class="mt-5">
    #FFFFFF
  </p>
  </div>
  <div class="w-1/5 bg-grid-color-secondary h-12">  <h4>
    POSITION:
  </h4>
  <p class="mt-5">
    Center
  </p>
  </div>

  <div class="img-container w-64 mx-auto ">
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="img" class="responsive" width="auto" height="200px">
          </div>
</div>


    <div>
    </div>

    <div class="mt-10">
      <div class="flex justify-between">
        <div>
        <vs-button text-color="#ffffff" class="mr-3 mb-2" @click="$router.go(-1)">back</vs-button>
        </div>
        <div>
        <vs-button class="mr-3 mb-2" text-color="#ffffff" @click="$router.push('/ui-elements/data-list/thumb-view')">Submit</vs-button>
      </div>
      </div>
   </div>

</vx-card>
</template>

<script>
export default {
  data() {
    return {
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      input6:'',
      textarea: '',
      popupActive: false,
    }
  },

}
</script>

<style>

</style>
