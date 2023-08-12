<template>
  <label class="form-control">
    <input type="checkbox" v-model="value" name="checkbox" @change="handleChange" />
    {{title}}
  </label>

</template>

<script>
  export default {
      props:["title", "handleChangeData", "value"],
      methods: {
        handleChange (event) {
          this.handleChangeData({inset: event.target.checked});
        }
      }
  }
</script>

<style scoped>
.form-control {
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  place-items: baseline;
  font-weight: 400;
  margin-top: 10px;
}

.form-control + .form-control {
  margin-top: 1em;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  margin: 0;

  font: inherit;
  color: #5c6ac4;
  width: 16px;
  height: 16px;
  border: 1px solid #5c6ac4;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 10px;
  height: 10px;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 4px 4px #5c6ac4;
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}


</style>