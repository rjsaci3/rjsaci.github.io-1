import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { LoginComponent } from './user/login/login.component';

import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add/add-category.component';

import { WordsComponent } from './words/words.component';
import { AddWordComponent } from './words/add/add-word.component';

import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'categories', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },

    { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
    { path: 'categories/add', component: AddCategoryComponent, canActivate: [AuthGuard] },
    
    { path: 'words', component: WordsComponent, canActivate: [AuthGuard] },
    { path: 'words/catid/:id', component: WordsComponent, canActivate: [AuthGuard] },
    { path: 'words/add', component: AddWordComponent, canActivate: [AuthGuard] },
    { path: 'words/add/:id', component: AddWordComponent, canActivate: [AuthGuard] },

    { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard], data: [{start: false}] },
    { path: 'quiz/catid/:id', component: QuizComponent, canActivate: [AuthGuard], data: [{start: false}] },
    { path: 'quiz/start' , component: QuizComponent, canActivate: [AuthGuard], data: [{start: true}] },

    { path: '**', redirectTo:  ''}
];

export const routing = RouterModule.forRoot(appRoutes);