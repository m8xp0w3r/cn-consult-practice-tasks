export class Entry {
  public title: string;
  public text: string;
  public date: Date;
  /**
   * @param text {string} The text of this entry.
   * @param title {string} The title of this entry.
   * @param date {Date} The date of this entry.
   */
  constructor(title: string, text: string, date: Date)
  {
    this.title = title;
    this.text = text;
    this.date = date;
  }

  public static createEntries(): Entry[] {
    const store: Entry[] = [];

    store.push(new Entry("Neue Version 2.1.1 wurde veröffentlicht", "Das Generieren von Verspätungsstatistiken wurde überarbeitet.", new Date("2012,07,26")));
    store.push(new Entry("Neue Version 2.0 Beta1 wurde veröffentlicht", "DiLoc 2.0 wurde komplett runderneuert und modernisiert. Die Startseite wurde komplett überarbeitet und ermöglicht nun wichtige Informationen übersichtlich darzustellen. Alle Module werden jetzt in Reitern oben dargestellt. Dies bietet viele Vorteile: Schneller Wechsel zwischen Modulen ist möglich und man ist jedes mal wieder dort wo man das Modul verlassen hat. DiLoc 2.0 ist jetzt mehrsprachig. Vorerst stehen Englisch und Deutsch als Sprachen zur Verfügung. Sync-Manager, Datei-Manager und Gerätemanager sind jetzt mit Tabs getrennt, dies vereinfacht das Wechseln von einer Komponente auf die andere. Es ist jetzt auch möglich eine Liste deaktivierter Geräte zu exportieren. Es ist jetzt möglich deaktivierte Geräte wieder zu aktivieren.", new Date("2011,06,16")));
    store.push(new Entry("Neue Version 2.0 Beta7 wurde veröffentlicht", "Die KACE-Integration ist jetzt verfügbar und kann aktiviert werden. Sync-Manager Performance der Geräte-Tabelle mit vielen Geräten signifikant verbessert.", new Date("2011,08,12")));
    store.push(new Entry("Neue Version 2.0 wurde veröffentlicht", "Ein Fehler beim Laden einer deutschen Übersetzungsdatei wurde behoben. Textfehler wurden korrigiert. SyncManager: Der Filter auf Geräte ohne Gruppe wird im Filtermenü jetzt richtig bezeichnet. Die Anzeige der Sortierreihenfolge in Kombination mit einem Filter wurde korrigiert. Verwaltung: Die Administration wurde umbenannt in Verwaltung.", new Date("2011,09,22")));
    store.push(new Entry("Neue Version 2.2 Beta4 wurde veröffentlicht", "Beim Anmelden aus dem lokalen Netzwerk ist der Haken Login von öffentlichem Computer jetzt automatisch nicht gesetzt. SyncManager: Das Verschieben von Tabs im Konfigurationsmanager ist jetzt wieder möglich. PNG-Bilder können jetzt per Doppelklick angeschaut werden. Tageszirkular: Das Anlegen von Vorlagen funktioniert jetzt korrekt. Das Anlegen von Allgemeinen Informationen funktioniert jetzt korrekt. Fahrplanmanager: Das Laden von Wochen funktioniert jetzt auch mit vielen Zügen.", new Date("2012,09,26")));
    return store;
  }
}
