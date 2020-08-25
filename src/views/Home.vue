<i18n>
{
    "ar": {

        "sections": {
            "1": {
                "title": "حلول تقنية للأعمال التجارية اﻹلكترونية",
                "subtitle": "نعمل على برمجة وتطوير خدمات ومنصات توفر حلولاً للأعمال التجارية اﻹلكترونية في الشرق اﻷوسط والوطن العربي"
            },
            "actions": {
                "contact": "تواصل معنا",
                "products": "منتجاتنا"
            }
        }
    },
    "en": {
        "sections": {
            "1": {
                "title": "E-Business Software Solutions",
                "subtitle": "We are providing software solutions, products and platforms to e-commerce, and other e-business industries in the middle east."
            },
            "actions": {
                "contact": "Contact Us",
                "products": "Our Products"
            }
        }
    }
}
</i18n>
<template>
    <div class="page page-sections">
        <section class="header-section dark-gradient fullpage-section">
            <div id="particles-js"></div>
            <v-container class="fill-height pt-12">
                <v-scroll-y-transition appear >
                <h1 class="strong-text--text">
                    {{$t('sections.1.title')}}
                    <!-- <span class="secondary--text font-weight-medium">EBMSOFT</span> -->
                </h1>
                </v-scroll-y-transition>
                <v-scroll-x-transition appear>
                <h2 class="text--text mt-3">
                    <div>{{$t('sections.1.subtitle')}}</div>
                    <!-- <div>Information Technology & Electronic Business Company</div> -->
                </h2>
                </v-scroll-x-transition>
                <v-scroll-y-reverse-transition appear >
                <div class="actions">
                    <v-btn color="strong-text" tile large depressed outlined class="me-6">{{$t('sections.actions.products')}}</v-btn>
                    <v-btn color="secondary" tile large outlined>{{$t('sections.actions.contact')}}</v-btn>
                </div>
                </v-scroll-y-reverse-transition>
            </v-container>

            <div class="section-scroll-icon">
                <scroll-icon @click="scrollToSection(2)"/>
            </div>
        </section>
        <section class="header-section while fullpage-section">
            test
        </section>
        <section class="header-section primary fullpage-section">
            test
        </section>

        <scroll-to-top />
    </div>
</template>

<script>
// @ is an alias to /src
import 'particles.js/particles';
import ScrollToTop from '@/components/custom/scroll-to-top'
import ScrollIcon from '@/components/custom/scroll-icon'
export default {
    name: "Home",
    components: {
        ScrollToTop,
        ScrollIcon
    },
    methods: {
        scrollToSection(n){
            let i = n-1,
                element = document.querySelectorAll('.page-sections section')[i];
            if (element){
                this.scrollToElement(element, 1000);
            }
        },
        scrollToElement(el, duration=700){
            this.$vuetify.goTo(el, {duration: duration, container: document.body});
        }
    },

    mounted(){
        window.particlesJS("particles-js", {"particles":{"number":{"value":110,"density":{"enable":false,"value_area":1000}},"color":{"value":"#015486"},"shape":{"type":"circle","stroke":{"width":0,"color":"#015486"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":4,"opacity_min":0.2,"sync":false}},"size":{"value":3,"random":false ,"anim":{"enable":true,"speed":5,"size_min":2,"sync":false}},"line_linked":{"enable":true,"distance":210,"color":"#015486","opacity":0.4,"width":1},"move":{"enable":true,"speed":5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":true,"attract":{"enable":true,"rotateX":1000,"rotateY":1500}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":2},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
        
    }
};
</script>
<style lang="scss" scoped>
    section{
        position: relative;
        #particles-js{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }
        .container{
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;

            &, *{
                z-index: 1;
            }
        }
        &.header-section{
            color: white;
        }
        h1{
            font-size: 4rem;
            font-weight: 300;
        }
        h2{
            font-size: 2.75rem;
            word-break: break-word!important;
            font-weight: 200;
        }
        .actions{
            margin-top: 4rem;
            .v-btn{
                min-width: 130px;
                min-height: 45px;
            }
        }
        .section-scroll-icon{
            position: absolute;
            bottom: 8%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>