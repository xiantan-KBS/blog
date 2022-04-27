import inst from './request';
export default async function getProject() {
    return await inst.get('/api/project');
}