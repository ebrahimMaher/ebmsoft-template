<template>
    <div class="scroll-icon" @click="$emit('click')">
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.scroll-icon,
.scroll-icon:before{
  position: absolute;
  left: 50%
}

.scroll-icon{
  width: 37px;
  height: 65px;
  margin-left: -20px;
  top: 50%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
  opacity: 0.85;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
}

.scroll-icon:before{
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll
}

@keyframes scroll{
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translateY(46px)
  }

}
</style>