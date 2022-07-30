# .DailyActivityApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dailyActivityRouteDailyActivityGet**](DailyActivityApi.md#dailyActivityRouteDailyActivityGet) | **GET** /v2/usercollection/daily_activity | Get Daily Activity


# **dailyActivityRouteDailyActivityGet**
> DailyActivityResponse dailyActivityRouteDailyActivityGet()

Returns Oura Daily Activity data for the specified Oura user within a given timeframe

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DailyActivityApi(configuration);

let body:.DailyActivityApiDailyActivityRouteDailyActivityGetRequest = {
  // string (optional)
  startDate: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  endDate: new Date('1970-01-01').toISOString().split('T')[0];,
  // string (optional)
  nextToken: "next_token_example",
};

apiInstance.dailyActivityRouteDailyActivityGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | [**string**] |  | (optional) defaults to undefined
 **endDate** | [**string**] |  | (optional) defaults to undefined
 **nextToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**DailyActivityResponse**

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


