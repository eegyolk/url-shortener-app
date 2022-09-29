<template>
  <q-page>
    <div class="flex flex-center">
      <div class="row full-width q-mt-md q-px-lg">
        <div class="row full-width q-mb-lg">
          <div class="col col-sm row justify-start items-center">
            <div class="row items-center q-pb-md">
              <q-btn
                unelevated
                padding="none"
                icon="description"
                label="Templates"
                class="text-blue-10"
                to="/utm-templates"
                no-caps
              />
              <span class="text-weight-bold q-px-md">|</span>
              <q-btn
                unelevated
                padding="none"
                icon="list_alt"
                label="Parameters"
                class="text-blue-10"
                to="/utm-parameters"
                no-caps
              />
            </div>
          </div>
        </div>

        <div class="row full-width q-mb-lg">
          <div class="col-6 col-sm-6 row justify-start items-center">
            <div class="row items-center q-pr-sm q-pb-md">
              <q-icon size="md" name="equalizer" />
            </div>

            <div class="row items-center">
              <p
                class="text-weight-medium"
                style="font-size: 1.5rem; letter-spacing: 0.12rem"
              >
                {{ getTitle }}
              </p>
            </div>
          </div>

          <div class="col-6 col-sm-6 row justify-end items-center">
            <div class="row items-center q-gutter-xs q-pr-md">
              <span class="text-grey-8 text-weight-medium">Search:</span>
              <q-input dense standout="no-shadow bg-grey-6" color="blue-10">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>

            <div class="row items-center">
              <q-btn
                unelevated
                padding="sm"
                icon="playlist_add"
                color="blue-10"
                label="Add Template"
                no-caps
                style="width: 180px"
                @click="showDialog = true"
              />
            </div>
          </div>
        </div>

        <div class="row full-width">
          <div class="col-8 col-sm-8 row justify-start items-center">
            <div class="row items-center q-gutter-xs q-pr-md">
              <span class="text-grey-8 text-weight-medium">Action:</span>
              <q-select
                v-model="selectActiveStatus"
                dense
                standout="no-shadow bg-grey-6"
                dropdown-icon="arrow_drop_down"
                :options="options"
                style="width: 120px"
                bg-color="grey-3"
              >
                <template v-slot:append>
                  <q-icon size="xs" name="rule" class="cursor-pointer" />
                </template>
              </q-select>
            </div>

            <div class="row items-center q-gutter-xs q-pr-md">
              <q-btn
                unelevated
                padding="sm"
                icon="tune"
                color="blue-10"
                label="Filters"
                no-caps
                style="width: 150px"
                @click="showDialog = true"
              />
              <q-select
                v-model="selectActiveStatus"
                dense
                standout="no-shadow bg-grey-6"
                dropdown-icon="arrow_drop_down"
                :options="options"
                style="width: 120px"
                bg-color="grey-3"
              />
            </div>
          </div>

          <div class="col-4 col-sm-4 row justify-end items-center">
            <div class="row items-center q-pr-md">
              <q-btn
                unelevated
                padding="none"
                icon="cancel"
                label="Clear filters"
                no-caps
              />
            </div>
          </div>
        </div>
      </div>

      <div v-if="tableRows.length" class="row full-width q-pa-lg">
        <q-table
          ref="qTableUTM"
          class="utm-table full-width"
          style="border-top: 1px solid #cccccc"
          :rows="tableRows"
          :columns="tableColumns"
          :pagination="tablePagination"
          @update:pagination="onUpdatePagination"
          rows-per-page-label=""
          row-key="name"
          square
          flat
        >
          <template v-slot:header="scope">
            <q-tr :props="scope">
              <q-th
                v-for="col in scope.cols"
                :key="col.name"
                :props="scope"
                style="height: 80px"
              >
                <q-checkbox
                  dense
                  color="grey-8"
                  size="sm"
                  v-if="col.name === 'selection'"
                  v-model="headerCheckBoxState"
                  @update:model-value="onUpdateHeaderCheckBox"
                />
                <span
                  v-else
                  class="text-weight-medium"
                  style="font-size: 0.8rem; letter-spacing: 0.12rem"
                >
                  {{ col.label }}
                </span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="scope">
            <q-tr :props="scope">
              <q-td key="selection" :props="scope" style="width: 10px">
                <q-checkbox
                  dense
                  color="grey-8"
                  size="sm"
                  v-model="scope.row.selected"
                />
              </q-td>
              <q-td key="template" :props="scope">
                {{ scope.row.name }}
              </q-td>
              <q-td key="calories" :props="scope">
                {{ scope.row.calories }}
              </q-td>
              <q-td key="fat" :props="scope">
                {{ scope.row.fat }}
              </q-td>
              <q-td key="carbs" :props="scope">
                {{ scope.row.carbs }}
              </q-td>
              <q-td key="protein" :props="scope">
                {{ scope.row.protein }}
              </q-td>
              <q-td key="sodium" :props="scope">
                {{ scope.row.sodium }}
              </q-td>
              <q-td key="calcium" :props="scope">
                {{ scope.row.calcium }}
              </q-td>
              <q-td key="iron" :props="scope">
                {{ scope.row.iron }}
              </q-td>
              <q-td key="action" style="width: 10px">
                <q-btn flat round dense size="sm" color="grey-8" icon="edit">
                  <q-tooltip
                    anchor="center right"
                    self="center left"
                    :offset="[2, 2]"
                  >
                    Edit
                  </q-tooltip>
                </q-btn>
                <q-btn flat round dense size="sm" color="grey-8" icon="delete">
                  <q-tooltip
                    anchor="center right"
                    self="center left"
                    :offset="[2, 2]"
                  >
                    Delete
                  </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>

          <template v-slot:bottom="scope">
            <div class="row col-2 col-sm-2 justify-start items-center">
              <span class="text-grey-8 text-caption text-weight-medium">
                Selected: 1
              </span>
            </div>

            <div class="row col justify-end items-center q-pt-sm">
              <span class="text-grey-8 text-caption text-weight-medium q-pr-xs">
                Records per page:
              </span>

              <q-select
                v-model="selectActiveStatus"
                dense
                standout="no-shadow bg-grey-6"
                dropdown-icon="arrow_drop_down"
                :options="options"
                style="width: 70px"
                bg-color="grey-3"
              />

              <span class="text-grey-8 text-caption text-weight-medium q-px-md">
                {{ paginationOf }}
              </span>

              <q-btn
                v-if="scope.pagesNumber > 2"
                icon="first_page"
                color="grey-8"
                round
                dense
                flat
                :disable="scope.isFirstPage"
                @click="scope.firstPage"
              />

              <q-btn
                icon="chevron_left"
                color="grey-8"
                round
                dense
                flat
                :disable="scope.isFirstPage"
                @click="scope.prevPage"
              />

              <q-btn
                icon="chevron_right"
                color="grey-8"
                round
                dense
                flat
                :disable="scope.isLastPage"
                @click="scope.nextPage"
              />

              <q-btn
                v-if="scope.pagesNumber > 2"
                icon="last_page"
                color="grey-8"
                round
                dense
                flat
                :disable="scope.isLastPage"
                @click="scope.lastPage"
              />
            </div>
          </template>
        </q-table>
      </div>

      <div v-else class="flex flex-center" style="height: 500px">
        <p>No utm created...</p>
      </div>

      <q-dialog
        v-model="showDialog"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card class="text-grey-8" style="width: 600px">
          <q-card-section class="bg-blue-1 text-grey-8 q-pb-md">
            <div class="text-h6">Add UTM</div>
          </q-card-section>

          <q-card-section class="q-gutter-md">
            <q-card-section>
              <q-input
                dense
                label="Destination"
                hide-bottom-space
                :no-error-icon="true"
              />

              <div class="row items-center q-gutter-xs q-pr-md">
                <span class="text-grey-8 text-weight-medium">Action:</span>
                <q-input dense hide-bottom-space :no-error-icon="true" />
              </div>

              <q-img
                :src="url"
                spinner-color="white"
                style="height: 140px; max-width: 150px"
              />

              <div class="row items-center q-gutter-xs q-pr-md">
                <span class="text-grey-8 text-weight-medium">Description</span>
                <q-input dense hide-bottom-space :no-error-icon="true" />
              </div>
            </q-card-section>
            <q-input
              dense
              label="UTM"
              hide-bottom-space
              :no-error-icon="true"
            />
            <q-input
              dense
              label="Tags"
              hide-bottom-space
              :no-error-icon="true"
            />
            <q-input
              dense
              label="Channels"
              hide-bottom-space
              :no-error-icon="true"
            />
            <q-input
              dense
              label="UTM"
              hide-bottom-space
              :no-error-icon="true"
            />
          </q-card-section>

          <q-card-actions align="right" class="q-pa-md">
            <q-btn
              rounded
              unelevated
              padding="sm"
              color="blue-10"
              icon="check"
              label="Saved"
              no-caps
              style="width: 150px"
            />
            <q-btn
              outline
              rounded
              unelevated
              padding="sm"
              color="blue-10"
              icon="close"
              label="Cancel"
              no-caps
              style="width: 150px"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import { QTable, useQuasar } from "quasar";

