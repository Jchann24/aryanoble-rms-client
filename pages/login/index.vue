<template>
  <div>
    <div class="main-content">
      <!-- Header -->
      <div class="header bg-default py-7 py-lg-8 pt-lg-9">
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <div class="container p-5">
                  <img src="img/logo-white.png" class="img-fluid w-75" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="separator separator-bottom separator-skew zindex-100">
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              style="fill: #f8f9fe;"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <!-- Page content -->
      <div class="container mt--8 pb-5">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary border-0 mb-0">
              <div class="card-body px-lg-5 py-lg-5">
                <div class="text-center text-muted mb-4">
                  <h4>
                    Recruitment<br />
                    Management System
                  </h4>
                </div>
                <form role="form" class="mt-4" @submit.prevent="login">
                  <div class="form-group px-3 mb-0">
                    <label for="email"><small>E-mail</small></label>
                    <input
                      id="email"
                      v-model="email"
                      type="text"
                      class="form-control"
                      autocomplete="off"
                      :style="err"
                    />
                  </div>
                  <div class="form-group px-3 mt-2">
                    <label for="password"><small>Password</small></label>
                    <input
                      id="password"
                      v-model="password"
                      type="password"
                      class="form-control"
                      autocomplete="off"
                      :style="err"
                    />
                  </div>
                  <p v-if="errors" class="text-danger px-3 mb-0">
                    <small>Invalid Credentials</small>
                  </p>
                  <div class="text-center">
                    <button
                      type="Submit"
                      class="btn btn-primary my-1"
                      :disabled="disabled"
                      :style="buttonStyle"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer id="footer-main" class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-12">
            <div class="copyright text-center text-xl-center text-muted">
              &copy; 2020
              <a
                href="http://aryanoble.co.id"
                class="font-weight-bold ml-1 text-primary"
                target="_blank"
                >Arya Noble, Recruitment Management System</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  middleware: ['guest'],
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errors: null
    }
  },
  computed: {
    disabled() {
      return this.email === '' || this.password === ''
    },
    buttonStyle() {
      const styleName = 'pointer-events: none;'
      if (this.email === '' || this.password === '') {
        return styleName
      } else {
        return false
      }
    },
    err() {
      const styleName = 'border-color: red;'
      if (this.errors !== null) {
        return styleName
      } else {
        return false
      }
    }
  },
  methods: {
    login() {
      this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((e) => {
          this.errors = e.response.data
        })
    }
  }
}
</script>

<style></style>
