import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular/material';

import { AngularFireOffline } from 'angularfire2-offline';

import { HelperService } from '../../_shared/index';

import { Category } from '../../_models/index';

@Component({
    templateUrl: './edit-category-dialog.component.html',
})
export class EditCategoryDialogComponent implements OnInit {
    currentCategory: Category = {
        id: "",
        name: "",
        definition: ""
    };

    constructor(
        private route: ActivatedRoute,
        private afo: AngularFireOffline,
        private helperService: HelperService,
        private dialogRef: MdDialogRef<EditCategoryDialogComponent>
    ) { }

    ngOnInit() {
        if (this.currentCategory.id) {
            this.afo.database.object('/categories/' + this.currentCategory.id)
                .subscribe(cat => {
                    this.currentCategory.name = cat["name"];
                    this.currentCategory.definition = cat["definition"];
                });
        }
    }

    editCategory(id) {
        this.helperService.submitDisabled = 1;
        let requiredFields = [this.currentCategory.name, this.currentCategory.definition];
        if (!this.helperService.validateRequired(requiredFields)) {
            return false;
        }

        this.helperService.isDuplicate('categories', 'name', this.currentCategory.name.toLowerCase().trim(), id)
            .then(res => {
                if (!res) {
                    const categories = this.afo.database.list('/categories');
                    const promise = categories.update(id, {
                        name: this.currentCategory.name.toLowerCase().trim(),
                        definition: this.currentCategory.definition.trim(),
                        updated_on: Math.round(new Date().getTime() / 1000)
                    });
                    promise.then(res => {
                        this.helperService.snackBar('Category updated successfully');
                        let updatedRecord = {
                            name: this.currentCategory.name,
                            definition: this.currentCategory.definition
                        };
                        this.dialogRef.close(updatedRecord);
                    });
                } else {
                    this.helperService.snackBar('Category already exists');
                }
                this.helperService.submitDisabled = 0;
            });
    }
}
