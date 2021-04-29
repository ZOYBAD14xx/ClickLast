<template>
  <div class="mt-5">
    
            <vs-upload
              multiple
              text="Upload Brief Form"
              action="https://jsonplaceholder.typicode.com/posts/"
              @on-success="successUpload"
            />
            <br><br><br><br><br><br><br><br><br><br><br>
              <vs-button     text-color="#ffffff" @click="$router.go(-1)" type="filled">Back</vs-button>
  </div>
  
</template>

<script>
export default {
  methods: {
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: "Lorem ipsum dolor sit amet, consectetur",
      });
    },
  },
};
</script>

<style>
</style>