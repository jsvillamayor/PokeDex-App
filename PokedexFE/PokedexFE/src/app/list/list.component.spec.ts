import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {NgxPaginationModule} from "ngx-pagination";
import {OrderModule} from "ngx-order-pipe";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, MatDialogModule, NgxPaginationModule, OrderModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clear button works',()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const elemnet: HTMLInputElement=fixture.debugElement.nativeElement.querySelector('clearbtn');
      const clearSpyon=spyOn(component,'clear').and.callThrough();
      elemnet.click();
      expect(clearSpyon).toHaveBeenCalledTimes(1);
    })

  })

  it('search button works',()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const elemnet: HTMLInputElement=fixture.debugElement.nativeElement.querySelector('searchbtn');
      const clearSpyon=spyOn(component,'SearchPoke').and.callThrough();
      elemnet.click();
      expect(clearSpyon).toHaveBeenCalledTimes(1);
    })

  })


});
