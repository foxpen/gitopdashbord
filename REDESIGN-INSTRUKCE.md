# Instrukce: Status-first redesign DevOps dashboardu

Tyto instrukce popisují **vizuální a interakční** změny (žádné změny dat ani backendu).
Dashboard má sekce typu: Overview, Repositories, PR Workflow (GitHub Actions/PR), Kafka,
Prometheus, OCP (pody), Deployments. Názvy přizpůsob tomu, co v aplikaci reálně je —
vzor je přenositelný.

**Technologie:** Instrukce jsou nezávislé na frameworku — použij stack, který v projektu
už je (React/TypeScript, Vue, vanilla JS…). Nemigruj framework ani styling knihovnu.
Mapování pro React + TypeScript:
- stav rozbalení (banner, pipeline, řádky tabulky) = `useState`, žádné globální proměnné,
- proklik do sekce = navigace routerem, nebo setnutí aktivního view stavu (podle toho,
  jak appka přepíná sekce),
- závažnost stavů typuj: `type Severity = "ok" | "watch" | "problem" | "running"`,
- barvy jako design tokeny (CSS proměnné / Tailwind theme / styled-components theme —
  co už projekt používá),
- rozbalovací prvky jako přístupné `<button>` s `aria-expanded`; seznamy renderuj
  z dat (`.map`), ne kopírováním markup.

## Cíl

Uživatel musí **na první pohled** z Overview poznat: je vše OK, nebo je problém — a když
je problém, **jedním kliknutím** se dostat na konkrétní místo, kde ho vyřeší. Detailní
sekce pak řeší jen svou doménu.

## Barevná škála závažnosti (používat všude konzistentně)

| Stav      | Význam                              | Barva (semantické tokeny)      |
|-----------|-------------------------------------|--------------------------------|
| `ok`      | vše v pořádku                       | zelená (mint)                  |
| `watch`   | nic nehoří, ale sledovat            | oranžová (amber)               |
| `problem` | vyžaduje zásah                      | červená                        |
| `running` | právě probíhá (deploy/build)        | modrá                          |

Pravidla:
- Barvy definuj jako CSS proměnné (`--mint`, `--amber`, `--red`, `--blue`), ne hex napřímo v komponentách.
- Barva nikdy není jediný nosič informace — vždy doplň text/ikonu (přístupnost).
- Pozadí stavových ploch dělat jemné (`rgba(<barva>, .05)` pozadí, `rgba(<barva>, .25)` rámeček), ne plné saturované plochy.

## 1) Overview — struktura shora dolů

Pořadí bloků na Overview (nic jiného mezi tím):

1. **Status banner** — celkový verdikt
2. **Řádek systémových dlaždic** — jedna dlaždice na každý napojený systém
3. **Pipeline lišta** — kompaktní stav prostředí (dev→prod)
4. **Metrikové karty** (4 ks)
5. Zbytek (release flow, live feed apod.)

### 1a) Status banner (celkový verdikt)

- Široký pruh přes celou šířku, úplně nahoře.
- Obsah: ikona v barevném zaobleném čtverci + **tučný titulek** + podtitulek + vpravo čas aktualizace + chevron.
- Titulek se počítá z reálných dat, priorita: `problem` > `watch` > `running` > `ok`:
  - problem: „N issues need attention" + výčet („1 blocked PR · 2 failed actions · 1 pod crash-looping")
  - watch: „N things worth watching" + co konkrétně
  - running: „Deploy in progress" + které prostředí
  - ok: „All systems operational"
- Celý banner je podbarvený podle závažnosti (jemné pozadí + rámeček, viz škála).

**Rozbalení (klíčové chování):** Pokud existují problémy, celý banner je klikací
(`role="button"`, `tabindex="0"`, `aria-expanded`, funguje Enter/mezerník). Kliknutím se
**pod bannerem rozbalí seznam konkrétních problémů** — jeden řádek na problém:

