
<template>
  <div class="container">
    <div class="col">
        <div class="block">
          <h3>Box-Shadow CSS Generator</h3>
          <Slider title="Shift right" name="shiftRight" min="-50" max="50" :value="activeItem.shiftRight" :handleChangeData="handleChangeData" :idActive="activeItem.id" />
          <Slider title="Shift down" name="shiftDown" min="-50" max="50" :value="activeItem.shiftDown" :handleChangeData="handleChangeData"  :idActive="activeItem.id" />
          <Slider title="Spread" name="spread"  min="0" max="100" :value="activeItem.spread" :handleChangeData="handleChangeData"  :idActive="activeItem.id" />
          <Slider title="Blur" name="blur" min="0" max="100" :value="activeItem.blur" :handleChangeData="handleChangeData"  :idActive="activeItem.id"/>
          <Slider title="Opacity" name="opacity" min="0" max="100" :value="activeItem.opacity" :handleChangeData="handleChangeData"  :idActive="activeItem.id" />

          <Checkbox title="Inset" :handleChangeData="handleChangeData" :value="activeItem.inset" />
          <div class="pickerColor">
            <PickerColor :handleChange="handleChangePickerColor1" :color="activeItem.color"/>
          </div>

      </div>
      <div class="block">
        <div class="btn-addLayer" @click="addLayer">
          Add Layer
        </div>
        <Container @drop="onDrop">            
          <Draggable v-for="item in items" :key="item.id">
            <div class="draggable-item">
              <ItemLayer :item="item" :active="activeItem.id === item.id" :deleteLayer="deleteLayer" :changeActiveItem="changeActiveItem"/>
            </div>
          </Draggable>
        </Container>


      </div>

    </div>
    <div class="col">
      <div class="block block2">
        <div class="head">
          <h3>Review</h3>
          <div class="wrap-pickers">
            <PickerColor :handleChange="handleChangePickerColor2" :color="backgroundReview"/>
            <PickerColor :handleChange="handleChangePickerColor3" :color="backgroundItemReview"/>
          </div>

        </div>
        <div class="wrap-review" :style="{background: formatColor1}">
            <div class="item-review" :style="{'background': formatColor2, 'box-shadow': renderCss.slice(0, -1)}"></div>
        </div>
      </div>
      <div class="block" style="margin-top:20px">
        <h3>CSS code</h3>
        <span style="font-size:14px">
          box-shadow: {{renderCss}}
        </span>
      </div>
      <div class="block" style="margin-top:20px; padding-bottom: 32px">
        <h3>Template</h3>
        <div style="display: flex; gap: 20px">
            <div class="template-item item1" @click="handleClickTemplate(1)"></div>
            <div class="template-item item2" @click="handleClickTemplate(2)"></div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Slider from "./common/Slider.vue";
  import Checkbox from "./common/Checkbox.vue";
  import PickerColor from "./common/PickerColor.vue";
  import ItemLayer from "./common/ItemLayer.vue";
  import { Container, Draggable } from "vue-smooth-dnd";
  import { applyDrag } from "@/utils/helpers";
  import { templates } from "@/utils/templates.js";
  import { v4 as uuidv4 } from 'uuid';
  const renderItem = () => {
    return {
      id: uuidv4(),
      shiftRight: 0,
      shiftDown: 0,
      spread: 3,
      blur: 5,
      opacity: 20,
      inset: false,
      color:  { r: 0, g: 0, b: 0 }
    }
  }
  const initItem = renderItem();
  export default {
    components: {
      Slider,
      Checkbox,
      PickerColor,
      ItemLayer,
      Container,
      Draggable
    },
    data () {
      return {
          items: [
            initItem
          ],
          activeItem: initItem,
          backgroundReview: { r: 255, g: 255, b: 255 },
          backgroundItemReview: { r: 61, g: 157, b: 246 },
          boolen: false,
      }
    },
    computed: {
      formatColor1: function () {
          return `rgb(${this.backgroundReview.r}, ${this.backgroundReview.g}, ${this.backgroundReview.b})`;
      },
      formatColor2: function () {
          return `rgb(${this.backgroundItemReview.r}, ${this.backgroundItemReview.g}, ${this.backgroundItemReview.b})`;
      },
      renderCss: function(){
        let text ='';
        this.items.forEach((item, index) => {
          if(index > 0){
            text += ',';
          }
          text += item.shiftRight + "px" + ' ' + item.shiftDown  + "px" + ' ' + item.blur  + "px" + ' ' + item.spread  + "px" + ' ' + `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${(item.opacity * 0.01).toFixed(2)})` + `${item.inset?" inset":''}`;
    
          if(index == this.items.length - 1){
            text += ';';
          }
        })
        return text;
      }
    },
    methods: {  
      onDrop(dropResult) {
        this.items = applyDrag(this.items, dropResult);
      },
      handleChangeData(data) {
        if(!data)return;
        const index = this.items.findIndex((item) =>item.id == this.activeItem.id);
        const newData = [...this.items]
        newData[index] = {...newData[index], ...data}
        this.items = newData;
        this.activeItem = newData[index]
      },
      handleChangePickerColor1(value){
        this.handleChangeData({color: value.rgba});
      },
      handleChangePickerColor2(value){
        this.backgroundReview = value.rgba;
      },
      handleChangePickerColor3(value){
        this.backgroundItemReview = value.rgba;
      },
      handleClickTemplate(value){
        const t = value
        console.log(templates)
        if(t === 1){
          if(this.boolen){
            this.items = templates.custom2.slice().reverse();
          }
          else{
            this.items = templates.custom2;
          }
        }
        if(t === 2){
          if(this.boolen){
            this.items = templates.custom1.slice().reverse();
          }
          else{
            this.items = templates.custom1;
          }
        }
        this.boolen = !this.boolen;
      },
      addLayer() {
        this.items.push(renderItem());
      },
      changeActiveItem(item){
        this.activeItem = item; 
      },
      deleteLayer(id) {
        if(this.items.length <= 1){
          return;
        }else {
          if(id == this.activeItem.id){
            const data = this.items.filter((item) =>item.id != id);
            this.items = data;
            this.activeItem = data[0];
          }
        }
      
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 950px;
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    gap: 50px;
  }
  .col {
    flex: 1;
  }
  .block {
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15);
    outline: 0.1rem solid transparent;
    padding: 16px;
  }
  .block.block2 {
    padding: 0;
  }
  .block.block2 .head{
    padding: 16px 16px 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 2.4rem;
    margin: 0;
    margin-bottom: 20px;
  }
  .pickerColor {
    margin-top: 20px;
  }
  .btn-addLayer {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3.6rem;
    min-width: 3.6rem;
    margin: 0;
    padding: 0.7rem 1.6rem;
    background: linear-gradient(180deg,#fff,#f9fafb);
    border: 0.1rem solid #c4cdd5;
    box-shadow: 0 1px 0 0 rgba(22,29,37,.05);
    border-radius: 3px;
    line-height: 1;
    color: #212b36;
    text-align: center;
    cursor: pointer;
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
  .btn-addLayer:hover {
    background: linear-gradient(120deg,#fff,#f9fafb);
  }
  .wrap-review {
    width: 100%;
    padding: 40px;
  }
  .item-review {
    width: 200px;
    height: 200px;

  }
  .wrap-pickers {
    display: flex;
    gap: 10px;
  }
  .template-item {
    width: 50px;
    height: 50px;
    background: #79dff1;
  }
  .template-item:hover {
    border: 1px solid #79df;
  }
  .template-item.item1 {
      box-shadow: 5px 5px 0 0 #289fed, 10px 10px 0 0 #5fb8ff, 15px 15px 0 0 #a1d8ff, 20px 20px 0 0 #cae6ff, 25px 25px 0 0 #e1eeff, inset 5px 5px 1px 14px transparent;
  }
  .template-item.item2 {
    box-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px red, inset 5px 5px 1px 14px transparent;
  }

</style>