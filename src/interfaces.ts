import { Action, ActionReaderOptions } from 'demux'

export interface NodeosActionReaderOptions extends ActionReaderOptions {
  nodeosEndpoint?: string
}

export interface MongoActionReaderOptions extends ActionReaderOptions {
  mongoEndpoint?: string
  dbName?: string
}

export interface StateHistoryPostgresActionReaderOptions extends ActionReaderOptions {
  massiveConfig: any
  dbSchema?: string
}

export interface StateHistoryWsActionReaderOptions extends ActionReaderOptions {
  nodeosRPCEndpoint: string,
  nodeosWSEndpoint: string,
}

export interface EosAuthorization {
  actor: string
  permission: string
}

export interface EosPayload<ActionStruct = any> {
  account: string
  actionIndex: number
  authorization: EosAuthorization[]
  data: ActionStruct
  name: string
  producer: string
  transactionId: string
  notifiedAccounts?: string[]
}

export interface EosAction extends Action {
  payload: EosPayload
}
