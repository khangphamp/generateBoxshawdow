<template>
  <div class="wrap-layer" :class="{active: active}" @click="handleChangeActiveItem">
    <div class="layer-head">
      <svg viewBox="0 0 20 20" class="layer-icon" focusable="false" aria-hidden="true"><path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14m6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6m0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14"></path></svg>
      <div class="layer-content">
          <span>{{item.shiftRight}}px</span>
          <span>{{item.shiftDown}}px</span>
          <span>{{item.blur}}px</span>
          <span>{{item.spread}}px</span>
          <span>rgba({{item.color.r}}, {{item.color.g}}, {{item.color.b}}, {{(item.opacity * 0.01).toFixed(2)}})</span>
      </div>  
    </div>

    <div class="layer-footer">
        <svg viewBox="0 0 20 20" class="layer-icon" focusable="false" aria-hidden="true"><path d="M17.086 2.912a3.126 3.126 0 0 0-4.414 0l-9.379 9.379a.998.998 0 0 0-.263.464l-1 4a1 1 0 0 0 1.212 1.213l4-1c.176-.044.337-.135.465-.263l9.38-9.379a3.125 3.125 0 0 0 0-4.414zm-1.414 3L15 6.584l-1.586-1.586.672-.672a1.125 1.125 0 0 1 1.586 0 1.123 1.123 0 0 1 0 1.586zM5.414 12.998L12 6.412l1.586 1.586L7 14.584l-1.586-1.586z" fill-rule="evenodd"></path></svg>
        <svg @click="handleDelete" viewBox="0 0 20 20" class="layer-icon delete" focusable="false" aria-hidden="true"><path d="M16 6H4a1 1 0 1 0 0 2h1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1a1 1 0 1 0 0-2zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z" fill-rule="evenodd"></path></svg>
    </div>

  </div>
</template>

<script>
  export default {
    props: ["item", "active", "deleteLayer", "changeActiveItem"],
    methods: {
      handleDelete(){
        this.deleteLayer(this.item.id);
      },
      handleChangeActiveItem(){
        this.changeActiveItem(this.item)
      }
    }
  }
</script>

<style scoped>
.layer-icon {
  width: 20px;
  height: 20px;
}
.layer-icon.delete {
  cursor: pointer;
}
.wrap-layer {
  cursor: all-scroll;
  padding: 10px;
  position: relative;
  transition: background .3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
.layer-head {
  display: flex;
  gap: 10px;
  align-items: center;
}
.layer-content {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
  gap: 5px;
}
.layer-footer {
  display: flex;
  align-items: center;
  gap: 8px;
}
.wrap-layer:hover {
  background-color: #f0f0f0;
}
.wrap-layer.active {
  color: #fff;
  background-color: #5c6ac4;
}
.wrap-layer.active .layer-icon {
  fill: #fff;
}
.wrap-layer.active:hover {
  background-color: #404da0
}
</style>