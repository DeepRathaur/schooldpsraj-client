import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginServiceService } from './services/login-service.service';
import { AuthServiceService } from './services/auth-service.service';
import { CommonThingService } from './services/common-thing.service';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import { StudentTcComponent } from './front/student-tc/student-tc.component';
import { NavComponent } from './front/nav/nav.component';
import { FooterComponent } from './front/footer/footer.component';
import { SliderFooterComponent } from './front/slider-footer/slider-footer.component';
import { HomeComponent } from './front/home/home.component';
import { AboutUsComponent } from './front/about-us/about-us.component';
import { ContactUsComponent } from './front/contact-us/contact-us.component';
import { HeaderComponent } from './front/header/header.component';
import { AdmissionComponent } from './front/admission/admission.component';
import { GalleryComponent } from './front/gallery/gallery.component';
import { AcedmicComponent } from './front/acedmic/acedmic.component';
import { SecurityComponent } from './front/security/security.component';
import { ThreeSixtyComponent } from './front/three-sixty/three-sixty.component';
import { TopDesignComponent } from './front/acedmic/top-design/top-design.component';
import { LogoScrollDirective } from './logo-scroll.directive';

import { FrontComponent } from './front/front.component';
import { BackendComponent } from './backend/backend.component';
import { LoginComponent } from './login/login.component';

import { ManageGalleryComponent } from './backend/manage-gallery/manage-gallery.component';
import { viewGalleryImagesComponent } from './backend/view-gallery-images/mview-gallery-images.component';
import { uploadGalleryImagesComponent } from './backend/upload-gallery-images/mupload-gallery-images.component';
import { viewStudentTcComponent } from './backend/view-student-tc/mview-student-tc.component';
import { uploadStudentTcComponent } from './backend/upload-student-tc/mupload-student-tc.component';
import { uploadStudenAchiverComponent } from './backend/upload-studen-achiver/mupload-studen-achiver.component';
import { TcFilterPipe } from './backend/tc-filter.pipe';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MarqueeComponent } from './backend/marquee/marquee.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { MarqueeFrontComponent } from './front/marquee-front/marquee-front.component';
import { AdmissionQueryComponent } from './front/admission-query/admission-query.component';
  const routes:Routes = [     
      {path:'', redirectTo:'/home', pathMatch:'full'},
      {path:'', component:FrontComponent, children:[
          {path:'home', component:HomeComponent},
          {path:'about-us', component:AboutUsComponent},
          {path:'contact-us', component:ContactUsComponent},
          {path:'student-tc', component:StudentTcComponent},
          {path:'admission', component:AdmissionComponent},
          {path:'gallery', component:GalleryComponent},
          {path:'acedmic', component:AcedmicComponent},
          {path:'security', component:SecurityComponent},
          {path:'admission-query', component:AdmissionQueryComponent}
      ]},
       {path:'secure-panel', component:LoginComponent},
       {path:'secure-panel-dashboard', component:BackendComponent,  canActivate:[AuthGuard], children:[
           {path:'manage-gallery', component:ManageGalleryComponent},
           {path:'view-all-gallery-images', component:viewGalleryImagesComponent},
           {path:'upload-gallery-images', component:uploadGalleryImagesComponent},
           {path:'upload-student-tc', component:uploadStudentTcComponent},
           {path:'view-all-student-tc', component:viewStudentTcComponent},
           {path:'student-achiver', component:uploadStudenAchiverComponent},
           {path:'marquee', component:MarqueeComponent}
           
       ]}     
   ]


@NgModule({
  declarations: [
    AppComponent,
    StudentTcComponent,
    NavComponent,
    FooterComponent,
    SliderFooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    AdmissionComponent,
    GalleryComponent,
    AcedmicComponent,
    SecurityComponent,
    ThreeSixtyComponent,
    TopDesignComponent,
    LogoScrollDirective,
    LoginComponent,    
    FrontComponent,  
    BackendComponent,  
    ManageGalleryComponent,
    viewGalleryImagesComponent,
    uploadGalleryImagesComponent,
    uploadStudentTcComponent,
    viewStudentTcComponent,
    uploadStudenAchiverComponent,
    TcFilterPipe,
    MarqueeComponent,
    MarqueeFrontComponent,
    AdmissionQueryComponent
    
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, CKEditorModule, RouterModule.forRoot(routes)
  ],
  providers: [LoginServiceService, AuthServiceService, AuthGuard, CommonThingService],
  bootstrap: [AppComponent]
})


export class AppModule { }
