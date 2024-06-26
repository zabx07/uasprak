<template>
    <q-layout view="hHh lpR fFf">
      <q-header>
        <q-toolbar>
          <q-toolbar-title>
            Weather App
          </q-toolbar-title>
          <q-btn flat round icon="menu" @click="toggleLeftDrawer" />
        </q-toolbar>
      </q-header>
  
      <q-drawer v-model="leftDrawerOpen" side="left" overlay>
        <q-list>
          <q-item to="/">
            <q-item-section>
              Home
            </q-item-section>
          </q-item>
          <q-item to="/tugas1">
            <q-item-section>
              Tugas 1
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  export default {
    data () {
      return {
        leftDrawerOpen: false
      }
    },
    methods: {
      toggleLeftDrawer() {
        this.leftDrawerOpen = !this.leftDrawerOpen
      }
    }
  }
  </script>
  