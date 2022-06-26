import { writeFileSync } from 'fs'
import { Action, Condition, Resource, ServiceAuthorizationReference } from "./types";
import { dom } from './utils'

function toCamelCase(value: string) {
  return value[0].toLowerCase() + value.slice(1)
    .replace(/[-|:| |\/]\w/gi, (value) => value.slice(-1).toUpperCase())
    .replace(/[-|:| |\/]$/, '')
}
function toUpperCamelCase(value: string) {
  return value[0].toUpperCase() + toCamelCase(value).slice(1)
}

function getHref(a?: Element | null) {
  return a?.attributes?.getNamedItem('href')?.value?.trim() || ''
}

function findTables(tables: Element[]) {
  if (tables.length === 3) {
    return tables as [Element, Element, Element]
  }

  const actionTable = tables.find(table => {
    const th = table.querySelector('thead tr th')?.textContent?.toLowerCase() || ''
    return th.startsWith('action')
  })

  const resourceTable = tables.find(table => {
    const th = table.querySelector('thead tr th')?.textContent?.toLowerCase() || ''
    return th.startsWith('resource')
  })

  const conditionTable = tables.find(table => {
    const th = table.querySelector('thead tr th')?.textContent?.toLowerCase() || ''
    return th.startsWith('condition')
  })

  return [actionTable || null, resourceTable || null, conditionTable || null] as const
}

function parseActions(actionTable?: Element | null, options: Partial<{ url: URL, actions: Action[] }> = {}): Action[] {
  const actions: Action[] = options.actions ?? []
  if (!actionTable) {
    return actions
  }

  let latestActionName: null | string = null
  const actionMap = new Map(actions.map(action => [action.name, action]))
  const trs = Array.from(actionTable.querySelectorAll('tbody tr'))
  for (const tr of trs) {
    const tds = Array.from(tr.querySelectorAll('td')).filter(Boolean)
    if (tds.length === 6) {
      const name = (tds[0].textContent || '').trim().replace(' [permission only]', '')
      const description = (tds[1].textContent || '').trim()
      const level = (tds[2].textContent || '').toLowerCase().trim() as 'read' | 'write' | 'list'
      const url = Array.from(tds[0].querySelectorAll('a'), getHref).find(Boolean) || ''
      const resourceTypes = Array.from(tds[3].querySelectorAll('a'), (a) => (a.textContent || '').trim().replace(/\*/gi, ''))
      const conditionKeys = Array.from(tds[4].querySelectorAll('a'), (a) => (a.textContent || '').trim())
      const dependentActions = Array.from(tds[5].querySelectorAll('a'), (a) => (a.textContent || '').trim())
      latestActionName = name

      if (actionMap.has(name)) {
        const action = actionMap.get(name)!
        action.resourceTypes = Array.from(new Set([ ...action.resourceTypes, ...resourceTypes ]))
        action.conditionKeys = Array.from(new Set([ ...action.conditionKeys, ...conditionKeys ]))
        action.dependentActions = Array.from(new Set([ ...action.dependentActions, ...dependentActions ]))
        actionMap.set(name, action)
      } else {
        actionMap.set(name, { name, description, level, url: new URL(url, options.url).toString(), conditionKeys, resourceTypes, dependentActions })
      }
    } else if (latestActionName) {
      const latestAction = actionMap.get(latestActionName)
      if (latestAction) {
        latestAction.resourceTypes = Array.from(new Set([
          ...latestAction.resourceTypes,
          ...Array.from(tds[0].querySelectorAll('a'), (a) => (a.textContent || '').trim().replace(/\*/gi, ''))
        ]))
        latestAction.conditionKeys = Array.from(new Set([
          ...latestAction.conditionKeys,
          ...Array.from(tds[1].querySelectorAll('a'), (a) => (a.textContent || '').trim())
        ]))
        latestAction.dependentActions = Array.from(new Set([
          ...latestAction.dependentActions,
          ...Array.from(tds[2].querySelectorAll('a'), (a) => (a.textContent || '').trim())
        ]))
      }
    }
  }

  return Array.from(actionMap.values())
}

