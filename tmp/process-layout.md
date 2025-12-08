# Process Section Layout

## Mobile Layout (< lg breakpoint)

```
┌─────────────────────────────────────────────┐
│                                             │
│  Label: "The Process"                       │
│  (col-span-full, md:col-span-2)            │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Title: "Quality earns trust..."            │
│  Subtitle: "A proven process..."            │
│  (col-span-full, md:col-span-8 lg:10)      │
│                                             │
└─────────────────────────────────────────────┘

╔═════════════════════════════════════════════╗
║ ┌─────┐                                     ║ border-t
║ │ 🔍  │ Inputs & Strategy                   ║ border-l, border-r
║ └─────┘                                     ║ border-b
║─────────────────────────────────────────────║
║ We learn your business, audience, and       ║
║ competitive landscape fast. Then we         ║
║ identify the opportunities that will        ║
║ drive the most impact.                      ║
╠═════════════════════════════════════════════╣
║ ┌─────┐                                     ║ border-t
║ │ ⚙️  │ Calibration & Workflows             ║ border-l, border-r
║ └─────┘                                     ║ border-b
║─────────────────────────────────────────────║
║ We define quality standards and voice       ║
║ together. Then we build custom AI           ║
║ workflows with human oversight that scale   ║
║ quality consistently.                       ║
╠═════════════════════════════════════════════╣
║ ┌─────┐                                     ║ border-t
║ │ ✏️  │ Execution & Iteration               ║ border-l, border-r
║ └─────┘                                     ║ border-b
║─────────────────────────────────────────────║
║ We publish and refresh content daily.       ║
║ Track AI visibility, rankings, traffic,     ║
║ and conversions. Iterate fast based on      ║
║ what's working.                             ║
╠═════════════════════════════════════════════╣
║ ┌─────┐                                     ║ border-t
║ │ 📈  │ Growth & Scale                      ║ border-l, border-r
║ └─────┘                                     ║ border-b
║─────────────────────────────────────────────║
║ Content compounds into consistent           ║
║ pipeline. The system gets smarter and       ║
║ faster. Experts shift toward strategy       ║
║ and new experiments.                        ║
╚═════════════════════════════════════════════╝

┌─────────────────────────────────────────────┐
│ Ready to see this process at work and       │
│ unlock your next stage of growth?           │
│                                             │
│  [ Unlock → ]                               │
└─────────────────────────────────────────────┘
```

## Desktop Layout (>= lg breakpoint)

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│  ┌──────────────┬─────────────────────────────────────────────────────────────────┐ │
│  │ Label        │ Title: "Quality earns trust. Scale and speed deliver growth."   │ │
│  │ "The Process"│ Subtitle: "A proven process to accelerate time to..."          │ │
│  │ (2 cols)     │ (md:8 cols, lg:10 cols)                                         │ │
│  └──────────────┴─────────────────────────────────────────────────────────────────┘ │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘

╔═══════════════════════════════════╦══════════════════════════════════════════════════╗
║ ┌─────┐                           ║                                                  ║
║ │ 🔍  │ Inputs & Strategy         ║  We learn your business, audience, and           ║
║ └─────┘                           ║  competitive landscape fast. Then we identify    ║
║                                   ║  the opportunities that will drive the most      ║
║ border-t, border-b                ║  impact.                                         ║
║ border-l, border-r                ║  border-t, border-b, border-r                    ║
║ (4 cols on lg)                    ║  (8 cols on lg)                                  ║
╠═══════════════════════════════════╬══════════════════════════════════════════════════╣
║ ┌─────┐                           ║                                                  ║
║ │ ⚙️  │ Calibration & Workflows   ║  We define quality standards and voice           ║
║ └─────┘                           ║  together. Then we build custom AI workflows     ║
║                                   ║  with human oversight that scale quality         ║
║ border-b                          ║  consistently.                                   ║
║ border-l, border-r                ║  border-b, border-r                              ║
╠═══════════════════════════════════╬══════════════════════════════════════════════════╣
║ ┌─────┐                           ║                                                  ║
║ │ ✏️  │ Execution & Iteration     ║  We publish and refresh content daily. Track     ║
║ └─────┘                           ║  AI visibility, rankings, traffic, and           ║
║                                   ║  conversions. Iterate fast based on what's       ║
║ border-b                          ║  working.                                        ║
║ border-l, border-r                ║  border-b, border-r                              ║
╠═══════════════════════════════════╬══════════════════════════════════════════════════╣
║ ┌─────┐                           ║                                                  ║
║ │ 📈  │ Growth & Scale            ║  Content compounds into consistent pipeline.     ║
║ └─────┘                           ║  The system gets smarter and faster. Experts     ║
║                                   ║  shift toward strategy and new experiments.      ║
║ border-b                          ║                                                  ║
║ border-l, border-r                ║  border-b, border-r                              ║
╚═══════════════════════════════════╩══════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────────────────────────────┐
│ Ready to see this process at work and unlock your next stage of growth?              │
│                                                                                       │
│ [ Unlock → ]                                                                          │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

## Component Structure

```tsx
<section className="pt-[176px] border-t-[0.5px]">
  <Grid>
    {/* Header Row */}
    <div className="col-span-full md:col-span-2">Label</div>
    <div className="col-span-full md:col-span-8 lg:col-span-10">
      Title + Subtitle
    </div>
  </Grid>

  {/* Process Steps Grid */}
  <Grid className="mt-8">
    {/* Step 1 */}
    <div className="col-span-full lg:col-span-4 border-t border-b border-l border-r">
      Icon + Title
    </div>
    <div className="col-span-full lg:col-span-8 border-t border-b border-r">
      Description
    </div>

    {/* Step 2 */}
    <div className="col-span-full lg:col-span-4 border-b border-l border-r">
      Icon + Title
    </div>
    <div className="col-span-full lg:col-span-8 border-b border-r">
      Description
    </div>

    {/* Step 3 */}
    <div className="col-span-full lg:col-span-4 border-b border-l border-r">
      Icon + Title
    </div>
    <div className="col-span-full lg:col-span-8 border-b border-r">
      Description
    </div>

    {/* Step 4 */}
    <div className="col-span-full lg:col-span-4 border-b border-l border-r">
      Icon + Title
    </div>
    <div className="col-span-full lg:col-span-8 border-b border-r">
      Description
    </div>
  </Grid>

  {/* CTA Section */}
  <Grid>
    <div className="col-span-full">CTA Text + Button</div>
  </Grid>
</section>
```

## Border Rules

### Column 1 (Icon + Title):

- `border-t` - Only first step
- `border-b` - All steps
- `border-l` - All steps
- `border-r` - All steps

### Column 2 (Description):

- `border-t` - Only first step
- `border-b` - All steps
- `border-r` - All steps

### Mobile:

- Columns stack vertically
- Icon+Title keeps all 4 borders (t/b/l/r)
- Description appears below without top border
