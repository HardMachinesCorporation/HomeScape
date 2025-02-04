import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide("fromNow", (date: string) => dayjs(date).fromNow());
});