<template>
  <div>
    <!-- Modal -->
    <div
      id="modalChangePicture"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalChangePictureLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="modalChangePictureLabel" class="modal-title">
              Change Profile Picture
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input id="imageInput" type="file" @change="selectFile" />
            <div v-if="errors" class="alert alert-danger mt-4" role="alert">
              <p v-for="item in errors" :key="item.name" class="mb-0">
                <strong> {{ item[0] }}</strong>
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              v-if="!loading"
              type="button"
              class="btn btn-primary"
              :disabled="disabled"
              @click="saveImage"
            >
              Upload
            </button>
            <button v-else class="btn btn-primary" disabled>
              Uploading ...
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CandidateModalPicture',
  data() {
    return {
      image: null,
      loading: false,
      errors: null
    }
  },
  computed: {
    disabled() {
      return !this.image
    }
  },
  methods: {
    selectFile(e) {
      const image = e.target.files[0]
      this.image = image
    },
    async saveImage() {
      this.loading = true
      const formData = new FormData()
      formData.append('image', this.image)

      try {
        await this.$axios.$post('images/', formData)
        await this.$store.dispatch('GET_ME')
        document.getElementById('modalChangePicture').click()
        document.getElementById('imageInput').value = null
        this.toaster_success('Profile Picture Saved!')
      } catch (e) {
        this.errors = e.response.data.errors
      } finally {
        this.loading = false
      }
    },
    toaster_success(mess) {
      this.$toast.show(`Success! ${mess}`, {
        theme: 'bubble',
        type: 'success',
        position: 'top-right',
        duration: 4000,
        icon: 'done'
      })
    }
  }
}
</script>

<style></style>
