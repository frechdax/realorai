# REAL OR AI?

Ein Mobile-First-Swipe-Spiel nach dem Tinder-Prinzip: Spieler sehen ein Bild und entscheiden, ob es **KI-generiert** oder ein **echtes Foto** ist.

## Spielprinzip

- **Nach links wischen → KI-generiert**
- **Nach rechts wischen → echtes Foto**
- Alternativ funktionieren die beiden Buttons unter der Karte.
- Nach jeder Entscheidung erscheint sofort die Auflösung mit kurzer Erklärung.
- Richtige Antworten erhöhen Punktestand und Serie.
- Am Ende werden Trefferquote und beste Serie angezeigt.
- Der persönliche Bestwert wird lokal im Browser gespeichert.

## Aktueller Stand

Der MVP ist eine statische Single-Page-Web-App ohne Backend und ohne Build-Prozess.

Enthalten sind:
- Tinder-artige Swipe-Geste mit Pointer Events
- Kartenanimation beim Ziehen und Wegwischen
- Vorschau der nächsten Karte im Stapel
- Mobile-First-Layout mit iPhone Safe Areas
- Tastatursteuerung am Desktop
- Punkte und Streak
- Fortschrittsanzeige
- Auflösung und Erklärung nach jeder Runde
- lokaler Bestwert via `localStorage`
- Web Share API mit Clipboard-Fallback
- einmalige Swipe-Einführung
- 12 Beispielrunden

## Projektstruktur

```text
realorai/
├── index.html
├── styles.css
├── app.js
├── vercel.json
├── .gitignore
├── README.md
└── docs/
    └── ROADMAP.md
```

## Lokal starten

Für zuverlässiges Verhalten auf Mobilgeräten am besten über einen lokalen Webserver:

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen.

Alternativ:

```bash
npx serve .
```

## Deployment auf Vercel

1. In Vercel **Add New → Project** wählen.
2. Das GitHub-Repository `realorai` importieren.
3. Framework Preset: **Other**.
4. Kein Build Command notwendig.
5. Deploy starten.

## Bildquellen

Der MVP lädt Bilder derzeit extern:
- dokumentiert KI-generierte Bilder über Wikimedia Commons
- echte Beispielbilder über Lorem Picsum

Die Quelle wird nach der Entscheidung im Spiel eingeblendet.

Für eine öffentliche Produktionsversion sollten alle Bilder kuratiert, dauerhaft gespeichert und ihre Lizenz-/Attributionsbedingungen einzeln dokumentiert werden. Remote-Dateinamen können sich ändern oder ausfallen.

## Steuerung

| Aktion | Mobile | Desktop |
|---|---|---|
| KI wählen | nach links wischen | Pfeil links |
| Echt wählen | nach rechts wischen | Pfeil rechts |
| Alternative Wahl | Buttons | Buttons |
| Nächste Runde | Button | Enter / Leertaste |

## Technik

- Vanilla HTML5
- CSS3
- Vanilla JavaScript
- Pointer Events
- Local Storage
- Web Share API
- keine externen JavaScript-Abhängigkeiten
- kein Tracking
- kein Login
- kein Backend

## Datenmodell der Bilder

Neue Runden werden im `BASE`-Array in `app.js` ergänzt:

```js
{
  type: "ai", // oder "real"
  src: "https://...",
  source: "Quelle / Generator",
  note: "Kurze Erklärung nach der Auflösung."
}
```

Bei neuen Bildern muss die Klassifizierung vorher verlässlich bekannt sein.

## Bekannte Grenzen des MVP

- Bilder werden noch nicht aus einer Datenbank geladen.
- Die Bildauswahl ist klein und wiederholt sich nach einer Runde.
- Highscores sind nur lokal auf einem Gerät gespeichert.
- Remote-Bildquellen können ausfallen.
- Noch keine Benutzerkonten, Daily Challenge oder globale Rangliste.
- Die Klassifizierung basiert auf den hinterlegten Metadaten und nicht auf einem automatischen KI-Detektor.

## Zielbild

**Startscreen → Spielmodus → Swipe-Runden → Ergebnis → Teilen → Daily Challenge / Rangliste**

Die nächsten Schritte stehen in [docs/ROADMAP.md](docs/ROADMAP.md).

## Lizenz

Für das Repository wurde noch keine eigene Software-Lizenz festgelegt. Bildlizenzen sind separat von einer späteren Code-Lizenz zu betrachten.
