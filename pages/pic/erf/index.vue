<template>
  <div>
    <div class="header bg-default pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">
                Employee Request Form
              </h6>
              <p class="text-white">
                These are submitted ERFs from various division users.
              </p>
              <ul class="text-white">
                <li>Details to view ERF</li>
              </ul>
            </div>
          </div>
          <!-- Card stats -->
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--5">
      <div class="row">
        <!-- LATEST SUBMIT -->
        <div class="col-xl-12">
          <div class="card bg-white shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">
                    All
                  </h6>
                  <h5 class="h3 mb-0">Latest ERFs</h5>
                </div>
              </div>
            </div>
            <div v-if="ERFS.data" class="table-responsive mb-5">
              <table
                class="table align-items-center table-white table-flush table-hover"
              >
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort">
                      ERF Title
                    </th>
                    <th scope="col" class="sort">
                      Submitted At
                    </th>
                    <th scope="col" class="sort">
                      Submitted By
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="item in ERFS.data" :key="item.id">
                    <td>
                      {{ item.title }}
                    </td>
                    <td class="budget">
                      {{ item.created_at | moment('ddd, DD-MM-YY | hh:mm') }}
                    </td>
                    <td>
                      {{ item.div_user.name }}
                    </td>
                    <td>
                      <nuxt-link :to="`/pic/erf/${item.id}`">
                        <button
                          type="button"
                          class="btn btn-icon btn-primary"
                          data-toggle="modal"
                          data-target="#modal-add-talent"
                        >
                          <span class="btn-inner--text">Details</span>
                        </button>
                      </nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="col my-4 mx-4">
              <content-placeholders :rounded="true">
                <content-placeholders-heading />
                <content-placeholders-text :lines="5" />
              </content-placeholders>
            </div>
            <div v-if="ERFS.links" class="card-footer">
              <div ref="loadingContainer"></div>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a
                      v-if="ERFS.links.prev && !loading"
                      class="page-link"
                      href="javascript:"
                      @click="
                        changePage(prev)
                        getERFS(page)
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
                      v-if="ERFS.links.next && !loading"
                      class="page-link"
                      href="javascript:"
                      @click="
                        changePage(next)
                        getERFS(page)
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
  middleware: ['auth', 'pic'],
  name: 'PICErf',
  components: {},
  data() {
    return {
      page: 1,
      prev: 'prev',
      next: 'next',
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      ERFS: 'erfs/ERFS'
    })
  },
  created() {
    this.getERFS(this.page)
  },
  methods: {
    ...mapActions({
      GET_ERFS: 'erfs/GET_ERFS'
    }),
    async getERFS(page) {
      this.loading = true
      const loader = this.$loading.show({
        container: this.$refs.loadingContainer
      })
      try {
        await this.GET_ERFS(page)
      } catch (e) {
        this.page--
      } finally {
        this.loading = false
        loader.hide()
      }
    },
    changePage(change) {
      change === 'next' ? this.page++ : this.page--
    }
  }
}
</script>
