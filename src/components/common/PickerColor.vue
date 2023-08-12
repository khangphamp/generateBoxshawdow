<template>
  <div>
      <div v-click-outside="hidePicker"  class="btn-picker" v-on:click="isShowPicker = true">
        <div v-bind:style="{ background: formatColor}"></div>
        <div class="picker" v-if="isShowPicker">
          <Sketch  v-model="color" @input="updateValue"/>
        </div>
      </div> 
  </div>
</template>

<script>
  import clickOutside from "@/utils/clickOutside.js"
  import { Sketch } from 'vue-color';

  export default {
    props:["handleChange", "color"],
    components: {
     Sketch
    },
    directives: {
      clickOutside
    },

    data () {
      return {
        isShowPicker: false,
      }
    },
    methods:{
      hidePicker: function () { 
        this.isShowPicker = false
      },
      updateValue: function(value) {
        this.handleChange(value);
        this.color = value.rgba;
      }
    },
    computed: {
      formatColor: function () {
          return `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
      }
    }
  }
</script>

<style scoped>
  .btn-picker {
    border: 1px solid #dfe3e8;
    padding: 3px;
    height: 32px;
    width: 48px;
    border-radius: 3px;
  }
  .btn-picker > div {
    display: block;
    cursor: pointer;
    width: 40px;
    height: 24px;
    border-radius: 2px
  }
  .picker {
    position: absolute;
    z-index: 10000;
  }
</style>