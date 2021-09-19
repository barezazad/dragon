export interface ICustomComponent {
  configure?: {
    title?: string,
    endPoint?: string,
    orderBy?: string,
    directionBy?: string,
  };
  topBar?: {
    addButton?: {
      action?: string,
      name?: string,
      permission?: string,
      icon?: string,
      noneCustom?: boolean,
    };
    search?: {
      status?: boolean,
    };
    export?: {
      permission?: string,
      excelEndPoint?: string,
    };
  };
  columns: ICustomColumn[];
  form?: IForm;
}

export interface ICustomColumn {
  columnDef: string;
  header: string;
  type: string;
  cell: any;
  class?: boolean;
  disSort?: boolean;
  route?: string;
  routeId?: string;
  actions?: Action[];
}

export interface Action {
  action: string;
  name: string;
  icon: string;
  path?: string;
  class?: string;
  permission?: string;
  actionId?: any;
  noneCustom?: boolean;
}

export interface IForm {
  width: string;
  fields: IFields[];
}

export interface IFields {
  category: string;
  type: string;
  name: string;
  label: string;
  value?: any; // ignore it
  defaultValue?: any;
  validation?: any;
  validationAction?: string;
  ignoreIn?: string;
  hide?: true;
  icon?: string;
  width?: number;
  options?: IOptions;
}

export interface IOptions {
  source?: any; // ignore it
  endpoint?: string;
  optionValue?: string;
  optionName?: string;
}
