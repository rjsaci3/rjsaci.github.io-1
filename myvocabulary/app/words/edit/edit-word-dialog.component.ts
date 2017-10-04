import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular/material';

import { AngularFireOffline } from 'angularfire2-offline';

import { HelperService } from '../../_shared/index';

import { Word } from '../../_models/index';

@Component({
    templateUrl: './edit-word-dialog.component.html',
})
export class EditWordDialogComponent implements OnInit {
    categories;
    currentWord: Word = {
        category: "",
        id: "",
        name: "",
        definition: ""
    };

    constructor(
        private route: ActivatedRoute,
        private afo: AngularFireOffline,
        private helperService: HelperService,
        private dialogRef: MdDialogRef<EditWordDialogComponent>
    ) { }

    ngOnInit() {
        this.helperService.getAllCategories().then(data => {
            this.categories = data;
        });
        if (this.currentWord.id) {
            this.afo.database.object('/words/' + this.currentWord.id)
                .subscribe(word => {
                    this.currentWord.category = word["category"];
                    this.currentWord.name = word["name"];
                    this.currentWord.definition = word["definition"];
                });
        }
    }

    editWord(id) {
        this.helperService.submitDisabled = 1;
        let requiredFields = [this.currentWord.category, this.currentWord.name, this.currentWord.definition];
        if (!this.helperService.validateRequired(requiredFields)) {            
            return false;
        }

        this.helperService.isDuplicate('words', 'name', this.currentWord.name.toLowerCase().trim(), id)
            .then(res => {
                if (!res) {
                    const words = this.afo.database.list('/words');
                    const promise = words.update(id, {
                        category: this.currentWord.category,
                        name: this.currentWord.name.toLowerCase().trim(),
                        definition: this.currentWord.definition.trim(),
                        updated_on: Math.round(new Date().getTime() / 1000)
                    });
                    promise.then(res => {
                        this.helperService.snackBar('Word updated successfully');
                        let updatedRecord = {
                            category: this.currentWord.category,
                            name: this.currentWord.name,
                            definition: this.currentWord.definition
                        };
                        this.dialogRef.close(updatedRecord);
                    });
                } else {
                    this.helperService.snackBar('Word already exists');
                }
                this.helperService.submitDisabled = 0;
            });

    }
}
