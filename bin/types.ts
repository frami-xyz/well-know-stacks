export type ServiceAuthorizationReference = {
  id: string,
  urls: string[],
  actions: Action[],
  resources: Resource[],
  conditions: Condition[],
}

export type Action = {
  name: string
  description: string,
  url: string,
  level: string,
  resourceTypes: string[]
  conditionKeys: string[]
  dependentActions: string[]
}

export type Resource = {
  name: string,
  arn: string,
  url: string,
  conditionKeys: string[],
}

export type Condition = {
  key: string,
  description: string,
  type: string
  url: string
}