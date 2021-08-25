import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardGuard } from './auth-guard.guard';

@NgModule({
  imports: [CommonModule],
  providers: [AuthGuardGuard],
})
export class SharedUtilGuardsModule {}
