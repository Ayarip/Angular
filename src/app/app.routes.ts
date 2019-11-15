import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { InformationheroeComponent } from './components/informationheroe/informationheroe.component';
import { BuscarheroesComponent } from './components/buscarheroes/buscarheroes.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'informationheroe/:id', component: InformationheroeComponent },
    { path: 'buscarheroe/:termino', component: BuscarheroesComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const appRouting = RouterModule.forRoot(routes);