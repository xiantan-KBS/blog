import getSetting from "../Api/setting";
import titleControl from "../utils/titleControl";
import ico from "@/assets/avatar.png";
export default {
    namespaced: true,
    state: {
        loading: false,
        data: null,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit('setLoading', true);
            const resp = await getSetting();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
            if (resp.favicon) {
                if (document.querySelector("link[rel='shortcut icon']")) {
                    return;
                } else {
                    const link = document.createElement('link');
                    link.rel = "shortcut icon";
                    link.type = "image/x-icon";
                    link.href = ico;
                    document.head.appendChild(link)
                }
            }
            if (resp.siteTitle) {
                titleControl.siteTitle(resp.siteTitle)
            }
        }
    }
}