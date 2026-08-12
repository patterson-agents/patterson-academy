/* @ds-bundle: {"format":4,"namespace":"PattersonCompaniesDesignSystem_3534f9","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7e214be36871","components/core/Button.jsx":"98fae79ef8f0","components/core/Card.jsx":"11a14798d6f8","components/core/IconButton.jsx":"b941fece5662","components/core/Stat.jsx":"e0e1d164ae78","components/feedback/Alert.jsx":"60554ac14775","components/feedback/Tabs.jsx":"579ba456e9bc","components/forms/Checkbox.jsx":"4f93f0dc4f95","components/forms/Input.jsx":"148131ac223c","components/forms/Radio.jsx":"04b993d678a7","components/forms/Select.jsx":"6768c7548eef","components/forms/Switch.jsx":"a2ba3bcb1dc7","integrations/tailwind.config.js":"c23377607b3a","integrations/theme-ui.js":"0a32db4d6bb9","integrations/uno.config.js":"7c3ec4267f8f","ui_kits/corporate-website/Footer.jsx":"e51e8a5802ba","ui_kits/corporate-website/Header.jsx":"b42dc70d80a6","ui_kits/corporate-website/HomeScreen.jsx":"95de18383087","ui_kits/corporate-website/NewsroomScreen.jsx":"bacd80c8345f","ui_kits/corporate-website/WhatWeDoScreen.jsx":"e6c4e97553f4","ui_kits/corporate-website/icons.jsx":"f651fab378d8","ui_kits/patterson-docs/app.jsx":"eba02e45714e","ui_kits/patterson-docs/collections.jsx":"d6f79eda4477","ui_kits/patterson-docs/data.jsx":"2ef06befe75f","ui_kits/patterson-docs/pages1.jsx":"60f4c4ff1542","ui_kits/patterson-docs/pages2.jsx":"b88398a6de3e","ui_kits/storefront/StoreFooter.jsx":"aaadd2c29f92","ui_kits/storefront/StoreHeader.jsx":"1a31a8f56a8a","ui_kits/storefront/StoreHome.jsx":"b97f39f1ecf6","ui_kits/storefront/brands.js":"b19ed7531720","ui_kits/storefront/icons.jsx":"d018132f2076"},"inlinedExternals":[],"unexposedExports":[{"name":"meta","sourcePath":"integrations/theme-ui.js"},{"name":"pattersonPreset","sourcePath":"integrations/uno.config.js"},{"name":"pattersonTheme","sourcePath":"integrations/theme-ui.js"},{"name":"shortcuts","sourcePath":"integrations/uno.config.js"},{"name":"theme","sourcePath":"integrations/theme-ui.js"}]} */

(() => {

const __ds_ns = (window.PattersonCompaniesDesignSystem_3534f9 = window.PattersonCompaniesDesignSystem_3534f9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status/label badge. Tone draws from the brand + semantic palette.
 */
function Badge({
  children,
  tone = 'navy',
  solid = false,
  style,
  ...rest
}) {
  const tones = {
    navy: {
      fg: 'var(--pat-navy)',
      bg: 'var(--pat-navy-10)',
      solidBg: 'var(--pat-navy)'
    },
    sky: {
      fg: 'var(--pat-blue)',
      bg: 'var(--pat-sky-10)',
      solidBg: 'var(--pat-sky)'
    },
    green: {
      fg: '#3d7a1f',
      bg: '#eef6e6',
      solidBg: 'var(--pat-green)'
    },
    teal: {
      fg: 'var(--pat-teal)',
      bg: 'var(--pat-success-bg)',
      solidBg: 'var(--pat-teal)'
    },
    purple: {
      fg: 'var(--pat-purple)',
      bg: '#efe9f6',
      solidBg: 'var(--pat-purple)'
    },
    gray: {
      fg: 'var(--pat-gray-600)',
      bg: 'var(--pat-gray-100)',
      solidBg: 'var(--pat-gray-600)'
    },
    warning: {
      fg: 'var(--pat-warning)',
      bg: 'var(--pat-warning-bg)',
      solidBg: 'var(--pat-warning)'
    },
    danger: {
      fg: 'var(--pat-danger)',
      bg: 'var(--pat-danger-bg)',
      solidBg: 'var(--pat-danger)'
    }
  };
  const t = tones[tone] || tones.navy;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      color: solid ? '#fff' : t.fg,
      background: solid ? t.solidBg : t.bg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Patterson primary action button.
 * Variants map to brand intent: solid navy/sky for primary actions,
 * outline & ghost for secondary, on-dark for use over navy surfaces.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--control-h-sm)',
      padding: '0 16px',
      font: 'var(--fs-sm)'
    },
    md: {
      height: 'var(--control-h-md)',
      padding: '0 22px',
      font: 'var(--fs-body)'
    },
    lg: {
      height: 'var(--control-h-lg)',
      padding: '0 30px',
      font: 'var(--fs-h5)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--pat-navy)',
      color: '#fff',
      border: '2px solid var(--pat-navy)'
    },
    sky: {
      background: 'var(--pat-sky)',
      color: '#fff',
      border: '2px solid var(--pat-sky)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--pat-navy)',
      border: '2px solid var(--pat-navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--pat-navy)',
      border: '2px solid transparent'
    },
    onDark: {
      background: '#fff',
      color: 'var(--pat-navy)',
      border: '2px solid #fff'
    }
  };
  const v = variants[variant] || variants.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...v,
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--pat-sky)', el.style.borderColor = 'var(--pat-sky)';else if (variant === 'sky') el.style.background = 'var(--pat-navy)', el.style.borderColor = 'var(--pat-navy)';else if (variant === 'outline') el.style.background = 'var(--pat-navy)', el.style.color = '#fff';else if (variant === 'ghost') el.style.background = 'var(--pat-navy-10)';else if (variant === 'onDark') el.style.background = 'var(--pat-sky)', el.style.color = '#fff', el.style.borderColor = 'var(--pat-sky)';
  };
  const hoverOut = e => {
    const el = e.currentTarget;
    Object.assign(el.style, {
      background: v.background,
      color: v.color,
      borderColor: v.border.split(' ').pop()
    });
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = 'translateY(1px)'),
    onMouseUp: e => e.currentTarget.style.transform = 'translateY(0)'
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Clean white card with soft navy-tinted shadow and a
 * subtle border. Optional accent stripe along the top in a brand color.
 */
