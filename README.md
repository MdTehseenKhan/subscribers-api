# Subscribers API:

A simple REST API that helps you remember the YouTube channels you've subscribed to. It can be your personal assistant, if you want to make it `private` and want some changes in the API, I will do this for you. Contact me to buy it.

<a href="mailto:contact.tehseenkhan@gmail.com?subject=Subscribers%20API%20Buying%20Request&body=✍️Write%20me%20an%20Email" target="_blank">Contact me</a>

## Endpoints:

Currently hosted on https://subscribers-api.vercel.app/

1. GET Requests:
```js
// GET All Records
GET '/subscribers'

// GET a specific Record
GET '/subscribers/[id]'
```

2. POST Request:
```js
// Add a Record
POST '/subscribers'
{
  "name": "String",
  "channelSubscribed": "String",
}
```

3. PATCH request:
```js
// Update a Record
PATCH '/subscribers/[id]'
{
  "name": "String",
  "channelSubscribed": "String",
}
```

4. DELETE Request:
```js
// DELETE a Record
DELETE '/subscribers/[id]'
```

