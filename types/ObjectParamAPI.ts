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

import { ObservableDailyActivityApi } from "./ObservableAPI";
import { DailyActivityApiRequestFactory, DailyActivityApiResponseProcessor} from "../apis/DailyActivityApi";

export interface DailyActivityApiDailyActivityRouteDailyActivityGetRequest {
    /**
     * 
     * @type string
     * @memberof DailyActivityApidailyActivityRouteDailyActivityGet
     */
    startDate?: string
    /**
     * 
     * @type string
     * @memberof DailyActivityApidailyActivityRouteDailyActivityGet
     */
    endDate?: string
    /**
     * 
     * @type string
     * @memberof DailyActivityApidailyActivityRouteDailyActivityGet
     */
    nextToken?: string
}

export class ObjectDailyActivityApi {
    private api: ObservableDailyActivityApi

    public constructor(configuration: Configuration, requestFactory?: DailyActivityApiRequestFactory, responseProcessor?: DailyActivityApiResponseProcessor) {
        this.api = new ObservableDailyActivityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns Oura Daily Activity data for the specified Oura user within a given timeframe
     * Get Daily Activity
     * @param param the request object
     */
    public dailyActivityRouteDailyActivityGet(param: DailyActivityApiDailyActivityRouteDailyActivityGetRequest = {}, options?: Configuration): Promise<DailyActivityResponse> {
        return this.api.dailyActivityRouteDailyActivityGet(param.startDate, param.endDate, param.nextToken,  options).toPromise();
    }

}

import { ObservableHeartRateApi } from "./ObservableAPI";
import { HeartRateApiRequestFactory, HeartRateApiResponseProcessor} from "../apis/HeartRateApi";

export interface HeartRateApiHeartrateRouteHeartrateGetRequest {
    /**
     * 
     * @type string
     * @memberof HeartRateApiheartrateRouteHeartrateGet
     */
    startDatetime?: string
    /**
     * 
     * @type string
     * @memberof HeartRateApiheartrateRouteHeartrateGet
     */
    endDatetime?: string
    /**
     * 
     * @type string
     * @memberof HeartRateApiheartrateRouteHeartrateGet
     */
    nextToken?: string
}

export class ObjectHeartRateApi {
    private api: ObservableHeartRateApi

    public constructor(configuration: Configuration, requestFactory?: HeartRateApiRequestFactory, responseProcessor?: HeartRateApiResponseProcessor) {
        this.api = new ObservableHeartRateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns available heart rate data for a specified Oura user within a given timeframe
     * Get Heart Rate
     * @param param the request object
     */
    public heartrateRouteHeartrateGet(param: HeartRateApiHeartrateRouteHeartrateGetRequest = {}, options?: Configuration): Promise<HeartRateResponse> {
        return this.api.heartrateRouteHeartrateGet(param.startDatetime, param.endDatetime, param.nextToken,  options).toPromise();
    }

}

import { ObservablePersonalInfoApi } from "./ObservableAPI";
import { PersonalInfoApiRequestFactory, PersonalInfoApiResponseProcessor} from "../apis/PersonalInfoApi";

export interface PersonalInfoApiPersonalInfoRouteGetRequest {
}

export class ObjectPersonalInfoApi {
    private api: ObservablePersonalInfoApi

    public constructor(configuration: Configuration, requestFactory?: PersonalInfoApiRequestFactory, responseProcessor?: PersonalInfoApiResponseProcessor) {
        this.api = new ObservablePersonalInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns personal info data for the specified Oura user.
     * Get Personal Info
     * @param param the request object
     */
    public personalInfoRouteGet(param: PersonalInfoApiPersonalInfoRouteGetRequest = {}, options?: Configuration): Promise<PersonalInfoResponse> {
        return this.api.personalInfoRouteGet( options).toPromise();
    }

}

import { ObservableSessionsApi } from "./ObservableAPI";
import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";

export interface SessionsApiSessionsRouteSessionGetRequest {
    /**
     * 
     * @type string
     * @memberof SessionsApisessionsRouteSessionGet
     */
    startDate?: string
    /**
     * 
     * @type string
     * @memberof SessionsApisessionsRouteSessionGet
     */
    endDate?: string
    /**
     * 
     * @type string
     * @memberof SessionsApisessionsRouteSessionGet
     */
    nextToken?: string
}

export class ObjectSessionsApi {
    private api: ObservableSessionsApi

    public constructor(configuration: Configuration, requestFactory?: SessionsApiRequestFactory, responseProcessor?: SessionsApiResponseProcessor) {
        this.api = new ObservableSessionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns available Oura session data for the specified Oura user within a given timeframe
     * Get Sessions
     * @param param the request object
     */
    public sessionsRouteSessionGet(param: SessionsApiSessionsRouteSessionGetRequest = {}, options?: Configuration): Promise<SessionResponse> {
        return this.api.sessionsRouteSessionGet(param.startDate, param.endDate, param.nextToken,  options).toPromise();
    }

}

import { ObservableTagsApi } from "./ObservableAPI";
import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";

export interface TagsApiTagsRouteTagGetRequest {
    /**
     * 
     * @type string
     * @memberof TagsApitagsRouteTagGet
     */
    startDate?: string
    /**
     * 
     * @type string
     * @memberof TagsApitagsRouteTagGet
     */
    endDate?: string
    /**
     * 
     * @type string
     * @memberof TagsApitagsRouteTagGet
     */
    nextToken?: string
}

export class ObjectTagsApi {
    private api: ObservableTagsApi

    public constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns Oura tags data for the specified Oura user within a given timeframe
     * Get Tags
     * @param param the request object
     */
    public tagsRouteTagGet(param: TagsApiTagsRouteTagGetRequest = {}, options?: Configuration): Promise<TagResponse> {
        return this.api.tagsRouteTagGet(param.startDate, param.endDate, param.nextToken,  options).toPromise();
    }

}

import { ObservableWorkoutsApi } from "./ObservableAPI";
import { WorkoutsApiRequestFactory, WorkoutsApiResponseProcessor} from "../apis/WorkoutsApi";

export interface WorkoutsApiWorkoutsRouteWorkoutGetRequest {
    /**
     * 
     * @type string
     * @memberof WorkoutsApiworkoutsRouteWorkoutGet
     */
    startDate?: string
    /**
     * 
     * @type string
     * @memberof WorkoutsApiworkoutsRouteWorkoutGet
     */
    endDate?: string
    /**
     * 
     * @type string
     * @memberof WorkoutsApiworkoutsRouteWorkoutGet
     */
    nextToken?: string
}

export class ObjectWorkoutsApi {
    private api: ObservableWorkoutsApi

    public constructor(configuration: Configuration, requestFactory?: WorkoutsApiRequestFactory, responseProcessor?: WorkoutsApiResponseProcessor) {
        this.api = new ObservableWorkoutsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns available Oura workout data for the specified Oura user within a given timeframe
     * Get Workouts
     * @param param the request object
     */
    public workoutsRouteWorkoutGet(param: WorkoutsApiWorkoutsRouteWorkoutGetRequest = {}, options?: Configuration): Promise<WorkoutResponse> {
        return this.api.workoutsRouteWorkoutGet(param.startDate, param.endDate, param.nextToken,  options).toPromise();
    }

}
