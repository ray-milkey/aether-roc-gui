// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
import { AdditionalPropertyUnchanged } from './additional-property-unchanged';
import { ApplicationApplicationEndpointMbr } from './application-application-endpoint-mbr';
export interface ApplicationApplicationEndpoint {

  /**
   * display name to use in GUI or CLI
   */
  'display-name'?: string;

  /**
   * Id of this endpoint
   */
  'endpoint-id': string;
  mbr?: ApplicationApplicationEndpointMbr;

  /**
   * Last port in range
   */
  'port-end'?: number;

  /**
   * First port in range
   */
  'port-start': number;

  /**
   * Protocol of this endpoint
   */
  protocol?: string;

  /**
   * Link to traffic class
   */
  'traffic-class'?: string;

  [key: string]: AdditionalPropertyUnchanged | ApplicationApplicationEndpointMbr | number | string | undefined;
}
