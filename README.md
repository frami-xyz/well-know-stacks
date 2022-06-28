# well-know-stack

Collection of utilities that makes [pulumi](https://www.pulumi.com/docs/get-started/) easier.

## Why

While [pulumi](https://www.pulumi.com/docs/get-started/) makes it easy to build infrastructure, the large number of options available among different vendors makes it difficult to configure and connect its various parts.

This repository pretends to be a set of utilities and recommendations on how to build and connect services on a cloud provider

## Features

### Typed policies

Well documented types for every AWS action and resource:

```ts
import * as aws from '@pulumi/aws'
import { S3Action, S3Resource } from 'well-known-stack/lib/aws/iam/policy/s3'

new aws.iam.Policy('my-buck-policy', {
  policy: {
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Action: [
          S3Action.PutObject,
          S3Action.GetObject,
          S3Action.ListBucket,
          S3Action.DeleteBucket,
          S3Action.GetBucketLocation,
        ],
        Resource: [
          S3Resource.bucket({ bucketName: 'awsexamplebucket1' }),
          S3Resource.object({ bucketName: 'awsexamplebucket1', objectName: '*' }),
        ],
      }
    ]
  }
})
```
