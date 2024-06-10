// ==UserScript==
// @name         GoodGrowth-nationalTrustWeatherApi
// @namespace    http://tampermonkey.net/
// @version      2024-06-08
// @description  Add weather data to NationTrust website via external script
// @author       AliMcG
// @match        https://www.nationaltrust.org.uk/visit/warwickshire/packwood-house
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* global $ */

'use strict';

const apiKey = ""
const location = "Lapworth"

$.getJSON(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`, function (responseData) {
    /** Remove quotation marks from weather descriptions */
    const cleanDescriptionToday = responseData.list[0].weather[0].description.replace(/['"]+/g, '')
    const cleanDescriptionTomorrow = responseData.list[1].weather[0].description.replace(/['"]+/g, '')

    /** Add weather descriptions to the corresponding tags */
    $('#today-weather-data').text(cleanDescriptionToday)
    $('#tomorrow-weather-data').text(cleanDescriptionTomorrow)

    /** Get the weather icon for today's weather and add to corresponding image tag */
    const todayIconId = responseData.list[0].weather[0].icon;
    const todayIconUrl = `https://openweathermap.org/img/wn/${todayIconId}@2x.png`
    let imgTag1 = $('#today-weather-icon');
    if (imgTag1.length === 0) {
        imgTag1 = $('<img>', { id: 'today-weather-icon' });
        $('#today-weather-data').append(imgTag1);
    }
    imgTag1.attr('src', todayIconUrl);

    /** Get the weather icon for tomorrow's weather and add to corresponding image tag */
    const tomorrowIconId = responseData.list[1].weather[0].icon;
    const tomorrowIconUrl = `https://openweathermap.org/img/wn/${tomorrowIconId}@2x.png`
    let imgTag2 = $('#tomorrow-weather-icon');
    if (imgTag2.length === 0) {
        imgTag2 = $('<img>', { id: 'tomorrow-weather-icon' });
        $('#tomorrow-weather-data').append(imgTag2);
    }
    imgTag2.attr('src', tomorrowIconUrl);
});

/** Add weather title to page using the same font-family and colour to match the location header. */
$(document).ready(function () { $(".evLkd").after("<div class='Typographystyle__Paragraph-sc-86wkop-4 dVsdda Placestyle__StyledAddress-sc-7yy3d-4 jiGhBZ weather-test'>Weather</div>") })

/** Add the weather data for today and tomorrow */
$(document).ready(function () { $(".weather-test").after("<div style='display: flex; gap: 50px; '><div class='weather-test-today'><h4>Today's Weather: </h4><div id='today-weather-data'></div><img id='today-weather-icon'/></div><div class='weather-test-tomorrow'><h4>Tomorrow's Weather: </h4><div id='tomorrow-weather-data'></div><img id='tomorrow-weather-icon'/></div></div>") })

/** Add the weather link to the quick links menu in the location introduction. */
$(document).ready(function () { $(".evLkd ul").append('<li><a href="#place-weather" class="Linkstyle__StyledLink-sc-1dp2vo7-3 gPhEdw has-endIcon "><span class="Linkstyle__LabelText-sc-1dp2vo7-0 bFmdPY">Weather</span>&nbsp;<span class="Linkstyle__LabelIcon-sc-1dp2vo7-1 kCZShL"><span class="Iconstyle__SVGWrapper-sc-461blh-0 iFzDUa" data-ui-icon-type="link"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="100%" height="100%"><g><path d="M10.86,12.37L1.5,3.01L3.01,1.5l9.36,9.36V1.72h2.13V14.5H1.72v-2.13H10.86z"></path></g></svg></span></span></a></li>'); })

/** Attempted to add weather section to the accordion visitor menu list - ran out of time to make it work. */
// $(document).ready(function () {
// $(".iMyNCu ul").append(
// '<li id="place-weather" class="AccordionItemstyle__AccordionItemWrapper-sc-zx14w3-1 fTsYwY Accordionstyle__StyledAccordionItem-sc-5agikf-0 hYFtIQ" data-testid="visitor-info-accordion--item-place-weather"><h2 class="Typographystyle__HeadingLevel4-sc-86wkop-3 iIiUuX SingleAccordionstyle__StyledHeading-sc-1i82miq-6 evimrC"><button aria-expanded="true" aria-controls="accordion-item-body--place-weather" id="accordion-item-heading--place-weather" data-testid="visitor-info-accordion--item-place-weather-button" class="SingleAccordionstyle__AccordionButton-sc-1i82miq-3 kKcpoL"><span class="Typographystyle__HeadingLevel4-sc-86wkop-3 iIiUuX SingleAccordionstyle__StyledHeading-sc-1i82miq-6 AccordionItemstyle__StyledAccordionItemHeading-sc-zx14w3-0 evimrC ilaYYY">Weather</span><div class="SingleAccordionstyle__StyledIconWrapper-sc-1i82miq-0 fhOkGW"><span class="Iconstyle__SVGWrapper-sc-461blh-0 iMByXe SingleAccordionstyle__StyledIcon-sc-1i82miq-1 dsiumz" data-ui-icon-type="chevronDown"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="100%" height="100%"><g><path d="M1.4,3.5L8,10.1l6.6-6.6L16,4.9l-7.3,7.3c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3L0,4.9L1.4,3.5z"></path></g></svg></span></div></button></h2><div id="accordion-item-body--place-weather" aria-hidden="false" aria-labelledby="accordion-item-heading--place-weather" class="SingleAccordionstyle__AccordionBody-sc-1i82miq-4 gcKuQl accordion-item-expanded" style="--calc-height: 153px; visibility: visible;"><div><section class="Sectionstyle__StyledSection-sc-1rnt8u1-0 fFbYaE Placestyle__StyledSection-sc-7yy3d-7 GetInTouchstyle__GetInTouchSection-sc-1vc6bjb-0 dklRza iQIpCB"><div class="Sectionstyle__Inner-sc-1rnt8u1-1 hfPNYY"><div class="Sectionstyle__Content-sc-1rnt8u1-3"><div class="Gridstyle__Row-sc-sque-0 eqymcb nt-row"><div class="Gridstyle__Column-sc-sque-1 kOBmMQ nt-col nt-col-m12 nt-col-t6"><div style="display: flex; gap: 50px; "><div class=2weather-test-today"><h4>Today"s Weather: </h4><div id="today-weather-data"></div><img id="today-weather-icon"/></div><div class="weather-test-tomorrow"><h4>Tomorrow"s Weather: </h4><div id="tomorrow-weather-data"></div><img id="tomorrow-weather-icon"/></div></div></div></div></div></div></section></div></div></li>'
// );
// });
