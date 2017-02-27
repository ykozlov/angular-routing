import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';

const settingsRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {
                path: '',
                component: SettingsProfileComponent,
                children: [
                    {
                        path: '',
                        component: SettingsHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(settingsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SettingsRoutingModule { }
