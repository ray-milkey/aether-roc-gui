/*
 * SPDX-FileCopyrightText: 2021-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: LicenseRef-ONF-Member-1.0
 */
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {IpDomainIpDomain} from '../../../openapi3/aether/3.0.0/models/ip-domain-ip-domain';
import {RocListBase} from '../../roc-list-base';
import {IpDomainDatasource} from './ip-domain-datasource';
import {Service as AetherService} from '../../../openapi3/aether/3.0.0/services/service';
import {BasketService} from '../../basket.service';
import {OpenPolicyAgentService} from '../../open-policy-agent.service';
import {AETHER_TARGETS} from '../../../environments/environment';

@Component({
    selector: 'aether-ip-domain',
    templateUrl: './ip-domain.component.html',
    styleUrls: ['../../common-profiles.component.scss']
})
export class IpDomainComponent extends RocListBase<IpDomainDatasource> implements AfterViewInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable) table: MatTable<IpDomainIpDomain>;

    displayedColumns = [
        'id',
        'description',
        'enterprise',
        'dns',
        'subnet',
        'admin-status',
        'mtu',
        'edit',
        'delete'
    ];

    constructor(
        private aetherService: AetherService,
        private basketService: BasketService,
        public opaService: OpenPolicyAgentService,
    ) {
        super(new IpDomainDatasource(aetherService, basketService, AETHER_TARGETS[0]));
    }

    onDataLoaded(ScopeOfDataSource): void {
        const basketPreview = ScopeOfDataSource.bs.buildPatchBody().Updates;
        if ('ip-domain-3.0.0' in basketPreview && 'ip-domain' in basketPreview['ip-domain-3.0.0']) {
            basketPreview['ip-domain-3.0.0']['ip-domain'].forEach((basketItems) => {
                ScopeOfDataSource.data.forEach((listItem, listItemCount) => {
                    if (basketItems.id === listItem.id) {
                        if (basketItems['display-name']) {
                            ScopeOfDataSource.data[listItemCount]['display-name'] = basketItems['display-name'];
                        }
                        if (basketItems['dns-primary']) {
                            ScopeOfDataSource.data[listItemCount]['dns-primary'] = basketItems['dns-primary'];
                        }
                        if (basketItems['dns-secondary']) {
                            ScopeOfDataSource.data[listItemCount]['dns-secondary'] = basketItems['dns-secondary'];
                        }
                        if (basketItems.subnet) {
                            ScopeOfDataSource.data[listItemCount].subnet = basketItems.subnet;
                        }
                        if (basketItems['admin-status']) {
                            ScopeOfDataSource.data[listItemCount]['admin-status'] = basketItems['admin-status'];
                        }
                        if (basketItems.mtu) {
                            ScopeOfDataSource.data[listItemCount].mtu = basketItems.mtu;
                        }
                        if (basketItems.description) {
                            ScopeOfDataSource.data[listItemCount].description = basketItems.description;
                        }
                        if (basketItems.enterprise) {
                            ScopeOfDataSource.data[listItemCount].enterprise = basketItems.enterprise;
                        }
                        if (basketItems.filter) {
                            ScopeOfDataSource.data[listItemCount].filter = basketItems.filter;
                        }
                    }
                });
            });
        }
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.dataSource.loadData(this.aetherService.getIpDomain({
            target: AETHER_TARGETS[0]
        }), this.onDataLoaded);
    }
}
