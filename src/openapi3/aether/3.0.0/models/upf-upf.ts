// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
import { AdditionalPropertyUnchanged } from './additional-property-unchanged';
export interface UpfUpf {

  /**
   * Address of UPF
   */
  address: string;

  /**
   * description of this UPF
   */
  description?: string;

  /**
   * display name to use in GUI or CLI
   */
  'display-name'?: string;

  /**
   * Link to enterprise that owns this Access Point List
   */
  enterprise: string;

  /**
   * ID for this upf.
   */
  id: string;

  /**
   * Port for UPF
   */
  port: number;

  [key: string]: AdditionalPropertyUnchanged | number | string | undefined;
}
