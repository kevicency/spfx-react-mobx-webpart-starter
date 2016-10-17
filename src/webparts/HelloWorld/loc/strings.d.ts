declare interface IHelloWorldStrings {
  PropertyPaneName: string
  BasicGroupName: string
  NameFieldLabel: string
}

declare module 'helloWorldStrings' {
  const strings: IHelloWorldStrings
  export = strings
}
