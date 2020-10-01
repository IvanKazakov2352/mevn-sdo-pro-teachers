<template>
  <v-expansion-panel>
    <v-expansion-panel-header
      >Таблица пользователей группы</v-expansion-panel-header
    >
    <v-expansion-panel-content>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Имя слушателя</th>
              <th class="text-left">Уникальный ID пользователя</th>
              <th class="text-left">Email слушателя</th>
              <th class="text-left">Номер телефона слушателя</th>
              <th class="text-left">Образование слушателя</th>
              <th class="text-left">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <td>{{ user.fiolistener }}</td>
              <td>{{ user._id }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.education }}</td>
              <td>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="openUserDialog(user._id)"
                    >
                      <v-icon>
                        mdi-account
                      </v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Вся информация по пользователю состоящего в группе</span
                  >
                </v-tooltip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-container>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>
                  Слушатель: {{ editUser.fiolistener }}
                </v-list-item-title>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Дата регистрации:
                  {{ new Date(editUser.dateregister).toLocaleDateString() }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Уникальный ID пользователя: {{ editUser._id }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Дата рождения:
                  {{ new Date(editUser.datebirth).toLocaleDateString() }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Дата получения паспорта:
                  {{ new Date(editUser.datereceiving).toLocaleDateString() }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Логин для входа в систему СДО PRO Студенты:
                  {{ editUser.login }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Пароль для входа в систему СДО PRO Студенты:
                  {{ editUser.password }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Номер телефона слушателя:
                  {{ editUser.phone }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Email слушателя:
                  {{ editUser.email }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Образование слушателя:
                  {{ editUser.education }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Должность слушателя:
                  {{ editUser.position }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Снилс слушателя: {{ editUser.snils }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Место рождения:
                  {{ editUser.birth }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Место регистрации:
                  {{ editUser.register }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Место выдачи паспорта:
                  {{ editUser.pasport }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
                <v-list-item-subtitle>
                  Кем выдан паспорт:
                  {{ editUser.vpasport }}
                </v-list-item-subtitle>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="close">
              Закрыть
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data: () => ({
    dialog: false,
    editUser: {},
  }),
  methods: {
    openUserDialog(id) {
      this.editUser = this.users.find((user) => user._id === id);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editUser = {};
      });
    },
  },
};
</script>