const columns = [
  { name: "selection", align: "left", field: "selection" },
  {
    name: "template",
    required: true,
    label: "Template",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  {
    name: "fat",
    align: "center",
    label: "Fat (g)",
    field: "fat",
    sortable: true,
  },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: "action", align: "left", field: "action" },
];

const rows = [
  {
    id: 1,
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
    selected: false,
  },
  {
    id: 2,
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
    selected: false,
  },
  {
    id: 3,
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
    selected: false,
  },
  {
    id: 4,
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
    selected: false,
  },
  {
    id: 5,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
    selected: false,
  },
  {
    id: 6,
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
    selected: false,
  },
  {
    id: 7,
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
    selected: false,
  },
  {
    id: 8,
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
    selected: false,
  },
  {
    id: 9,
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
    selected: false,
  },
  {
    id: 10,
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
    selected: false,
  },
  {
    id: 11,
    name: "Frozen111 Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
    selected: false,
  },
  {
    id: 12,
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
    selected: false,
  },
  {
    id: 13,
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
    selected: false,
  },
  {
    id: 14,
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
    selected: false,
  },
  {
    id: 15,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
    selected: false,
  },
  {
    id: 16,
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
    selected: false,
  },
  {
    id: 17,
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
    selected: false,
  },
  {
    id: 18,
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
    selected: false,
  },
  {
    id: 19,
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
    selected: false,
  },
  {
    id: 20,
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
    selected: false,
  },
  {
    id: 21,
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
    selected: false,
  },
  {
    id: 22,
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
    selected: false,
  },
  {
    id: 23,
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
    selected: false,
  },
  {
    id: 24,
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
    selected: false,
  },
  {
    id: 25,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
    selected: false,
  },
  {
    id: 26,
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
    selected: false,
  },
  {
    id: 27,
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
    selected: false,
  },
  {
    id: 28,
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
    selected: false,
  },
  {
    id: 29,
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
    selected: false,
  },
];

