<template>
    <v-dialog class="loading-dialog fill-height" v-model="loading" persistent no-click-animation transition="fade-out" fullscreen fluid>
        <v-container fluid fill-height class="dark d-flex justify-center align-center flex-column loading-overlay" :style="background" :class="{'bg-img': !!background}">
            <v-fade-transition appear>
                <div class="d-flex align-center flex-column justify-center">
                    <v-progress-circular transition="fade-transition" indeterminate width="3" size="75" color="secondary"></v-progress-circular>
                </div>
                <!-- <div class="logo-wrapper">
                    <logo :width="200" :link="false" />
                </div>
                <div class="mx-auto">
                    <svg-loader />
                </div> -->
            </v-fade-transition>
        </v-container>
    </v-dialog>    
</template>
<script>
// import Logo from '../main/logo'
// import SvgLoader from './svg-loader'
export default {
    props: ['loading', 'background', 'color', 'noSpinner'],
    // components: {Logo, SvgLoader},
    data(){
        return {
            dark: false,
        }
    },
    created(){
        
    }
}
</script>
<style lang="scss" scoped>
    .loading-dialog{
        z-index: 100;
    }
    .loading-overlay{
        &.bg-img{
            background-size: cover;
            background-position: bottom center;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-blend-mode: overlay;
        }
        z-index: 100;
    }
    .logo-wrapper{
        // height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .logo{
            max-width: 200px;
            min-width: 150px;
            height: auto;
        }
    }
</style>