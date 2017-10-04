import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';

import { AngularFireOffline } from 'angularfire2-offline';

import { HelperService } from '../_shared/index';
import { fabAnimation, listAnimation, listIconAnimation } from '../_shared/index';

import { AddWordComponent } from './add/add-word.component';
import { EditWordDialogComponent } from './edit/edit-word-dialog.component';

declare var $: any;

@Component({
    templateUrl: './words.component.html',
    animations: [
        fabAnimation,
        listAnimation,
        listIconAnimation
    ]
})
export class WordsComponent implements OnInit {
    words;
    dataLength;

    hideSpinner = 0;
    showSearchBox = 0;
    isSpeechOn = 0;
    firstSubscribe = 1;
    showAlphabetScroll = 0;

    filterValue = { name: "", definition: "" };
    filterByDefinition = 0;

    @ViewChild('focusElement') focusElement: ElementRef;

    constructor(
        private afo: AngularFireOffline,
        private route: ActivatedRoute,
        private renderer: Renderer,
        private helperService: HelperService,
        private dialog: MdDialog,
        private ele: ElementRef
    ) { }

    ngOnInit() {
        this.getAllWords();
    }

    getAllWords(orderBy = "name", desc = 0, isSorting = 0) {
        this.words = this.afo.database.list('/words').map(data => {
            if (this.route.snapshot.params.id) {
                data = this.helperService.getCategoryData(data, 'category', this.route.snapshot.params.id);
            }
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

    deleteWord(id) {
        this.helperService.deleteRecord('words', id);
    }

    setFocus() {
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.focusElement.nativeElement, 'focus');
        }, 0);
    }

    listen(text) {
        this.helperService.listen(text, this.isSpeechOn);
    }

    add() {
        let dialogRef = this.dialog.open(AddWordComponent);
        dialogRef.componentInstance.isDialog = 1;
        if (this.route.snapshot.params.id) {
            dialogRef.componentInstance.newWord.category = this.route.snapshot.params.id;
        }
    }

    edit(id) {
        let dialogRef = this.dialog.open(EditWordDialogComponent);
        dialogRef.componentInstance.currentWord.id = id;
    }

    onCardPan(event) {
		this.helperService.onPan(event, $(event.target).closest(".mat-list-item").attr("data-key"));
	}

	onCardPanEnd(event) {
		let id = $(event.target).closest(".mat-list-item").attr("data-key");

		this.helperService.onPanEnd(event, id);
		
        if (event.deltaY <= 50 && event.deltaY >= -50 && event.distance >= this.helperService.listPanMaxDistance) {
            if (event.deltaX < 0) {
                this.deleteWord(id);
            } else if (event.deltaX > 0) {
                this.edit(id);
            }
        }
	}

	onCardTap(event) {
		if ($(event.target).hasClass("mat-line") || $(event.target).closest(".mat-line").length) {
            this.listen($(event.target).closest(".mat-list-item").attr("data-name"));
		}
	}    
}
