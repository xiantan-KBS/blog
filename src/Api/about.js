import inst from "./request";

export default async function getAbout() {
    return await inst.get('/api/about');
}