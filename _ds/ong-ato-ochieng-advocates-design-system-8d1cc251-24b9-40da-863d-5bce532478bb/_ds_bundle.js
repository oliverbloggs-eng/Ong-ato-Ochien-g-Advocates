/* @ds-bundle: {"format":4,"namespace":"OngAtoOchiengAdvocatesDesignSystem_8d1cc2","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"Overline","sourcePath":"components/content/Overline.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FieldLabel","sourcePath":"components/forms/FieldLabel.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"052b53957c6b","components/buttons/IconButton.jsx":"44ed21609233","components/content/Avatar.jsx":"2da79256298d","components/content/Badge.jsx":"5e741254734b","components/content/Card.jsx":"3071cb00f4a8","components/content/Divider.jsx":"c1db1cff5e38","components/content/Overline.jsx":"2d257288b721","components/content/StatBlock.jsx":"ca5c7c09cda4","components/content/Tag.jsx":"b7571eb03d68","components/forms/Checkbox.jsx":"a8a845908d15","components/forms/FieldLabel.jsx":"efe39ec99b66","components/forms/Input.jsx":"49c18a0b35c1","components/forms/Radio.jsx":"1f41cb6a7e4a","components/forms/Select.jsx":"634647258dc5","components/forms/Textarea.jsx":"e7ec3c58556a","ui_kits/website/Advocates.jsx":"ffa359b2c787","ui_kits/website/Chrome.jsx":"dbd78ee7a58f","ui_kits/website/Contact.jsx":"c328c30a40a6","ui_kits/website/Home.jsx":"c2841db7bfd3","ui_kits/website/Practice.jsx":"8a52229c595f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OngAtoOchiengAdvocatesDesignSystem_8d1cc2 = window.OngAtoOchiengAdvocatesDesignSystem_8d1cc2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
    border: '1px solid var(--color-primary)'
  },
  secondary: {
    background: 'var(--color-secondary)',
    color: 'var(--color-on-secondary)',
    border: '1px solid var(--color-secondary)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--green-700)',
    border: '1px solid var(--color-border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--green-700)',
    border: '1px solid transparent'
  },
  ondark: {
    background: 'rgba(255,255,255,.10)',
    color: 'var(--color-text-on-dark)',
    border: '1px solid var(--color-border-on-dark)'
  }
};
const SIZES = {
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: 14
  },
  md: {
    height: 44,
    padding: '0 22px',
    fontSize: 15
  },
  lg: {
    height: 52,
    padding: '0 30px',
    fontSize: 16
  }
};

/**
 * Primary action button for the firm's brand system.
 * Gold = primary, forest green = secondary, plus outline/ghost/on-dark variants.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = {
    primary: 'var(--color-primary-active)',
    secondary: 'var(--color-secondary-active)',
    outline: 'var(--green-50)',
    ghost: 'var(--green-50)',
    ondark: 'rgba(255,255,255,.18)'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      letterSpacing: '.2px',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
      width: fullWidth ? '100%' : 'auto',
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      ...v,
      ...(hover && !disabled ? {
        background: hoverBg,
        borderColor: variant === 'outline' ? 'var(--green-300)' : hoverBg
      } : {}),
      transform: active && !disabled ? 'translateY(1px)' : 'none',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast)',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 36,
  md: 44,
  lg: 52
};

/**
 * Square icon-only button. Pairs Lucide (or any) icon glyphs with brand styling.
 * Always pass an aria-label for accessibility.
 */
