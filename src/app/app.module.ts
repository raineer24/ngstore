import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent }  from './app.component';
import { ArticleComponent }  from './components/article.component';
import { reducers, metaReducers } from './reducers/reducers';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

@NgModule({
  imports: [     
        BrowserModule,
            StoreModule.forRoot(reducers, {metaReducers}),
             StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      
             })
  ],
  declarations: [
        AppComponent,
		ArticleComponent
  ],
  providers: [

  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