function Card({
  children,
  elevation = 'sm',
  accent = null,
  padding = 'var(--space-5)',
  interactive = false,
  style,
  ...rest
}) {
  const shadows = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const accents = {
    navy: 'var(--pat-navy)',
    sky: 'var(--pat-sky)',
    green: 'var(--pat-green)',
    teal: 'var(--pat-teal)',
    purple: 'var(--pat-purple)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = shadows[elevation];
        e.currentTarget.style.transform = 'translateY(0)';
      }
    },
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: shadows[elevation] || shadows.sm,
      borderTop: accent ? `4px solid ${accents[accent] || accent}` : undefined,
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon-only button. Pass an icon (SVG / glyph) as children.
 * Sized to meet the 44px hit-target minimum at md.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 44,
    lg: 54
  };
  const d = dims[size] || dims.md;
  const variants = {
    solid: {
      background: 'var(--pat-navy)',
      color: '#fff'
    },
    sky: {
      background: 'var(--pat-sky)',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--pat-navy)'
    },
    subtle: {
      background: 'var(--pat-navy-10)',
      color: 'var(--pat-navy)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: e => {
      if (!disabled && variant === 'ghost') e.currentTarget.style.background = 'var(--pat-navy-10)';
    },
    onMouseLeave: e => {
      if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big-number statistic, as used across Patterson marketing ("86,000,000
 * U.S. households have pets"). Number in sky or navy, label beneath.
 */
function Stat({
  value,
  label,
  tone = 'sky',
  align = 'left',
  style,
  ...rest
}) {
  const colors = {
    sky: 'var(--pat-sky)',
    navy: 'var(--pat-navy)',
    teal: 'var(--pat-teal)',
    green: 'var(--pat-green)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-stat)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 1,
      color: colors[tone] || colors.sky
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-body)',
      maxWidth: '22ch',
      marginInline: align === 'center' ? 'auto' : undefined
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline message banner. Tone sets accent + tint; optional title & dismiss. */
function Alert({
  children,
  tone = 'info',
  title,
  onClose,
  icon,
  style,
  ...rest
}) {
  const tones = {
    info: {
      fg: 'var(--pat-info)',
      bg: 'var(--pat-info-bg)',
      bar: 'var(--pat-info)'
    },
    success: {
      fg: 'var(--pat-success)',
      bg: 'var(--pat-success-bg)',
      bar: 'var(--pat-success)'
    },
    warning: {
      fg: 'var(--pat-warning)',
      bg: 'var(--pat-warning-bg)',
      bar: 'var(--pat-warning)'
    },
    danger: {
      fg: 'var(--pat-danger)',
      bg: 'var(--pat-danger-bg)',
      bar: 'var(--pat-danger)'
    },
    brand: {
      fg: 'var(--pat-navy)',
      bg: 'var(--pat-navy-10)',
      bar: 'var(--pat-sky)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      background: t.bg,
      borderLeft: `4px solid ${t.bar}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      display: 'flex',
      flex: 'none',
      marginTop: '1px'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      fontSize: 'var(--fs-body)',
      marginBottom: children ? '2px' : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex',
      padding: 0,
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
/**
 * Horizontal tabs with a sky underline indicator. Controlled via `value`
 * or uncontrolled via `defaultValue`.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value)));
  const active = isControlled ? value : internal;
  const select = val => {
    if (!isControlled) setInternal(val);
    onChange && onChange(val);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const lbl = typeof t === 'string' ? t : t.label;
    const on = active === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      onClick: () => select(val),
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--pat-navy)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-muted)';
      },
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '12px 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: on ? 'var(--pat-navy)' : 'var(--text-muted)',
        borderBottom: `3px solid ${on ? 'var(--pat-sky)' : 'transparent'}`,
        marginBottom: '-1px',
        transition: 'color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
      }
    }, lbl);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with brand sky fill when checked. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const cbId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: !isControlled ? defaultChecked : undefined,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${on ? 'var(--pat-sky)' : 'var(--border-strong)'}`,
      background: on ? 'var(--pat-sky)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with label, optional helper/error text and sky focus ring.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  helper,
  error,
  disabled = false,
  required = false,
  iconLeft = null,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--pat-danger)' : focused ? 'var(--pat-sky)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pat-danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14px',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: 'var(--control-h-md)',
      padding: iconLeft ? '0 14px 0 42px' : '0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)',
      background: disabled ? 'var(--surface-muted)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused && !error ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      boxSizing: 'border-box'
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--pat-danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio button in a RadioGroup. Use within Radio.Group for selection state. */
function Radio({
  label,
  value,
  checked,
  onChange,
  name,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const rId = id || `rd-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--pat-sky)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--pat-sky)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}

/** Convenience group: renders radios from options and manages selection. */
Radio.Group = function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  direction = 'column',
  gap = '12px',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap,
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement(Radio, {
      key: val,
      name: name,
      value: val,
      label: lbl,
      checked: value === val,
      onChange: () => onChange && onChange(val)
    });
  }));
};
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with brand chevron and focus ring. */
function Select({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const selId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 40px 0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)',
      background: disabled ? 'var(--surface-muted)' : 'var(--surface-card)',
      border: `1.5px solid ${focused ? 'var(--pat-sky)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused ? 'var(--ring-focus)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--pat-navy)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch; sky track when on. Controlled or uncontrolled. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const swId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: !isControlled ? defaultChecked : undefined,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--pat-sky)' : 'var(--border-strong)',
      padding: 3,
      boxSizing: 'border-box',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// integrations/tailwind.config.js
try { (() => {
/**
 * Patterson Companies — Tailwind config (v3-style / JS)
 * -------------------------------------------------------------
 * Prefer integrations/tailwind.css (the CSS-first v4 theme) when you can.
 * Use THIS file if you are on Tailwind v3, or on v4 but loading a JS config
 * with `@config "./tailwind.config.js";`.
 *
 * All values mirror tokens/*.css and theme.json. Spacing is intentionally
 * left as Tailwind's default (0.25rem base = Patterson's 4px grid).
 *
 *   // tailwind.config.js
 *   import patterson from '@patterson/design-system/integrations/tailwind.config.js';
 *   export default { presets: [patterson], content: ['./src/**\/*.{html,js,jsx,ts,tsx}'] };
 */
const navy = '#003767';
const sky = '#00A8E1';

/** @type {import('tailwindcss').Config} */
let __ds_default_integrations_tailwind_config_14spesr;
try {
  __ds_default_integrations_tailwind_config_14spesr = {
    theme: {
      extend: {
        fontFamily: {
          sans: ["proxima-nova", "Figtree", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
          display: ["proxima-nova", "Figtree", "system-ui", "sans-serif"],
          mono: ["IBM Plex Mono", "ui-monospace", "SF Mono", "Menlo", "Consolas", "monospace"]
        },
        colors: {
          navy: {
            DEFAULT: navy,
            80: "#335f85",
            60: "#6687a4",
            40: "#99afc2",
            20: "#ccd7e1",
            10: "#e5ebf0"
          },
          sky: {
            DEFAULT: sky,
            80: "#33b9e7",
            60: "#66caed",
            40: "#99dcf3",
            20: "#ccedf9",
            10: "#e5f6fc"
          },
          blue: "#147EC2",
          "blue-light": "#6DCFF6",
          green: "#7BC24D",
          teal: "#00817D",
          purple: "#522E91",
          ink: "#1d1d20",
          gray: {
            brand: "#58585B",
            700: "#46464a",
            600: "#58585B",
            500: "#7c7c80",
            400: "#a3a3a7",
            300: "#c9c9cc",
            200: "#e2e2e4",
            100: "#ECECEC",
            50: "#f6f7f8"
          },
          success: "#00817D",
          "success-bg": "#e5f2f1",
          info: "#147EC2",
          "info-bg": "#e7f1f9",
          warning: "#d98a00",
          "warning-bg": "#fbf1df",
          danger: "#c0392b",
          "danger-bg": "#f8eae8",
          // role aliases
          heading: "#1d1d20",
          body: "#58585B",
          muted: "#7c7c80",
          link: "#147EC2",
          border: "#e2e2e4",
          "border-strong": "#a3a3a7",
          surface: "#FFFFFF",
          "surface-subtle": "#f6f7f8",
          ring: sky
        },
        fontSize: {
          xs: "0.75rem",
          sm: "0.875rem",
          body: "1rem",
          h5: "1.0625rem",
          lead: "1.25rem",
          h4: "1.25rem",
          h3: "clamp(1.375rem, 1.15rem + 0.8vw, 1.75rem)",
          h2: "clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)",
          h1: "clamp(2.25rem, 1.5rem + 2.6vw, 3.25rem)",
          display: "clamp(2.75rem, 1.6rem + 4.2vw, 4.5rem)",
          stat: "clamp(2.5rem, 1.4rem + 4vw, 4rem)"
        },
        fontWeight: {
          light: "300",
          medium: "500",
          semibold: "600",
          bold: "700",
          extra: "800",
          black: "900"
        },
        lineHeight: {
          tight: "1.05",
          snug: "1.2",
          heading: "1.15",
          body: "1.6",
          relaxed: "1.75"
        },
        letterSpacing: {
          tight: "-0.02em",
          snug: "-0.01em",
          wide: "0.04em",
          caps: "0.08em"
        },
        borderRadius: {
          xs: "2px",
          sm: "4px",
          md: "6px",
          lg: "10px",
          xl: "16px",
          "2xl": "24px",
          pill: "999px"
        },
        boxShadow: {
          xs: "0 1px 2px rgba(0, 55, 103, 0.06)",
          sm: "0 1px 3px rgba(0, 55, 103, 0.08), 0 1px 2px rgba(0, 55, 103, 0.06)",
          md: "0 4px 12px rgba(0, 55, 103, 0.10), 0 2px 4px rgba(0, 55, 103, 0.06)",
          lg: "0 12px 28px rgba(0, 55, 103, 0.12), 0 4px 10px rgba(0, 55, 103, 0.07)",
          xl: "0 24px 48px rgba(0, 55, 103, 0.16)"
        },
        maxWidth: {
          container: "1240px",
          text: "720px"
        },
        transitionTimingFunction: {
          standard: "cubic-bezier(0.2, 0, 0.2, 1)",
          out: "cubic-bezier(0.16, 1, 0.3, 1)"
        },
        transitionDuration: {
          fast: "120ms",
          base: "200ms",
          slow: "320ms"
        }
      }
    }
  };
} catch {}
Object.assign(__ds_scope, { __ds_default_integrations_tailwind_config_14spesr });
})(); } catch (e) { __ds_ns.__errors.push({ path: "integrations/tailwind.config.js", error: String((e && e.message) || e) }); }

// integrations/theme-ui.js
try { (() => {
/**
 * Patterson Companies — Theme UI theme
 * -------------------------------------------------------------
 * The canonical theme, shaped to the Theme UI spec:
 *   https://theme-ui.com/theme-spec  ·  https://theme-ui.com/theming
 *
 * Single source of truth is ../theme.json (which mirrors tokens/*.css).
 * This module imports it, drops the documentation-only `$` keys, and
 * exports a ready-to-use Theme UI theme — variants included.
 *
 * Usage (React):
 *   import { ThemeUIProvider } from 'theme-ui';
 *   import theme from '@patterson/design-system/integrations/theme-ui.js';
 *   <ThemeUIProvider theme={theme}>{app}</ThemeUIProvider>
 *
 * Then compose with the sx prop and variants, e.g.
 *   <button sx={{ variant: 'buttons.primary', px: 5, height: 'controlMd' }}>Shop</button>
 *   <h1 sx={{ variant: 'text.display' }}>Trusted Expertise.</h1>
 *   <div sx={{ variant: 'cards.interactive' }}>…</div>
 *
 * If your bundler does not support JSON import assertions, replace the
 * import below with a copy of theme.json's contents as a JS object literal.
 */

const {
  $schema,
  $meta,
  ...theme
} = raw;

/** Theme UI colours use `modes` for alternate palettes. Patterson ships a
 *  single light palette today; a navy "on-dark" surface is expressed through
 *  the `buttons.onDark` / `text.eyebrow` variants rather than a full mode. */
const meta = $meta;
const pattersonTheme = theme;
Object.assign(__ds_scope, { meta, pattersonTheme, theme, __ds_default_integrations_theme_ui_en7bgp: theme });
})(); } catch (e) { __ds_ns.__errors.push({ path: "integrations/theme-ui.js", error: String((e && e.message) || e) }); }

// integrations/uno.config.js
try { (() => {
/**
 * Patterson Companies — UnoCSS config
 * -------------------------------------------------------------
 * Import into your uno.config.js (or use as a preset). Uses presetWind4
 * (Tailwind-v4-compatible utilities) plus Patterson theme values and a set
 * of brand shortcuts that reproduce the component recipes as utilities.
 *
 *   import { defineConfig, presetWind4, presetIcons } from 'unocss';
 *   import { pattersonPreset } from '@patterson/design-system/integrations/uno.config.js';
 *
 *   export default defineConfig({
 *     presets: [presetWind4(), presetIcons({ scale: 1.1 }), pattersonPreset()],
 *   });
 *
 * Then: <button class="btn btn-primary">Shop</button>
 *       <div class="pat-card">…</div>
 *       <p class="eyebrow">Since 1877</p>
 *       <span class="stat">98%</span>
 *
 * This module intentionally does NOT import from 'unocss' itself — it is pure
 * theme data, so it can be consumed anywhere without a build step. You supply
 * defineConfig + presets in your own uno.config.js as shown above.
 */
const theme = {
  colors: {
    navy: {
      DEFAULT: '#003767',
      80: '#335f85',
      60: '#6687a4',
      40: '#99afc2',
      20: '#ccd7e1',
      10: '#e5ebf0'
    },
    sky: {
      DEFAULT: '#00A8E1',
      80: '#33b9e7',
      60: '#66caed',
      40: '#99dcf3',
      20: '#ccedf9',
      10: '#e5f6fc'
    },
    blue: '#147EC2',
    bluelight: '#6DCFF6',
    green: '#7BC24D',
    teal: '#00817D',
    purple: '#522E91',
    ink: '#1d1d20',
    gray: {
      brand: '#58585B',
      700: '#46464a',
      600: '#58585B',
      500: '#7c7c80',
      400: '#a3a3a7',
      300: '#c9c9cc',
      200: '#e2e2e4',
      100: '#ECECEC',
      50: '#f6f7f8'
    },
    success: '#00817D',
    info: '#147EC2',
    warning: '#d98a00',
    danger: '#c0392b',
    heading: '#1d1d20',
    body: '#58585B',
    muted: '#7c7c80',
    link: '#147EC2',
    border: '#e2e2e4',
    surface: '#FFFFFF',
    ring: '#00A8E1'
  },
  fontFamily: {
    sans: "'proxima-nova','Figtree',system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
    display: "'proxima-nova','Figtree',system-ui,sans-serif",
    mono: "'IBM Plex Mono',ui-monospace,'SF Mono',Menlo,Consolas,monospace"
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    body: '1rem',
    h5: '1.0625rem',
    lead: '1.25rem',
    h4: '1.25rem',
    h3: 'clamp(1.375rem, 1.15rem + 0.8vw, 1.75rem)',
    h2: 'clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)',
    h1: 'clamp(2.25rem, 1.5rem + 2.6vw, 3.25rem)',
    display: 'clamp(2.75rem, 1.6rem + 4.2vw, 4.5rem)',
    stat: 'clamp(2.5rem, 1.4rem + 4vw, 4rem)'
  },
  fontWeight: {
    light: '300',
    medium: '500',
    semibold: '600',
    bold: '700',
    extra: '800',
    black: '900'
  },
  lineHeight: {
    tight: '1.05',
    snug: '1.2',
    heading: '1.15',
    body: '1.6',
    relaxed: '1.75'
  },
  letterSpacing: {
    tight: '-0.02em',
    snug: '-0.01em',
    wide: '0.04em',
    caps: '0.08em'
  },
  borderRadius: {
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '10px',
    xl: '16px',
    '2xl': '24px',
    pill: '999px'
  },
  boxShadow: {
    xs: '0 1px 2px rgba(0,55,103,0.06)',
    sm: '0 1px 3px rgba(0,55,103,0.08), 0 1px 2px rgba(0,55,103,0.06)',
    md: '0 4px 12px rgba(0,55,103,0.10), 0 2px 4px rgba(0,55,103,0.06)',
    lg: '0 12px 28px rgba(0,55,103,0.12), 0 4px 10px rgba(0,55,103,0.07)',
    xl: '0 24px 48px rgba(0,55,103,0.16)',
    focus: '0 0 0 3px rgba(0,168,225,0.45)'
  },
  maxWidth: {
    container: '1240px',
    text: '720px'
  },
  easing: {
    standard: 'cubic-bezier(0.2,0,0.2,1)',
    out: 'cubic-bezier(0.16,1,0.3,1)'
  }
};

/* Component recipes as shortcuts — reproduce the .jsx primitives' looks. */
const shortcutsMap = {
  'eyebrow': 'text-xs font-bold tracking-caps uppercase text-sky',
  'stat': 'font-display text-stat font-bold leading-tight tracking-tight text-sky',
  'pat-container': 'w-full max-w-container mx-auto px-6',
  'pat-card': 'bg-surface border border-border rounded-lg shadow-sm p-6',
  'pat-card-interactive': 'pat-card transition-all duration-200 ease-standard hover:-translate-y-[3px] hover:shadow-lg',
  'btn': 'inline-flex items-center justify-center gap-2 h-11 px-6 rounded-pill font-sans font-semibold leading-none cursor-pointer transition-colors duration-[120ms] ease-standard border-2',
  'btn-primary': 'btn bg-navy text-white border-navy hover:bg-sky hover:border-sky',
  'btn-sky': 'btn bg-sky text-white border-sky hover:bg-navy hover:border-navy',
  'btn-outline': 'btn bg-transparent text-navy border-navy hover:bg-navy hover:text-white',
  'btn-ghost': 'btn bg-transparent text-navy border-transparent hover:bg-navy-10',
  'btn-on-dark': 'btn bg-white text-navy border-white hover:bg-sky hover:text-white hover:border-sky',
  'input': 'w-full h-11 px-3 rounded-md border border-gray-300 bg-surface text-body font-sans focus-visible:(outline-none border-sky shadow-focus)',
  'badge': 'inline-flex items-center gap-1 px-3 py-1 rounded-pill text-xs font-semibold'
};
const shortcuts = shortcutsMap;

/** UnoCSS preset carrying the Patterson theme + brand shortcuts. */
function pattersonPreset() {
  return {
    name: 'patterson',
    theme,
    shortcuts: shortcutsMap
  };
}
Object.assign(__ds_scope, { shortcuts, pattersonPreset, __ds_default_integrations_uno_config_136e03l: pattersonPreset });
})(); } catch (e) { __ds_ns.__errors.push({ path: "integrations/uno.config.js", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/Footer.jsx
try { (() => {
/* Footer: visit-our-sites, connect, contact, brand-promise lockup, legal. */
function Footer() {
  const {
    IconPin,
    IconExternal
  } = window;
  const sites = ['Patterson Dental', 'Patterson Veterinary', 'Animal Health International', 'Kane Veterinary Supplies', 'NVS Group', 'Patterson Foundation', 'Investor Relations'];
  const legal = ['Home', 'Terms', 'Privacy', 'Cookies Policy', 'Site Map', 'ACA Notice', 'Careers'];
  const linkStyle = {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 'var(--fs-sm)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Visit our websites"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 22px',
      marginTop: 14,
      maxWidth: 460
    }
  }, sites.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle,
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'
  }, s, /*#__PURE__*/React.createElement(IconExternal, {
    size: 12,
    stroke: 2.2
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Connect with us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle
  }, "Facebook"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle
  }, "YouTube"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Contact us"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconPin, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "1031 Mendota Heights Road"), /*#__PURE__*/React.createElement("br", null), "Saint Paul, MN 55120")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, "1.800.328.5536", /*#__PURE__*/React.createElement("br", null), "info@pattersoncompanies.com")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      paddingTop: 20,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 18px'
    }
  }, legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 'var(--fs-xs)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "\xA9 2026 Patterson Companies, Inc. All rights reserved."))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/Header.jsx
try { (() => {
/* Sticky brand header: product-switch bar + main nav. */
function Header({
  route,
  onNavigate
}) {
  const {
    IconSearch,
    IconMenu,
    IconExternal
  } = window;
  const nav = ['Our Company', 'What We Do', 'How We Do It', 'Community Strong', 'Join Us', 'Newsroom'];
  const products = ['Patterson Dental', 'Patterson Veterinary', 'Animal Health International', 'Patterson Logistics'];
  const routeOf = label => label.toLowerCase().replace(/\s+/g, '-');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '26px',
      height: 40,
      alignItems: 'center'
    }
  }, products.map(p => /*#__PURE__*/React.createElement("a", {
    key: p,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
  }, p, /*#__PURE__*/React.createElement(IconExternal, {
    size: 13,
    stroke: 2.2
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 76
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--pat-navy)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/patterson-logo-navy.svg",
    alt: "Patterson",
    style: {
      height: 26,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, nav.map(label => {
    const r = routeOf(label);
    const active = route === r;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(r);
      },
      style: {
        fontSize: 'var(--fs-sm)',
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--pat-navy)' : 'var(--text-body)',
        padding: '8px 12px',
        borderRadius: 'var(--radius-sm)',
        borderBottom: `2px solid ${active ? 'var(--pat-sky)' : 'transparent'}`
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--pat-navy)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-body)';
      }
    }, label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: 'var(--border-default)',
      margin: '0 8px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Search",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--pat-navy)',
      display: 'flex',
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(IconSearch, {
    size: 20
  })))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/HomeScreen.jsx
try { (() => {
/* Home: hero, four-pillar cards, We-Are-Patterson stats, capabilities, news, CTA. */
function HomeScreen({
  onNavigate
}) {
  const DS = window.PattersonCompaniesDesignSystem_3534f9;
  const {
    Button,
    Card,
    Stat,
    Tabs,
    Badge
  } = DS;
  const {
    IconArrow,
    IconTooth,
    IconPaw,
    IconTruck,
    IconLeaf
  } = window;
  const [cap, setCap] = React.useState('Service');
  const pillars = [{
    icon: IconTooth,
    color: 'var(--pat-sky)',
    title: 'Dental',
    body: 'Across North America, we supply dentists with everyday essentials and software to run their business.'
  }, {
    icon: IconPaw,
    color: 'var(--pat-teal)',
    title: 'Animal Health',
    body: 'Internationally, we supply veterinarians and producers with the essentials and software to run their operations.'
  }, {
    icon: IconTruck,
    color: 'var(--pat-navy)',
    title: 'Logistics',
    body: 'We reach 98% of customers with 1-to-2-day shipping from 60 state-of-the-art fulfillment centers.'
  }, {
    icon: IconLeaf,
    color: 'var(--pat-green)',
    title: 'Sustainability',
    body: 'Solar-powered fulfillment centers fuel our delivery system and minimize our footprint.'
  }];
  const capabilities = {
    Service: 'Generations of quality customer service define our business operations and our personal interactions. We are an indispensable partner — not just a distributor.',
    Logistics: 'We reach 98% of our customers with 1-to-2-day shipping from 60 state-of-the-art fulfillment centers strategically located internationally.',
    Products: 'From everyday essentials to advanced technology and practice-management software, we provide everything practices need to run productively.'
  };
  const news = [{
    tag: 'Leadership',
    date: 'Jan 20, 2026',
    title: 'Patterson announces Senior Vice President of Dental Software'
  }, {
    tag: 'Corporate',
    date: 'Jan 12, 2026',
    title: 'Patterson Companies completes acquisition by Patient Square Capital'
  }, {
    tag: 'Veterinary',
    date: 'Dec 18, 2025',
    title: 'Patterson Veterinary and dvmGRO join forces to support independent practices'
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 120% at 85% 10%, rgba(0,168,225,0.35), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      position: 'relative',
      paddingTop: 'var(--space-11)',
      paddingBottom: 'var(--space-11)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Trusted Expertise \xB7 Unrivaled Support"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-display)',
      margin: '14px 0 18px',
      maxWidth: '14ch',
      lineHeight: 1.04
    }
  }, "We strengthen the people who keep us and our animals ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pat-sky)'
    }
  }, "healthy"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 620
    }
  }, "Bold solutions and a personal touch for the oral and animal health industries \u2014 supporting practices and operations since 1877."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sky",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 18
    }),
    onClick: () => onNavigate('what-we-do')
  }, "What we do"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => onNavigate('our-company')
  }, "Our company")))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, pillars.map(p => {
    const I = p.icon;
    return /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      interactive: true,
      accent: "sky",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--pat-navy-10)',
        color: p.color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-h4)'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-sm)',
        flex: 1
      }
    }, p.body), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('what-we-do');
      },
      style: {
        fontWeight: 600,
        fontSize: 'var(--fs-sm)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, "Learn more ", /*#__PURE__*/React.createElement(IconArrow, {
      size: 15
    })));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow"
  }, "We are Patterson"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 14px'
    }
  }, "Much more than a distributor \u2014 an indispensable partner."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, "Patterson strengthens the oral and animal health markets in North America and the United Kingdom. From small private practices to large group networks and production operations, we guide our customers with bold solutions and a personal touch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "86M",
    label: "U.S. households have pets",
    tone: "sky"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "90%",
    label: "of adults value keeping their mouth healthy",
    tone: "navy"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "250M",
    label: "tons of protein needed by 2050",
    tone: "teal"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '5 / 6',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(160deg, var(--pat-navy), var(--pat-blue))',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.92)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 700,
      color: '#fff'
    }
  }, "Trusted Expertise.", /*#__PURE__*/React.createElement("br", null), "Unrivaled Support."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      marginTop: 10,
      color: 'rgba(255,255,255,0.7)',
      fontFamily: 'var(--font-mono)'
    }
  }, "[ brand photography placeholder ]")))))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginInline: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 22px'
    }
  }, "We deliver every day across three capabilities")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Service', 'Logistics', 'Products'],
    value: cap,
    onChange: setCap,
    style: {
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      textAlign: 'center',
      marginTop: 'var(--space-6)',
      color: 'var(--text-body)'
    }
  }, capabilities[cap]))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "In the news"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => onNavigate('newsroom')
  }, "More content")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, news.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    interactive: true,
    onClick: () => onNavigate('newsroom'),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sky"
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, n.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h4)',
      lineHeight: 1.25
    }
  }, n.title), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('newsroom');
    },
    style: {
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'auto'
    }
  }, "Read more ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 15
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-sky)',
      color: 'var(--pat-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 6px',
      color: 'var(--pat-navy)'
    }
  }, "Work with us"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--pat-navy)',
      opacity: 0.85,
      maxWidth: 560
    }
  }, "Together, we are transforming the way care is delivered to people and animals.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 18
    }),
    onClick: () => onNavigate('join-us')
  }, "Join us"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/NewsroomScreen.jsx
