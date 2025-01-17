import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { fontAwesomeIcons } from './shared/font-awesome-icones';
import { FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavigationComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-vacance-Booking';
  
  private faIconLibrary:FaIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void{
    this.initFontAwesome();
  }

  private initFontAwesome() : void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

}
