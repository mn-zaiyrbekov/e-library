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
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div
        class="light-blue darken-3 white--text py-1 px-4"
      >
      {{$auth.user.userName}}
      </div>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt :homeRating="homeRating"/>
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
export default {
  name: 'defaultLayouts',
  data () {
    return {
      homeRating: 4,
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
  components: {
    LeftBar,
    UserBar
  }
}
</script>
