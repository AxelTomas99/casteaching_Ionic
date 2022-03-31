<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>User</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-avatar v-if="this.user && this.user.profile_photo_path == null">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
      </ion-avatar>
      <ion-avatar v-else>
        <img src="{{ this.user && this.user.profile_photo_path }}">
      </ion-avatar>
      <div>
        <h1>Information</h1>
        Name: {{ this.user && this.user.name }}
        <br>
        Email: {{ this.user && this.user.email }}
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonButtons,
  IonContent, IonHeader,
  IonMenuButton,
  IonPage, IonTitle, IonToolbar,
} from "@ionic/vue";
import store from "../store";

export default {
  name: 'User',
  components: {
    IonMenuButton,
    IonContent,
    IonPage,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader
  },
  data() {
    return {
      user: {}
    }
  },
  async mounted() {
    this.user = await store.get('user')
  }
}
</script>