- vlevo pill s typem (`BLOCKED PR`, `FAILED ACTION`, `POD CRASH`, `WATCH`…) v barvě závažnosti,
- uprostřed tučný název + šedý podtitulek (repo · detail · autor/čas),
- vpravo **název cílové sekce + chevron** (např. „PR Workflow ›", „OCP ›", „Kafka ›").

Klik na řádek **naviguje přímo do příslušné sekce** (programově klikne na položku v nav).
Chevron banneru se při rozbalení otočí o 90°. Stav rozbalení se drží v JS proměnné a přežívá re-render.

**Důležité anti-duplikační pravidlo:** Tenhle rozbalovací seznam je **jediné** místo se
seznamem problémů na Overview. Žádný další „Needs action" panel ani „Needs action"
metrika — smazat, pokud existují. Jedna informace = jedno místo.

### 1b) Systémové dlaždice (průřez všemi systémy)

- Grid dlaždic, jedna na každý napojený systém (GitHub, Kafka, Prometheus, OCP…), na
  desktopu v jednom řádku (`repeat(4, 1fr)`, na menších šířkách 2 sloupce, na mobilu 1).
- Každá dlaždice = `<button>`: ikona v barevném čtverci (barva = stav systému) + název
  systému tučně + jednořádkový stav (`text-overflow: ellipsis`) + chevron vpravo.
- Stav systému se odvozuje z jeho dat (failed actions → problem, lag warning → watch, pody OK → ok…).
- Dlaždice `watch`/`problem` mají navíc tónovaný rámeček.
- **Klik = navigace do sekce daného systému.** Hover: zvýrazněný rámeček + stín + chevron
  se posune o 2px doprava a zmodrá. Active: `translateY(1px)`.

### 1c) Pipeline lišta (prostředí dev→prod)

- Kompaktní lišta: tečka celkového stavu + label „PIPELINE" + řada chipů prostředí
  (DEV ✓, SYS ✓, PRS ↻, INT ⚠, PRED ✓, PROD ✓) + vpravo čas + chevron.
- Levý okraj lišty (4px border-left) v barvě nejhoršího stavu prostředí.
- **Klikací a rozbalovací stejně jako banner.** Rozbalí se řádky — jeden na prostředí:
  badge prostředí + název tučně + šedý řádek (branch · run # · čas · kdo · trvání) +
  stavový pill vpravo + „Deployments ›". Klik na řádek → sekce Deployments.

### 1d) Metrikové karty

- 4 karty v gridu. Každá: ikona v barevném čtverci, malý šedý label, velké číslo
  (`font-variant-numeric: tabular-nums`), malý šedý podtitulek.
- **Barva ikony i rámečku karty reaguje na stav vlastní metriky** (ne globální stav):
  např. karta „Open PRs" zčervená jen když je nějaké PR blocked; karta Kafka zoranžoví
  při lag warningu. Karta bez problému má neutrální/zelenou ikonu a normální rámeček.
- Jedna z karet: „OCP pods" s hodnotou `běžící/celkem` (např. 6/8) a podtitulkem
  („1 crash-looping · 1 pending" / „all running").

## 2) Sekce OCP (pody) — místo případné TDD/testové sekce

- Nahoře **4 souhrnné staty** v jednom panelu odděleném vertikálními linkami:
  Pods running (`x / y`, zeleně, oranžově pokud něco crashuje), Crash-looping (červeně),
  Pending (oranžově), Restarts recent (oranžově pokud > 0).
- Pod tím **tabulka podů**: Pod (tučně app, pod ním šedě celý název podu), Namespace,
  Node, Restarts (oranžově tučně pokud > 0), Age, Status (pill: Running=zelená,
  CrashLoopBackOff/Error=červená, Pending=oranžová) + chevron.
- **Řádek je rozbalovací** (klik kamkoli do řádku): chevron se otočí, pod řádkem se
  ukáže detail s modrým levým okrajem:
  - meta řádek: **Image** + **Node**,
  - věta o posledním restartu: „**Last restart 12m ago** — OOMKilled, was **Running**
    before. Memory limit 512Mi exceeded during batch rebalance."
  - pokud pod nikdy nerestartoval: „No restarts — stable since creation."

## 3) Menu — rozbalovací skupiny (podmenu)

Boční navigace není plochý seznam — příbuzné sekce se sdružují do rozbalovacích skupin:

- **GitHub** ▸ Repositories, PR Workflow
- **OCP** ▸ Pods, Deployments
- Overview, Kafka, Prometheus… zůstávají jako samostatné položky.

Chování:

- Hlavička skupiny je `<button>` s ikonou + názvem + **chevronem hned vedle textu**
  („GitHub ›"), ne až u pravého okraje — u kraje se přehlédne a položka pak vypadá
  jako obyčejný odkaz. Chevron se při rozbalení otočí o 90° (› → ⌄). Má `aria-expanded`.
  Klik jen rozbaluje/sbaluje — nenaviguje.
- Podpoložky musí **vizuálně patřit pod rodiče**, jinak vypadají jako samostatné
  položky: **odsadit doprava** a přidat **svislou vodicí linku** (border-left) vedoucí
  od ikony skupiny podél celé podskupiny. K tomu menší ikona (~30px místo 42px) a menší
  písmo — dohromady se to čte jako strom. Aktivní podpoložka má stejné zvýraznění jako
  ostatní aktivní položky.
- **Pozor na barvu ikon podpoložek:** pokud ikony hlavních položek sedí na tmavém
  pruhu (rail) a jsou proto bílé, odsazené podpoložky už leží na světlém pozadí —
  bílá ikona na něm zmizí. Barvu ikon podpoložek nastav podle jejich skutečného
  pozadí (a zvlášť ověř dark mód).
- **Aktivní podsekce zvýrazňuje i rodiče:** když je aktivní např. PR Workflow, ikona
  skupiny GitHub svítí stejně jako aktivní položka (uživatel vidí kontext i ve sbaleném
  železničním/rail módu sidebaru).
- **Deep-linky musí skupinu automaticky rozbalit:** navigace odjinud (proklik z Overview
  dlaždice/banneru) může aktivovat podpoložku ve sbalené skupině — po každé změně view
  projdi skupiny a tu s aktivní podpoložkou rozbal. Aktivní položka nesmí být nikdy
  schovaná.
- Ve **sbaleném (icon-only) módu sidebaru** se u rozbalené skupiny zobrazují menší
  ikony podsekcí pod ikonou skupiny; stav rozbalení se zachovává.
- **Pozor (častá chyba):** pokud podseznam skrýváš atributem `hidden` a zároveň mu CSS
  nastavuje `display: grid/flex`, tak CSS `hidden` přebije a podpoložky budou vidět
  pořád. Přidej explicitně `.nav-sub[hidden] { display: none; }`.

## 4) Konzistence v ostatních sekcích

- Karty entit (repo karty apod.), které jsou ve stavu watch/problém, dostanou **tónovaný
  rámeček** ve stejné barvě jako všude jinde (`rgba(amber, .3)` / `rgba(red, .25)`).
- Odstranit **zdvojené nadpisy**: pokud má stránka velký titulek v topbaru, sekce nesmí
  začínat druhým stejným nadpisem — nechat jen jednořádkový šedý popisek.
- Stavové pills (ready/review/blocked/running/passed/failed…) používají všude stejné
  tvary a barvy.

## 5) Interakční standardy (platí pro všechno výše)

- Všechno klikací je `<button>` nebo má `role="button"` + `tabindex="0"` + obsluhu
  Enter/mezerníku; rozbalovací prvky mají `aria-expanded`.
- `cursor: pointer` na všem klikacím.
- Přechody 150–300 ms (`transition` na background/border/box-shadow/transform), žádné skoky.
- Hover vždy viditelný (pozadí, rámeček nebo stín), active `translateY(1px)`.
- Chevrony: `›` které se otáčí o 90° při rozbalení, posouvají o 2px při hoveru prokliků.
- Vše musí fungovat ve light i dark módu — u dark módu zkontrolovat kontrast zvlášť.
- Respektovat `prefers-reduced-motion` (vypnout animace).

## 6) Hlídání layoutu — časté chyby, které MUSÍŠ ohlídat

Tohle jsou konkrétní defekty, které při podobných úpravách často vznikají. Po každé
změně je zkontroluj (ideálně screenshotem, viz níže):

### Uříznutá / napůl skrytá tlačítka

- **Příčina:** interaktivní prvek (toggle, chevron, zavírací tlačítko) je absolutně
  pozicovaný přes okraj panelu (`position: absolute; right/top: -Xpx`) a rodič má
  `overflow: hidden` (typicky kvůli `border-radius`) → část tlačítka se ořízne.
- **Pravidlo:** tlačítka a klikací prvky umísťuj **celé dovnitř** kontejneru. Pokud musí
  prvek přesahovat okraj (např. plovoucí toggle na hraně sidebaru), pak jeho rodič
  **nesmí** mít `overflow: hidden` — ořez řeš na jiné vrstvě, nebo prvek přesuň do
  nadřazeného elementu bez ořezu.
- Také zkontroluj `z-index`: rozbalené panely, dropdowny a plovoucí tlačítka nesmí být
  překryté sousedním panelem. Používej malou pevnou škálu z-indexů (0/10/20/40/100),
  žádné náhodné `9999`.
- Tlačítko musí být klikací **celou svou plochou** — ne jen viditelnou půlkou.

### Obsah přetéká mimo svůj panel (do vedlejšího)

- **Příčina č. 1:** děti flexu/gridu mají implicitně `min-width: auto`, takže dlouhý
  nezalomitelný text (názvy PR, branchí, podů, commit messages) roztáhne buňku přes
  její hranice.
  **Fix:** každé flex/grid dítě, které nese text, musí mít `min-width: 0`; v gridu
  používej `minmax(0, 1fr)` místo `1fr`.
- **Příčina č. 2:** jednořádkové texty bez ořezu.
  **Fix:** `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` na
  jednořádkové názvy; u textů, co se smí zalomit, `overflow-wrap: anywhere`.
- **Příčina č. 3:** tabulka širší než panel.
  **Fix:** tabulku vždy obal do wrapperu s `overflow-x: auto`; panel samotný nikdy
  nesmí horizontálně přetékat.
- Panel/karta má mít `overflow: hidden`, aby vnitřní obsah nikdy nevykreslil přes
  zaoblené rohy a hranice panelu.
- Nic nesmí způsobit horizontální scroll celé stránky.

### Jak to ověřit (povinné po každé změně)

1. Projdi **každou sekci** vizuálně (screenshot) v šířkách ~1440, 1024, 768 a 375 px.
2. U rozbalovacích prvků zkontroluj **oba stavy** (sbalený i rozbalený).
3. Zkontroluj s **dlouhými texty** (dlouhý název PR/podu/branche) — nic nesmí přetéct
   přes hranici svého panelu do sousedního.
4. Ověř, že všechna tlačítka jsou celá viditelná a klikací (žádné oříznuté půlky).
5. Zopakuj v dark módu.

## 7) Akceptační checklist

- [ ] Overview: banner ukazuje správný verdikt podle dat všech systémů (vč. podů).
- [ ] Klik na banner rozbalí seznam problémů; klik na řádek přenese do správné sekce.
- [ ] Systémové dlaždice: klik naviguje, hover funguje, barvy odpovídají stavu systému.
- [ ] Pipeline lišta se rozbaluje, řádky vedou do Deployments.
- [ ] Nikde na Overview není druhý seznam/karta „Needs action" (žádná duplicita).
- [ ] Metrikové karty se barví podle vlastního stavu.
- [ ] OCP: souhrnné staty + tabulka podů s rozbalovacím detailem restartu (kdy, důvod,
      stav před restartem, popis).
- [ ] Menu: skupiny GitHub/OCP se rozbalují a sbalují, chevron se otáčí, sbalená
      skupina podpoložky opravdu skrývá.
- [ ] Deep-link na podsekci automaticky rozbalí její skupinu; aktivní podsekce
      zvýrazňuje i ikonu rodiče (i ve sbaleném sidebaru).
- [ ] Žádné zdvojené nadpisy sekcí.
- [ ] Žádné oříznuté/napůl skryté tlačítko — vše celé viditelné a klikací celou plochou.
- [ ] Žádný text ani obsah nepřetéká mimo svůj panel (ověřeno i s dlouhými názvy
      a v šířkách 1440/1024/768/375 px).
- [ ] Light i dark mód, klávesnice (Tab + Enter), žádné chyby v konzoli.
