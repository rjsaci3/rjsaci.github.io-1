import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent { 

    constructor(
        private dialogRef: MdDialogRef<DeleteDialogComponent>
    ) {}

    closeDialog(res = 0) {
        this.dialogRef.close(res);
    }
}
