/*
 * SPDX-FileCopyrightText: 2021-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket/basket.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { ApiModule as ApiModuleTopLevel } from '../../openapi3/top/level/api.module';
import { AETHER_ROC_API_URL } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BasketPreviewComponent } from './basket-preview/basket-preview.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthInterceptor } from '../auth-interceptor';
import { API_INTERCEPTOR_PROVIDER } from '../aether.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        BasketComponent,
        BasketPreviewComponent,
        TransactionListComponent,
    ],
    imports: [
        CommonModule,
        ApiModuleTopLevel.forRoot({ rootUrl: AETHER_ROC_API_URL }),
        HttpClientModule,
        RouterModule.forChild([
            { path: 'basket', component: BasketComponent },
            { path: '', component: BasketComponent, pathMatch: 'full' },
        ]),
        FormsModule,
        CdkTableModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        ClipboardModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        CdkAccordionModule,
        MatListModule,
    ],
    providers: [AuthInterceptor, API_INTERCEPTOR_PROVIDER],
})
export class BasketModule {}
