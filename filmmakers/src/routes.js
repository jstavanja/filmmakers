import Hot from './components/Hot/Hot.vue';
import Marketplace from './components/Marketplace/Marketplace.vue';
import EditorsPicks from './components/EditorsPicks/EditorsPicks.vue';
import Stories from './components/Stories/Stories.vue';
import People from './components/People/People.vue';
import LoginPage from './components/LoginPage.vue'

export const routes = [
    { path: '', redirect: '/hot'},
    { path: '/hot', component: Hot},
    { path: '/marketplace', component: Marketplace},
    { path: '/editorspicks', component: EditorsPicks},
    { path: '/stories', component: Stories},
    { path: '/people', component: People},
    { path: '/login', component: LoginPage }
];