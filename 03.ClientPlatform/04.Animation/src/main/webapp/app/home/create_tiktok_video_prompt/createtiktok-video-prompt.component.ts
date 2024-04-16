import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FootMenuComponent } from 'app/layouts/foot-menu/foot-menu.component';
import SharedModule from 'app/shared/shared.module';

@Component({
  selector: 'jhi-createtiktok-video-prompt',
  standalone: true,
  imports: [SharedModule, RouterModule,FootMenuComponent],
  templateUrl: './createTiktokVideoPrompt.html',
  styleUrl: './createTiktokVideoPromptStyles.scss'
})
export class CreatetiktokVideoPromptComponent {
  constructor(
    public router: Router
    ){
      
    }
  continue() {
    this.router.navigate(['/ThinkingScreen']);
  }

}
