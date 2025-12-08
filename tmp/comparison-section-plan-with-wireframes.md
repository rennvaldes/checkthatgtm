# Comparison Section

## Desktop experience

- Section
  -- Section Header
  --- Section Label : "Comparison"
  --- Section Text
  ---- Section Title : "How we're different."
  ---- Section Title Muted : "The best of AI efficiency and human expertise, without the tradeoffs."
  -- Section Content
  --- Div grid-template-columns: 1fr; grid-auto-rows: auto; display: grid; position: relative;
  ---- Header RowGroupSticky top 40 + 40 + 27(line-height)
  ----- Div grid repeat 4 1fr
  ------ Div ColHeader x 4. first empty, second "GrowthX" bg-color FFC3D6, "AI tools", "Agencies". text center, height 159px. align item to bottom, py40px. Best choice badge outline in second column. top/right 32px/20px. bodyLG
  ---- Div RowGroupBody x 8 (8 rows total)
  ------ Div RowGroupBodyRow grid-template-columns: 1fr; grid-auto-rows: auto; display: grid;
  ------- Cell 1 : "AI-powered workflows" border x .5px solid transparant. border-bottom .5px solid border. bg-color FFC3D6
  ------- Cell 2 : "Checkmark centered" border x .5px solid transparant. border-bottom .5px solid border. bg-color FFC3D6
  ------- Cell 3 : "Checkmark centered" border x .5px solid transparant. border-bottom .5px solid border.
  ------- Cell 4 : "Cross centered muted" border x .5px solid transparant. border-bottom .5px solid border.
  ---- CTA Row (desktop only)
  ----- Cell 2 only: "Get Started →" button centered

### ASCII Wireframe - Desktop

```
┌────────────────────────────────────────────────────────────────────────┐
│ Comparison    How we're different.                                     │
│               The best of AI efficiency and human expertise, without...│
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│               ┌──────────┬──────────────┬──────────┬──────────┐       │
│               │          │ Best Choice  │          │          │       │
│               │          │     ✧        │          │          │       │
│  STICKY       │          │   GrowthX    │ AI tools │ Agencies │       │
│  HEADER       │          │ [#FFC3D6 bg] │          │          │       │
│               │          │              │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│ AI-powered    │    ✓     │      ✓       │    ✗     │          │       │
│ workflows     │[#FFC3D6] │  [#FFC3D6]   │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│ Human expert  │    ✓     │      ✗       │    ✓     │          │       │
│ oversights    │[#FFC3D6] │  [#FFC3D6]   │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│ Scalable      │    ✓     │      ✗       │    ✗     │          │       │
│ production    │[#FFC3D6] │  [#FFC3D6]   │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│ Strategic     │    ✓     │      ✗       │    ✓     │          │       │
│ guidance      │[#FFC3D6] │  [#FFC3D6]   │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│ Cost-effective│    ✓     │      ✓       │    ✗     │          │       │
│ at scale      │[#FFC3D6] │  [#FFC3D6]   │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│ Quality       │    ✓     │      ✗       │    ✗     │          │       │
│ guarantee     │[#FFC3D6] │  [#FFC3D6]   │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│ Custom AI     │    ✓     │      ✗       │    ✗     │          │       │
│ workflows     │[#FFC3D6] │  [#FFC3D6]   │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│ Dedicated     │    ✓     │      ✗       │    ✓     │          │       │
│ team          │[#FFC3D6] │  [#FFC3D6]   │          │          │       │
├───────────────┼──────────┼──────────────┼──────────┼──────────┤       │
│               │          │  ┌────────┐  │          │          │       │
│               │          │  │  Get   │  │          │          │       │
│               │          │  │Started→│  │          │          │       │
│               │          │  └────────┘  │          │          │       │
└────────────────────────────────────────────────────────────────────────┘
```

## Mobile experience

- Section header become tabs.
- labels on right, checks on left. e.g. x x x AI-powered workflows.
- No CTA button in mobile view.

### ASCII Wireframe - Mobile

