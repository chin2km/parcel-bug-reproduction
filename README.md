# Parcel Path Alias Bug Reproduction

The path aliasing on server targets stopped working when upgrading from `@parcel:2.8.3` -> `@parcel:2.11.0`

Path aliasing still works in the browser bundle, but not anymore in the server targets.

```
The path aliasing is added as `"alias"` field in package.json.
```

## starting the application

- Run `yarn dev:csr` to start to the application in client only mode. And see the path aliasing for `lodash` works as expected.
- Run `yarn dev:ssr` to start to the application in server only mode. And see the path aliasing for `lodash` is broken.

```
To confirm its a regression in parcel, try pinning parcel version to `2.8.3` and see both ssr and csr mode works as expected!
```
