import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DailyActivityApiRequestFactory, DailyActivityApiResponseProcessor} from "../apis/DailyActivityApi";
export class ObservableDailyActivityApi {
    private requestFactory: DailyActivityApiRequestFactory;
    private responseProcessor: DailyActivityApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DailyActivityApiRequestFactory,
        responseProcessor?: DailyActivityApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DailyActivityApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DailyActivityApiResponseProcessor();
    }

    /**
     * Returns Oura Daily Activity data for the specified Oura user within a given timeframe
     * Get Daily Activity
     * @param startDate 
     * @param endDate 
     * @param nextToken 
     */
    public dailyActivityRouteDailyActivityGet(startDate?: string, endDate?: string, nextToken?: string, _options?: Configuration): Observable<DailyActivityResponse> {
        const requestContextPromise = this.requestFactory.dailyActivityRouteDailyActivityGet(startDate, endDate, nextToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dailyActivityRouteDailyActivityGet(rsp)));
            }));
    }

}

import { HeartRateApiRequestFactory, HeartRateApiResponseProcessor} from "../apis/HeartRateApi";
export class ObservableHeartRateApi {
    private requestFactory: HeartRateApiRequestFactory;
    private responseProcessor: HeartRateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HeartRateApiRequestFactory,
        responseProcessor?: HeartRateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HeartRateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HeartRateApiResponseProcessor();
    }

    /**
     * Returns available heart rate data for a specified Oura user within a given timeframe
     * Get Heart Rate
     * @param startDatetime 
     * @param endDatetime 
     * @param nextToken 
     */
    public heartrateRouteHeartrateGet(startDatetime?: string, endDatetime?: string, nextToken?: string, _options?: Configuration): Observable<HeartRateResponse> {
        const requestContextPromise = this.requestFactory.heartrateRouteHeartrateGet(startDatetime, endDatetime, nextToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.heartrateRouteHeartrateGet(rsp)));
            }));
    }

}

import { PersonalInfoApiRequestFactory, PersonalInfoApiResponseProcessor} from "../apis/PersonalInfoApi";
export class ObservablePersonalInfoApi {
    private requestFactory: PersonalInfoApiRequestFactory;
    private responseProcessor: PersonalInfoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PersonalInfoApiRequestFactory,
        responseProcessor?: PersonalInfoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PersonalInfoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PersonalInfoApiResponseProcessor();
    }

    /**
     * Returns personal info data for the specified Oura user.
     * Get Personal Info
     */
    public personalInfoRouteGet(_options?: Configuration): Observable<PersonalInfoResponse> {
        const requestContextPromise = this.requestFactory.personalInfoRouteGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.personalInfoRouteGet(rsp)));
            }));
    }

}

import { SessionsApiRequestFactory, SessionsApiResponseProcessor} from "../apis/SessionsApi";
export class ObservableSessionsApi {
    private requestFactory: SessionsApiRequestFactory;
    private responseProcessor: SessionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionsApiRequestFactory,
        responseProcessor?: SessionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SessionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SessionsApiResponseProcessor();
    }

    /**
     * Returns available Oura session data for the specified Oura user within a given timeframe
     * Get Sessions
     * @param startDate 
     * @param endDate 
     * @param nextToken 
     */
    public sessionsRouteSessionGet(startDate?: string, endDate?: string, nextToken?: string, _options?: Configuration): Observable<SessionResponse> {
        const requestContextPromise = this.requestFactory.sessionsRouteSessionGet(startDate, endDate, nextToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sessionsRouteSessionGet(rsp)));
            }));
    }

}

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class ObservableTagsApi {
    private requestFactory: TagsApiRequestFactory;
    private responseProcessor: TagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsApiResponseProcessor();
    }

    /**
     * Returns Oura tags data for the specified Oura user within a given timeframe
     * Get Tags
     * @param startDate 
     * @param endDate 
     * @param nextToken 
     */
    public tagsRouteTagGet(startDate?: string, endDate?: string, nextToken?: string, _options?: Configuration): Observable<TagResponse> {
        const requestContextPromise = this.requestFactory.tagsRouteTagGet(startDate, endDate, nextToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsRouteTagGet(rsp)));
            }));
    }

}

import { WorkoutsApiRequestFactory, WorkoutsApiResponseProcessor} from "../apis/WorkoutsApi";
export class ObservableWorkoutsApi {
    private requestFactory: WorkoutsApiRequestFactory;
    private responseProcessor: WorkoutsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkoutsApiRequestFactory,
        responseProcessor?: WorkoutsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorkoutsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorkoutsApiResponseProcessor();
    }

    /**
     * Returns available Oura workout data for the specified Oura user within a given timeframe
     * Get Workouts
     * @param startDate 
     * @param endDate 
     * @param nextToken 
     */
    public workoutsRouteWorkoutGet(startDate?: string, endDate?: string, nextToken?: string, _options?: Configuration): Observable<WorkoutResponse> {
        const requestContextPromise = this.requestFactory.workoutsRouteWorkoutGet(startDate, endDate, nextToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workoutsRouteWorkoutGet(rsp)));
            }));
    }

}
