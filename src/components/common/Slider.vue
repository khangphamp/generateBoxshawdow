<template>
   <div class="slider">
      <span>{{title}}</span>
      <input class="slider-input" ref="myInput" type="range" v-bind:min="min" v-bind:max="max" v-bind:value="value" v-on:input="handleInput">
  </div>    
</template>

<script>
import getBackgroundSize from "@/utils/getBackgroundSize.js"
  export default {
    props:["title", "min", "max", "value", "name", "handleChangeData", "idActive"],
    mounted(){
      const refInput = this.$refs.myInput;
      refInput.style.setProperty("--background-size", `${getBackgroundSize(refInput)}%`);
    },
    watch: {
      idActive(newValue, oldValue) {
         const refInput = this.$refs.myInput;
          refInput.style.setProperty("--background-size", `${getBackgroundSize({value: this.value, min: this.min, max: this.max})}%`);
      }
    },
    methods: {
    handleInput(event) {
      const input = event.target;
      input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
      this.handleChangeData({[this.name]: input.value});
    }
  }

  }
</script>

<style scoped>
   .slider span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
  }
  .slider-input {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
 .slider-input::-webkit-slider-runnable-track,
 .slider-input::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  .slider-input:focus {
    outline: none;
  }
 .slider-input::-webkit-slider-runnable-track {
    height: 4px;
    background: linear-gradient(to right, #5c6ac4, #5c6ac4), #D7D7D7;
    background-size: var(--background-size, 0%) 100%;
    background-repeat: no-repeat;
    border-radius: 5px;
  }
  .slider-input::-webkit-slider-thumb {
    cursor: -webkit-grab;
      width: 2.4rem;
      height: 2.4rem;
      border: .1rem solid var(--p-interactive,#f9fafb);
      border-radius: 50%;
      background: #f9fafb;
      box-shadow: 0 0 0 .1rem rgba(0,0,0,.2),0 1px 0 0 rgba(22,29,37,.05);
      -webkit-appearance: none;
      appearance: none;
      -webkit-transition-property: border-color,box-shadow,transform;
      transition-property: border-color,box-shadow,transform;
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.64,0,.35,1);
      margin-top: calc(-1*(var(--p-range-slider-thumb-size-base, 2.4rem) - .4rem)/2)
  }
  .slider-input:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 .1rem #5c6ac4;
      border-color: #5c6ac4;
  }

</style>