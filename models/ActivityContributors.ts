/**
 * Oura API
 * # Overview   The Oura API allows Oura users and partner applications to improve their user experience with Oura data.  This document describes the Oura API Version 2 (V2), which supports access to the latest Oura Ring data types.  For access to other data types—which have not yet migrated to V2—refer to the [Oura API Version 1 (V1)](https://cloud.ouraring.com/docs/) documentation.  # Data Access  Individual Oura users can access their own data through the API by using a [Personal Access Token](https://cloud.ouraring.com/personal-access-tokens).  If you want to retrieve data for multiple users, a registered [API Application](https://cloud.ouraring.com/oauth/applications) is required.  API Applications are limited to **10** users before requiring approval from Oura. There is no limit once an application is approved.  Additionally, Oura users **must provide consent** to share each data type an API Application has access to.  All data access requests through the Oura API require [Authentication](https://cloud.ouraring.com/docs/authentication).  Additionally, we recommend that Oura users keep their mobile app updated to support API access for the latest data types.  The Oura API V2 returns a 426 response code for users who do not have an updated version of the app installed.  # Authentication  The Oura API provides two methods for Authentication: (1) the OAuth2 protocol and (2) Personal Access Tokens. For more information on the OAuth2 flow, see our [Authentication instructions](https://cloud.ouraring.com/docs/authentication).  Access tokens must be included in the request header as follows: ```http GET /v2/usercollection/personal_info HTTP/1.1 Host: api.ouraring.com Authorization: Bearer <token> ```  # Oura HTTP Response Codes  | Response Code                        | Description | | ------------------------------------ | - | | 200 OK                               | Successful Response         | | 400 Query Parameter Validation Error | The request contains query parameters that are invalid or incorrectly formatted. | | 426 Minimum App Version Error        | The Oura user's mobile app does not meet the minimum app version requirement to support sharing the requested data type. The Oura user must update their mobile app to enable API access for the requested data type. | | 429 Request Rate Limit Exceeded        | The API is rate limited to 5000 requests in a 5 minute period. You will receive a 429 error code if you exceed this limit. [Contact us](mailto:api-support@ouraring.com) if you expect your usage to exceed this limit.| 
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Activity score contributors
*/
export class ActivityContributors {
    /**
    * Contribution of meeting previous 7-day daily activity targets in range ```[1, 100]```
    */
    'meetDailyTargets'?: number;
    /**
    * Contribution of previous 24-hour inactivity alerts in range ```[1, 100]```
    */
    'moveEveryHour'?: number;
    /**
    * Contribution of previous 7-day recovery time in range ```[1, 100]```
    */
    'recoveryTime'?: number;
    /**
    * Contribution of previous 24-hour activity in range ```[1, 100]```
    */
    'stayActive'?: number;
    /**
    * Contribution of previous 7-day exercise frequency in range ```[1, 100]```
    */
    'trainingFrequency'?: number;
    /**
    * Contribution of previous 7-day exercise volume in range ```[1, 100]```
    */
    'trainingVolume'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meetDailyTargets",
            "baseName": "meet_daily_targets",
            "type": "number",
            "format": ""
        },
        {
            "name": "moveEveryHour",
            "baseName": "move_every_hour",
            "type": "number",
            "format": ""
        },
        {
            "name": "recoveryTime",
            "baseName": "recovery_time",
            "type": "number",
            "format": ""
        },
        {
            "name": "stayActive",
            "baseName": "stay_active",
            "type": "number",
            "format": ""
        },
        {
            "name": "trainingFrequency",
            "baseName": "training_frequency",
            "type": "number",
            "format": ""
        },
        {
            "name": "trainingVolume",
            "baseName": "training_volume",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActivityContributors.attributeTypeMap;
    }

    public constructor() {
    }
}

