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
import type { ActivityContributors } from './ActivityContributors';
import {
    ActivityContributorsFromJSON,
    ActivityContributorsFromJSONTyped,
    ActivityContributorsToJSON,
} from './ActivityContributors';
import type { METSample } from './METSample';
import {
    METSampleFromJSON,
    METSampleFromJSONTyped,
    METSampleToJSON,
} from './METSample';

/**
 * 
 * @export
 * @interface DailyActivityModel
 */
export interface DailyActivityModel {
    /**
     * 5-minute activity classification for the activity period:
     * * ```0```	non wear
     * * ```1``` rest
     * * ```2``` inactive
     * * ```3``` low activity
     * * ```4``` medium activity
     * * ```5``` high activity
     * @type {string}
     * @memberof DailyActivityModel
     */
    class5Min?: string;
    /**
     * Activity score in range ```[1, 100]```
     * @type {number}
     * @memberof DailyActivityModel
     */
    score?: number;
    /**
     * Active calories expended (in kilocalories)
     * @type {number}
     * @memberof DailyActivityModel
     */
    activeCalories: number;
    /**
     * Average metabolic equivalent (MET) in minutes
     * @type {number}
     * @memberof DailyActivityModel
     */
    averageMetMinutes: number;
    /**
     * 
     * @type {ActivityContributors}
     * @memberof DailyActivityModel
     */
    contributors: ActivityContributors;
    /**
     * Equivalent walking distance (in meters) of energy expenditure
     * @type {number}
     * @memberof DailyActivityModel
     */
    equivalentWalkingDistance: number;
    /**
     * High activity metabolic equivalent (MET) in minutes
     * @type {number}
     * @memberof DailyActivityModel
     */
    highActivityMetMinutes: number;
    /**
     * High activity metabolic equivalent (MET) in seconds
     * @type {number}
     * @memberof DailyActivityModel
     */
    highActivityTime: number;
    /**
     * Number of inactivity alerts received
     * @type {number}
     * @memberof DailyActivityModel
     */
    inactivityAlerts: number;
    /**
     * Low activity metabolic equivalent (MET) in minutes
     * @type {number}
     * @memberof DailyActivityModel
     */
    lowActivityMetMinutes: number;
    /**
     * Low activity metabolic equivalent (MET) in seconds
     * @type {number}
     * @memberof DailyActivityModel
     */
    lowActivityTime: number;
    /**
     * Medium activity metabolic equivalent (MET) in minutes
     * @type {number}
     * @memberof DailyActivityModel
     */
    mediumActivityMetMinutes: number;
    /**
     * Medium activity metabolic equivalent (MET) in seconds
     * @type {number}
     * @memberof DailyActivityModel
     */
    mediumActivityTime: number;
    /**
     * 
     * @type {METSample}
     * @memberof DailyActivityModel
     */
    met: METSample;
    /**
     * Remaining meters to target (from ```target_meters```)
     * @type {number}
     * @memberof DailyActivityModel
     */
    metersToTarget: number;
    /**
     * The time (in seconds) in which the ring was not worn
     * @type {number}
     * @memberof DailyActivityModel
     */
    nonWearTime: number;
    /**
     * Resting time (in seconds)
     * @type {number}
     * @memberof DailyActivityModel
     */
    restingTime: number;
    /**
     * Sedentary metabolic equivalent (MET) in minutes
     * @type {number}
     * @memberof DailyActivityModel
     */
    sedentaryMetMinutes: number;
    /**
     * Sedentary metabolic equivalent (MET) in seconds
     * @type {number}
     * @memberof DailyActivityModel
     */
    sedentaryTime: number;
    /**
     * Total number of steps taken
     * @type {number}
     * @memberof DailyActivityModel
     */
    steps: number;
    /**
     * Daily activity target (in kilocalories)
     * @type {number}
     * @memberof DailyActivityModel
     */
    targetCalories: number;
    /**
     * Daily activity target (in meters)
     * @type {number}
     * @memberof DailyActivityModel
     */
    targetMeters: number;
    /**
     * Total calories expended (in kilocalories) 
     * @type {number}
     * @memberof DailyActivityModel
     */
    totalCalories: number;
    /**
     * The ```YYYY-MM-DD``` formatted local date indicating when the daily activity occurred
     * @type {Date}
     * @memberof DailyActivityModel
     */
    day: Date;
    /**
     * ISO 8601 formatted local timestamp indicating the start datetime of when the daily activity occurred
     * @type {string}
     * @memberof DailyActivityModel
     */
    timestamp: string;
}

