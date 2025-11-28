## Keyboard & A11y Checklist
- Header nav links reachable via Tab order; aria-label set to "Primary".
- NewsCard anchor wraps entire card with descriptive `aria-label` ("Read full article: ...").
- Custom focus states use `.news-card-focus:focus-visible` and global `:focus-visible` outline for all interactive elements.
- Images include dynamic alt text; placeholder alt explains missing media.
- Buttons announce loading states via `role="status"` + `aria-live="polite"`.

### Focus Style Snippet
```
:focus-visible {
  outline: 3px solid #c50f1f;
  outline-offset: 2px;
}

.news-card-focus:focus-visible {
  @apply ring-2 ring-brand-red ring-offset-2 ring-offset-white;
}
```

Tested with keyboard-only traversal to ensure hero CTA, cards, back links sab easily accessible hain.