function IconButton({
  children,
  variant = 'outline',
  size = 'md',
  disabled = false,
  round = false,
  style = {},
  'aria-label': ariaLabel,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '1px solid var(--color-primary)',
      hover: 'var(--color-primary-active)'
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--green-700)',
      border: '1px solid var(--color-border-strong)',
      hover: 'var(--green-50)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-600)',
      border: '1px solid transparent',
      hover: 'var(--ink-100)'
    },
    ondark: {
      background: 'rgba(255,255,255,.10)',
      color: 'var(--color-text-on-dark)',
      border: '1px solid var(--color-border-on-dark)',
      hover: 'rgba(255,255,255,.18)'
    }
  };
  const v = variants[variant] || variants.outline;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: round ? 'var(--radius-full)' : 'var(--radius-md)',
      background: hover && !disabled ? v.hover : v.background,
      color: v.color,
      border: v.border,
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Avatar.jsx
try { (() => {
const SIZES = {
  sm: 36,
  md: 48,
  lg: 64,
  xl: 88
};

/** Circular avatar — image or initials with a gold ring option. Used for advocates. */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  style = {}
}) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: dim * 0.4,
      border: ring ? '2px solid var(--gold-500)' : '1px solid var(--color-border)',
      boxShadow: ring ? '0 0 0 2px var(--white) inset' : 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  gold: {
    bg: 'var(--gold-100)',
    fg: 'var(--gold-700)'
  },
  green: {
    bg: 'var(--green-50)',
    fg: 'var(--green-700)'
  },
  neutral: {
    bg: 'var(--ink-100)',
    fg: 'var(--ink-700)'
  },
  success: {
    bg: '#e3f2e8',
    fg: 'var(--color-success)'
  },
  danger: {
    bg: '#f7e6e5',
    fg: 'var(--color-danger)'
  },
  solid: {
    bg: 'var(--color-secondary)',
    fg: 'var(--white)'
  }
};

