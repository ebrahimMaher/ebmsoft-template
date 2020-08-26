<template>
    <div>
        <span v-for="(l, i) in text" class="letter" :key="i" :class="{'visible': visibleIndex >= i, 'active': visibleIndex === i && !stopped}">{{l}}</span>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
        duration: {
            type: Number,
            default: 2000,
        },
        delay: {
            type: Number,
            default: 500,
        },
        stopAfter: {
            type: Number,
            default: 2000,
        }
    },
    data(){
        return {
            visibleIndex: -1,
            started: false,
            stopped: false,
        }
    },
    methods: {
        resetAnimation(){
            this.visibleIndex = -1;
            this.started = false;
            this.stopped = false;
        },
        startAnimation(){
            let length = this.text.length,
                timeout = parseInt( this.duration ) / length;
                
            this.started = true;
            
            for (let index=0; index < length; index++){
                    let currentTimeout = Math.round( (index+1) * timeout );
                    
                window.setTimeout(()=>{
                    this.visibleIndex = index;

                    if (index === length-1){
                        this.$emit('done');
                        window.setTimeout(()=>{
                            this.stopped = true;
                        }, this.stopAfter);
                    }
                }, currentTimeout)
            }
        }
    },
    watch: {
        text(){
            this.resetAnimation();
            this.startAnimation();
        }
    },
    mounted(){
        let delay = parseInt( this.delay );
        if (delay){
            window.setTimeout(()=>{
                this.startAnimation();
            }, delay);
        }else{
            this.startAnimation();
        }
    }
}
</script>

<style lang="scss" scoped>
    .letter{
        opacity: 0;
        &.visible{
            opacity: 1;
        }
        &.active{
            &:after{
                content: "|";
                font-weight: 700;
                animation: fade 0.8s linear infinite;
            }
        }
        @keyframes fade {
            0%{
                opacity: 1;
            }
            50%{
                opacity: 0.1;
            }
            100%{
                opacity: 1;
            }
        }
    }
</style>