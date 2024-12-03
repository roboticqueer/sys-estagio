import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {
  constructor(private dialogRef: MatDialogRef<InfoDialogComponent>) {}

  // Método para fechar o pop-up
  closeDialog(): void {
    this.dialogRef.close();
  }
}
