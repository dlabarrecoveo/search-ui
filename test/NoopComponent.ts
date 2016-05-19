/// <reference path="Test.ts" />
module Coveo.Components {
  export class NoopComponent extends Component {
    static ID = 'NoopComponent';

    constructor(element: HTMLElement, options: any, bindings: IComponentBindings) {
      super(element, NoopComponent.ID, bindings);
    }
  }
}
