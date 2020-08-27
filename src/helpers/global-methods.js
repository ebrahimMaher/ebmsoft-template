export default {
    
    scrollToElement(el, duration=700){
        let scrollTop = el.offsetTop - this.navbarHeight;
        this.$vuetify.goTo(scrollTop, {duration: duration, container: document.documentElement, easing: 'easeInOutQuad'});
    },
    navigateToLink(ref){
        if (this.$route.name === 'home'){
            let element = document.querySelector(ref);
            if (element){
                this.scrollToElement(element, 1000);
            }
        }else{
            this.$router.push({name: 'home'});
        }
    },

    scrollToTop(){
        this.$vuetify.goTo(0, {duration: 1000, container: document.documentElement, easing: 'easeOutQuint'});
    },
}