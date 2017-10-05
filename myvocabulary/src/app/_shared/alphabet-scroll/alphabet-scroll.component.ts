import { Component, AfterViewInit } from '@angular/core';

import { HelperService } from '../index';

declare var $: any;

@Component({
    selector: "alphabet-scroll",
    templateUrl: './alphabet-scroll.component.html',
})
export class AlphabetScrollComponent implements AfterViewInit { 
    activeAlphabet = "";
    activeAlphabetId = "";

    constructor(
		private helperService: HelperService
	) { }

    ngAfterViewInit() {
        let __this = this;
		$(".alphabet-scroll").on("mouseenter", ".alphabet", function() {
            $(".alphabet-scroll .tooltip").hide();
            $(this).find(".tooltip").show();
		});

        $(".alphabet-scroll").on("mouseleave", ".alphabet", function() {
            $(".alphabet-scroll .tooltip").hide();
		});

        $(".alphabet-scroll").on("click", ".alphabet", function() {
            let alphabet = $(this).attr("data-alphabet");            
            __this.scrollContent($(this), alphabet);            
		});

        $(".alphabet-scroll").on("touchstart", function(event){
            this.activeAlphabet = $(event.target).closest(".alphabet").attr("data-alphabet");
            __this.scrollContent($(event.target).closest(".alphabet"), this.activeAlphabet);
        });

        $(".alphabet-scroll").on("touchmove", function(event){
            var changedTouch = event.changedTouches[0];
            var elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
            let newAlphabet = $(elem).closest(".alphabet").attr("data-alphabet");
            if (this.activeAlphabet != newAlphabet) {
                this.activeAlphabet = newAlphabet;
                __this.scrollContent($(elem).closest(".alphabet"), this.activeAlphabet);                
            }
        });

        $(".mat-sidenav-content").scroll(function(){
            let ele = document.elementFromPoint(Math.floor($(".mat-sidenav-container").width() / 2), 80);
            let newId = $(ele).closest(".mat-list-item").attr("id");
            if (newId) {
                newId = newId.toUpperCase();
                if (this.activeAlphabetId != newId) {
                    $(".alphabet-scroll .alphabet").removeClass("current");
                    $(".alphabet-scroll [data-alphabet='"+ newId +"']").addClass("current");
                    this.activeAlphabetId = newId;
                }
            }
        });
	}

    scrollContent(elem, alphabet) {
        if (alphabet) {
            $(".alphabet-scroll .tooltip").hide();
            elem.find(".tooltip").show();

            if (alphabet == "top") {
                this.helperService.scrollContent();
            } else if (alphabet == "bottom") {
                this.helperService.scrollContent(-1);
            } else {
                let ele = document.getElementById(alphabet.toLowerCase());
                if (ele) {
                    let offsetTop = ele.offsetTop;
                    if (ele.offsetTop != 0 && $(".mat-sidenav-container").width() > 767) {
                        offsetTop = offsetTop + 18;
                    }
                    this.helperService.scrollContent(offsetTop);
                }
            }
            setTimeout(() => {
                elem.find(".tooltip").hide();
            }, 1000);
        }
    }
}
