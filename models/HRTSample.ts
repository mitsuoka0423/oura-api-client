/* tslint:disable */
/* eslint-disable */
/**
 * Oura API
 * # Overview   The Oura API allows Oura users and partner applications to improve their user experience with Oura data.  This document describes the Oura API Version 2 (V2), which supports access to the latest Oura Ring data types.  For access to other data types—which have not yet migrated to V2—refer to the [Oura API Version 1 (V1)](https://cloud.ouraring.com/docs/) documentation.  # Data Access  Individual Oura users can access their own data through the API by using a [Personal Access Token](https://cloud.ouraring.com/personal-access-tokens).  If you want to retrieve data for multiple users, a registered [API Application](https://cloud.ouraring.com/oauth/applications) is required.  API Applications are limited to **10** users before requiring approval from Oura. There is no limit once an application is approved.  Additionally, Oura users **must provide consent** to share each data type an API Application has access to.  All data access requests through the Oura API require [Authentication](https://cloud.ouraring.com/docs/authentication).  Additionally, we recommend that Oura users keep their mobile app updated to support API access for the latest data types.  The Oura API V2 returns a 426 response code for users who do not have an updated version of the app installed.  # Authentication  The Oura API provides two methods for Authentication: (1) the OAuth2 protocol and (2) Personal Access Tokens. For more information on the OAuth2 flow, see our [Authentication instructions](https://cloud.ouraring.com/docs/authentication).  Access tokens must be included in the request header as follows: ```http GET /v2/usercollection/personal_info HTTP/1.1 Host: api.ouraring.com Authorization: Bearer <token> ```  # Oura HTTP Response Codes  | Response Code                        | Description | | ------------------------------------ | - | | 200 OK                               | Successful Response         | | 400 Query Parameter Validation Error | The request contains query parameters that are invalid or incorrectly formatted. | | 426 Minimum App Version Error        | The Oura user\'s mobile app does not meet the minimum app version requirement to support sharing the requested data type. The Oura user must update their mobile app to enable API access for the requested data type. | | 429 Request Rate Limit Exceeded        | The API is rate limited to 5000 requests in a 5 minute period. You will receive a 429 error code if you exceed this limit. [Contact us](mailto:api-support@ouraring.com) if you expect your usage to exceed this limit.| 
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Timeseries data represented by an array of numbers; this data is available for sessions longer than 5 minutes
 * @export
 * @interface HRTSample
 */
export interface HRTSample {
    /**
     * The number of seconds between records
     * @type {number}
     * @memberof HRTSample
     */
    interval: number;
    /**
     * The recorded values
     * @type {Array<number>}
     * @memberof HRTSample
     */
    items: Array<number>;
    /**
     * ISO 8601 formatted local timestamp indicating the start datetime of when the data was collected
     * @type {string}
     * @memberof HRTSample
     */
    timestamp: string;
}

/**
 * Check if a given object implements the HRTSample interface.
 */
export function instanceOfHRTSample(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "interval" in value;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "timestamp" in value;

    return isInstance;
}

export function HRTSampleFromJSON(json: any): HRTSample {
    return HRTSampleFromJSONTyped(json, false);
}

export function HRTSampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): HRTSample {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'interval': json['interval'],
        'items': json['items'],
        'timestamp': json['timestamp'],
    };
}

export function HRTSampleToJSON(value?: HRTSample | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'interval': value.interval,
        'items': value.items,
        'timestamp': value.timestamp,
    };
}