/** Small status/label pill. */
function Badge({
  children,
  tone = 'gold',
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.gold;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. `interactive` adds hover lift; `tone="dark"` for green bands. */
function Card({
  children,
  interactive = false,
  tone = 'light',
  padding = 'var(--space-card-pad)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      background: dark ? 'rgba(255,255,255,.05)' : 'var(--white)',
      border: `1px solid ${dark ? 'var(--color-border-on-dark)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-lg)',
      padding,
      color: dark ? 'var(--color-text-on-dark)' : 'var(--ink-900)',
      boxShadow: dark ? 'none' : interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
      ...(interactive && hover && !dark ? {
        borderColor: 'var(--gold-300)'
      } : {}),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Divider.jsx
try { (() => {
/** Hairline divider. `tone="dark"` for green bands; optional label text. */
function Divider({
  tone = 'light',
  label,
  style = {}
}) {
  const line = tone === 'dark' ? 'var(--color-border-on-dark)' : 'var(--color-border)';
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: line
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: 'var(--ink-500)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: line
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: line,
      width: '100%',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/Overline.jsx
try { (() => {
/** Uppercase section label with a short gold rule. The brand's kicker style. */
function Overline({
  children,
  color = 'var(--gold-600)',
  rule = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: color,
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '1.6px',
      textTransform: 'uppercase',
      color
    }
  }, children));
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Overline.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
/** Credential figure — large serif number + label. For "Est. 2004", "300+ matters". */
function StatBlock({
  value,
  label,
  tone = 'light',
  align = 'left',
  style = {}
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 48,
      lineHeight: 1.05,
      letterSpacing: '-0.5px',
      color: dark ? 'var(--gold-400)' : 'var(--gold-600)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.4px',
      color: dark ? 'var(--color-text-on-dark-muted)' : 'var(--ink-500)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Outlined tag for practice areas / filters. Optional removable × and active state. */
function Tag({
  children,
  active = false,
  onRemove,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1,
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      background: active ? 'var(--green-500)' : 'var(--white)',
      color: active ? 'var(--white)' : 'var(--ink-700)',
      border: `1px solid ${active ? 'var(--green-500)' : 'var(--color-border-strong)'}`,
      cursor: rest.onClick ? 'pointer' : 'default',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'inherit',
      padding: 0,
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with gold-filled checked state and brand focus ring. */
function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  label,
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const [focus, setFocus] = React.useState(false);
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange({
      ...e,
      target: {
        ...e.target,
        checked: !on
      }
    });
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    tabIndex: 0,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle(e);
      }
    },
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--color-on-primary)',
      fontSize: 13,
      fontWeight: 700,
      background: on ? 'var(--color-primary)' : 'var(--white)',
      border: `1px solid ${on ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'all var(--dur-fast)'
    }
  }, on ? '✓' : ''), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FieldLabel.jsx
try { (() => {
/** Form field label with optional required asterisk and helper/error text. */
function FieldLabel({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-800)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger)',
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--color-danger)' : 'var(--ink-500)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FieldLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FieldLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with brand focus ring. Supports optional invalid state + leading icon. */
function Input({
  invalid = false,
  disabled = false,
  iconLeft = null,
  size = 'md',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 38 : size === 'lg' ? 52 : 44;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      color: 'var(--ink-400)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      width: '100%',
      height: h,
      boxSizing: 'border-box',
      padding: iconLeft ? '0 16px 0 42px' : '0 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink-900)',
      background: disabled ? 'var(--ink-50)' : 'var(--white)',
      border: `1px solid ${invalid ? 'var(--color-danger)' : focus ? 'var(--gold-500)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio control with green-filled dot. Group by passing the same `name`. */
function Radio({
  checked,
  defaultChecked,
  disabled = false,
  label,
  name,
  value,
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const [focus, setFocus] = React.useState(false);
  const select = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange({
      ...e,
      target: {
        ...e.target,
        checked: true,
        value
      }
    });
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: select,
    tabIndex: 0,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        select(e);
      }
    },
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-full)',
      background: 'var(--white)',
      border: `1px solid ${on ? 'var(--color-secondary)' : 'var(--color-border-strong)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'all var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--color-secondary)' : 'transparent',
      transition: 'background var(--dur-fast)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match brand inputs, with a chevron affordance. */
function Select({
  invalid = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: '100%',
      height: 44,
      boxSizing: 'border-box',
      padding: '0 40px 0 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink-900)',
      background: disabled ? 'var(--ink-50)' : 'var(--white)',
      appearance: 'none',
      border: `1px solid ${invalid ? 'var(--color-danger)' : focus ? 'var(--gold-500)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 15,
      pointerEvents: 'none',
      color: 'var(--ink-500)',
      fontSize: 12
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input, matching Input styling. */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px 16px',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--ink-900)',
      background: disabled ? 'var(--ink-50)' : 'var(--white)',
      border: `1px solid ${invalid ? 'var(--color-danger)' : focus ? 'var(--gold-500)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Advocates.jsx
try { (() => {
const NS = window.OngAtoOchiengAdvocatesDesignSystem_8d1cc2;
const {
  Card,
  Overline,
  Avatar,
  Badge,
  Button,
  Divider
} = NS;
const TEAM = [['Anthony Ong\u2019ato', 'Managing Partner', 'Commercial & corporate law, mergers, and complex commercial litigation. LL.B (Hons), Advocate of the High Court of Kenya.', ['Commercial', 'Litigation']], ['Beatrice Ochieng\u2019', 'Partner', 'Land, conveyancing, and succession. Two decades advising families and developers on property and estates.', ['Conveyancing', 'Succession']], ['David Kimani', 'Senior Associate', 'Dispute resolution, arbitration, and employment matters before courts and tribunals.', ['Disputes', 'Employment']], ['Faith Wanjiru', 'Associate', 'Family law, matrimonial matters, and the drafting of wills and trusts.', ['Family', 'Wills']]];
function Advocates({
  setPage
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--green-800)',
      color: 'var(--color-text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--gold-400)"
  }, "The Firm"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      margin: '18px 0 0',
      letterSpacing: '-0.3px'
    }
  }, "Our Advocates"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--color-text-on-dark-muted)',
      maxWidth: 620,
      marginTop: 14
    }
  }, "Partners and associates who bring rigour, discretion, and genuine care to every matter."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, TEAM.map(([name, role, bio, tags]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    interactive: true,
    style: {
      padding: 32,
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: name,
    ring: true,
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      margin: 0,
      color: 'var(--ink-900)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold-700)',
      fontWeight: 600,
      fontSize: 14,
      margin: '4px 0 12px',
      letterSpacing: '.3px'
    }
  }, role), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--ink-600)',
      margin: 0
    }
  }, bio), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "green"
  }, t))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Recognition")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      color: 'var(--ink-900)',
      margin: '14px 0 0'
    }
  }, "Trusted & Accredited")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, [['award', 'Law Society of Kenya'], ['shield-check', 'Advocates of the High Court'], ['book-open', 'CIArb Members'], ['star', 'East Africa Legal 500']].map(([ic, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
      textAlign: 'center',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: ic,
    s: 26,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-700)'
    }
  }, label)))))));
}
Object.assign(window, {
  Advocates
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Advocates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// Shared header + footer for the Ong'ato, Ochieng' & Co. Advocates website kit.
const NS = window.OngAtoOchiengAdvocatesDesignSystem_8d1cc2;
const {
  Button,
  IconButton,
  Overline,
  Divider
} = NS;
const NAV = ['Home', 'Practice Areas', 'Our Advocates', 'Contact'];
function Ico({
  n,
  s = 18,
  color
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: s,
      height: s,
      color
    }
  });
}
function Header({
  page,
  setPage,
  scrolled
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,.92)' : 'var(--white)',
      backdropFilter: scrolled ? 'saturate(160%) blur(8px)' : 'none',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px',
      height: 78,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage('Home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-transparent.png",
    alt: "Ong'ato, Ochieng' & Co. Advocates",
    style: {
      height: 52
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, NAV.map(item => {
    const active = page === item;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => setPage(item),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '8px 14px',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--green-700)' : 'var(--ink-600)',
        position: 'relative'
      }
    }, item, active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 14,
        right: 14,
        bottom: 0,
        height: 2,
        background: 'var(--gold-500)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+254700000000",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      color: 'var(--ink-700)',
      fontSize: 14,
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "phone",
    s: 16,
    color: "var(--gold-600)"
  }), "+254 700 000 000"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setPage('Contact')
  }, "Request a Consultation"))));
}
function Footer({
  setPage
}) {
  const cols = [['Practice', ['Commercial & Corporate', 'Land & Conveyancing', 'Family Law', 'Dispute Resolution']], ['The Firm', ['Our Advocates', 'About Us', 'Careers', 'News & Judgments']], ['Contact', ['Nairobi Chambers', 'Book a Consultation', 'Client Portal', 'Directions']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--green-800)',
      color: 'var(--color-text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 32px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 18px',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-transparent.png",
    alt: "",
    style: {
      height: 46
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      maxWidth: 320,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--color-text-on-dark-muted)'
    }
  }, "Trusted counsel and considered advocacy for individuals and enterprises across Kenya. Est. 2004, Nairobi.")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '1.4px',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      margin: '4px 0 16px'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage('Contact'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-text-on-dark-muted)',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement(Divider, {
    tone: "dark",
    style: {
      margin: '40px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--color-text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Ong'ato, Ochieng' & Co. Advocates. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit',
      cursor: 'pointer'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit',
      cursor: 'pointer'
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit',
      cursor: 'pointer'
    }
  }, "LSK No. 12345")))));
}
Object.assign(window, {
  Header,
  Footer,
  Ico
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const NS = window.OngAtoOchiengAdvocatesDesignSystem_8d1cc2;
const {
  Card,
  Overline,
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  FieldLabel
} = NS;
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--green-800)',
      color: 'var(--color-text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--gold-400)"
  }, "Get in Touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      margin: '18px 0 0',
      letterSpacing: '-0.3px'
    }
  }, "Request a Consultation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--color-text-on-dark-muted)',
      maxWidth: 620,
      marginTop: 14
    }
  }, "Tell us about your matter. We treat every enquiry in strict confidence and respond within one business day."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px 96px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 36
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--green-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "check",
    s: 30,
    color: "var(--green-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--ink-900)',
      margin: '18px 0 8px'
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-600)',
      margin: '0 0 22px'
    }
  }, "Your enquiry has been received. An advocate will be in touch within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another enquiry")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(FieldLabel, {
    label: "Full name",
    required: true,
    htmlFor: "n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "Jane Wanjiru"
  })), /*#__PURE__*/React.createElement(FieldLabel, {
    label: "Phone",
    required: true,
    htmlFor: "p"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "p",
    placeholder: "+254 7\u2026"
  }))), /*#__PURE__*/React.createElement(FieldLabel, {
    label: "Email",
    htmlFor: "e"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "e",
    placeholder: "you@email.com"
  })), /*#__PURE__*/React.createElement(FieldLabel, {
    label: "Matter type",
    htmlFor: "m"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "m"
  }, /*#__PURE__*/React.createElement("option", null, "Commercial & corporate"), /*#__PURE__*/React.createElement("option", null, "Land & conveyancing"), /*#__PURE__*/React.createElement("option", null, "Family law"), /*#__PURE__*/React.createElement("option", null, "Dispute resolution"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement(FieldLabel, {
    label: "How can we help?",
    htmlFor: "msg"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "msg",
    rows: 5,
    placeholder: "Briefly describe your matter\u2026"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I understand this enquiry does not create an advocate\u2013client relationship.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true)
  }, "Submit Enquiry"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, [['map-pin', 'Chambers', 'Ong\u2019ato Chambers, Upper Hill\nNairobi, Kenya'], ['phone', 'Telephone', '+254 700 000 000\n+254 20 000 0000'], ['mail', 'Email', 'info@ongato-ochieng.co.ke'], ['clock', 'Hours', 'Mon–Fri, 8:30am – 5:30pm\nSaturday by appointment']].map(([ic, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--gold-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: ic,
    s: 21,
    color: "var(--gold-700)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-900)',
      fontSize: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-600)',
      fontSize: 14.5,
      lineHeight: 1.55,
      whiteSpace: 'pre-line',
      marginTop: 3
    }
  }, body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--green-700)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "map",
    s: 34,
    color: "rgba(255,255,255,.5)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 14,
      fontSize: 12,
      color: 'var(--color-text-on-dark-muted)'
    }
  }, "Map \u2014 Upper Hill, Nairobi")))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const NS = window.OngAtoOchiengAdvocatesDesignSystem_8d1cc2;
