export interface IParams {
  page_size: number;
  page: number;
  search: string;
  order_by: string | undefined;
  direction: string | undefined;
  select: string;
  filter: string;
}
