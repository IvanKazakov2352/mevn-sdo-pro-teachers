<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Добавить группу
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Добавление группы</span>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-col cols="12">
              <v-text-field
                :rules="namegroupRules"
                v-model="namegroup"
                label="Название группы"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <h3>
                Внимание дата в полях по умолчанию сегодняшняя
              </h3>
            </v-col>
            <v-row class="mr-1 ml-1" justify="space-between">
              <v-col cols="12" sm="4">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="starttraining"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="starttraining"
                      :rules="starttrainingRules"
                      label="Начало обучения"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="starttraining" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(starttraining)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="4">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  :return-value.sync="endtraining"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="endtraining"
                      :rules="endtrainingRules"
                      label="Конец обучения"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="endtraining" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu1 = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu1.save(endtraining)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="4">
                <v-menu
                  ref="menu2"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :return-value.sync="dateexamen"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateexamen"
                      :rules="dateexamenRules"
                      label="Дата экзамена"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="dateexamen" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu2.save(dateexamen)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-col cols="12">
              <v-select
                v-model="trainingplan"
                :rules="trainingplanRules"
                :items="[
                  'Очная',
                  'Стажировка',
                  'Дистанционная',
                  'Индивидуальный учебный план',
                ]"
                label="Форма обучения"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="user"
                :items="allUsers"
                item-text="fiolistener"
                label="Выберите слушателей для группы"
                return-object
                multiple
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="course"
                :items="allModule"
                item-text="nameProfile"
                label="Выберите профиль обучения для группы"
                return-object
                multiple
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model.number="attemptExamen"
                label="Количество попыток сдачи экзаменационных тестов(Цифра)"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                v-model="messagelistener"
                :rules="messagelistenerRules"
                name="input-7-4"
                counter
                maxlength="1000"
                label="Сообщение слушателю(1000 символов максимум)"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-checkbox
                v-model="dostupExamen"
                label="Доступ до сдачи экзаменационных тестов"
              ></v-checkbox>
            </v-col>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Отмена</v-btn
          >
          <v-btn
            color="blue darken-1"
            :disabled="!valid"
            text
            @click="addGroups"
            >Создать</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <GroupsList />
    </v-col>
  </v-row>
</template>
<script>
const GroupsList = () => import("./GroupsList")
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Группы | СДО PRO",
  },
  data: () => ({
    dialog: false,
    menu: false,
    menu1: false,
    menu2: false,
    valid: false,
    messagelistener: null,
    namegroup: null,
    trainingplan: null,
    dostupExamen: false,
    attemptExamen: null,
    user: [],
    course: [],
    starttraining: new Date().toISOString().substr(0, 10),
    endtraining: new Date().toISOString().substr(0, 10),
    dateexamen: new Date().toISOString().substr(0, 10),
    namegroupRules: [(v) => !!v || "Введите название группы"],
    starttrainingRules: [(v) => !!v || "Укажите дату начала обучения"],
    endtrainingRules: [(v) => !!v || "Укажите дату конца обучения"],
    dateexamenRules: [(v) => !!v || "Укажите дату экзамена"],
    trainingplanRules: [(v) => !!v || "Выберите план обучения"],
    userRules: [(v) => !!v || "Выберите слушателей для группы"],
    messagelistenerRules: [
      (v) => !!v || "Введите сообщение для сушателей данной группы",
    ],
    emailRules: [
      (v) => !!v || "Введите Email слушателя",
      (v) => /.+@.+\..+/.test(v) || "Введите корректный Email",
    ],
  }),
  methods: {
    addGroups() {
      const group = {
        starttraining: this.starttraining,
        endtraining: this.endtraining,
        dateexamen: this.dateexamen,
        messagelistener: this.messagelistener,
        namegroup: this.namegroup,
        trainingplan: this.trainingplan,
        dostupExamen: this.dostupExamen,
        attemptExamen: this.attemptExamen,
        user: this.user,
        course: this.course,
      };
      this.$notify({
        title: "СДО PRO",
        message: `Группа обучения ${this.namegroup} успешно создана`,
        type: "success",
      });
      this.$store.dispatch("addedGroup", group);
      this.dialog = false;
    },
  },
  computed: {
    ...mapGetters(["allUsers", "allModule"]),
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchModules");
  },
  components: {
    GroupsList,
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
