# .HeartRateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**heartrateRouteHeartrateGet**](HeartRateApi.md#heartrateRouteHeartrateGet) | **GET** /v2/usercollection/heartrate | Get Heart Rate


# **heartrateRouteHeartrateGet**
> HeartRateResponse heartrateRouteHeartrateGet()

Returns available heart rate data for a specified Oura user within a given timeframe

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeartRateApi(configuration);

let body:.HeartRateApiHeartrateRouteHeartrateGetRequest = {
  // string (optional)
  startDatetime: "start_datetime_example",
  // string (optional)
  endDatetime: "end_datetime_example",
  // string (optional)
  nextToken: "next_token_example",
};

apiInstance.heartrateRouteHeartrateGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDatetime** | [**string**] |  | (optional) defaults to undefined
 **endDatetime** | [**string**] |  | (optional) defaults to undefined
 **nextToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**HeartRateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Query Parameter Validation Error |  -  |
**426** | Minimum App Version Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


