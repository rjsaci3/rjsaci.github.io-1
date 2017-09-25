import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { firebaseConfig } from '../environments/environment';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FocusModule } from 'angular2-focus';

import { routing } from './app.routing';
import { AuthGuard } from './_guards/index';

import { HelperService, DeleteDialogComponent, AlphabetScrollComponent } from './_shared/index';

import { AppComponent } from './app.component';

import { LoginComponent } from './user/login/login.component';

import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add/add-category.component';
import { EditCategoryDialogComponent } from './categories/edit/edit-category-dialog.component';

import { WordsComponent } from './words/words.component';
import { AddWordComponent } from './words/add/add-word.component';
import { EditWordDialogComponent } from './words/edit/edit-word-dialog.component';

import { QuizComponent } from './quiz/quiz.component';

export const firebaseAuthConfig = {
	provider: AuthProviders.Password,
	method: AuthMethods.Password
}

export class MyHammerConfig extends HammerGestureConfig {
	overrides = <any>{
		'pinch': { enable: false },
		'rotate': { enable: false }
	}
}

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		CategoriesComponent,
		AddCategoryComponent,
		EditCategoryDialogComponent,
		WordsComponent,
		AddWordComponent,
		EditWordDialogComponent,
		QuizComponent,
		DeleteDialogComponent,
		AlphabetScrollComponent
	],
	entryComponents: [
		EditCategoryDialogComponent,
		EditWordDialogComponent,
		DeleteDialogComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		BrowserAnimationsModule,
		routing,
		AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
		AngularFireOfflineModule,
		ReactiveFormsModule,
		Ng2FilterPipeModule,
		FocusModule.forRoot()
	],
	providers: [
		AuthGuard,
		HelperService,
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: MyHammerConfig
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
