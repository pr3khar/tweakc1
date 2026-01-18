import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { ColorPickerProps } from "../types/theme";
import { parseColor } from "../utils/colorParser";
import { getDefaultColor } from "../utils/defaultThemeColors";

interface ExtendedColorPickerProps extends ColorPickerProps {
  cssVariable?: string; // CSS variable name (e.g., "--crayon-primary-text")
  mode?: "light" | "dark"; // Current theme mode
}

// Helper to convert any CSS color to hex
function rgbaToHex(color: string): string {
  try {
  const { r, g, b } = parseColor(color);
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
  } catch {
    return "#000000";
  }
}

// Helper to convert hex to rgba
function hexToRgba(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "rgba(0,0,0,1)";

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `rgba(${r},${g},${b},1)`;
}

// Validate if a color string is valid according to browser
function isValidColor(color: string): boolean {
  if (!color) return false;

  // Create a temporary element to test color validity
  const tempElement = document.createElement("div");
  tempElement.style.color = "";
  tempElement.style.color = color;

  // If the browser accepted the color, style.color will be non-empty
  return tempElement.style.color !== "";
}

// Format color for display (shorten if possible)
function formatColorDisplay(color: string): string {
  if (!color) return "";
  // Show shortened version for rgba with 1 or 0.5 alpha
  const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (rgbaMatch) {
    const [, r, g, b, a = "1"] = rgbaMatch;
    return `rgba(${r},${g},${b},${a})`;
  }
  return color;
}

export function ColorPicker({
  value,
  onChange,
  label,
  disabled,
  cssVariable,
  mode = "dark",
}: ExtendedColorPickerProps) {
  const [inputValue, setInputValue] = useState(value || "");
  const [isValid, setIsValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Get the default color for this CSS variable and mode
  const defaultColor = cssVariable ? getDefaultColor(cssVariable, mode) : "";

  // The effective value to display (custom value or default)
  const effectiveValue = value || defaultColor;
  const hexValue = effectiveValue ? rgbaToHex(effectiveValue) : "#000000";
  const displayValue = value ? formatColorDisplay(inputValue) : formatColorDisplay(defaultColor);
  const isUsingDefault = !value && !!defaultColor;
  const isFilled = !!value && value.trim() !== "";

  // Sync input value when external value changes
  useEffect(() => {
    if (value !== inputValue && isValid) {
      setInputValue(value || "");
    }
  }, [value, isValid]);

  const handleTextChange = (newValue: string) => {
    setInputValue(newValue);
    setIsTyping(true);

    // Empty string means reset/clear the color
    if (newValue.trim() === "") {
      setIsValid(true);
      onChange(undefined as any); // Reset to undefined
    } else if (isValidColor(newValue)) {
      setIsValid(true);
      onChange(newValue);
    } else {
      setIsValid(false);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsTyping(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsTyping(false);
    // Reset to last valid value on blur if invalid
    if (!isValid) {
      setInputValue(value || "");
      setIsValid(true);
    }
  };

  let inputClassName = "color-picker__input";
  
  if (!isValid) {
    inputClassName += " color-picker__input--error";
  } else if (isTyping) {
    inputClassName += " color-picker__input--typing";
  } else if (isFocused) {
    inputClassName += " color-picker__input--active";
  } else if (effectiveValue) {
    // Show filled state for any value (custom or default)
    inputClassName += " color-picker__input--filled";
  }

  return (
    <div className="color-picker">
      {label && (
        <label className="color-picker__label">
          {label}
        </label>
      )}
      <div className="color-picker__controls">
        <div className="color-picker__input-wrapper">
          <input
            type="text"
            value={value ? formatColorDisplay(inputValue) : displayValue}
            onChange={(e) => handleTextChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder="rgba(0,0,0,0.5)"
            className={inputClassName}
          />
          {!isValid && (
            <AlertCircle className="color-picker__error-icon" size={16} />
          )}
        </div>
        <div className="color-picker__swatch" style={{ background: effectiveValue || "#ffffff" }}>
          <input
            type="color"
            value={hexValue}
            onChange={(e) => {
              const rgbaColor = hexToRgba(e.target.value);
              onChange(rgbaColor);
              setInputValue(rgbaColor);
              setIsValid(true);
            }}
            disabled={disabled}
            className="color-picker__swatch-input"
          />
        </div>
      </div>
    </div>
  );
}
