# well-know-stack

utility collection to makes pulumi easier

## Features

### Policy types

Well documented types for every aws action and resource:

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