```
┌───────────────────────────────────┐
│                                   │
│ Comparison                        │
│                                   │
│ How we're different.              │
│ The best of AI efficiency and     │
│ human expertise, without the      │
│ tradeoffs.                        │
│                                   │
├───────────────────────────────────┤
│                                   │
│ GrowthX  AI tools  Agencies       │
│ ───────                           │  ← Active tab
│                                   │
├───────────────────────────────────┤
│ [All rows #FFC3D6 bg]             │
│                                   │
│ ✓  ✓  ✗  AI-powered workflows    │
│                                   │
├───────────────────────────────────┤
│ ✓  ✗  ✓  Human expert oversights │
│                                   │
├───────────────────────────────────┤
│ ✓  ✗  ✗  Scalable production     │
│                                   │
├───────────────────────────────────┤
│ ✓  ✗  ✓  Strategic guidance      │
│                                   │
├───────────────────────────────────┤
│ ✓  ✓  ✗  Cost-effective at scale │
│                                   │
├───────────────────────────────────┤
│ ✓  ✗  ✗  Quality guarantee       │
│                                   │
├───────────────────────────────────┤
│ ✓  ✗  ✗  Custom AI workflows     │
│                                   │
├───────────────────────────────────┤
│ ✓  ✗  ✓  Dedicated team          │
│                                   │
└───────────────────────────────────┘
```

Visual references:

- /Users/georgemaine/Developer/growthxai/website/tmp/comparison-section-desktop-experience.jpg
- /Users/georgemaine/Developer/growthxai/website/tmp/comparison-section-mobile-experience.jpg

---

# Fit Section

## Desktop experience

- Section
  -- Section Header
  --- Section Label : "Fit"
  --- Section Text
  ---- Section Title : "Who we're built for."
  ---- Section Title Muted : "GrowthX isn't for everyone. We work best with ambitious teams who understand that content is a competitive advantage worth investing in."
  -- Section Content. Functions as cycler list with checkmark + text becoming active and rest muted. active one shows description in col 3.
  --- Row1
  ---- col 1 flex list with 40px containers and 16px checkmarks in it. border-b/l .5px rest left transparant.
  ---- col 2 flex list with items 18px text border-b/l/r .5px rest transparant 40px height px-10px.
  ---- col 3 one big item height fit all other cols total count with description of active item. px-40px, content vertical middle left aligned.
  --- Row2 p 40px space between items vertical middle
  ---- left text "If this sounds like you, let's talk about how GrowthX can accelerate your content engine."
  ---- right cta Join 50+ growth teams + arrow right

### ASCII Wireframe - Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ Fit           Who we're built for.                                         │
│               GrowthX isn't for everyone. We work best with ambitious...   │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ ┌───┬──────────────────────────────────────────┬────────────────────────┐ │
│ │ ✓ │ You're a growth-stage company ready to   │                        │ │
│ │   │ scale content.                           │                        │ │
│ ├───┼──────────────────────────────────────────┤                        │ │
│ │ ✓ │ You have product-market fit and need to  │ Your product works,    │ │
│ │[■]│ accelerate acquisition.                  │ customers love it, and │ │
│ │   │ [ACTIVE - black bg]                      │ now you need to reach  │ │
│ ├───┼──────────────────────────────────────────┤ more of them           │ │
│ │ ✓ │ Your current content process is a        │ efficiently.           │ │
│ │   │ bottleneck, not a growth lever.          │                        │ │
│ ├───┼──────────────────────────────────────────┤ [Description of        │ │
│ │ ✓ │ You value quality and are willing to     │  active item,          │ │
│ │   │ invest in doing content right.           │  spans full height]    │ │
│ ├───┼──────────────────────────────────────────┤                        │ │
│ │ ✓ │ You want a partner, not just a vendor    │                        │ │
│ │   │                                          │                        │ │
│ └───┴──────────────────────────────────────────┴────────────────────────┘ │
│                                                                            │
│ ┌───────────────────────────────────────────┬──────────────────────────┐ │
│ │ If this sounds like you, let's talk about │  ┌────────────────────┐  │ │
│ │ how GrowthX can accelerate your content   │  │Join 50+ growth     │  │ │
│ │ engine.                                   │  │teams            → │  │ │
│ │                                           │  └────────────────────┘  │ │
│ └───────────────────────────────────────────┴──────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────┘
```

## Mobile experience

- Switch from cycler to accordions. Tap plus button to open and show text.

### ASCII Wireframe - Mobile

```
┌─────────────────────────────────────┐
│                                     │
│ Fit                                 │
│                                     │
│ Who we're built for.                │
│ GrowthX isn't for everyone. We work │
│ best with ambitious teams who       │
│ understand that content is a        │
│ competitive advantage worth         │
│ investing in.                       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ ✓ You're a growth-stage company  [+]│
│   ready to scale content.           │
│                                     │
├─────────────────────────────────────┤
│ ✓ You have product-market fit and[-]│
│   need to accelerate acquisition.   │
│                                     │
│   Your product works, customers love│
│   it, and now you need to reach more│
│   of them efficiently.              │
│                                     │
├─────────────────────────────────────┤
│ ✓ Your current content process is[+]│
│   a bottleneck, not a growth lever. │
│                                     │
├─────────────────────────────────────┤
│ ✓ You value quality and are willing[+]│
│   to invest in doing content right. │
│                                     │
├─────────────────────────────────────┤
│ ✓ You want a partner, not just a [+]│
│   vendor                            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│ If this sounds like you, let's talk│
│ about how GrowthX can accelerate    │
│ your content engine.                │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ Join 50+ growth teams      → │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

