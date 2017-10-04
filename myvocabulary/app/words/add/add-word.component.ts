import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFireOffline } from 'angularfire2-offline';

import { HelperService } from '../../_shared/index';

import { Word } from '../../_models/index';

@Component({
    templateUrl: './add-word.component.html',
})
export class AddWordComponent implements OnInit {
    categories;

    newWord: Word = {
        category: "",
        id: "",
        name: "",
        definition: ""
    };

    isDialog = 0;

    constructor(
        private route: ActivatedRoute,
        private afo: AngularFireOffline,
        private helperService: HelperService
    ) { }

    ngOnInit() {
        this.helperService.getAllCategories().then(data => {           
            this.categories = data;
        });
        if (this.route.snapshot.params.id) {
            this.newWord.category = this.route.snapshot.params.id;
        }
    }

    addWord() {
        this.helperService.submitDisabled = 1;
        let requiredFields = [this.newWord.category, this.newWord.name, this.newWord.definition];
        if (!this.helperService.validateRequired(requiredFields)) {            
            return false;
        }

        this.helperService.isDuplicate('words', 'name', this.newWord.name.toLowerCase().trim())
            .then(res => {
                if (!res) {
                    const categories = this.afo.database.list('/words');
                    const promise = categories.push({
                        category: this.newWord.category,
                        name: this.newWord.name.toLowerCase().trim(),
                        definition: this.newWord.definition.trim(),
                        created_on: Math.round(new Date().getTime() / 1000)
                    });
                    promise.then(res => {
                        this.newWord.name = "";
                        this.newWord.definition = "";
                        this.helperService.snackBar('Word added successfully');
                    });
                } else {
                    this.helperService.snackBar('Word already exists');
                }
                this.helperService.submitDisabled = 0;
            });
    }
}