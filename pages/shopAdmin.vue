<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <v-card rounded="lg" min-height="50" color="indigo accent-3">
          <h1 class="text-center">รายการรถยนต์</h1>
        </v-card> </v-col
      ><v-col v-for="(i, index) in list" :key="index" cols="3"
        ><v-card rounded="lg" color="grey lighten-1" @click= flat :to="`/carDetail/${i.carID }`" nuxt>
          <v-toolbar color="indigo darken-4" dark dense flat>
            <v-toolbar-title class="body-2"> {{ i.name }} </v-toolbar-title>
          </v-toolbar>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="i.imgUrl"
            align="center"
          >
          </v-img>
          <v-card-subtitle class="pb-0 text-right">
            {{ i.carID }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              <v-icon class="ic"> mdi-bitcoin </v-icon> ราคาเช่า
              {{ i.price }} บาท
            </div>

            <div>
              <v-icon class="ic"> mdi-car-seat </v-icon> {{ i.detail1 }}
            </div>
            <div>
              <v-icon class="ic"> mdi-treasure-chest </v-icon> {{ i.detail2 }}
            </div>
            <div><v-icon class="ic">mdi-car</v-icon> {{ i.status }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              @click="flat"
              to="/carDetail"
              nuxt
              color="yellow darken-2"
              rounded
              block
              dark
            >
              จองรถ
            </v-btn>
          </v-card-actions>
        </v-card></v-col
      ></v-row
    >
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return { list: [] }
  },

  mounted() {
    this.getdata()
  },
  methods: {
    getdata() {
      db.collection('cardata')
        .orderBy('carID', 'asc')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.list = data
          console.log(this.list)
        })
    },
  },
}
</script>

<style>
.ic {
  margin-right: 0.4rem;
}
</style>