function parseResources(resourceTable?: Element | null, options: Partial<{ url: URL, resources: Resource[] }> = {}): Resource[] {
  const resources: Resource[] = options.resources ?? []
  if (!resourceTable) {
    return []
  }

  let latestResourceName: string | null = null
  const resourcesMap = new Map(resources.map(resource => [resource.name, resource]))
  const trs = Array.from(resourceTable.querySelectorAll('tbody tr'))
  for (const tr of trs) {
    const tds = Array.from(tr.querySelectorAll('td'))
    if (tds.length === 3) {
      const name = (tds[0].textContent || '').trim()
      const arn = (tds[1].textContent || '').trim()
      const url = Array.from(tds[0].querySelectorAll('a'), getHref).find(Boolean) || ''
      const conditionKeys = Array.from(tds[2].querySelectorAll('a'), (a) => (a.textContent || '').trim())
      latestResourceName = name

      if (resourcesMap.has(name)) {
        const resource = resourcesMap.get(name)!
        resource.conditionKeys = Array.from(new Set([
          ...resource.conditionKeys,
          ...conditionKeys,
        ]))
        resourcesMap.set(name, resource)
      } else {
        resourcesMap.set(name, {
          name,
          arn,
          url: new URL(url, options.url).toString(),
          conditionKeys,
        })
      }
    } else if (latestResourceName) {
      const latestResource = resourcesMap.get(latestResourceName)
      if (latestResource) {
        latestResource.conditionKeys = [
          ...latestResource.conditionKeys,
          ...Array.from(tds[0].querySelectorAll('a'), (a) => (a.textContent || '').trim())
        ]
      }
    }
  }

  return Array.from(resourcesMap.values())
}

function parseConditions(conditionTable?: Element | null, options: Partial<{ url: URL, conditions: Condition[] }> = {}): Condition[] {
  const conditions: Condition[] = options.conditions ?? []
  if (!conditionTable) {
    return []
  }


  const conditionsMap = new Map(conditions.map(condition => [condition.key, condition]))
  const trs = Array.from(conditionTable.querySelectorAll('tbody tr'))
  for (const tr of trs) {
    const tds = Array.from(tr.querySelectorAll('td'))
    if (tds.length === 3) {
      const key = (tds[0].textContent || '').trim()
      const description = (tds[1].textContent || '').trim()
      const type = (tds[2].textContent || '').trim()
      const url = Array.from(tds[0].querySelectorAll('a'), getHref).find(Boolean) || ''
      if (!conditionsMap.has(key)) {
        conditionsMap.set(key, {
          key,
          description,
          type,
          url: new URL(url, options.url).toString()
        })
      }
    }
  }

  return Array.from(conditionsMap.values())
}

function createAction(ref: ServiceAuthorizationReference) {
  const result: string[] = [
    `/**`,
    ` * You can specify the following actions in the \`Action\` element of an IAM policy statement`,
    ...ref.urls.map(url => ` * @see ${url}`),
    ` */`,
    `export enum ${toUpperCamelCase(ref.id)}Action {`,
  ]

  function actionItem(action: Action, value?: string) {
    const remarks = [
      `   * `,
      `   * @remarks`,
      ...createResourceComments(ref, action.resourceTypes),
      ...createConditionComments(ref, action.conditionKeys),
      ...createDependentActionComments(ref, action.dependentActions),
    ]

    return [
      ``,
      `  /**`,
      `   * ${toUpperCamelCase(action.level)} - ${action.description}`,
      `   * @see ${action.url}`,
      ...(remarks.length === 2 ? [] : remarks),
      `   */`,
      `  ${action.name} = ${value},`,
    ].join('\n')
  }

  const all: Pick<Action, 'resourceTypes' | 'conditionKeys'> = { resourceTypes: [], conditionKeys: [] }
  // const group = new Map<string, Pick<Action, 'resourceTypes' | 'conditionKeys'>>()
  for (const currentAction of ref.actions) {
    all.resourceTypes.push(...currentAction.resourceTypes)
    all.conditionKeys.push(...currentAction.conditionKeys)
  }

  result.push(
    ...ref.actions.map(item => actionItem(item, `"${ref.id}:${item.name}"`)),

    actionItem({
      name: 'All',
      level: '*',
      url: ref.urls[0],
      description: `Grant all ${ref.id} permissions`,
      resourceTypes: Array.from(new Set(all.resourceTypes)),
      conditionKeys: Array.from(new Set(all.conditionKeys)),
      dependentActions: [],
    }, `"${ref.id}:*"`)
  )

  result.push('}')
  return result.join('\n') + '\n'
}

function createResourceFunction(arn: string) {
  const match = arn.match(/\${[\w|:]+}/gi)
  if (!match) {
    return `"${arn}"`
  }

  return `(options: Partial<{${match.map(value => `${toCamelCase(value.slice(2, -1))}: string`).join(', ')}}> = {}) => \`${arn.replace(/\${[\w|:]+}/gi, (value) => `\${options.${toCamelCase(value.slice(2, -1))} || '*'}`)}\``
}

