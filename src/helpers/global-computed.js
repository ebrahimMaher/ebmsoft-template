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
        return this.pcOnly ? 90 : 70;
    },
    lightNavbar(){
        return this.$store.state.lightNavbar;
    },
}