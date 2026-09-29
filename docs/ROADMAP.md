# Roadmap – REAL OR AI?

## Phase 1 – MVP stabilisieren

- [x] Mobile-First-Spieloberfläche
- [x] Swipe links = KI
- [x] Swipe rechts = echt
- [x] Button-Fallback
- [x] Punkte und Streak
- [x] Auflösung nach jeder Runde
- [x] lokaler Bestwert
- [x] Ergebnis teilen
- [x] Vercel-fähige statische Struktur
- [ ] alle externen Bild-URLs im Live-Deployment prüfen
- [ ] kuratierten ersten Bildpool festlegen
- [ ] Bildlizenzen/Attributionen vollständig dokumentieren

## Phase 2 – Mehr Spieltiefe

- Startscreen
- Schwierigkeitsstufen: Easy / Normal / Hard
- Kategorien: Menschen, Tiere, Natur, Architektur, Produkte
- zufällige Sessions aus einem größeren Bildpool
- Zeitmodus
- Combo-/Streak-Bonus
- Ergebnisgrafik zum Teilen
- tägliche Challenge

## Phase 3 – Backend

Vorgesehene Architektur:
- Frontend: Next.js oder weiter statisch, abhängig vom Funktionsumfang
- Backend/Datenbank: Supabase
- Hosting: Vercel

Mögliche Tabellen:
- `images`: Bild, Klassifizierung, Quelle, Lizenz, Schwierigkeit, Kategorie
- `daily_challenges`: tägliche Bildsets
- `players`: optionale Profile
- `scores`: Ergebnisse und Ranglisten
- `reports`: Meldungen zu falscher Klassifizierung oder kaputten Bildern

## Phase 4 – Community & Wachstum

- globale Rangliste
- Freunde herausfordern
- persönlicher Share-Link
- Daily Streak
- Statistiken: Trefferquote nach Kategorie
- PWA / Zum Home-Bildschirm hinzufügen
- Mehrsprachigkeit Deutsch/Englisch
- Social Preview Cards
- SEO-Landingpage

## Qualitätsregeln für neue Bilder

1. Die Herkunft muss nachvollziehbar sein.
2. `real` darf nur für echte Fotografien verwendet werden.
3. `ai` darf nur verwendet werden, wenn die KI-Erzeugung dokumentiert ist.
4. Lizenz und Attribution müssen vor Veröffentlichung geprüft werden.
5. Keine Lösung darf allein durch Dateiname oder sichtbares Wasserzeichen verraten werden.
6. Der Bildpool sollte weder „KI = immer perfekt“ noch „KI = immer fehlerhaft“ trainieren.