try { (() => {
/* Newsroom: filterable list of press releases. */
function NewsroomScreen() {
  const DS = window.PattersonCompaniesDesignSystem_3534f9;
  const {
    Card,
    Badge,
    Tabs,
    Button
  } = DS;
  const {
    IconArrow
  } = window;
  const [filter, setFilter] = React.useState('All');
  const items = [{
    tag: 'Leadership',
    date: 'Jan 20, 2026',
    title: 'Patterson announces Senior Vice President of Dental Software'
  }, {
    tag: 'Leadership',
    date: 'Jan 14, 2026',
    title: 'Patterson announces Dental President'
  }, {
    tag: 'Corporate',
    date: 'Jan 12, 2026',
    title: 'Patterson Companies completes acquisition by Patient Square Capital'
  }, {
    tag: 'Corporate',
    date: 'Dec 20, 2025',
    title: 'Shareholders approve acquisition by Patient Square Capital for $31.35 per share in cash'
  }, {
    tag: 'Veterinary',
    date: 'Dec 18, 2025',
    title: 'Patterson Veterinary and dvmGRO join forces to support independently owned practices'
  }, {
    tag: 'Dental',
    date: 'Dec 02, 2025',
    title: 'Patterson Dental extends strategic relationship with PDS Health'
  }, {
    tag: 'Dental',
    date: 'Nov 19, 2025',
    title: 'Patterson Dental announces Eaglesoft and Pearl Second Opinion integration'
  }, {
    tag: 'Corporate',
    date: 'Nov 05, 2025',
    title: 'Patterson Companies releases 2024 Corporate Responsibility Report'
  }, {
    tag: 'Veterinary',
    date: 'Oct 22, 2025',
    title: 'Patterson Veterinary puts customers first by connecting with new IT service'
  }];
  const tones = {
    Leadership: 'purple',
    Corporate: 'navy',
    Veterinary: 'teal',
    Dental: 'sky'
  };
  const filters = ['All', 'Corporate', 'Dental', 'Veterinary', 'Leadership'];
  const shown = filter === 'All' ? items : items.filter(i => i.tag === filter);
  const [feature, ...rest] = shown;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Newsroom"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '12px 0 0'
    }
  }, "In the news"))), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: filters,
    value: filter,
    onChange: setFilter
  })), feature && /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 0,
      overflow: 'hidden',
      padding: 0,
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(150deg, var(--pat-navy), var(--pat-blue))',
      minHeight: 240,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "[ featured image placeholder ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tones[feature.tag]
  }, feature.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, feature.date)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h3)'
    }
  }, feature.title), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Read the release ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, rest.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tones[n.tag]
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, n.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h5)',
      lineHeight: 1.3,
      flex: 1
    }
  }, n.title), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Read more ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 15
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Load more news"))));
}
window.NewsroomScreen = NewsroomScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/NewsroomScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/WhatWeDoScreen.jsx
try { (() => {
/* What We Do: page header + three capability sections. */
function WhatWeDoScreen({
  onNavigate
}) {
  const DS = window.PattersonCompaniesDesignSystem_3534f9;
  const {
    Button,
    Card,
    Stat,
    Badge
  } = DS;
  const {
    IconArrow,
    IconUsers,
    IconTruck,
    IconTooth
  } = window;
  const sections = [{
    id: 'service',
    eyebrow: 'Service',
    icon: IconUsers,
    title: 'A personal touch, backed by generations of expertise',
    body: 'Generations of quality customer service define our business operations and our personal interactions. Our representatives know their customers and their markets — guiding practices of every size as an indispensable partner.',
    points: ['Dedicated territory representatives', 'Practice-management software & training', 'Equipment service & technology support']
  }, {
    id: 'logistics',
    eyebrow: 'Logistics',
    icon: IconTruck,
    title: 'We reach 98% of customers in 1–2 days',
    body: 'From 60 state-of-the-art fulfillment centers located strategically across North America and the United Kingdom, we deliver the everyday essentials practices depend on — quickly, reliably and sustainably.',
    points: ['60 fulfillment centers', 'Solar-powered facilities', '1-to-2-day standard shipping']
  }, {
    id: 'products',
    eyebrow: 'Products',
    icon: IconTooth,
    title: 'Everything a practice needs to run productively',
    body: 'From consumable essentials to advanced equipment and software, we provide the technology, products, expertise and solutions needed to deliver exceptional care and drive profitability.',
    points: ['Everyday consumables & essentials', 'Diagnostic & imaging technology', 'Business & clinical software']
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '12px 0 12px',
      maxWidth: '18ch'
    }
  }, "Service, logistics and products \u2014 delivered every day."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 640
    }
  }, "We are an international distributor of products, technologies, services and business solutions for the animal and oral health industries."))), sections.map((s, i) => {
    const I = s.icon;
    const reversed = i % 2 === 1;
    return /*#__PURE__*/React.createElement("section", {
      key: s.id,
      style: {
        background: reversed ? 'var(--surface-subtle)' : '#fff',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pat-container",
      style: {
        paddingTop: 'var(--space-10)',
        paddingBottom: 'var(--space-10)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-9)',
        alignItems: 'center',
        direction: reversed ? 'rtl' : 'ltr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        direction: 'ltr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--pat-sky-10)',
        color: 'var(--pat-sky)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 26
    })), /*#__PURE__*/React.createElement("span", {
      className: "pat-eyebrow"
    }, s.eyebrow)), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '0 0 14px'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)'
      }
    }, s.body), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: '18px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, s.points.map(pt => /*#__PURE__*/React.createElement("li", {
      key: pt,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 'var(--fs-body)',
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--pat-sky)',
        flex: 'none'
      }
    }), pt)))), /*#__PURE__*/React.createElement("div", {
      style: {
        direction: 'ltr',
        aspectRatio: '4 / 3',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(150deg, var(--pat-blue), var(--pat-sky))',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-xs)',
        color: 'rgba(255,255,255,0.85)'
      }
    }, "[ ", s.eyebrow.toLowerCase(), " photography placeholder ]"))));
  }), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px'
    }
  }, "Ready to partner with Patterson?"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 18
    }),
    onClick: () => onNavigate('join-us')
  }, "Join us")));
}
window.WhatWeDoScreen = WhatWeDoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/WhatWeDoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-style inline icons (2px rounded stroke), shared across the kit. */
function Icon({
  path,
  size = 22,
  stroke = 2,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), path);
}
const IconArrow = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))
}));
const IconSearch = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))
}));
const IconMenu = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  }))
}));
const IconTooth = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M12 5.5C10.5 4 8.5 3.5 7 4.2 5.2 5 4.5 7 5 9.5c.3 1.5.4 2 .5 3.5.2 2 .3 4.5 1.5 6 .9 1.1 1.8.4 2.2-1 .4-1.3.5-3 1.8-3s1.4 1.7 1.8 3c.4 1.4 1.3 2.1 2.2 1 1.2-1.5 1.3-4 1.5-6 .1-1.5.2-2 .5-3.5.5-2.5-.2-4.5-2-5.3-1.5-.7-3.5-.2-5 1.3Z"
  })
}));
const IconPaw = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "6.5",
    cy: "10",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "6.5",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "6.5",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "10",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15.5c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5c0 1.7-1.3 3-3 3.2-.7.1-1.3.1-2 0-1.7-.2-3-1.5-3-3.2Z"
  }))
}));
const IconTruck = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 7h-9a1 1 0 0 0-1 1v8h10V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11h4l3 3v2h-7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "1.6"
  }))
}));
const IconLeaf = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 4 13c0-4 3-8 8-9 1 5-1 9-5 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c3-3 6-4 9-4"
  }))
}));
const IconHeart = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M19 7.5c-1.5-2-4.5-2-6 .3C11.5 5.5 8.5 5.5 7 7.5c-1.7 2.2-.8 5 1 7l4 3.8 4-3.8c1.8-2 2.7-4.8 1-7Z"
  })
}));
const IconGlobe = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18"
  }))
}));
const IconUsers = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 19c0-3 2.7-5 6-5s6 2 6 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6a3 3 0 0 1 0 5.6M21 19c0-2.3-1.4-4-3.5-4.6"
  }))
}));
const IconExternal = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 5h5v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 5l-8 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"
  }))
}));
const IconPin = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  }))
}));
Object.assign(window, {
  Icon,
  IconArrow,
  IconSearch,
  IconMenu,
  IconTooth,
  IconPaw,
  IconTruck,
  IconLeaf,
  IconHeart,
  IconGlobe,
  IconUsers,
  IconExternal,
  IconPin
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patterson-docs/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================================
   Patterson Docs — VitePress-style shell + MDX-ish renderer
   ============================================================ */
const {
  useState,
  useEffect,
  useMemo,
  useRef,
  Fragment
} = React;

/* ---------- inline markdown: **bold**, `code`, [text](url) ---------- */
function inline(text) {
  if (text == null) return null;
  const nodes = [];
  const re = /(\*\*([^*]+)\*\*)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0,
    m,
    k = 0;
  while (m = re.exec(text)) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[2] != null) nodes.push(/*#__PURE__*/React.createElement("strong", {
      key: k++
    }, m[2]));else if (m[4] != null) nodes.push(/*#__PURE__*/React.createElement("code", {
      key: k++,
      className: "inline-code"
    }, m[4]));else if (m[6] != null) {
      const href = m[7],
        ext = /^https?:/.test(href);
      nodes.push(/*#__PURE__*/React.createElement("a", _extends({
        key: k++,
        href: href
      }, ext ? {
        target: '_blank',
        rel: 'noreferrer'
      } : {}), m[6], ext && /*#__PURE__*/React.createElement(ExtIcon, null)));
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function ExtIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "ext-icon",
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7M17 7H9M17 7v8"
  }));
}
function Arrow({
  dir
}) {
  const d = dir === 'left' ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6';
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}

/* ---------- block renderer ---------- */
const BLOCK_KIND = {
  tip: 'TIP',
  info: 'INFO',
  warning: 'WARNING',
  danger: 'DANGER'
};
function Block({
  b
}) {
  const t = b[0];
  if (t === 'h2') return /*#__PURE__*/React.createElement("h2", {
    id: slug(b[1])
  }, inline(b[1]), /*#__PURE__*/React.createElement("a", {
    className: "header-anchor",
    href: '#' + slug(b[1]),
    "aria-hidden": "true"
  }, "#"));
  if (t === 'h3') return /*#__PURE__*/React.createElement("h3", {
    id: slug(b[1])
  }, inline(b[1]));
  if (t === 'p') return /*#__PURE__*/React.createElement("p", null, inline(b[1]));
  if (t === 'ul') return /*#__PURE__*/React.createElement("ul", null, b[1].map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, inline(x))));
  if (t === 'ol') return /*#__PURE__*/React.createElement("ol", null, b[1].map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, inline(x))));
  if (t === 'compass') return /*#__PURE__*/React.createElement("div", {
    className: "vp-compass"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-compass-badge"
  }, "Di\xE1taxis"), /*#__PURE__*/React.createElement("span", null, inline(b[1])));
  if (BLOCK_KIND[t]) return /*#__PURE__*/React.createElement("div", {
    className: 'custom-block ' + t
  }, /*#__PURE__*/React.createElement("p", {
    className: "custom-block-title"
  }, b[1] || BLOCK_KIND[t]), /*#__PURE__*/React.createElement("p", null, inline(b[2])));
  if (t === 'code') return /*#__PURE__*/React.createElement("div", {
    className: "vp-code"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-code-lang"
  }, b[1]), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, highlight(b[2], b[1]))));
  if (t === 'table') return /*#__PURE__*/React.createElement("div", {
    className: "vp-table-wrap"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, b[1].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, inline(h))))), /*#__PURE__*/React.createElement("tbody", null, b[2].map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, row.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j
  }, inline(c))))))));
  if (t === 'links') return /*#__PURE__*/React.createElement(LinkList, {
    heading: b[1],
    note: b[2],
    items: b[3]
  });
  return null;
}

/* tiny token highlighter for code blocks (comments + strings dimmed/colored) */
function highlight(src, lang) {
  const lines = src.split('\n');
  return lines.map((ln, i) => {
    let cls = null;
    const trimmed = ln.trimStart();
    if (/^(#|\/\/|--)/.test(trimmed)) cls = 'tok-comment';else if (/^>/.test(trimmed)) cls = 'tok-prompt';
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: cls || undefined
    }, ln, i < lines.length - 1 ? '\n' : '');
  });
}
function LinkList({
  heading,
  note,
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vp-linklist"
  }, heading && /*#__PURE__*/React.createElement("p", {
    className: "vp-linklist-h"
  }, heading), note && /*#__PURE__*/React.createElement("p", {
    className: "vp-linklist-note"
  }, inline(note)), /*#__PURE__*/React.createElement("div", {
    className: "vp-linkcards"
  }, items.map((it, i) => {
    const [label, href, desc] = it;
    const ext = /^https?:/.test(href);
    return /*#__PURE__*/React.createElement("a", _extends({
      key: i,
      className: "vp-linkcard",
      href: href
    }, ext ? {
      target: '_blank',
      rel: 'noreferrer'
    } : {}), /*#__PURE__*/React.createElement("span", {
      className: "vp-linkcard-t"
    }, label, ext && /*#__PURE__*/React.createElement(ExtIcon, null)), desc && /*#__PURE__*/React.createElement("span", {
      className: "vp-linkcard-d"
    }, desc), ext && /*#__PURE__*/React.createElement("span", {
      className: "vp-linkcard-host"
    }, hostOf(href)));
  })));
}
const hostOf = u => {
  try {
    return new URL(u).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

/* ---------- collection page ---------- */
function CollectionView({
  id
}) {
  const c = window.DOCS_COLLECTIONS[id];
  if (!c) return null;
  return /*#__PURE__*/React.createElement(Fragment, null, c.note && /*#__PURE__*/React.createElement("div", {
    className: "custom-block info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "custom-block-title"
  }, "IMPORTED"), /*#__PURE__*/React.createElement("p", null, inline(c.note))), c.groups.map((g, i) => /*#__PURE__*/React.createElement(LinkList, {
    key: i,
    heading: g.heading,
    note: null,
    items: g.items
  })), /*#__PURE__*/React.createElement("p", {
    className: "vp-source"
  }, "Source: ", /*#__PURE__*/React.createElement("a", {
    href: c.source,
    target: "_blank",
    rel: "noreferrer"
  }, hostOf(c.source), /*#__PURE__*/React.createElement(ExtIcon, null))));
}

/* ---------- flat page order per section (for prev/next) ---------- */
function sectionOrder(section) {
  const sb = window.DOCS_SIDEBARS[section] || [];
  const out = [];
  sb.forEach(group => (group.items || []).forEach(it => {
    if (it.id) out.push(it.id);
  }));
  return out;
}

/* ---------- doc page ---------- */
function DocPage({
  id
}) {
  const page = window.DOCS_PAGES[id];
  const section = window.DOCS_PAGE_SECTION[id];
  const toc = useMemo(() => {
    if (!page || !page.blocks) return [];
    return page.blocks.filter(b => b[0] === 'h2').map(b => ({
      text: b[1],
      id: slug(b[1])
    }));
  }, [id]);
  const order = section ? sectionOrder(section) : [];
  const idx = order.indexOf(id);
  const prev = idx > 0 ? order[idx - 1] : null;
  const next = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;
  useEffect(() => {
    document.querySelector('.vp-doc-wrap').scrollTop = 0;
    window.scrollTo(0, 0);
  }, [id]);
  if (!page) return /*#__PURE__*/React.createElement("div", {
    className: "vp-doc"
  }, /*#__PURE__*/React.createElement("h1", null, "Not found"), /*#__PURE__*/React.createElement("p", null, "No page with id ", /*#__PURE__*/React.createElement("code", {
    className: "inline-code"
  }, id), "."));
  return /*#__PURE__*/React.createElement("div", {
    className: "vp-doc-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-doc"
  }, /*#__PURE__*/React.createElement("p", {
    className: "vp-breadcrumb"
  }, page.group), /*#__PURE__*/React.createElement("h1", null, page.title, page.badge && /*#__PURE__*/React.createElement("span", {
    className: "vp-badge"
  }, page.badge)), page.lead && /*#__PURE__*/React.createElement("p", {
    className: "vp-lead"
  }, inline(page.lead)), page.collection ? /*#__PURE__*/React.createElement(CollectionView, {
    id: page.collection
  }) : (page.blocks || []).map((b, i) => /*#__PURE__*/React.createElement(Block, {
    key: i,
    b: b
  })), /*#__PURE__*/React.createElement("div", {
    className: "vp-doc-footer"
  }, prev ? /*#__PURE__*/React.createElement("a", {
    className: "vp-pager prev",
    href: '#/' + prev
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-pager-k"
  }, "Previous"), /*#__PURE__*/React.createElement("span", {
    className: "vp-pager-t"
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "left"
  }), window.DOCS_PAGES[prev].title)) : /*#__PURE__*/React.createElement("span", null), next ? /*#__PURE__*/React.createElement("a", {
    className: "vp-pager next",
    href: '#/' + next
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-pager-k"
  }, "Next"), /*#__PURE__*/React.createElement("span", {
    className: "vp-pager-t"
  }, window.DOCS_PAGES[next].title, /*#__PURE__*/React.createElement(Arrow, null))) : /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("aside", {
    className: "vp-aside"
  }, toc.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "vp-aside-inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "vp-aside-title"
  }, "On this page"), /*#__PURE__*/React.createElement("ul", null, toc.map(h => /*#__PURE__*/React.createElement("li", {
    key: h.id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + h.id
  }, h.text)))))));
}

