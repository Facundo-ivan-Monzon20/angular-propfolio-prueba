import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [{path: '', component: PagePrincipalComponent},
{path:'skills', component: SkillsComponent},
{path:'contacto', component: ContactosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
