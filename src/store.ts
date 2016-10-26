import { observable, ObservableMap } from 'mobx'

export class WebpartStore {
  @observable properties = new ObservableMap()
}

export default class Store {
  webpart = new WebpartStore()
}
