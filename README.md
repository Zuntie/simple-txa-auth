# simple-txa-auth
Simple API that uses txAdmin *(Authorize txAdmin)* as an authorization method.

## Why?
To learn how txAdmin authentication works with FiveM endpoints and to explore a simple integration method for educational purposes.

## Disclaimer
#### Legal Notice
This project is intended for educational and informational purposes only. It is not affiliated with, endorsed, or sponsored by any third-party entities mentioned or referenced in the code. The data accessed and processed by this project is sourced from publicly available endpoints and is used in compliance with fair use principles.

#### Attribution
This project is inspired by the source code from [tabarra/txAdmin](https://github.com/tabarra/txAdmin). The [core/webroutes
/authentication](https://github.com/tabarra/txAdmin/tree/master/core/webroutes/authentication) module was particularly helpful for my research. I want to extend my gratitude to Tabarra, the contributors behind txAdmin, and the CitizenFX Collective.

#### License
This project is licensed under the MIT License.

#### Usage
This project is intended for educational purposes only. It may not be fully tested or optimized for production use, and I do not recommend deploying it in a live environment. Use at your own risk.

#### Contact
For any legal questions or concerns regarding this project or its usage, please contact me (the author) at zuntiedev@gmail.com.
<br>

## API Reference
### Endpoints
| Endpoint    | Method   | Description                |
| :---------- | :------- | :------------------------- |
| `/`         | `GET`    | Returns a simple "Hello World" message. |
| `/login`    | `GET`    | Redirects to the `idms.fivem.net` authentication interface for user authorization. |
| `/callback` | `GET`    | Handles the authorization callback from `idms.fivem.net` after login. |

### Usage
1. Navigate to `/login` to initiate the authentication process.
2. After authorizing, you will be redirected to `/callback`.
* The `/` endpoint will return a "Hello World" message, indicating that the API is running.

### Example
Work in Progress...