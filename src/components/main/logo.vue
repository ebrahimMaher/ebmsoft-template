<template>
    <div>
        <v-img class="logo" transition="none" :src="light ? 'img/logo.png' : '/img/logo-white.png'" :width="width" height="auto" contain @click="navigate" />
    </div>
</template>

<script>

import GlobalComputed from '@/helpers/global-computed'
import GlobalMethods from '@/helpers/global-methods'

export default {
    name: 'logo',
    props: {
        width: {
            default: 150,
        },
        light: {
            type: Boolean,
            default: false,
        }
    },

    data(){
        return {
            
        }
    },
    computed: {
        ...GlobalComputed,
    },
    methods: {
        navigate(){
            if (this.$route.name === 'home'){
                if (document.documentElement.scrollTop > 50){
                    this.scrollToTop();
                }
            }else{
                this.$router.push({name: 'home'});
            }
        },

        ...GlobalMethods,
    },
}
</script>
<style lang="scss" scoped>
    .logo{
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:active{
            // transform: scale(0.95);
            opacity: 0.7;
        }
    }
</style>