<template>
  <q-page>
    <div class="flex flex-center justify-evenly q-py-lg bg-blue-1">
      <q-card class="hits-card" flat>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">
              Hits last 24 hours
            </div>
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-mb-xs">
              0
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal>
          <VueApexCharts type="line" :options="chartOptions" :series="series" />
        </q-card-section>
      </q-card>

      <q-card class="hits-card" flat>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">
              Hits last 7 days
            </div>
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-mb-xs">
              1
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal>
          <VueApexCharts type="line" :options="chartOptions" :series="series" />
        </q-card-section>
      </q-card>

      <q-card class="hits-card" flat>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">
              Hits last 30 days
            </div>
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-mb-xs">
              2
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal>
          <VueApexCharts type="line" :options="chartOptions" :series="series" />
        </q-card-section>
      </q-card>

      <q-card class="hits-card" flat>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">
              Hits last 12 months
            </div>
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-mb-xs">
              3
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal>
          <VueApexCharts type="line" :options="chartOptions" :series="series" />
        </q-card-section>
      </q-card>
    </div>

    <div class="flex flex-center justify-evenly q-mt-lg q-py-lg bg-blue-1">
      <q-card class="counts-card1" flat>
        <q-card-section horizontal>
          <q-card-section class="row justify-center items-center bg-primary">
            <q-icon size="lg" class="text-white" name="link" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-m-xs">
              0
            </div>
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">Links</div>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="counts-card1" flat>
        <q-card-section horizontal>
          <q-card-section class="row justify-center items-center bg-primary">
            <q-icon size="lg" class="text-white" name="domain" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-mb-xs">
              0
            </div>
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">Domain</div>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="counts-card1" flat>
        <q-card-section horizontal>
          <q-card-section class="row justify-center items-center bg-primary">
            <q-icon size="lg" class="text-white" name="sell" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-mb-xs">
              0
            </div>
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">Tags</div>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="counts-card1" flat>
        <q-card-section horizontal>
          <q-card-section class="row justify-center items-center bg-primary">
            <q-icon size="lg" class="text-white" name="podcasts" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-mb-xs">
              0
            </div>
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">Channels</div>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="counts-card1" flat>
        <q-card-section horizontal>
          <q-card-section class="row justify-center items-center bg-primary">
            <q-icon size="lg" class="text-white" name="dynamic_feed" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-mb-xs">
              0
            </div>
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">
              UTM Templates
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="flex flex-center justify-evenly q-mt-lg q-py-lg bg-blue-1">
      <q-card class="counts-card2" flat>
        <q-card-section horizontal>
          <q-card-section class="row justify-center items-center bg-primary">
            <q-icon size="lg" class="text-white" name="person_outline" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-m-xs">
              0
            </div>
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">Profile</div>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="counts-card2" flat>
        <q-card-section horizontal>
          <q-card-section class="row justify-center items-center bg-primary">
            <q-icon size="lg" class="text-white" name="workspaces" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-m-xs">
              0
            </div>
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">Workspace</div>
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="counts-card2" flat>
        <q-card-section horizontal>
          <q-card-section class="row justify-center items-center bg-primary">
            <q-icon size="lg" class="text-white" name="groups" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 text-weight-bold text-grey-8 q-mt-sm q-m-xs">
              0
            </div>
            <div class="text-body1 text-grey-6 q-mt-sm q-mb-xs">Members</div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "DashboardPage",
  components: {
    VueApexCharts,
  },
  setup() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: Array.apply(null, { length: 24 }).map(
            Number.call,
            Number
          ),
        },
      },
      series: [
        {
          name: "clicks",
          data: [0, 2, 0, 1, 0],
        },
      ],
    };
  },
});
</script>

<style lang="sass" scoped>
.hits-card
  width: 100%
  max-width: 350px

.counts-card1
  width: 100%
  max-width: 270px

.counts-card2
  width: 100%
  max-width: 270px
</style>
