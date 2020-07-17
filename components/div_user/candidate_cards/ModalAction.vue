<template>
  <div
    v-if="selectedSuggestion"
    id="modal-suggestion-detail"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modal-suggestion-detail"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal- modal-dialog-centered modal-"
      role="document"
    >
      <div class="modal-content bg-transparent shadow-none">
        <div class="modal-header">
          <h6
            id="modal-title-suggestion-detail"
            class="modal-title text-primary"
          >
            Talent Suggestion Details
          </h6>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" class="text-white">×</span>
          </button>
        </div>

        <div class="modal-body py-0">
          <div
            class="card card-pricing bg-gradient-primary border-0 text-center mb-4"
          >
            <div class="card-header bg-transparent">
              <h3 class="text-uppercase ls-1 text-white py-3 mb-0">
                {{ selectedSuggestion.talent.source }}
              </h3>
              <h5 :class="state">
                {{ selectedSuggestion.status.state }}
              </h5>
            </div>
            <div class="card-body px-lg-3">
              <div class="display-4 text-white">
                {{ selectedSuggestion.talent.name }}
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <table class="table table-borderless my-3">
                      <tbody class="text-white text-left">
                        <tr>
                          <td>DOB :</td>
                          <td>
                            {{ selectedSuggestion.talent.dob }}
                          </td>
                        </tr>
                        <tr>
                          <td>GENDER :</td>
                          <td>
                            {{ selectedSuggestion.talent.gender }}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            LAST EDUCATION :
                          </td>
                          <td>
                            {{ selectedSuggestion.talent.last_education }}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            UNIVERSITY :
                          </td>
                          <td>
                            {{ selectedSuggestion.talent.university }}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            WORKING EXPERIENCE :
                          </td>
                          <td>
                            {{
                              selectedSuggestion.talent.total_working_experience
                            }}
                            Years
                          </td>
                        </tr>
                        <tr>
                          <td>
                            APPLIED POSITION :
                          </td>
                          <td>
                            {{ selectedSuggestion.talent.applied_position }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <a
                type="button"
                :href="selectedSuggestion.talent.cv"
                target="_blank"
                class="btn btn-secondary mb-3"
              >
                Preview CV
              </a>
            </div>
          </div>
        </div>

        <div class="modal-footer pt-0">
          <button
            v-if="selectedSuggestion.status.id < 3"
            type="button"
            class="btn bg-success text-white mr-auto"
            @click="action(3)"
          >
            Proceed this Talent
          </button>
          <button
            v-if="selectedSuggestion.status.id < 3"
            type="button"
            class="btn bg-danger text-white mr-auto"
            @click="action(100)"
          >
            Decline this Talent
          </button>
          <button
            id="close-detail-modal"
            type="button"
            class="btn bg-gradient-primary text-white  ml-auto"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DivModalAction',
  props: {
    selectedSuggestion: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    state() {
      return this.selectedSuggestion.status.id === 100
        ? 'badge badge-danger text-uppercase'
        : 'text-white text-uppercase'
    }
  },
  methods: {
    ...mapActions({
      UPDATE_CANDIDATE_CARD: 'candidate-cards/UPDATE_CANDIDATE_CARD',
      GET_CANDIDATE_CARDS: 'candidate-cards/GET_CANDIDATE_CARDS'
    }),
    async action(statusId) {
      const payload = {
        status_id: statusId
      }
      const cardId = this.selectedSuggestion.id
      try {
        await this.UPDATE_CANDIDATE_CARD({ payload, cardId })
        await this.GET_CANDIDATE_CARDS()
        document.getElementById('close-detail-modal').click()
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style></style>
