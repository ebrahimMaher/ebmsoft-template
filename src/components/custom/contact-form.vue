<i18n>
{
    "ar": {
        "contact": {

            "name": "الاسم",
            "email": "البريد اﻹلكتروني",
            "title": "عنوان الرسالة",
            "content": "محتوى الرسالة",
            "send": "إرسال الرسالة",
            "placeholders": {
                "name": "أدخل اسمك (اسم المرسل)",
                "email": "أدخل بريدك اﻹلكتروني",
                "title": "أدخل عنوان الرسالة",
                "content": "أدخل محتوى الرسالة"
            }
        }
    },
    "en": {
        "contact": {

            "email": "Email Address",
            "name": "Name",
            "title": "Message Subject",
            "content": "Message Content",
            "send": "Send Message",
            "placeholders": {
                "name": "Enter Your Name",
                "email": "Enter Your Email Address",
                "title": "Enter Message Subject",
                "content": "Enter Message Content"
            }
        }
    }
}
</i18n>
<template>
<form>
    <v-row>
        <v-col :cols="pcOnly ? 6 : 12">
            <v-text-field hide-details outlined :label="$t('contact.name')" :placeholder="$t('contact.placeholders.name')" />
        </v-col>
        <v-col :cols="pcOnly ? 6 : 12">
            <v-text-field hide-details outlined :label="$t('contact.email')" :placeholder="$t('contact.placeholders.email')" />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-text-field hide-details outlined :label="$t('contact.title')" :placeholder="$t('contact.placeholders.title')" />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <v-textarea rows="4" hide-details no-resize auto-grow outlined :label="$t('contact.content')" :placeholder="$t('contact.placeholders.content')" />
        </v-col>
    </v-row>
    <div class="contact-actions d-flex mt-4">
        <v-btn disabled block x-large tile color="primary">
            <span>{{$t('contact.send')}}</span>
            <v-icon class="ms-3">mdi-arrow-{{isRtl ? 'left' : 'right'}}</v-icon>
        </v-btn>
    </div>
</form>
</template>

<script>
import GlobalComputed from '@/helpers/global-computed'
export default {
    computed: {
        ...GlobalComputed,
    }
}
</script>

<style lang="scss" scoped>

</style>