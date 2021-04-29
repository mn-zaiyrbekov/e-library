<template>
  <v-app dark>
    <LeftBar
      :clipped="clipped"
      :drawer="drawer"
    />
    <v-app-bar
      class="blue darken-4"
      :clipped-left="clipped"
      fixed
      app
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-toolbar-title v-text="title" /> -->
      <Search/>
      <v-spacer />
      <div
        class="white--text py-1 px-4"
        v-if="!$auth.user"
      >
        <v-btn
          outlined
          color="blue accent-4"
          to="/register"
          title="Регистрация"
        >
          <v-icon class="mx-1 white--text">
            mdi-account-plus
          </v-icon>
        </v-btn>
        <v-btn
          outlined
          color="blue accent-4"
          to="/login"
          title="Войти в систему"
        >
          <v-icon class="mx-1 white--text">
            mdi-login
          </v-icon>
        </v-btn>
      </div>
      <div
        class="white--text py-1 px-4"
        v-else
      >
       {{$auth.user.name}}
      </div>

      <v-btn
        v-if="$auth.user"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <UserBar
      :right="right"
      :drawer="rightDrawer"
    />
  </v-app>
</template>

<script>
import LeftBar from '@/components/Globals/LeftBar'
import UserBar from '@/components/Globals/UserBar'
import Search from '@/components/Globals/Search'
export default {
  name: 'defaultLayouts',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      loggedIn: false,
      title: '',
    }
  },
  components: { LeftBar, UserBar, Search }
}
</script>
