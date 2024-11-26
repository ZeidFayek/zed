import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PublicTendersComponent } from './public-tenders/public-tenders.component';
import { TenderDetailsComponent } from './tender-details/tender-details.component';
import { SubcontractingComponent } from './subcontracting/subcontracting.component';
import { SubcontractingDetailsComponent } from './subcontracting-details/subcontracting-details.component';
import { ProjectRemainsComponent } from './project-remains/project-remains.component';
import { SettingComponent } from './setting/setting.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { NotificationComponent } from './notification/notification.component';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TechniciansComponent } from './technicians/technicians.component';
import { TechniciansCardComponent } from './technicians-card/technicians-card.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { WeeklynewspapersComponent } from './weeklynewspapers/weeklynewspapers.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'mainPage',
        canActivate: [authGuardGuard],
        component: MainPageComponent,
      },
      {
        path: 'publicTender',
        component: PublicTendersComponent,
        canActivate: [authGuardGuard],
        children: [
          { path: 'tenderDetails', component: TenderDetailsComponent },
        ],
      },
      {
        path: 'subcontract',
        component: SubcontractingComponent,
        canActivate: [authGuardGuard],
        children: [
          {
            path: 'contractingDetails',
            canActivate: [authGuardGuard],
            component: SubcontractingDetailsComponent,
          },
        ],
      },
      {
        path: 'projectRemain',
        canActivate: [authGuardGuard],
        component: ProjectRemainsComponent,
        children: [
          {
            path: 'project-details',
            canActivate: [authGuardGuard],
            component: ProductDetailsComponent,
          },
        ],
      },
      {
        path: 'setting',
        component: SettingComponent,
        canActivate: [authGuardGuard],
        children: [{ path: 'editProfile', component: EditProfileComponent }],
      },
      {
        path: 'Technicians',
        canActivate: [authGuardGuard],
        component: TechniciansComponent,
      },
      {
        path: 'TechniciansCard',
        canActivate: [authGuardGuard],
        component: TechniciansCardComponent,
      },
      {
        path: 'favourite-list',
        canActivate: [authGuardGuard],
        component: FavouriteListComponent,
      },
      {
        path: 'notification',
        canActivate: [authGuardGuard],
        component: NotificationComponent,
      },
      {
        path: 'WeeklyNewspapers',
        canActivate: [authGuardGuard],
        component: WeeklynewspapersComponent,
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
