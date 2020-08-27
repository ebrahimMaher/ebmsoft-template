<template>
    <e-section :headline="headline" :subtitle="subtitle" :headline-icon="headlineIcon" :style="style" light :background="background" :divider="!!divider">
        <v-row>
            <v-col class="section-col" data-aos="fade-up" :data-aos-duration="600 + 100 * (i+1) " :data-aos-delay="200*i" v-for="(column, i) in cols" :key="i" :cols="colsWidth" >
                <div v-if="column.icon" class="col-icon mb-6" :class="`${column.color} lighten-5`">
                    <v-icon :color="column.color + ' darken-1'" x-large >{{column.icon}}</v-icon>
                </div>
                <slot v-else :name="'icon' + i"></slot>

                <div class="col-content">
                    <div>
                        <h3 v-if="column.headline" class="col-headline headline text--darken-2" :class="`${column.color}--text`">{{column.headline}}</h3>
                        <slot v-else :name="'headline' + i"></slot>
                    </div>
                    <div>
                        <p v-if="column.description" class="col-description mb-0 grey--text mt-3">{{column.description}}</p>
                        <slot v-else :name="'description' + i"></slot>
                    </div>
                </div>
            </v-col>
        </v-row>
    </e-section>
</template>

<script>

import GlobalComputed from '@/helpers/global-computed'
import GlobalMethods from '@/helpers/global-methods'
import ESection from './e-section'


export default {
    props: ['headline', 'subtitle', 'headlineIcon', 'cols', 'background', 'divider'],
    data(){
        return {

        }
    },
    components: {ESection},
    computed: {
        ...GlobalComputed,
        style(){
            let style = '';
            if (this.background){
                style += 'background: ' + this.background;
            }
            return style;
        },
        colsWidth(){
            if (this.pcOnly){
                return 12 / this.cols.length;
            }else{
                return 12;
            }
        }
    },
    methods: {
        ...GlobalMethods,
    },

}
</script>

<style lang="scss" scoped>

    section{
        .section-col{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;

            .col-headline{
                font-size: 1.5rem!important;
                line-height: 2rem!important;
            }
            .col-description{
                font-size: 0.95rem!important;
                line-height: 1.8rem!important;
            }
            .col-headline, .col-description{
                text-align: center;
                justify-content: center;
            }

            .col-icon{
                border-radius: 50%;
                overflow: hidden;
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;

                background-color: #eee;
            }
        }
    }

    @media(max-width: 960px){
        section{

            .col-headline{
                font-size: 1.3rem!important;
                line-height: 1.7rem!important;
            }
        }
    }
</style>