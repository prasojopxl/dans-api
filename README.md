## Getting Started

### Domain

https://dans.stagingaja.com/

### Login

POST
https://dans.stagingaja.com/auth/login
{
username: prasojodesigner@gmail.com
password: 1234567
}

### Register

POST
https://dans.stagingaja.com/auth/register
{
"email": "satuxx1@mail.com",
"password": "1234",
"name": "sappp"  
}

### Get All Users

GET
https://dans.stagingaja.com/users

### Get By ID

GET
https://dans.stagingaja.com/users/1

### DELETE USER By ID

DELETE
https://dans.stagingaja.com/users/3

## Get All Data Jobs

GET
https://dans.stagingaja.com/jobs

### Page Detail By ID

GET
https://dans.stagingaja.com/jobs/1

### Paging

GET
Page 1 with limit 3 item
https://dans.stagingaja.com/jobs?limit=3&page=1

### Filter data

GET filter by title
https://dans.stagingaja.com/jobs/search?title=developer

GET filter by type
https://dans.stagingaja.com/jobs/search?type=full time

GET filter by location
https://dans.stagingaja.com/jobs/search?location=berlin

GET filter by location, title, type
https://dans.stagingaja.com/jobs/search?location=berlin&title=flutter&type=full time
