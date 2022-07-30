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
import type { HRTSample } from './HRTSample';
import {
    HRTSampleFromJSON,
    HRTSampleFromJSONTyped,
    HRTSampleToJSON,
} from './HRTSample';
import type { HRVSample } from './HRVSample';
import {
    HRVSampleFromJSON,
    HRVSampleFromJSONTyped,
    HRVSampleToJSON,
} from './HRVSample';
import type { Sample } from './Sample';
import {
    SampleFromJSON,
    SampleFromJSONTyped,
    SampleToJSON,
} from './Sample';

/**
 * 
 * @export
 * @interface SessionModel
 */
export interface SessionModel {
    /**
     * The date when the session occurred
     * @type {Date}
     * @memberof SessionModel
     */
    day: Date;
    /**
     * The start datetime when the session occurred
     * @type {string}
     * @memberof SessionModel
     */
    startDatetime: string;
    /**
     * The end datetime when the session occurred
     * @type {string}
     * @memberof SessionModel
     */
    endDatetime: string;
    /**
     * The session type:
     * * ```breathing```
     * * ```meditation```
     * * ```nap```
     * * ```relaxation```
     * * ```rest```
     * * ```body_status```
     * @type {string}
     * @memberof SessionModel
     */
    type: string;
    /**
     * 
     * @type {HRTSample}
     * @memberof SessionModel
     */
    heartRate?: HRTSample;
    /**
     * 
     * @type {HRVSample}
     * @memberof SessionModel
     */
    heartRateVariability?: HRVSample;
    /**
     * The user's selected mood after the session:
     * * ```bad```
     * * ```worse```
     * * ```same```
     * * ```good```
     * * ```great```
     * @type {string}
     * @memberof SessionModel
     */
    mood?: string;
    /**
     * 
     * @type {Sample}
     * @memberof SessionModel
     */
    motionCount?: Sample;
}

/**
 * Check if a given object implements the SessionModel interface.
 */
export function instanceOfSessionModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "day" in value;
    isInstance = isInstance && "startDatetime" in value;
    isInstance = isInstance && "endDatetime" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SessionModelFromJSON(json: any): SessionModel {
    return SessionModelFromJSONTyped(json, false);
}

export function SessionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'day': (new Date(json['day'])),
        'startDatetime': json['start_datetime'],
        'endDatetime': json['end_datetime'],
        'type': json['type'],
        'heartRate': !exists(json, 'heart_rate') ? undefined : HRTSampleFromJSON(json['heart_rate']),
        'heartRateVariability': !exists(json, 'heart_rate_variability') ? undefined : HRVSampleFromJSON(json['heart_rate_variability']),
        'mood': !exists(json, 'mood') ? undefined : json['mood'],
        'motionCount': !exists(json, 'motion_count') ? undefined : SampleFromJSON(json['motion_count']),
    };
}

export function SessionModelToJSON(value?: SessionModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'day': (value.day.toISOString().substr(0,10)),
        'start_datetime': value.startDatetime,
        'end_datetime': value.endDatetime,
        'type': value.type,
        'heart_rate': HRTSampleToJSON(value.heartRate),
        'heart_rate_variability': HRVSampleToJSON(value.heartRateVariability),
        'mood': value.mood,
        'motion_count': SampleToJSON(value.motionCount),
    };
}

