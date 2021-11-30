import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { AdmissionHeaderComponent } from './components/admission/admission-header/admission-header.component';
import { InputComponent } from './components/helpers/input/input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/helpers/button/button.component';
import { AdmissionFooterComponent } from './components/admission/admission-footer/admission-footer.component';
import { CardComponent } from './components/admission/card/card.component';
import { StepperComponent } from './components/admission/stepper/stepper.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SidebarComponent,
        AdmissionComponent,
        AdmissionHeaderComponent,
        InputComponent,
        ButtonComponent,
        AdmissionFooterComponent,
        CardComponent,
        StepperComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
