import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent as CardListComponent } from './card-list.component';

describe('CardItemComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
