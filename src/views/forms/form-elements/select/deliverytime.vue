<template>
  <div class="mt-5">
    <vs-tabs alignment="fixed">
      <vs-tab label="Sample product">
        <div>
          <div>
            <br />

            <vs-upload
              multiple
              text="Upload Sample Product"
              action="https://jsonplaceholder.typicode.com/posts/"
              @on-success="successUpload"
            />
            
          </div>
        </div>
      </vs-tab>
      <vs-tab label="Real Product">
        <div>
          <div>
            <br />
            <vs-upload
              multiple
              text="Upload Real Product"
              action="https://jsonplaceholder.typicode.com/posts/"
              @on-success="successUpload"
            />
          </div>
        </div>
      </vs-tab>
      <vs-tab label="Final Product">
        <div>
          <div>
            <br />
            <vs-upload
              multiple
              text="Upload Final Product"
              action="https://jsonplaceholder.typicode.com/posts/"
              @on-success="successUpload"
            />
          </div>
        </div>
      </vs-tab>
    </vs-tabs>
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