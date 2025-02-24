/*
 * SPDX-FileCopyrightText: 2021-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import {
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { RocMonitorBase } from '../../roc-monitor-base';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Service as AetherService,
    UpfUpfService,
} from '../../../openapi3/aether/4.0.0/services';
import {
    AETHER_TARGETS,
    PERFORMANCE_METRICS_ENABLED,
} from '../../../environments/environment';
import { UpfUpf } from '../../../openapi3/aether/4.0.0/models';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdTokClaims } from '../../idtoken';

@Component({
    selector: 'aether-upf-monitor',
    templateUrl: './upf-monitor.component.html',
    styleUrls: ['../../common-profiles.component.scss'],
})
export class UpfMonitorComponent
    extends RocMonitorBase
    implements OnInit, OnDestroy
{
    thisUpf: UpfUpf;

    upfLatencyPanelUrl: string;
    upfJitterPanelUrl: string;
    upfThroughputPanelUrl: string;
    upfDropsPanelUrl: string;

    grafanaOrgId = 1;
    grafanaOrgName: string;

    @ViewChild('iframe') iframe: ElementRef;

    constructor(
        protected aetherService: AetherService,
        protected upfService: UpfUpfService,
        protected route: ActivatedRoute,
        protected router: Router,
        private httpClient: HttpClient,
        private oauthService: OAuthService,
        @Inject('grafana_api_proxy') private grafanaUrl: string
    ) {
        super(route, router);
    }

    ngOnInit(): void {
        super.init();

        if (this.oauthService.hasValidIdToken()) {
            const claims = this.oauthService.getIdentityClaims() as IdTokClaims;
            // TODO: enhance this - it takes the last group, having all lower case as the Grafana Org.

            this.grafanaOrgName = claims.groups.find(
                (g) => g === g.toLowerCase()
            );

            this.getUpf().subscribe(
                (upf) => {
                    console.log('Found Upf', upf.id);
                    this.thisUpf = upf;

                    this.upfLatencyPanelUrl = this.generatePanelUrl(
                        this.grafanaOrgId,
                        0
                    );

                    this.upfJitterPanelUrl = this.generatePanelUrl(
                        this.grafanaOrgId,
                        1
                    );

                    this.upfThroughputPanelUrl = this.generatePanelUrl(
                        this.grafanaOrgId,
                        2
                    );

                    this.upfDropsPanelUrl = this.generatePanelUrl(
                        this.grafanaOrgId,
                        3
                    );
                },
                (err) => console.warn('UPF', this.id, 'not found.', err)
            );
        }
    }

    ngOnDestroy(): void {
        console.log('Exited for UPF Monitor page');
    }

    private getUpf(): Observable<UpfUpf> {
        return this.upfService.getUpfUpf({
            target: AETHER_TARGETS[0],
            id: this.id,
        });
    }

    generatePanelUrl(orgId: number, panelId: number): string {
        // This will show the Cluster metrics
        let baseUrl = `${this.grafanaUrl}/d-solo/upf-metrics/upf-dashboard?orgId=${orgId}&theme=light&panelId=${panelId}`;

        // Filter from ACE datasource
        baseUrl += `&var-ds=datasource-amp`;

        baseUrl += `&var-upf=${this.id}`;

        return baseUrl;
    }
}
