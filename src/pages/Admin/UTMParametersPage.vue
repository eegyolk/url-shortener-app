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
                to="/utm/templates"
                no-caps
              />
              <span class="text-weight-bold q-px-md">|</span>
              <q-btn
                unelevated
                padding="none"
                icon="list_alt"
                label="Parameters"
                class="text-blue-10"
                to="/utm/parameters"
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
              <q-input
                dense
                standout="no-shadow bg-grey-6"
                color="blue-10"
                style="width: 390px"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </div>

      <div class="row q-gutter-md q-px-lg text-grey-8">
        <div class="col col-sm">
          <q-list bordered class="rounded-borders bg-blue-1 q-pa-sm">
            <q-item-label class="text-weight-bold text-body1" header
              >campaign</q-item-label
            >

            <q-scroll-area style="height: 500px">
              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>

            <q-item-label header>
              <q-btn
                unelevated
                padding="none"
                label="+ add another campaign"
                no-caps
              />
            </q-item-label>
          </q-list>
        </div>

        <div class="col col-sm">
          <q-list bordered class="rounded-borders bg-blue-1 q-pa-sm">
            <q-item-label class="text-weight-bold text-body1" header
              >medium</q-item-label
            >

            <q-scroll-area style="height: 500px">
              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>

            <q-item-label header>
              <q-btn
                unelevated
                padding="none"
                label="+ add another medium"
                no-caps
              />
            </q-item-label>
          </q-list>
        </div>

        <div class="col col-sm">
          <q-list bordered class="rounded-borders bg-blue-1 q-pa-sm">
            <q-item-label class="text-weight-bold text-body1" header
              >source</q-item-label
            >

            <q-scroll-area style="height: 500px">
              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>

            <q-item-label header>
              <q-btn
                unelevated
                padding="none"
                label="+ add another source"
                no-caps
              />
            </q-item-label>
          </q-list>
        </div>

        <div class="col col-sm">
          <q-list bordered class="rounded-borders bg-blue-1 q-pa-sm">
            <q-item-label class="text-weight-bold text-body1" header
              >term</q-item-label
            >

            <q-scroll-area style="height: 500px">
              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>

            <q-item-label header>
              <q-btn
                unelevated
                padding="none"
                label="+ add another term"
                no-caps
              />
            </q-item-label>
          </q-list>
        </div>

        <div class="col col-sm">
          <q-list bordered class="rounded-borders bg-blue-1 q-pa-sm">
            <q-item-label class="text-weight-bold text-body1" header
              >content</q-item-label
            >

            <q-scroll-area style="height: 500px">
              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>

              <q-item class="full-width bg-white q-mb-sm rounded-borders">
                <q-item-section>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">Abc</span>
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="edit"
                    />
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                    />
                  </div>
                </q-item-section>
              </q-item>
            </q-scroll-area>

            <q-item-label header>
              <q-btn
                unelevated
                padding="none"
                label="+ add another content"
                no-caps
              />
            </q-item-label>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import { QTable, useQuasar } from "quasar";

const columns = [
  { name: "selection", align: "left", field: "selection" },
  {
    name: "utm",
    required: true,
    label: "Campaign",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
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
  ,
];

const pagination = {
  rowsPerPage: 7,
};

export default defineComponent({
  name: "UTMParametersPage",

  setup() {
    const qTableUTM = ref(QTable);
    const tableColumns = ref(columns);
    const tableRows = ref(rows);
    const tablePagination = ref(pagination);
    const headerCheckBoxState = ref(false);
    const headerCheckBoxPage = ref(0);
    const selectActiveStatus = ref("All");
    const showDialog = ref(false);
    const buttonToggleModel = ref("Parameters");

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
.q-list {
  width: 280px;
  min-width: 280px;
}

.utm-table {
  width: 285px;
  min-width: 285px;

  .q-table__top,
  thead tr:first-child th {
    border-bottom: 0 !important;
  }

  tbody tr:nth-child(2n + 1) {
    background-color: $blue-1;
    height: 50px;
  }

  tbody tr:nth-child(2n + 2) {
    height: 50px;
  }
}
</style>
