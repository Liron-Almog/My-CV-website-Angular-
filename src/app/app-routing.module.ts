import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { PageNotExistComponent } from "./page-not-exist/page-not-exist.component";

const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'projects', component:MyProjectsComponent},
    {path: '**', component:PageNotExistComponent}]

    
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}