const pagination = {
  rowsPerPage: 7,
};

export default defineComponent({
  name: "UTMTemplatesPage",

  setup() {
    const qTableUTM = ref(QTable);
    const tableColumns = ref(columns);
    const tableRows = ref(rows);
    const tablePagination = ref(pagination);
    const headerCheckBoxState = ref(false);
    const headerCheckBoxPage = ref(0);
    const selectActiveStatus = ref("All");
    const showDialog = ref(false);
    const buttonToggleModel = ref("Templates");

    const getTitle = computed(() => {
      return `UTM: ${buttonToggleModel.value} (${tableRows.value.length})`;
    });

    const paginationOf = computed(() => {
      if (typeof qTableUTM.value.pagination !== "undefined") {
        const { computedRows, computedRowsNumber } = qTableUTM.value;
        const { page, rowsPerPage } = qTableUTM.value.pagination;

        if (page === Math.ceil(computedRowsNumber / rowsPerPage)) {
          return `${(page - 1) * rowsPerPage + 1} - ${
            (page - 1) * rowsPerPage + computedRows.length
          } of ${computedRowsNumber}`;
        } else {
          return `${(page - 1) * rowsPerPage + 1} - ${
            page * rowsPerPage
          } of ${computedRowsNumber}`;
        }
      } else {
        return `${0} - ${0} of ${0}`;
      }
    });

    const $q = useQuasar();

    const changeQTableArrowUpIcon = () => {
      $q.iconSet.table.arrowUp = "arrow_drop_down";
    };

    onMounted(async () => {
      changeQTableArrowUpIcon();
    });

    return {
      getTitle,
      qTableUTM,
      tableColumns,
      tableRows,
      tablePagination,
      headerCheckBoxState,
      headerCheckBoxPage,
      paginationOf,
      options: ["All", "Facebook", "Twitter", "Apple", "Oracle"],
      selectActiveStatus,
      showDialog,
      buttonToggleModel,
      changeQTableArrowUpIcon,

      onUpdateHeaderCheckBox(value, ev) {
        if (value) {
          headerCheckBoxPage.value = tablePagination.value.page;
        } else {
          headerCheckBoxPage.value = 0;
        }

        qTableUTM.value.computedRows.forEach((item) => (item.selected = value));
      },

      onUpdatePagination(newPagination) {
        tablePagination.value = newPagination;

        headerCheckBoxState.value =
          headerCheckBoxPage.value === newPagination.page;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.utm-table {
  .q-table__top,
  thead tr:first-child th {
    border-bottom: 0 !important;
  }

  tbody tr:nth-child(2n + 1) {
    background-color: $blue-1;
    height: 80px;
  }

  tbody tr:nth-child(2n + 2) {
    height: 80px;
  }
}
</style>
