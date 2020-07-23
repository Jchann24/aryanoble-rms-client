<template>
  <div class="card">
    <!-- Card image -->
    <img
      class="card-img-top"
      src="https://source.unsplash.com/collection/465326/1600x900/?orientation=landscape"
      loading="lazy"
      alt="Quote Image"
      style="max-height: 250px; min-height: 250px; object-fit: cover;"
      crossorigin="anonymous"
      z
    />
    <!-- Card body -->
    <div class="card-body">
      <h5 class="h2 card-title mb-0">
        Hello, {{ USER.user_detail.full_name }} !
      </h5>
      <small class="text-muted"
        >by your soon to be Sports Team - {{ USER.user_detail.created_at }} in
        Latest Candidate Detail</small
      >
      <p class="card-text mt-4">
        First of all, welcome to our recruitment management system. <br />
        Here you can get your interview schedule, edit your details and more.
        <br />
        I've checked our latest data, and I found that you have already
        submitted your latest details! <br />Please correct me if I'm wrong.
        <br />
        Your full name is

        {{ USER.user_detail.full_name }}, you were born on
        {{ USER.user_detail.dob | moment('Do of MMM, YYYY') }}.
        <br />
        Latest address at
        {{ USER.user_detail.address }}, {{ USER.user_detail.city }},
        {{ USER.user_detail.province }},
        {{ USER.user_detail.postal_code }}
        <br />
        You graduated from
        {{ USER.user_detail.university }}
        with
        {{ USER.user_detail.degree }}
        degree in
        {{ USER.user_detail.faculty }}.
        <br />
        Lastly, can I call you at this number {{ USER.user_detail.phone_num }} ?
        :)
      </p>
      <p class="card-text">
        Thankyou! Can't wait to meet you in person! Good Luck! <br />
        <span class="text-danger"
          >and don't forget to change your account password if you haven't
          change the default password!</span
        >
      </p>
      <nuxt-link to="/candidate/settings">
        <a href="#!" class="btn btn-link px-0"
          >Correct your detail / Change password here</a
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CandidateDetailCard',
  computed: {
    ...mapGetters({
      USER: 'loggedInUser'
    })
  }
}
</script>

<style lang="css">
.card-text {
  line-height: 1.75em;
  font-size: 14px;
}
</style>
