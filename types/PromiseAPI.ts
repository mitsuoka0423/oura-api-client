import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ActivityContributors } from '../models/ActivityContributors';
import { DailyActivityModel } from '../models/DailyActivityModel';
import { DailyActivityResponse } from '../models/DailyActivityResponse';
import { HRTSample } from '../models/HRTSample';
import { HRVSample } from '../models/HRVSample';
import { HeartRateModel } from '../models/HeartRateModel';
import { HeartRateResponse } from '../models/HeartRateResponse';
import { METSample } from '../models/METSample';
import { ModelError } from '../models/ModelError';
import { PersonalInfoResponse } from '../models/PersonalInfoResponse';
import { Sample } from '../models/Sample';
import { SessionModel } from '../models/SessionModel';
import { SessionResponse } from '../models/SessionResponse';
import { TagModel } from '../models/TagModel';
import { TagResponse } from '../models/TagResponse';
import { WorkoutModel } from '../models/WorkoutModel';
import { WorkoutResponse } from '../models/WorkoutResponse';
import { ObservableDailyActivityApi } from './ObservableAPI';

import { DailyActivityApiRequestFactory, DailyActivityApiResponseProcessor} from "../apis/DailyActivityApi";
export class PromiseDailyActivityApi {
    private api: ObservableDailyActivityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DailyActivityApiRequestFactory,
        responseProcessor?: DailyActivityApiResponseProcessor
    ) {
        this.api = new ObservableDailyActivityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns Oura Daily Activity data for the specified Oura user within a given timeframe
     * Get Daily Activity
     * @param startDate 
     * @param endDate 
     * @param nextToken 
     */
    public dailyActivityRouteDailyActivityGet(startDate?: string, endDate?: string, nextToken?: string, _options?: Configuration): Promise<DailyActivityResponse> {
        const result = this.api.dailyActivityRouteDailyActivityGet(startDate, endDate, nextToken, _options);
        return result.toPromise();
    }


}



import { ObservableHeartRateApi } from './ObservableAPI';

import { HeartRateApiRequestFactory, HeartRateApiResponseProcessor} from "../apis/HeartRateApi";
export class PromiseHeartRateApi {
    private api: ObservableHeartRateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HeartRateApiRequestFactory,
        responseProcessor?: HeartRateApiResponseProcessor
    ) {
        this.api = new ObservableHeartRateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns available heart rate data for a specified Oura user within a given timeframe
     * Get Heart Rate
     * @param startDatetime 
     * @param endDatetime 
     * @param nextToken 
     */
    public heartrateRouteHeartrateGet(startDatetime?: string, endDatetime?: string, nextToken?: string, _options?: Configuration): Promise<HeartRateResponse> {
        const result = this.api.heartrateRouteHeartrateGet(startDatetime, endDatetime, nextToken, _options);
        return result.toPromise();
    }


}



import { ObservablePersonalInfoApi } from './ObservableAPI';

import { PersonalInfoApiRequestFactory, PersonalInfoApiResponseProcessor} from "../apis/PersonalInfoApi";
export class PromisePersonalInfoApi {
    private api: ObservablePersonalInfoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonalInfoApiRequestFactory,
        responseProcessor?: PersonalInfoApiResponseProcessor
    ) {
        this.api = new ObservablePersonalInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns personal info data for the specified Oura user.
     * Get Personal Info
     */
    public personalInfoRouteGet(_options?: Configuration): Promise<PersonalInfoResponse> {
        const result = this.api.personalInfoRouteGet(_options);
        return result.toPromise();
    }


}



import { ObservableSessionsApi } from './ObservableAPI';

import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";
export class PromiseSessionsApi {
    private api: ObservableSessionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionsApiRequestFactory,
        responseProcessor?: SessionsApiResponseProcessor
    ) {
        this.api = new ObservableSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns available Oura session data for the specified Oura user within a given timeframe
     * Get Sessions
     * @param startDate 
     * @param endDate 
     * @param nextToken 
     */
    public sessionsRouteSessionGet(startDate?: string, endDate?: string, nextToken?: string, _options?: Configuration): Promise<SessionResponse> {
        const result = this.api.sessionsRouteSessionGet(startDate, endDate, nextToken, _options);
        return result.toPromise();
    }


}



import { ObservableTagsApi } from './ObservableAPI';

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class PromiseTagsApi {
    private api: ObservableTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns Oura tags data for the specified Oura user within a given timeframe
     * Get Tags
     * @param startDate 
     * @param endDate 
     * @param nextToken 
     */
    public tagsRouteTagGet(startDate?: string, endDate?: string, nextToken?: string, _options?: Configuration): Promise<TagResponse> {
        const result = this.api.tagsRouteTagGet(startDate, endDate, nextToken, _options);
        return result.toPromise();
    }


}



import { ObservableWorkoutsApi } from './ObservableAPI';

import { WorkoutsApiRequestFactory, WorkoutsApiResponseProcessor} from "../apis/WorkoutsApi";
export class PromiseWorkoutsApi {
    private api: ObservableWorkoutsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkoutsApiRequestFactory,
        responseProcessor?: WorkoutsApiResponseProcessor
    ) {
        this.api = new ObservableWorkoutsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns available Oura workout data for the specified Oura user within a given timeframe
     * Get Workouts
     * @param startDate 
     * @param endDate 
     * @param nextToken 
     */
    public workoutsRouteWorkoutGet(startDate?: string, endDate?: string, nextToken?: string, _options?: Configuration): Promise<WorkoutResponse> {
        const result = this.api.workoutsRouteWorkoutGet(startDate, endDate, nextToken, _options);
        return result.toPromise();
    }


}



