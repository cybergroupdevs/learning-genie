import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsadminComponent } from './questionsadmin.component';

describe('QuestionsadminComponent', () => {
  let component: QuestionsadminComponent;
  let fixture: ComponentFixture<QuestionsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
