export default {
    loading(){
        return this.$store.state.loading;
    },
    pcOnly(){
        return this.$vuetify.breakpoint.mdAndUp;
    },
    isRtl(){
        return this.$vuetify.rtl;
    },
    phoneOnly(){
        return !this.pcOnly;
    },
    navbarHeight(){
        return 90;
    },
    lightNavbar(){
        return this.$store.state.lightNavbar;
    },
}