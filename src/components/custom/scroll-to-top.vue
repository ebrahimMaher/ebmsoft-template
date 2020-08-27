<template>
    <div class="scroll-to-top" :class="{'phone': phoneOnly}">
        <v-slide-y-reverse-transition appear>
            <v-btn fab color="secondary" depressed :large="pcOnly" v-show="show" @click.stop="scroll">
                <v-icon size="24">mdi-arrow-up</v-icon>
            </v-btn>
        </v-slide-y-reverse-transition>
    </div>
</template>
<script>

import GlobalComputed from '@/helpers/global-computed'
// import GlobalMethods from '@/helpers/global-methods'

export default {
    name: 'scroll-to-top',
    data(){
        return {
            show: false,
        }
    },
    computed: {
        ...GlobalComputed,
    },
    methods: {
        scroll(){
            this.$vuetify.goTo(0, {duration: 1000, container: document.documentElement, easing: 'easeOutQuint'});
        },
        toggleShow(){
            const el = document.documentElement,
                scrollTop = el.scrollTop;
            
            if (scrollTop > 500){
                this.show = true;
            }else{
                this.show = false;
            }
            
        },
        addScrollListener(){
            const self = this;
            window.addEventListener("scroll", ()=>{
                self.toggleShow();
            });
        }
    },
    mounted(){
        this.addScrollListener();
    }
}
</script>
<style lang="scss" scoped>
.scroll-to-top{
    position: fixed;
    bottom: 4%;
    right: 60px;
    z-index: 4;

    &.phone{
        right: 30px;
    }
}
</style>