<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Имя слушателя</th>
          <th class="text-left">Email слушателя</th>
          <th class="text-left">Номер телефона слушателя</th>
          <th class="text-left">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user.fiolistener }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click="cardPrikazListener(user)"
                >
                  <v-icon>
                    mdi-microsoft-word
                  </v-icon>
                </v-btn>
              </template>
              <span>Сформировать документ</span>
            </v-tooltip>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { PrikazListener } from "@/utils/PrikazListener.js";
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
  methods: {
    cardPrikazListener(user) {
      return PrikazListener(user);
    },
  },
  mounted() {},
};
</script>
