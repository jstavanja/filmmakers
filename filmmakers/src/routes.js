import Hot from './components/Hot/Hot.vue';
import Marketplace from './components/Marketplace/Marketplace.vue';
import EditorsPicks from './components/EditorsPicks/EditorsPicks.vue';
import Stories from './components/Stories/Stories.vue';
import People from './components/People/People.vue';
import LoginPage from './components/LoginPage.vue';
import Settings from './components/Settings/Settings.vue';
import Signup from './components/Signup/Signup.vue';
import Admin from './components/Admin/Admin.vue';
import NewPost from './components/New/NewPost.vue';

export const routes = [
    { path: '/', component: Hot},
    { path: '/hot', component: Hot},
    { path: '/marketplace', component: Marketplace},
    { path: '/editorspicks', component: EditorsPicks},
    { path: '/stories', component: Stories},
    { path: '/people', component: People},
    { path: '/login', component: LoginPage },
    { path: '/settings', component: Settings },
    { path: '/signup', component: Signup },
    { path: '/admin', component: Admin },
    { path: '/newpost', component: NewPost }
];