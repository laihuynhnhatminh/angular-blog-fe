import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { SimpleModalComponent } from 'src/app/shared/components/simple-modal/simple-modal.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SimpleModalComponent,
    RouterModule.forChild(HOME_ROUTES),
  ],
  providers: [],
})
export class HomeModule {}
