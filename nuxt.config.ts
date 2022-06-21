import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            }
        ]
    },
    css: [
        "@/ontario-design-system/styles/ds-theme.css"
    ],
    buildModules: [
        '@pinia/nuxt'
    ]

})
