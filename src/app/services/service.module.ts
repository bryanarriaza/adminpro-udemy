import { NgModule } from '@angular/core';
import { SettingsService, SidebarService, SharedService } from './service.index';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService
  ],
  bootstrap: [
  ]
})

export class ServiceModule { }
