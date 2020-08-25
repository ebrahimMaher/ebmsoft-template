<template>
    <div class="scroll-to-top">
        <v-slide-y-reverse-transition appear>
            <v-btn fab color="secondary" outlined large v-show="show" @click.stop="scrollToTop">
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
        scrollToTop(){
            let scrollTo = 0; // scrollTop = top-offset-of-bottom-of-page = full height - screen height (visible area) 
            const el = document.body;
            this.$vuetify.goTo(scrollTo, {duration: 500, container: el});
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