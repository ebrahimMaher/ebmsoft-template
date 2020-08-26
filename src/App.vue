<template>
    <v-app>
        <loading :loading="loading" />
        <navbar :light-theme="lightNavbar" />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import Navbar from './components/main/navbar'
import Loading from './components/default/loading'

import GlobalComputed from '@/helpers/global-computed'
import GlobalMethods from '@/helpers/global-methods'

export default {
    name: "App",

    components: {
        Navbar,
        Loading

    },
    data: () => ({
        //
    }),
    computed: {
        ...GlobalComputed
    },
    methods: {
        ...GlobalMethods
    },
    mounted(){
        window.setTimeout(()=>{
            this.$store.commit('SET_LOADING', false);
        }, 500);
    }
};
</script>

<style lang="scss">
    .fade-out-enter, .fade-out-leave{
        opacity: 1;
    }
    .fade-out-leave-to{
        opacity: 0;
    }
    .fade-out-enter-active, .fade-out-leave-active{
        transition: opacity 0.4s ease-in-out;
    }

    .dark-gradient{
        background-color: #050a19!important;
        background: linear-gradient(125deg, rgba(5,10,25,1) 45%, rgb(3, 16, 53) 100%)!important;
    }
    html, body{
        overflow: auto;
        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
        display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    @import url(https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;700&family=Poppins:wght@200;300;400;500;600&display=swap);
    .v-application, body, html, .v-main, .heading, .v-application .headline, .v-application .title, .v-application .v-card .v-card__title, .v-list .v-list-item__title{
        font-family: 'poppins', 'cairo'!important;
        &.v-application--is-rtl{
            div, h1, h2, h3, h4, p{
                letter-spacing: -.5px!important;
            }
        }
    }
    .v-application, body, html, .v-main{
        font-size: 16px!important;
    }
    .details-text{
        font-size: 14px!important;
    }
    .v-application{
        h1.headline{
            font-size: 2.2rem!important;
            line-height: 3rem!important;
        }
    }
    #app, #fullpage, .page, .fullpage-section, .v-application, body, html{
        height: 100vh;
    }
    .container {
        &:not(.container--fluid){
            @media(min-width: 1264px){
                max-width: 1185px;
            }

            @media(min-width: 1904px){
                max-width: 1290px;
            }
        }
    }

    
    /* buttons */
    .v-application{
        .v-btn{
            letter-spacing: 0px;
            text-transform: unset;
            &.v-size--large{
                &:not(.v-btn--round){
                    padding: 0 20px;
                }
            }
        }
        &.v-application--is-rtl{
            
            .v-btn{
                letter-spacing: 0!important;
            }
        }
    }

    /* transitions */
    .delay-500ms{
        transition-delay: 0.5s!important;
    }
    .delay-1s{
        transition-delay: 1s!important;
    }
    .delay-2s{
        transition-delay: 2s!important;
    }
    .delay-3s{
        transition-delay: 3s!important;
    }
    .delay-4s{
        transition-delay: 4s!important;
    }
    .fade-up-off{
        opacity: 0;
        transform: translateY(200px);
    }
    .fade-up-on{
        opacity: 1;
        transform: none;
        transition: opacity 1s ease-in, transform 0.5s ease-out;
    }
</style>