const {
  Button,
  Card,
  Overline,
  StatBlock,
  Badge
} = NS;
const PRACTICE = [['scale', 'Commercial & Corporate', 'Contracts, company formation, regulatory compliance, and commercial disputes.'], ['landmark', 'Land & Conveyancing', 'Title, transfers, leases, and property due diligence across Kenyan counties.'], ['users', 'Family Law', 'Matrimonial matters, succession, wills, and the administration of estates.'], ['gavel', 'Dispute Resolution', 'Litigation, arbitration, and mediation before courts and tribunals.'], ['briefcase', 'Employment & Labour', 'Advisory, contracts, and representation in employment and labour disputes.'], ['file-text', 'Conveyancing & Debt', 'Debt recovery, securities, and enforcement for lenders and businesses.']];
function Home({
  setPage
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--green-800)',
      color: 'var(--color-text-on-dark)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      right: -120,
      width: 460,
      height: 460,
      border: '2px solid rgba(192,160,48,.16)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -60,
      right: 40,
      width: 460,
      height: 460,
      border: '2px solid rgba(192,160,48,.10)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '104px 32px 112px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--gold-400)"
  }, "Ong'ato, Ochieng' & Co. Advocates"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 68,
      lineHeight: 1.04,
      letterSpacing: '-0.5px',
      margin: '22px 0 0'
    }
  }, "Trusted Counsel.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "Considered Advocacy.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--color-text-on-dark-muted)',
      maxWidth: 560,
      marginTop: 24
    }
  }, "A Nairobi law firm advising individuals and enterprises in commercial, property, and family matters \u2014 with the precision and discretion your interests deserve."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setPage('Contact')
  }, "Request a Consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "ondark",
    size: "lg",
    onClick: () => setPage('Practice Areas')
  }, "Our Practice Areas"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "Est. 2004",
    label: "Serving clients in Nairobi"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "300+",
    label: "Matters successfully handled"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "6",
    label: "Core practice areas"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "LSK",
    label: "Law Society of Kenya members"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "What We Do")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      margin: '16px 0 0',
      color: 'var(--ink-900)'
    }
  }, "Practice Areas"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ink-600)',
      marginTop: 14
    }
  }, "We represent clients across the matters that shape their businesses, families, and property.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, PRACTICE.map(([icon, title, desc]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true,
    style: {
      cursor: 'pointer'
    },
    onClick: () => setPage('Practice Areas')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--green-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: icon,
    s: 24,
    color: "var(--green-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 23,
      margin: '18px 0 8px',
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--ink-600)',
      margin: 0
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      color: 'var(--green-700)',
      fontSize: 14,
      fontWeight: 600
    }
  }, "Learn more ", /*#__PURE__*/React.createElement(Ico, {
    n: "arrow-right",
    s: 16
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "Our Approach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 38,
      margin: '16px 0 20px',
      color: 'var(--ink-900)',
      lineHeight: 1.12
    }
  }, "Two decades of measured, principled counsel."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--ink-600)'
    }
  }, "We combine deep knowledge of Kenyan law with a discreet, client-first approach. Every matter is handled by an advocate who understands both the letter of the law and the outcome you need."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 26
    }
  }, ['Direct access to a partner on every matter', 'Clear, fixed-scope fee estimates before we begin', 'Confidential, considered advice — never rushed'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "check",
    s: 15,
    color: "var(--ink-900)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--ink-800)'
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    style: {
      background: 'var(--green-700)',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      lineHeight: 1.4,
      color: 'var(--color-text-on-dark)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)',
      fontSize: 48
    }
  }, "\u201C"), "They handled our land dispute with rigour and calm. We always knew where we stood."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, "JM"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--color-text-on-dark)'
    }
  }, "J. Mwangi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-on-dark-muted)'
    }
  }, "Managing Director, Nairobi")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gold-500)',
      borderRadius: 'var(--radius-xl)',
      padding: '56px 56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      color: 'var(--ink-900)',
      margin: 0
    }
  }, "Speak with an advocate today."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--gold-800)',
      margin: '10px 0 0'
    }
  }, "Confidential consultation \u2014 we respond within one business day.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => setPage('Contact')
  }, "Request a Consultation"))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Practice.jsx
