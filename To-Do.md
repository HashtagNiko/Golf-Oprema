## To-Dos in den nächsten Sessions:
    * Artikelbeschreibung (Neuer Name nicht mehr "Golf Training" sondern "PerfectPutt")
    * Preis pro Set: 80 € (bitte auf der Webseite einbauen)
    * USPs des Artikels (Exakte höhe um den duchmessers des Golfballs zu halten. Wenn der Ball gehalten wird, dann bedeutet es, dass der Durchmesser ins loch fallen würde, also weil der Schwerpunkt dann im Loch wäre. Wenn der Ball nicht gehalten wird, dann bedeutet es, der Ball wäre nicht ins loch gefallen. Bitte marketingtechnisch implementieren, dass das auf der Seite zu sehen ist, aber professionell formuliert)
    * Set-Beschreibung (Was wird alles mitgeliefert: PerfectPutt Trainigshilfe, Golfbälle, Putter und Kunstrasen)
    * Whatsapp Nachricht anpassen (Englisch/serbisch, was steht jetzt drin, wenn man auf den Whatsapp-Button klickt?)

---

# Umsetzungsplan (Claude)

> Reihenfolge: am besten alles in **einem** Durchgang umsetzen, da sich Punkte überschneiden (Name steckt auch in Preis-/Set-/WhatsApp-Texten). Vorher bitte die **offenen Fragen** unten kurz beantworten.

## 1. Umbenennung „Golf Training" → „PerfectPutt"
Betrifft folgende Stellen (alle gefunden):
- `index.html`: Seitentitel (Z.6), Meta-Description (Z.7), Hero-Absatz (Z.41), Video `aria-label` (Z.48), Abschnitt „Zašto Golf Training?" → „Zašto PerfectPutt?" (Z.57), `alt` des Set-Bilds (Z.88)
- `proizvod.html`: Titel (Z.6), Meta (Z.7), `alt` Hauptbild (Z.39), Produkt-H1 (Z.51), Set-Listeneintrag (Z.63)
- `app.js`: WhatsApp-/E-Mail-Texte (Z.6–9) → siehe Punkt 5

**Anmerkung:** „PerfectPutt" ist der **Produktname**; die Shop-Marke bleibt „Golf Oprema / Sport Point". Die interne Videodatei `golf-training-video.mp4` benenne ich aus Vorsicht **nicht** automatisch um (Verweise + Git-History); kann ich optional zu `perfectputt-video.mp4` machen — sag Bescheid.

## 2. Preis: 80 € pro Set
- In `proizvod.html` Z.52 das Element `p-price` ändern:
  - aktuell: `data-sr="Cena na upit"` / `data-en="Price on request"`
  - neu (Vorschlag): `data-sr="80 € / set"` / `data-en="€80 / set"`
- Optional zusätzlich im Hero (`index.html`) einen kleinen Preis-Hinweis einbauen. **Default: nur Produktseite**, außer du willst es prominenter.

## 3. USP / Alleinstellungsmerkmal (professionell formuliert)
Kernidee verständlich gemacht: Das Ballauflager sitzt auf **exakt einem Golfball-Durchmesser** Höhe — genau die Schwelle, ab der ein echter Putt fällt. Wird der Ball gehalten → er wäre gefallen; wird er nicht gehalten → er wäre nicht gefallen. Also **ehrliches „getroffen / verfehlt"-Feedback** zu Hause.

Umsetzung: eigener Akzent-Abschnitt auf der **Produktseite** (unter der Beschreibung), als kleines Highlight-Panel. Formulierungsvorschlag:

- **EN — Titel:** „Know if it would have dropped"
  **EN — Text:** „The catch sits at exactly one ball-diameter in height — the same threshold that decides whether a real putt falls. If PerfectPutt holds the ball, your line and pace would have found the cup; if it doesn't, the putt would have stayed out. Honest make-or-miss feedback on every single stroke."
- **SR — Titel:** „Znajte da li bi loptica pala u rupu"
  **SR — Text:** „Ležište je postavljeno na tačno jedan prečnik loptice — isti prag koji odlučuje da li pravi put pada. Ako PerfectPutt zadrži lopticu, vaša linija i jačina bi pronašle rupu; ako ne zadrži, put bi promašio. Iskrena povratna informacija o svakom udarcu."

