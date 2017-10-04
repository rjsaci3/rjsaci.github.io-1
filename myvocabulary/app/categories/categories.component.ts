import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AngularFireOffline } from 'angularfire2-offline';

import { HelperService } from '../_shared/index';
import { fabAnimation, listAnimation, listIconAnimation } from '../_shared/index';

import { AddCategoryComponent } from './add/add-category.component';
import { EditCategoryDialogComponent } from './edit/edit-category-dialog.component';

declare var $: any;

@Component({
	templateUrl: './categories.component.html',
	animations: [
		fabAnimation,
		listAnimation,
		listIconAnimation
	]
})
export class CategoriesComponent implements OnInit {
	categories;
	dataLength;

	hideSpinner = 0;
	showSearchBox = 0;
	firstSubscribe = 1;
	showAlphabetScroll = 0;

	filterValue = { name: "", definition: "" };
	filterByDefinition = 0;

	@ViewChild('focusElement') focusElement: ElementRef;

	constructor(
		private afo: AngularFireOffline,
		private renderer: Renderer,
		private helperService: HelperService,
		private dialog: MdDialog,
        private ele: ElementRef
	) { }

	ngOnInit() {
		this.getAllCategories();
	}	

	getAllCategories(orderBy = "name", desc = 0, isSorting = 0) {
		this.categories = this.afo.database.list('/categories').map(data => {
			data = this.helperService.sortData(data, orderBy, desc);
			this.helperService.setAlphabetScroll(data);
			if (this.firstSubscribe || isSorting == 1) {
				this.helperService.listAnimation(data);						
				this.firstSubscribe = 0;
				isSorting = 0;
			}
			if (data.length > 0) {
				this.showAlphabetScroll = 1;
			}
			this.dataLength = data.length;
			this.hideSpinner = 1;
			return data;
		});
	}

	deleteCategory(id) {
		this.helperService.deleteRecord('categories', id);
	}

	setFocus() {
		setTimeout(() => {
			this.renderer.invokeElementMethod(this.focusElement.nativeElement, 'focus');
		}, 0);
	}

	listen(text) {
		this.helperService.listen(text);
	}

	add() {
		let dialogRef = this.dialog.open(AddCategoryComponent);
		dialogRef.componentInstance.isDialog = 1;
	}

	edit(id) {
		let dialogRef = this.dialog.open(EditCategoryDialogComponent);
		dialogRef.componentInstance.currentCategory.id = id;
	}

	openWords(id) {
		this.helperService.navigate('/words/catid/', id);
	}
	
	onCardPan(event) {
		this.helperService.onPan(event, $(event.target).closest(".mat-list-item").attr("data-key"));
	}

	onCardPanEnd(event) {
		let id = $(event.target).closest(".mat-list-item").attr("data-key");

		this.helperService.onPanEnd(event, id);

        if (event.deltaY <= 25 && event.deltaY >= -25 && event.distance >= this.helperService.listPanMaxDistance) {
            if (event.deltaX < 0) {
                this.deleteCategory(id);
            } else if (event.deltaX > 0) {
                this.edit(id);
            }
        }
	}

	onCardTap(event) {
		if ($(event.target).hasClass("mat-line") || $(event.target).closest(".mat-line").length) {
			this.openWords($(event.target).closest(".mat-list-item").attr("data-key"));
		}
	}
}
