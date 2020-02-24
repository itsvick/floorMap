import { MapsService } from './maps.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { interval } from 'rxjs';
import { flatMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  wrapper: any;
  visitors: any;
  activeVisitors: any;

  IDE1: any;
  IDE2: any;
  IDE3: any;
  IDE4: any;
  IDE5: any;
  IDE6: any;
  IDE7: any;
  IDE8: any;
  IDE9: any;
  IDE10: any;
  IDE11: any;
  IDE12: any;
  IDE13: any;
  IDE14: any;
  IDE15: any;
  IDE16: any;
  IDE17: any;
  IDE18: any;
  IDE19: any;
  IDE20: any;
  IDE21: any;
  IDE22: any;
  IDE23: any;
  IDE24: any;
  IDE25: any;
  IDE26: any;
  IDE27: any;
  IDE28: any;
  constructor(private mapsService: MapsService) { }

  ngOnInit() {

    this.getVisitors();
    this.getActiveVisitorsCount();
  }

  getVisitors() {
    interval(60000)
      .pipe(
        startWith(1),
        flatMap(() => this.mapsService.getVisitorsCount())
      ).subscribe((data) => {
        console.log('data', data);
        this.visitors = data.filter((item) => item.event && item.event.stallId);

        this.setVisitors();
        console.log('visitors', this.visitors);
      }, error => {
        console.log('error', error);
      });
  }

  getActiveVisitorsCount() {
    const currentDate = new Date();
    const currentISOTimeStamp = currentDate.toISOString();
    currentDate.setMinutes(currentDate.getMinutes() - 1);

    const lastMinuteISOTimeStamp = currentDate.toISOString();
    interval(60000)
      .pipe(
        startWith(1),
        flatMap(() => this.mapsService.getVisitorsCount(lastMinuteISOTimeStamp, currentISOTimeStamp))
      ).subscribe((data) => {
        console.log('activeVisitors', data);
        this.activeVisitors = data.filter((item) => item.event && item.event.stallId);
        this.setActiveVisitors();
      }, error => {
        console.log('error', error);
      });
  }

  getIdeaID(id) {
    return this.visitors.filter((item) => item.event.id === id);
  }

  getActiveVisitorForIdea(visitor) {
    if (visitor && visitor.event && visitor.event.ideaId) {
      const currentIdea: any = this.activeVisitors.filter((item) => item.event.ideaId === visitor.event.ideaId);

      if (currentIdea.length) {
        return currentIdea[0].event.count;
      }
    }
    return 0;
  }

  setVisitors() {
    if (this.visitors) {
      this.visitors.forEach(element => {

        switch (element.event.ideaId) {
          case 'IDE1':
            this.IDE1 = element;
            this.IDE1.activeVisitorCount = 0;
            break;
          case 'IDE2':
            this.IDE2 = element;
            this.IDE2.activeVisitorCount = 0;
            break;
          case 'IDE3':
            this.IDE3 = element;
            this.IDE3.activeVisitorCount = 0;
            break;
          case 'IDE4':
            this.IDE4 = element;
            this.IDE4.activeVisitorCount = 0;
            break;
          case 'IDE5':
            this.IDE5 = element;
            this.IDE5.activeVisitorCount = 0;
            break;
          case 'IDE6':
            this.IDE6 = element;
            this.IDE6.activeVisitorCount = 0;
            break;
          case 'IDE7':
            this.IDE7 = element;
            this.IDE7.activeVisitorCount = 0;
            break;
          case 'IDE8':
            this.IDE8 = element;
            this.IDE8.activeVisitorCount = 0;
            break;
          case 'IDE9':
            this.IDE9 = element;
            this.IDE9.activeVisitorCount = 0;
            break;
          case 'IDE10':
            this.IDE10 = element;
            this.IDE10.activeVisitorCount = 0;
            break;
          case 'IDE11':
            this.IDE11 = element;
            this.IDE11.activeVisitorCount = 0;
            break;
          case 'IDE12':
            this.IDE12 = element;
            this.IDE12.activeVisitorCount = 0;
            break;
          case 'IDE13':
            this.IDE13 = element;
            this.IDE13.activeVisitorCount = 0;
            break;
          case 'IDE14':
            this.IDE14 = element;
            this.IDE14.activeVisitorCount = 0;
            break;
          case 'IDE15':
            this.IDE15 = element;
            this.IDE15.activeVisitorCount = 0;
            break;
          case 'IDE16':
            this.IDE16 = element;
            this.IDE16.activeVisitorCount = 0;
            break;
          case 'IDE17':
            this.IDE17 = element;
            this.IDE17.activeVisitorCount = 0;
            break;
          case 'IDE18':
            this.IDE18 = element;
            this.IDE18.activeVisitorCount = 0;
            break;
          case 'IDE19':
            this.IDE19 = element;
            this.IDE19.activeVisitorCount = 0;
            break;
          case 'IDE20':
            this.IDE20 = element;
            this.IDE20.activeVisitorCount = 0;
            break;
          case 'IDE21':
            this.IDE21 = element;
            this.IDE21.activeVisitorCount = 0;
            break;
          case 'IDE22':
            this.IDE22 = element;
            this.IDE22.activeVisitorCount = 0;
            break;
          case 'IDE23':
            this.IDE23 = element;
            this.IDE23.activeVisitorCount = 0;
            break;
          case 'IDE24':
            this.IDE24 = element;
            this.IDE24.activeVisitorCount = 0;
            break;
          case 'IDE25':
            this.IDE25 = element;
            this.IDE25.activeVisitorCount = 0;
            break;
          case 'IDE26':
            this.IDE26 = element;
            this.IDE26.activeVisitorCount = 0;
            break;
          case 'IDE27':
            this.IDE27 = element;
            this.IDE27.activeVisitorCount = 0;
            break;
          case 'IDE28':
            this.IDE28 = element;
            this.IDE28.activeVisitorCount = 0;
            break;
        }
      });
    }
  }

  setActiveVisitors() {
    if (this.activeVisitors) {
      this.activeVisitors.forEach(element => {
        switch (element.event.ideaId) {
          case 'IDE1':
            this.IDE1.activeVisitorCount = element.event.count;
            break;
          case 'IDE2':
            this.IDE2.activeVisitorCount = element.event.count;
            break;
          case 'IDA3':
            this.IDE3.activeVisitorCount = element.event.count;
            break;
          case 'IDE4':
            this.IDE4.activeVisitorCount = element.event.count;
            break;
          case 'IDE5':
            this.IDE5.activeVisitorCount = element.event.count;
            break;
          case 'IDE6':
            this.IDE6.activeVisitorCount = element.event.count;
            break;
          case 'IDE7':
            this.IDE7.activeVisitorCount = element.event.count;
            break;
          case 'IDE8':
            this.IDE8.activeVisitorCount = element.event.count;
            break;
          case 'IDE9':
            this.IDE9.activeVisitorCount = element.event.count;
            break;
          case 'IDE10':
            this.IDE10.activeVisitorCount = element.event.count;
            break;
          case 'IDE11':
            this.IDE11.activeVisitorCount = element.event.count;
            break;
          case 'IDE12':
            this.IDE12.activeVisitorCount = element.event.count;
            break;
          case 'IDE13':
            this.IDE13.activeVisitorCount = element.event.count;
            break;
          case 'IDE14':
            this.IDE14.activeVisitorCount = element.event.count;
            break;
          case 'IDE15':
            this.IDE15.activeVisitorCount = element.event.count;
            break;
          case 'IDE16':
            this.IDE16.activeVisitorCount = element.event.count;
            break;
          case 'IDE17':
            this.IDE17.activeVisitorCount = element.event.count;
            break;
          case 'IDE18':
            this.IDE18.activeVisitorCount = element.event.count;
            break;
          case 'IDE19':
            this.IDE19.activeVisitorCount = element.event.count || 0;
            break;
          case 'IDE20':
            this.IDE20.activeVisitorCount = element.event.count;
            break;
          case 'IDE21':
            this.IDE21.activeVisitorCount = element.event.count;
            break;
          case 'IDE22':
            this.IDE22.activeVisitorCount = element.event.count;
            break;
          case 'IDE23':
            this.IDE23.activeVisitorCount = element.event.count;
            break;
          case 'IDE24':
            this.IDE24.activeVisitorCount = element.event.count;
            break;
          case 'IDE25':
            this.IDE25.activeVisitorCount = element.event.count;
            break;
          case 'IDE26':
            this.IDE26.activeVisitorCount = element.event.count;
            break;
          case 'IDE27':
            this.IDE27.activeVisitorCount = element.event.count;
            break;
          case 'IDE28':
            this.IDE28.activeVisitorCount = element.event.count;
            break;
        }
      });
    }
  }

}
