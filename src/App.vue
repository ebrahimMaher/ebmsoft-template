<template>
    <v-app>
        <navbar />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import Navbar from './components/main/navbar'

export default {
    name: "App",

    components: {
        Navbar
    },

    data: () => ({
        //
    })
};
</script>

<style lang="scss">
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
    .v-application, body, html, .v-main{
        font-family: 'poppins', 'cairo'!important;
        font-size: 17px!important;
        &.v-application--is-rtl{
            div, h1, h2, h3, h4, p{
                letter-spacing: -.5px!important;
            }
        }   
    }
    #app, #fullpage, .page, .fullpage-section, .v-application, body, html{
        height: 100vh;
    }
    .container {
        @media(min-width: 1264px){
            max-width: 1185px;
        }

        @media(min-width: 1904px){
            max-width: 1290px;
        }
    }

    
    /* buttons */
    .v-application{
        .v-btn{
            letter-spacing: 1.1px;
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
</style>