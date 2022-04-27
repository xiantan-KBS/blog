import inst from "./request";

export default async function getSetting() {
    return await inst.get('/api/setting');
}