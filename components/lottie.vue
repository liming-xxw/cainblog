<template>
  <div>
    <div  ref="lottieValue" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import lottie from "lottie-web";
import { onMounted, toRefs, ref } from "vue";

const lottieValue = ref();
const lottieDom = ref();

const props = defineProps({
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  url: {
    type: Object,
  },
  modelValue: {
    type: Object,
  },
  loop: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const { url, width, height, loop } = toRefs(props);

onMounted(() => {
  lottieDom.value = lottie.loadAnimation({
    container: lottieValue.value,
    renderer: "svg",
    loop: loop.value,
    autoplay: false,
    animationData: (url?.value as any).default,
  });
  emit("update:modelValue", lottieDom.value);
});
</script>
