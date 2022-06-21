import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import Cookies from 'js-cookie'
import cookie from 'cookie'


export default function ({ $pinia, ssrContext }) {
    $pinia.use(
        createPersistedStatePlugin({
            storage: {
                getItem: (key) => {
                    // See https://nuxtjs.org/guide/plugins/#using-process-flags
                    if (process.server) {
                        let headerCookie = ssrContext.req.headers.cookie
                        if (typeof headerCookie !== 'string')
                            headerCookie = ""

                        const parsedCookies = cookie.parse(headerCookie)
                        return parsedCookies[key]
                    } else {
                        return Cookies.get(key)
                    }
                },
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) =>
                    Cookies.set(key, value, { expires: 1, secure: false }),
                removeItem: (key) => Cookies.remove(key),
            },
        }),
    )
}