<i18n>
{
    "ar": {
        "copyrights": "EBMSoft - جميع الحقوق محفوظة.",
        "description": "شركة متخصصة في تطوير البرمجيات والحلول التقنية، نعمل على برمجة وتطوير خدمات ومنصات توفر حلولاً للأعمال التجارية اﻹلكترونية في الشرق اﻷوسط والوطن العربي",
        "created-by": "موقع ebmsoft.net تم تصميمه وبرمجته بواسطة فريق عمل EBMSoft",
        "links": "التنقل داخل الموقع :",

        "contact": {
            "subheader": "يمكنك التواصل معنا عبر وسائل التواصل اﻵتية :",
            "email": "البريد اﻹلكتروني",
            "facebook": "صفحة فيسبوك",
            "website": "موقع الويب"
        }
    },
    "en": {
        "copyrights": "EBMSoft - All rights reserved.",
        "description": "Software Development and Information Technology Company that provides software solutions, products and platforms to e-commerce, and other e-business industries in the middle east.",
        "created-by": "this website was designed, coded and developed by EBMSoft Team.",
        "links": "Navigation in the website :",
        
        "contact": {
            "subheader": "contact us via:",
            "email": "Email Address",
            "facebook": "Facebook Page",
            "website": "Navigation :"
        }
    }
}
</i18n>
<template>
    <footer class="e-footer footer-bg strong-text--text">
        <v-container class="text--text py-10">
            <v-row>
                <v-col cols="4" class="pe-lg-12">
                    <logo width="160" />
                    <div class="footer-content mt-6 mt-lg-10">
                        {{$t('description')}}
                    </div>
                </v-col>
                <v-col cols="4" class="px-lg-12">
                    <v-subheader class="text--text"> {{$t('links')}} </v-subheader>
                    <v-list color="footer-bg" dark>
                        <v-list-item v-for="link in links" :key="link.name" large tile text class="ms-2" @click="navigateToLink(link.ref)">
                            <v-list-item-title class="strong-text--text">{{$t(`links.${link.name}`)}}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="4" class="ps-lg-12">
                    <v-subheader class="text--text"> {{$t('contact.subheader')}} </v-subheader>
                    <v-list color="footer-bg" dark class="text--text" two-line>
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
        </v-container>
        <v-spacer />
        <div class="footer-watermark flex-column dark">
            <div class="details-text text--text mb-3">{{$t('created-by')}}</div>
            <div>© 2020 {{$t('copyrights')}}</div>
        </div>
    </footer>
</template>

<script>

import GlobalComputed from '@/helpers/global-computed'
import GlobalMethods from '@/helpers/global-methods'
import Logo from './logo'
import links from '@/helpers/links'

export default {
    name: 'e-footer',
    props: {
        light: {
            type: Boolean,
            default: false,
        }
    },
    components: {Logo},

    data(){
        return {
            links,
            contactItems: [
                {name: 'email', icon: 'mdi-email', value: 'info@ebmsoft.net', color: 'white'},
                {name: 'facebook', icon: 'mdi-facebook', value: '@EBMSoft.net', color: 'blue', href: 'https://facebook.com/ebmsoft.net'},
                {name: 'website', icon: 'mdi-web', value: 'www.ebmsoft.net', color: 'text', href: 'https://ebmsoft.net'},
            ],
        }
    },
    computed: {
        ...GlobalComputed,
    },
    methods: {
        
        ...GlobalMethods,
    },
}
</script>
<style lang="scss" scoped>
    .e-footer{
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-content: stretch;
        flex-direction: column;


        .footer-watermark{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 2rem 0;
        }
        .container{
            line-height: 1.9rem;
        }
    }
</style>