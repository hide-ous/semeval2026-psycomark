import { Routes } from '@angular/router';
import { About } from './features/about/about';
import {Task} from './features/task/task';
import {Organizers} from './features/organizers/organizers';
import {Data} from './features/data/data';
import {Contact} from './features/contact/contact';
import {Baselines} from './features/baselines/baselines';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'task', component: Task },
  { path: 'organizers', component: Organizers },
  { path: 'data', component: Data },
  { path: 'contact', component: Contact },
  { path: 'baselines', component: Baselines },
  { path: '**', redirectTo: '' }
];
