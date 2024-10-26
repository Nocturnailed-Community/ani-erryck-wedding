<template>
  <InvitationHeader/>
  <!-- <InvitationCouple/>
  <InvitationEvent/>
  <InvitationGallery/>
  <InvitationGift/>
  <InvitationWish/>
  <InvitationFooter/> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InvitationHeader from "~/components/Content/InvitationHeader.vue";
import InvitationCouple from "~/components/Content/InvitationCouple.vue";
import InvitationEvent from "~/components/Content/InvitationEvent.vue";
import InvitationGallery from "~/components/Content/InvitationGallery.vue";
import InvitationGift from "~/components/Content/InvitationGift.vue";
import InvitationWish from "~/components/Content/InvitationWish.vue";
import InvitationFooter from "~/components/Content/InvitationFooter.vue";

export default defineComponent({
  components: {
    InvitationHeader,
    InvitationCouple,
    InvitationEvent,
    InvitationGallery,
    InvitationGift,
    InvitationWish,
    InvitationFooter,
  },
  setup() {},
});
</script>

<style scoped>
</style>
