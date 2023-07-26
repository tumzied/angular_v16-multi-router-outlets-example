import { Routes } from '@angular/router';

export const routersConfig: Routes = [
  {
    path: 'user',
    loadComponent: () =>
      import('./componentes/user-list/user-list-component').then(
        (c) => c.UserListComponent
      ),
  },
  {
    path: 'post/:id',
    outlet: 'post',
    loadComponent: () =>
      import('./componentes/post-list/post-list.component').then(
        (c) => c.PostListComponent
      ),
  },
  {
    path: 'comment/:id',
    outlet: 'comment',
    loadComponent: () =>
      import('./componentes/comment-list/comment-list.component').then(
        (c) => c.CommentListComponent
      ),
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
];
