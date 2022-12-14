# .PersonalInfoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personalInfoRouteGet**](PersonalInfoApi.md#personalInfoRouteGet) | **GET** /v2/usercollection/personal_info | Get Personal Info


# **personalInfoRouteGet**
> PersonalInfoResponse personalInfoRouteGet()

Returns personal info data for the specified Oura user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PersonalInfoApi(configuration);

let body:any = {};

apiInstance.personalInfoRouteGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PersonalInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


