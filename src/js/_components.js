import hamburgerMenu from "./components/hamburger";
import dropdownMenu from "./components/dropdown-menu";
import dropdownInnerMenu from "./components/dropdown-inner-menu";
import fixedHeader from "./components/fixed-header";
import faq from "./components/faq";
import ticker from "./components/ticker";
import tabs from "./components/tabs";
import {customSelect, setDefaultValues} from "./components/custom-select";

document.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu();
    dropdownMenu();
    dropdownInnerMenu();
    fixedHeader();

    if (document.body.classList.contains('is-home-page') || document.body.classList.contains('is-seo-page')) {
        faq('.faq__wrapper', '.faq__question', '.faq__answer');
        // ticker();

        // window.addEventListener('resize', () => {
        //     if (window.innerWidth >= 768) {
        //         ticker();
        //     }
        // });
    }

    if (document.body.classList.contains('is-form')) {
        setDefaultValues(); 
        customSelect();
    }

    if (document.body.classList.contains('is-price-page')) {
        tabs('.js-tab-link', '.js-tab-content', '.js-tab-list');
        faq('.faq__wrapper', '.faq__question', '.faq__answer');
        ticker();

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                ticker();
            }
        });
    }

    if (document.body.classList.contains('is-work-page')) {
        faq('.faq__wrapper', '.faq__question', '.faq__answer');
    }

    if (document.body.classList.contains('is-article-page')) {
        faq('.article__wrap', '.article__question', '.article__answer');
        faq('.article-faq__wrapper', '.article-faq__question', '.article-faq__answer');
    }
});
