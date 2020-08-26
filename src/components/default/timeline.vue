<template>
    <v-timeline class="e-timeline">
        <v-timeline-item v-for="(item, i) in data" :key="i" :color="color" small>
            <template v-slot:opposite>
                <span :class="`headline font-weight-bold ${color}--text`" v-text="item.date"></span>
            </template>
            <div class="py-4">
                <h2 :class="`headline font-weight-light mb-4 ${color}--text`">Lorem ipsum</h2>
                <div>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
            </div>
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
        .v-timeline-item__body{
            background: rgba(#919191, 0.05)!important;
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
    }
</style>