# Infinity Redirect Blocker

Sometimes you can't read the rss with your RSS reader because of an infinite loop, you can use this tool to block infinite redirects.

Infinite redirects example by [W3C RSS check service](https://validator.w3.org/feed/check.cgi?url=http%3A%2F%2Foverseas.mofa.go.kr%2Fit-milano-ko%2Fbrd%2Frss.do%3FbrdId%3D8683):

> Server returned HTTP Error 307: The HTTP server returned a redirect error that would lead to an infinite loop. The last 30x error message was: Temporary Redirect

## Feature

- [x] Block infinite redirects by **Cookies**
- [ ] Block infinite redirects by **CloudFront**

## Requirements

* deno
* docker

## Run

```bash
make run
```

## Build Docker

```bash
make docker.build
```

## Use

* access `http://localhost:8080/decode/<base64 decoded URL>`