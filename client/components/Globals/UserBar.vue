<template>
  <v-navigation-drawer
    class="blue darken-1"
    v-model="rightOpenInState"
    :right="right"
    temporary
    fixed
  >
    <v-list dark>
      <v-list-item-group>
        <v-list-item
          link
          to="/profile"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Мой профиль</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          @click="$auth.logout()"
        >
          <v-list-item-icon>
            <v-icon>mdi-exit-run</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          to="/forum"
        >
          <v-list-item-icon>
            <v-icon>mdi-forum</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Форум</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'UserBar',
  props: {
    right: {type: Boolean, default: false},
    drawer: {type: Boolean, default: false}
  },
  data() {
    return {
      rightOpenInState: this.drawer,
      rightState: this.right
    }
  },
  watch: {
    drawer() {
      this.rightOpenInState = !this.rightOpenInState
    },
    right() {
      this.rightState = !rightState
    }
  }
}
</script>

<style>

</style>
