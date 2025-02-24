// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ApList } from '../models/ap-list';
import { ApListApList } from '../models/ap-list-ap-list';
import { ApListApListAccessPoints } from '../models/ap-list-ap-list-access-points';
import { Application } from '../models/application';
import { ApplicationApplication } from '../models/application-application';
import { ApplicationApplicationEndpoint } from '../models/application-application-endpoint';
import { ConnectivityService } from '../models/connectivity-service';
import { ConnectivityServiceConnectivityService } from '../models/connectivity-service-connectivity-service';
import { DeviceGroup } from '../models/device-group';
import { DeviceGroupDeviceGroup } from '../models/device-group-device-group';
import { DeviceGroupDeviceGroupImsis } from '../models/device-group-device-group-imsis';
import { Enterprise } from '../models/enterprise';
import { EnterpriseEnterprise } from '../models/enterprise-enterprise';
import { EnterpriseEnterpriseConnectivityService } from '../models/enterprise-enterprise-connectivity-service';
import { IpDomain } from '../models/ip-domain';
import { IpDomainIpDomain } from '../models/ip-domain-ip-domain';
import { Site } from '../models/site';
import { SiteSite } from '../models/site-site';
import { SiteSiteImsiDefinition } from '../models/site-site-imsi-definition';
import { Template } from '../models/template';
import { TemplateTemplate } from '../models/template-template';
import { TrafficClass } from '../models/traffic-class';
import { TrafficClassTrafficClass } from '../models/traffic-class-traffic-class';
import { Upf } from '../models/upf';
import { UpfUpf } from '../models/upf-upf';
import { Vcs } from '../models/vcs';
import { VcsVcs } from '../models/vcs-vcs';
import { VcsVcsApplication } from '../models/vcs-vcs-application';
import { VcsVcsDeviceGroup } from '../models/vcs-vcs-device-group';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postApList
   */
  static readonly PostApListPath = '/aether/v3.0.0/{target}/ap-list';

  /**
   * POST /ap-list.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApList$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: ApList
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostApListPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /ap-list.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApList(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: ApList
  }): Observable<void> {

    return this.postApList$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApList
   */
  static readonly DeleteApListPath = '/aether/v3.0.0/{target}/ap-list';

  /**
   * DELETE /ap-list.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApList()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApList$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteApListPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /ap-list.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApList(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteApList$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApListApList
   */
  static readonly PostApListApListPath = '/aether/v3.0.0/{target}/ap-list/ap-list/{id}';

  /**
   * POST /ap-list/ap-list.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApListApList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApListApList$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: ApListApList
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostApListApListPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /ap-list/ap-list.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApListApList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApListApList(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: ApListApList
  }): Observable<void> {

    return this.postApListApList$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApListApList
   */
  static readonly DeleteApListApListPath = '/aether/v3.0.0/{target}/ap-list/ap-list/{id}';

  /**
   * DELETE /ap-list/ap-list.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApListApList()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApListApList$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteApListApListPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /ap-list/ap-list.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApListApList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApListApList(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteApListApList$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApListApListAccessPoints
   */
  static readonly PostApListApListAccessPointsPath = '/aether/v3.0.0/{target}/ap-list/ap-list/{id}/access-points/{address}';

  /**
   * POST /ap-list/ap-list/{id}/access-points.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApListApListAccessPoints()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApListApListAccessPoints$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {address}
     */
    address: any;
    body?: ApListApListAccessPoints
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostApListApListAccessPointsPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('address', params.address, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /ap-list/ap-list/{id}/access-points.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApListApListAccessPoints$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApListApListAccessPoints(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {address}
     */
    address: any;
    body?: ApListApListAccessPoints
  }): Observable<void> {

    return this.postApListApListAccessPoints$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApListApListAccessPoints
   */
  static readonly DeleteApListApListAccessPointsPath = '/aether/v3.0.0/{target}/ap-list/ap-list/{id}/access-points/{address}';

  /**
   * DELETE /ap-list/ap-list/{id}/access-points.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApListApListAccessPoints()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApListApListAccessPoints$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {address}
     */
    address: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteApListApListAccessPointsPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('address', params.address, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /ap-list/ap-list/{id}/access-points.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApListApListAccessPoints$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApListApListAccessPoints(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {address}
     */
    address: any;
  }): Observable<void> {

    return this.deleteApListApListAccessPoints$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApplication
   */
  static readonly PostApplicationPath = '/aether/v3.0.0/{target}/application';

  /**
   * POST /application.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApplication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApplication$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Application
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostApplicationPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /application.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApplication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApplication(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Application
  }): Observable<void> {

    return this.postApplication$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApplication
   */
  static readonly DeleteApplicationPath = '/aether/v3.0.0/{target}/application';

  /**
   * DELETE /application.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApplication()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplication$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteApplicationPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /application.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApplication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplication(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteApplication$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApplicationApplication
   */
  static readonly PostApplicationApplicationPath = '/aether/v3.0.0/{target}/application/application/{id}';

  /**
   * POST /application/application.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApplicationApplication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApplicationApplication$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: ApplicationApplication
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostApplicationApplicationPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /application/application.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApplicationApplication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApplicationApplication(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: ApplicationApplication
  }): Observable<void> {

    return this.postApplicationApplication$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApplicationApplication
   */
  static readonly DeleteApplicationApplicationPath = '/aether/v3.0.0/{target}/application/application/{id}';

  /**
   * DELETE /application/application.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApplicationApplication()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplicationApplication$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteApplicationApplicationPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /application/application.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApplicationApplication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplicationApplication(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteApplicationApplication$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApplicationApplicationEndpoint
   */
  static readonly PostApplicationApplicationEndpointPath = '/aether/v3.0.0/{target}/application/application/{id}/endpoint/{name}';

  /**
   * POST /application/application/{id}/endpoint.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApplicationApplicationEndpoint()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApplicationApplicationEndpoint$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {name}
     */
    name: any;
    body?: ApplicationApplicationEndpoint
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostApplicationApplicationEndpointPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('name', params.name, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /application/application/{id}/endpoint.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApplicationApplicationEndpoint$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postApplicationApplicationEndpoint(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {name}
     */
    name: any;
    body?: ApplicationApplicationEndpoint
  }): Observable<void> {

    return this.postApplicationApplicationEndpoint$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApplicationApplicationEndpoint
   */
  static readonly DeleteApplicationApplicationEndpointPath = '/aether/v3.0.0/{target}/application/application/{id}/endpoint/{name}';

  /**
   * DELETE /application/application/{id}/endpoint.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApplicationApplicationEndpoint()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplicationApplicationEndpoint$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {name}
     */
    name: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteApplicationApplicationEndpointPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /application/application/{id}/endpoint.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApplicationApplicationEndpoint$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApplicationApplicationEndpoint(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {name}
     */
    name: any;
  }): Observable<void> {

    return this.deleteApplicationApplicationEndpoint$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postConnectivityService
   */
  static readonly PostConnectivityServicePath = '/aether/v3.0.0/{target}/connectivity-service';

  /**
   * POST /connectivity-service.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postConnectivityService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postConnectivityService$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: ConnectivityService
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostConnectivityServicePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /connectivity-service.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postConnectivityService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postConnectivityService(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: ConnectivityService
  }): Observable<void> {

    return this.postConnectivityService$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteConnectivityService
   */
  static readonly DeleteConnectivityServicePath = '/aether/v3.0.0/{target}/connectivity-service';

  /**
   * DELETE /connectivity-service.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteConnectivityService()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteConnectivityService$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteConnectivityServicePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /connectivity-service.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteConnectivityService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteConnectivityService(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteConnectivityService$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postConnectivityServiceConnectivityService
   */
  static readonly PostConnectivityServiceConnectivityServicePath = '/aether/v3.0.0/{target}/connectivity-service/connectivity-service/{id}';

  /**
   * POST /connectivity-service/connectivity-service.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postConnectivityServiceConnectivityService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postConnectivityServiceConnectivityService$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: ConnectivityServiceConnectivityService
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostConnectivityServiceConnectivityServicePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /connectivity-service/connectivity-service.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postConnectivityServiceConnectivityService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postConnectivityServiceConnectivityService(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: ConnectivityServiceConnectivityService
  }): Observable<void> {

    return this.postConnectivityServiceConnectivityService$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteConnectivityServiceConnectivityService
   */
  static readonly DeleteConnectivityServiceConnectivityServicePath = '/aether/v3.0.0/{target}/connectivity-service/connectivity-service/{id}';

  /**
   * DELETE /connectivity-service/connectivity-service.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteConnectivityServiceConnectivityService()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteConnectivityServiceConnectivityService$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteConnectivityServiceConnectivityServicePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /connectivity-service/connectivity-service.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteConnectivityServiceConnectivityService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteConnectivityServiceConnectivityService(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteConnectivityServiceConnectivityService$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postDeviceGroup
   */
  static readonly PostDeviceGroupPath = '/aether/v3.0.0/{target}/device-group';

  /**
   * POST /device-group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDeviceGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postDeviceGroup$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: DeviceGroup
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostDeviceGroupPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /device-group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDeviceGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postDeviceGroup(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: DeviceGroup
  }): Observable<void> {

    return this.postDeviceGroup$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDeviceGroup
   */
  static readonly DeleteDeviceGroupPath = '/aether/v3.0.0/{target}/device-group';

  /**
   * DELETE /device-group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDeviceGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeviceGroup$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteDeviceGroupPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /device-group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDeviceGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeviceGroup(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteDeviceGroup$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postDeviceGroupDeviceGroup
   */
  static readonly PostDeviceGroupDeviceGroupPath = '/aether/v3.0.0/{target}/device-group/device-group/{id}';

  /**
   * POST /device-group/device-group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDeviceGroupDeviceGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postDeviceGroupDeviceGroup$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: DeviceGroupDeviceGroup
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostDeviceGroupDeviceGroupPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /device-group/device-group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDeviceGroupDeviceGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postDeviceGroupDeviceGroup(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: DeviceGroupDeviceGroup
  }): Observable<void> {

    return this.postDeviceGroupDeviceGroup$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDeviceGroupDeviceGroup
   */
  static readonly DeleteDeviceGroupDeviceGroupPath = '/aether/v3.0.0/{target}/device-group/device-group/{id}';

  /**
   * DELETE /device-group/device-group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDeviceGroupDeviceGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeviceGroupDeviceGroup$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteDeviceGroupDeviceGroupPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /device-group/device-group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDeviceGroupDeviceGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeviceGroupDeviceGroup(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteDeviceGroupDeviceGroup$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postDeviceGroupDeviceGroupImsis
   */
  static readonly PostDeviceGroupDeviceGroupImsisPath = '/aether/v3.0.0/{target}/device-group/device-group/{id}/imsis/{name}';

  /**
   * POST /device-group/device-group/{id}/imsis.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDeviceGroupDeviceGroupImsis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postDeviceGroupDeviceGroupImsis$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {name}
     */
    name: any;
    body?: DeviceGroupDeviceGroupImsis
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostDeviceGroupDeviceGroupImsisPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('name', params.name, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /device-group/device-group/{id}/imsis.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDeviceGroupDeviceGroupImsis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postDeviceGroupDeviceGroupImsis(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {name}
     */
    name: any;
    body?: DeviceGroupDeviceGroupImsis
  }): Observable<void> {

    return this.postDeviceGroupDeviceGroupImsis$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDeviceGroupDeviceGroupImsis
   */
  static readonly DeleteDeviceGroupDeviceGroupImsisPath = '/aether/v3.0.0/{target}/device-group/device-group/{id}/imsis/{name}';

  /**
   * DELETE /device-group/device-group/{id}/imsis.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDeviceGroupDeviceGroupImsis()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeviceGroupDeviceGroupImsis$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {name}
     */
    name: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteDeviceGroupDeviceGroupImsisPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /device-group/device-group/{id}/imsis.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDeviceGroupDeviceGroupImsis$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeviceGroupDeviceGroupImsis(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {name}
     */
    name: any;
  }): Observable<void> {

    return this.deleteDeviceGroupDeviceGroupImsis$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postEnterprise
   */
  static readonly PostEnterprisePath = '/aether/v3.0.0/{target}/enterprise';

  /**
   * POST /enterprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postEnterprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postEnterprise$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Enterprise
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostEnterprisePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /enterprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postEnterprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postEnterprise(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Enterprise
  }): Observable<void> {

    return this.postEnterprise$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteEnterprise
   */
  static readonly DeleteEnterprisePath = '/aether/v3.0.0/{target}/enterprise';

  /**
   * DELETE /enterprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEnterprise()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnterprise$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteEnterprisePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /enterprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteEnterprise$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnterprise(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteEnterprise$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postEnterpriseEnterprise
   */
  static readonly PostEnterpriseEnterprisePath = '/aether/v3.0.0/{target}/enterprise/enterprise/{id}';

  /**
   * POST /enterprise/enterprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postEnterpriseEnterprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postEnterpriseEnterprise$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: EnterpriseEnterprise
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostEnterpriseEnterprisePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /enterprise/enterprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postEnterpriseEnterprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postEnterpriseEnterprise(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: EnterpriseEnterprise
  }): Observable<void> {

    return this.postEnterpriseEnterprise$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteEnterpriseEnterprise
   */
  static readonly DeleteEnterpriseEnterprisePath = '/aether/v3.0.0/{target}/enterprise/enterprise/{id}';

  /**
   * DELETE /enterprise/enterprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEnterpriseEnterprise()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnterpriseEnterprise$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteEnterpriseEnterprisePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /enterprise/enterprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteEnterpriseEnterprise$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnterpriseEnterprise(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteEnterpriseEnterprise$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postEnterpriseEnterpriseConnectivityService
   */
  static readonly PostEnterpriseEnterpriseConnectivityServicePath = '/aether/v3.0.0/{target}/enterprise/enterprise/{id}/connectivity-service/{connectivity-service}';

  /**
   * POST /enterprise/enterprise/{id}/connectivity-service.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postEnterpriseEnterpriseConnectivityService()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postEnterpriseEnterpriseConnectivityService$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {connectivity-service}
     */
    'connectivity-service': any;
    body?: EnterpriseEnterpriseConnectivityService
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostEnterpriseEnterpriseConnectivityServicePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('connectivity-service', params['connectivity-service'], {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /enterprise/enterprise/{id}/connectivity-service.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postEnterpriseEnterpriseConnectivityService$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postEnterpriseEnterpriseConnectivityService(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {connectivity-service}
     */
    'connectivity-service': any;
    body?: EnterpriseEnterpriseConnectivityService
  }): Observable<void> {

    return this.postEnterpriseEnterpriseConnectivityService$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteEnterpriseEnterpriseConnectivityService
   */
  static readonly DeleteEnterpriseEnterpriseConnectivityServicePath = '/aether/v3.0.0/{target}/enterprise/enterprise/{id}/connectivity-service/{connectivity-service}';

  /**
   * DELETE /enterprise/enterprise/{id}/connectivity-service.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEnterpriseEnterpriseConnectivityService()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnterpriseEnterpriseConnectivityService$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {connectivity-service}
     */
    'connectivity-service': any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteEnterpriseEnterpriseConnectivityServicePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('connectivity-service', params['connectivity-service'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /enterprise/enterprise/{id}/connectivity-service.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteEnterpriseEnterpriseConnectivityService$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnterpriseEnterpriseConnectivityService(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {connectivity-service}
     */
    'connectivity-service': any;
  }): Observable<void> {

    return this.deleteEnterpriseEnterpriseConnectivityService$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postIpDomain
   */
  static readonly PostIpDomainPath = '/aether/v3.0.0/{target}/ip-domain';

  /**
   * POST /ip-domain.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postIpDomain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postIpDomain$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: IpDomain
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostIpDomainPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /ip-domain.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postIpDomain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postIpDomain(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: IpDomain
  }): Observable<void> {

    return this.postIpDomain$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteIpDomain
   */
  static readonly DeleteIpDomainPath = '/aether/v3.0.0/{target}/ip-domain';

  /**
   * DELETE /ip-domain.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteIpDomain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteIpDomain$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteIpDomainPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /ip-domain.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteIpDomain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteIpDomain(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteIpDomain$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postIpDomainIpDomain
   */
  static readonly PostIpDomainIpDomainPath = '/aether/v3.0.0/{target}/ip-domain/ip-domain/{id}';

  /**
   * POST /ip-domain/ip-domain.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postIpDomainIpDomain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postIpDomainIpDomain$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: IpDomainIpDomain
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostIpDomainIpDomainPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /ip-domain/ip-domain.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postIpDomainIpDomain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postIpDomainIpDomain(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: IpDomainIpDomain
  }): Observable<void> {

    return this.postIpDomainIpDomain$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteIpDomainIpDomain
   */
  static readonly DeleteIpDomainIpDomainPath = '/aether/v3.0.0/{target}/ip-domain/ip-domain/{id}';

  /**
   * DELETE /ip-domain/ip-domain.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteIpDomainIpDomain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteIpDomainIpDomain$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteIpDomainIpDomainPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /ip-domain/ip-domain.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteIpDomainIpDomain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteIpDomainIpDomain(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteIpDomainIpDomain$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSite
   */
  static readonly PostSitePath = '/aether/v3.0.0/{target}/site';

  /**
   * POST /site.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSite()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSite$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Site
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostSitePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /site.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSite$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSite(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Site
  }): Observable<void> {

    return this.postSite$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteSite
   */
  static readonly DeleteSitePath = '/aether/v3.0.0/{target}/site';

  /**
   * DELETE /site.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSite()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSite$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteSitePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /site.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteSite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSite(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteSite$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSiteSite
   */
  static readonly PostSiteSitePath = '/aether/v3.0.0/{target}/site/site/{id}';

  /**
   * POST /site/site.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSiteSite()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSiteSite$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: SiteSite
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostSiteSitePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /site/site.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSiteSite$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSiteSite(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: SiteSite
  }): Observable<void> {

    return this.postSiteSite$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteSiteSite
   */
  static readonly DeleteSiteSitePath = '/aether/v3.0.0/{target}/site/site/{id}';

  /**
   * DELETE /site/site.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSiteSite()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSiteSite$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteSiteSitePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /site/site.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteSiteSite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSiteSite(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteSiteSite$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSiteSiteImsiDefinition
   */
  static readonly PostSiteSiteImsiDefinitionPath = '/aether/v3.0.0/{target}/site/site/{id}/imsi-definition';

  /**
   * POST /site/site/{id}/imsi-definition.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSiteSiteImsiDefinition()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSiteSiteImsiDefinition$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: SiteSiteImsiDefinition
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostSiteSiteImsiDefinitionPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /site/site/{id}/imsi-definition.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSiteSiteImsiDefinition$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSiteSiteImsiDefinition(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: SiteSiteImsiDefinition
  }): Observable<void> {

    return this.postSiteSiteImsiDefinition$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteSiteSiteImsiDefinition
   */
  static readonly DeleteSiteSiteImsiDefinitionPath = '/aether/v3.0.0/{target}/site/site/{id}/imsi-definition';

  /**
   * DELETE /site/site/{id}/imsi-definition.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSiteSiteImsiDefinition()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSiteSiteImsiDefinition$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteSiteSiteImsiDefinitionPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /site/site/{id}/imsi-definition.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteSiteSiteImsiDefinition$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSiteSiteImsiDefinition(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteSiteSiteImsiDefinition$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTemplate
   */
  static readonly PostTemplatePath = '/aether/v3.0.0/{target}/template';

  /**
   * POST /template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTemplate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTemplate$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Template
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostTemplatePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /template.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTemplate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTemplate(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Template
  }): Observable<void> {

    return this.postTemplate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTemplate
   */
  static readonly DeleteTemplatePath = '/aether/v3.0.0/{target}/template';

  /**
   * DELETE /template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTemplate$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteTemplatePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /template.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTemplate(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteTemplate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTemplateTemplate
   */
  static readonly PostTemplateTemplatePath = '/aether/v3.0.0/{target}/template/template/{id}';

  /**
   * POST /template/template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTemplateTemplate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTemplateTemplate$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: TemplateTemplate
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostTemplateTemplatePath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /template/template.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTemplateTemplate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTemplateTemplate(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: TemplateTemplate
  }): Observable<void> {

    return this.postTemplateTemplate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTemplateTemplate
   */
  static readonly DeleteTemplateTemplatePath = '/aether/v3.0.0/{target}/template/template/{id}';

  /**
   * DELETE /template/template.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTemplateTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTemplateTemplate$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteTemplateTemplatePath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /template/template.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTemplateTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTemplateTemplate(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteTemplateTemplate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTrafficClass
   */
  static readonly PostTrafficClassPath = '/aether/v3.0.0/{target}/traffic-class';

  /**
   * POST /traffic-class.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTrafficClass()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrafficClass$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: TrafficClass
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostTrafficClassPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /traffic-class.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTrafficClass$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrafficClass(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: TrafficClass
  }): Observable<void> {

    return this.postTrafficClass$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTrafficClass
   */
  static readonly DeleteTrafficClassPath = '/aether/v3.0.0/{target}/traffic-class';

  /**
   * DELETE /traffic-class.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTrafficClass()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrafficClass$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteTrafficClassPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /traffic-class.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTrafficClass$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrafficClass(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteTrafficClass$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTrafficClassTrafficClass
   */
  static readonly PostTrafficClassTrafficClassPath = '/aether/v3.0.0/{target}/traffic-class/traffic-class/{id}';

  /**
   * POST /traffic-class/traffic-class.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTrafficClassTrafficClass()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrafficClassTrafficClass$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: TrafficClassTrafficClass
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostTrafficClassTrafficClassPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /traffic-class/traffic-class.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTrafficClassTrafficClass$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrafficClassTrafficClass(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: TrafficClassTrafficClass
  }): Observable<void> {

    return this.postTrafficClassTrafficClass$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTrafficClassTrafficClass
   */
  static readonly DeleteTrafficClassTrafficClassPath = '/aether/v3.0.0/{target}/traffic-class/traffic-class/{id}';

  /**
   * DELETE /traffic-class/traffic-class.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTrafficClassTrafficClass()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrafficClassTrafficClass$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteTrafficClassTrafficClassPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /traffic-class/traffic-class.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTrafficClassTrafficClass$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrafficClassTrafficClass(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteTrafficClassTrafficClass$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postUpf
   */
  static readonly PostUpfPath = '/aether/v3.0.0/{target}/upf';

  /**
   * POST /upf.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUpf()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postUpf$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Upf
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostUpfPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /upf.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUpf$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postUpf(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Upf
  }): Observable<void> {

    return this.postUpf$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUpf
   */
  static readonly DeleteUpfPath = '/aether/v3.0.0/{target}/upf';

  /**
   * DELETE /upf.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUpf()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUpf$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteUpfPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /upf.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUpf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUpf(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteUpf$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postUpfUpf
   */
  static readonly PostUpfUpfPath = '/aether/v3.0.0/{target}/upf/upf/{id}';

  /**
   * POST /upf/upf.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUpfUpf()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postUpfUpf$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: UpfUpf
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostUpfUpfPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /upf/upf.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUpfUpf$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postUpfUpf(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: UpfUpf
  }): Observable<void> {

    return this.postUpfUpf$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUpfUpf
   */
  static readonly DeleteUpfUpfPath = '/aether/v3.0.0/{target}/upf/upf/{id}';

  /**
   * DELETE /upf/upf.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUpfUpf()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUpfUpf$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteUpfUpfPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /upf/upf.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUpfUpf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUpfUpf(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteUpfUpf$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postVcs
   */
  static readonly PostVcsPath = '/aether/v3.0.0/{target}/slice';

  /**
   * POST /slice.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postVcs()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postVcs$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Vcs
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostVcsPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /slice.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postVcs$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postVcs(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
    body?: Vcs
  }): Observable<void> {

    return this.postVcs$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteVcs
   */
  static readonly DeleteVcsPath = '/aether/v3.0.0/{target}/slice';

  /**
   * DELETE /slice.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteVcs()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVcs$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteVcsPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /slice.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteVcs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVcs(params: {

    /**
     * target (device in onos-config)
     */
    target: any;
  }): Observable<void> {

    return this.deleteVcs$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postVcsVcs
   */
  static readonly PostVcsVcsPath = '/aether/v3.0.0/{target}/slice/slice/{id}';

  /**
   * POST /slice/slice.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postVcsVcs()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postVcsVcs$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: VcsVcs
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostVcsVcsPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /slice/slice.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postVcsVcs$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postVcsVcs(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
    body?: VcsVcs
  }): Observable<void> {

    return this.postVcsVcs$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteVcsVcs
   */
  static readonly DeleteVcsVcsPath = '/aether/v3.0.0/{target}/slice/slice/{id}';

  /**
   * DELETE /slice/slice.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteVcsVcs()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVcsVcs$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteVcsVcsPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /slice/slice.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteVcsVcs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVcsVcs(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;
  }): Observable<void> {

    return this.deleteVcsVcs$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postVcsVcsApplication
   */
  static readonly PostVcsVcsApplicationPath = '/aether/v3.0.0/{target}/slice/slice/{id}/application/{application}';

  /**
   * POST /slice/slice/{id}/application.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postVcsVcsApplication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postVcsVcsApplication$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {application}
     */
    application: any;
    body?: VcsVcsApplication
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostVcsVcsApplicationPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('application', params.application, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /slice/slice/{id}/application.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postVcsVcsApplication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postVcsVcsApplication(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {application}
     */
    application: any;
    body?: VcsVcsApplication
  }): Observable<void> {

    return this.postVcsVcsApplication$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteVcsVcsApplication
   */
  static readonly DeleteVcsVcsApplicationPath = '/aether/v3.0.0/{target}/slice/slice/{id}/application/{application}';

  /**
   * DELETE /slice/slice/{id}/application.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteVcsVcsApplication()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVcsVcsApplication$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {application}
     */
    application: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteVcsVcsApplicationPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('application', params.application, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /slice/slice/{id}/application.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteVcsVcsApplication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVcsVcsApplication(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {application}
     */
    application: any;
  }): Observable<void> {

    return this.deleteVcsVcsApplication$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postVcsVcsDeviceGroup
   */
  static readonly PostVcsVcsDeviceGroupPath = '/aether/v3.0.0/{target}/slice/slice/{id}/device-group/{device-group}';

  /**
   * POST /slice/slice/{id}/device-group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postVcsVcsDeviceGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postVcsVcsDeviceGroup$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {device-group}
     */
    'device-group': any;
    body?: VcsVcsDeviceGroup
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostVcsVcsDeviceGroupPath, 'post');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('device-group', params['device-group'], {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * POST /slice/slice/{id}/device-group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postVcsVcsDeviceGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postVcsVcsDeviceGroup(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {device-group}
     */
    'device-group': any;
    body?: VcsVcsDeviceGroup
  }): Observable<void> {

    return this.postVcsVcsDeviceGroup$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteVcsVcsDeviceGroup
   */
  static readonly DeleteVcsVcsDeviceGroupPath = '/aether/v3.0.0/{target}/slice/slice/{id}/device-group/{device-group}';

  /**
   * DELETE /slice/slice/{id}/device-group.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteVcsVcsDeviceGroup()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVcsVcsDeviceGroup$Response(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {device-group}
     */
    'device-group': any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteVcsVcsDeviceGroupPath, 'delete');
    if (params) {
      rb.path('target', params.target, {});
      rb.path('id', params.id, {});
      rb.path('device-group', params['device-group'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * DELETE /slice/slice/{id}/device-group.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteVcsVcsDeviceGroup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVcsVcsDeviceGroup(params: {

    /**
     * target (device in onos-config)
     */
    target: any;

    /**
     * key {id}
     */
    id: any;

    /**
     * key {device-group}
     */
    'device-group': any;
  }): Observable<void> {

    return this.deleteVcsVcsDeviceGroup$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
