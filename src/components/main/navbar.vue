<i18n>
{
    "ar": {
        
    },
    "en": {
        
    }
}
</i18n>
<template>
    <v-app-bar :light="light" :height="scrolled ? this.navbarHeight : 130" class="navbar" :class="{'blank': !scrolled || !light, 'soft-shadow': light}" :flat="!light" fixed :color="light ? 'white' : 'dark'" :dark="!light">
        <v-container class="d-flex align-center">
            <div>
                <!-- logo -->
                <logo :light="light" width="140" />
            </div>
            <v-spacer />
            <v-slide-x-reverse-transition appear>
                <div class="d-flex">
                    <div class="d-flex align-center">
                        <v-btn :color="activeSection === link.name ? 'secondary' : undefined" :outlined="activeSection === link.name" v-for="link in links" :key="link.name" large tile :text="activeSection !== link.name" class="ms-2" @click="navigateToLink(link.ref)">{{$t(`links.${link.name}`)}}</v-btn>
                    </div>

                    <div class="d-flex align-center ms-8">
                        <locale-button />
                    </div>

                </div>
            </v-slide-x-reverse-transition>
        </v-container>
    </v-app-bar>
</template>

<script>
import LocaleButton from '../custom/locale-button'
import Logo from './logo'


import GlobalComputed from '@/helpers/global-computed'
import GlobalMethods from '@/helpers/global-methods'
import links from '@/helpers/links'


export default {
    name: 'navbar',
    components: {Logo, LocaleButton},
    props: {
        lightTheme: {
            type: Boolean,
            default: false,
        }
    },
    data(){
        return {
            scrolled: false,

            links,
        }
    },
    computed: {
        light(){
            return this.lightTheme && this.scrolled
        },
        activeSection(){
            return this.$store.state.activeSection;
        },
        ...GlobalComputed
    },
    methods: {
        handleScroll(e){
            this.scrolled = e.target.scrollTop > 0;
        },

        ...GlobalMethods
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
            transition: height 0.2s ease-out, background 0s ease-out!important;
        }
        &.soft-shadow{
            box-shadow: 0 1px 5px rgba(0,0,0, .1)!important;
        }
        &.dark-gradient{
            box-shadow: 0 1px 8px 0px rgba(0,0,0, .5)!important;
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