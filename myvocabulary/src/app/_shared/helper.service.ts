import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MdSnackBar, MdDialog } from '@angular/material';

import { AngularFireOffline } from 'angularfire2-offline';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

declare var responsiveVoice: any;

@Injectable()
export class HelperService implements OnInit {
    snackbarState = 'inactive';
    snackbarTimeout;
    animationState = [];
    submitDisabled = 0;

    panDeleteEnabled = 0;
    listPanMaxDistance = 50;
    listIconState = {
        delete: [],
        edit: []
    };
    pan = {
        left: [],
        iconWidth: [],
        iconPosition: []
    };
    animatedList = [];
    listAnimationTimeout;

    quizSelectedCategories = [];

    eleSidenavContent;
    alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    alphabetsEnabled = [];

    constructor(
        private afo: AngularFireOffline,
        private sb: MdSnackBar,
        private dialog: MdDialog,
        private router: Router
    ) { }

    ngOnInit() {
         
    }

    getAllCategories(): Promise<any> {
        return this.afo.database.list('/categories').map(data => {
            return this.sortData(data, 'name');
        }).first().toPromise();
    }

    getAllWords(category:any = ''): Promise<any> {
        return this.afo.database.list('/words').map(data => {
            if (category != "") {
                data = this.getCategoryData(data, 'category', category);
            }
            return data;
        }).first().toPromise();
    }

    deleteRecord(table, id) {
        if (this.panDeleteEnabled) {
            this.proceedDeleteRecords(table, id);
        } else {
            let dialogRef = this.dialog.open(DeleteDialogComponent);
            dialogRef.afterClosed().subscribe(res => {
                if (res == 1) {
                    this.proceedDeleteRecords(table, id);
                }                
            });
        }
    }

    proceedDeleteRecords(table, id) {
        let deleteDelay = 10000;
        this.animationState[id] = 'fade-out';

        this.snackbarTimeout = setTimeout(() => {
            let observable = this.afo.database.list('/' + table);
            if (id != "") {
                observable.remove(id);
            }
        }, deleteDelay);

        this.snackBar('Record deleted.', deleteDelay, 'Undo', id);
    }

    sortData(data, value, desc = 0) {
        data.sort((a, b) => {
            if (a[value] > b[value]) {
                return 1;
            } else if (a[value] < b[value]) {
                return -1;
            } else {
                return 0;
            }
        });

        if (desc) {
            data.reverse();
        }
        return data;
    }

    getCategoryData(data, cat, id) {
        let result = [];
        data.map(d => {
            if (d[cat] == id || id.indexOf(d[cat]) >= 0) {
                result.push(d);
            }
        });
        return result;
    }

    isDuplicate(table, column, value, key = ""): Promise<any> {
        let isDuplicate = 0;
        return this.afo.database.list('/' + table + '/').map(data => {
            data.forEach(d => {
                if (d[column] == value && (key == "" || d.$key != key)) {
                    isDuplicate = 1;
                }
            });
            return isDuplicate;
        }).first().toPromise();
    }

    validateRequired(fields) {
        let isError = 0;
        fields.forEach(field => {
            if (field.trim() == "") {
                isError = 1;
                return false;
            }
        });
        if (isError == 1) {
            this.submitDisabled = 0;
            this.snackBar("Please fill all required field(s).");
            return false;
        } else {
            return true;
        }
    }

    shuffleData(array) {
        var i = 0, j = 0, temp = null;

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    listen(text, isOn = 1) {
        if (isOn) {
            responsiveVoice.speak(text);
        }
    }

    snackBar(message, duration = 3000, action = '', animationStateId = '') {
        this.snackbarState = 'active';
        let sb = this.sb.open(message, action, {
            duration: duration,
        });
        sb.afterDismissed().subscribe(() => {
            this.snackbarState = 'inactive';
        });
        sb.onAction().subscribe(() => {
            clearTimeout(this.snackbarTimeout);
            this.animationState[animationStateId] = 'fade-in';
        });

    }

    listAnimation(data) {
        let maxItems = 20;
        let interval = 50;   
        let t = 1;

        clearTimeout(this.listAnimationTimeout);
        
        data.forEach(d => {
            if (t <= maxItems) {
                let delay = t * interval;
                this.animatedList[d.$key] = 'fadeInUp 1s '+ delay +'ms forwards';
            } else {
                this.animatedList[d.$key] = 'fadeInUp 0s forwards';
            }
            t++;
        });

        let finishTime = maxItems * interval + 2000;
        this.listAnimationTimeout = setTimeout(() => {
            t = 1;
            data.forEach(d => {
                if (t <= maxItems) {
                    let delay = t * interval;
                    this.animatedList[d.$key] = 'fadeInUp 0s forwards';
                }
                t++;
            });
        }, finishTime);
    }

    navigate(url, param = "") {
        this.router.navigate([url, param]);
    }

    onPan(event, id) {
        if (event.deltaY <= 25 && event.deltaY >= -25 && event.distance <= this.listPanMaxDistance + 25) {
            this.pan.iconWidth[id] = event.distance + 'px';
            this.pan.left[id] = event.deltaX + 'px';

            if (event.deltaX < 0) {
                this.pan.iconPosition[id] = event.deltaX + 'px';
                this.listIconState.edit[id] = '';
                this.listIconState.delete[id] = 'active';
            } else if (event.deltaX > 0) {
                this.pan.iconPosition[id] = '-' + event.deltaX + 'px';
                this.listIconState.delete[id] = '';
                this.listIconState.edit[id] = 'active';
            }
        } else if (event.deltaY > 25 || event.deltaY < -25) {
            this.pan.left[id] = '0px';
            this.pan.iconWidth[id] = '0px';
            this.pan.iconPosition[id] = '0px';
            this.listIconState.delete[id] = '';
            this.listIconState.edit[id] = '';
        }
    }

    onPanEnd(event, id) {
        this.pan.left[id] = '0px';
        this.pan.iconWidth[id] = '0px';
        this.pan.iconPosition[id] = '0px';
        this.listIconState.delete[id] = '';
        this.listIconState.edit[id] = '';
    }

    scrollContent(offsetTop = 0) {
        if (offsetTop == -1) {
            offsetTop = this.eleSidenavContent.scrollHeight;
        }
        this.eleSidenavContent.scrollTop = offsetTop;
    }

    setAlphabetScroll(data = []) {
        this.alphabets.forEach((alphabet, key) => {
            this.alphabetsEnabled[alphabet.toLowerCase()] = 0;
        });
        if (data.length > 0) {
            data.forEach(d => {
                this.alphabetsEnabled[d.name.slice(0, 1)] = 1;
            });
        }
    }    
}