try { (() => {
const NS = window.OngAtoOchiengAdvocatesDesignSystem_8d1cc2;
const {
  Card,
  Overline,
  Tag,
  Button,
  Badge
} = NS;
const AREAS = [['scale', 'Commercial & Corporate', 'We advise businesses through every stage — incorporation, shareholder agreements, commercial contracts, and regulatory compliance — and represent them when disputes arise.', ['Company formation', 'Contracts', 'Compliance', 'M&A']], ['landmark', 'Land & Conveyancing', 'End-to-end property counsel: title searches, transfers, charges and leases, and thorough due diligence for buyers, sellers, and developers.', ['Transfers', 'Leases', 'Due diligence', 'Charges']], ['users', 'Family Law', 'Sensitive, discreet handling of matrimonial matters, succession, the drafting of wills, and the administration of estates.', ['Succession', 'Wills', 'Matrimonial', 'Estates']], ['gavel', 'Dispute Resolution', 'Litigation and alternative dispute resolution before the courts and tribunals of Kenya, with a focus on efficient, principled outcomes.', ['Litigation', 'Arbitration', 'Mediation']]];
function Practice({
  setPage
}) {
  const [active, setActive] = React.useState('All');
  const filters = ['All', 'Business', 'Property', 'Family', 'Disputes'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--green-800)',
      color: 'var(--color-text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--gold-400)"
  }, "What We Do"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 52,
      margin: '18px 0 0',
      letterSpacing: '-0.3px'
    }
  }, "Practice Areas"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--color-text-on-dark-muted)',
      maxWidth: 620,
      marginTop: 14
    }
  }, "Focused expertise across the matters that shape our clients' businesses, families, and property."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 36,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    active: active === f,
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, AREAS.map(([icon, title, desc, chips]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true,
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 58,
      height: 58,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--green-50)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: icon,
    s: 26,
    color: "var(--green-600)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 25,
      margin: '2px 0 10px',
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--ink-600)',
      margin: 0
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 16
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    tone: "neutral"
  }, c)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      textAlign: 'center',
      padding: '48px',
      background: 'var(--ink-50)',
      borderRadius: 'var(--radius-xl)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--ink-900)',
      margin: 0
    }
  }, "Not sure where your matter fits?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink-600)',
      margin: '10px 0 22px'
    }
  }, "Tell us what you're facing and we'll direct you to the right advocate."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setPage('Contact')
  }, "Request a Consultation"))));
}
Object.assign(window, {
  Practice
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Practice.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FieldLabel = __ds_scope.FieldLabel;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
