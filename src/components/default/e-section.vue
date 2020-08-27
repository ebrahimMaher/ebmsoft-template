<template>
    <div>
        <section :data-section="dataSection" class="e-section" :class="{'phone': phoneOnly, 'dark-gradient': !light, [background]: background}" :data-theme="light ? 'light' : 'dark'">
            <v-container>
                <div class="d-flex justify-center">
                    <div v-if="headline" class="section-title">
                        <h1 class="headline">
                            <span>{{headline}}</span>
                        </h1>

                        <div v-if="subtitle" class="subtitle">
                            {{subtitle}}
                        </div>
                        <hr class="primary primary--text" />
                    </div>
                    <slot v-else name="headline" />
                </div>
                <transition name="fade-up" appear>
                    <div class="content-wrapper">
                        <slot />
                    </div>
                </transition>
            </v-container>
        </section>
        <v-container>
            <v-divider v-if="divider" />
        </v-container>
    </div>
</template>

<script>

import GlobalComputed from '@/helpers/global-computed'
import GlobalMethods from '@/helpers/global-methods'

export default {
    props: {
        headline: {},
        subtitle: {},
        background: {},
        light: {type: Boolean, default: false},
        divider: {type: Boolean, default: false},
        dataSection: {},
    },
    data(){
        return {

        }
    },
    computed: {
        ...GlobalComputed
    },
    methods: {
        ...GlobalMethods,
    },

}
</script>

<style lang="scss" scoped>

    .e-section{
        position: relative;
        min-height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3.25rem 0!important;

        .section-title{
            text-align: center;
            .headline{
                margin-bottom: 0.5rem;
            }
            .subtitle{
                font-size: 16px;
                color: rgba(#919191, 0.75);
            }
            hr{
                width: 75px;
                margin: 2rem auto 5rem auto;
                height: 1px;
                @media(max-width: 960px){
                    margin: 2rem auto 3rem auto;
                }
            }
        }



        &.phone{
            min-height: 350px;
            padding: 1.5rem 0!important;
            
            .subtitle{
                font-size: 15px!important;
            }
        }
    }

</style>