import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtoPersonaComponent } from './mto-persona.component';

describe('MtoPersonaComponent', () => {
  let component: MtoPersonaComponent;
  let fixture: ComponentFixture<MtoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtoPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
