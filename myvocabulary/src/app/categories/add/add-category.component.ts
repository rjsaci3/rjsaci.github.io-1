import { Component, OnInit } from '@angular/core';

import { AngularFireOffline } from 'angularfire2-offline';

import { HelperService } from '../../_shared/index';

import { Category } from '../../_models/index';

@Component({
    templateUrl: './add-category.component.html',
})
export class AddCategoryComponent implements OnInit {
    newCategory: Category = {
        id: "",
        name: "",
        definition: ""
    };
    isDialog = 0;

    constructor(
        private afo: AngularFireOffline,
        private helperService: HelperService
    ) { }

    ngOnInit() {
    }

    addCategory() {
        this.helperService.submitDisabled = 1;
        let requiredFields = [this.newCategory.name, this.newCategory.definition];
        if (!this.helperService.validateRequired(requiredFields)) {            
            return false;
        }

        this.helperService.isDuplicate('categories', 'name', this.newCategory.name.toLowerCase().trim())
            .then(res => {
                if (!res) {
                    const categories = this.afo.database.list('/categories');
                    const promise = categories.push({
                        name: this.newCategory.name.toLowerCase().trim(),
                        definition: this.newCategory.definition.trim(),
                        created_on: Math.round(new Date().getTime() / 1000)
                    });
                    promise.then(res => {
                        this.newCategory.name = "";
                        this.newCategory.definition = "";
                        this.helperService.snackBar('Category added successfully');
                    });
                } else {
                    this.helperService.snackBar('Category already exists');
                }
                this.helperService.submitDisabled = 0;
            });
    }
}
