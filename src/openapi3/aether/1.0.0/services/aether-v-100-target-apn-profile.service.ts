// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AetherV100TargetApnProfileApnProfile } from '../models/aether-v-100-target-apn-profile-apn-profile';

@Injectable({
  providedIn: 'root',
})
export class AetherV100TargetApnProfileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAetherV100TargetApnProfileApnProfile
   */
  static readonly GetAetherV100TargetApnProfileApnProfilePath = '/aether/v1.0.0/{target}/apn-profile/apn-profile/{id}';

  /**
   * GET /aether/v1.0.0/{target}/apn-profile/apn-profile Generated from YANG model.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAetherV100TargetApnProfileApnProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAetherV100TargetApnProfileApnProfile$Response(params: {

    /**
     * key for apn-profile
     */
    id: any;

    /**
     * target (device in onos-config)
     */
    target: any;

  }): Observable<StrictHttpResponse<AetherV100TargetApnProfileApnProfile>> {

    const rb = new RequestBuilder(this.rootUrl, AetherV100TargetApnProfileService.GetAetherV100TargetApnProfileApnProfilePath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.path('target', params.target, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AetherV100TargetApnProfileApnProfile>;
      })
    );
  }

  /**
   * GET /aether/v1.0.0/{target}/apn-profile/apn-profile Generated from YANG model.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAetherV100TargetApnProfileApnProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAetherV100TargetApnProfileApnProfile(params: {

    /**
     * key for apn-profile
     */
    id: any;

    /**
     * target (device in onos-config)
     */
    target: any;

  }): Observable<AetherV100TargetApnProfileApnProfile> {

    return this.getAetherV100TargetApnProfileApnProfile$Response(params).pipe(
      map((r: StrictHttpResponse<AetherV100TargetApnProfileApnProfile>) => r.body as AetherV100TargetApnProfileApnProfile)
    );
  }

}
