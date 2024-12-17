import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SifrePage } from './sifre.page';

describe('SifrePage', () => {
  let component: SifrePage;
  let fixture: ComponentFixture<SifrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SifrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