Visual reference:
- /Users/georgemaine/Developer/growthxai/website/tmp/fit-section-desktop-experience.png

---

# Pricing Section

## Desktop experience

- Section
  -- Section Header (label and title on same line with space between)
  --- Section Label : "Pricing" Section Title : "Simple, transparent pricing."
  --- Section Title Muted : "Choose the engagement model that fits your needs. Scale as you grow. All plans include a 30-day satisfaction guarantee. No long-term contracts required."
  -- Section Content
  --- Div grid-template-columns: 1fr; grid-auto-rows: auto; display: grid; position: relative;
  ---- Header RowGroupHeader
  ----- Div grid repeat 3 1fr
  ------ Div ColHeader x 3. px-40px. Col 2 bg-color FFE57B (entire column)
  ------- Heading 1 flex list mt 32px
  -------- title muted text left 14px. col 2? pill outline "Most Popular" right.
  -------- Title group pt-64px
  --------- Title You Drive → We Guide 18px
  --------- Title Muted "Expert guidance while you maintain control of execution"
  -------- Pricing group col flex start
  --------- Title $9000
  --------- Small muted / month
  ---- Div RowGroupBody x 6 (6 feature rows)
  ------ Div RowGroupBodyRow grid-template-columns: 1fr; grid-auto-rows: auto; display: grid;
  ------- Cell 1 : "Checkmark or cross Icon + text" border l/r .5px solid transparant. border-b .5px solid border. height 48px, px 40, flex start, gap 20px.
  ------- Cell 2 : "Checkmark or cross Icon + text" border x .5px solid transparant. border-bottom .5px solid border. bg color FFE57B
  ------- Cell 3 : "Checkmark or cross Icon + text" border x .5px solid transparant. border-bottom .5px solid border.
  ------ Div RowGroupCTARow grid-template-columns: 1fr; grid-auto-rows: auto; display: grid;
  ------- Cell 1 : "Muted CTA "Get started arrow right". center, py-40px
  ------- Cell 2 : "Black CTA "Get started arrow right". center, py-40px bg color FFE57B
  ------- Cell 3 : "Muted CTA "Contact Us arrow right". center, py-40px

