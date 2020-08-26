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
                "products": "مشاريعنا"
            }
        },
        "contact": {
            "subheader": "أو تواصل معنا عبر الوسائل اﻵتية:",
            "email": "البريد اﻹلكتروني",
            "facebook": "صفحة فيسبوك",
            "website": "موقع الويب"
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
        },
        "contact": {
            "subheader": "or contact us via:",
            "email": "Email Address",
            "facebook": "Facebook Page",
            "website": "Website"
        }
    }
}
</i18n>
<template>
    <div class="page page-sections">
        <section id="headerSection" class="header-section dark-gradient fullpage-section">
            <animated-background />
            <v-container v-if="!loading" class="fill-height pt-12">
                <v-slide-y-transition appear >
                <h1 class="strong-text--text">
                    <animate-text :duration="1500" :stop-after="0" :delay="500" :text="$t('sections.1.title')" />
                    <!-- <span class="secondary--text font-weight-medium">EBMSOFT</span> -->
                </h1>
                </v-slide-y-transition>
                <v-slide-x-transition appear>
                <h2 class="text--text mt-5">
                    <animate-text @done="showSection1Actions = true" :duration="3000" :delay="2000" :text="$t('sections.1.subtitle')"></animate-text>
                    <!-- <div>Information Technology & Electronic Business Company</div> -->
                </h2>
                </v-slide-x-transition>
                <div class="actions" :class="{'fade-up-off': !showSection1Actions, 'fade-up-on': showSection1Actions}">
                    <v-btn color="strong-text" tile large depressed outlined class="me-6">{{$t('sections.actions.products')}}</v-btn>
                    <v-btn color="secondary" tile large outlined>{{$t('sections.actions.contact')}}</v-btn>
                </div>
            </v-container>

            <div class="section-scroll-icon">
                <scroll-icon @click="scrollToSection(2)"/>
            </div>
        </section>
        <cols-section headline="مجالات عملنا" :cols="section2Columns" >

        </cols-section>

        <e-section id="productsSection" background="light" headline="مشاريعنا" subtitle="المنصات والخدمات اﻹلكترونية التابعة لشركتنا والتي نعمل على تطويرها وإدراتها" light>
            <v-row class="flex-wrap justify-center">
                <v-col v-for="(project, i) in projects" :key="i" cols="4">
                    <v-card v-ripple="false" class="card-shadow fill-height pa-3" :href="project.href ? project.href : ''" :target="project.href ? '_blank' : ''">
                        <v-img :src="project.image" cover height="300" />
                        <v-card-title class="mb-1">{{project.title}}</v-card-title>
                        <v-card-subtitle>{{project.subtitle}}</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </e-section>

        <e-section id="timelineSection" divider headline="الشريط الزمني لتاريخ الشركة" subtitle="شريط زمني يضم الأحداث والتواريخ الهامة في تاريخ شركة EBMSoft" light>
            <timeline :data="timeline" />
        </e-section>

        <e-section id="contactSection" headline="تواصل معنا" subtitle="اترك لنا رسالة وسوف نقوم بالرد عليك بأسرع وقت ممكن" light>
            <v-row class="justify-center px-lg-12">
                <v-col cols="6" class="ps-lg-12">
                    <contact-form />
                </v-col>
                <v-col cols="1" class="text-center">
                    <v-divider vertical></v-divider>
                </v-col>
                <v-col cols="3">
                    <v-subheader>
                        {{$t('contact.subheader')}}
                    </v-subheader>
                    <v-list two-line>
                        <v-list-item v-for="item in contactItems" :key="item.name" :target="item.href ? '_blank' : ''" :href="item.href ? item.href : (item.name === 'email' ? `mailto:${item.value}` : '')">
                            <v-list-item-icon>
                                <v-icon :color="item.color">{{item.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-subtitle class="mb-2">{{$t('contact.' + item.name)}}</v-list-item-subtitle>
                                <v-list-item-title>{{item.value}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </e-section>


        <!-- <e-section headline="فريق العمل" subtitle="فريق عمل EBMSoft في الوقت الحالي" light>
            <v-row>
                <v-col v-for="member in teamMembers" cols="4" :key="member.name">
                </v-col>
            </v-row>
        </e-section> -->

        <e-footer />

        <scroll-to-top />
    </div>
</template>

<script>
// @ is an alias to /src
import 'particles.js/particles';
import ScrollToTop from '@/components/custom/scroll-to-top'
import AnimateText from '@/components/custom/animate-text'
import ScrollIcon from '@/components/custom/scroll-icon'
import ContactForm from '@/components/custom/contact-form'
import AnimatedBackground from '@/components/custom/animated-background'
import ColsSection from '@/components/default/cols-section'
import ESection from '@/components/default/e-section'
import Timeline from '@/components/default/timeline'
import EFooter from '@/components/main/e-footer'


import GlobalComputed from '@/helpers/global-computed'
import GlobalMethods from '@/helpers/global-methods'

export default {
    name: "Home",
    components: {
        ScrollToTop,
        ContactForm,
        AnimateText,
        Timeline,
        ColsSection,
        ESection,
        ScrollIcon,
        EFooter,
        AnimatedBackground
    },
    data(){
        return {
            showSection1Actions: false,
            currentScrollTop: 0,
            contactItems: [
                {name: 'email', icon: 'mdi-email', value: 'info@ebmsoft.net', color: 'primary'},
                {name: 'facebook', icon: 'mdi-facebook', value: '@EBMSoft.net', color: 'blue darken-1', href: 'https://facebook.com/ebmsoft.net'},
                {name: 'website', icon: 'mdi-web', value: 'www.ebmsoft.net', color: 'grey', href: 'https://ebmsoft.net'},
            ],
            projects: [
                {
                    image: 'https://www.pricecheck.co.za/blog/wp-content/uploads/2017/07/WhatsApp_Logo_5.png',
                    title: "Whatsapp Platform",
                    subtitle: "Whatsapp is chating and social media platform",
                    href: "https://web.whatsapp.com"
                },
                {
                    image: 'https://www.pricecheck.co.za/blog/wp-content/uploads/2017/07/WhatsApp_Logo_5.png',
                    title: "Whatsapp Platform",
                    subtitle: "Whatsapp is chating and social media platform"
                },
                {
                    image: 'https://www.pricecheck.co.za/blog/wp-content/uploads/2017/07/WhatsApp_Logo_5.png',
                    title: "Whatsapp Platform",
                    subtitle: "Whatsapp is chating and social media platform, Whatsapp is chating and social media platform, Whatsapp is chating and social media platform"
                },
            ],
            timeline: [
                {date: 2019},
                {date: 2019},
                {date: 2019},
                {date: 2019},
            ],
            teamMembers: [
                {name: 'Ebrahim Maher', job: 'Founder, CEO & Developer', avatar: '/img/team/ebrahim-maher.jpg', description: 'Founder and CEO of EBMSoft company '}
            ],

            section2Columns: [
                {
                    headline: 'العنوان اﻷول',
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها',
                    color: 'success',
                    icon: 'mdi-cart'
                },
                {
                    headline: 'العنوان الثاني',
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها',
                    color: 'blue',
                    icon: 'mdi-cube-send'
                },
                {
                    headline: 'العنوان الثالث',
                    description: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها',
                    color: 'deep-orange',
                    icon: 'mdi-cash-multiple'
                }
            ]
        }
    },
    computed: {
        
        ...GlobalComputed
    },
    methods: {
        scrollToSection(n){
            let i = n-1,
                element = document.querySelectorAll('.page-sections section')[i];
            if (element){
                this.scrollToElement(element);
            }
        },
        scrollObserver(){
            document.body.addEventListener('scroll', ()=>{
                this.currentScrollTop = document.body.scrollTop;
            })
        },
        handleScrollChange(scrollTop){
            const sections = document.querySelectorAll('.page-sections section');
            sections.forEach(section => {
                let offsetTop = section.offsetTop - this.navbarHeight, // decrease navbarHeight
                    offsetBottom = offsetTop + section.offsetHeight;

                if (scrollTop >= offsetTop && scrollTop < offsetBottom){
                    // section is visible...
                    if (section.getAttribute('data-theme') === 'light'){
                        
                        if (!this.lightNavbar){
                            this.$store.commit('SET_LIGHT_NAVBAR', true);
                        }
                    }else{
                        if (this.lightNavbar){
                            this.$store.commit('SET_LIGHT_NAVBAR', false);
                        }
                    }
                }
            })

        },

        ...GlobalMethods
    },
    watch: {
        currentScrollTop(top){
            this.handleScrollChange(top);
        }
    },

    mounted(){
        this.scrollObserver();
        
    }
};
</script>
<style lang="scss" scoped>
    section{

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
            z-index: 2;
            position: absolute;
            bottom: 8%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>