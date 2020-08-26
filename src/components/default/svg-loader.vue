<template>
    <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
        <circle :fill="circleColor" stroke="none" cx="23" cy="50" r="8">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"/>
        </circle>
        <circle :fill="circleColor" stroke="none" cx="50" cy="50" r="8">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.2"/>       
        </circle>
        <circle :fill="circleColor" stroke="none" cx="77" cy="50" r="8">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.3"/>     
        </circle>
    </svg>

</template>

<script>
let color = '#2789dd';

export default {
    data(){
        return {
            defaultColor: '#ccc',
            circleColor: '#2789dd',
            interval: null,
        }
    },
    computed: {
        
    },
    mounted(){
        let interval = window.setInterval(()=>{
            if (this.circleColor === this.defaultColor){
                this.circleColor = color;
            }else{
                this.circleColor = this.defaultColor;
            }
        }, 2000);
        this.interval = interval;
    },
    beforeDestroy(){
        if (this.interval){
            window.clearInterval(this.interval);
        }
    }
}
</script>

<style>
    svg{
        width: 100px;
        height: 100px;
        margin: 20px;
        display:inline-block;
    }
    circle{
        transition: 0.75s ease fill!important;
    }
</style>