/**
 * Check if a given object implements the DailyActivityModel interface.
 */
export function instanceOfDailyActivityModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "activeCalories" in value;
    isInstance = isInstance && "averageMetMinutes" in value;
    isInstance = isInstance && "contributors" in value;
    isInstance = isInstance && "equivalentWalkingDistance" in value;
    isInstance = isInstance && "highActivityMetMinutes" in value;
    isInstance = isInstance && "highActivityTime" in value;
    isInstance = isInstance && "inactivityAlerts" in value;
    isInstance = isInstance && "lowActivityMetMinutes" in value;
    isInstance = isInstance && "lowActivityTime" in value;
    isInstance = isInstance && "mediumActivityMetMinutes" in value;
    isInstance = isInstance && "mediumActivityTime" in value;
    isInstance = isInstance && "met" in value;
    isInstance = isInstance && "metersToTarget" in value;
    isInstance = isInstance && "nonWearTime" in value;
    isInstance = isInstance && "restingTime" in value;
    isInstance = isInstance && "sedentaryMetMinutes" in value;
    isInstance = isInstance && "sedentaryTime" in value;
    isInstance = isInstance && "steps" in value;
    isInstance = isInstance && "targetCalories" in value;
    isInstance = isInstance && "targetMeters" in value;
    isInstance = isInstance && "totalCalories" in value;
    isInstance = isInstance && "day" in value;
    isInstance = isInstance && "timestamp" in value;

    return isInstance;
}

export function DailyActivityModelFromJSON(json: any): DailyActivityModel {
    return DailyActivityModelFromJSONTyped(json, false);
}

export function DailyActivityModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DailyActivityModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'class5Min': !exists(json, 'class_5_min') ? undefined : json['class_5_min'],
        'score': !exists(json, 'score') ? undefined : json['score'],
        'activeCalories': json['active_calories'],
        'averageMetMinutes': json['average_met_minutes'],
        'contributors': ActivityContributorsFromJSON(json['contributors']),
        'equivalentWalkingDistance': json['equivalent_walking_distance'],
        'highActivityMetMinutes': json['high_activity_met_minutes'],
        'highActivityTime': json['high_activity_time'],
        'inactivityAlerts': json['inactivity_alerts'],
        'lowActivityMetMinutes': json['low_activity_met_minutes'],
        'lowActivityTime': json['low_activity_time'],
        'mediumActivityMetMinutes': json['medium_activity_met_minutes'],
        'mediumActivityTime': json['medium_activity_time'],
        'met': METSampleFromJSON(json['met']),
        'metersToTarget': json['meters_to_target'],
        'nonWearTime': json['non_wear_time'],
        'restingTime': json['resting_time'],
        'sedentaryMetMinutes': json['sedentary_met_minutes'],
        'sedentaryTime': json['sedentary_time'],
        'steps': json['steps'],
        'targetCalories': json['target_calories'],
        'targetMeters': json['target_meters'],
        'totalCalories': json['total_calories'],
        'day': (new Date(json['day'])),
        'timestamp': json['timestamp'],
    };
}

export function DailyActivityModelToJSON(value?: DailyActivityModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'class_5_min': value.class5Min,
        'score': value.score,
        'active_calories': value.activeCalories,
        'average_met_minutes': value.averageMetMinutes,
        'contributors': ActivityContributorsToJSON(value.contributors),
        'equivalent_walking_distance': value.equivalentWalkingDistance,
        'high_activity_met_minutes': value.highActivityMetMinutes,
        'high_activity_time': value.highActivityTime,
        'inactivity_alerts': value.inactivityAlerts,
        'low_activity_met_minutes': value.lowActivityMetMinutes,
        'low_activity_time': value.lowActivityTime,
        'medium_activity_met_minutes': value.mediumActivityMetMinutes,
        'medium_activity_time': value.mediumActivityTime,
        'met': METSampleToJSON(value.met),
        'meters_to_target': value.metersToTarget,
        'non_wear_time': value.nonWearTime,
        'resting_time': value.restingTime,
        'sedentary_met_minutes': value.sedentaryMetMinutes,
        'sedentary_time': value.sedentaryTime,
        'steps': value.steps,
        'target_calories': value.targetCalories,
        'target_meters': value.targetMeters,
        'total_calories': value.totalCalories,
        'day': (value.day.toISOString().substr(0,10)),
        'timestamp': value.timestamp,
    };
}

