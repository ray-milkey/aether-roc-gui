/*
 * SPDX-FileCopyrightText: 2021-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: LicenseRef-ONF-Member-1.0
 */

import { Service as AetherService } from '../../../openapi3/aether/2.0.0/services';
import { BasketService } from '../../basket.service';
import { compare, RocDataSource } from '../../roc-data-source';
import {
    Application,
    EnterpriseEnterpriseApplication,
} from '../../../openapi3/aether/2.0.0/models';

export class ApplicationDatasource extends RocDataSource<
    EnterpriseEnterpriseApplication,
    Application
> {
    constructor(
        protected aetherService: AetherService,
        public bs: BasketService,
        protected target: string
    ) {
        super(aetherService, bs, target, '/application-2.0.0', 'application');
    }

    getSortedData(
        data: EnterpriseEnterpriseApplication[]
    ): EnterpriseEnterpriseApplication[] {
        if (
            !this.sort.active ||
            this.sort.direction === '' ||
            this.sort.active === 'id' ||
            this.sort.active === 'description'
        ) {
            return super.getSortedData(data);
        }
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'address':
                    return compare(a.address, b.address, isAsc);
                // case 'enterprise':
                //     return compare(a.enterprise, b.enterprise, isAsc);
                default:
                    return 0;
            }
        });
    }
}
