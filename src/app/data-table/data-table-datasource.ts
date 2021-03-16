import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  actions: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {actions: 1, name: '1 to 1 Effective DAte RENAME'},
  {actions: 2, name: '22576 TIFF'},
  {actions: 3, name: '23084 MR Cannot delete'},
  {actions: 4, name: '40736 Millenium'},
  {actions: 5, name: '4563543'},
  {actions: 6, name: '51647 Complex Objects'},
  {actions: 7, name: '78842'},
  {actions: 8, name: '84577 Date tolerance'},
  {actions: 9, name: 'Add Sectors test'},
  {actions: 10, name: 'agams match test'},
  {actions: 11, name: 'Anthony'},
  {actions: 12, name: 'ARP TEsting -- Issues to Paids'},
  {actions: 13, name: 'ARP Tetsing - Issuees to ST/CN/VD'},
  {actions: 14, name: 'Auto Demo'},
  {actions: 15, name: 'Phosphorus'},
  {actions: 16, name: 'Sulfur'},
  {actions: 17, name: 'Chlorine'},
  {actions: 18, name: 'Argon'},
  {actions: 19, name: 'Potassium'},
  {actions: 20, name: 'Calcium'},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator!: MatPaginator;
  sort!: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'actions': return compare(+a.actions, +b.actions, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
