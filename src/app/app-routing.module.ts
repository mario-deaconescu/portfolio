import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {
    path: 'about',
    title: 'About Me',
    data: {
      animation: 'about'
    },
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'experience',
    title: 'Experience',
    data: {
      animation: 'experience'
    },
    loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'projects',
    title: 'Projects',
    data: {
      animation: 'projects'
    },
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
