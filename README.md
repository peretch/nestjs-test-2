# nestjs-test-2

## Used car pricing API

### Basic flow

- Users sign up with mail/password
- Users get an estimate of how much their car is worth based on the make/model/year/mileage
- Users can report what they sold their vehicles for
- Admins have to approve reported sales

### Services

| Method and Route   | Body or Query String                                         | Description                                    |
| ------------------ | ------------------------------------------------------------ | ---------------------------------------------- |
| POST `auth/signup` | Body - `{ email, password }`                                 | Create a new user and sign in                  |
| POST `auth/signin` | Body - `{ email, password }`                                 | Sign in as an existing user                    |
| GET `/reports`     | QS - `make, model, year, mileage, longitude, latitude`       | Get an estimate for the cars value             |
| POST `/reports`    | Body - `{ make, model, year, mileage, longitude, latitude }` | Report how much a vehicle sold for             |
| PATCH `/reports`   | Body - `{ approved }`                                        | Approve or reject a report submitted by a user |
