<template>
  <div class="card">
    <div class="img-username d-flex align-items-center">
      <img
        width="120"
        height="120"
        class="rounded-circle me-2"
        :src="imgSrc"
        alt=""
        style="margin-left: -30px; margin-top: -30px"
      />
      <div class="username d-flex flex-column align-items-start">
        <h4 style="font-size: 16px">{{ fullName }}</h4>
        <p style="font-size: 14px">{{ instance }}</p>
      </div>
    </div>

    <p class="text-start p-3" style="font-size: 12px">“{{ comment }}”</p>
  </div>
</template>
  
  <script>
import full from "core-js/full";

export default {
  name: "CardTestimony",
  props: {
    imgSrc: {
      type: String,
      required: true,
      default: "@/assets/Home/signature-1.png",
    },
    fullName: {
      type: String,
      required: true,
      default: "Nama Pengunjung",
    },
    instance: {
      type: String,
      required: true,
      default: "Nama Instansi",
    },
    comment: {
      type: String,
      required: true,
      default:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  },
};
</script>
  
  <style  scoped>
.card {
  max-width: 480px;
  min-height: 200px;
  box-shadow: 0px 4px 16px 0px #4685853d;
  padding: 10px;
  border-radius: 10px;
  margin: 40px;
}
</style>
  