# Grid Component Architecture

## Current Pattern Analysis

### Existing Header Patterns

**People Section (2-8-2 layout):**
```
┌────────────────────────────────────────────────────────────────────────┐
│ Grid (12 columns)                                                      │
├────────┬───────────────────────────────────────────────────────────────┤
│ Label  │ Title + Subtitle                                              │
│ 2 cols │ md:8 cols, lg:10 cols                                         │
│        │ text-[20px] lg:text-2xl                                       │
└────────┴───────────────────────────────────────────────────────────────┘
```

**Platform Section (1-1-8-2 layout):**
```
┌────────────────────────────────────────────────────────────────────────┐
│ Grid (12 columns)                                                      │
├────┬────┬──────────────────────────────────────────────────────┬──────┤
│Label│Gap │ Title + Subtitle                                    │ Gap  │
│1col│1col│ md:6 cols (start 3), lg:8 cols (start 3)           │2cols │
│    │    │ text-[20px] lg:text-2xl                             │      │
└────┴────┴──────────────────────────────────────────────────────┴──────┘
```

## Proposed Component Structure

### GridSection Component

**Purpose:** All-in-one component combining section wrapper, header, and content grid

**Props:**
```typescript
interface GridSectionProps {
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;              // Section wrapper classes
  headerClassName?: string;        // Header Grid classes
  contentClassName?: string;       // Content Grid classes
  labelClassName?: string;         // Label column classes
  titleClassName?: string;         // Title/subtitle column classes
  noGap?: boolean;                 // Pass to content Grid
  topBorder?: boolean;             // Add full-width border to content Grid
}
```

**Component Structure:**
```tsx
export function GridSection({
  label,
  title,
  subtitle,
  children,
  className,
  headerClassName,
  contentClassName,
  labelClassName,
  titleClassName,
  noGap = false,
  topBorder = false,
}: GridSectionProps) {
  return (
    <section className={cx("pt-[176px]", className)}>
      {/* Header */}
      <Grid className={headerClassName}>
        {/* Label Column */}
        <div className={cx("col-span-full md:col-span-2", labelClassName)}>
          <span className="text-sm text-muted-foreground">{label}</span>
        </div>

        {/* Title + Subtitle Column */}
        <div className={cx(
          "col-span-full md:col-span-8 lg:col-span-10",
          "flex flex-col mt-3 md:mt-0",
          titleClassName
        )}>
          <h2 className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.03em] lg:tracking-[-0.06em] font-medium text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.03em] lg:tracking-[-0.06em] font-medium text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </Grid>

      {/* Content Grid */}
      <Grid
        className={cx(
          "mt-8",
          topBorder &&
            "relative before:absolute before:inset-x-[calc(-50vw+50%)] before:top-0 before:h-[0.25px] before:bg-border",
          contentClassName
        )}
        noGap={noGap}
      >
        {children}
      </Grid>
    </section>
  );
}
```

## Usage Examples

### Example 1: People Section (Default 2-8-2)
```tsx
export function PeopleRoot({ className }: PeopleRootProps) {
  const content = Data.people();

  return (
    <GridSection
      label={content.label}
      title={content.title}
      subtitle={content.subtitle}
      className={className}
    >
      {/* Avatar Stack */}
      <div className="col-span-full flex flex-col gap-y-[9px]">
        <span className="text-foreground text-base lg:text-lg">
          {content.avatarLabel}
        </span>
        <PeopleAvatarStack team={content.team} />
      </div>

      {/* Company Logos */}
      <div className="col-span-full flex flex-col gap-y-[9px] mt-6">
        <span className="text-foreground text-base lg:text-lg">
          {content.companyLabel}
        </span>
        <PeopleCompanyLogos companies={content.companies} />
      </div>
    </GridSection>
  );
}
```

### Example 2: Process Section (With Borders)
```tsx
export function ProcessRoot({ className }: ProcessRootProps) {
  const content = Data.process();

  return (
    <GridSection
      label={content.label}
      title={content.title}
      subtitle={content.subtitle}
      className={className}
      noGap
      topBorder
    >
      {content.steps.map((step) => (
        <>
          <div className="col-span-4 p-5 lg:p-10 lg:border-l-[0.25px] lg:border-r-[0.25px] border-b-[0.25px]">
            {/* Icon + Title */}
          </div>
          <div className="col-span-8 p-5 lg:p-10 lg:border-r-[0.25px] border-b-[0.25px]">
            {/* Description */}
          </div>
        </>
      ))}

      {/* CTA */}
      <div className="col-span-full p-5 lg:p-10 lg:border-l-[0.25px] lg:border-r-[0.25px]">
        {/* CTA content */}
      </div>
    </GridSection>
  );
}
```

### Example 3: Platform Section (Custom 1-1-8-2 Layout)
```tsx
export function PlatformFeatures() {
  const content = Data.platformFeatures();

  return (
    <GridSection
      label={content.sectionLabel}
      title={content.heading}
      subtitle={content.subheading}
      labelClassName="md:col-span-1"
      titleClassName="md:col-span-6 md:col-start-3 lg:col-span-8 lg:col-start-3"
      contentClassName="mt-10"
    >
      {/* Navigation */}
      <div className="col-span-2">
        <PlatformNav />
      </div>

      {/* Content */}
      <div className="col-span-10">
        {/* Feature sections */}
      </div>
    </GridSection>
  );
}
```

## Key Principles

1. **Single component** - GridSection handles section, header, and content
2. **Children use col-span** - Direct grid children with Tailwind classes
3. **Flexible customization** - Multiple className props for each part
4. **Default 2-8-2 layout** - Override with labelClassName/titleClassName
5. **Content props** - noGap and topBorder for special cases

## Implementation Files

```
components/
├── grid/
│   ├── gridRoot.tsx           (existing)
│   └── gridSection.tsx        (new)
```

## Default Behavior

- **Section**: `pt-[176px]` spacing, no border
- **Header**: 2-8-2 column layout (label: 2 cols, content: 8/10 cols)
- **Content**: Standard grid with gaps, mt-8 spacing

## Benefits

1. **Single import**: Only need GridSection component
2. **Consistent spacing**: All sections use same pt-[176px]
3. **Reduced boilerplate**: No repeated section/Grid wrapper code
4. **Flexible customization**: className props for each part
5. **Type-safe**: Props enforce correct usage
