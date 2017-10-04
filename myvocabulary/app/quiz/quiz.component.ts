import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AngularFireOffline } from 'angularfire2-offline';

import { HelperService } from '../_shared/index';
import { listIconAnimation } from '../_shared/index';

import { EditWordDialogComponent } from '../words/edit/edit-word-dialog.component';

@Component({
    templateUrl: './quiz.component.html',
    animations: [
		listIconAnimation
	]
})
export class QuizComponent implements OnInit {
    quizWords;
    categories;
    quizeSet = -1;
    quizWordsLength = 0;
    finishedQuiz = 0;
    quizeSetFinished = 1;
    hideSpinner = 0;
    categorySelected = [];
    isAllSelected = 1;

    constructor(
        private afo: AngularFireOffline,
        private route: ActivatedRoute,
        private router: Router,
        private dialog: MdDialog,
        private helperService: HelperService
    ) { }

    ngOnInit() {        
        if (this.route.snapshot.data[0].start) {
            this.getWords();
        } else {
            this.getCategories();
        }
    }

    getCategories() {
        let preSelected = this.route.snapshot.params.id;
        if (preSelected) {
            this.helperService.quizSelectedCategories = [];
        }

        if(preSelected || this.helperService.quizSelectedCategories.length > 0) {
            this.isAllSelected = 0;
        }

        this.helperService.getAllCategories().then(data => {
            this.categories = data;
            data.map(d => {
                if (d.$key == preSelected || this.isAllSelected || this.helperService.quizSelectedCategories.indexOf(d.$key) >= 0) {
                    this.categorySelected[d.$key] = true;
                } else {
                    this.categorySelected[d.$key] = false;
                }
            });
            if(this.isAllSelected == 0 && Object.keys(this.categorySelected).length == this.helperService.quizSelectedCategories.length) {
                this.isAllSelected = 1;
            }
            this.hideSpinner = 1;
        });

    }

    startQuiz() {
        this.helperService.quizSelectedCategories = [];

        for (let i in this.categorySelected) {
            if (this.categorySelected[i] == true) {
                this.helperService.quizSelectedCategories.push(i);
            }
        }
        
        this.router.navigate(['/quiz/start']);
    }

    getWords() {
        this.helperService.getAllWords(this.helperService.quizSelectedCategories).then(data => {
            this.quizWordsLength = data.length;
            if (this.quizWordsLength == 0) {
                this.helperService.snackBar('Selected category has no word.');
                this.router.navigate(['/quiz']);
                return false;
            }
            data.forEach(d => {
                d["showAnswer"] = 0;
            });
            data = this.helperService.shuffleData(data);
            this.quizWords = data;
            this.getQuizWords();
            this.hideSpinner = 1;
        });       
    }

    getQuizWords(direction = "next") {
        if (direction == "next") {
            this.quizeSet++;
        } else {
            this.quizeSet--;
        }

        let limit = 10;
        let start = this.quizeSet * limit;
        let end = start + limit;

        if (this.quizWordsLength <= (this.quizeSet + 1) * limit && this.quizWordsLength) {
            this.quizeSetFinished = 1;
        } else {
            this.quizeSetFinished = 0;
        }

        this.quizWords.forEach(d => d["showQuiz"] = 0);

        for (let i = start; i < end; i++) {
            if (this.quizWords[i]) {
                this.quizWords[i]["showQuiz"] = 1;
            }
        }
    }   

    listen(text) {
        this.helperService.listen(text);
    }

    edit(wordId, index) {
        let dialogRef = this.dialog.open(EditWordDialogComponent);
        dialogRef.componentInstance.currentWord.id = wordId;
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.quizWords[index]['name'] = result.name;
                this.quizWords[index]['definition'] = result.definition;
            }
        });
    }

    selectAll() {
        let selectValue;
        if (this.isAllSelected) {
            this.isAllSelected = 0;
            selectValue = 0;
        } else {
            this.isAllSelected = 1;
            selectValue = 1;
        }
        for (let i in this.categorySelected) {
            this.categorySelected[i] = selectValue;
        }
    }

    onPanEnd(event, id, index, text) {
        this.helperService.onPanEnd(event, id);
        if (event.deltaY <= 50 && event.deltaY >= -50 && event.distance >= this.helperService.listPanMaxDistance) {
            if (event.deltaX < 0) {
                this.listen(text);
            } else if (event.deltaX > 0) {
                this.edit(id, index);
            }
        }
    }
}
