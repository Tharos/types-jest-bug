To reproduce the issue, just follow these steps:

```shell
npm install
npx tcs
```

The project fails to build if `exactOptionalPropertyTypes` is enabled.

```
node_modules/@jest/environment/build/index.d.ts:401:26 - error TS2430: Interface 'JestImportMeta' incorrectly extends interface 'ImportMeta'.
  The types of 'jest.doMock' are incompatible between these types.
    Type '<T = unknown>(moduleName: string, moduleFactory?: (() => T) | undefined, options?: { virtual?: boolean; } | undefined) => Jest' is not assignable to type '<T = unknown>(moduleName: string, factory?: (() => T) | undefined, options?: MockOptions | undefined) => typeof jest'.
      Types of parameters 'options' and 'options' are incompatible.
        Type 'MockOptions | undefined' is not assignable to type '{ virtual?: boolean; } | undefined'.
          Type 'MockOptions' is not assignable to type '{ virtual?: boolean; }' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
            Types of property 'virtual' are incompatible.
              Type 'boolean | undefined' is not assignable to type 'boolean'.
                Type 'undefined' is not assignable to type 'boolean'.

401 export declare interface JestImportMeta extends ImportMeta {
```