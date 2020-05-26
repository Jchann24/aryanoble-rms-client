<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Talent Pool</h6>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <button class="btn btn-icon btn-primary" type="button">
                <span class="btn-inner--icon">
                  <i class="ni ni-ruler-pencil"></i>
                </span>
                <span class="btn-inner--text">Add New Talent</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--5">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h1>Talents</h1>
            </div>
            <div class="table-responsive mb-5">
              <table class="table align-items-center table-white table-hover">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort">
                      Name
                    </th>
                    <th scope="col" class="sort">
                      Source
                    </th>
                    <th scope="col" class="sort">
                      Last Education
                    </th>
                    <th scope="col" class="sort">
                      CV
                    </th>
                    <th scope="col" class="sort"></th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="talent in TALENTS.results" :key="talent.id">
                    <td>
                      {{ talent.name }}
                    </td>
                    <td>
                      {{ talent.source }}
                    </td>
                    <td>
                      {{ talent.last_education }}
                    </td>
                    <td>
                      <a
                        v-if="talent.cv"
                        target="_blank"
                        class="btn btn-secondary btn-sm"
                        :href="talent.cv"
                      >
                        Preview
                      </a>
                      <a
                        v-else
                        disabled
                        class="btn btn-secondary btn-sm disabled text-danger"
                      >
                        Unavailable
                      </a>
                    </td>
                    <td>
                      <button type="button" class="btn btn-info float-right">
                        Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="TALENTS.next || TALENTS.previous" class="card-footer">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a
                      v-if="TALENTS.previous"
                      class="page-link"
                      href="#!"
                      @click="
                        previousPage()
                        getTalents(page)
                      "
                    >
                      <i class="fa fa-angle-left"></i>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link">{{ page }}</a>
                  </li>
                  <li class="page-item">
                    <a
                      v-if="TALENTS.next"
                      class="page-link"
                      href="#!"
                      @click="
                        nextPage()
                        getTalents(page)
                      "
                    >
                      <i class="fa fa-angle-right"></i>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PICPool',
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapGetters({
      TALENTS: 'pic/TALENTS'
    })
  },
  created() {
    this.getTalents(this.page)
  },
  methods: {
    ...mapActions({
      getTALENTS: 'pic/GET_TALENTS'
    }),

    getTalents(page) {
      this.getTALENTS(page)
    },
    nextPage() {
      this.page++
    },
    previousPage() {
      this.page--
    }
  }
}
</script>

<style></style>
