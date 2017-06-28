import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// App
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule
    ],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
