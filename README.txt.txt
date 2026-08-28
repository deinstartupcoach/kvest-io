Ziel dieses Projektes ist im ersten Schritt die Erstellung verschiedener Mockup-Views einer B2B SaaS Application mit dem Namen "kvest.io" für die Suche nach geeigneten Targets für Buyouts im Rahmen einer Nachfolgeregelung sowie die entsprechende C-Level Managersuche.

Hintergrund: die App baut auf einer laufend aktualisierten Datenaggregation verschiedender Datenbanken und Scraping-Ergebnisse auf, quasi ein "Brightdata" für M&A/Executive Search. Die Findings werden dann miteinander kombiniert, um differenzierte Bewertungen einzelner Firmen- und Personen-Profile zu ermöglichen. Wichtig: die App trifft dabei keine eigenen Bewertungen im Sinne eines globalen Summaries mit Empfehlungsabgabe, sondern liefert vor allem aggregierte Informationen und ggf. Summaries aus Media-Checks.

Die Mockups sollen in React oder Svelte mit der Nutzung entsprechend vorhandener Component-Libraries erstellt werden. Ein Color Scheme der App sowie ein Logo liegen im Ordner "Ressources/Design" vor.

Die 4 Mockups sollen folgendes beinhalten:

1) Listenansicht der Firmensuche (Company Search) mit entsprechenden Suchfiltern (Name der Firma mit Gesellschaftsform, Mindestalter der Firma, Bundesland (Multiple Choice), Mitarbeiteranzahl (von bis enums) Gesellschaftszweck/Industrieschlüssel. Altersverteilung innerhalb der Eignerstruktur, ggf. Alter der Geschäftsführer, Bilanzsumme (Mio. EUR x,x), Entwicklung Bilanzsumme (Pfeil), Bilanzgewinn (Mio. EUR x,x), Entwicklung (Pfeil), Media-Check (Rating bis 5 Sterne, daneben Pfeil für Tendenz)

2) Popup über der Listenansicht (blurred) mit allen genannten infos aus der Listenansicht zusätzlich mit Kontaktdaten Eigner/GF, Link zum Unternehmensregistereintrag, Graph-Darstellung von Gesellschaftern und weiteren Beteiligungen), Säulendigramm Bilanzsumme und -gewinn, Schlüsselkunden, Media-Check Summary (Was weiß man aus Medien und LinkedIn über die Firma), und Export to CRM / add to Watchlist Button

3) Listenansicht Candidate Search in ziemlich ähnlicher Abbildung wie 1), nur mit einem Suchfeld für eine freie Beschreibung der Requirements plus Stellenbeschreibung-PDF-Upload Möglichkeit, Altersspektrum (von bis enum), Jahre Erfahrung (von bis), davon Führungserfahrung, davon Branchenerfahrung, Nähe zum Standort - darunter wieder eine Liste mit Kandidaten

4) Kandidaten-Popup über der Listenansicht (blurred) mit Name, Foto aus LinkedIn plus mit allen genannten infos aus der Listenansicht zusätzlich mit Kontaktdaten, LinkedIn Employment-History zum Scrollen mit Bewertung der Position/Arbeitgeber, Candidate Summary inkl. Informationen aus Social Media (Familie, fährt gern Motorrad etc.), sowie einem großen Block zum derzeitigen Arbeitgeber (Kununu-Bewertungen inkl Tendenz-Pfeil, Media-Auswertung Summary, geschätztes Gehaltslevel aus Glassdoor, Entwicklung Jahresergebnisse und Mitarbeiteranzahl)

Dazu brauchen wir noch typische B2B SaaS "Boilerplates" (Menü, Login, Settings etc.), damit die "Website"/Mockups möglich echt aussieht.