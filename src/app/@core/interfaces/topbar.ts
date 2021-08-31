export interface TopBar {
  addButton: {
    status: boolean,
    action: string,
    name: string,
    permission: string,
    icon: string,
  };
  search: {
    status: boolean,
    filter: {
      status: boolean,
      content: string,
      height: string,
      shareData: any,
    }
  };
  export: {
    status: boolean,
    permission: string,
    excelEndPoint: string,
  };
}
