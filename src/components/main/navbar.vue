<template>
    <v-app-bar :height="scrolled ? 95 : 130" class="dark-gradient navbar" :class="{'blank': !scrolled}" flat fixed :color="scrolled ? 'dark' : 'dark'" dark>
        <v-container class="d-flex align-center">
            <div>
                <!-- logo -->
                <v-img :src="'/img/logo-white.png'" width="150" height="auto" contain />
            </div>
            <v-spacer />
            <div class="d-flex align-center">
                <v-btn large tile text class="ms-2">Home</v-btn>
                <v-btn large tile text class="ms-2">Products</v-btn>
                <v-btn color="secondary lighten-1" large tile text class="ms-2">Team</v-btn>
                <v-btn large tile depressed outlined class="ms-4">Contact Us</v-btn>
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>

export default {
    name: 'navbar',
    data(){
        return {
            scrolled: false,
        }
    },
    methods: {
        handleScroll(e){
            this.scrolled = e.target.scrollTop > 0;
        }
    },
    mounted(){
        document.body.addEventListener('scroll', this.handleScroll);
        this.handleScroll({target: document.body});
    }
}
</script>

<style lang="scss">
    .v-application .navbar{
        &, .v-toolbar__content{
            transition: height 0.2s ease-out, background 0.2s ease-out!important;
        }
        .v-toolbar__content{
            border-bottom: 2px solid rgba(#000, 0.8);
        }
        &.blank{
            &, .v-toolbar__content{
                background: none!important;
                border: none!important;
                box-shadow: none!important;
            }
        }
        .v-btn{
            font-weight: normal!important;
            text-transform: capitalize;
            letter-spacing: 1.1px;

        }
    }
</style>