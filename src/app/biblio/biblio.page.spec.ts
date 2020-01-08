import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { BiblioPage } from './biblio.page';

describe('BiblioPage', () => {
  let component: BiblioPage;
  let fixture: ComponentFixture<BiblioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BiblioPage],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BiblioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
