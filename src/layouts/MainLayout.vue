<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-lg q-mb-md">
        <div class="text-h3">ToDo</div>
        <div class="text-subtitle1">{{todaysDate}}</div>
      </div>
      <q-img
       src="https://media.istockphoto.com/photos/glittery-pink-background-picture-id174959051?k=20&m=174959051&s=612x612&w=0&h=K5qj1lgv39X4OhIuwvJLVoKfgq42dCJU7TTF-7aX2J0="
       class="header-image absolute-top"/>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
    >

        <q-scroll-area style="height: calc(100% - 168px); margin-top: 168px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item to ="/" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                ToDo
              </q-item-section>
            </q-item>

            <q-item to="/reminders" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="!!" size="2.2em"/>
              </q-item-section>

              <q-item-section>
                Reminders
              </q-item-section>
            </q-item>

            <q-item to="/shopping" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="shop" />
              </q-item-section>

              <q-item-section>
                Shopping
              </q-item-section>
            </q-item>

            <q-item to="/help" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help"/>
              </q-item-section>

              <q-item-section>
                Help
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://i.pinimg.com/474x/59/a7/41/59a741ef0c5c8ff3a5e571b68f83ea2d--pink-sunset-pink-sky.jpg"
        style="height: 168px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://en.gravatar.com/userimage/158376451/b561e1246e3ba13c00cbf12bb61e001b.jpeg">
            </q-avatar>
            <div class="text-weight-bold">Faith Solomon</div>
            <div><a href="https://www.instagram.com/shay_yhee/">@shay_yhee</a></div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { date } from 'quasar'
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    todaysDate(){
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM YYYY')
    }
  }
})
</script>

<style lang="scss">
  .header-image{
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    //filter: grayscale(100%)
  }
</style>
