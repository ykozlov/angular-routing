import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  declarations: [
    SettingsProfileComponent,
    SettingsHomeComponent,
    SettingsComponent
  ]
})
export class SettingsModule { }
