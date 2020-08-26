<template>
    <div class="scroll-to-top">
        <v-slide-y-reverse-transition appear>
            <v-btn fab color="secondary" depressed large v-show="show" @click.stop="scroll">
                <v-icon size="24">mdi-arrow-up</v-icon>
            </v-btn>
        </v-slide-y-reverse-transition>
    </div>
</template>
<script>
export default {
    name: 'scroll-to-top',
    data(){
        return {
            show: false,
        }
    },
    methods: {
        scroll(){
            this.$vuetify.goTo(0, {duration: 1000, container: document.body, easing: 'easeOutQuint'});
        },
        toggleShow(){
            const el = document.body,
                scrollTop = el.scrollTop;
            
            if (scrollTop > 500){
                this.show = true;
            }else{
                this.show = false;
            }
            
        },
        addScrollListener(){
            const self = this;
            let el = document.body;

            el.addEventListener("scroll", ()=>{
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
}
.phone{
    .scroll-to-top{
        bottom: 80px;
        left: unset;
        right: 15px;
    }
}
</style>