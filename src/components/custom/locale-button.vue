<template>
        <v-menu offset-y :transition="transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn tile outlined :icon="icon" :block="block" :class="{'surface2': !text}" :large="large" text v-bind="attrs" v-on="on" >
                    <v-icon class="me-2" :size="20">mdi-earth</v-icon>
                    <span v-if="!icon">{{currentLang}}</span>
                    <v-icon v-if="dropdownIcon" right>mdi-menu-down</v-icon>
                </v-btn>
            </template>
            <v-list color="surface2">
                <v-list-item v-for="(lang, index) in langs" :key="index" @click="changeLocale(lang.value)" >
                <v-list-item-title>{{ lang.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
</template>

<script>
export default {
    props: {
        large: {
            type: Boolean,
            default: true,
        },
        text: {
            type: Boolean,
            default: false,
        },
        dropdownIcon: {
            type: Boolean,
            default: false,
        },
        color: {
            default: 'strong-text',
        },
        block: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: Boolean,
            default: false,
        },
        transition: {
            default: 'slide-y-transition' // 'slide-y-transition'
        }
    },
    data(){
        return {
            langs: [
                {value: 'ar', text: 'العربية'},
                {value: 'en', text: 'English'},
            ]
        }
    },
    computed: {
        currentLang(){
            let lang = this.langs.find(l=>l.value === this.current);
            return lang ? lang.text : '';
        },
        current(){
            return this.$i18n.locale;
        },
    },
    methods: {
        changeLocale(locale){
            if (locale !== this.current){
                this.$i18n.locale = locale;
    
                let rtl = locale === 'ar';
                this.$vuetify.rtl = rtl;
    
                this.setSavedLocale(locale);
            }
        },
        setSavedLocale(locale){
            window.localStorage.setItem('locale', locale);
        },
        checkLocale(locale){
            return this.langs.some(lang=>lang.value === locale);
        },
        getBrowserLocale(){
            if (window.navigator.languages && window.navigator.languages[0]){
                let locale = window.navigator.languages[0].split('-')[0];
                if (locale && this.checkLocale(locale)){
                    return locale;
                }
            }
            return null;
        },
    },
    created(){

        let savedLocale = window.localStorage.getItem('locale');
        if (savedLocale && this.checkLocale(savedLocale)){
            if (this.current !== savedLocale){
                this.changeLocale(savedLocale);
            }
        }else{
            // first time

            let browserLocale = this.getBrowserLocale(),
                locale = browserLocale ? browserLocale : process.env.VUE_APP_I18N_LOCALE;
            if (this.current !== locale){
                this.changeLocale(locale);
            }else{
                this.setSavedLocale(locale);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>