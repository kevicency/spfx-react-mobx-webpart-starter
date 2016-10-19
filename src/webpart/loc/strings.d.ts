declare interface IHelloWorldStrings {
  PropertyPaneDescription: string
  BasicGroupName: string
  NameFieldLabel: string
}

declare module 'helloWorldStrings' {
  const strings: IHelloWorldStrings
  export = strings
}