### ASCII Wireframe - Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ Pricing                           Simple, transparent pricing.             │
│ Choose the engagement model that fits your needs. Scale as you grow...    │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│ ┌───────────────────┬─────────────────────────┬──────────────────────┐   │
│ │ Strategic Advisory│ Full-Service            │ Enterprise           │   │
│ │                   │ [#FFE57B bg all column] │                      │   │
│ │                   │           ┌──────────┐  │                      │   │
│ │                   │           │  Most    │  │                      │   │
│ │                   │           │ Popular  │  │                      │   │
│ │                   │           └──────────┘  │                      │   │
│ │                   │                         │                      │   │
│ │ You Drive →       │ We Drive → We Guide     │ Custom               │   │
│ │ We Guide          │                         │                      │   │
│ │                   │                         │                      │   │
│ │ Expert guidance   │ We handle everything,   │ Forward-deployed     │   │
│ │ while you maintain│ you provide direction   │ engineers, fully     │   │
│ │ control of        │                         │ embedded in your team│   │
│ │ execution         │                         │                      │   │
│ │                   │                         │                      │   │
│ │ $9,000  /month    │ $18,000  /month         │ Let's talk           │   │
│ │                   │                         │                      │   │
├─┼───────────────────┼─────────────────────────┼──────────────────────┤   │
│ │ ✓ Growth strategy │ ✓ Everything in You     │ ✓ Forward-deployed  │   │
│ │   & roadmap       │   Drive                 │   AI engineers      │   │
│ │                   │    [#FFE57B bg]         │                      │   │
├─┼───────────────────┼─────────────────────────┼──────────────────────┤   │
│ │ ✓ AI workflow     │ ✓ Dedicated content team│ ✓ Forward-deployed  │   │
│ │   templates       │                         │   design engineers  │   │
│ │                   │    [#FFE57B bg]         │                      │   │
├─┼───────────────────┼─────────────────────────┼──────────────────────┤   │
│ │ ✓ Weekly strategy │ ✓ End-to-end production │ ✓ Fully custom to   │   │
│ │   sessions        │                         │   your needs        │   │
│ │                   │    [#FFE57B bg]         │                      │   │
├─┼───────────────────┼─────────────────────────┼──────────────────────┤   │
│ │ ✓ Content calendar│ ✓ Custom AI workflows   │ ✓ Embedded in your  │   │
│ │   planning        │                         │   team              │   │
│ │                   │    [#FFE57B bg]         │                      │   │
├─┼───────────────────┼─────────────────────────┼──────────────────────┤   │
│ │ ✓ Performance     │ ✓ Multi-Channel         │ ✓ Enterprise security│  │
│ │   dashboards      │   distribution          │   & compliance      │   │
│ │                   │    [#FFE57B bg]         │                      │   │
├─┼───────────────────┼─────────────────────────┼──────────────────────┤   │
│ │ ✓ Slack support   │ ✓ Monthly business      │ ✓ Highly selective  │   │
│ │   channel         │   reviews               │   engagement        │   │
│ │                   │    [#FFE57B bg]         │                      │   │
├─┼───────────────────┼─────────────────────────┼──────────────────────┤   │
│ │                   │                         │                      │   │
│ │  ┌─────────────┐  │  ┌───────────────────┐ │  ┌──────────────┐   │   │
│ │  │Get Started →│  │  │  Get Started   →  │ │  │Contact Us  →│   │   │
│ │  └─────────────┘  │  └───────────────────┘ │  └──────────────┘   │   │
│ │   (muted)         │  (black on #FFE57B bg) │   (muted)           │   │
└─┴───────────────────┴─────────────────────────┴──────────────────────┴───┘
```

## Mobile experience

- Tab-based switching between plans.
- Selected plan displays full card with header, features, and CTA.

### ASCII Wireframe - Mobile

```
┌────────────────────────────────────┐
│                                    │
│ Pricing                            │
│                                    │
│ Simple, transparent pricing.       │
│ Choose the engagement model that   │
│ fits your needs. Scale as you grow.│
│ All plans include a 30-day         │
│ satisfaction guarantee. No long-   │
│ term contracts required.           │
│                                    │
├────────────────────────────────────┤
│                                    │
│ You Drive→  We Drive→      Custom  │
│ We Guide    We Guide               │
│             ─────────               │ ← Active tab
│                                    │
├────────────────────────────────────┤
│ [#FFE57B bg for entire card]       │
│                                    │
│ Full-Service      ┌─────────────┐  │
│                   │Most Popular │  │
│                   └─────────────┘  │
│                                    │
│ We Drive → We Guide                │
│                                    │
│ We handle everything, you provide  │
│ direction                          │
│                                    │
│                                    │
│ $18,000  /month                    │
│                                    │
├────────────────────────────────────┤
│ ✓  Everything in You Drive         │
├────────────────────────────────────┤
│ ✓  Dedicated content team          │
├────────────────────────────────────┤
│ ✓  End-to-end production           │
├────────────────────────────────────┤
│ ✓  Custom AI workflows             │
├────────────────────────────────────┤
│ ✓  Multi-Channel distribution      │
├────────────────────────────────────┤
│ ✓  Monthly business reviews        │
├────────────────────────────────────┤
│                                    │
│  ┌──────────────────────────────┐  │
│  │      Get Started      →      │  │
│  └──────────────────────────────┘  │
│  (black button on #FFE57B bg)      │
│                                    │
└────────────────────────────────────┘
```

Visual references:

- /Users/georgemaine/Developer/growthxai/website/tmp/pricing-section-desktop-experience.jpg
- /Users/georgemaine/Developer/growthxai/website/tmp/pricing-section-mobile-experience.jpg