function createResourceComments(ref: ServiceAuthorizationReference, resources: string[]) {
  if (resources.length === 0) {
    return []
  }

  return [
    `   * `,
    `   * It can be used with the following resource types in the \`Resource\` element of IAM policy statements:`,
    ...resources.map(resourceType => {
      const link = `${toUpperCamelCase(ref.id)}Resource.${toCamelCase(resourceType)}`
      return `   * - {@link ${link} \`${link}\`} `
    }),
  ]
}

function createConditionComments(ref: ServiceAuthorizationReference, conditions: string[]) {
  if (conditions.length === 0) {
    return []
  }

  return [
    `   * `,
    `   * It can be used with the following condition keys in the \`Condition\` element of an IAM policy statements:`,
    ...conditions.map(conditionKey => {
      const condition = ref.conditions.find(condition => condition.key === conditionKey);
      if (!condition) {
        return `   * - ${conditionKey}`
      }

      return [
        `   * - \`${condition.key}\`: ${condition.description} ({@link ${condition.url} documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_${condition.type} \`${condition.type}\`})`,
      ].join('\n')
    })
  ]
}

function createDependentActionComments(ref: ServiceAuthorizationReference, actions: string[]) {
  if (actions.length === 0) {
    return []
  }

  return [
    `   * `,
    `   * It requires the following actions:`,
    ...actions.map(action => `   * - ${action}`),
  ]
}

function createResource(ref: ServiceAuthorizationReference) {
  const result: string[] = [
    `/**`,
    ` * You can specify the following resources in the \`Resource\` element of an IAM policy statement`,
    ...ref.urls.map(url => ` * @see ${url}`),
    ` */`,
    `export const ${toUpperCamelCase(ref.id)}Resource = {`,
  ]
  result.push(
    ...ref.resources.map(resource => {
      const remarks = [
        `   * `,
        `   * @remarks`,
        ...createConditionComments(ref, resource.conditionKeys),
      ]

      return [
        ``,
        `  /**`,
        `   * @see ${resource.url}`,
        ...(remarks.length === 2 ? [] : remarks),
        `   */`,
        `  ${toCamelCase(resource.name)}: ${createResourceFunction(resource.arn)},`,
      ].join('\n')
    })
  )
  result.push('}')
  return result.join('\n') + '\n'
}

Promise.resolve()
  .then(async () => {
    const base = 'https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html'
    const reference_policies_actions = await dom(base)
    if (!reference_policies_actions) {
      console.log('Invalid dom from reference_policies_actions:', base)
      process.exit()
    }

    const itemList = reference_policies_actions.window.document.querySelectorAll('#main-col-body .highlights li a')
    const items = Array.from(itemList, (item) => [item.textContent, item?.attributes.getNamedItem('href')?.value] as const)

    const refs = new Map<string, ServiceAuthorizationReference>()

    for (const [name, path] of items) {
      if (!name || !path) {
        continue
      }

      const url = new URL(path, base)
      const item = await dom(url)
      if (!item) {
        continue
      }

      const id = item.window.document.querySelector('#main-col-body code.code')?.textContent
      if (!id) {
        continue
      }

      const tables = Array.from(item.window.document.querySelectorAll('#main-col-body table'))
      const [actionTable, resourcesTable, conditionTable] = findTables(tables)

      const ref = refs.has(id) ? refs.get(id)! : {
        id,
        urls: [],
        actions: [],
        resources: [],
        conditions: [],
      }

      ref.urls.push(url.toString())
      ref.actions = parseActions(actionTable, { url, actions: ref.actions })
      ref.resources = parseResources(resourcesTable, { url, resources: ref.resources })
      ref.conditions = parseConditions(conditionTable, { url, conditions: ref.conditions })

      writeFileSync(`./src/aws/iam/policy/${ref.id}.ts`, [
        createAction(ref),
        createResource(ref),
      ].join('\n') + '\n')

      refs.set(id, ref)
    }

    writeFileSync('./src/aws.iam.policies.json', JSON.stringify(Array.from(refs.values()), null, 2))
    writeFileSync(
      `./src/aws/iam/policy/index.ts`,
      Array.from(refs.values(), (ref) => `export * as ${toCamelCase(ref.id)} from "./${ref.id}"`)
        .join('\n') + '\n'
    )
  })