**Optional:** zusätzlich eine der drei Feature-Karten auf der Startseite („Pravi osećaj") leicht auf diese Botschaft zuspitzen, damit der USP auch dort anklingt.

## 4. Set-Inhalt aktualisieren (`proizvod.html`, „U setu" / „In the set", Z.62–66)
Neue Liste (4 Punkte):
| SR | EN |
|----|----|
| PerfectPutt trening pomagalo | PerfectPutt training aid |
| Golf loptice | Golf balls |
| Puter | Putter |
| Veštačka trava (podloga) | Artificial turf mat |

**Anmerkung:** Bisher stand „Golf loptice (Wilson)" und „Podloga za puttovanje". Neu lt. To-Do: „Kunstrasen" statt allgemeiner Matte, und „Wilson" wird nicht mehr genannt → ich **entferne Wilson**, außer du willst die Marke behalten (siehe offene Fragen).

## 5. WhatsApp-/E-Mail-Nachricht anpassen (`app.js` Z.5–10)
**Was aktuell drinsteht (deine Frage):**
- SR (WhatsApp): „Zdravo, zanima me Golf Training trener za puttovanje. Možete li mi poslati cenu i dostupnost?"
- EN (WhatsApp): „Hello, I'm interested in the Golf Training putting trainer. Could you send me the price and availability?"
- Betreff E-Mail SR: „Upit: Golf Training trener za puttovanje" · EN: „Inquiry: Golf Training putting trainer"

**Vorschlag neu** (Name aktualisiert; da Preis jetzt bekannt ist, frage nach Bestellung/Verfügbarkeit statt Preis):
- SR: „Zdravo, zanima me PerfectPutt trener za puttovanje (80 €). Da li je dostupan i kako mogu da poručim?"
- EN: „Hello, I'm interested in the PerfectPutt putting trainer (€80). Is it available and how can I order?"
- Betreff SR: „Upit: PerfectPutt" · EN: „Inquiry: PerfectPutt"

## Offene Fragen (kurz beantworten, dann setze ich alles um)
1. **Preis-Anzeige:** Format `80 € / set` ok, oder lieber nur `80 €` bzw. `80 EUR`? Soll der Preis **auch im Hero** der Startseite stehen?
2. **USP-Platzierung:** Nur Produktseite (mein Default) — oder zusätzlich als Karte/Abschnitt auf der Startseite?
3. **„Wilson"** bei den Golfbällen entfernen (so wie im To-Do) oder doch behalten?
4. **Schreibweise** „PerfectPutt" (ein Wort, großes P+P) — so korrekt?
5. **Videodatei** `golf-training-video.mp4` umbenennen (kosmetisch) oder lassen?

> Sobald 1–5 geklärt sind, setze ich Punkte 1–5 in einem Rutsch um (HTML + `app.js`), prüfe per Screenshot und committe/pushe.

## Entscheidungen & Status (umgesetzt 2026-06-07)
- [x] **Umbenennung** „Golf Training" → „PerfectPutt" (alle Texte in `index.html`, `proizvod.html`, `app.js`)
- [x] **Preis** „80 € / set" (SR) / „€80 / set" (EN) auf der Produktseite — *nur Produktseite, nicht im Hero*
- [x] **USP-Highlight** auf **Produktseite + Startseite** (neues `.usp`-Panel, SR/EN)
- [x] **Set-Inhalt**: PerfectPutt-Trainingshilfe, Golfbälle, Putter, Kunstrasen — **„Wilson" entfernt**
- [x] **WhatsApp/E-Mail-Text** aktualisiert (Name + Frage nach Verfügbarkeit/Bestellung statt Preis)
- [x] **Videodatei** `golf-training-video.mp4` → `perfectputt-video.mp4` (Verweise angepasst)

> ⚠️ **Hinweis:** Auf den **Produktfotos** (`slike/*.jpg`) steht physisch „GOLF TRAINING" auf dem Gerät. Das lässt sich nur durch neue Fotos/Bildbearbeitung ändern, nicht im Code. Bei Bedarf neue Bilder liefern.