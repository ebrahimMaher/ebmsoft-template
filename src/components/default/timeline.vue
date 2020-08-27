<template>
    <v-timeline :align-top="phoneOnly" :dense="phoneOnly" class="e-timeline" :class="{'phone': phoneOnly}">
        <v-timeline-item v-for="(item, i) in data" :key="i" :color="color" small>
            <template v-if="pcOnly" v-slot:opposite>
                <span :class="`headline font-weight-bold ${color}--text`" v-text="item.date"></span>
            </template>
            <v-card flat class="py-4">
                <div v-if="phoneOnly" class="details-text grey--text">{{item.date}}</div>
                <h2 :class="`headline font-weight-light mb-4 ${color}--text`">{{item.title ? item.title : 'Lorem ipsum'}}</h2>
                <div>
                    <span v-if="item.content">{{item.content}}</span>
                    <span v-else>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</span>
                </div>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>

<script>

import GlobalComputed from '@/helpers/global-computed'
import GlobalMethods from '@/helpers/global-methods'

export default {
    props: {
        data: {},
        color: {default: 'primary'}
    },
    data(){
        return {

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

<style lang="scss">
    .e-timeline{
        .v-timeline-item__body .v-card{
            background: rgba(#919191, 0.05)!important;
            box-shadow: none!important;
            transition: all 0.2s ease;
            padding: 5px 25px;

            &:hover{
                transform: translateY(-5px);
                background: rgba(#919191, 0.1)!important;
            }
        }
        .v-timeline-item__dot--small{
            box-shadow: none!important;
            width: 28px;
            height: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px;
            
            // border: 1px solid!important;
            // border-color: rgba(#919191, 0.1)!important;

            .v-timeline-item__inner-dot{
                margin: auto!important;
                width: 100%;
                height: 100%;
            }
        }
        &.phone{
            padding: 0!important;
            .v-timeline-item__divider{
                min-width: 30px;
            }
            &.v-timeline--dense .v-timeline-item__body{
                max-width: calc(100% - 30px);
            }
        }
    }
    .v-application--is-rtl{
        .e-timeline{
            &.phone{
                &.v-timeline--dense:not(.v-timeline--reverse):before{
                    right: calc(15px - 1px)!important;
                }
                &.v-timeline--dense .v-timeline-item__body{
                    margin-right: 1rem;
                }
            }
        }
    }
    .v-application--is-ltr{
        .e-timeline{
            &.phone{
                &.v-timeline--dense:not(.v-timeline--reverse):before{
                    left: calc(15px - 1px)!important;
                }
                &.v-timeline--dense .v-timeline-item__body{
                    margin-left: 1rem;
                }
            }
        }
    }
</style>