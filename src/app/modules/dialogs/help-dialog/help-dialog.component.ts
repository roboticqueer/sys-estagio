import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.scss']
})
export class HelpDialogComponent {
  constructor(private dialogRef: MatDialogRef<HelpDialogComponent>) {}

  // Método para fechar o pop-up
  closeDialog(): void {
    this.dialogRef.close();
  }
}