/* ---------- home ---------- */
function Home() {
  const features = [['Tutorials', 'Learning-oriented lessons that take a newcomer by the hand — Claude Code quickstarts and the Copilot CLI course.', '#/tutorials', 'M12 6.5C10.5 5 8 4.5 5.5 4.5V17c2.5 0 5 .5 6.5 2M12 6.5C13.5 5 16 4.5 18.5 4.5V17c-2.5 0-5 .5-6.5 2M12 6.5V19'], ['How-to guides', 'Task-oriented recipes for real goals — install in VS Code, run in a dev container, wire up hooks and MCP.', '#/how-to', 'M4 7h11M4 12h16M4 17h9M19 15l3 3-3 3'], ['Reference', 'Information-oriented descriptions — plugin schemas, the prompt library, SDK and API specs, Copilot catalogs.', '#/reference', 'M5 4h11l3 3v13H5zM9 4v4h7'], ['Explanation', 'Understanding-oriented discussion — how Claude Code works, the agent loop, why MCP Apps exist.', '#/explanation', 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 8v.5M11 12h1v4']];
  return /*#__PURE__*/React.createElement("div", {
    className: "vp-home"
  }, /*#__PURE__*/React.createElement("section", {
    className: "vp-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-hero-text"
  }, /*#__PURE__*/React.createElement("p", {
    className: "vp-hero-eyebrow"
  }, "Patterson \xB7 Developer Documentation"), /*#__PURE__*/React.createElement("h1", {
    className: "vp-hero-title"
  }, "Patterson ", /*#__PURE__*/React.createElement("span", {
    className: "brand"
  }, "Docs")), /*#__PURE__*/React.createElement("p", {
    className: "vp-hero-tagline"
  }, "A documentation system built on VitePress + MDX and organised with Di\xE1taxis \u2014 four modes, one clear map for every reader."), /*#__PURE__*/React.createElement("div", {
    className: "vp-hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "vp-btn brand",
    href: "#/tutorials"
  }, "Get started", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
    className: "vp-btn alt",
    href: "#/foundations"
  }, "Why Di\xE1taxis?"), /*#__PURE__*/React.createElement("a", {
    className: "vp-btn alt",
    href: "#/reference"
  }, "Reference"))), /*#__PURE__*/React.createElement("div", {
    className: "vp-hero-figure",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-compass-graphic"
  }, /*#__PURE__*/React.createElement("div", {
    className: "q q1"
  }, /*#__PURE__*/React.createElement("span", null, "Tutorials"), /*#__PURE__*/React.createElement("em", null, "learning")), /*#__PURE__*/React.createElement("div", {
    className: "q q2"
  }, /*#__PURE__*/React.createElement("span", null, "How-to"), /*#__PURE__*/React.createElement("em", null, "goals")), /*#__PURE__*/React.createElement("div", {
    className: "q q3"
  }, /*#__PURE__*/React.createElement("span", null, "Explanation"), /*#__PURE__*/React.createElement("em", null, "understanding")), /*#__PURE__*/React.createElement("div", {
    className: "q q4"
  }, /*#__PURE__*/React.createElement("span", null, "Reference"), /*#__PURE__*/React.createElement("em", null, "information")), /*#__PURE__*/React.createElement("div", {
    className: "axis ax-x"
  }, /*#__PURE__*/React.createElement("span", null, "action"), /*#__PURE__*/React.createElement("span", null, "cognition")), /*#__PURE__*/React.createElement("div", {
    className: "axis ax-y"
  }, /*#__PURE__*/React.createElement("span", null, "study"), /*#__PURE__*/React.createElement("span", null, "work"))))), /*#__PURE__*/React.createElement("section", {
    className: "vp-features"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "vp-feature",
    href: f[2]
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-feature-ic"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: f[3]
  }))), /*#__PURE__*/React.createElement("span", {
    className: "vp-feature-t"
  }, f[0]), /*#__PURE__*/React.createElement("span", {
    className: "vp-feature-d"
  }, f[1])))), /*#__PURE__*/React.createElement("section", {
    className: "vp-home-note"
  }, /*#__PURE__*/React.createElement("p", null, "Content imported from ", /*#__PURE__*/React.createElement("a", {
    href: "https://code.claude.com/docs/llms.txt",
    target: "_blank",
    rel: "noreferrer"
  }, "Claude Code docs"), ", ", /*#__PURE__*/React.createElement("a", {
    href: "https://awesome-copilot.github.com/llms.txt",
    target: "_blank",
    rel: "noreferrer"
  }, "Awesome Copilot"), ", ", /*#__PURE__*/React.createElement("a", {
    href: "https://agentskills.io/llms.txt",
    target: "_blank",
    rel: "noreferrer"
  }, "Agent Skills"), ", ", /*#__PURE__*/React.createElement("a", {
    href: "https://docs.github.com/llms.txt",
    target: "_blank",
    rel: "noreferrer"
  }, "GitHub Docs"), " and ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/modelcontextprotocol/ext-apps",
    target: "_blank",
    rel: "noreferrer"
  }, "MCP ext-apps"), ".")));
}

/* ---------- sidebar ---------- */
function Sidebar({
  section,
  current,
  onNav
}) {
  const groups = window.DOCS_SIDEBARS[section] || [];
  return /*#__PURE__*/React.createElement("nav", {
    className: "vp-sidebar"
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    className: "vp-sb-group",
    key: i
  }, /*#__PURE__*/React.createElement("p", {
    className: "vp-sb-title"
  }, g.text), /*#__PURE__*/React.createElement("ul", null, (g.items || []).map((it, j) => {
    const ext = !!it.href;
    const active = it.id && it.id === current;
    return /*#__PURE__*/React.createElement("li", {
      key: j
    }, /*#__PURE__*/React.createElement("a", _extends({
      className: 'vp-sb-link' + (active ? ' active' : ''),
      href: ext ? it.href : '#/' + it.id
    }, ext ? {
      target: '_blank',
      rel: 'noreferrer'
    } : {}), it.text, it.badge && /*#__PURE__*/React.createElement("span", {
      className: "vp-sb-badge"
    }, it.badge), ext && /*#__PURE__*/React.createElement(ExtIcon, null)));
  })))));
}

/* ---------- search index + modal ---------- */
function buildIndex() {
  const out = [];
  Object.keys(window.DOCS_PAGES).forEach(id => {
    const p = window.DOCS_PAGES[id];
    out.push({
      title: p.title,
      sub: p.group,
      to: '#/' + id,
      ext: false
    });
  });
  Object.keys(window.DOCS_SIDEBARS).forEach(sec => {
    window.DOCS_SIDEBARS[sec].forEach(g => (g.items || []).forEach(it => {
      if (it.href) out.push({
        title: it.text,
        sub: g.text,
        to: it.href,
        ext: true
      });
    }));
  });
  Object.keys(window.DOCS_COLLECTIONS).forEach(cid => {
    window.DOCS_COLLECTIONS[cid].groups.forEach(g => g.items.forEach(it => {
      out.push({
        title: it[0],
        sub: g.heading,
        to: it[1],
        ext: /^https?:/.test(it[1])
      });
    }));
  });
  // de-dupe by title+to
  const seen = new Set();
  return out.filter(x => {
    const k = x.title + x.to;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
function Search({
  open,
  onClose
}) {
  const [q, setQ] = useState('');
  const idx = useMemo(buildIndex, []);
  const inputRef = useRef(null);
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (open) setQ('');
  }, [open]);
  if (!open) return null;
  const ql = q.trim().toLowerCase();
  const results = ql ? idx.filter(x => x.title.toLowerCase().includes(ql) || x.sub.toLowerCase().includes(ql)).slice(0, 40) : [];
  return /*#__PURE__*/React.createElement("div", {
    className: "vp-search-mask",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-search-box",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-search-head"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  })), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search docs, references and imported links\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    className: "vp-kbd",
    onClick: onClose
  }, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "vp-search-results"
  }, ql && results.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "vp-search-empty"
  }, "No results for \u201C", q, "\u201D."), results.map((r, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "vp-search-hit",
    href: r.to,
    target: r.ext ? '_blank' : undefined,
    rel: r.ext ? 'noreferrer' : undefined,
    onClick: () => {
      if (!r.ext) onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-search-hit-t"
  }, r.title, r.ext && /*#__PURE__*/React.createElement(ExtIcon, null)), /*#__PURE__*/React.createElement("span", {
    className: "vp-search-hit-s"
  }, r.sub))), !ql && /*#__PURE__*/React.createElement("p", {
    className: "vp-search-empty"
  }, "Type to search across every page and imported link."))));
}

/* ---------- top nav ---------- */
function TopNav({
  activeSection,
  theme,
  onTheme,
  onSearch,
  onToggleSidebar
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "vp-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-nav-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "vp-hamburger",
    onClick: onToggleSidebar,
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  }))), /*#__PURE__*/React.createElement("a", {
    className: "vp-logo",
    href: "#/"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vp-logo-mark"
  }, "P"), /*#__PURE__*/React.createElement("span", {
    className: "vp-logo-text"
  }, "Patterson ", /*#__PURE__*/React.createElement("b", null, "Docs"))), /*#__PURE__*/React.createElement("nav", {
    className: "vp-nav-links"
  }, window.DOCS_NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.section,
    href: n.to,
    className: 'vp-nav-link' + (n.section === activeSection ? ' active' : '')
  }, n.text))), /*#__PURE__*/React.createElement("div", {
    className: "vp-nav-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "vp-search-btn",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  })), /*#__PURE__*/React.createElement("span", null, "Search"), /*#__PURE__*/React.createElement("span", {
    className: "vp-kbd sm"
  }, "\u2318K")), /*#__PURE__*/React.createElement("a", {
    className: "vp-icon-btn",
    href: "https://github.com/modelcontextprotocol/ext-apps",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.03 10.03 0 0022 12.25C22 6.58 17.52 2 12 2z"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "vp-icon-btn",
    onClick: onTheme,
    "aria-label": "Toggle theme"
  }, theme === 'dark' ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
  }))))));
}

