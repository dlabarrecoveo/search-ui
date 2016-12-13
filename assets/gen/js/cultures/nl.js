/*
 * Globalize Culture nl
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "nl", "default", {
	name: "nl",
	englishName: "Dutch",
	nativeName: "Nederlands",
	language: "nl",
	numberFormat: {
		",": ".",
		".": ",",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["$ -n","$ n"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],
				namesAbbr: ["zo","ma","di","wo","do","vr","za"],
				namesShort: ["zo","ma","di","wo","do","vr","za"]
			},
			months: {
				names: ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],
				namesAbbr: ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d-M-yyyy",
				D: "dddd d MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd d MMMM yyyy H:mm",
				F: "dddd d MMMM yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
(function() {
var merge = function(obj1, obj2) {
  var obj3 = {};
  for(var attrname in obj1){obj3[attrname] = obj1[attrname]; }
  for(var attrname in obj2){obj3[attrname] = obj2[attrname]; }
  return obj3;
}
var dict = {
  "Unknown": "Onbekend",
  "And": "EN",
  "Authenticating": "Authenticatie van {0}...",
  "Clear": "Wissen van {0}",
  "CompleteQuery": "Volledige zoekopdracht",
  "Exclude": "Uitsluiten van {0}",
  "EnterTag": "Tag toevoegen",
  "Next": "Volgende",
  "Last": "Laatste",
  "Link": "Link",
  "Or": "OF",
  "Previous": "Vorige",
  "QueryDidntMatchAnyDocuments": "Uw zoekopdracht leverde geen documenten op",
  "QueryException": "Uw zoekopdracht bevat een fout: {0}.",
  "Me": "Ik",
  "Remove": "Verwijderen",
  "Search": "Zoeken",
  "SearchFor": "Zoeken naar {0}",
  "ShareQuery": "Zoekopdracht delen",
  "Preferences": "Voorkeuren",
  "LinkOpeningSettings": "Instellingen voor openen link",
  "Reauthenticate": "Herauthenticatie {0}",
  "ResultsFilteringExpression": "Resultaten filteruitdrukkingen",
  "FiltersInYourPreferences": "Filters in uw voorkeuren",
  "Create": "Aanmaken",
  "SearchIn": "Zoeken in {0}",
  "Seconds": "in {0} seconde<pl>n</pl>",
  "ShowingResultsOf": "Resulta<sn>at</sn><pl>ten</pl> {0}<pl>-{1}</pl> van {2}",
  "SwitchTo": "Overschakelen naar {0}",
  "Unexclude": "Niet uitsluiten van {0}",
  "ClearAllFilters": "Alle filters wissen",
  "SkipLogin": "Inloggen overslaan",
  "LoginInProgress": "Inloggen aan de gang, even wachten ...",
  "Login": "Inloggen",
  "GetStarted": "Beginnen",
  "More": "Meer",
  "Less": "Minder",
  "Settings": "Instellingen",
  "Score": "Score",
  "ScoreDescription": "De score wordt berekend aan de hand van het aantal keer dat een item voorkomt alsook van de positie in de resultaatset.",
  "Occurrences": "Aantal keer dat item voorkomt",
  "OccurrencesDescription": "Sorteren op aantal keer dat item voorkomt, met hoogste waarden eerst.",
  "Label": "Label",
  "Of": "van",
  "LabelDescription": "Alfabetisch sorteren op de veldwaarden.",
  "Value": "Waarde",
  "ValueDescription": "Sorteren op de waarden van het eerste berekende veld",
  "AlphaAscending": "Waarde oplopend",
  "AlphaDescending": "Waarde aflopend",
  "ChiSquare": "Chi-kwadraat",
  "Nosort": "Niet sorteren",
  "RelativeFrequency": "Relatieve frequentie",
  "RelativeFrequencyDescription": "Sorteren op basis van de relatieve frequentie van waarden. Minder voorkomende waarden zullen hoger staan.",
  "DateDistribution": "Datumverdeling",
  "Custom": "Gewoonte",
  "CustomDescription": "Sorteren op basis van een gewoontevolgorde",
  "ComputedField": "Berekend veld",
  "Ascending": "Oplopend",
  "Descending": "Aflopend",
  "noResultFor": "Geen resultaten voor {0}",
  "autoCorrectedQueryTo": "Zoekopdracht werd automatisch verbeterd naar {0}",
  "didYouMean": "Bedoelde u: {0}",
  "SuggestedResults": "Voorgestelde resultaten",
  "SuggestedQueries": "Voorgestelde zoekopdrachten",
  "MostRelevantItems": "Meest relevante items:",
  "AllItems": "Alle items:",
  "ShowLess": "Minder tonen",
  "ShowMore": "Meer tonen",
  "HideFacet": "Facet verbergen",
  "ShowFacet": "Facet tonen",
  "AndOthers": "en {0} ander(e)",
  "Others": "{0} ander(e)",
  "MostRelevantPosts": "Meest relevante posten:",
  "CompleteThread": "Volledige draad:",
  "ShowCompleteThread": "Volledige draad tonen:",
  "ShowOnlyTopMatchingPosts": "Enkel de bovenste overeenstemmende posten tonen",
  "MostRelevantReplies": "Meest relevante antwoorden:",
  "AllConversation": "Volledige conversatie:",
  "ShowAllConversation": "Volledige conversatie tonen",
  "ShowAllReplies": "Alle antwoorden tonen",
  "ShowOnlyMostRelevantReplies": "Enkel de meest relevante antwoorden tonen",
  "Close": "Sluiten",
  "Open": "Openen",
  "OpenInOutlookWhenPossible": "Openen in Outlook (wanneer mogelijk)",
  "AlwaysOpenInNewWindow": "Resultaten steeds in nieuw venster openen",
  "Quickview": "Snelle weergave",
  "ErrorReport": "Foutmelding",
  "OopsError": "Er ging iets mis op de server.",
  "ProblemPersists": "Neem contact op met de administrator als het probleem blijft voortduren.",
  "GoBack": "Ga terug",
  "Reset": "Reset",
  "Retry": "Opnieuw proberen",
  "MoreInfo": "Meer informatie",
  "Username": "Gebruikersnaam",
  "Password": "Wachtwoord",
  "PostedBy": "Gepost door",
  "CannotConnect": "Kan niet verbinden met het serveradres.",
  "BadUserPass": "Wachtwoord stemt niet overeen met gebruikersnaam.",
  "PleaseEnterYourCredentials": "Voer uw legitimatiebewijs in voor {0}.",
  "PleaseEnterYourSearchPage": "Voer de URL van uw zoekpagina in",
  "Collapse": "Invouwen",
  "Collapsable": "Invouwbaar",
  "Expand": "Uitvouwen",
  "Today": "Vandaag",
  "Yesterday": "Gisteren",
  "Tomorrow": "Morgen",
  "Duration": "Duur: {0}",
  "IndexDuration": "Duur van de index: {0}",
  "ProxyDuration": "Duur van de proxy: {0}",
  "ClientDuration": "Duur van de klant: {0}",
  "Unavailable": "Onbeschikbaar",
  "Reply": "Beantwoorden",
  "ReplyAll": "Allen beantwoorden",
  "Forward": "Doorsturen",
  "From": "Van",
  "Caption": "Titel",
  "Expression": "Uitdrukking",
  "Tab": "Tab",
  "Tabs": "Tabs",
  "EnterExpressionName": "Naam van de uitdrukking invoeren",
  "EnterExpressionToFilterWith": "Uitdrukking invoeren om resultaten te filteren",
  "SelectTab": "Tab selecteren",
  "SelectAll": "Alles selecteren",
  "PageUrl": "URL-pagina doorzoeken",
  "ErrorSavingToDevice": "Fout bij het opslaan van de informatie op uw toestel",
  "ErrorReadingFromDevice": "Fout bij het lezen van de informatie vanop uw toestel",
  "AppIntro": "Een productspecialist spreken die uw vragen over Coveo kan beantwoorden en u helpen te beslissen welke Coveo-oplossing geschikt is voor u. Of probeer een live demo!",
  "TryDemo": "Probeer de demo",
  "ContactUs": "Ons contacteren",
  "NewToCoveo": "Nieuw bij Coveo?",
  "LetUsHelpGetStarted": "Wij helpen u van start te gaan",
  "LikesThis": "{0} vind<sn>t</sn><pl>en</pl> dit leuk.",
  "CannotConnectSearchPage": "Kan niet verbinden met uw zoekpagina",
  "AreYouSureDeleteFilter": "Weet u zeker dat u de filter {0} met de uitdrukking {1} wilt verwijderen",
  "OnlineHelp": "Online Help",
  "Done": "Klaar",
  "SaveFacetState": "Deze facetstatus opslaan",
  "ClearFacetState": "Facetstatus wissen",
  "DisplayingTheOnlyMessage": "Het enige bericht in deze conversatie tonen",
  "NoNetworkConnection": "Nieuwe netwerkaansluiting",
  "UnknownConnection": "Onbekende aansluiting",
  "EthernetConnection": "Ethernetaansluiting",
  "WiFi": "WiFi-aansluiting",
  "CELL": "GSM-aansluiting",
  "CELL_2G": "2G-aansluiting",
  "CELL_3G": "3G-aansluiting",
  "CELL_4G": "4G-aansluiting",
  "Relevance": "Relevantie",
  "Date": "Datum",
  "Amount": "Hoeveelheid",
  "QueryExceptionNoException": "Geen uitzondering",
  "QueryExceptionInvalidSyntax": "Ongeldige syntaxis",
  "QueryExceptionInvalidCustomField": "Ongeldig klantenveld",
  "QueryExceptionInvalidDate": "Ongeldige datum",
  "QueryExceptionInvalidExactPhrase": "Ongeldige exacte zin",
  "QueryExceptionInvalidDateOp": "Ongeldige datum operator",
  "QueryExceptionInvalidNear": "Ongeldige NEAR operator",
  "QueryExceptionInvalidWeightedNear": "Ongeldige gewogen NEAR",
  "QueryExceptionInvalidTerm": "Ongeldige term",
  "QueryExceptionTooManyTerms": "Te veel termen",
  "QueryExceptionWildcardTooGeneral": "Wildcard te algemeen",
  "QueryExceptionInvalidSortField": "Ongeldig sorteerveld",
  "QueryExceptionInvalidSmallStringOp": "Ongeldige kleine string operator",
  "QueryExceptionRequestedResultsMax": "Maximum gevraagde resultaten",
  "QueryExceptionAggregatedMirrorDead": "Geaggregeerde mirror is offline",
  "QueryExceptionAggregatedMirrorQueryTimeOut": "Geaggregeerde mirror query-time-out",
  "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Geaggregeerde mirror ongeldig serienummer",
  "QueryExceptionAggregatedMirrorCannotConnect": "Geaggregeerde mirror kan geen verbinding maken",
  "QueryExceptionNotEnoughLeadingCharsWildcard": "Niet genoeg voorafgaande tekens voor wildcard",
  "QueryExceptionSecurityInverterNotFound": "Veiligheidsomvormer niet gevonden",
  "QueryExceptionSecurityInverterAccessDenied": "Toegang veiligheidsomvormer geweigerd",
  "QueryExceptionAggregatedMirrorCannotImpersonate": "Geaggregeerde mirror kan geen andere identiteit aannemen",
  "QueryExceptionUnexpected": "Onverwacht",
  "QueryExceptionAccessDenied": "Toegang geweigerd",
  "QueryExceptionSuperUserTokenInvalid": "Token supergebruiker ongeldig",
  "QueryExceptionSuperUserTokenExpired": "Token supergebruiker is verstreken",
  "QueryExceptionLicenseQueriesExpired": "Licentie zoekopdrachten verstreken",
  "QueryExceptionLicenseSuperUserTokenNotSupported": "Licentie token supergebruiker niet ondersteund",
  "QueryExceptionInvalidSession": "Ongeldige sessie",
  "QueryExceptionInvalidDocument": "Ongeldig document",
  "QueryExceptionSearchDisabled": "Zoeken onmogelijk gemaakt",
  "FileType": "Bestandtype",
  "ShowAttachment": "Bijlage tonen",
  "OnFeed": "op feed van {0}.",
  "Author": "Auteur",
  "NoTitle": "Geen titel",
  "CurrentSelections": "Huidige selecties",
  "AllContent": "Volledige inhoud",
  "CancelLastAction": "Laatste actie annuleren",
  "SearchTips": "Zoektips",
  "CheckSpelling": "Controleer de spelling van uw trefwoorden.",
  "TryUsingFewerKeywords": "Probeer minder, verschillende of algemenere trefwoorden te gebruiken.",
  "SelectFewerFilters": "Selecteer minder filters om uw opzoeking te verbreden.",
  "filetype_spportal": "Portaal",
  "filetype_spsite": "Site",
  "filetype_spuserprofile": "SharePoint Gebruiker",
  "filetype_sparea": "Gebied",
  "filetype_spannouncement": "Mededeling",
  "filetype_spannouncementlist": "Mededelingen",
  "filetype_spcontact": "Contact",
  "filetype_spcontactlist": "Contacten",
  "filetype_spcustomlist": "Aangepaste lijsten",
  "filetype_spdiscussionboard": "Discussieforum",
  "filetype_spdiscussionboardlist": "Discussieforums",
  "filetype_spdocumentlibrarylist": "Document bibliotheek",
  "filetype_spevent": "Gebeurtenis",
  "filetype_speventlist": "Gebeurtenissen",
  "filetype_spformlibrarylist": "Formulierbibliotheek",
  "filetype_spissue": "Probleem",
  "filetype_spissuelist": "Problemen",
  "filetype_splink": "Link",
  "filetype_splinklist": "Links",
  "filetype_sppicturelibrarylist": "Afbeeldingsbibliotheek",
  "filetype_spsurvey": "Enquête",
  "filetype_spsurveylist": "Enquêtes",
  "filetype_sptask": "Taak",
  "filetype_sptasklist": "Taken",
  "filetype_spagenda": "Agenda",
  "filetype_spagendalist": "Agenda's",
  "filetype_spattendee": "Genodigde",
  "filetype_spattendeelist": "Genodigden",
  "filetype_spcustomgridlist": "Aangepaste rasters",
  "filetype_spdecision": "Beslissing",
  "filetype_spdecisionlist": "Beslissingen",
  "filetype_spobjective": "Intentie",
  "filetype_spobjectivelist": "Intenties",
  "filetype_sptextbox": "Tekstvak",
  "filetype_sptextboxlist": "Tekstvak lijst",
  "filetype_spthingstobring": "Ding meenemen",
  "filetype_spthingstobringlist": "Dingen meenemen",
  "filetype_sparealisting": "Lijst van gebieden",
  "filetype_spmeetingserie": "Vergadering serie",
  "filetype_spmeetingserielist": "Lijst vergadering serie",
  "filetype_spsitedirectory": "Site Directory Item",
  "filetype_spsitedirectorylist": "Site Directory",
  "filetype_spdatasource": "Inhoudsbron",
  "filetype_spdatasourcelist": "Lijst van Inhoudsbronnen",
  "filetype_splisttemplatecataloglist": "Sjaboloon catalogus lijst",
  "filetype_spwebpartcataloglist": "Webpart catalog lijst",
  "filetype_spwebtemplatecataloglist": "Web Template Catalogus lijst",
  "filetype_spworkspacepagelist": "Werkgebied pagina's lijst",
  "filetype_spunknownlist": "Aangepaste lijst",
  "filetype_spadministratortask": "Administrator - Taak",
  "filetype_spadministratortasklist": "Administrator - Taken",
  "filetype_spareadocumentlibrarylist": "Dokument bibliotheek gebied",
  "filetype_spblogcategory": "Blog Categorie",
  "filetype_spblogcategorylist": "Blog Categorie",
  "filetype_spblogcomment": "Blog Commentaar",
  "filetype_spblogcommentlist": "Blog Commentaren",
  "filetype_spblogpost": "Blog bijdrage",
  "filetype_spblogpostlist": "Blog bijdragen",
  "filetype_spdataconnectionlibrarylist": "Data connectie bibliotheek",
  "filetype_spdistributiongroup": "Distributiegroep",
  "filetype_spdistributiongrouplist": "Distributiegroepen",
  "filetype_spipfslist": "InfoPath Form server",
  "filetype_spkeyperformanceindicator": "Key Performance Indicator",
  "filetype_spkeyperformanceindicatorlist": "Key Performance Indicatoren",
  "filetype_splanguagesandtranslator": "Taal en vertalingen",
  "filetype_splanguagesandtranslatorlist": "Talen en vertalingen",
  "filetype_spmasterpagescataloglist": "Masterpage bibliotheek",
  "filetype_spnocodeworkflowlibrarylist": "Geen code werkproces bibliotheek ",
  "filetype_spprojecttask": "Projecttaak",
  "filetype_spprojecttasklist": "Projekttaken",
  "filetype_sppublishingpageslibrarylist": "Pagina bibliotheek",
  "filetype_spreportdocumentlibrarylist": "Rapport documenten bibliotheek",
  "filetype_spreportlibrarylist": "Rapport bibliotheek",
  "filetype_spslidelibrarylist": "Slide bibliotheek",
  "filetype_sptab": "Tabbladen",
  "filetype_sptablist": "Tabbladen lijst",
  "filetype_sptranslationmanagementlibrarylist": "Vertalings management bibliotheek",
  "filetype_spuserinformation": "Gebruiker informatie",
  "filetype_spuserinformationlist": "Lijst van gebruikers",
  "filetype_spwikipagelibrarylist": "Wiki pagina bibliotheek",
  "filetype_spworkflowhistory": "Werkproces geschiedenis",
  "filetype_spworkflowhistorylist": "Werkproces geschiedenis",
  "filetype_spworkflowprocess": "Door gebruiker gedefinieert werkproces",
  "filetype_spworkflowprocesslist": "Door gebruiker gedefinieerde werkprocessen",
  "filetype_sppublishingimageslibrarylist": "Gepubliceerde Afbeeldingen Bibliotheek",
  "filetype_spcirculation": "Circulatie",
  "filetype_spcirculationlist": "Circulaties",
  "filetype_spdashboardslibrarylist": "Dashboard bibliotheek",
  "filetype_spdataconnectionforperformancepointlibrarylist": "Data connectie voor Peformance Point Bibliotheek",
  "filetype_sphealthreport": "Status rapport",
  "filetype_sphealthreportlist": "Status rapporten",
  "filetype_sphealthrule": "Status regel",
  "filetype_sphealthrulelist": "Status regels",
  "filetype_spimedictionary": "IME Dictionary",
  "filetype_spimedictionarylist": "IME Dictionaries",
  "filetype_spperformancepointcontent": "Performance Point Content",
  "filetype_spperformancepointcontentlist": "Performance Point Contents",
  "filetype_spphonecallmemo": "Telefoongesprek memo",
  "filetype_spphonecallmemolist": "Telefoongesprek memo's",
  "filetype_sprecordlibrarylist": "Record Bibliotheek",
  "filetype_spresource": "Resource",
  "filetype_spresourcelist": "Resources",
  "filetype_spprocessdiagramslibrarylist": "Proces Diagram Bibliotheek",
  "filetype_spsitethemeslibrarylist": "Site Theme Library",
  "filetype_spsolutionslibrarylist": "Oplossing bibliotheek",
  "filetype_spwfpublibrarylist": "WFPUB Library",
  "filetype_spwhereabout": "Waar is",
  "filetype_spwhereaboutlist": "Waar zijn",
  "filetype_spdocumentlink": "Linken naar een dokument",
  "filetype_spdocumentset": "Dokument set",
  "filetype_spmicrofeedpost": "",
  "filetype_spmicrofeedlist": "",
  "filetype_splistfolder": "Mappenlijst",
}
  var locales = String["locales"] || (String["locales"] = {});
  locales["nl"] = merge(locales["nl"], dict);
  String["toLocaleString"].call(this, { "nl": dict });
  String["locale"] = "nl";
  String["defaultLocale"] = "en";
  Globalize.culture("nl")})();
if(!window.Coveo){window.Coveo = {};}
Coveo.setLanguageAfterPageLoaded = function() {
var merge = function(obj1, obj2) {
  var obj3 = {};
  for(var attrname in obj1){obj3[attrname] = obj1[attrname]; }
  for(var attrname in obj2){obj3[attrname] = obj2[attrname]; }
  return obj3;
}

var dict = {
  "Unknown": "Onbekend",
  "And": "EN",
  "Authenticating": "Authenticatie van {0}...",
  "Clear": "Wissen van {0}",
  "CompleteQuery": "Volledige zoekopdracht",
  "Exclude": "Uitsluiten van {0}",
  "EnterTag": "Tag toevoegen",
  "Next": "Volgende",
  "Last": "Laatste",
  "Link": "Link",
  "Or": "OF",
  "Previous": "Vorige",
  "QueryDidntMatchAnyDocuments": "Uw zoekopdracht leverde geen documenten op",
  "QueryException": "Uw zoekopdracht bevat een fout: {0}.",
  "Me": "Ik",
  "Remove": "Verwijderen",
  "Search": "Zoeken",
  "SearchFor": "Zoeken naar {0}",
  "ShareQuery": "Zoekopdracht delen",
  "Preferences": "Voorkeuren",
  "LinkOpeningSettings": "Instellingen voor openen link",
  "Reauthenticate": "Herauthenticatie {0}",
  "ResultsFilteringExpression": "Resultaten filteruitdrukkingen",
  "FiltersInYourPreferences": "Filters in uw voorkeuren",
  "Create": "Aanmaken",
  "SearchIn": "Zoeken in {0}",
  "Seconds": "in {0} seconde<pl>n</pl>",
  "ShowingResultsOf": "Resulta<sn>at</sn><pl>ten</pl> {0}<pl>-{1}</pl> van {2}",
  "SwitchTo": "Overschakelen naar {0}",
  "Unexclude": "Niet uitsluiten van {0}",
  "ClearAllFilters": "Alle filters wissen",
  "SkipLogin": "Inloggen overslaan",
  "LoginInProgress": "Inloggen aan de gang, even wachten ...",
  "Login": "Inloggen",
  "GetStarted": "Beginnen",
  "More": "Meer",
  "Less": "Minder",
  "Settings": "Instellingen",
  "Score": "Score",
  "ScoreDescription": "De score wordt berekend aan de hand van het aantal keer dat een item voorkomt alsook van de positie in de resultaatset.",
  "Occurrences": "Aantal keer dat item voorkomt",
  "OccurrencesDescription": "Sorteren op aantal keer dat item voorkomt, met hoogste waarden eerst.",
  "Label": "Label",
  "Of": "van",
  "LabelDescription": "Alfabetisch sorteren op de veldwaarden.",
  "Value": "Waarde",
  "ValueDescription": "Sorteren op de waarden van het eerste berekende veld",
  "AlphaAscending": "Waarde oplopend",
  "AlphaDescending": "Waarde aflopend",
  "ChiSquare": "Chi-kwadraat",
  "Nosort": "Niet sorteren",
  "RelativeFrequency": "Relatieve frequentie",
  "RelativeFrequencyDescription": "Sorteren op basis van de relatieve frequentie van waarden. Minder voorkomende waarden zullen hoger staan.",
  "DateDistribution": "Datumverdeling",
  "Custom": "Gewoonte",
  "CustomDescription": "Sorteren op basis van een gewoontevolgorde",
  "ComputedField": "Berekend veld",
  "Ascending": "Oplopend",
  "Descending": "Aflopend",
  "noResultFor": "Geen resultaten voor {0}",
  "autoCorrectedQueryTo": "Zoekopdracht werd automatisch verbeterd naar {0}",
  "didYouMean": "Bedoelde u: {0}",
  "SuggestedResults": "Voorgestelde resultaten",
  "SuggestedQueries": "Voorgestelde zoekopdrachten",
  "MostRelevantItems": "Meest relevante items:",
  "AllItems": "Alle items:",
  "ShowLess": "Minder tonen",
  "ShowMore": "Meer tonen",
  "HideFacet": "Facet verbergen",
  "ShowFacet": "Facet tonen",
  "AndOthers": "en {0} ander(e)",
  "Others": "{0} ander(e)",
  "MostRelevantPosts": "Meest relevante posten:",
  "CompleteThread": "Volledige draad:",
  "ShowCompleteThread": "Volledige draad tonen:",
  "ShowOnlyTopMatchingPosts": "Enkel de bovenste overeenstemmende posten tonen",
  "MostRelevantReplies": "Meest relevante antwoorden:",
  "AllConversation": "Volledige conversatie:",
  "ShowAllConversation": "Volledige conversatie tonen",
  "ShowAllReplies": "Alle antwoorden tonen",
  "ShowOnlyMostRelevantReplies": "Enkel de meest relevante antwoorden tonen",
  "Close": "Sluiten",
  "Open": "Openen",
  "OpenInOutlookWhenPossible": "Openen in Outlook (wanneer mogelijk)",
  "AlwaysOpenInNewWindow": "Resultaten steeds in nieuw venster openen",
  "Quickview": "Snelle weergave",
  "ErrorReport": "Foutmelding",
  "OopsError": "Er ging iets mis op de server.",
  "ProblemPersists": "Neem contact op met de administrator als het probleem blijft voortduren.",
  "GoBack": "Ga terug",
  "Reset": "Reset",
  "Retry": "Opnieuw proberen",
  "MoreInfo": "Meer informatie",
  "Username": "Gebruikersnaam",
  "Password": "Wachtwoord",
  "PostedBy": "Gepost door",
  "CannotConnect": "Kan niet verbinden met het serveradres.",
  "BadUserPass": "Wachtwoord stemt niet overeen met gebruikersnaam.",
  "PleaseEnterYourCredentials": "Voer uw legitimatiebewijs in voor {0}.",
  "PleaseEnterYourSearchPage": "Voer de URL van uw zoekpagina in",
  "Collapse": "Invouwen",
  "Collapsable": "Invouwbaar",
  "Expand": "Uitvouwen",
  "Today": "Vandaag",
  "Yesterday": "Gisteren",
  "Tomorrow": "Morgen",
  "Duration": "Duur: {0}",
  "IndexDuration": "Duur van de index: {0}",
  "ProxyDuration": "Duur van de proxy: {0}",
  "ClientDuration": "Duur van de klant: {0}",
  "Unavailable": "Onbeschikbaar",
  "Reply": "Beantwoorden",
  "ReplyAll": "Allen beantwoorden",
  "Forward": "Doorsturen",
  "From": "Van",
  "Caption": "Titel",
  "Expression": "Uitdrukking",
  "Tab": "Tab",
  "Tabs": "Tabs",
  "EnterExpressionName": "Naam van de uitdrukking invoeren",
  "EnterExpressionToFilterWith": "Uitdrukking invoeren om resultaten te filteren",
  "SelectTab": "Tab selecteren",
  "SelectAll": "Alles selecteren",
  "PageUrl": "URL-pagina doorzoeken",
  "ErrorSavingToDevice": "Fout bij het opslaan van de informatie op uw toestel",
  "ErrorReadingFromDevice": "Fout bij het lezen van de informatie vanop uw toestel",
  "AppIntro": "Een productspecialist spreken die uw vragen over Coveo kan beantwoorden en u helpen te beslissen welke Coveo-oplossing geschikt is voor u. Of probeer een live demo!",
  "TryDemo": "Probeer de demo",
  "ContactUs": "Ons contacteren",
  "NewToCoveo": "Nieuw bij Coveo?",
  "LetUsHelpGetStarted": "Wij helpen u van start te gaan",
  "LikesThis": "{0} vind<sn>t</sn><pl>en</pl> dit leuk.",
  "CannotConnectSearchPage": "Kan niet verbinden met uw zoekpagina",
  "AreYouSureDeleteFilter": "Weet u zeker dat u de filter {0} met de uitdrukking {1} wilt verwijderen",
  "OnlineHelp": "Online Help",
  "Done": "Klaar",
  "SaveFacetState": "Deze facetstatus opslaan",
  "ClearFacetState": "Facetstatus wissen",
  "DisplayingTheOnlyMessage": "Het enige bericht in deze conversatie tonen",
  "NoNetworkConnection": "Nieuwe netwerkaansluiting",
  "UnknownConnection": "Onbekende aansluiting",
  "EthernetConnection": "Ethernetaansluiting",
  "WiFi": "WiFi-aansluiting",
  "CELL": "GSM-aansluiting",
  "CELL_2G": "2G-aansluiting",
  "CELL_3G": "3G-aansluiting",
  "CELL_4G": "4G-aansluiting",
  "Relevance": "Relevantie",
  "Date": "Datum",
  "Amount": "Hoeveelheid",
  "QueryExceptionNoException": "Geen uitzondering",
  "QueryExceptionInvalidSyntax": "Ongeldige syntaxis",
  "QueryExceptionInvalidCustomField": "Ongeldig klantenveld",
  "QueryExceptionInvalidDate": "Ongeldige datum",
  "QueryExceptionInvalidExactPhrase": "Ongeldige exacte zin",
  "QueryExceptionInvalidDateOp": "Ongeldige datum operator",
  "QueryExceptionInvalidNear": "Ongeldige NEAR operator",
  "QueryExceptionInvalidWeightedNear": "Ongeldige gewogen NEAR",
  "QueryExceptionInvalidTerm": "Ongeldige term",
  "QueryExceptionTooManyTerms": "Te veel termen",
  "QueryExceptionWildcardTooGeneral": "Wildcard te algemeen",
  "QueryExceptionInvalidSortField": "Ongeldig sorteerveld",
  "QueryExceptionInvalidSmallStringOp": "Ongeldige kleine string operator",
  "QueryExceptionRequestedResultsMax": "Maximum gevraagde resultaten",
  "QueryExceptionAggregatedMirrorDead": "Geaggregeerde mirror is offline",
  "QueryExceptionAggregatedMirrorQueryTimeOut": "Geaggregeerde mirror query-time-out",
  "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Geaggregeerde mirror ongeldig serienummer",
  "QueryExceptionAggregatedMirrorCannotConnect": "Geaggregeerde mirror kan geen verbinding maken",
  "QueryExceptionNotEnoughLeadingCharsWildcard": "Niet genoeg voorafgaande tekens voor wildcard",
  "QueryExceptionSecurityInverterNotFound": "Veiligheidsomvormer niet gevonden",
  "QueryExceptionSecurityInverterAccessDenied": "Toegang veiligheidsomvormer geweigerd",
  "QueryExceptionAggregatedMirrorCannotImpersonate": "Geaggregeerde mirror kan geen andere identiteit aannemen",
  "QueryExceptionUnexpected": "Onverwacht",
  "QueryExceptionAccessDenied": "Toegang geweigerd",
  "QueryExceptionSuperUserTokenInvalid": "Token supergebruiker ongeldig",
  "QueryExceptionSuperUserTokenExpired": "Token supergebruiker is verstreken",
  "QueryExceptionLicenseQueriesExpired": "Licentie zoekopdrachten verstreken",
  "QueryExceptionLicenseSuperUserTokenNotSupported": "Licentie token supergebruiker niet ondersteund",
  "QueryExceptionInvalidSession": "Ongeldige sessie",
  "QueryExceptionInvalidDocument": "Ongeldig document",
  "QueryExceptionSearchDisabled": "Zoeken onmogelijk gemaakt",
  "FileType": "Bestandtype",
  "ShowAttachment": "Bijlage tonen",
  "OnFeed": "op feed van {0}.",
  "Author": "Auteur",
  "NoTitle": "Geen titel",
  "CurrentSelections": "Huidige selecties",
  "AllContent": "Volledige inhoud",
  "CancelLastAction": "Laatste actie annuleren",
  "SearchTips": "Zoektips",
  "CheckSpelling": "Controleer de spelling van uw trefwoorden.",
  "TryUsingFewerKeywords": "Probeer minder, verschillende of algemenere trefwoorden te gebruiken.",
  "SelectFewerFilters": "Selecteer minder filters om uw opzoeking te verbreden.",
  "filetype_spportal": "Portaal",
  "filetype_spsite": "Site",
  "filetype_spuserprofile": "SharePoint Gebruiker",
  "filetype_sparea": "Gebied",
  "filetype_spannouncement": "Mededeling",
  "filetype_spannouncementlist": "Mededelingen",
  "filetype_spcontact": "Contact",
  "filetype_spcontactlist": "Contacten",
  "filetype_spcustomlist": "Aangepaste lijsten",
  "filetype_spdiscussionboard": "Discussieforum",
  "filetype_spdiscussionboardlist": "Discussieforums",
  "filetype_spdocumentlibrarylist": "Document bibliotheek",
  "filetype_spevent": "Gebeurtenis",
  "filetype_speventlist": "Gebeurtenissen",
  "filetype_spformlibrarylist": "Formulierbibliotheek",
  "filetype_spissue": "Probleem",
  "filetype_spissuelist": "Problemen",
  "filetype_splink": "Link",
  "filetype_splinklist": "Links",
  "filetype_sppicturelibrarylist": "Afbeeldingsbibliotheek",
  "filetype_spsurvey": "Enquête",
  "filetype_spsurveylist": "Enquêtes",
  "filetype_sptask": "Taak",
  "filetype_sptasklist": "Taken",
  "filetype_spagenda": "Agenda",
  "filetype_spagendalist": "Agenda's",
  "filetype_spattendee": "Genodigde",
  "filetype_spattendeelist": "Genodigden",
  "filetype_spcustomgridlist": "Aangepaste rasters",
  "filetype_spdecision": "Beslissing",
  "filetype_spdecisionlist": "Beslissingen",
  "filetype_spobjective": "Intentie",
  "filetype_spobjectivelist": "Intenties",
  "filetype_sptextbox": "Tekstvak",
  "filetype_sptextboxlist": "Tekstvak lijst",
  "filetype_spthingstobring": "Ding meenemen",
  "filetype_spthingstobringlist": "Dingen meenemen",
  "filetype_sparealisting": "Lijst van gebieden",
  "filetype_spmeetingserie": "Vergadering serie",
  "filetype_spmeetingserielist": "Lijst vergadering serie",
  "filetype_spsitedirectory": "Site Directory Item",
  "filetype_spsitedirectorylist": "Site Directory",
  "filetype_spdatasource": "Inhoudsbron",
  "filetype_spdatasourcelist": "Lijst van Inhoudsbronnen",
  "filetype_splisttemplatecataloglist": "Sjaboloon catalogus lijst",
  "filetype_spwebpartcataloglist": "Webpart catalog lijst",
  "filetype_spwebtemplatecataloglist": "Web Template Catalogus lijst",
  "filetype_spworkspacepagelist": "Werkgebied pagina's lijst",
  "filetype_spunknownlist": "Aangepaste lijst",
  "filetype_spadministratortask": "Administrator - Taak",
  "filetype_spadministratortasklist": "Administrator - Taken",
  "filetype_spareadocumentlibrarylist": "Dokument bibliotheek gebied",
  "filetype_spblogcategory": "Blog Categorie",
  "filetype_spblogcategorylist": "Blog Categorie",
  "filetype_spblogcomment": "Blog Commentaar",
  "filetype_spblogcommentlist": "Blog Commentaren",
  "filetype_spblogpost": "Blog bijdrage",
  "filetype_spblogpostlist": "Blog bijdragen",
  "filetype_spdataconnectionlibrarylist": "Data connectie bibliotheek",
  "filetype_spdistributiongroup": "Distributiegroep",
  "filetype_spdistributiongrouplist": "Distributiegroepen",
  "filetype_spipfslist": "InfoPath Form server",
  "filetype_spkeyperformanceindicator": "Key Performance Indicator",
  "filetype_spkeyperformanceindicatorlist": "Key Performance Indicatoren",
  "filetype_splanguagesandtranslator": "Taal en vertalingen",
  "filetype_splanguagesandtranslatorlist": "Talen en vertalingen",
  "filetype_spmasterpagescataloglist": "Masterpage bibliotheek",
  "filetype_spnocodeworkflowlibrarylist": "Geen code werkproces bibliotheek ",
  "filetype_spprojecttask": "Projecttaak",
  "filetype_spprojecttasklist": "Projekttaken",
  "filetype_sppublishingpageslibrarylist": "Pagina bibliotheek",
  "filetype_spreportdocumentlibrarylist": "Rapport documenten bibliotheek",
  "filetype_spreportlibrarylist": "Rapport bibliotheek",
  "filetype_spslidelibrarylist": "Slide bibliotheek",
  "filetype_sptab": "Tabbladen",
  "filetype_sptablist": "Tabbladen lijst",
  "filetype_sptranslationmanagementlibrarylist": "Vertalings management bibliotheek",
  "filetype_spuserinformation": "Gebruiker informatie",
  "filetype_spuserinformationlist": "Lijst van gebruikers",
  "filetype_spwikipagelibrarylist": "Wiki pagina bibliotheek",
  "filetype_spworkflowhistory": "Werkproces geschiedenis",
  "filetype_spworkflowhistorylist": "Werkproces geschiedenis",
  "filetype_spworkflowprocess": "Door gebruiker gedefinieert werkproces",
  "filetype_spworkflowprocesslist": "Door gebruiker gedefinieerde werkprocessen",
  "filetype_sppublishingimageslibrarylist": "Gepubliceerde Afbeeldingen Bibliotheek",
  "filetype_spcirculation": "Circulatie",
  "filetype_spcirculationlist": "Circulaties",
  "filetype_spdashboardslibrarylist": "Dashboard bibliotheek",
  "filetype_spdataconnectionforperformancepointlibrarylist": "Data connectie voor Peformance Point Bibliotheek",
  "filetype_sphealthreport": "Status rapport",
  "filetype_sphealthreportlist": "Status rapporten",
  "filetype_sphealthrule": "Status regel",
  "filetype_sphealthrulelist": "Status regels",
  "filetype_spimedictionary": "IME Dictionary",
  "filetype_spimedictionarylist": "IME Dictionaries",
  "filetype_spperformancepointcontent": "Performance Point Content",
  "filetype_spperformancepointcontentlist": "Performance Point Contents",
  "filetype_spphonecallmemo": "Telefoongesprek memo",
  "filetype_spphonecallmemolist": "Telefoongesprek memo's",
  "filetype_sprecordlibrarylist": "Record Bibliotheek",
  "filetype_spresource": "Resource",
  "filetype_spresourcelist": "Resources",
  "filetype_spprocessdiagramslibrarylist": "Proces Diagram Bibliotheek",
  "filetype_spsitethemeslibrarylist": "Site Theme Library",
  "filetype_spsolutionslibrarylist": "Oplossing bibliotheek",
  "filetype_spwfpublibrarylist": "WFPUB Library",
  "filetype_spwhereabout": "Waar is",
  "filetype_spwhereaboutlist": "Waar zijn",
  "filetype_spdocumentlink": "Linken naar een dokument",
  "filetype_spdocumentset": "Dokument set",
  "filetype_spmicrofeedpost": "",
  "filetype_spmicrofeedlist": "",
  "filetype_splistfolder": "Mappenlijst",
}

  var locales = String["locales"] || (String["locales"] = {});
  locales["nl"] = merge(locales["nl"], dict);
  String["toLocaleString"].call(this, { "nl": dict });
  String["locale"] = "nl";
  String["defaultLocale"] = "en";
  Globalize.culture("nl")
}