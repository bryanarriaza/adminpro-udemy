import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        BreadcrumbsComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        BreadcrumbsComponent
    ],
    providers: [],
})
export class SharedModule {

}
