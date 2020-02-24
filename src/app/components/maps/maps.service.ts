import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getVisitorsCount(from?, to?) {
    const url = 'http://50.1.0.12:8082/druid/v2/';
    const body: any = {
      queryType: 'groupBy',
      dataSource: 'devcon-events',
      dimensions: [
        'stallId',
        'ideaId'
      ],
      aggregations: [
        {
          type: 'count',
          name: 'count'
        }
      ],
      granularity: 'all',
      postAggregations: [],
      intervals: '1901-01-01T00:00:00+00:00/2101-01-01T00:00:00+00:00',
      filter: {
        type: 'selector',
        dimension: 'eid',
        value: 'DC_VISIT'
      },
      limitSpec: {
        type: 'default',
        limit: 10000,
        columns: [
          {
            dimension: 'count',
            direction: 'descending'
          }
        ]
      }
    };
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    };

    if (from && to) {
      body.intervals = `${from}/${to}`;
    }

    console.log('body', body);
    return this.http.post(url, body, options).pipe(
      mergeMap((data: any) => {
        return of(data);
      }));
  }

}