/* ---------- app ---------- */
function useHashRoute() {
  const [hash, setHash] = useState(location.hash || '#/');
  useEffect(() => {
    const on = () => setHash(location.hash || '#/');
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return hash;
}
function App() {
  const hash = useHashRoute();
  const [theme, setTheme] = useState(() => localStorage.getItem('pat-docs-theme') || 'light');
  const [searchOpen, setSearchOpen] = useState(false);
  const [sbOpen, setSbOpen] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pat-docs-theme', theme);
  }, [theme]);
  useEffect(() => {
    const on = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  }, []);
  useEffect(() => {
    setSbOpen(false);
  }, [hash]);

  // route
  const path = hash.replace(/^#\//, '').split('#')[0]; // strip in-page anchor
  const pageId = path === '' ? 'home' : path;
  const isHome = pageId === 'home';
  const section = isHome ? null : window.DOCS_PAGE_SECTION[pageId];
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TopNav, {
    activeSection: section,
    theme: theme,
    onTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'),
    onSearch: () => setSearchOpen(true),
    onToggleSidebar: () => setSbOpen(o => !o)
  }), isHome ? /*#__PURE__*/React.createElement("main", {
    className: "vp-content home"
  }, /*#__PURE__*/React.createElement(Home, null)) : /*#__PURE__*/React.createElement("div", {
    className: 'vp-shell' + (sbOpen ? ' sb-open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-sidebar-wrap"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    section: section,
    current: pageId
  })), /*#__PURE__*/React.createElement("div", {
    className: "vp-sidebar-scrim",
    onClick: () => setSbOpen(false)
  }), /*#__PURE__*/React.createElement("main", {
    className: "vp-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vp-doc-wrap"
  }, /*#__PURE__*/React.createElement(DocPage, {
    id: pageId
  }), /*#__PURE__*/React.createElement("footer", {
    className: "vp-page-foot"
  }, /*#__PURE__*/React.createElement("span", null, "Patterson Companies \xB7 Developer Documentation"), /*#__PURE__*/React.createElement("span", null, "Built with VitePress conventions \xB7 organised by Di\xE1taxis"))))), /*#__PURE__*/React.createElement(Search, {
    open: searchOpen,
    onClose: () => setSearchOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patterson-docs/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patterson-docs/collections.jsx
try { (() => {
/* ============================================================
   Patterson Docs — imported link collections
   Rendered as VitePress-style reference index pages.
   Sources: awesome-copilot.github.com/llms.txt, docs.github.com/llms.txt,
   github.com/modelcontextprotocol/ext-apps, agentskills.io/llms.txt
   ============================================================ */

const RAW = 'https://raw.githubusercontent.com/github/awesome-copilot/main';
window.DOCS_COLLECTIONS = {
  'ref-copilot-agents': {
    source: 'https://awesome-copilot.github.com/llms.txt',
    note: 'Custom GitHub Copilot agents. A representative catalog imported from the Awesome Copilot llms.txt — 150+ agents are published; see the source index for the complete list.',
    groups: [{
      heading: 'Architecture & planning',
      items: [['.NET Self-Learning Architect', RAW + '/agents/dotnet-self-learning-architect.agent.md'], ['API Architect', RAW + '/agents/api-architect.agent.md'], ['Senior Cloud Architect', RAW + '/agents/arch.agent.md'], ['Context Architect', RAW + '/agents/context-architect.agent.md'], ['Plan Mode — Strategic Planning', RAW + '/agents/plan.agent.md'], ['Project Architecture Planner', RAW + '/agents/project-architecture-planner.agent.md'], ['Implementation Plan Generation', RAW + '/agents/implementation-plan.agent.md'], ['Principal Software Engineer', RAW + '/agents/principal-software-engineer.agent.md']]
    }, {
      heading: 'Cloud & infrastructure',
      items: [['AWS Cloud Expert', RAW + '/agents/aws-cloud-expert.agent.md'], ['Azure Principal Architect', RAW + '/agents/azure-principal-architect.agent.md'], ['Azure SaaS Architect', RAW + '/agents/azure-saas-architect.agent.md'], ['Bicep Specialist', RAW + '/agents/bicep-implement.agent.md'], ['Terraform Agent', RAW + '/agents/terraform.agent.md'], ['Azure AVM Terraform mode', RAW + '/agents/azure-verified-modules-terraform.agent.md'], ['Platform SRE for Kubernetes', RAW + '/agents/platform-sre-kubernetes.agent.md'], ['Arm Migration Agent', RAW + '/agents/arm-migration.agent.md']]
    }, {
      heading: 'Language experts',
      items: [['C# Expert', RAW + '/agents/CSharpExpert.agent.md'], ['C++ Expert', RAW + '/agents/expert-cpp-software-engineer.agent.md'], ['Expert React Frontend Engineer', RAW + '/agents/expert-react-frontend-engineer.agent.md'], ['Expert Vue.js Frontend Engineer', RAW + '/agents/vuejs-expert.agent.md'], ['Next.js Expert', RAW + '/agents/expert-nextjs-developer.agent.md'], ['Expert Nuxt Developer', RAW + '/agents/nuxt-expert.agent.md'], ['Laravel Expert', RAW + '/agents/laravel-expert-agent.agent.md'], ['Drupal Expert', RAW + '/agents/drupal-expert.agent.md']]
    }, {
      heading: 'MCP server experts',
      items: [['TypeScript MCP Server Expert', RAW + '/agents/typescript-mcp-expert.agent.md'], ['Python MCP Server Expert', RAW + '/agents/python-mcp-expert.agent.md'], ['Go MCP Server Development Expert', RAW + '/agents/go-mcp-expert.agent.md'], ['C# MCP Server Expert', RAW + '/agents/csharp-mcp-expert.agent.md'], ['Rust MCP Expert', RAW + '/agents/rust-mcp-expert.agent.md'], ['Java MCP Expert', RAW + '/agents/java-mcp-expert.agent.md'], ['Kotlin MCP Server Expert', RAW + '/agents/kotlin-mcp-expert.agent.md'], ['Swift MCP Expert', RAW + '/agents/swift-mcp-expert.agent.md']]
    }, {
      heading: 'Quality, testing & security',
      items: [['Accessibility Expert', RAW + '/agents/accessibility.agent.md'], ['Playwright Tester Mode', RAW + '/agents/playwright-tester.agent.md'], ['Quality Playbook', RAW + '/agents/quality-playbook.agent.md'], ['WG Code Sentinel (security)', RAW + '/agents/wg-code-sentinel.agent.md'], ['SAST/SCA Security Analyzer', RAW + '/agents/sast-sca-security-analyzer.agent.md'], ['Debug Mode', RAW + '/agents/debug.agent.md'], ['Critical Thinking Mode', RAW + '/agents/critical-thinking.agent.md'], ['Doublecheck', RAW + '/agents/doublecheck.agent.md']]
    }, {
      heading: 'Docs & product',
      items: [['SE: Tech Writer', RAW + '/agents/se-technical-writer.agent.md'], ['SE: Product Manager', RAW + '/agents/se-product-manager-advisor.agent.md'], ['SE: UX Designer', RAW + '/agents/se-ux-ui-designer.agent.md'], ['Create PRD Chat Mode', RAW + '/agents/prd.agent.md'], ['ADR Generator', RAW + '/agents/adr-generator.agent.md'], ['Project Documenter', RAW + '/agents/project-documenter.agent.md'], ['Mentor mode', RAW + '/agents/mentor.agent.md'], ['Prompt Engineer', RAW + '/agents/prompt-engineer.agent.md']]
    }]
  },
  'ref-copilot-instructions': {
    source: 'https://awesome-copilot.github.com/llms.txt',
    note: 'Coding-standard instruction files applied to specific file patterns. A representative catalog imported from the Awesome Copilot llms.txt; the source index lists the complete set.',
    groups: [{
      heading: 'Languages',
      items: [['C#', RAW + '/instructions/csharp.instructions.md'], ['Go', RAW + '/instructions/go.instructions.md'], ['Rust', RAW + '/instructions/rust.instructions.md'], ['Dart & Flutter', RAW + '/instructions/dart-n-flutter.instructions.md'], ['Ruby on Rails', RAW + '/instructions/ruby-on-rails.instructions.md'], ['PowerShell', RAW + '/instructions/powershell.instructions.md'], ['Shell', RAW + '/instructions/shell.instructions.md'], ['R', RAW + '/instructions/r.instructions.md']]
    }, {
      heading: 'Frameworks',
      items: [['Next.js', RAW + '/instructions/nextjs.instructions.md'], ['Next.js + Tailwind', RAW + '/instructions/nextjs-tailwind.instructions.md'], ['NestJS', RAW + '/instructions/nestjs.instructions.md'], ['Svelte', RAW + '/instructions/svelte.instructions.md'], ['Blazor', RAW + '/instructions/blazor.instructions.md'], ['Spring Boot', RAW + '/instructions/springboot.instructions.md'], ['Quarkus', RAW + '/instructions/quarkus.instructions.md'], ['Astro', RAW + '/instructions/astro.instructions.md']]
    }, {
      heading: 'DevOps & cloud',
      items: [['Docker best practices', RAW + '/instructions/containerization-docker-best-practices.instructions.md'], ['Kubernetes deployment', RAW + '/instructions/kubernetes-deployment-best-practices.instructions.md'], ['GitHub Actions CI/CD', RAW + '/instructions/github-actions-ci-cd-best-practices.instructions.md'], ['Terraform', RAW + '/instructions/terraform.instructions.md'], ['Bicep best practices', RAW + '/instructions/bicep-code-best-practices.instructions.md'], ['DevOps core principles', RAW + '/instructions/devops-core-principles.instructions.md'], ['Ansible', RAW + '/instructions/ansible.instructions.md'], ['Makefile', RAW + '/instructions/makefile.instructions.md']]
    }, {
      heading: 'Quality & docs',
      items: [['Security & OWASP', RAW + '/instructions/security-and-owasp.instructions.md'], ['Accessibility (a11y)', RAW + '/instructions/a11y.instructions.md'], ['Performance optimization', RAW + '/instructions/performance-optimization.instructions.md'], ['QA engineering best practices', RAW + '/instructions/qa-engineering-best-practices.instructions.md'], ['Markdown', RAW + '/instructions/markdown.instructions.md'], ['Self-explanatory code commenting', RAW + '/instructions/self-explanatory-code-commenting.instructions.md'], ['Agent skills authoring', RAW + '/instructions/agent-skills.instructions.md'], ['Context engineering', RAW + '/instructions/context-engineering.instructions.md']]
    }]
  },
  'ref-mcp-sdk': {
    source: 'https://github.com/modelcontextprotocol/ext-apps',
    note: 'The @modelcontextprotocol/ext-apps SDK serves three roles: building Views, embedding Views as a host, and registering tools with UI metadata.',
    groups: [{
      heading: 'SDK packages',
      items: [['@modelcontextprotocol/ext-apps — build interactive Views', 'https://apps.extensions.modelcontextprotocol.io/api/modules/app.html'], ['/react — React hooks (useApp, useHostStyles)', 'https://apps.extensions.modelcontextprotocol.io/api/modules/_modelcontextprotocol_ext-apps_react.html'], ['/app-bridge — embed Views in a chat client', 'https://apps.extensions.modelcontextprotocol.io/api/modules/app-bridge.html'], ['/server — register tools & resources', 'https://apps.extensions.modelcontextprotocol.io/api/modules/server.html']]
    }, {
      heading: 'Example servers',
      items: [['Map (CesiumJS globe)', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/map-server'], ['Three.js scene renderer', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/threejs-server'], ['ShaderToy (GLSL)', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/shadertoy-server'], ['Cohort Heatmap', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/cohort-heatmap-server'], ['Scenario Modeler', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/scenario-modeler-server'], ['Customer Segmentation', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/customer-segmentation-server'], ['PDF viewer', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/pdf-server'], ['QR Code (Python)', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/qr-server']]
    }, {
      heading: 'Starter templates',
      items: [['React', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/basic-server-react'], ['Vue', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/basic-server-vue'], ['Svelte', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/basic-server-svelte'], ['Preact', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/basic-server-preact'], ['Solid', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/basic-server-solid'], ['Vanilla JS', 'https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/basic-server-vanillajs']]
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patterson-docs/collections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patterson-docs/data.jsx
try { (() => {
/* ============================================================
   Patterson Docs — content model
   Sitemap follows Diátaxis (diataxis.fr): four needs — Tutorials,
   How-to guides, Reference, Explanation — arranged in a complex
   hierarchy (diataxis.fr/complex-hierarchies).
   External links imported from the sources named in the brief.
   ============================================================ */

/* Sidebars keyed by top-nav section. Item shape:
   { text, id }            -> internal authored page (routes to #/id)
   { text, href }          -> external link (opens new tab)
   { text, items:[...] }   -> collapsible group (landing page = first child or group id)
   A group may carry `id` to make its heading a landing page. */

window.DOCS_SIDEBARS = {
  foundations: [{
    text: 'Foundations',
    items: [{
      text: 'The Diátaxis approach',
      id: 'foundations'
    }, {
      text: 'Two dimensions of craft',
      id: 'foundations-dimensions'
    }, {
      text: 'Complex hierarchies',
      id: 'foundations-hierarchies'
    }]
  }, {
    text: 'The four modes',
    items: [{
      text: 'Tutorials',
      id: 'tutorials'
    }, {
      text: 'How-to guides',
      id: 'how-to'
    }, {
      text: 'Reference',
      id: 'reference'
    }, {
      text: 'Explanation',
      id: 'explanation'
    }]
  }, {
    text: 'Reference',
    items: [{
      text: 'diataxis.fr — Start here',
      href: 'https://diataxis.fr/start-here/'
    }, {
      text: 'The compass',
      href: 'https://diataxis.fr/compass/'
    }, {
      text: 'The map',
      href: 'https://diataxis.fr/map/'
    }, {
      text: 'Quality',
      href: 'https://diataxis.fr/quality/'
    }]
  }],
  tutorials: [{
    text: 'Tutorials',
    items: [{
      text: 'About tutorials',
      id: 'tutorials'
    }, {
      text: 'Your first session',
      id: 'tut-first-session'
    }]
  }, {
    text: 'Claude Code · getting started',
    items: [{
      text: 'Quickstart',
      href: 'https://code.claude.com/docs/en/quickstart.md'
    }, {
      text: 'Web quickstart',
      href: 'https://code.claude.com/docs/en/web-quickstart.md'
    }, {
      text: 'Desktop quickstart',
      href: 'https://code.claude.com/docs/en/desktop-quickstart.md'
    }, {
      text: 'Agent SDK quickstart',
      href: 'https://code.claude.com/docs/en/agent-sdk/quickstart.md'
    }]
  }, {
    text: 'Copilot CLI for Beginners',
    items: [{
      text: '00 · Quick Start',
      href: 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/00-quick-start/'
    }, {
      text: '01 · First Steps',
      href: 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/01-setup-and-first-steps/'
    }, {
      text: '02 · Context & Conversations',
      href: 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/02-context-and-conversations/'
    }, {
      text: '03 · Development Workflows',
      href: 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/03-development-workflows/'
    }, {
      text: '04 · Specialized AI Assistants',
      href: 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/04-agents-and-custom-instructions/'
    }, {
      text: '05 · Automate Repetitive Tasks',
      href: 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/05-skills/'
    }, {
      text: '06 · Connect to APIs & DBs',
      href: 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/06-mcp-servers/'
    }, {
      text: '07 · Putting It All Together',
      href: 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/07-putting-it-all-together/'
    }]
  }, {
    text: 'Ecosystem tutorials',
    items: [{
      text: 'Agent Skills — Quickstart',
      href: 'https://agentskills.io/skill-creation/quickstart.md'
    }, {
      text: 'MCP Apps — Quickstart',
      href: 'https://apps.extensions.modelcontextprotocol.io/api/documents/Quickstart.html'
    }, {
      text: 'GitHub — Hello World',
      href: 'https://docs.github.com/en/get-started/start-your-journey/hello-world'
    }]
  }],
  'how-to': [{
    text: 'How-to guides',
    items: [{
      text: 'About how-to guides',
      id: 'how-to'
    }]
  }, {
    text: 'Install & set up',
    items: [{
      text: 'Use Claude Code in VS Code',
      id: 'ht-vscode',
      badge: 'Linux'
    }, {
      text: 'Development containers',
      id: 'ht-devcontainer'
    }, {
      text: 'Advanced setup',
      href: 'https://code.claude.com/docs/en/setup.md'
    }, {
      text: 'JetBrains IDEs',
      href: 'https://code.claude.com/docs/en/jetbrains.md'
    }]
  }, {
    text: 'Everyday workflows (Claude Code)',
    items: [{
      text: 'Common workflows',
      href: 'https://code.claude.com/docs/en/common-workflows.md'
    }, {
      text: 'Automate actions with hooks',
      href: 'https://code.claude.com/docs/en/hooks-guide.md'
    }, {
      text: 'Connect to MCP servers',
      href: 'https://code.claude.com/docs/en/mcp-quickstart.md'
    }, {
      text: 'Run parallel sessions with worktrees',
      href: 'https://code.claude.com/docs/en/worktrees.md'
    }, {
      text: 'GitHub Actions',
      href: 'https://code.claude.com/docs/en/github-actions.md'
    }, {
      text: 'Extend Claude with skills',
      href: 'https://code.claude.com/docs/en/skills.md'
    }]
  }, {
    text: 'Customize GitHub Copilot',
    items: [{
      text: 'Building custom agents',
      href: 'https://awesome-copilot.github.com/learning-hub/building-custom-agents/'
    }, {
      text: 'Creating effective skills',
      href: 'https://awesome-copilot.github.com/learning-hub/creating-effective-skills/'
    }, {
      text: 'Defining custom instructions',
      href: 'https://awesome-copilot.github.com/learning-hub/defining-custom-instructions/'
    }, {
      text: 'Installing & using plugins',
      href: 'https://awesome-copilot.github.com/learning-hub/installing-and-using-plugins/'
    }, {
      text: 'Automating with hooks',
      href: 'https://awesome-copilot.github.com/learning-hub/automating-with-hooks/'
    }, {
      text: 'Using the Copilot coding agent',
      href: 'https://awesome-copilot.github.com/learning-hub/using-copilot-coding-agent/'
    }]
  }, {
    text: 'Build MCP Apps',
    items: [{
      text: 'create-mcp-app skill',
      href: 'https://github.com/modelcontextprotocol/ext-apps/blob/main/plugins/mcp-apps/skills/create-mcp-app/SKILL.md'
    }, {
      text: 'migrate-oai-app skill',
      href: 'https://github.com/modelcontextprotocol/ext-apps/blob/main/plugins/mcp-apps/skills/migrate-oai-app/SKILL.md'
    }, {
      text: 'add-app-to-server skill',
      href: 'https://github.com/modelcontextprotocol/ext-apps/blob/main/plugins/mcp-apps/skills/add-app-to-server/SKILL.md'
    }, {
      text: 'convert-web-app skill',
      href: 'https://github.com/modelcontextprotocol/ext-apps/blob/main/plugins/mcp-apps/skills/convert-web-app/SKILL.md'
    }]
  }, {
    text: 'GitHub how-tos',
    items: [{
      text: 'Set up the GitHub MCP server',
      href: 'https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server'
    }, {
      text: 'Extend Copilot Chat with MCP',
      href: 'https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp'
    }, {
      text: 'Connect with SSH',
      href: 'https://docs.github.com/en/authentication/connecting-to-github-with-ssh'
    }, {
      text: 'Create a GitHub Pages site',
      href: 'https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site'
    }]
  }],
  reference: [{
    text: 'Reference',
    items: [{
      text: 'About reference',
      id: 'reference'
    }]
  }, {
    text: 'Claude Code · plugins',
    items: [{
      text: 'Plugins reference',
      id: 'ref-plugins',
      badge: 'imported'
    }, {
      text: 'Create plugins',
      href: 'https://code.claude.com/docs/en/plugins.md'
    }, {
      text: 'Plugin marketplaces',
      href: 'https://code.claude.com/docs/en/plugin-marketplaces.md'
    }, {
      text: 'Discover & install plugins',
      href: 'https://code.claude.com/docs/en/discover-plugins.md'
    }]
  }, {
    text: 'Claude Code · reference',
    items: [{
      text: 'Prompt library',
      id: 'ref-prompt-library',
      badge: 'imported'
    }, {
      text: 'CLI reference',
      href: 'https://code.claude.com/docs/en/cli-reference.md'
    }, {
      text: 'Settings',
      href: 'https://code.claude.com/docs/en/settings.md'
    }, {
      text: 'Environment variables',
      href: 'https://code.claude.com/docs/en/env-vars.md'
    }, {
      text: 'Hooks reference',
      href: 'https://code.claude.com/docs/en/hooks.md'
    }, {
      text: 'Tools reference',
      href: 'https://code.claude.com/docs/en/tools-reference.md'
    }, {
      text: 'Slash commands',
      href: 'https://code.claude.com/docs/en/commands.md'
    }, {
      text: 'Interactive mode',
      href: 'https://code.claude.com/docs/en/interactive-mode.md'
    }, {
      text: 'Glossary',
      href: 'https://code.claude.com/docs/en/glossary.md'
    }, {
      text: 'Error reference',
      href: 'https://code.claude.com/docs/en/errors.md'
    }]
  }, {
    text: 'Agent SDK reference',
    items: [{
      text: 'TypeScript',
      href: 'https://code.claude.com/docs/en/agent-sdk/typescript.md'
    }, {
      text: 'Python',
      href: 'https://code.claude.com/docs/en/agent-sdk/python.md'
    }, {
      text: 'Overview',
      href: 'https://code.claude.com/docs/en/agent-sdk/overview.md'
    }]
  }, {
    text: 'Agent Skills & MCP Apps',
    items: [{
      text: 'Agent Skills — Specification',
      href: 'https://agentskills.io/specification.md'
    }, {
      text: 'MCP Apps — Specification (2026-01-26)',
      href: 'https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx'
    }, {
      text: 'MCP Apps — API Docs',
      href: 'https://apps.extensions.modelcontextprotocol.io/api/'
    }, {
      text: 'ext-apps — SDK packages',
      id: 'ref-mcp-sdk'
    }]
  }, {
    text: 'GitHub APIs',
    items: [{
      text: 'REST API',
      href: 'https://docs.github.com/en/rest'
    }, {
      text: 'GraphQL API',
      href: 'https://docs.github.com/en/graphql'
    }, {
      text: 'Actions — Workflow syntax',
      href: 'https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax'
    }, {
      text: 'GitHub CLI',
      href: 'https://docs.github.com/en/github-cli/github-cli'
    }]
  }, {
    text: 'Copilot catalogs',
    items: [{
      text: 'Custom agents catalog',
      id: 'ref-copilot-agents'
    }, {
      text: 'Instructions catalog',
      id: 'ref-copilot-instructions'
    }, {
      text: 'Terminology glossary',
      href: 'https://awesome-copilot.github.com/learning-hub/github-copilot-terminology-glossary/'
    }]
  }],
  explanation: [{
    text: 'Explanation',
    items: [{
      text: 'About explanation',
      id: 'explanation'
    }]
  }, {
    text: 'How Claude Code works',
    items: [{
      text: 'Development containers',
      id: 'ht-devcontainer',
      badge: 'imported'
    }, {
      text: 'How Claude Code works',
      href: 'https://code.claude.com/docs/en/how-claude-code-works.md'
    }, {
      text: 'How the agent loop works',
      href: 'https://code.claude.com/docs/en/agent-sdk/agent-loop.md'
    }, {
      text: 'The context window',
      href: 'https://code.claude.com/docs/en/context-window.md'
    }, {
      text: 'How Claude remembers your project',
      href: 'https://code.claude.com/docs/en/memory.md'
    }, {
      text: 'Best practices',
      href: 'https://code.claude.com/docs/en/best-practices.md'
    }, {
      text: 'Security',
      href: 'https://code.claude.com/docs/en/security.md'
    }]
  }, {
    text: 'Concepts — Copilot',
    items: [{
      text: 'What are agents, skills & instructions',
      href: 'https://awesome-copilot.github.com/learning-hub/what-are-agents-skills-instructions/'
    }, {
      text: 'Understanding Copilot context',
      href: 'https://awesome-copilot.github.com/learning-hub/understanding-copilot-context/'
    }, {
      text: 'Understanding MCP servers',
      href: 'https://awesome-copilot.github.com/learning-hub/understanding-mcp-servers/'
    }, {
      text: 'Agentic workflows',
      href: 'https://awesome-copilot.github.com/learning-hub/agentic-workflows/'
    }, {
      text: 'Agents and subagents',
      href: 'https://awesome-copilot.github.com/learning-hub/agents-and-subagents/'
    }]
  }, {
    text: 'Concepts — Skills & MCP Apps',
    items: [{
      text: 'Agent Skills — Overview',
      href: 'https://agentskills.io/home.md'
    }, {
      text: 'Best practices for skill creators',
      href: 'https://agentskills.io/skill-creation/best-practices.md'
    }, {
      text: 'Evaluating skill output quality',
      href: 'https://agentskills.io/skill-creation/evaluating-skills.md'
    }, {
      text: 'Why MCP Apps?',
      id: 'exp-mcp-apps'
    }]
  }]
};

/* Top-nav definition (VitePress-style). */
window.DOCS_NAV = [{
  text: 'Foundations',
  section: 'foundations',
  to: '#/foundations'
}, {
  text: 'Tutorials',
  section: 'tutorials',
  to: '#/tutorials'
}, {
  text: 'How-to',
  section: 'how-to',
  to: '#/how-to'
}, {
  text: 'Reference',
  section: 'reference',
  to: '#/reference'
}, {
  text: 'Explanation',
  section: 'explanation',
  to: '#/explanation'
}];

/* Which top-nav section each authored page belongs to (drives sidebar + active nav). */
window.DOCS_PAGE_SECTION = {
  'home': null,
  'foundations': 'foundations',
  'foundations-dimensions': 'foundations',
  'foundations-hierarchies': 'foundations',
  'tutorials': 'tutorials',
  'tut-first-session': 'tutorials',
  'how-to': 'how-to',
  'ht-vscode': 'how-to',
  'ht-devcontainer': 'how-to',
  'reference': 'reference',
  'ref-plugins': 'reference',
  'ref-prompt-library': 'reference',
  'ref-mcp-sdk': 'reference',
  'ref-copilot-agents': 'reference',
  'ref-copilot-instructions': 'reference',
  'explanation': 'explanation',
  'exp-mcp-apps': 'explanation'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patterson-docs/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patterson-docs/pages1.jsx
try { (() => {
/* Patterson Docs — authored pages (part 1): Foundations, Tutorials, How-to */
window.DOCS_PAGES = window.DOCS_PAGES || {};
Object.assign(window.DOCS_PAGES, {
  'foundations': {
    group: 'Foundations',
    title: 'The Diátaxis approach',
    lead: 'Patterson Docs is organised with Diátaxis — a systematic framework that identifies four distinct documentation needs and structures content around them.',
    blocks: [['compass', 'Diátaxis identifies four modes of documentation — **tutorials**, **how-to guides**, **reference** and **explanation** — each serving a different user need. Good documentation keeps them distinct.'], ['p', 'Diátaxis is based on the principle that documentation must serve the needs of its users, and that those needs are defined by the nature of *craft* itself. Every page in this site belongs to exactly one of the four modes, and never tries to do the job of another.'], ['h2', 'The four modes'], ['table', ['Mode', 'User need', 'Serves', 'Form'], [['Tutorials', 'Learning', 'Acquiring the craft', 'Informs action'], ['How-to guides', 'A goal', 'Applying the craft', 'Informs action'], ['Reference', 'Information', 'Applying the craft', 'Informs cognition'], ['Explanation', 'Understanding', 'Acquiring the craft', 'Informs cognition']]], ['links', 'Explore each mode', 'Every section below opens with a landing page that introduces its contents.', [['Tutorials', '#/tutorials', 'Lessons that take a newcomer by the hand.'], ['How-to guides', '#/how-to', 'Directions to achieve a specific goal.'], ['Reference', '#/reference', 'Dry, accurate technical description.'], ['Explanation', '#/explanation', 'Discussion that deepens understanding.']]], ['links', 'Source', null, [['diataxis.fr — Foundations', 'https://diataxis.fr/foundations/'], ['diataxis.fr — Start here', 'https://diataxis.fr/start-here/']]]]
  },
  'foundations-dimensions': {
    group: 'Foundations',
    title: 'Two dimensions of craft',
    lead: 'Why exactly four modes — not three, not five. The answer comes from a two-dimensional map of skill.',
    blocks: [['p', 'A craft contains both **action** (knowing *how*, what we do) and **cognition** (knowing *that*, what we think). Separately, a practitioner both **acquires** their craft and **applies** it. These two independent axes divide the territory of skill into four quarters — and there simply is no other territory to cover.'], ['h2', 'Action / cognition'], ['p', 'Practical knowledge and theoretical knowledge are counterparts: distinct, but bound up with each other. Documentation that informs action (tutorials, how-to guides) is a different thing from documentation that informs cognition (reference, explanation).'], ['h2', 'Acquisition / application'], ['p', 'Being *at study* (acquiring skill) and being *at work* (applying it) are likewise counterparts. A user learning the craft has different needs from the same user getting a job done.'], ['info', 'A complete map', 'Because the two dimensions define the whole territory, there are necessarily four quarters — this is not an arbitrary number. Map action×acquisition to tutorials, action×application to how-to guides, cognition×application to reference, and cognition×acquisition to explanation.'], ['links', 'Source', null, [['diataxis.fr — Foundations', 'https://diataxis.fr/foundations/'], ['diataxis.fr — The map', 'https://diataxis.fr/map/']]]]
  },
  'foundations-hierarchies': {
    group: 'Foundations',
    title: 'Complex hierarchies',
    lead: 'How to structure large documentation sets without muddling the four modes.',
    blocks: [['p', 'For most products a straightforward arrangement works: a home landing page, then a landing page for each of the four modes, with content beneath. Each landing page contains an overview of what lies within — it introduces the material, it does not merely list it.'], ['code', 'text', `Home                      <- landing page
    Tutorials             <- landing page
    How-to guides         <- landing page
        Install           <- landing page
            Docker
            Linux container
    Reference             <- landing page
    Explanation           <- landing page`], ['h2', 'The problem of lists'], ['warning', 'Keep lists short', 'Lists longer than about seven items are hard to read unless they have a mechanical order. If a table of contents grows past that, break it into smaller, introduced groups — exactly what the sidebars in this site do.'], ['h2', 'Two-dimensional problems'], ['p', 'Sometimes the Diátaxis structure meets another structure — different user types (users, developers, contributors) or different deployment targets. Diátaxis is **an approach, not four boxes**: let the structure be as complex as it needs to be, as long as it never muddles the four forms and purposes. Document the product *as it is for the user*.'], ['links', 'Source', null, [['diataxis.fr — Complex hierarchies', 'https://diataxis.fr/complex-hierarchies/']]]]
  },
  /* ---------------- TUTORIALS ---------------- */
  'tutorials': {
    group: 'Tutorials',
    title: 'Tutorials',
    lead: 'A tutorial is a lesson. It takes a newcomer by the hand through a series of steps to complete a project of some kind, and gives them the confidence to explore further.',
    blocks: [['compass', 'Learning-oriented · the user is **acquiring** the craft · the documentation **informs action**.'], ['p', 'Tutorials are learning-oriented. Their job is to allow the newcomer to get started; they are a lesson, not a manual. The learner follows along and, by doing, gains familiarity. Below are guided paths through the tools documented on this site.'], ['links', 'Get started with Claude Code', 'The fastest way in — install, run your first session, and see the agentic loop in action.', [['Quickstart', 'https://code.claude.com/docs/en/quickstart.md', 'Welcome to Claude Code — your first ten minutes.'], ['Web quickstart', 'https://code.claude.com/docs/en/web-quickstart.md', 'Run Claude Code in the cloud from a browser.'], ['Desktop quickstart', 'https://code.claude.com/docs/en/desktop-quickstart.md', 'Install the desktop app and start coding.'], ['Agent SDK quickstart', 'https://code.claude.com/docs/en/agent-sdk/quickstart.md', 'Build an agent in Python or TypeScript.']]], ['links', 'GitHub Copilot CLI for Beginners', 'A source-faithful mirror of the companion course — eight chapters from install to capstone.', [['00 · Quick Start', 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/00-quick-start/'], ['01 · First Steps', 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/01-setup-and-first-steps/'], ['02 · Context & Conversations', 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/02-context-and-conversations/'], ['03 · Development Workflows', 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/03-development-workflows/'], ['04 · Specialized AI Assistants', 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/04-agents-and-custom-instructions/'], ['05 · Automate Repetitive Tasks', 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/05-skills/'], ['06 · Connect to APIs & DBs', 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/06-mcp-servers/'], ['07 · Putting It All Together', 'https://awesome-copilot.github.com/learning-hub/cli-for-beginners/07-putting-it-all-together/']]], ['links', 'Ecosystem', 'First lessons for the wider agentic ecosystem.', [['Agent Skills — Quickstart', 'https://agentskills.io/skill-creation/quickstart.md', 'Create your first skill and see it work in VS Code.'], ['MCP Apps — Quickstart', 'https://apps.extensions.modelcontextprotocol.io/api/documents/Quickstart.html', 'Build your first interactive MCP App.'], ['GitHub — Hello World', 'https://docs.github.com/en/get-started/start-your-journey/hello-world', 'Learn the pull-request workflow.']]]]
  },
  'tut-first-session': {
    group: 'Tutorials',
    title: 'Your first Claude Code session',
    lead: 'In this lesson you will install Claude Code, point it at a project, and make your first change — start to finish.',
    blocks: [['compass', 'Follow every step in order. The goal is not to understand everything, but to *do it once* and gain confidence.'], ['h2', 'Step 1 — Install'], ['p', 'Install the CLI, then check it responds.'], ['code', 'bash', `curl -fsSL https://claude.ai/install.sh | bash
claude --version`], ['h2', 'Step 2 — Start a session in your project'], ['ol', ['Open a terminal in a git repository you know well.', 'Run `claude` to start an interactive session.', 'When prompted, sign in with your Anthropic account.']], ['h2', 'Step 3 — Ask for a small change'], ['p', 'Type a plain-language request. Claude reads the relevant files, proposes a diff, and asks before it writes.'], ['code', 'text', `> add a --version flag to the CLI and print the value from package.json`], ['tip', 'You are in control', 'Claude shows every edit as a diff and waits for your approval. Press Shift+Tab to cycle permission modes when you want it to move faster.'], ['h2', 'What you just learned'], ['p', 'You installed the tool, ran the agentic loop once, and reviewed a change. That is the whole rhythm of Claude Code — everything else is variations on it. Next, browse the **How-to guides** for specific goals.'], ['links', 'Keep going', null, [['Common workflows', 'https://code.claude.com/docs/en/common-workflows.md'], ['How Claude Code works', 'https://code.claude.com/docs/en/how-claude-code-works.md']]]]
  },
  /* ---------------- HOW-TO ---------------- */
  'how-to': {
    group: 'How-to guides',
    title: 'How-to guides',
    lead: 'A how-to guide addresses a real-world goal or problem, by providing practical directions to help the user who is already working achieve it.',
    blocks: [['compass', 'Task-oriented · the user is **applying** the craft · the documentation **informs action**.'], ['p', 'How-to guides are goal-oriented recipes. Unlike a tutorial, they assume some competence and can leave things out. They answer the question "how do I…?". Two guides are fully written on this site; the rest link to the canonical source.'], ['links', 'Install & set up', null, [['Use Claude Code in VS Code (Linux)', '#/ht-vscode', 'Install the extension and configure it on Linux.'], ['Development containers', '#/ht-devcontainer', 'Run Claude Code in a consistent, isolated container.'], ['Advanced setup', 'https://code.claude.com/docs/en/setup.md'], ['JetBrains IDEs', 'https://code.claude.com/docs/en/jetbrains.md']]], ['links', 'Everyday workflows (Claude Code)', null, [['Common workflows', 'https://code.claude.com/docs/en/common-workflows.md'], ['Automate actions with hooks', 'https://code.claude.com/docs/en/hooks-guide.md'], ['Connect to MCP servers', 'https://code.claude.com/docs/en/mcp-quickstart.md'], ['Run parallel sessions with worktrees', 'https://code.claude.com/docs/en/worktrees.md'], ['Claude Code GitHub Actions', 'https://code.claude.com/docs/en/github-actions.md']]], ['links', 'Customize GitHub Copilot', null, [['Building custom agents', 'https://awesome-copilot.github.com/learning-hub/building-custom-agents/'], ['Creating effective skills', 'https://awesome-copilot.github.com/learning-hub/creating-effective-skills/'], ['Defining custom instructions', 'https://awesome-copilot.github.com/learning-hub/defining-custom-instructions/'], ['Installing & using plugins', 'https://awesome-copilot.github.com/learning-hub/installing-and-using-plugins/']]], ['links', 'Build MCP Apps', 'Let your coding agent scaffold an app with one of the four bundled skills.', [['create-mcp-app', 'https://github.com/modelcontextprotocol/ext-apps/blob/main/plugins/mcp-apps/skills/create-mcp-app/SKILL.md'], ['migrate-oai-app', 'https://github.com/modelcontextprotocol/ext-apps/blob/main/plugins/mcp-apps/skills/migrate-oai-app/SKILL.md'], ['add-app-to-server', 'https://github.com/modelcontextprotocol/ext-apps/blob/main/plugins/mcp-apps/skills/add-app-to-server/SKILL.md'], ['convert-web-app', 'https://github.com/modelcontextprotocol/ext-apps/blob/main/plugins/mcp-apps/skills/convert-web-app/SKILL.md']]]]
  },
  'ht-vscode': {
    group: 'How-to guides',
    title: 'Use Claude Code in VS Code',
    badge: 'Linux',
    lead: 'Install and configure the Claude Code extension for VS Code, and get AI coding assistance with inline diffs, @-mentions, plan review, and keyboard shortcuts.',
    blocks: [['info', 'This guide covers Linux', 'The extension is identical across platforms; the steps below note the Linux-specific requirements. On macOS and Windows the install is the same but skip the dependency step.'], ['h2', 'Prerequisites'], ['ul', ['A 64-bit Linux distribution (Ubuntu 20.04+, Debian, Fedora, or equivalent).', '`glibc` 2.31 or newer — required by the native binary.', 'VS Code 1.98 or newer (the desktop build, not a web-only host).']], ['h2', 'Step 1 — Install the extension'], ['ol', ['Open VS Code and go to the **Extensions** view (`Ctrl+Shift+X`).', 'Search for **Claude Code** and install the official Anthropic extension.', 'Reload the window if prompted.']], ['p', 'The extension bundles the Claude Code CLI. On first launch it downloads the native binary for your architecture into `~/.claude/`.'], ['h2', 'Step 2 — Sign in'], ['p', 'Open the Claude Code panel from the activity bar and click **Sign in**. On Linux the browser callback sometimes cannot reach `localhost`; when that happens, choose **Paste code** and copy the OAuth code from the browser back into VS Code.'], ['code', 'bash', `# Verify the CLI is on your PATH (optional, for terminal use)
claude --version
claude doctor   # diagnoses common Linux install problems`], ['warning', 'Missing shared libraries', 'If the binary fails to start with a `libz` or `libstdc++` error, install the base build tooling: `sudo apt install build-essential` on Debian/Ubuntu, or `sudo dnf groupinstall "Development Tools"` on Fedora.'], ['h2', 'Step 3 — Work in the editor'], ['ul', ['**Inline diffs** — proposed edits appear directly in the file; accept or reject per hunk.', '**@-mentions** — type `@` to attach a file, symbol, or selection as context.', '**Plan review** — for larger tasks Claude drafts a plan you approve before it edits.', '**Keyboard shortcuts** — `Ctrl+Esc` opens Claude Code; remap it under *File → Preferences → Keyboard Shortcuts*.']], ['tip', 'Match your terminal too', 'If you also use the CLI, set `Shift+Enter` for newlines and enable the terminal bell so you get notified when Claude finishes a long task.'], ['links', 'Related', null, [['Use Claude Code in VS Code (full reference)', 'https://code.claude.com/docs/en/vs-code.md'], ['Configure your terminal', 'https://code.claude.com/docs/en/terminal-config.md'], ['Troubleshoot installation and login', 'https://code.claude.com/docs/en/troubleshoot-install.md']]]]
  },
  'ht-devcontainer': {
    group: 'How-to guides',
    title: 'Development containers',
    lead: 'Run Claude Code inside a dev container for consistent, isolated environments across your team — and understand how dev containers work with your editor.',
    blocks: [['compass', 'This page is part **how-to** (set one up) and part **explanation** (how it works). Diátaxis allows a page to lean across a boundary when that serves the reader — as long as each part is clearly what it is.'], ['h2', 'Why a dev container'], ['p', 'A development container is a Docker container configured as a full-featured development environment. It pins the OS, tools, and dependencies so every teammate — and every CI run — works in the same place. For agentic tools it adds a second benefit: **isolation**, so you can safely give Claude more autonomy.'], ['h2', 'How dev containers work with your editor'], ['ol', ['Your project contains a `.devcontainer/` folder with a `devcontainer.json` and usually a `Dockerfile`.', 'The editor’s Dev Containers support (the VS Code **Dev Containers** extension, or any editor that implements the open `devcontainer` spec) reads that config.', 'It builds or pulls the image, starts the container, and **reopens your workspace inside it** — your files are mounted, your extensions run in the container.', 'Claude Code runs *inside* the container, so the commands it executes and the packages it installs never touch your host machine.']], ['info', 'The reference container', 'Anthropic ships a reference dev container with a Node.js base image, common CLI tools, persisted shell history, and a firewall init script that restricts network egress to an allowlist (npm, GitHub, and the Anthropic API).'], ['h2', 'Set one up'], ['ol', ['Copy the reference `.devcontainer/` into your repository root.', 'Install the **Dev Containers** extension in VS Code.', 'Run **Dev Containers: Reopen in Container** from the command palette.', 'Once inside, run `claude` as usual.']], ['code', 'json', `// .devcontainer/devcontainer.json (excerpt)
{
  "name": "Claude Code Sandbox",
  "build": { "dockerfile": "Dockerfile" },
  "runArgs": ["--cap-add=NET_ADMIN", "--cap-add=NET_RAW"],
  "postCreateCommand": "sudo /usr/local/bin/init-firewall.sh"
}`], ['warning', 'Isolation is not a guarantee', 'The firewall reduces the blast radius of a mistake or a prompt-injection, but a container is not a security boundary against a determined attacker. Review the allowlist and keep secrets out of the image.'], ['tip', 'Safer autonomous runs', 'Because the container limits what a command can reach, this is the recommended place to use broader permission modes for long, hands-off tasks.'], ['links', 'Related', null, [['Development containers (source)', 'https://code.claude.com/docs/en/devcontainer.md'], ['Choose a sandbox environment', 'https://code.claude.com/docs/en/sandbox-environments.md'], ['Configure the sandboxed Bash tool', 'https://code.claude.com/docs/en/sandboxing.md'], ['Security', 'https://code.claude.com/docs/en/security.md']]]]
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patterson-docs/pages1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patterson-docs/pages2.jsx
try { (() => {
/* Patterson Docs — authored pages (part 2): Reference, Explanation */
window.DOCS_PAGES = window.DOCS_PAGES || {};
Object.assign(window.DOCS_PAGES, {
  'reference': {
    group: 'Reference',
    title: 'Reference',
    lead: 'Reference guides are technical descriptions of the machinery and how to operate it. They are information-oriented: austere, accurate, and complete.',
    blocks: [['compass', 'Information-oriented · the user is **applying** the craft · the documentation **informs cognition**.'], ['p', 'Reference material describes the product. It states facts — options, flags, schemas, return values — and resists the temptation to explain or instruct. The user consults it while working, the way you consult a map, not a travel guide.'], ['links', 'Claude Code — plugins', null, [['Plugins reference', '#/ref-plugins', 'Schemas, CLI commands, and component specs.'], ['Create plugins', 'https://code.claude.com/docs/en/plugins.md'], ['Plugin marketplaces', 'https://code.claude.com/docs/en/plugin-marketplaces.md']]], ['links', 'Claude Code — reference', null, [['Prompt library', '#/ref-prompt-library', 'Copy-paste prompts, tagged by task and role.'], ['CLI reference', 'https://code.claude.com/docs/en/cli-reference.md'], ['Settings', 'https://code.claude.com/docs/en/settings.md'], ['Environment variables', 'https://code.claude.com/docs/en/env-vars.md'], ['Hooks reference', 'https://code.claude.com/docs/en/hooks.md'], ['Tools reference', 'https://code.claude.com/docs/en/tools-reference.md']]], ['links', 'Agent Skills & MCP Apps', null, [['Agent Skills — Specification', 'https://agentskills.io/specification.md'], ['MCP Apps — Specification (2026-01-26)', 'https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx'], ['MCP Apps — API Docs', 'https://apps.extensions.modelcontextprotocol.io/api/'], ['ext-apps — SDK packages', '#/ref-mcp-sdk']]], ['links', 'GitHub APIs & Copilot catalogs', null, [['REST API', 'https://docs.github.com/en/rest'], ['GraphQL API', 'https://docs.github.com/en/graphql'], ['Custom agents catalog', '#/ref-copilot-agents'], ['Instructions catalog', '#/ref-copilot-instructions']]]]
  },
  'ref-plugins': {
    group: 'Reference',
    title: 'Plugins reference',
    badge: 'imported',
    lead: 'Complete technical reference for the Claude Code plugin system: directory layout, manifest schemas, component specifications, and CLI commands.',
    blocks: [['h2', 'Plugin structure'], ['p', 'A plugin is a directory containing a manifest and one or more component folders. The manifest lives at `.claude-plugin/plugin.json`.'], ['code', 'text', `my-plugin/
├── .claude-plugin/
│   └── plugin.json          # required manifest
├── commands/                # slash commands (*.md)
├── agents/                  # subagent definitions (*.md)
├── skills/                  # Agent Skills (SKILL.md + assets)
├── hooks/                   # hooks.json + scripts
└── .mcp.json                # bundled MCP servers`], ['h2', 'plugin.json'], ['table', ['Field', 'Type', 'Description'], [['`name`', 'string', 'Unique plugin identifier (required).'], ['`version`', 'string', 'Semantic version, e.g. `1.2.0`.'], ['`description`', 'string', 'One-line summary shown in the marketplace.'], ['`author`', 'object', '`{ name, email, url }`.'], ['`commands` / `agents` / `skills`', 'string[]', 'Override default component paths.'], ['`mcpServers`', 'object', 'Inline MCP server definitions, or a path to `.mcp.json`.']]], ['code', 'json', `{
  "name": "patterson-toolkit",
  "version": "1.0.0",
  "description": "Internal helpers for Patterson engineers",
  "author": { "name": "Platform Team" }
}`], ['h2', 'marketplace.json'], ['p', 'A marketplace is a repository that lists installable plugins. Its manifest sits at `.claude-plugin/marketplace.json`.'], ['code', 'json', `{
  "name": "patterson-marketplace",
  "plugins": [
    { "name": "patterson-toolkit", "source": "./plugins/toolkit" },
    { "name": "security-guidance", "source": "github:anthropics/security" }
  ]
}`], ['h2', 'Component paths & variables'], ['table', ['Variable', 'Resolves to'], [['`${CLAUDE_PLUGIN_ROOT}`', 'Absolute path to the installed plugin directory.'], ['`${CLAUDE_PROJECT_DIR}`', 'The user’s current project root.']]], ['info', 'Components are additive', 'Installing a plugin merges its commands, agents, skills, hooks, and MCP servers into the session. Nothing is overwritten — plugin components live alongside project- and user-level ones.'], ['h2', 'CLI commands'], ['table', ['Command', 'Effect'], [['`/plugin marketplace add <repo>`', 'Register a marketplace.'], ['`/plugin install <name>@<marketplace>`', 'Install a plugin.'], ['`/plugin list`', 'List installed plugins.'], ['`/plugin uninstall <name>`', 'Remove a plugin.']]], ['code', 'bash', `/plugin marketplace add modelcontextprotocol/ext-apps
/plugin install mcp-apps@modelcontextprotocol-ext-apps`], ['warning', 'Version constraints', 'Declare dependency ranges in `plugin.json` so your plugin keeps working when an upstream plugin ships a breaking change. Managed deployments can require an approved version range.'], ['links', 'Related', null, [['Plugins reference (source)', 'https://code.claude.com/docs/en/plugins-reference.md'], ['Create plugins', 'https://code.claude.com/docs/en/plugins.md'], ['Create & distribute a marketplace', 'https://code.claude.com/docs/en/plugin-marketplaces.md'], ['Constrain plugin dependency versions', 'https://code.claude.com/docs/en/plugin-dependencies.md']]]]
  },
  'ref-prompt-library': {
    group: 'Reference',
    title: 'Prompt library',
    badge: 'imported',
    lead: 'Copy-paste prompts for Claude Code, tagged by task and role. Grab one, adapt the placeholders, and paste it into a session.',
    blocks: [['info', 'How to read this page', 'Each card is a starting prompt. Replace `<PLACEHOLDERS>` with your specifics. These are patterns, not magic strings — edit freely.'], ['h2', 'Explore a codebase'], ['code', 'text', `> give me a tour of this repo: the entry points, the main
  modules, and how a request flows through them. Cite files.`], ['code', 'text', `> where is <FEATURE> implemented? List the files and the key
  functions, then explain how they fit together.`], ['h2', 'Fix a bug'], ['code', 'text', `> this test is failing: <PASTE TEST NAME + OUTPUT>.
  Reproduce it, find the root cause, and propose the smallest fix.`], ['h2', 'Refactor'], ['code', 'text', `> extract the duplicated validation in <FILE A> and <FILE B>
  into a single helper, then update both call sites. Keep behavior identical.`], ['h2', 'Write tests'], ['code', 'text', `> add unit tests for <MODULE>. Cover the happy path plus the
  edge cases you find. Match the style of the existing tests.`], ['h2', 'Review a change'], ['code', 'text', `> review the staged diff for correctness, security, and
  readability. Be specific and cite line numbers.`], ['h2', 'Roles'], ['table', ['Role', 'Framing prompt'], [['Reviewer', '`> act as a senior reviewer. Challenge my assumptions.`'], ['Mentor', '`> explain your reasoning as you go so I learn the codebase.`'], ['Planner', '`> don’t write code yet — draft a plan and wait for my OK.`']]], ['tip', 'Turn a good prompt into a command', 'When you reuse a prompt often, save it as a slash command or a skill so it is one keystroke away for the whole team.'], ['links', 'Related', null, [['Prompt library (source)', 'https://code.claude.com/docs/en/prompt-library.md'], ['GitHub Copilot Chat Cookbook', 'https://docs.github.com/en/copilot/tutorials/copilot-chat-cookbook'], ['Common workflows', 'https://code.claude.com/docs/en/common-workflows.md']]]]
  },
  /* collection pages — metadata; groups rendered from DOCS_COLLECTIONS */
  'ref-mcp-sdk': {
    group: 'Reference',
    title: 'ext-apps — SDK reference',
    lead: 'The MCP Apps SDK, its example servers, and starter templates.',
    collection: 'ref-mcp-sdk'
  },
  'ref-copilot-agents': {
    group: 'Reference',
    title: 'Copilot — custom agents catalog',
    lead: 'Specialized GitHub Copilot agents, imported from Awesome Copilot.',
    collection: 'ref-copilot-agents'
  },
  'ref-copilot-instructions': {
    group: 'Reference',
    title: 'Copilot — instructions catalog',
    lead: 'Coding-standard instruction files, imported from Awesome Copilot.',
    collection: 'ref-copilot-instructions'
  },
  /* ---------------- EXPLANATION ---------------- */
  'explanation': {
    group: 'Explanation',
    title: 'Explanation',
    lead: 'Explanation clarifies and illuminates a topic. It is understanding-oriented: discussion that provides context, weighs alternatives, and connects ideas.',
    blocks: [['compass', 'Understanding-oriented · the user is **acquiring** the craft · the documentation **informs cognition**.'], ['p', 'Explanation is discursive. It can be read away from the product — on the sofa, not at the keyboard. It answers "why?": why the design is the way it is, how the pieces relate, what trade-offs were made. It deliberately steps back from the how-to.'], ['links', 'How Claude Code works', null, [['Development containers', '#/ht-devcontainer', 'How isolation works with your editor.'], ['How Claude Code works', 'https://code.claude.com/docs/en/how-claude-code-works.md'], ['How the agent loop works', 'https://code.claude.com/docs/en/agent-sdk/agent-loop.md'], ['The context window', 'https://code.claude.com/docs/en/context-window.md'], ['How Claude remembers your project', 'https://code.claude.com/docs/en/memory.md'], ['Best practices', 'https://code.claude.com/docs/en/best-practices.md']]], ['links', 'Concepts — Copilot', null, [['What are agents, skills & instructions', 'https://awesome-copilot.github.com/learning-hub/what-are-agents-skills-instructions/'], ['Understanding Copilot context', 'https://awesome-copilot.github.com/learning-hub/understanding-copilot-context/'], ['Understanding MCP servers', 'https://awesome-copilot.github.com/learning-hub/understanding-mcp-servers/'], ['Agentic workflows', 'https://awesome-copilot.github.com/learning-hub/agentic-workflows/']]], ['links', 'Concepts — Skills & MCP Apps', null, [['Why MCP Apps?', '#/exp-mcp-apps', 'What problem interactive UIs solve.'], ['Agent Skills — Overview', 'https://agentskills.io/home.md'], ['Best practices for skill creators', 'https://agentskills.io/skill-creation/best-practices.md']]]]
  },
  'exp-mcp-apps': {
    group: 'Explanation',
    title: 'Why MCP Apps?',
    lead: 'Model Context Protocol tools return text and structured data. That is enough for many cases — but not when the answer wants to be interactive.',
    blocks: [['p', 'MCP tools return text and structured data. That works well until you need a chart, a form, a design canvas, or a video player. **MCP Apps** provide a standardized way to deliver interactive UIs from MCP servers, rendered inline in the conversation, in context, in any compliant host.'], ['h2', 'How it works'], ['ol', ['**Tool definition** — your tool declares a `ui://` resource containing its HTML interface.', '**Tool call** — the model calls the tool on your server.', '**Host renders** — the host fetches the resource and displays it in a sandboxed iframe.', '**Bidirectional communication** — the host passes tool data to the UI via notifications, and the UI can call other tools back through the host.']], ['info', 'An extension, not a fork', 'MCP Apps is an extension to the core MCP specification. Host support varies — Claude, ChatGPT, VS Code, Goose, Postman and others implement it to differing degrees.'], ['h2', 'Why standardize it'], ['p', 'Before MCP Apps, each host invented its own way to embed rich tool output, so a UI built for one client did not run in another. A shared protocol means one View — a chart, a dashboard — renders the same across every compliant host, and server authors write it once.'], ['links', 'Go deeper', null, [['MCP Apps — repository', 'https://github.com/modelcontextprotocol/ext-apps'], ['Specification (2026-01-26)', 'https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx'], ['Quickstart', 'https://apps.extensions.modelcontextprotocol.io/api/documents/Quickstart.html'], ['SDK packages', '#/ref-mcp-sdk']]]]
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patterson-docs/pages2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StoreFooter.jsx
try { (() => {
/* Storefront footer — multi-column link groups + HQ + legal. */
function StoreFooter({
  brand
}) {
  const cols = [{
    h: 'About Us',
    items: ['Patterson Companies', 'Patterson Foundation', 'Careers', 'Data Security', 'Contact Us']
  }, {
    h: 'Get Help',
    items: ['Locate a Branch', 'Subscribe to Newsletters', 'Request Service', 'Reset Password']
  }, {
    h: 'Quick Links',
    items: ['Open an Account', 'Track an Order', 'Search SDS', 'Start a Return', 'FAQs']
  }, {
    h: 'Services',
    items: ['Repair and Support', 'Office Design', 'Financial Services', 'Practice Transitions']
  }];
  const link = {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 'var(--fs-sm)',
    display: 'block',
    padding: '4px 0'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr) 1.1fr',
      gap: 'var(--space-6)'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)',
      marginBottom: 10
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: link,
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'
  }, it)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)',
      marginBottom: 10
    }
  }, "Connect"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "Headquarters"), /*#__PURE__*/React.createElement("br", null), "1031 Mendota Heights Rd", /*#__PURE__*/React.createElement("br", null), "Saint Paul, MN 55120"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/patterson-logo-white.svg",
    alt: "Patterson",
    style: {
      height: 24,
      width: 'auto',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
      paddingTop: 18,
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 18px'
    }
  }, ['Terms of Use', 'Privacy Policy', 'Sunshine Act', 'Returns', 'Payment Options'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 'var(--fs-xs)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.6)'
    }
  }, brand.legal))));
}
window.StoreFooter = StoreFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StoreFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StoreHeader.jsx
try { (() => {
/* Patterson storefront header: navy utility bar + white main bar
   (logo, Algolia-style search, account, cart) + category nav with flyout. */
function StoreHeader({
  brand,
  cartCount,
  onAddDemo
}) {
  const DS = window.PattersonCompaniesDesignSystem_3534f9;
  const {
    Button
  } = DS;
  const {
    SSearch,
    SUser,
    SCart,
    SChevron,
    SPhone
  } = window;
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    },
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 38
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 'var(--fs-sm)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement(SPhone, {
    size: 15,
    stroke: 2.2
  }), " ", brand.phone), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, brand.utility.map(u => /*#__PURE__*/React.createElement("a", {
    key: u,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 500
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
  }, u))))), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      height: 84
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 11,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/patterson-logo-navy.svg",
    alt: "Patterson",
    style: {
      height: 28,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--pat-sky)',
      borderLeft: '1px solid var(--border-default)',
      paddingLeft: 12
    }
  }, brand.sub)), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(SSearch, {
    size: 20
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: `Search ${brand.sub.toLowerCase()} products, brands and supplies`,
    style: {
      width: '100%',
      height: 46,
      padding: '0 16px 0 46px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)',
      background: 'var(--surface-subtle)',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--pat-sky)';
      e.target.style.background = '#fff';
      e.target.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-default)';
      e.target.style.background = 'var(--surface-subtle)';
      e.target.style.boxShadow = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--pat-navy)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement(SUser, {
    size: 22
  }), /*#__PURE__*/React.createElement("span", null, "Sign In", /*#__PURE__*/React.createElement("br", null), "or Register")), /*#__PURE__*/React.createElement("button", {
    onClick: onAddDemo,
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--pat-navy)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(SCart, {
    size: 24
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      right: -10,
      minWidth: 18,
      height: 18,
      padding: '0 4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--pat-sky)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement("span", null, "Cart")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "Open an Account"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      gap: 4,
      height: 48,
      alignItems: 'stretch'
    }
  }, brand.nav.map(n => {
    const active = open === n;
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      onMouseEnter: () => setOpen(n),
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        height: '100%',
        padding: '0 16px',
        fontSize: 'var(--fs-body)',
        fontWeight: 600,
        color: active ? 'var(--pat-navy)' : 'var(--text-body)',
        borderBottom: `3px solid ${active ? 'var(--pat-sky)' : 'transparent'}`
      }
    }, n, /*#__PURE__*/React.createElement(SChevron, {
      size: 15,
      stroke: 2.4
    })));
  })), open && brand.flyout[open] && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px 32px'
    }
  }, brand.flyout[open].map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      padding: '6px 0'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pat-sky)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-body)'
  }, item)))))));
}
window.StoreHeader = StoreHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StoreHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StoreHome.jsx
try { (() => {
/* Storefront homepage body — hero, quick links, support, products,
   manufacturers, Advantage Rewards, testimonial, account CTA. */
function StoreHome({
  brand,
  onAdd
}) {
  const DS = window.PattersonCompaniesDesignSystem_3534f9;
  const {
    Button,
    Card,
    Badge
  } = DS;
  const {
    SArrow,
    SBox,
    SHeadset,
    SAward,
    STag,
    SSparkle
  } = window;
  const quickIcons = [SBox, SSparkle, SSparkle, SBox, SHeadset, SAward];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 130% at 88% 0%, rgba(0,168,225,0.4), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, brand.heroEyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-h1)',
      margin: '12px 0 14px',
      maxWidth: '16ch'
    }
  }, brand.heroTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'rgba(255,255,255,0.84)',
      maxWidth: 520
    }
  }, brand.heroBody), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sky",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })
  }, "Shop now"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg"
  }, "Sign in"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(150deg, var(--pat-blue), var(--pat-sky))',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, "[ ", brand.sub.toLowerCase(), " hero photography placeholder ]")))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      marginInline: 'auto',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow"
  }, "Here to support your success"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0'
    }
  }, "Where do you want to start?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, brand.quickLinks.map((q, i) => {
    const I = quickIcons[i % quickIcons.length];
    return /*#__PURE__*/React.createElement(Card, {
      key: q,
      interactive: true,
      onClick: onAdd,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        flex: 'none',
        borderRadius: 'var(--radius-md)',
        background: 'var(--pat-sky-10)',
        color: 'var(--pat-sky)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 24
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--text-heading)',
        fontSize: 'var(--fs-body)'
      }
    }, q), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        color: 'var(--pat-sky)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-sky)',
      color: 'var(--pat-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(0,55,103,0.12)',
      color: 'var(--pat-navy)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(SHeadset, {
    size: 30
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 2px',
      color: 'var(--pat-navy)'
    }
  }, "Need service or equipment repair?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--pat-navy)',
      opacity: 0.85,
      maxWidth: 620
    }
  }, "Installation, training, repair or preventive maintenance \u2014 our highly-skilled techs are ready to help in person, over the phone or online."))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })
  }, "Learn about support"))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow"
  }, "Products"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0'
    }
  }, "New & featured products")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 16
    })
  }, "Shop all products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, brand.products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--surface-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone,
    solid: true
  }, p.tag)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, "[ product image ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h5)',
      lineHeight: 1.3
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, p.note), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    fullWidth: true,
    onClick: onAdd,
    style: {
      marginTop: 6
    }
  }, "Add to cart")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-5)',
      textAlign: 'center'
    }
  }, "Shop featured manufacturers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-4)'
    }
  }, brand.manufacturers.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m,
    interactive: true,
    style: {
      height: 96,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 'var(--fs-h4)',
      color: 'var(--pat-navy)',
      letterSpacing: '-0.01em'
    }
  }, m)))))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sky",
    solid: true
  }, "Advantage Rewards")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 12px'
    }
  }, "Get rewarded for what you already buy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, "As a valued customer, you earn Advantage Dollars on everyday purchases \u2014 and apply them to equipment, software, support and more."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })
  }, "Enroll to start saving"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, [{
    t: 'Savings',
    icon: STag,
    items: ['Technical support savings', 'Exclusive promotions', 'Service discounts']
  }, {
    t: 'Rewards',
    icon: SAward,
    items: ['Earn Advantage Dollars', 'Apply to equipment', 'Apply to software & support']
  }, {
    t: 'Service',
    icon: SHeadset,
    items: ['Priority scheduling', 'Member-only support line', 'Superior response time']
  }].map(col => {
    const I = col.icon;
    return /*#__PURE__*/React.createElement(Card, {
      key: col.t,
      accent: "sky",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--pat-sky)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-heading)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-wide)',
        fontSize: 'var(--fs-xs)'
      }
    }, col.t), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, col.items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it,
      style: {
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-body)',
        display: 'flex',
        gap: 7,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--pat-sky)',
        marginTop: 7,
        flex: 'none'
      }
    }), it))));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)',
      textAlign: 'center',
      maxWidth: 860,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h2)',
      color: '#fff',
      lineHeight: 1.3,
      fontWeight: 600,
      letterSpacing: 'var(--ls-snug)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pat-sky)'
    }
  }, "\u201C"), brand.testimonial.quote, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pat-sky)'
    }
  }, "\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      color: 'rgba(255,255,255,0.8)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, brand.testimonial.who), " \xB7 ", brand.testimonial.where))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 10px'
    }
  }, "Create an online account for ease and convenience"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['Shop thousands of products', 'Get exclusive online promotions and pricing', 'Create your own personalized dashboard', 'Access your account from anywhere'].map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--pat-sky)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })
  }, "Create my account"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, "Already have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600
    }
  }, "Sign in"))))));
}
window.StoreHome = StoreHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StoreHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/brands.js
try { (() => {
/* Brand configurations for the shared Patterson storefront shell.
   Dental and Veterinary run on the same pattern library (v5.7.2);
   only the brand label, categories, hero and catalog differ. */
window.STOREFRONT_BRANDS = {
  dental: {
    key: 'dental',
    name: 'Patterson Dental',
    sub: 'Dental',
    phone: '1.800.873.7683',
    utility: ['Support', 'Resources', 'Blog', 'Advantage Rewards', 'Education'],
    nav: ['Merchandise', 'Equipment & Technology', 'Services', 'Software'],
    flyout: {
      'Merchandise': ['New Arrivals', 'Deals & Promotions', 'Patterson Private Brand', 'Office Supplies', 'Browse by Manufacturer', 'Custom Products & Services'],
      'Equipment & Technology': ['CAD/CAM', '3D Printers', 'Digital Scanners', 'Imaging & X-ray', 'Infection Control', 'Operatory & Chairs'],
      'Services': ['Repair & Support', 'Office Design', 'Financial Services', 'Practice Transitions', 'Multilocation Solutions'],
      'Software': ['Eaglesoft', 'Fuse', 'Dolphin', 'Patient Engagement', 'Revenue Cycle Management', 'Clinical Excellence']
    },
    heroEyebrow: '150,000+ solutions · unmatched support',
    heroTitle: 'Everything your practice needs, from toothbrushes to technology',
    heroBody: 'Find the products, equipment, technology and services your practice needs — then count on our trusted, responsive teams for unwavering support.',
    quickLinks: ['Shop Patterson Brand products', 'Modernize with equipment & technology', 'Patterson software solutions', 'Patterson resource center', 'Connect with a local rep', 'Get Advantage Rewards'],
    products: [{
      name: 'Patterson Topical Anesthetic Gel – 1 oz',
      note: 'Now available in three dye-free flavors',
      tag: 'New',
      tone: 'sky'
    }, {
      name: 'Demi Pro Dental Curing Light – Complete Kit',
      note: 'Cordless, lightweight; built for comfort and control',
      tag: 'Featured',
      tone: 'navy'
    }, {
      name: 'ZenSeal Pro Bioceramic Root Canal Sealer',
      note: 'Less waste, more applications with ZenSave™ Tip',
      tag: 'New',
      tone: 'sky'
    }],
    manufacturers: ['Solventum', 'Dentsply', 'KAVO', 'CandidPro'],
    testimonial: {
      quote: 'Investing in technologies has re-energized our staff, increased referrals and case acceptance, and streamlined our treatment planning.',
      who: 'David Juliani, DDS',
      where: 'Rochester Hills, Michigan'
    },
    legal: '© 2026 Patterson Dental Supply, Inc. All rights reserved.'
  },
  vet: {
    key: 'vet',
    name: 'Patterson Veterinary',
    sub: 'Veterinary',
    phone: '1.800.225.7911',
    utility: ['Support', 'Production Animal', 'Equine', 'Blog', 'Resources', 'Pivetal'],
    nav: ['Merchandise', 'Equipment', 'Software', 'Services'],
    flyout: {
      'Merchandise': ['New Arrivals', 'Deals & Promotions', 'Pivetal Brand', 'Pharmaceuticals', 'Browse by Manufacturer', 'Production Animal'],
      'Equipment': ['Anesthesia', 'Dental', 'Diagnostic Imaging', 'In-House Lab', 'Monitoring', 'Surgical'],
      'Software': ['NaVetor', 'Patient Engagement', 'Practice Management', 'Payments', 'Reminders'],
      'Services': ['Repair & Support', 'Equipment Service', 'Financial Services', 'Practice Solutions', 'Technology']
    },
    heroEyebrow: 'Supplies, equipment & services for every practice',
    heroTitle: 'Helping you care for animals — and run a thriving practice',
    heroBody: 'From everyday essentials and pharmaceuticals to equipment, software and production-animal solutions, we supply veterinarians with the tools and support to deliver exceptional care.',
    quickLinks: ['Shop Pivetal products', 'Equipment & technology', 'Veterinary software solutions', 'Production animal solutions', 'Connect with a rep', 'Resource center'],
    products: [{
      name: 'Pivetal Exam Gloves – Nitrile, 200 ct',
      note: 'Powder-free, textured grip for everyday procedures',
      tag: 'New',
      tone: 'teal'
    }, {
      name: 'NaVetor Cloud Practice Software',
      note: 'Run your whole practice from anywhere',
      tag: 'Featured',
      tone: 'navy'
    }, {
      name: 'Pivetal Vet Wrap – Assorted Colors',
      note: 'Cohesive bandage, strong and breathable',
      tag: 'New',
      tone: 'teal'
    }],
    manufacturers: ['Zoetis', 'Boehringer Ingelheim', 'Merck', 'IDEXX'],
    testimonial: {
      quote: 'Patterson is more than a supplier — their team understands our practice and helps us deliver better care every day.',
      who: 'Dr. Marcus Lane, DVM',
      where: 'Bend, Oregon'
    },
    legal: '© 2026 Patterson Veterinary Supply, Inc. All rights reserved.'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/brands.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Storefront icons — Lucide-style, 2px rounded stroke. */
function SIcon({
  path,
  size = 22,
  stroke = 2,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), path);
}
const SSearch = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))
}));
const SUser = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c0-4 3.5-6 8-6s8 2 8 6"
  }))
}));
const SCart = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "20",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 3h3l2.4 12.4a1.6 1.6 0 0 0 1.6 1.3h8.2a1.6 1.6 0 0 0 1.6-1.3L22 7H6"
  }))
}));
const SChevron = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })
}));
const SArrow = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))
}));
const SMenu = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })
}));
const SPhone = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 4a2 2 0 0 1-2 1.4A14 14 0 0 1 4.6 6 2 2 0 0 1 5 4Z"
  })
}));
const STag = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 11V5a2 2 0 0 1 2-2h6l9 9-8 8-9-9Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "1.4"
  }))
}));
const SAward = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14.5 7 22l5-3 5 3-2-7.5"
  }))
}));
const SHeadset = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 13v-1a8 8 0 0 1 16 0v1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "13",
    width: "4",
    height: "6",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "17.5",
    y: "13",
    width: "4",
    height: "6",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 19a4 4 0 0 1-4 3h-2"
  }))
}));
const SBox = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 7.5 8 4.5 8-4.5M12 12v9"
  }))
}));
const SSparkle = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
  })
}));
Object.assign(window, {
  SIcon,
  SSearch,
  SUser,
  SCart,
  SChevron,
  SArrow,
  SMenu,
  SPhone,
  STag,
  SAward,
  SHeadset,
  SBox,
  SSparkle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
