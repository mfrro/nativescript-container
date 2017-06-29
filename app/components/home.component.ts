// >> setting-url-webview
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";

@Component({
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements AfterViewInit {
    public webViewSrc: string = "http://www.rro.ch/";

    @ViewChild("myWebView") webViewRef: ElementRef;

    ngAfterViewInit() {
        let webview: WebView = this.webViewRef.nativeElement;

        webview.on(WebView.loadFinishedEvent, (args: LoadEventData) => {
            let message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            } else {
                message = "Error loading " + args.url + ": " + args.error;
            }

            console.log("WebView message - " + message);
        });
    }
}
