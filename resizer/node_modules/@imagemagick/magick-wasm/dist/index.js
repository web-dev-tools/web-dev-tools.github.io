function ti(M) {
  return M instanceof Int8Array || M instanceof Uint8Array || M instanceof Uint8ClampedArray;
}
class Xr {
  fileName;
  data;
  constructor(e, n) {
    this.fileName = e, this.data = n;
  }
}
const qr = {
  XmlResourceFiles: {
    log: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE logmap [
<!ELEMENT logmap (log)+>
<!ELEMENT log (#PCDATA)>
<!ATTLIST log events CDATA #IMPLIED>
<!ATTLIST log output CDATA #IMPLIED>
<!ATTLIST log filename CDATA #IMPLIED>
<!ATTLIST log generations CDATA #IMPLIED>
<!ATTLIST log limit CDATA #IMPLIED>
<!ATTLIST log format CDATA #IMPLIED>
]>
<logmap>
  <log events="None"/>
  <log output="Debug"/>
  <log filename="Magick-%g.log"/>
  <log generations="3"/>
  <log limit="2000"/>
  <log format="%t %r %u %v %d %c[%p]: %m/%f/%l/%d
  %e"/>
</logmap>
`,
    policy: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE policymap [
<!ELEMENT policymap (policy)*>
<!ATTLIST policymap xmlns CDATA #FIXED "">
<!ELEMENT policy EMPTY>
<!ATTLIST policy xmlns CDATA #FIXED "">
<!ATTLIST policy domain NMTOKEN #REQUIRED>
<!ATTLIST policy name NMTOKEN #IMPLIED>
<!ATTLIST policy pattern CDATA #IMPLIED>
<!ATTLIST policy rights NMTOKEN #IMPLIED>
<!ATTLIST policy stealth NMTOKEN #IMPLIED>
<!ATTLIST policy value CDATA #IMPLIED>
]>
<policymap>
  <policy domain="cache" name="shared-secret" value="passphrase"/>
  <policy domain="coder" rights="none" pattern="EPHEMERAL" />
  <policy domain="coder" rights="none" pattern="MVG" />
  <policy domain="coder" rights="none" pattern="MSL" />
  <policy domain="path" rights="none" pattern="@*" />
  <policy domain="path" rights="none" pattern="|*" />
</policymap>
`
  }
};
class ir {
  constructor() {
    this.log = new Xr("log.xml", qr.XmlResourceFiles.log), this.policy = new Xr("policy.xml", qr.XmlResourceFiles.policy);
  }
  /**
   * Gets the default configuration.
   */
  static default = new ir();
  /**
   * Gets all the configuration files.
   */
  *all() {
    yield this.log, yield this.policy;
  }
  /// <summary>
  /// Gets the log configuration.
  /// </summary>
  log;
  /// <summary>
  /// Gets the policy configuration.
  /// </summary>
  policy;
}
class Ot {
  /**
   * Initializes a new instance of the {@link MagickDefine} class.
   * @param format
   * @param name The name of the define.
   * @param value The value of the define.
   */
  constructor(e, n, r) {
    this.format = e, this.name = n, this.value = r;
  }
  /**
   * Gets the format to set the define for.
   */
  format;
  /**
   * Gets the name of the define.
   */
  name;
  /**
   * Gets the value of the define.
   */
  value;
}
class Xs {
  format;
  constructor(e) {
    this.format = e;
  }
  createDefine(e, n) {
    return typeof n == "boolean" ? new Ot(this.format, e, n ? "true" : "false") : typeof n == "string" ? new Ot(this.format, e, n) : new Ot(this.format, e, n.toString());
  }
  hasValue(e) {
    return e != null;
  }
}
class zo {
  _x;
  _y;
  _paintMethod;
  /**
   * Initializes a new instance of the {@link DrawableColor} class.
   * @param x The X coordinate.
   * @param  y The Y coordinate.
   * @param paintMethod The paint method to use.
   */
  constructor(e, n, r) {
    this._x = e, this._y = n, this._paintMethod = r;
  }
  draw(e) {
    e.color(this._x, this._y, this._paintMethod);
  }
}
class qs {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableFillColor} class.
   * @param color The color to use.
   */
  constructor(e) {
    this._color = e;
  }
  draw(e) {
    e.fillColor(this._color);
  }
}
class Ks {
  _opacity;
  /**
   * Initializes a new instance of the {@link DrawableFillOpacity} class.
   * @param opacity The opacity.
   */
  constructor(e) {
    this._opacity = e;
  }
  draw(e) {
    e.fillOpacity(this._opacity.toDouble() / 100);
  }
}
class Qs {
  _pointSize;
  /**
   * Initializes a new instance of the {@link DrawableFontPointSize} class.
   * @param pointSize The point size.
   */
  constructor(e) {
    this._pointSize = e;
  }
  draw(e) {
    e.fontPointSize(this._pointSize);
  }
}
class Js {
  /**
   * Initializes a new instance of the {@link LogEvent} class.
   * @param eventType - The type of the log message.
   * @param message - The log message.
   */
  constructor(e, n) {
    this.eventType = e, this.message = n ?? "";
  }
  /**
   * Gets the type of the log message.
   */
  eventType;
  /**
   * Gets the log message.
   */
  message;
}
const Os = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Enable the image's transparency channel. Note that normally Set should be used instead of
   * this, unless you specifically need to preserve the existing (but specifically turned Off)
   * transparency channel.
   */
  Activate: 1,
  /**
   * Associate the alpha channel with the image.
   */
  Associate: 2,
  /**
   * Set any fully-transparent pixel to the background color, while leaving it fully-transparent.
   * This can make some image file formats, such as PNG, smaller as the RGB values of transparent
   * pixels are more uniform, and thus can compress better.
   */
  Background: 3,
  /**
   * Turns 'On' the alpha/matte channel, then copies the grayscale intensity of the image, into
   * the alpha channel, converting a grayscale mask into a transparent shaped mask ready to be
   * colored appropriately. The color channels are not modified.
   */
  Copy: 4,
  /**
   * Disables the image's transparency channel. This does not delete or change the existing data,
   * it just turns off the use of that data.
   */
  Deactivate: 5,
  /**
   * Discrete.
   */
  Discrete: 6,
  /**
   * Disassociate the alpha channel from the image.
   */
  Disassociate: 7,
  /**
   * Copies the alpha channel values into all the color channels and turns 'Off' the image's
   * transparency, so as to generate a grayscale mask of the image's shape. The alpha channel
   * data is left intact just deactivated. This is the inverse of 'Copy'.
   */
  Extract: 8,
  /**
   * Off.
   */
  Off: 9,
  /**
  * On.
  */
  On: 10,
  /**
   * Enables the alpha/matte channel and forces it to be fully opaque.
   */
  Opaque: 11,
  /**
   * Composite the image over the background color.
   */
  Remove: 12,
  /**
   * Activates the alpha/matte channel. If it was previously turned off then it also
   * resets the channel to opaque. If the image already had the alpha channel turned on,
   * it will have no effect.
   */
  Set: 13,
  /**
   * As per 'Copy' but also colors the resulting shape mask with the current background color.
   * That is the RGB color channels is replaced, with appropriate alpha shape.
   */
  Shape: 14,
  /**
   * Activates the alpha/matte channel and forces it to be fully transparent. This effectively
   * creates a fully transparent image the same size as the original and with all its original
   * RGB data still intact, but fully transparent.
  */
  Transparent: 15,
  /**
   * Removes the alpha channel when the alpha value is opaque for all pixels.
   */
  OffIfOpaque: 16
}, F = {
  /**
   * Red.
   */
  Red: 0,
  /**
   * Cyan.
   */
  Cyan: 0,
  /**
   * Gray.
   */
  Gray: 0,
  /**
   * Green.
   */
  Green: 1,
  /**
   * Magenta.
   */
  Magenta: 1,
  /**
   * Blue.
   */
  Blue: 2,
  /**
   * Yellow.
   */
  Yellow: 2,
  /**
   * Black.
   */
  Black: 3,
  /**
   * Alpha.
   */
  Alpha: 4,
  /**
   * Index.
   */
  Index: 5,
  /**
   * Meta 0.
   */
  Meta0: 10,
  /**
   * Meta 1.
   */
  Meta1: 11,
  /**
   * Meta 2.
   */
  Meta2: 12,
  /**
   * Meta 3.
   */
  Meta3: 13,
  /**
   * Meta 4.
   */
  Meta4: 14,
  /**
   * Meta 5.
   */
  Meta5: 15,
  /**
   * Meta 6.
   */
  Meta6: 16,
  /**
   * Meta 7.
   */
  Meta7: 17,
  /**
   * Meta 8.
   */
  Meta8: 18,
  /**
   * Meta 9.
   */
  Meta9: 19,
  /**
   * Meta 10.
   */
  Meta10: 20,
  /**
   * Meta 11.
   */
  Meta11: 21,
  /**
   * Meta 12.
   */
  Meta12: 22,
  /**
   * Meta 13.
   */
  Meta13: 23,
  /**
   * Meta 14.
   */
  Meta14: 24,
  /**
   * Meta 15.
   */
  Meta15: 25,
  /**
   * Meta 16.
   */
  Meta16: 26,
  /**
   * Meta 17.
   */
  Meta17: 27,
  /**
   * Meta 18.
   */
  Meta18: 28,
  /**
   * Meta 19.
   */
  Meta19: 29,
  /**
   * Meta 20.
   */
  Meta20: 30,
  /**
   * Meta 21.
   */
  Meta21: 31,
  /**
   * Meta 22.
   */
  Meta22: 32,
  /**
   * Meta 23.
   */
  Meta23: 33,
  /**
   * Meta 24.
   */
  Meta24: 34,
  /**
   * Meta 25.
   */
  Meta25: 35,
  /**
   * Meta 26.
   */
  Meta26: 36,
  /**
   * Meta 27.
   */
  Meta27: 37,
  /**
   * Meta 28.
   */
  Meta28: 38,
  /**
   * Meta 29.
   */
  Meta29: 39,
  /**
   * Meta 30.
   */
  Meta30: 40,
  /**
   * Meta 31.
   */
  Meta31: 41,
  /**
   * Meta 32.
   */
  Meta32: 42,
  /**
   * Meta 33.
   */
  Meta33: 43,
  /**
   * Meta 34.
   */
  Meta34: 44,
  /**
   * Meta 35.
   */
  Meta35: 45,
  /**
   * Meta 36.
   */
  Meta36: 46,
  /**
   * Meta 37.
   */
  Meta37: 47,
  /**
   * Meta 38.
   */
  Meta38: 48,
  /**
   * Meta 39.
   */
  Meta39: 49,
  /**
   * Meta 40.
   */
  Meta40: 50,
  /**
   * Meta 41.
   */
  Meta41: 51,
  /**
   * Meta 42.
   */
  Meta42: 52,
  /**
   * Meta 43.
   */
  Meta43: 53,
  /**
   * Meta 44.
   */
  Meta44: 54,
  /**
   * Meta 45.
   */
  Meta45: 55,
  /**
   * Meta 46.
   */
  Meta46: 56,
  /**
   * Meta 47.
   */
  Meta47: 57,
  /**
   * Meta 48.
   */
  Meta48: 58,
  /**
   * Meta 49.
   */
  Meta49: 59,
  /**
   * Meta 50.
   */
  Meta50: 60,
  /**
   * Meta 51.
   */
  Meta51: 61,
  /**
   * Meta 52.
   */
  Meta52: 62,
  /**
   * Composite.
   */
  Composite: 64
}, X = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Red.
   */
  Red: 1,
  /**
   * Gray.
   */
  Gray: 1,
  /**
   * Cyan.
   */
  Cyan: 1,
  /**
   * Green.
   */
  Green: 2,
  /**
   * Magenta.
   */
  Magenta: 2,
  /**
   * Blue.
   */
  Blue: 4,
  /**
   * Yellow.
   */
  Yellow: 4,
  /**
   * Black.
   */
  Black: 8,
  /**
   * Alpha.
   */
  Alpha: 16,
  /**
   * Opacity.
   */
  Opacity: 16,
  /**
   * Index.
   */
  Index: 32,
  /**
   * Composite.
   */
  Composite: 31,
  /**
   * TrueAlpha.
   */
  TrueAlpha: 256,
  /**
   * RGB.
   */
  get RGB() {
    return this.Red | this.Green | this.Blue;
  },
  /**
   * CMYK.
   */
  get CMYK() {
    return this.Cyan | this.Magenta | this.Yellow | this.Black;
  },
  /**
   * CMYKA.
   */
  get CMYKA() {
    return this.Cyan | this.Magenta | this.Yellow | this.Black | this.Alpha;
  },
  /**
   * Meta 0
   */
  Meta0: 1 << F.Meta0,
  /**
   * Meta 1
   */
  Meta1: 1 << F.Meta1,
  /**
   * Meta 2
   */
  Meta2: 1 << F.Meta2,
  /**
   * Meta 3
   */
  Meta3: 1 << F.Meta3,
  /**
   * Meta 4
   */
  Meta4: 1 << F.Meta4,
  /**
   * Meta 5
   */
  Meta5: 1 << F.Meta5,
  /**
   * Meta 6
   */
  Meta6: 1 << F.Meta6,
  /**
   * Meta 7
   */
  Meta7: 1 << F.Meta7,
  /**
   * Meta 8
   */
  Meta8: 1 << F.Meta8,
  /**
   * Meta 9
   */
  Meta9: 1 << F.Meta9,
  /**
   * Meta 10
   */
  Meta10: 1 << F.Meta10,
  /**
   * Meta 11
   */
  Meta11: 1 << F.Meta11,
  /**
   * Meta 12
   */
  Meta12: 1 << F.Meta12,
  /**
   * Meta 13
   */
  Meta13: 1 << F.Meta13,
  /**
   * Meta 14
   */
  Meta14: 1 << F.Meta14,
  /**
   * Meta 15
   */
  Meta15: 1 << F.Meta15,
  /**
   * Meta 16
   */
  Meta16: 1 << F.Meta16,
  /**
   * Meta 17
   */
  Meta17: 1 << F.Meta17,
  /**
   * Meta 18
   */
  Meta18: 1 << F.Meta18,
  /**
   * Meta 19
   */
  Meta19: 1 << F.Meta19,
  /**
   * Meta 20
   */
  Meta20: 1 << F.Meta20,
  /**
   * Meta 21
   */
  Meta21: 1 << F.Meta21,
  /**
   * All.
   */
  All: 134217727
};
class Zs {
  constructor(e, n, r, l) {
    this.red = e, this.green = n, this.blue = r, this.white = l;
  }
  /**
   * Gets the chromaticity red primary point.
   */
  red;
  /**
   * Gets the chromaticity green primary point.
   */
  green;
  /**
   * Gets the chromaticity blue primary point.
   */
  blue;
  /**
   * Gets the chromaticity white primary point.
   */
  white;
}
const D = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * CMY.
   */
  CMY: 1,
  /**
   * CMYK.
   */
  CMYK: 2,
  /**
   * Gray.
   */
  Gray: 3,
  /**
   * HCL.
   */
  HCL: 4,
  /**
   * HCLp.
   */
  HCLp: 5,
  /**
   * HSB.
   */
  HSB: 6,
  /**
   * HSI.
   */
  HSI: 7,
  /**
   * HSL.
   */
  HSL: 8,
  /**
   * HSV.
   */
  HSV: 9,
  /**
   * HWB.
   */
  HWB: 10,
  /**
   * Lab
   */
  Lab: 11,
  /**
   * LCH.
   */
  LCH: 12,
  /**
   * LCHab.
   */
  LCHab: 13,
  /**
   * LCHuv.
   */
  LCHuv: 14,
  /**
   * Log.
   */
  Log: 15,
  /**
   * LMS.
   */
  LMS: 16,
  /**
   * Luv.
   */
  Luv: 17,
  /**
   * OHTA.
   */
  OHTA: 18,
  /**
   * Rec601YCbCr.
   */
  Rec601YCbCr: 19,
  /**
   * Rec709YCbCr.
   */
  Rec709YCbCr: 20,
  /**
   * RGB.
   */
  RGB: 21,
  /**
   * scRGB.
   */
  scRGB: 22,
  /**
   * sRGB.
   */
  sRGB: 23,
  /**
   * Transparent.
   */
  Transparent: 24,
  /**
   * XyY.
   */
  XyY: 25,
  /**
   * XYZ.
   */
  XYZ: 26,
  /**
   * YCbCr.
   */
  YCbCr: 27,
  /**
   * YCC.
   */
  YCC: 28,
  /**
   * YDbDr.
   */
  YDbDr: 29,
  /**
   * YIQ.
   */
  YIQ: 30,
  /**
   * YPbPr.
   */
  YPbPr: 31,
  /**
   * YUV.
   */
  YUV: 32,
  /**
   * LinearGray.
   */
  LinearGray: 33,
  /**
   * Jzazbz.
   */
  Jzazbz: 34,
  /**
   * DisplayP3.
   */
  DisplayP3: 35,
  /**
   * Adobe98.
   */
  Adobe98: 36,
  /**
   * ProPhoto.
   */
  ProPhoto: 37,
  /**
   * Oklab.
   */
  Oklab: 38,
  /**
   * Oklch.
   */
  Oklch: 39,
  /**
   * CAT02LMS.
   */
  CAT02LMSC: 40
}, Kr = {
  [D.Undefined]: "Undefined",
  [D.CMY]: "CMY",
  [D.CMYK]: "CMYK",
  [D.Gray]: "Gray",
  [D.HCL]: "HCL",
  [D.HCLp]: "HCLp",
  [D.HSB]: "HSB",
  [D.HSI]: "HSI",
  [D.HSL]: "HSL",
  [D.HSV]: "HSV",
  [D.HWB]: "HWB",
  [D.Lab]: "Lab",
  [D.LCH]: "LCH",
  [D.LCHab]: "LCHab",
  [D.LCHuv]: "LCHuv",
  [D.Log]: "Log",
  [D.LMS]: "LMS",
  [D.Luv]: "Luv",
  [D.OHTA]: "OHTA",
  [D.Rec601YCbCr]: "Rec601YCbCr",
  [D.Rec709YCbCr]: "Rec709YCbCr",
  [D.RGB]: "RGB",
  [D.scRGB]: "scRGB",
  [D.sRGB]: "sRGB",
  [D.Transparent]: "Transparent",
  [D.XyY]: "XyY",
  [D.XYZ]: "XYZ",
  [D.YCbCr]: "YCbCr",
  [D.YCC]: "YCC",
  [D.YDbDr]: "YDbDr",
  [D.YIQ]: "YIQ",
  [D.YPbPr]: "YPbPr",
  [D.YUV]: "YUV",
  [D.LinearGray]: "LinearGray",
  [D.Jzazbz]: "Jzazbz",
  [D.DisplayP3]: "DisplayP3",
  [D.Adobe98]: "Adobe98",
  [D.ProPhoto]: "ProPhoto",
  [D.Oklab]: "Oklab",
  [D.Oklch]: "Oklch",
  [D.CAT02LMSC]: "CAT02LMS"
};
class eo {
  colorSpace = D.Undefined;
  copyright = null;
  description = null;
  manufacturer = null;
  model = null;
}
class to {
  _data;
  _index;
  constructor(e) {
    this._data = e, this._index = 0, this.isLittleEndian = !1;
  }
  get index() {
    return this._index;
  }
  isLittleEndian;
  readLong() {
    return this.canRead(4) ? this.isLittleEndian ? this.readLongLSB() : this.readLongMSB() : null;
  }
  readString(e) {
    if (e == 0)
      return "";
    if (!this.canRead(e))
      return null;
    let r = new TextDecoder("utf-8").decode(this._data.subarray(this._index, this._index + e));
    const l = r.indexOf("\0");
    return l != -1 && (r = r.substring(0, l)), this._index += e, r;
  }
  seek(e) {
    return e >= this._data.length ? !1 : (this._index = e, !0);
  }
  skip(e) {
    return this._index + e >= this._data.length ? !1 : (this._index += e, !0);
  }
  canRead(e) {
    return e > this._data.length ? !1 : this._index + e <= this._data.length;
  }
  readLongLSB() {
    let e = this._data[this._index];
    return e |= this._data[this._index + 1] << 8, e |= this._data[this._index + 2] << 16, e |= this._data[this._index + 3] << 24, this._index += 4, e;
  }
  readLongMSB() {
    let e = this._data[this._index] << 24;
    return e |= this._data[this._index + 1] << 16, e |= this._data[this._index + 2] << 8, e |= this._data[this._index + 3], this._index += 4, e;
  }
}
class nr {
  _data = new eo();
  _reader;
  constructor(e) {
    this._reader = new to(e);
  }
  static read(e) {
    const n = new nr(e);
    return n.readColorSpace(), n.readTagTable(), n._data;
  }
  readColorSpace() {
    this._reader.seek(16);
    const e = this._reader.readString(4);
    e != null && (this._data.colorSpace = this.determineColorSpace(e.trimEnd()));
  }
  determineColorSpace(e) {
    switch (e) {
      case "CMY":
        return D.CMY;
      case "CMYK":
        return D.CMYK;
      case "GRAY":
        return D.Gray;
      case "HSL":
        return D.HSL;
      case "HSV":
        return D.HSV;
      case "Lab":
        return D.Lab;
      case "Luv":
        return D.Luv;
      case "RGB":
        return D.sRGB;
      case "XYZ":
        return D.XYZ;
      case "YCbr":
        return D.YCbCr;
      default:
        return D.Undefined;
    }
  }
  readTagTable() {
    if (!this._reader.seek(128))
      return;
    const e = this._reader.readLong();
    if (e != null)
      for (let n = 0; n < e; n++)
        switch (this._reader.readLong()) {
          case 1668313716:
            this._data.copyright = this.readTag();
            break;
          case 1684370275:
            this._data.description = this.readTag();
            break;
          case 1684893284:
            this._data.manufacturer = this.readTag();
            break;
          case 1684890724:
            this._data.model = this.readTag();
            break;
          default:
            this._reader.skip(8);
            break;
        }
  }
  readTag() {
    const e = this._reader.readLong(), n = this._reader.readLong();
    if (e === null || n === null)
      return null;
    const r = this._reader.index;
    if (!this._reader.seek(e))
      return null;
    const l = this.readTagValue(n);
    return this._reader.seek(r), l;
  }
  readTagValue(e) {
    switch (this._reader.readString(4)) {
      case "desc":
        return this.readTextDescriptionTypeValue();
      case "text":
        return this.readTextTypeValue(e);
      default:
        return null;
    }
  }
  readTextDescriptionTypeValue() {
    if (!this._reader.skip(4))
      return null;
    const e = this._reader.readLong();
    return e == null ? null : this._reader.readString(e);
  }
  readTextTypeValue(e) {
    return this._reader.skip(4) ? this._reader.readString(e) : null;
  }
}
class ri {
  constructor(e, n) {
    this.name = e, this.data = n;
  }
  name;
  data;
}
class ro extends ri {
  _data;
  constructor(e) {
    super("icc", e);
  }
  /**
   * Gets the color space of the profile.
   */
  get colorSpace() {
    return this.initialize(), this._data.colorSpace;
  }
  /**
   * Gets the copyright of the profile.
   */
  get copyright() {
    return this.initialize(), this._data.copyright;
  }
  /**
   * Gets the description of the profile.
   */
  get description() {
    return this.initialize(), this._data.description;
  }
  /**
   * Gets the manufacturer of the profile.
   */
  get manufacturer() {
    return this.initialize(), this._data.manufacturer;
  }
  /**
   * Gets the model of the profile.
   */
  get model() {
    return this.initialize(), this._data.model;
  }
  initialize() {
    this._data || (this._data = nr.read(this.data));
  }
}
const Qr = {
  /**
   * High resolution (double).
   */
  HighRes: 0,
  /**
   * Quantum.
   */
  Quantum: 1
};
class ar {
  constructor(e, n) {
    this.distortion = e, this.difference = n;
  }
  /**
   * Gets the difference image.
   */
  difference;
  /**
   * Gets the distortion.
   */
  distortion;
  /** @internal */
  static _create(e, n) {
    return new ar(e, n);
  }
}
class io {
  constructor(e) {
    this.metric = e;
  }
  /**
   * Gets the distortion method to use.
   */
  metric;
  /**
   * Gets or sets the color that emphasize pixel differences.
   */
  highlightColor;
  /**
   * Gets or sets the color that de-emphasize pixel differences.
   */
  lowlightColor;
  /**
   * Gets or sets the color of pixels that are inside the read mask.
   */
  masklightColor;
  /** @internal */
  _setArtifacts(e) {
    this.highlightColor !== void 0 && e.setArtifact("compare:highlight-color", this.highlightColor), this.lowlightColor !== void 0 && e.setArtifact("compare:lowlight-color", this.lowlightColor), this.masklightColor !== void 0 && e.setArtifact("compare:masklight-color", this.masklightColor);
  }
}
const Zt = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Alpha.
   */
  Alpha: 1,
  /**
   * Atop.
   */
  Atop: 2,
  /**
   * Blend.
   */
  Blend: 3,
  /**
   * Blur.
   */
  Blur: 4,
  /**
   * Bumpmap.
   */
  Bumpmap: 5,
  /**
   * Change mask.
   */
  ChangeMask: 6,
  /**
   * Clear.
   */
  Clear: 7,
  /**
   * Color burn.
   */
  ColorBurn: 8,
  /**
   * Color dodge.
   */
  ColorDodge: 9,
  /**
   * Colorize.
   */
  Colorize: 10,
  /**
   * Copy black.
   */
  CopyBlack: 11,
  /**
   * Copy blue.
   */
  CopyBlue: 12,
  /**
   * Copy.
   */
  Copy: 13,
  /**
   * Copy cyan.
   */
  CopyCyan: 14,
  /**
   * Copy green.
   */
  CopyGreen: 15,
  /**
   * Copy magenta.
   */
  CopyMagenta: 16,
  /**
   * Copy alpha.
   */
  CopyAlpha: 17,
  /**
   * Copy red.
   */
  CopyRed: 18,
  /**
   * Copy yellow.
   */
  CopyYellow: 19,
  /**
   * Darken.
   */
  Darken: 20,
  /**
   * Darken intensity.
   */
  DarkenIntensity: 21,
  /**
   * Difference.
   */
  Difference: 22,
  /**
   * Displace.
   */
  Displace: 23,
  /**
   * Dissolve.
   */
  Dissolve: 24,
  /**
   * Distort.
   */
  Distort: 25,
  /**
   * Divide dst.
   */
  DivideDst: 26,
  /**
   * Divide src.
   */
  DivideSrc: 27,
  /**
   * Dst atop.
   */
  DstAtop: 28,
  /**
   * Dst.
   */
  Dst: 29,
  /**
   * Dst in.
   */
  DstIn: 30,
  /**
   * Dst out.
   */
  DstOut: 31,
  /**
   * Dst over.
   */
  DstOver: 32,
  /**
   * Exclusion.
   */
  Exclusion: 33,
  /**
   * Hard light.
   */
  HardLight: 34,
  /**
   * Hard mix.
   */
  HardMix: 35,
  /**
   * Hue.
   */
  Hue: 36,
  /**
   * In.
   */
  In: 37,
  /**
   * Intensity.
   */
  Intensity: 38,
  /**
   * Lighten.
   */
  Lighten: 39,
  /**
   * Lighten intensity.
   */
  LightenIntensity: 40,
  /**
   * Linear burn.
   */
  LinearBurn: 41,
  /**
   * Linear dodge.
   */
  LinearDodge: 42,
  /**
   * Linear light.
   */
  LinearLight: 43,
  /**
   * Luminize.
   */
  Luminize: 44,
  /**
   * Mathematics.
   */
  Mathematics: 45,
  /**
   * Minus dst.
   */
  MinusDst: 46,
  /**
   * Minus src.
   */
  MinusSrc: 47,
  /**
   * Modulate.
   */
  Modulate: 48,
  /**
   * Modulus add.
   */
  ModulusAdd: 49,
  /**
   * Modulus subtract.
   */
  ModulusSubtract: 50,
  /**
   * Multiply.
   */
  Multiply: 51,
  /**
   * No.
   */
  No: 52,
  /**
   * Out.
   */
  Out: 53,
  /**
   * Over.
   */
  Over: 54,
  /**
   * Overlay.
   */
  Overlay: 55,
  /**
   * Pegtop light.
   */
  PegtopLight: 56,
  /**
   * Pin light.
   */
  PinLight: 57,
  /**
   * Plus.
   */
  Plus: 58,
  /**
   * Replace.
   */
  Replace: 59,
  /**
   * Saturate.
   */
  Saturate: 60,
  /**
   * Screen.
   */
  Screen: 61,
  /**
   * Soft light.
   */
  SoftLight: 62,
  /**
   * Src atop.
   */
  SrcAtop: 63,
  /**
   * Src.
   */
  Src: 64,
  /**
   * Src in.
   */
  SrcIn: 65,
  /**
   * Src out.
   */
  SrcOut: 66,
  /**
   * Src over.
   */
  SrcOver: 67,
  /**
   * Threshold.
   */
  Threshold: 68,
  /**
   * Vivid light.
   */
  VividLight: 69,
  /**
   * Xor.
   */
  Xor: 70,
  /**
   * Stereo.
   */
  Stereo: 71,
  /**
   * Freeze.
   */
  Freeze: 72,
  /**
   * Interpolate.
   */
  Interpolate: 73,
  /**
   * Negate.
   */
  Negate: 74,
  /**
   * Reflect.
   */
  Reflect: 75,
  /**
   * Soft burn.
   */
  SoftBurn: 76,
  /**
   * Soft dodge.
   */
  SoftDodge: 77,
  /**
   * Stamp.
   */
  Stamp: 78,
  /**
   * Root-mean-square error.
   */
  RMSE: 79,
  /**
   * Saliency blend.
   */
  SaliencyBlend: 80,
  /**
   * Seamless blend.
   */
  SeamlessBlend: 81
}, er = {
  /**
   * Warning.
   */
  Warning: 300,
  /**
   * Resource limit warning.
   */
  ResourceLimitWarning: 300,
  /**
   * Type warning.
   */
  TypeWarning: 305,
  /**
   * Option warning.
   */
  OptionWarning: 310,
  /**
   * Delegate warning.
   */
  DelegateWarning: 315,
  /**
   * Missing delegate warning.
   */
  MissingDelegateWarning: 320,
  /**
   * Corrupt image warning.
   */
  CorruptImageWarning: 325,
  /**
   * File open warning.
   */
  FileOpenWarning: 330,
  /**
   * Blob warning.
   */
  BlobWarning: 335,
  /**
   * Stream warning.
   */
  StreamWarning: 340,
  /**
   * Cache warning.
   */
  CacheWarning: 345,
  /**
   * Coder warning.
   */
  CoderWarning: 350,
  /**
   * Filter warning.
   */
  FilterWarning: 352,
  /**
   * Module warning.
   */
  ModuleWarning: 355,
  /**
   * Draw warning.
   */
  DrawWarning: 360,
  /**
   * Image warning.
   */
  ImageWarning: 365,
  /**
   * Wand warning.
   */
  WandWarning: 370,
  /**
   * Random warning.
   */
  RandomWarning: 375,
  /**
   * X server warning.
   */
  XServerWarning: 380,
  /**
   * Monitor warning.
   */
  MonitorWarning: 385,
  /**
   * Registry warning.
   */
  RegistryWarning: 390,
  /**
   * Configure warning.
   */
  ConfigureWarning: 395,
  /**
   * Policy warning.
   */
  PolicyWarning: 399,
  /**
   * Error.
   */
  Error: 400,
  /**
   * Resource limit error.
   */
  ResourceLimitError: 400,
  /**
   * Type error.
   */
  TypeError: 405,
  /**
   * Option error.
   */
  OptionError: 410,
  /**
   * Delegate error.
   */
  DelegateError: 415,
  /**
   * Missing delegate error.
   */
  MissingDelegateError: 420,
  /**
   * Corrupt image error.
   */
  CorruptImageError: 425,
  /**
   * File open error.
   */
  FileOpenError: 430,
  /**
   * Blob error.
   */
  BlobError: 435,
  /**
   * Stream error.
   */
  StreamError: 440,
  /**
   * Cache error.
   */
  CacheError: 445,
  /**
   * Coder error.
   */
  CoderError: 450,
  /**
   * Filter error.
   */
  FilterError: 452,
  /**
   * Module error.
   */
  ModuleError: 455,
  /**
   * Draw error.
   */
  DrawError: 460,
  /**
   * Image error.
   */
  ImageError: 465,
  /**
   * Wand error.
   */
  WandError: 470,
  /**
   * Random error.
   */
  RandomError: 475,
  /**
   * X server error.
   */
  XServerError: 480,
  /**
   * Monitor error.
   */
  MonitorError: 485,
  /**
   * Registry error.
   */
  RegistryError: 490,
  /**
   * Configure error.
   */
  ConfigureError: 495,
  /**
   * Policy error.
   */
  PolicyError: 499
};
class U extends Error {
  _relatedErrors = [];
  /** @internal */
  constructor(e, n = er.Error) {
    super(e), this.severity = n;
  }
  /**
   * Gets the severity of an exception.
   */
  severity;
  /**
   * Gets the exceptions that are related to this exception.
   */
  get relatedErrors() {
    return this._relatedErrors;
  }
  /** @internal */
  _setRelatedErrors(e) {
    this._relatedErrors = e;
  }
}
class je {
  /**
   * Gets the quantum depth.
   */
  static get depth() {
    return _._api._Quantum_Depth_Get();
  }
  /**
   * Gets the maximum value of the quantum.
   */
  static get max() {
    return _._api._Quantum_Max_Get();
  }
}
function ge(M, e) {
  return M === 0 ? e ?? null : _._api.UTF8ToString(M);
}
function no(M, e) {
  const n = ge(e);
  return M._MagickMemory_Relinquish(e), n;
}
function tr(M, e, n) {
  const r = M.lengthBytesUTF8(e) + 1, l = M._malloc(r);
  try {
    return M.stringToUTF8(e, l, r), n(l);
  } finally {
    M._free(l);
  }
}
function A(M, e) {
  return M === null ? e(0) : tr(_._api, M, e);
}
class k {
  constructor(e, n, r, l, d) {
    if (e !== void 0)
      if (typeof e == "string") {
        let p = 0;
        try {
          p = _._api._MagickColor_Create(), A(e, (v) => {
            if (_._api._MagickColor_Initialize(p, v) === 0)
              throw new U("invalid color specified");
            this.initialize(p);
          });
        } finally {
          _._api._free(p);
        }
      } else
        this.r = e, this.g = n ?? 0, this.b = r ?? 0, d === void 0 ? this.a = l ?? je.max : (this.k = l ?? 0, this.a = d, this.isCmyk = !0);
  }
  r = 0;
  g = 0;
  b = 0;
  a = 0;
  k = 0;
  isCmyk = !1;
  /** @internal */
  static _create(e) {
    const n = new k();
    return n.initialize(e), n;
  }
  toShortString() {
    return this.a !== je.max ? this.toString() : this.isCmyk ? `cmyka(${this.r},${this.g},${this.b},${this.k})` : `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(this.b)}`;
  }
  toString() {
    return this.isCmyk ? `cmyka(${this.r},${this.g},${this.b},${this.k},${(this.a / je.max).toFixed(4)})` : `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(this.b)}${this.toHex(this.a)}`;
  }
  /** @internal */
  _use(e) {
    let n = 0;
    try {
      n = _._api._MagickColor_Create(), _._api._MagickColor_Red_Set(n, this.r), _._api._MagickColor_Green_Set(n, this.g), _._api._MagickColor_Blue_Set(n, this.b), _._api._MagickColor_Alpha_Set(n, this.a), _._api._MagickColor_IsCMYK_Set(n, this.isCmyk ? 1 : 0), e(n);
    } finally {
      _._api._free(n);
    }
  }
  initialize(e) {
    this.r = _._api._MagickColor_Red_Get(e), this.g = _._api._MagickColor_Green_Get(e), this.b = _._api._MagickColor_Blue_Get(e), this.a = _._api._MagickColor_Alpha_Get(e), this.isCmyk = _._api._MagickColor_IsCMYK_Get(e) === 1;
  }
  toHex(e) {
    return e.toString(16).padStart(2, "0");
  }
}
var Ie = /* @__PURE__ */ ((M) => (M[M.NoValue = 0] = "NoValue", M[M.PercentValue = 4096] = "PercentValue", M[M.IgnoreAspectRatio = 8192] = "IgnoreAspectRatio", M[M.Less = 16384] = "Less", M[M.Greater = 32768] = "Greater", M[M.FillArea = 65536] = "FillArea", M[M.LimitPixels = 131072] = "LimitPixels", M[M.AspectRatio = 1048576] = "AspectRatio", M))(Ie || {});
class ne {
  _includeXyInToString;
  _width = 0;
  _height = 0;
  _x = 0;
  _y = 0;
  _aspectRatio = !1;
  _fillArea = !1;
  _greater = !1;
  _isPercentage = !1;
  _ignoreAspectRatio = !1;
  _less = !1;
  _limitPixels = !1;
  constructor(e, n, r, l) {
    if (typeof e == "number") {
      if (r !== void 0 && l !== void 0 ? (this._width = r, this._height = l, this._x = e, this._y = n ?? 0, this._includeXyInToString = !0) : (this._width = e, this._height = n ?? this._width, this._x = 0, this._y = 0, this._includeXyInToString = !1), this._width < 0)
        throw new U("negative width is not allowed");
      if (this._height < 0)
        throw new U("negative height is not allowed");
    } else {
      this._includeXyInToString = e.indexOf("+") >= 0 || e.indexOf("-") >= 0;
      const d = _._api._MagickGeometry_Create();
      try {
        A(e, (p) => {
          const v = _._api._MagickGeometry_Initialize(d, p);
          if (v === Ie.NoValue)
            throw new U("invalid geometry specified");
          this.hasFlag(v, Ie.AspectRatio) ? this.initializeFromAspectRation(d, e) : this.initialize(d, v);
        });
      } finally {
        _._api._MagickGeometry_Dispose(d);
      }
    }
  }
  get aspectRatio() {
    return this._aspectRatio;
  }
  get fillArea() {
    return this._fillArea;
  }
  set fillArea(e) {
    this._fillArea = e;
  }
  get greater() {
    return this._greater;
  }
  set greater(e) {
    this._greater = e;
  }
  get height() {
    return this._height;
  }
  set height(e) {
    this._height = e;
  }
  get ignoreAspectRatio() {
    return this._ignoreAspectRatio;
  }
  set ignoreAspectRatio(e) {
    this._ignoreAspectRatio = e;
  }
  get isPercentage() {
    return this._isPercentage;
  }
  set isPercentage(e) {
    this._isPercentage = e;
  }
  get less() {
    return this._less;
  }
  set less(e) {
    this._less = e;
  }
  get limitPixels() {
    return this._limitPixels;
  }
  set limitPixels(e) {
    this._limitPixels = e;
  }
  get width() {
    return this._width;
  }
  set width(e) {
    this._width = e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
  }
  toString() {
    if (this._aspectRatio)
      return this._width + ":" + this._height;
    let e = "";
    return this._width == 0 && this._height == 0 ? e += "0x0" : (this._width > 0 && (e += this._width.toString()), this._height > 0 ? e += "x" + this._height.toString() : e += "x"), (this._x != 0 || this._y != 0 || this._includeXyInToString) && (this._x >= 0 && (e += "+"), e += this._x, this.y >= 0 && (e += "+"), e += this.y), this._fillArea && (e += "^"), this._greater && (e += ">"), this._isPercentage && (e += "%"), this._ignoreAspectRatio && (e += "!"), this._less && (e += "<"), this._limitPixels && (e += "@"), e;
  }
  /** @internal */
  static _fromRectangle(e) {
    if (e === 0)
      throw new U("unable to allocate memory");
    try {
      const n = _._api._MagickRectangle_Width_Get(e), r = _._api._MagickRectangle_Height_Get(e), l = _._api._MagickRectangle_X_Get(e), d = _._api._MagickRectangle_Y_Get(e);
      return new ne(l, d, n, r);
    } finally {
      _._api._MagickRectangle_Dispose(e);
    }
  }
  /** @internal */
  _toRectangle(e) {
    const n = _._api._MagickRectangle_Create();
    if (n === 0)
      throw new U("unable to allocate memory");
    try {
      return _._api._MagickRectangle_Width_Set(n, this._width), _._api._MagickRectangle_Height_Set(n, this._height), _._api._MagickRectangle_X_Set(n, this._x), _._api._MagickRectangle_Y_Set(n, this._y), e(n);
    } finally {
      _._api._MagickRectangle_Dispose(n);
    }
  }
  initialize(e, n) {
    this._width = _._api._MagickGeometry_Width_Get(e), this._height = _._api._MagickGeometry_Height_Get(e), this._x = _._api._MagickGeometry_X_Get(e), this._y = _._api._MagickGeometry_Y_Get(e), this._ignoreAspectRatio = this.hasFlag(n, Ie.IgnoreAspectRatio), this._isPercentage = this.hasFlag(n, Ie.PercentValue), this._fillArea = this.hasFlag(n, Ie.FillArea), this._greater = this.hasFlag(n, Ie.Greater), this._less = this.hasFlag(n, Ie.Less), this._limitPixels = this.hasFlag(n, Ie.LimitPixels);
  }
  initializeFromAspectRation(e, n) {
    this._aspectRatio = !0;
    const r = n.split(":");
    this._width = this.parseNumber(r[0]), this._height = this.parseNumber(r[1]), this._x = _._api._MagickGeometry_X_Get(e), this._y = _._api._MagickGeometry_Y_Get(e);
  }
  parseNumber(e) {
    let n = 0;
    for (; n < e.length && !this.isNumber(e[n]); )
      n++;
    const r = n;
    for (; n < e.length && this.isNumber(e[n]); )
      n++;
    return parseInt(e.substr(r, n - r));
  }
  isNumber(e) {
    return e >= "0" && e <= "9";
  }
  hasFlag(e, n) {
    return (e & n) === n;
  }
}
class Pe {
  constructor(e, n) {
    this.x = e, this.y = n ?? e;
  }
  /**
   * Gets the x-coordinate of this point.
   */
  x;
  /**
   * Gets the y-coordinate of this point.
   */
  y;
  /** @internal */
  static _create(e) {
    return e === 0 ? new Pe(0, 0) : new Pe(_._api._PointInfo_X_Get(e), _._api._PointInfo_Y_Get(e));
  }
}
class sr {
  constructor(e) {
    this.area = _._api._ConnectedComponent_GetArea(e), this.centroid = Pe._create(_._api._ConnectedComponent_GetCentroid(e)), this.color = k._create(_._api._ConnectedComponent_GetColor(e)), this.height = _._api._ConnectedComponent_GetHeight(e), this.id = _._api._ConnectedComponent_GetId(e), this.width = _._api._ConnectedComponent_GetWidth(e), this.x = _._api._ConnectedComponent_GetX(e), this.y = _._api._ConnectedComponent_GetY(e);
  }
  /**
   * The pixel count of the area.
   */
  area;
  /**
   * The centroid of the area.
   */
  centroid;
  /**
   * The color of the area.
   */
  color;
  /**
   * The height of the area.
   */
  height;
  /**
   * The id of the area.
   */
  id;
  /**
   * The width of the area.
   */
  width;
  /**
   * The X offset from origin.
   */
  x;
  /**
   * The Y offset from origin.
   */
  y;
  /** @internal */
  static _create(e, n) {
    const r = [];
    if (e === 0)
      return r;
    for (let l = 0; l < n; l++) {
      const d = _._api._ConnectedComponent_GetInstance(e, l);
      d === 0 || _._api._ConnectedComponent_GetArea(d) < Number.EPSILON || r.push(new sr(d));
    }
    return r;
  }
  /**
   * Returns the geometry of the area of the connected component.
   */
  toGeometry() {
    return new ne(this.x, this.y, this.width, this.height);
  }
}
class ao {
  /**
   * The threshold that merges any object not within the min and max angle
   * threshold.
   **/
  angleThreshold;
  /**
   * The threshold that eliminates small objects by merging them with their
   * larger neighbors.
   */
  areaThreshold;
  /**
   * The threshold that merges any object not within the min and max
   * circularity threshold.
   */
  circularityThreshold;
  /**
   * The number of neighbors to visit (4 or 8).
   */
  connectivity;
  /**
   * The threshold that merges any object not within the min and max diameter
   * threshold.
   */
  diameterThreshold;
  /**
   * The threshold that merges any object not within the min and max
   * eccentricity threshold.
   */
  eccentricityThreshold;
  /**
   * The threshold that merges any object not within the min and max ellipse
   * major threshold.
   */
  majorAxisThreshold;
  /**
   * Whether the object color in the component labeled image will be replaced
   * with the mean color from the source image (defaults to grayscale).
   */
  meanColor;
  /**
   * The threshold that merges any object not within the min and max ellipse
   * minor threshold.
   */
  minorAxisThreshold;
  /**
   * The threshold that merges any object not within the min and max perimeter
   * threshold.
   */
  perimeterThreshold;
  constructor(e) {
    this.connectivity = e;
  }
  /** @internal */
  _setArtifacts(e) {
    this.angleThreshold !== void 0 && e.setArtifact("connected-components:angle-threshold", this.angleThreshold.toString()), this.areaThreshold !== void 0 && e.setArtifact("connected-components:area-threshold", this.areaThreshold.toString()), this.circularityThreshold !== void 0 && e.setArtifact("connected-components:circularity-threshold", this.circularityThreshold.toString()), this.diameterThreshold !== void 0 && e.setArtifact("connected-components:diameter-threshold", this.diameterThreshold.toString()), this.eccentricityThreshold !== void 0 && e.setArtifact("connected-components:eccentricity-threshold", this.eccentricityThreshold.toString()), this.majorAxisThreshold !== void 0 && e.setArtifact("connected-components:major-axis-threshold", this.majorAxisThreshold.toString()), this.meanColor !== void 0 && e.setArtifact("connected-components:mean-color", this.meanColor.toString()), this.minorAxisThreshold !== void 0 && e.setArtifact("connected-components:minor-axis-threshold", this.minorAxisThreshold.toString()), this.perimeterThreshold !== void 0 && e.setArtifact("connected-components:perimeter-threshold", this.perimeterThreshold.toString());
  }
}
const He = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Pixels per inch.
   */
  PixelsPerInch: 1,
  /**
   * Pixels per centimeter.
   */
  PixelsPerCentimeter: 2
};
class et {
  constructor(e, n, r) {
    n === void 0 ? (this.x = e, this.y = e, this.units = He.PixelsPerInch) : r !== void 0 ? (this.x = e, this.y = n, this.units = r) : (this.x = e, this.y = e, this.units = n);
  }
  /**
   * Gets the x resolution.
   */
  x;
  /**
   * Gets the y resolution.
   */
  y;
  /**
   * Gets the units.
   */
  units;
  /**
   * Returns a string that represents the current {@link Density} object.
   */
  toString(e) {
    return e == this.units || e === He.Undefined || e === void 0 ? et.toString(this.x, this.y, e ?? He.Undefined) : this.units == He.PixelsPerCentimeter && e == He.PixelsPerInch ? et.toString(this.x * 2.54, this.y * 2.54, e) : et.toString(this.x / 2.54, this.y / 2.54, e);
  }
  static toString(e, n, r) {
    let l = `${e}x${n}`;
    switch (r) {
      case He.PixelsPerCentimeter:
        l += "cm";
        break;
      case He.PixelsPerInch:
        l += "inch";
        break;
    }
    return l;
  }
}
class ce {
  static _disposeAfterExecution(e, n) {
    try {
      const r = n(e);
      return r instanceof Promise ? Promise.resolve(r).then((l) => (e.dispose(), ce.checkResult(e, l), l)) : (e.dispose(), ce.checkResult(e, r), r);
    } catch (r) {
      throw e.dispose(), r;
    }
  }
  static checkResult(e, n) {
    if (n === e)
      throw new U("The result of the function cannot be the instance that has been disposed.");
    return n;
  }
}
class ii {
  _pointer;
  _bytes;
  _func;
  constructor(e, n, r) {
    this._pointer = e, this._func = r, this._bytes = _._api.HEAPU8.subarray(e, e + n);
  }
  func(e) {
    return e._bytes === void 0 ? e._func(new Uint8Array()) : e._func(e._bytes);
  }
  dispose() {
    this._pointer = _._api._MagickMemory_Relinquish(this._pointer);
  }
}
class Ye {
  disposeMethod;
  instance;
  /** @internal */
  constructor(e, n) {
    this.instance = e, this.disposeMethod = n;
  }
  /** @internal */
  get _instance() {
    if (this.instance > 0)
      return this.instance;
    throw this.instance === -1 && this._instanceNotInitialized(), new U("instance is disposed");
  }
  /** @internal */
  set _instance(e) {
    this.disposeInstance(this.instance), this.instance = e;
  }
  dispose() {
    this.instance = this.disposeInstance(this.instance);
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new U("instance is not initialized");
  }
  /** @internal */
  _setInstance(e, n) {
    return n.check(() => this.instance === 0 ? !1 : (this.dispose(), this.instance = e, !0), () => (this.disposeInstance(e), !0));
  }
  disposeInstance(e) {
    return e > 0 && (this.onDispose !== void 0 && this.onDispose(), this.disposeMethod(e)), 0;
  }
}
class so extends Ye {
  constructor(e) {
    const n = _._api._DrawingSettings_Create(), r = _._api._DrawingSettings_Dispose;
    if (super(n, r), e.fillColor !== void 0 && e.fillColor._use((l) => {
      _._api._DrawingSettings_FillColor_Set(this._instance, l);
    }), e.font !== void 0) {
      const l = be._getFontFileName(e.font);
      A(l, (d) => {
        _._api._DrawingSettings_Font_Set(this._instance, d);
      });
    }
    e.fontPointsize !== void 0 && _._api._DrawingSettings_FontPointsize_Set(this._instance, e.fontPointsize), e.strokeColor !== void 0 && e.strokeColor._use((l) => {
      _._api._DrawingSettings_StrokeColor_Set(this._instance, l);
    }), e.strokeWidth !== void 0 && _._api._DrawingSettings_StrokeWidth_Set(this._instance, e.strokeWidth);
  }
}
class Et {
  backgroundColor;
  fillColor;
  font;
  fontPointsize;
  strokeColor;
  strokeWidth;
  static _create(e) {
    const n = new Et();
    return n.fillColor = e.fillColor, n.font = e.font, n.fontPointsize = e.fontPointsize, n.strokeColor = e.strokeColor, n.strokeWidth = e.strokeWidth, n;
  }
  _use(e) {
    const n = new so(this);
    return ce._disposeAfterExecution(n, e);
  }
}
class ni {
  instance;
  type;
  constructor(e, n) {
    this.instance = _._api._malloc(e), this.type = n, _._api.setValue(this.instance, 0, this.type);
  }
  get ptr() {
    return this.instance;
  }
  get value() {
    return _._api.getValue(this.instance, this.type);
  }
}
class Te extends ni {
  constructor() {
    super(4, "i32");
  }
  static use(e) {
    const n = new Te();
    try {
      return e(n);
    } finally {
      _._api._free(n.ptr);
    }
  }
}
class T {
  pointer;
  constructor(e) {
    this.pointer = e;
  }
  get ptr() {
    return this.pointer.ptr;
  }
  check(e, n) {
    return this.isError() ? n() : e();
  }
  static usePointer(e, n) {
    return Te.use((r) => {
      const l = e(r.ptr);
      return T.checkException(r, l, n);
    });
  }
  static use(e, n) {
    return Te.use((r) => {
      const l = e(new T(r));
      return T.checkException(r, l, n);
    });
  }
  static checkException(e, n, r) {
    if (!T.isRaised(e))
      return n;
    const l = T.getErrorSeverity(e.value);
    if (l >= er.Error)
      T.throw(e, l);
    else if (r !== void 0) {
      const d = T.createError(e.value, l);
      r(d);
    } else
      T.dispose(e);
    return n;
  }
  isError() {
    return T.isRaised(this.pointer) ? T.getErrorSeverity(this.pointer.value) >= er.Error : !1;
  }
  static getErrorSeverity(e) {
    return _._api._MagickExceptionHelper_Severity(e);
  }
  static isRaised(e) {
    return e.value !== 0;
  }
  static throw(e, n) {
    const r = T.createError(e.value, n);
    throw T.dispose(e), r;
  }
  static createError(e, n) {
    const r = T.getMessage(e), l = new U(r, n), d = _._api._MagickExceptionHelper_RelatedCount(e);
    if (d === 0)
      return l;
    const p = [];
    for (let v = 0; v < d; v++) {
      const S = _._api._MagickExceptionHelper_Related(e, v), R = T.getErrorSeverity(S), B = T.createError(S, R);
      p.push(B);
    }
    return l._setRelatedErrors(p), l;
  }
  static getMessage(e) {
    const n = _._api._MagickExceptionHelper_Message(e), r = _._api._MagickExceptionHelper_Description(e);
    let l = ge(n, "Unknown error");
    return r !== 0 && (l += `(${_._api.UTF8ToString(r)})`), l;
  }
  static dispose(e) {
    _._api._MagickExceptionHelper_Dispose(e.value);
  }
}
class or {
  constructor(e, n, r, l, d, p, v) {
    this.ascent = e, this.descent = n, this.maxHorizontalAdvance = r, this.textHeight = l, this.textWidth = d, this.underlinePosition = p, this.underlineThickness = v;
  }
  /**
   * Gets the ascent, the distance in pixels from the text baseline to the highest/upper grid coordinate
   * used to place an outline point.
   */
  ascent;
  /**
   * Gets the descent, the distance in pixels from the baseline to the lowest grid coordinate used to
   * place an outline point. Always a negative value.
   */
  descent;
  /**
   * Gets the maximum horizontal advance in pixels.
   */
  maxHorizontalAdvance;
  /**
   * Gets the text height in pixels.
   */
  textHeight;
  /**
   * Gets the text width in pixels.
   */
  textWidth;
  /**
   * Gets the underline position.
   */
  underlinePosition;
  /**
   * Gets the underline thickness.
   */
  underlineThickness;
  /** @internal */
  static _create(e) {
    if (e == 0)
      return null;
    try {
      const n = _._api._TypeMetric_Ascent_Get(e), r = _._api._TypeMetric_Descent_Get(e), l = _._api._TypeMetric_MaxHorizontalAdvance_Get(e), d = _._api._TypeMetric_TextHeight_Get(e), p = _._api._TypeMetric_TextWidth_Get(e), v = _._api._TypeMetric_UnderlinePosition_Get(e), S = _._api._TypeMetric_UnderlineThickness_Get(e);
      return new or(n, r, l, d, p, v, S);
    } finally {
      _._api._TypeMetric_Dispose(e);
    }
  }
}
class Dt extends Ye {
  constructor(e, n) {
    const l = Et._create(n)._use((p) => _._api._DrawingWand_Create(e._instance, p._instance)), d = _._api._DrawingWand_Dispose;
    super(l, d);
  }
  color(e, n, r) {
    T.usePointer((l) => {
      _._api._DrawingWand_Color(this._instance, e, n, r, l);
    });
  }
  draw(e) {
    e.forEach((n) => {
      n.draw(this);
    }), T.usePointer((n) => {
      _._api._DrawingWand_Render(this._instance, n);
    });
  }
  fillColor(e) {
    T.usePointer((n) => {
      e._use((r) => {
        _._api._DrawingWand_FillColor(this._instance, r, n);
      });
    });
  }
  fillOpacity(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_FillOpacity(this._instance, e, n);
    });
  }
  font(e) {
    T.usePointer((n) => {
      A(e, (r) => {
        _._api._DrawingWand_Font(this._instance, r, n);
      });
    });
  }
  fontPointSize(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_FontPointSize(this._instance, e, n);
    });
  }
  /** @internal */
  fontTypeMetrics(e, n) {
    return T.usePointer((r) => A(e, (l) => {
      const d = _._api._DrawingWand_FontTypeMetrics(this._instance, l, n ? 1 : 0, r);
      return or._create(d);
    }));
  }
  gravity(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_Gravity(this._instance, e, n);
    });
  }
  line(e, n, r, l) {
    T.usePointer((d) => {
      _._api._DrawingWand_Line(this._instance, e, n, r, l, d);
    });
  }
  point(e, n) {
    T.usePointer((r) => {
      _._api._DrawingWand_Point(this._instance, e, n, r);
    });
  }
  rectangle(e, n, r, l) {
    T.usePointer((d) => {
      _._api._DrawingWand_Rectangle(this._instance, e, n, r, l, d);
    });
  }
  roundRectangle(e, n, r, l, d, p) {
    T.usePointer((v) => {
      _._api._DrawingWand_RoundRectangle(this._instance, e, n, r, l, d, p, v);
    });
  }
  strokeColor(e) {
    T.usePointer((n) => {
      e._use((r) => {
        _._api._DrawingWand_StrokeColor(this._instance, r, n);
      });
    });
  }
  strokeWidth(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_StrokeWidth(this._instance, e, n);
    });
  }
  text(e, n, r) {
    T.usePointer((l) => {
      A(r, (d) => {
        _._api._DrawingWand_Text(this._instance, e, n, d, l);
      });
    });
  }
  textAlignment(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_TextAlignment(this._instance, e, n);
    });
  }
  textAntialias(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_TextAntialias(this._instance, e ? 1 : 0, n);
    });
  }
  textDecoration(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_TextDecoration(this._instance, e, n);
    });
  }
  textInterlineSpacing(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_TextInterlineSpacing(this._instance, e, n);
    });
  }
  textInterwordspacing(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_TextInterwordSpacing(this._instance, e, n);
    });
  }
  textKerning(e) {
    T.usePointer((n) => {
      _._api._DrawingWand_TextKerning(this._instance, e, n);
    });
  }
  textUnderColor(e) {
    T.usePointer((n) => {
      e._use((r) => {
        _._api._DrawingWand_TextUnderColor(this._instance, r, n);
      });
    });
  }
  /** @internal */
  static _use(e, n) {
    const r = new Dt(e, e.settings);
    return ce._disposeAfterExecution(r, n);
  }
}
class cr extends ni {
  constructor() {
    super(8, "double");
  }
  static use(e) {
    const n = new cr();
    try {
      return e(n);
    } finally {
      _._api._free(n.ptr);
    }
  }
}
const he = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Forget.
   */
  Forget: 0,
  /**
   * Northwest
   */
  Northwest: 1,
  /**
   * North
   */
  North: 2,
  /**
   * Northeast
   */
  Northeast: 3,
  /**
   * West
   */
  West: 4,
  /**
   * Center
   */
  Center: 5,
  /**
   * East
   */
  East: 6,
  /**
   * Southwest
   */
  Southwest: 7,
  /**
   * South
   */
  South: 8,
  /**
   * Southeast
   */
  Southeast: 9
};
function* oo(M) {
  for (const e of M)
    switch (e) {
      case he.North:
        yield "north";
        break;
      case he.Northeast:
        yield "north", yield "east";
        break;
      case he.Northwest:
        yield "north", yield "west";
        break;
      case he.East:
        yield "east";
        break;
      case he.West:
        yield "west";
        break;
      case he.South:
        yield "south";
        break;
      case he.Southeast:
        yield "south", yield "east";
        break;
      case he.Southwest:
        yield "south", yield "west";
    }
}
class bt {
  constructor(e, n, r) {
    this.meanErrorPerPixel = e, this.normalizedMeanError = n, this.normalizedMaximumError = r;
  }
  /**
   * Gets the mean error per pixel computed when an image is color reduced.
   */
  meanErrorPerPixel;
  /**
   * Gets the normalized maximum error per pixel computed when an image is color reduced.
   */
  normalizedMaximumError;
  /**
   * Gets the normalized mean error per pixel computed when an image is color reduced.
   */
  normalizedMeanError;
  /** @internal */
  static _create(e) {
    const n = _._api._MagickImage_MeanErrorPerPixel_Get(e._instance), r = _._api._MagickImage_NormalizedMeanError_Get(e._instance), l = _._api._MagickImage_NormalizedMaximumError_Get(e._instance);
    return new bt(n, r, l);
  }
}
const xe = {
  /**
   * Unknown.
   */
  Unknown: "UNKNOWN",
  /**
   * Hasselblad CFV/H3D39II Raw Format.
   */
  ThreeFr: "3FR",
  /**
   * Media Container.
   */
  ThreeG2: "3G2",
  /**
   * Media Container.
   */
  ThreeGp: "3GP",
  /**
   * Raw alpha samples.
   */
  A: "A",
  /**
   * AAI Dune image.
   */
  Aai: "AAI",
  /**
   * Adobe Illustrator CS2.
   */
  Ai: "AI",
  /**
   * Animated Portable Network Graphics.
   */
  APng: "APNG",
  /**
   * PFS: 1st Publisher Clip Art.
   */
  Art: "ART",
  /**
   * Sony Alpha Raw Format.
   */
  Arw: "ARW",
  /**
   * Image sequence laid out in continuous irregular courses (Unknown).
   */
  Ashlar: "ASHLAR",
  /**
   * AVC Image File Format.
   */
  Avci: "AVCI",
  /**
   * Microsoft Audio/Visual Interleaved.
   */
  Avi: "AVI",
  /**
   * AV1 Image File Format (Heic).
   */
  Avif: "AVIF",
  /**
   * AVS X image.
   */
  Avs: "AVS",
  /**
   * Raw blue samples.
   */
  B: "B",
  /**
   * Raw mosaiced samples.
   */
  Bayer: "BAYER",
  /**
   * Raw mosaiced and alpha samples.
   */
  Bayera: "BAYERA",
  /**
   * Raw blue, green, and red samples.
   */
  Bgr: "BGR",
  /**
   * Raw blue, green, red, and alpha samples.
   */
  Bgra: "BGRA",
  /**
   * Raw blue, green, red, and opacity samples.
   */
  Bgro: "BGRO",
  /**
   * Microsoft Windows bitmap image.
   */
  Bmp: "BMP",
  /**
   * Microsoft Windows bitmap image (V2).
   */
  Bmp2: "BMP2",
  /**
   * Microsoft Windows bitmap image (V3).
   */
  Bmp3: "BMP3",
  /**
   * BRF ASCII Braille format.
   */
  Brf: "BRF",
  /**
   * Raw cyan samples.
   */
  C: "C",
  /**
   * Continuous Acquisition and Life-cycle Support Type 1.
   */
  Cal: "CAL",
  /**
   * Continuous Acquisition and Life-cycle Support Type 1.
   */
  Cals: "CALS",
  /**
   * Constant image uniform color.
   */
  Canvas: "CANVAS",
  /**
   * Caption.
   */
  Caption: "CAPTION",
  /**
   * Cineon Image File.
   */
  Cin: "CIN",
  /**
   * Cisco IP phone image format.
   */
  Cip: "CIP",
  /**
   * Image Clip Mask.
   */
  Clip: "CLIP",
  /**
   * Raw cyan, magenta, yellow, and black samples.
   */
  Cmyk: "CMYK",
  /**
   * Raw cyan, magenta, yellow, black, and alpha samples.
   */
  Cmyka: "CMYKA",
  /**
   * Canon Digital Camera Raw Format.
   */
  Cr2: "CR2",
  /**
   * Canon Digital Camera Raw Format.
   */
  Cr3: "CR3",
  /**
   * Canon Digital Camera Raw Format.
   */
  Crw: "CRW",
  /**
   * Cube color lookup table image.
   */
  Cube: "CUBE",
  /**
   * Microsoft icon.
   */
  Cur: "CUR",
  /**
   * DR Halo.
   */
  Cut: "CUT",
  /**
   * Base64-encoded inline images.
   */
  Data: "DATA",
  /**
   * Digital Imaging and Communications in Medicine image.
   */
  Dcm: "DCM",
  /**
   * Kodak Digital Camera Raw Format.
   */
  Dcr: "DCR",
  /**
   * Raw Photo Decoder (dcraw).
   */
  Dcraw: "DCRAW",
  /**
   * ZSoft IBM PC multi-page Paintbrush.
   */
  Dcx: "DCX",
  /**
   * Microsoft DirectDraw Surface.
   */
  Dds: "DDS",
  /**
   * Multi-face font package.
   */
  Dfont: "DFONT",
  /**
   * Digital Negative Raw Format.
   */
  Dng: "DNG",
  /**
   * SMPTE 268M-2003 (DPX 2.0).
   */
  Dpx: "DPX",
  /**
   * Microsoft DirectDraw Surface.
   */
  Dxt1: "DXT1",
  /**
   * Microsoft DirectDraw Surface.
   */
  Dxt5: "DXT5",
  /**
   * Encapsulated Portable Document Format.
   */
  Epdf: "EPDF",
  /**
   * Encapsulated PostScript Interchange format.
   */
  Epi: "EPI",
  /**
   * Encapsulated PostScript.
   */
  Eps: "EPS",
  /**
   * Level II Encapsulated PostScript.
   */
  Eps2: "EPS2",
  /**
   * Level III Encapsulated PostScript.
   */
  Eps3: "EPS3",
  /**
   * Encapsulated PostScript.
   */
  Epsf: "EPSF",
  /**
   * Encapsulated PostScript Interchange format.
   */
  Epsi: "EPSI",
  /**
   * Encapsulated PostScript with TIFF preview.
   */
  Ept: "EPT",
  /**
   * Encapsulated PostScript Level II with TIFF preview.
   */
  Ept2: "EPT2",
  /**
   * Encapsulated PostScript Level III with TIFF preview.
   */
  Ept3: "EPT3",
  /**
   * Epson Raw Format.
   */
  Erf: "ERF",
  /**
   * High Dynamic-range (HDR).
   */
  Exr: "EXR",
  /**
   * Farbfeld.
   */
  Farbfeld: "FARBFELD",
  /**
   * Group 3 FAX.
   */
  Fax: "FAX",
  /**
   * Farbfeld.
   */
  Ff: "FF",
  /**
   * Hasselblad CFV/H3D39II Raw Format.
   */
  Fff: "FFF",
  /**
   * Uniform Resource Locator (file://).
   */
  File: "FILE",
  /**
   * Flexible Image Transport System.
   */
  Fits: "FITS",
  /**
   * FilmLight.
   */
  Fl32: "FL32",
  /**
   * Flash Video Stream.
   */
  Flv: "FLV",
  /**
   * Plasma fractal image.
   */
  Fractal: "FRACTAL",
  /**
   * Uniform Resource Locator (ftp://).
   */
  Ftp: "FTP",
  /**
   * Flexible Image Transport System.
   */
  Fts: "FTS",
  /**
   * Formatted text image.
   */
  Ftxt: "FTXT",
  /**
   * Raw green samples.
   */
  G: "G",
  /**
   * Group 3 FAX.
   */
  G3: "G3",
  /**
   * Group 4 FAX.
   */
  G4: "G4",
  /**
   * CompuServe graphics interchange format.
   */
  Gif: "GIF",
  /**
   * CompuServe graphics interchange format.
   */
  Gif87: "GIF87",
  /**
   * Gradual linear passing from one shade to another.
   */
  Gradient: "GRADIENT",
  /**
   * Raw gray samples.
   */
  Gray: "GRAY",
  /**
   * Raw gray and alpha samples.
   */
  Graya: "GRAYA",
  /**
   * Raw CCITT Group4.
   */
  Group4: "GROUP4",
  /**
   * Identity Hald color lookup table image.
   */
  Hald: "HALD",
  /**
   * Radiance RGBE image format.
   */
  Hdr: "HDR",
  /**
   * High Efficiency Image Format.
   */
  Heic: "HEIC",
  /**
   * High Efficiency Image Format.
   */
  Heif: "HEIF",
  /**
   * Histogram of the image.
   */
  Histogram: "HISTOGRAM",
  /**
   * Slow Scan TeleVision.
   */
  Hrz: "HRZ",
  /**
   * Hypertext Markup Language and a client-side image map.
   */
  Htm: "HTM",
  /**
   * Hypertext Markup Language and a client-side image map.
   */
  Html: "HTML",
  /**
   * Uniform Resource Locator (http://).
   */
  Http: "HTTP",
  /**
   * Uniform Resource Locator (https://).
   */
  Https: "HTTPS",
  /**
   * Truevision Targa image.
   */
  Icb: "ICB",
  /**
   * Microsoft icon.
   */
  Ico: "ICO",
  /**
   * Microsoft icon.
   */
  Icon: "ICON",
  /**
   * Phase One Raw Format.
   */
  Iiq: "IIQ",
  /**
   * The image format and characteristics.
   */
  Info: "INFO",
  /**
   * Base64-encoded inline images.
   */
  Inline: "INLINE",
  /**
   * IPL Image Sequence.
   */
  Ipl: "IPL",
  /**
   * ISO/TR 11548-1 format.
   */
  Isobrl: "ISOBRL",
  /**
   * ISO/TR 11548-1 format 6dot.
   */
  Isobrl6: "ISOBRL6",
  /**
   * JPEG-2000 Code Stream Syntax.
   */
  J2c: "J2C",
  /**
   * JPEG-2000 Code Stream Syntax.
   */
  J2k: "J2K",
  /**
   * JPEG Network Graphics.
   */
  Jng: "JNG",
  /**
   * Garmin tile format.
   */
  Jnx: "JNX",
  /**
   * JPEG-2000 File Format Syntax.
   */
  Jp2: "JP2",
  /**
   * JPEG-2000 Code Stream Syntax.
   */
  Jpc: "JPC",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Jpe: "JPE",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Jpeg: "JPEG",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Jpg: "JPG",
  /**
   * JPEG-2000 File Format Syntax.
   */
  Jpm: "JPM",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Jps: "JPS",
  /**
   * JPEG-2000 File Format Syntax.
   */
  Jpt: "JPT",
  /**
   * The image format and characteristics.
   */
  Json: "JSON",
  /**
   * JPEG XL Lossless JPEG1 Recompression.
   */
  Jxl: "JXL",
  /**
   * Raw black samples.
   */
  K: "K",
  /**
   * Kodak Digital Camera Raw Format.
   */
  K25: "K25",
  /**
   * Kodak Digital Camera Raw Format.
   */
  Kdc: "KDC",
  /**
   * Image label.
   */
  Label: "LABEL",
  /**
   * Raw magenta samples.
   */
  M: "M",
  /**
   * MPEG Video Stream.
   */
  M2v: "M2V",
  /**
   * Raw MPEG-4 Video.
   */
  M4v: "M4V",
  /**
   * MAC Paint.
   */
  Mac: "MAC",
  /**
   * Colormap intensities and indices.
   */
  Map: "MAP",
  /**
   * Image Clip Mask.
   */
  Mask: "MASK",
  /**
   * MATLAB level 5 image format.
   */
  Mat: "MAT",
  /**
   * MATTE format.
   */
  Matte: "MATTE",
  /**
   * Minolta Digital Camera Raw Format.
   */
  Mdc: "MDC",
  /**
   * Mamiya Raw Format.
   */
  Mef: "MEF",
  /**
   * Magick Image File Format.
   */
  Miff: "MIFF",
  /**
   * Multimedia Container.
   */
  Mkv: "MKV",
  /**
   * Multiple-image Network Graphics.
   */
  Mng: "MNG",
  /**
   * Raw bi-level bitmap.
   */
  Mono: "MONO",
  /**
   * MPEG Video Stream.
   */
  Mov: "MOV",
  /**
   * Aptus Leaf Raw Format.
   */
  Mos: "MOS",
  /**
   * MPEG-4 Video Stream.
   */
  Mp4: "MP4",
  /**
   * Magick Persistent Cache image format.
   */
  Mpc: "MPC",
  /**
   * MPEG Video Stream.
   */
  Mpeg: "MPEG",
  /**
   * MPEG Video Stream.
   */
  Mpg: "MPG",
  /**
   * Joint Photographic Experts Group JFIF format (Jpeg).
   */
  Mpo: "MPO",
  /**
   * Sony (Minolta) Raw Format.
   */
  Mrw: "MRW",
  /**
   * Magick Scripting Language.
   */
  Msl: "MSL",
  /**
   * ImageMagick's own SVG internal renderer.
   */
  Msvg: "MSVG",
  /**
   * MTV Raytracing image format.
   */
  Mtv: "MTV",
  /**
   * Magick Vector Graphics.
   */
  Mvg: "MVG",
  /**
   * Nikon Digital SLR Camera Raw Format.
   */
  Nef: "NEF",
  /**
   * Nikon Digital SLR Camera Raw Format.
   */
  Nrw: "NRW",
  /**
   * Constant image of uniform color.
   */
  Null: "NULL",
  /**
   * Raw opacity samples.
   */
  O: "O",
  /**
   * OpenRaster format.
   */
  Ora: "ORA",
  /**
   * Olympus Digital Camera Raw Format.
   */
  Orf: "ORF",
  /**
   * On-the-air bitmap.
   */
  Otb: "OTB",
  /**
   * Open Type font.
   */
  Otf: "OTF",
  /**
   * 16bit/pixel interleaved YUV.
   */
  Pal: "PAL",
  /**
   * Palm pixmap.
   */
  Palm: "PALM",
  /**
   * Common 2-dimensional bitmap format.
   */
  Pam: "PAM",
  /**
   * Pango Markup Language.
   */
  Pango: "PANGO",
  /**
   * Predefined pattern.
   */
  Pattern: "PATTERN",
  /**
   * Portable bitmap format (black and white).
   */
  Pbm: "PBM",
  /**
   * Photo CD.
   */
  Pcd: "PCD",
  /**
   * Photo CD.
   */
  Pcds: "PCDS",
  /**
   * Printer Control Language.
   */
  Pcl: "PCL",
  /**
   * Apple Macintosh QuickDraw/PICT.
   */
  Pct: "PCT",
  /**
   * ZSoft IBM PC Paintbrush.
   */
  Pcx: "PCX",
  /**
   * Palm Database ImageViewer Format.
   */
  Pdb: "PDB",
  /**
   * Portable Document Format.
   */
  Pdf: "PDF",
  /**
   * Portable Document Archive Format.
   */
  Pdfa: "PDFA",
  /**
   * Pentax Electronic Raw Format.
   */
  Pef: "PEF",
  /**
   * Embrid Embroidery Format.
   */
  Pes: "PES",
  /**
   * Postscript Type 1 font (ASCII).
   */
  Pfa: "PFA",
  /**
   * Postscript Type 1 font (binary).
   */
  Pfb: "PFB",
  /**
   * Portable float format.
   */
  Pfm: "PFM",
  /**
   * Portable graymap format (gray scale).
   */
  Pgm: "PGM",
  /**
   * JPEG 2000 uncompressed format.
   */
  Pgx: "PGX",
  /**
   * Portable half float format.
   */
  Phm: "PHM",
  /**
   * Personal Icon.
   */
  Picon: "PICON",
  /**
   * Apple Macintosh QuickDraw/PICT.
   */
  Pict: "PICT",
  /**
   * Alias/Wavefront RLE image format.
   */
  Pix: "PIX",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Pjpeg: "PJPEG",
  /**
   * Plasma fractal image.
   */
  Plasma: "PLASMA",
  /**
   * Portable Network Graphics.
   */
  Png: "PNG",
  /**
   * PNG inheriting bit-depth and color-type from original.
   */
  Png00: "PNG00",
  /**
   * opaque or binary transparent 24-bit RGB.
   */
  Png24: "PNG24",
  /**
   * opaque or transparent 32-bit RGBA.
   */
  Png32: "PNG32",
  /**
   * opaque or binary transparent 48-bit RGB.
   */
  Png48: "PNG48",
  /**
   * opaque or transparent 64-bit RGBA.
   */
  Png64: "PNG64",
  /**
   * 8-bit indexed with optional binary transparency.
   */
  Png8: "PNG8",
  /**
   * Portable anymap.
   */
  Pnm: "PNM",
  /**
   * Pocketmod Personal Organizer (Pdf).
   */
  Pocketmod: "POCKETMOD",
  /**
   * Portable pixmap format (color).
   */
  Ppm: "PPM",
  /**
   * PostScript.
   */
  Ps: "PS",
  /**
   * Level II PostScript.
   */
  Ps2: "PS2",
  /**
   * Level III PostScript.
   */
  Ps3: "PS3",
  /**
   * Adobe Large Document Format.
   */
  Psb: "PSB",
  /**
   * Adobe Photoshop bitmap.
   */
  Psd: "PSD",
  /**
   * Pyramid encoded TIFF.
   */
  Ptif: "PTIF",
  /**
   * Seattle Film Works.
   */
  Pwp: "PWP",
  /**
   * Quite OK image format.
   */
  Qoi: "QOI",
  /**
   * Raw red samples.
   */
  R: "R",
  /**
   * Gradual radial passing from one shade to another.
   */
  RadialGradient: "RADIAL-GRADIENT",
  /**
   * Fuji CCD-RAW Graphic File.
   */
  Raf: "RAF",
  /**
   * SUN Rasterfile.
   */
  Ras: "RAS",
  /**
   * Raw.
   */
  Raw: "RAW",
  /**
   * Raw red, green, and blue samples.
   */
  Rgb: "RGB",
  /**
   * Raw red, green, blue samples in 565 format.
   */
  Rgb565: "RGB565",
  /**
   * Raw red, green, blue, and alpha samples.
   */
  Rgba: "RGBA",
  /**
   * Raw red, green, blue, and opacity samples.
   */
  Rgbo: "RGBO",
  /**
   * LEGO Mindstorms EV3 Robot Graphic Format (black and white).
   */
  Rgf: "RGF",
  /**
   * Alias/Wavefront image.
   */
  Rla: "RLA",
  /**
   * Utah Run length encoded image.
   */
  Rle: "RLE",
  /**
   * Raw Media Format.
   */
  Rmf: "RMF",
  /**
   * Panasonic Lumix Raw Format.
   */
  Rw2: "RW2",
  /**
   * Leica Raw Format.
   */
  Rwl: "RWL",
  /**
   * ZX-Spectrum SCREEN$.
   */
  Scr: "SCR",
  /**
   * Screen shot.
   */
  Screenshot: "SCREENSHOT",
  /**
   * Scitex HandShake.
   */
  Sct: "SCT",
  /**
   * Seattle Film Works.
   */
  Sfw: "SFW",
  /**
   * Irix RGB image.
   */
  Sgi: "SGI",
  /**
   * Hypertext Markup Language and a client-side image map.
   */
  Shtml: "SHTML",
  /**
   * DEC SIXEL Graphics Format.
   */
  Six: "SIX",
  /**
   * DEC SIXEL Graphics Format.
   */
  Sixel: "SIXEL",
  /**
   * Sparse Color.
   */
  SparseColor: "SPARSE-COLOR",
  /**
   * Sony Raw Format 2.
   */
  Sr2: "SR2",
  /**
   * Sony Raw Format.
   */
  Srf: "SRF",
  /**
   * Samsung Raw Format.
   */
  Srw: "SRW",
  /**
   * Steganographic image.
   */
  Stegano: "STEGANO",
  /**
   * Sinar CaptureShop Raw Format.
   */
  Sti: "STI",
  /**
   * String to image and back.
   */
  StrImg: "STRIMG",
  /**
   * SUN Rasterfile.
   */
  Sun: "SUN",
  /**
   * Scalable Vector Graphics.
   */
  Svg: "SVG",
  /**
   * Compressed Scalable Vector Graphics.
   */
  Svgz: "SVGZ",
  /**
   * Text.
   */
  Text: "TEXT",
  /**
   * Truevision Targa image.
   */
  Tga: "TGA",
  /**
   * EXIF Profile Thumbnail.
   */
  Thumbnail: "THUMBNAIL",
  /**
   * Tagged Image File Format.
   */
  Tif: "TIF",
  /**
   * Tagged Image File Format.
   */
  Tiff: "TIFF",
  /**
   * Tagged Image File Format (64-bit).
   */
  Tiff64: "TIFF64",
  /**
   * Tile image with a texture.
   */
  Tile: "TILE",
  /**
   * PSX TIM.
   */
  Tim: "TIM",
  /**
   * PS2 TIM2.
   */
  Tm2: "TM2",
  /**
   * TrueType font collection.
   */
  Ttc: "TTC",
  /**
   * TrueType font.
   */
  Ttf: "TTF",
  /**
   * Text.
   */
  Txt: "TXT",
  /**
   * Unicode Text format.
   */
  Ubrl: "UBRL",
  /**
   * Unicode Text format 6dot.
   */
  Ubrl6: "UBRL6",
  /**
   * X-Motif UIL table.
   */
  Uil: "UIL",
  /**
   * 16bit/pixel interleaved YUV.
   */
  Uyvy: "UYVY",
  /**
   * Truevision Targa image.
   */
  Vda: "VDA",
  /**
   * VICAR rasterfile format.
   */
  Vicar: "VICAR",
  /**
   * Visual Image Directory.
   */
  Vid: "VID",
  /**
   * Khoros Visualization image.
   */
  Viff: "VIFF",
  /**
   * VIPS image.
   */
  Vips: "VIPS",
  /**
   * Truevision Targa image.
   */
  Vst: "VST",
  /**
   * Open Web Media.
   */
  WebM: "WEBM",
  /**
   * WebP Image Format.
   */
  WebP: "WEBP",
  /**
   * Wireless Bitmap (level 0) image.
   */
  Wbmp: "WBMP",
  /**
   * Windows Media Video.
   */
  Wmv: "WMV",
  /**
   * Word Perfect Graphics.
   */
  Wpg: "WPG",
  /**
   * Sigma Camera RAW Format.
   */
  X3f: "X3F",
  /**
   * X Windows system bitmap (black and white).
   */
  Xbm: "XBM",
  /**
   * Constant image uniform color.
   */
  Xc: "XC",
  /**
   * GIMP image.
   */
  Xcf: "XCF",
  /**
   * X Windows system pixmap (color).
   */
  Xpm: "XPM",
  /**
   * Microsoft XML Paper Specification.
   */
  Xps: "XPS",
  /**
   * Khoros Visualization image.
   */
  Xv: "XV",
  /**
   * Raw yellow samples.
   */
  Y: "Y",
  /**
   * The image format and characteristics.
   */
  Yaml: "YAML",
  /**
   * Raw Y, Cb, and Cr samples.
   */
  Ycbcr: "YCBCR",
  /**
   * Raw Y, Cb, Cr, and alpha samples.
   */
  Ycbcra: "YCBCRA",
  /**
   * CCIR 601 4:1:1 or 4:2:2.
   */
  Yuv: "YUV"
}, Ct = {
  Merge: 13,
  Flatten: 14,
  Mosaic: 15,
  Trimbounds: 16
};
class ai extends Ye {
  constructor(e) {
    const n = _._api._MagickSettings_Create(), r = _._api._MagickSettings_Dispose;
    if (super(n, r), e._fileName !== void 0 && A(e._fileName, (l) => {
      _._api._MagickSettings_SetFileName(this._instance, l);
    }), e._ping && _._api._MagickSettings_SetPing(this._instance, 1), e._quality !== void 0 && _._api._MagickSettings_SetQuality(this._instance, e._quality), e.antiAlias !== void 0 && _._api._MagickSettings_AntiAlias_Set(this._instance, e.antiAlias ? 1 : 0), e.backgroundColor !== void 0 && e.backgroundColor._use((l) => {
      _._api._MagickSettings_BackgroundColor_Set(this._instance, l);
    }), e.colorSpace !== void 0 && _._api._MagickSettings_ColorSpace_Set(this._instance, e.colorSpace), e.colorType !== void 0 && _._api._MagickSettings_ColorType_Set(this._instance, e.colorType), e.compression !== void 0 && _._api._MagickSettings_Compression_Set(this._instance, e.compression), e.debug !== void 0 && _._api._MagickSettings_Debug_Set(this._instance, e.debug ? 1 : 0), e.density !== void 0) {
      const l = e.density.toString();
      A(l, (d) => {
        _._api._MagickSettings_Density_Set(this._instance, d);
      });
    }
    if (e.depth !== void 0 && _._api._MagickSettings_Depth_Set(this._instance, e.depth), e.endian !== void 0 && _._api._MagickSettings_Endian_Set(this._instance, e.endian), e.fillColor !== void 0 && this.setOption("fill", e.fillColor.toString()), e.font !== void 0) {
      const l = be._getFontFileName(e.font);
      A(l, (d) => {
        _._api._MagickSettings_SetFont(this._instance, d);
      });
    }
    e.fontPointsize !== void 0 && _._api._MagickSettings_FontPointsize_Set(this._instance, e.fontPointsize), e.format !== void 0 && A(e.format, (l) => {
      _._api._MagickSettings_Format_Set(this._instance, l);
    }), e.interlace !== void 0 && _._api._MagickSettings_Interlace_Set(this._instance, e.interlace), e.strokeColor !== void 0 && this.setOption("stroke", e.strokeColor.toString()), e.strokeWidth !== void 0 && this.setOption("strokeWidth", e.strokeWidth.toString()), e.textInterlineSpacing !== void 0 && this.setOption("interline-spacing", e.textInterlineSpacing.toString()), e.textKerning !== void 0 && this.setOption("kerning", e.textKerning.toString());
    for (const l in e._options)
      this.setOption(l, e._options[l]);
  }
  setOption(e, n) {
    A(e, (r) => {
      A(n, (l) => {
        _._api._MagickSettings_SetOption(this._instance, r, l);
      });
    });
  }
}
class _t {
  /** @internal */
  _options = {};
  /** @internal */
  _fileName;
  /** @internal */
  _ping = !1;
  /** @internal */
  _quality;
  /**
   * Gets or sets a value indicating whether anti-aliasing should be enabled (default true).
   */
  antiAlias;
  /**
   * Gets or sets the background color.
   */
  backgroundColor;
  /**
   * Gets or sets the color space.
   */
  colorSpace;
  /**
   * Gets or sets the color type of the image.
   */
  colorType;
  /**
   * Gets or sets the compression method to use.
   */
  compression;
  /**
   * Gets or sets a value indicating whether printing of debug messages from ImageMagick is enabled when a debugger is attached.
   */
  debug;
  /**
   * Gets or sets the vertical and horizontal resolution in pixels.
   */
  density;
  /**
   * Gets or sets the depth (bits allocated to red/green/blue components).
   */
  depth;
  /**
   * Gets or sets the endianness (little like Intel or big like SPARC) for image formats which support
   * endian-specific options.
   */
  endian;
  /**
   * Gets or sets the fill color.
   */
  fillColor;
  /**
   * Gets or sets the text rendering font.
   */
  font;
  /**
   * Gets or sets the font point size.
   */
  fontPointsize;
  /**
   * Gets or sets the the format of the image.
   */
  format;
  /**
   * Gets or sets the interlace method.
   */
  interlace;
  /**
   * Gets or sets the color to use when drawing object outlines.
   */
  strokeColor;
  /**
   * Gets or sets the stroke width for drawing lines, circles, ellipses, etc.
   */
  strokeWidth;
  /**
   * Gets or sets the text inter-line spacing.
   */
  textInterlineSpacing;
  /**
   * Gets or sets the text inter-character kerning.
   */
  textKerning;
  getDefine(e, n) {
    return n !== void 0 ? this._options[`${e}:${n}`] ?? null : this._options[e] ?? null;
  }
  setDefine(e, n, r) {
    if (r === void 0)
      this._options[e] = n;
    else {
      const l = this.parseDefine(e, n);
      typeof r == "string" ? this._options[l] = r : typeof r == "number" ? this._options[l] = r.toString() : this._options[l] = r ? "true" : "false";
    }
  }
  /**
   * Sets format-specific options with the specified defines.
   */
  setDefines(e) {
    e.getDefines().forEach((n) => {
      n !== void 0 && this.setDefine(n.format, n.name, n.value);
    });
  }
  /** @internal */
  _clone() {
    const e = new _t();
    return Object.assign(e, this), e;
  }
  /** @internal */
  _use(e) {
    const n = new ai(this);
    return ce._disposeAfterExecution(n, e);
  }
  parseDefine(e, n) {
    return e === xe.Unknown ? n : `${e}:${n}`;
  }
}
class De extends _t {
  constructor(e) {
    super(), Object.assign(this, e);
  }
  /**
   * Gets or sets the specified area to extract from the image.
   */
  extractArea;
  /**
   * Gets or sets the index of the image to read from a multi layer/frame image.
   */
  frameIndex;
  /**
   * Gets or sets the number of images to read from a multi layer/frame image.
   */
  frameCount;
  /**
   * Gets or sets the height.
   */
  height;
  /**
   * Gets or sets a value indicating whether the exif profile should be used to update
   * some of the properties of the image (e.g. {@link MagickImage#density},
   * {@link MagickImage#orientation}).
   */
  get syncImageWithExifProfile() {
    const e = this.getDefine("exif:sync-image");
    return e === null ? !0 : e.toLowerCase() === "true";
  }
  set syncImageWithExifProfile(e) {
    this.setDefine("exif:sync-image", e.toString());
  }
  /**
   * Gets or sets a value indicating whether the tiff profile should be used to update
   * some of the properties of the image (e.g. {@link MagickImage#density},
   * {@link MagickImage#orientation}).
   */
  get syncImageWithTiffProperties() {
    const e = this.getDefine("tiff:sync-image");
    return e === null ? !0 : e.toLowerCase() === "true";
  }
  set syncImageWithTiffProperties(e) {
    this.setDefine("tiff:sync-image", e.toString());
  }
  /**
   * Gets or sets the width.
   */
  width;
  /** @internal */
  _use(e) {
    const n = new ai(this), r = this.getSize();
    if (r !== "" && A(r, (l) => {
      _._api._MagickSettings_SetSize(n._instance, l);
    }), this.frameIndex !== void 0 || this.frameCount !== void 0) {
      const l = this.frameIndex ?? 0, d = this.frameCount ?? 1;
      _._api._MagickSettings_SetScene(n._instance, l), _._api._MagickSettings_SetNumberScenes(n._instance, d);
      const p = this.frameCount !== void 0 ? `${l}-${l + d}` : l.toString();
      A(p.toString(), (v) => {
        _._api._MagickSettings_SetScenes(n._instance, v);
      });
    }
    return this.extractArea !== void 0 && A(this.extractArea.toString(), (l) => {
      _._api._MagickSettings_Extract_Set(n._instance, l);
    }), ce._disposeAfterExecution(n, e);
  }
  getSize() {
    return this.width !== void 0 && this.height !== void 0 ? `${this.width}x${this.height}` : this.width !== void 0 ? `${this.width}x` : this.height !== void 0 ? `x${this.height}` : "";
  }
}
const si = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * No.
   */
  No: 1,
  /**
   * Riemersma.
   */
  Riemersma: 2,
  /**
   * FloydSteinberg.
   */
  FloydSteinberg: 3
};
class co extends Ye {
  constructor(e) {
    const n = _._api._QuantizeSettings_Create(), r = _._api._QuantizeSettings_Dispose;
    super(n, r), _._api._QuantizeSettings_SetColors(this._instance, e.colors), _._api._QuantizeSettings_SetColorSpace(this._instance, e.colorSpace), _._api._QuantizeSettings_SetDitherMethod(this._instance, e.ditherMethod ?? si.No), _._api._QuantizeSettings_SetMeasureErrors(this._instance, e.measureErrors ? 1 : 0), _._api._QuantizeSettings_SetTreeDepth(this._instance, e.treeDepth);
  }
}
class rr {
  constructor() {
    this.colors = 256, this.colorSpace = D.Undefined, this.ditherMethod = si.Riemersma, this.measureErrors = !1, this.treeDepth = 0;
  }
  /**
   * Gets or sets the maximum number of colors to quantize to.
   */
  colors;
  /**
   * Gets or sets the colorspace to quantize in.
   */
  colorSpace;
  /// <summary>
  /// Gets or sets the dither method to use.
  /// </summary>
  ditherMethod;
  /// <summary>
  /// Gets or sets a value indicating whether errors should be measured.
  /// </summary>
  measureErrors;
  /// <summary>
  /// Gets or sets the quantization tree-depth.
  /// </summary>
  treeDepth;
  /** @internal */
  _use(e) {
    const n = new co(this);
    return ce._disposeAfterExecution(n, e);
  }
}
class Ce {
  _image;
  _names = [];
  constructor(e) {
    this._image = e;
  }
  setArtifact(e, n) {
    this._names.push(e), this._image.setArtifact(e, n);
  }
  static use(e, n) {
    const r = new Ce(e);
    try {
      return n(r);
    } finally {
      r.dispose();
    }
  }
  dispose() {
    for (const e of this._names)
      this._image.removeArtifact(e);
  }
}
function Jr(M, e) {
  if (M.byteLength === 0)
    throw new U("The specified array cannot be empty");
  let n = 0;
  try {
    return n = _._api._malloc(M.byteLength), _._api.HEAPU8.set(M, n), e(n);
  } finally {
    n !== 0 && _._api._free(n);
  }
}
function oi(M, e) {
  if (M.length === 0)
    throw new U("The specified array cannot be empty");
  const n = M.length * 8;
  let r = 0;
  try {
    r = _._api._malloc(n);
    const l = new ArrayBuffer(n), d = new Float64Array(l);
    for (let p = 0; p < M.length; p++)
      d[p] = M[p];
    return _._api.HEAPU8.set(new Int8Array(l), r), e(r);
  } finally {
    r !== 0 && _._api._free(r);
  }
}
function _o(M, e) {
  if (M.byteLength === 0)
    throw new U("The specified array cannot be empty");
  let n = 0;
  try {
    return n = _._api._malloc(M.byteLength), _._api.HEAPU8.set(M, n), e(n);
  } finally {
    n !== 0 && _._api._free(n);
  }
}
class Ee extends Array {
  constructor() {
    super();
  }
  static create(e) {
    const n = Ee.createObject();
    return e !== void 0 && n.read(e), n;
  }
  dispose() {
    let e = this.pop();
    for (; e !== void 0; )
      e.dispose(), e = this.pop();
  }
  appendHorizontally(e) {
    return this.createImage((n, r) => _._api._MagickImageCollection_Append(n, 0, r.ptr), e);
  }
  appendVertically(e) {
    return this.createImage((n, r) => _._api._MagickImageCollection_Append(n, 1, r.ptr), e);
  }
  clone(e) {
    const n = Ee.create();
    for (let r = 0; r < this.length; r++)
      n.push(re._clone(this[r]));
    return n._use(e);
  }
  coalesce() {
    this.replaceImages((e, n) => _._api._MagickImageCollection_Coalesce(e, n.ptr));
  }
  combine(e, n) {
    let r = n, l = D.sRGB;
    return typeof e == "number" ? l = e : r = e, this.createImage((d, p) => _._api._MagickImageCollection_Combine(d, l, p.ptr), r);
  }
  complex(e, n) {
    return Ce.use(this[0], (r) => (e._setArtifacts(r), this.createImage((l, d) => _._api._MagickImageCollection_Complex(l, e.complexOperator, d.ptr), n)));
  }
  deconstruct() {
    this.replaceImages((e, n) => _._api._MagickImageCollection_Deconstruct(e, n.ptr));
  }
  evaluate(e, n) {
    return this.createImage((r, l) => _._api._MagickImageCollection_Evaluate(r, e, l.ptr), n);
  }
  flatten(e) {
    return this.mergeImages(Ct.Flatten, e);
  }
  fx(e, n, r) {
    this.throwIfEmpty();
    let l = X.All, d = r;
    return typeof n == "number" ? l = n : d = n, A(e, (p) => this.createImage((v, S) => _._api._MagickImageCollection_Fx(v, p, l, S.ptr), d));
  }
  merge(e) {
    return this.mergeImages(Ct.Merge, e);
  }
  montage(e, n) {
    return this.throwIfEmpty(), this.attachImages((r) => {
      const l = e._use((d) => T.use((p) => {
        const v = _._api._MagickImageCollection_Montage(r, d._instance, p.ptr);
        return this.checkResult(v, p);
      }));
      return Ee._createFromImages(l, this.getSettings())._use((d) => {
        const p = e.transparentColor;
        return p !== void 0 && d.forEach((v) => {
          v.transparent(p);
        }), d.merge(n);
      });
    });
  }
  morph(e) {
    if (this.length < 2)
      throw new U("operation requires at least two images");
    this.replaceImages((n, r) => _._api._MagickImageCollection_Morph(n, e, r.ptr));
  }
  mosaic(e) {
    return this.mergeImages(Ct.Mosaic, e);
  }
  optimize() {
    this.replaceImages((e, n) => _._api._MagickImageCollection_Optimize(e, n.ptr));
  }
  optimizePlus() {
    this.replaceImages((e, n) => _._api._MagickImageCollection_OptimizePlus(e, n.ptr));
  }
  optimizeTransparency() {
    this.throwIfEmpty(), this.attachImages((e) => {
      T.usePointer((n) => {
        _._api._MagickImageCollection_OptimizeTransparency(e, n);
      });
    });
  }
  ping(e, n) {
    this.readOrPing(!0, e, n);
  }
  polynomial(e, n) {
    return this.createImage((r, l) => oi(e, (d) => _._api._MagickImageCollection_Polynomial(r, d, e.length, l.ptr)), n);
  }
  quantize(e) {
    this.throwIfEmpty();
    const n = e === void 0 ? new rr() : e;
    return this.attachImages((r) => {
      n._use((l) => {
        T.usePointer((d) => {
          _._api._MagickImageCollection_Quantize(r, l._instance, d);
        });
      });
    }), n.measureErrors ? bt._create(this[0]) : null;
  }
  read(e, n) {
    this.readOrPing(!1, e, n);
  }
  remap(e, n) {
    this.throwIfEmpty();
    const r = n === void 0 ? new rr() : n;
    this.attachImages((l) => {
      r._use((d) => {
        T.use((p) => {
          _._api._MagickImageCollection_Remap(l, d._instance, e._instance, p.ptr);
        });
      });
    });
  }
  resetPage() {
    this.forEach((e) => {
      e.resetPage();
    });
  }
  smushHorizontal(e, n) {
    return this.smush(e, !1, n);
  }
  smushVertical(e, n) {
    return this.smush(e, !0, n);
  }
  trimBounds() {
    this.mergeImages(Ct.Trimbounds, () => {
    });
  }
  write(e, n) {
    this.throwIfEmpty();
    let r = 0, l = 0;
    const d = this[0], p = this.getSettings();
    n !== void 0 ? p.format = e : (n = e, p.format = d.format), T.use((S) => {
      Te.use((R) => {
        p._use((B) => {
          this.attachImages((Y) => {
            r = _._api._MagickImage_WriteBlob(Y, B._instance, R.ptr, S.ptr), l = R.value;
          });
        });
      });
    });
    const v = new ii(r, l, n);
    return ce._disposeAfterExecution(v, v.func);
  }
  /** @internal */
  static _createFromImages(e, n) {
    const r = Ee.createObject();
    return r.addImages(e, n._clone()), r;
  }
  _use(e) {
    return ce._disposeAfterExecution(this, e);
  }
  addImages(e, n) {
    n.format = xe.Unknown;
    let r = e;
    for (; r !== 0; ) {
      const l = _._api._MagickImage_GetNext(r);
      _._api._MagickImage_SetNext(r, 0), this.push(re._createFromImage(r, n)), r = l;
    }
  }
  attachImages(e) {
    try {
      for (let n = 0; n < this.length - 1; n++)
        _._api._MagickImage_SetNext(this[n]._instance, this[n + 1]._instance);
      return e(this[0]._instance);
    } finally {
      for (let n = 0; n < this.length - 1; n++)
        _._api._MagickImage_SetNext(this[n]._instance, 0);
    }
  }
  checkResult(e, n) {
    return n.check(() => e, () => (_._api._MagickImageCollection_Dispose(e), 0));
  }
  static createObject() {
    return Object.create(Ee.prototype);
  }
  createImage(e, n) {
    this.throwIfEmpty();
    const r = this.attachImages((d) => T.use((p) => {
      const v = e(d, p);
      return this.checkResult(v, p);
    }));
    return re._createFromImage(r, this.getSettings())._use(n);
  }
  getSettings() {
    return this[0]._getSettings()._clone();
  }
  mergeImages(e, n) {
    return this.createImage((r, l) => _._api._MagickImageCollection_Merge(r, e, l.ptr), n);
  }
  readOrPing(e, n, r) {
    this.dispose(), T.use((l) => {
      const d = r === void 0 ? new De() : new De(r);
      d._ping = e, typeof n == "string" ? (d._fileName = n, d._use((p) => {
        const v = _._api._MagickImageCollection_ReadFile(p._instance, l.ptr);
        this.addImages(v, d);
      })) : d._use((p) => {
        const v = n.byteLength;
        let S = 0;
        try {
          S = _._api._malloc(v), _._api.HEAPU8.set(n, S);
          const R = _._api._MagickImageCollection_ReadBlob(p._instance, S, 0, v, l.ptr);
          this.addImages(R, d);
        } finally {
          S !== 0 && _._api._free(S);
        }
      });
    });
  }
  replaceImages(e) {
    this.throwIfEmpty();
    const n = this.attachImages((l) => T.use((d) => {
      const p = e(l, d);
      return this.checkResult(p, d);
    })), r = this.getSettings()._clone();
    this.dispose(), this.addImages(n, r);
  }
  smush(e, n, r) {
    return this.createImage((l, d) => _._api._MagickImageCollection_Smush(l, e, n ? 1 : 0, d.ptr), r);
  }
  throwIfEmpty() {
    if (this.length === 0)
      throw new U("operation requires at least one image");
  }
}
class te {
  _value;
  /**
   * Initializes a new instance of the {@link Percentage} class.
   * @param value -The value (0% = 0.0, 100% = 100.0)
   */
  constructor(e) {
    this._value = e;
  }
  /** @internal */
  static _fromQuantum(e) {
    return new te(e / je.max * 100);
  }
  /**
   * ultiplies the value by the specified percentage.
   * @param value The value to use.
   * @returns The new value.
   */
  multiply(e) {
    return e * this._value / 100;
  }
  /**
   * Returns a double that represents the current percentage.
   * @returns A double that represents the current percentage.
   */
  toDouble() {
    return this._value;
  }
  /**
   * Returns a string that represents the current percentage.
   * @returns A string that represents the current percentage.
   */
  toString() {
    return `${parseFloat(this._value.toFixed(2))}%`;
  }
  /** @internal */
  _toQuantum() {
    return je.max * (this._value / 100);
  }
}
class Or {
  static use(e, n, r) {
    const l = _._api._MagickRectangle_Create();
    try {
      _._api._MagickRectangle_X_Set(l, n.x), _._api._MagickRectangle_Y_Set(l, n.y);
      let d = n.width, p = n.height;
      return n.isPercentage && (d = new te(n.width).multiply(e.width), p = new te(n.height).multiply(e.height)), _._api._MagickRectangle_Width_Set(l, d), _._api._MagickRectangle_Height_Set(l, p), r(l);
    } finally {
      _._api._MagickRectangle_Dispose(l);
    }
  }
}
class lo {
  static _use(e, n, r) {
    let l = 0;
    try {
      return l = _._api._OffsetInfo_Create(), _._api._PrimaryInfo_X_Set(l, e), _._api._PrimaryInfo_Y_Set(l, n), r(l);
    } finally {
      _._api._free(l);
    }
  }
}
class Zr {
  _values;
  constructor() {
    this._values = new Array(7).fill(0);
  }
  get(e) {
    return this._values[e];
  }
  set(e, n) {
    this._values[e] = n;
  }
}
class Ze {
  _huPhashes = /* @__PURE__ */ new Map();
  _hash = "";
  channel;
  constructor(e, n, r) {
    if (this.channel = e, typeof r == "number")
      for (let l = 0; l < n.length; l++) {
        const d = new Zr();
        for (let p = 0; p < 7; p++) {
          const v = _._api._ChannelPerceptualHash_GetHuPhash(r, l, p);
          d.set(p, v);
        }
        this._huPhashes.set(n[l], d);
      }
    else
      this.parseHash(n, r);
  }
  huPhash(e, n) {
    if (n < 0 || n > 6)
      throw new U("Invalid index specified");
    const r = this._huPhashes.get(e);
    if (r === void 0)
      throw new U("Invalid color space specified");
    return r.get(n);
  }
  sumSquaredDistance(e) {
    let n = 0;
    return this._huPhashes.forEach((r, l) => {
      for (let d = 0; d < 7; d++) {
        const p = r.get(d), v = e.huPhash(l, d);
        n += (p - v) * (p - v);
      }
    }), n;
  }
  toString() {
    return this._hash == "" && this.setHash(), this._hash;
  }
  parseHash(e, n) {
    this._hash = n;
    let r = 0;
    for (const l of e) {
      const d = new Zr();
      for (let p = 0; p < 7; p++, r += 5) {
        const v = Number.parseInt(n.substring(r, r + 5), 16);
        if (isNaN(v))
          throw new U("Invalid hash specified");
        let S = v / Ze.powerOfTen(v >> 17);
        (v & 65536) != 0 && (S = -S), d.set(p, S);
      }
      this._huPhashes.set(l, d);
    }
  }
  static powerOfTen(e) {
    switch (e) {
      case 2:
        return 100;
      case 3:
        return 1e3;
      case 4:
        return 1e4;
      case 5:
        return 1e5;
      case 6:
        return 1e6;
      default:
        return 10;
    }
  }
  setHash() {
    this._hash = "", this._huPhashes.forEach((e) => {
      for (let n = 0; n < 7; n++) {
        let r = e.get(n), l = 0;
        for (; l < 7 && Math.abs(r * 10) < 65356; )
          r *= 10, l++;
        l <<= 1, l < 0 && (l |= 1), l = (l << 16) + Math.floor(r < 0 ? -(r - 0.5) : r + 0.5), this._hash += l.toString(16);
      }
    });
  }
}
class ve {
  _red;
  _green;
  _blue;
  constructor(e, n, r) {
    if (typeof e == "string") {
      const l = n ?? ve._defaultColorspaces();
      ve._validateColorSpaces(l);
      const d = 35 * l.length;
      if (e.length !== 3 * d)
        throw new U("Invalid hash size");
      this._red = new Ze(F.Red, l, e.substring(0, d)), this._blue = new Ze(F.Blue, l, e.substring(d, d + d)), this._green = new Ze(F.Green, l, e.substring(d + d));
    } else
      this._red = e, this._green = n, this._blue = r;
  }
  /** @internal */
  static _create(e, n, r) {
    if (r === 0)
      throw new U("The native operation failed to create an instance");
    const l = ve.createChannel(e, n, r, F.Red), d = ve.createChannel(e, n, r, F.Green), p = ve.createChannel(e, n, r, F.Blue);
    return new ve(l, d, p);
  }
  /** @internal */
  static _defaultColorspaces() {
    return [D.XyY, D.HSB];
  }
  /** @internal */
  static _validateColorSpaces(e) {
    if (e.length < 1 || e.length > 6)
      throw new U("Invalid number of colorspaces, the minimum is 1 and the maximum is 6");
    if (new Set(e).size !== e.length)
      throw new U("Specifying the same colorspace more than once is not allowed");
  }
  getChannel(e) {
    switch (e) {
      case F.Red:
        return this._red;
      case F.Green:
        return this._green;
      case F.Blue:
        return this._blue;
      default:
        return null;
    }
  }
  sumSquaredDistance(e) {
    const n = e.getChannel(F.Red), r = e.getChannel(F.Green), l = e.getChannel(F.Blue);
    if (n === null || r === null || l === null)
      throw new U("The other perceptual hash should contain a red, green and blue channel.");
    return this._red.sumSquaredDistance(n) + this._green.sumSquaredDistance(r) + this._blue.sumSquaredDistance(l);
  }
  toString() {
    return this._red.toString() + this._green.toString() + this._blue.toString();
  }
  static createChannel(e, n, r, l) {
    const d = _._api._PerceptualHash_GetInstance(e._instance, r, l);
    return new Ze(l, n, d);
  }
}
class tt extends Ye {
  image;
  constructor(e) {
    const n = T.usePointer((l) => _._api._PixelCollection_Create(e._instance, l)), r = _._api._PixelCollection_Dispose;
    super(n, r), this.image = e;
  }
  /** @internal */
  static _create(e) {
    return new tt(e);
  }
  static _use(e, n) {
    const r = new tt(e);
    return ce._disposeAfterExecution(r, n);
  }
  /** @internal */
  static _map(e, n, r) {
    const l = new tt(e);
    try {
      l.use(0, 0, e.width, e.height, n, (d) => {
        r(d);
      });
    } finally {
      l.dispose();
    }
  }
  getArea(e, n, r, l) {
    return T.usePointer((d) => {
      const p = _._api._PixelCollection_GetArea(this._instance, e, n, r, l, d), v = r * l * this.image.channelCount;
      return _._api.HEAPU8.subarray(p, p + v);
    });
  }
  getPixel(e, n) {
    return this.getArea(e, n, 1, 1);
  }
  setArea(e, n, r, l, d) {
    T.usePointer((p) => {
      const v = d instanceof Uint8Array ? d : new Uint8Array(d);
      _o(v, (S) => {
        _._api._PixelCollection_SetArea(this._instance, e, n, r, l, S, v.length, p);
      });
    });
  }
  setPixel(e, n, r) {
    r instanceof Uint8Array ? this.setArea(e, n, 1, 1, r) : this.setArea(e, n, 1, 1, r);
  }
  toByteArray(e, n, r, l, d) {
    return this.use(e, n, r, l, d, (p) => {
      if (p === 0)
        return null;
      const v = r * l * d.length;
      return _._api.HEAPU8.slice(p, p + v);
    });
  }
  use(e, n, r, l, d, p) {
    return A(d, (v) => T.use((S) => {
      let R = _._api._PixelCollection_ToByteArray(this._instance, e, n, r, l, v, S.ptr);
      return S.check(() => {
        const B = p(R);
        return R = _._api._MagickMemory_Relinquish(R), B;
      }, () => (R = _._api._MagickMemory_Relinquish(R), null));
    }));
  }
}
const uo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Average.
   */
  Average: 1,
  /**
   * Brightness.
   */
  Brightness: 2,
  /**
   * Lightness.
   */
  Lightness: 3,
  /**
   * MS.
   */
  MS: 4,
  /**
   * Rec601Luma.
   */
  Rec601Luma: 5,
  /**
   * Rec601Luminance.
   */
  Rec601Luminance: 6,
  /**
   * Rec709Luma.
   */
  Rec709Luma: 7,
  /**
   * Rec709Luminance.
   */
  Rec709Luminance: 8,
  /**
   * RMS.
   */
  RMS: 9
};
class Ue {
  /**
   * Initializes a new instance of the {@link PrimaryInfo} class.
   * @param x The x,
   * @param y The y.
   * @param z The z.
   */
  constructor(e, n, r) {
    this.x = e, this.y = n, this.z = r;
  }
  /**
   * Gets the X value.
   */
  x;
  /**
   * Gets the Y value.
   */
  y;
  /**
   * Gets the Z value.
   */
  z;
  /** @internal */
  static _create(e) {
    return e === 0 ? new Ue(0, 0, 0) : new Ue(
      _._api._PrimaryInfo_X_Get(e),
      _._api._PrimaryInfo_Y_Get(e),
      _._api._PrimaryInfo_Z_Get(e)
    );
  }
  /** @internal */
  _use(e) {
    let n = 0;
    try {
      n = _._api._PrimaryInfo_Create(), _._api._PrimaryInfo_X_Set(n, this.x), _._api._PrimaryInfo_Y_Set(n, this.y), _._api._PrimaryInfo_Z_Set(n, this.z), e(n);
    } finally {
      _._api._free(n);
    }
  }
}
class go {
  channel;
  depth;
  entropy;
  kurtosis;
  maximum;
  mean;
  minimum;
  skewness;
  standardDeviation;
  constructor(e, n) {
    this.channel = e, this.depth = _._api._ChannelStatistics_Depth_Get(n), this.entropy = _._api._ChannelStatistics_Entropy_Get(n), this.kurtosis = _._api._ChannelStatistics_Kurtosis_Get(n), this.maximum = _._api._ChannelStatistics_Maximum_Get(n), this.mean = _._api._ChannelStatistics_Mean_Get(n), this.minimum = _._api._ChannelStatistics_Minimum_Get(n), this.skewness = _._api._ChannelStatistics_Skewness_Get(n), this.standardDeviation = _._api._ChannelStatistics_StandardDeviation_Get(n);
  }
}
class _r {
  _channels = /* @__PURE__ */ new Map();
  get channels() {
    return Array.from(this._channels.keys());
  }
  composite() {
    return this._channels.get(F.Composite);
  }
  getChannel(e) {
    const n = this._channels.get(e);
    return n !== void 0 ? n : null;
  }
  static _create(e, n, r) {
    const l = new _r();
    return e.channels.forEach((d) => {
      (r >> d & 1) != 0 && l.addChannel(n, d);
    }), l.addChannel(n, F.Composite), l;
  }
  addChannel(e, n) {
    const r = _._api._Statistics_GetInstance(e, n);
    r !== 0 && this._channels.set(n, new go(n, r));
  }
}
class ho {
  static toArray(e) {
    if (e === 0)
      return null;
    const n = _._api._StringInfo_Datum_Get(e), r = _._api._StringInfo_Length_Get(e);
    return _._api.HEAPU8.subarray(n, n + r);
  }
}
class ei {
  /** @internal */
  constructor(e) {
    this.error = e;
  }
  /**
   * Gets the warning that was raised.
   */
  error;
}
class re extends Ye {
  _settings;
  _progress;
  _warning;
  constructor(e, n) {
    super(e, _._api._MagickImage_Dispose), this._settings = n;
  }
  get animationDelay() {
    return _._api._MagickImage_AnimationDelay_Get(this._instance);
  }
  set animationDelay(e) {
    _._api._MagickImage_AnimationDelay_Set(this._instance, e);
  }
  get animationIterations() {
    return _._api._MagickImage_AnimationIterations_Get(this._instance);
  }
  set animationIterations(e) {
    _._api._MagickImage_AnimationIterations_Set(this._instance, e);
  }
  get animationTicksPerSecond() {
    return _._api._MagickImage_AnimationTicksPerSecond_Get(this._instance);
  }
  set animationTicksPerSecond(e) {
    _._api._MagickImage_AnimationTicksPerSecond_Set(this._instance, e);
  }
  get artifactNames() {
    const e = [];
    _._api._MagickImage_ResetArtifactIterator(this._instance);
    let n = _._api._MagickImage_GetNextArtifactName(this._instance);
    for (; n !== 0; )
      e.push(_._api.UTF8ToString(n)), n = _._api._MagickImage_GetNextArtifactName(this._instance);
    return e;
  }
  get attributeNames() {
    const e = [];
    _._api._MagickImage_ResetAttributeIterator(this._instance);
    let n = _._api._MagickImage_GetNextAttributeName(this._instance);
    for (; n !== 0; )
      e.push(_._api.UTF8ToString(n)), n = _._api._MagickImage_GetNextAttributeName(this._instance);
    return e;
  }
  get backgroundColor() {
    const e = _._api._MagickImage_BackgroundColor_Get(this._instance);
    return k._create(e);
  }
  set backgroundColor(e) {
    e._use((n) => {
      _._api._MagickImage_BackgroundColor_Set(this._instance, n);
    });
  }
  get baseHeight() {
    return _._api._MagickImage_BaseHeight_Get(this._instance);
  }
  get baseWidth() {
    return _._api._MagickImage_BaseWidth_Get(this._instance);
  }
  get blackPointCompensation() {
    return _._api._MagickImage_BlackPointCompensation_Get(this._instance) === 1;
  }
  set blackPointCompensation(e) {
    _._api._MagickImage_BlackPointCompensation_Set(this._instance, e ? 1 : 0);
  }
  get borderColor() {
    const e = _._api._MagickImage_BorderColor_Get(this._instance);
    return k._create(e);
  }
  set borderColor(e) {
    e._use((n) => {
      _._api._MagickImage_BorderColor_Set(this._instance, n);
    });
  }
  get boundingBox() {
    return this.useExceptionPointer((e) => {
      const n = _._api._MagickImage_BoundingBox_Get(this._instance, e), r = ne._fromRectangle(n);
      return r.width === 0 || r.height === 0 ? null : r;
    });
  }
  get channelCount() {
    return _._api._MagickImage_ChannelCount_Get(this._instance);
  }
  get channels() {
    const e = [];
    return [F.Red, F.Green, F.Blue, F.Black, F.Alpha].forEach((n) => {
      _._api._MagickImage_HasChannel(this._instance, n) && e.push(n);
    }), e;
  }
  get chromaticity() {
    return new Zs(
      Ue._create(_._api._MagickImage_ChromaRed_Get(this._instance)),
      Ue._create(_._api._MagickImage_ChromaGreen_Get(this._instance)),
      Ue._create(_._api._MagickImage_ChromaBlue_Get(this._instance)),
      Ue._create(_._api._MagickImage_ChromaWhite_Get(this._instance))
    );
  }
  set chromaticity(e) {
    e.blue._use((n) => _._api._MagickImage_ChromaBlue_Set(this._instance, n)), e.green._use((n) => _._api._MagickImage_ChromaGreen_Set(this._instance, n)), e.red._use((n) => _._api._MagickImage_ChromaRed_Set(this._instance, n)), e.white._use((n) => _._api._MagickImage_ChromaWhite_Set(this._instance, n));
  }
  get classType() {
    return _._api._MagickImage_ClassType_Get(this._instance);
  }
  set classType(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_ClassType_Set(this._instance, e, n);
    });
  }
  get colorFuzz() {
    return te._fromQuantum(_._api._MagickImage_ColorFuzz_Get(this._instance));
  }
  set colorFuzz(e) {
    _._api._MagickImage_ColorFuzz_Set(this._instance, e._toQuantum());
  }
  get colormapSize() {
    return _._api._MagickImage_ColormapSize_Get(this._instance);
  }
  set colormapSize(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_ColormapSize_Set(this._instance, e, n);
    });
  }
  get colorSpace() {
    return _._api._MagickImage_ColorSpace_Get(this._instance);
  }
  set colorSpace(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_ColorSpace_Set(this._instance, e, n);
    });
  }
  get colorType() {
    return this.settings.colorType !== void 0 ? this.settings.colorType : _._api._MagickImage_ColorType_Get(this._instance);
  }
  set colorType(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_ColorType_Set(this._instance, e, n);
    });
  }
  get comment() {
    return this.getAttribute("comment");
  }
  set comment(e) {
    e === null ? this.removeAttribute("comment") : this.setAttribute("comment", e);
  }
  get compose() {
    return _._api._MagickImage_Compose_Get(this._instance);
  }
  set compose(e) {
    _._api._MagickImage_Compose_Set(this._instance, e);
  }
  get compression() {
    return _._api._MagickImage_Compression_Get(this._instance);
  }
  get density() {
    return new et(
      _._api._MagickImage_ResolutionX_Get(this._instance),
      _._api._MagickImage_ResolutionY_Get(this._instance),
      _._api._MagickImage_ResolutionUnits_Get(this._instance)
    );
  }
  set density(e) {
    _._api._MagickImage_ResolutionX_Set(this._instance, e.x), _._api._MagickImage_ResolutionY_Set(this._instance, e.y), _._api._MagickImage_ResolutionUnits_Set(this._instance, e.units);
  }
  get depth() {
    return _._api._MagickImage_Depth_Get(this._instance);
  }
  set depth(e) {
    _._api._MagickImage_Depth_Set(this._instance, e);
  }
  get endian() {
    return _._api._MagickImage_Endian_Get(this._instance);
  }
  set endian(e) {
    _._api._MagickImage_Endian_Set(this._instance, e);
  }
  get fileName() {
    const e = _._api._MagickImage_FileName_Get(this._instance);
    return e === 0 ? null : _._api.UTF8ToString(e);
  }
  get filterType() {
    return _._api._MagickImage_FilterType_Get(this._instance);
  }
  set filterType(e) {
    _._api._MagickImage_FilterType_Set(this._instance, e);
  }
  get format() {
    return ge(_._api._MagickImage_Format_Get(this._instance), "");
  }
  set format(e) {
    A(e.toString(), (n) => _._api._MagickImage_Format_Set(this._instance, n));
  }
  get gamma() {
    return _._api._MagickImage_Gamma_Get(this._instance);
  }
  get gifDisposeMethod() {
    return _._api._MagickImage_GifDisposeMethod_Get(this._instance);
  }
  set gifDisposeMethod(e) {
    _._api._MagickImage_GifDisposeMethod_Set(this._instance, e);
  }
  get hasAlpha() {
    return this.toBool(_._api._MagickImage_HasAlpha_Get(this._instance));
  }
  set hasAlpha(e) {
    this.useExceptionPointer((n) => {
      e && this.alpha(Os.Opaque), _._api._MagickImage_HasAlpha_Set(this._instance, this.fromBool(e), n);
    });
  }
  get height() {
    return _._api._MagickImage_Height_Get(this._instance);
  }
  get interlace() {
    return _._api._MagickImage_Interlace_Get(this._instance);
  }
  get isOpaque() {
    return this.useExceptionPointer((e) => this.toBool(_._api._MagickImage_IsOpaque_Get(this._instance, e)));
  }
  get interpolate() {
    return _._api._MagickImage_Interpolate_Get(this._instance);
  }
  set interpolate(e) {
    _._api._MagickImage_Interpolate_Set(this._instance, e);
  }
  get label() {
    return this.getAttribute("label");
  }
  set label(e) {
    e === null ? this.removeAttribute("label") : this.setAttribute("label", e);
  }
  get matteColor() {
    const e = _._api._MagickImage_MatteColor_Get(this._instance);
    return k._create(e);
  }
  set matteColor(e) {
    e._use((n) => {
      _._api._MagickImage_MatteColor_Set(this._instance, n);
    });
  }
  get metaChannelCount() {
    return _._api._MagickImage_MetaChannelCount_Get(this._instance);
  }
  set metaChannelCount(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_MetaChannelCount_Set(this._instance, e, n);
    });
  }
  get orientation() {
    return _._api._MagickImage_Orientation_Get(this._instance);
  }
  set orientation(e) {
    _._api._MagickImage_Orientation_Set(this._instance, e);
  }
  get onProgress() {
    return this._progress;
  }
  set onProgress(e) {
    e !== void 0 ? ae.setProgressDelegate(this) : this.disposeProgressDelegate(), this._progress = e;
  }
  get onWarning() {
    return this._warning;
  }
  set onWarning(e) {
    this._warning = e;
  }
  get page() {
    const e = _._api._MagickImage_Page_Get(this._instance);
    return ne._fromRectangle(e);
  }
  set page(e) {
    e._toRectangle((n) => {
      _._api._MagickImage_Page_Set(this._instance, n);
    });
  }
  get profileNames() {
    const e = [];
    _._api._MagickImage_ResetProfileIterator(this._instance);
    let n = _._api._MagickImage_GetNextProfileName(this._instance);
    for (; n !== 0; )
      e.push(_._api.UTF8ToString(n)), n = _._api._MagickImage_GetNextProfileName(this._instance);
    return e;
  }
  get quality() {
    return _._api._MagickImage_Quality_Get(this._instance);
  }
  set quality(e) {
    let n = e < 1 ? 1 : e;
    n = n > 100 ? 100 : n, _._api._MagickImage_Quality_Set(this._instance, n), this._settings._quality = n;
  }
  get renderingIntent() {
    return _._api._MagickImage_RenderingIntent_Get(this._instance);
  }
  set renderingIntent(e) {
    _._api._MagickImage_RenderingIntent_Set(this._instance, e);
  }
  get settings() {
    return this._settings;
  }
  get signature() {
    return this.useExceptionPointer((e) => ge(_._api._MagickImage_Signature_Get(this._instance, e)));
  }
  get totalColors() {
    return this.useExceptionPointer((e) => _._api._MagickImage_TotalColors_Get(this._instance, e));
  }
  get virtualPixelMethod() {
    return _._api._MagickImage_VirtualPixelMethod_Get(this._instance);
  }
  set virtualPixelMethod(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_VirtualPixelMethod_Set(this._instance, e, n);
    });
  }
  get width() {
    return _._api._MagickImage_Width_Get(this._instance);
  }
  adaptiveBlur(e, n) {
    const r = this.valueOrDefault(e, 0), l = this.valueOrDefault(n, 1);
    this.useException((d) => {
      const p = _._api._MagickImage_AdaptiveBlur(this._instance, r, l, d.ptr);
      this._setInstance(p, d);
    });
  }
  adaptiveResize(e, n) {
    const r = typeof e == "number" ? new ne(0, 0, e, n) : e;
    this.useException((l) => {
      A(r.toString(), (d) => {
        const p = _._api._MagickImage_AdaptiveResize(this._instance, d, l.ptr);
        this._setInstance(p, l);
      });
    });
  }
  adaptiveSharpen(e, n, r) {
    let l = 0;
    const d = n ?? 1;
    let p = r ?? X.Undefined;
    e !== void 0 && (n === void 0 ? p = e : l = e), this.useException((v) => {
      const S = _._api._MagickImage_AdaptiveSharpen(this._instance, l, d, p, v.ptr);
      this._setInstance(S, v);
    });
  }
  adaptiveThreshold(e, n, r, l) {
    const d = r instanceof te ? r._toQuantum() : 0;
    let p = l ?? X.Undefined;
    typeof r == "number" && (p = r), this.useException((v) => {
      const S = _._api._MagickImage_AdaptiveThreshold(this._instance, e, n, d, p, v.ptr);
      this._setInstance(S, v);
    });
  }
  addNoise(e, n, r) {
    let l = 1, d = r ?? X.Undefined;
    n !== void 0 && (r === void 0 ? d = n : l = n), this.useException((p) => {
      const v = _._api._MagickImage_AddNoise(this._instance, e, l, d, p.ptr);
      this._setInstance(v, p);
    });
  }
  alpha(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_SetAlpha(this._instance, e, n);
    });
  }
  annotate(e, n, r, l) {
    const d = Et._create(this._settings);
    return this.useExceptionPointer((p) => d._use((v) => {
      A(e, (S) => {
        let R = null, B = he.Undefined, Y = 0;
        typeof n == "object" ? (R = n.toString(), r !== void 0 && (B = r), l !== void 0 && (Y = l)) : (B = n, r !== void 0 && (Y = r)), A(R, (ke) => {
          _._api._MagickImage_Annotate(this._instance, v._instance, S, ke, B, Y, p);
        });
      });
    }));
  }
  autoGamma(e) {
    this.useExceptionPointer((n) => {
      const r = this.valueOrDefault(e, X.Composite);
      _._api._MagickImage_AutoGamma(this._instance, r, n);
    });
  }
  autoLevel(e) {
    this.useExceptionPointer((n) => {
      const r = this.valueOrDefault(e, X.Undefined);
      _._api._MagickImage_AutoLevel(this._instance, r, n);
    });
  }
  autoOrient() {
    this.useException((e) => {
      const n = _._api._MagickImage_AutoOrient(this._instance, e.ptr);
      this._setInstance(n, e);
    });
  }
  autoThreshold(e) {
    this.useException((n) => {
      _._api._MagickImage_AutoThreshold(this._instance, e, n.ptr);
    });
  }
  bilateralBlur(e, n, r, l) {
    const d = this.valueOrComputedDefault(r, () => Math.sqrt(e * e + n * n)), p = this.valueOrDefault(l, d * 0.25);
    this.useException((v) => {
      const S = _._api._MagickImage_BilateralBlur(this._instance, e, n, d, p, v.ptr);
      this._setInstance(S, v);
    });
  }
  blackThreshold(e, n) {
    const r = this.valueOrDefault(n, X.Composite);
    this.useException((l) => {
      A(e.toString(), (d) => {
        _._api._MagickImage_BlackThreshold(this._instance, d, r, l.ptr);
      });
    });
  }
  blueShift(e) {
    const n = this.valueOrDefault(e, 1.5);
    this.useException((r) => {
      const l = _._api._MagickImage_BlueShift(this._instance, n, r.ptr);
      this._setInstance(l, r);
    });
  }
  blur(e, n, r) {
    let l = 0;
    const d = this.valueOrDefault(n, 1);
    let p = this.valueOrDefault(r, X.Undefined);
    e !== void 0 && (n === void 0 ? p = e : l = e), this.useException((v) => {
      const S = _._api._MagickImage_Blur(this._instance, l, d, p, v.ptr);
      this._setInstance(S, v);
    });
  }
  border(e, n) {
    const r = e, l = this.valueOrDefault(n, e), d = new ne(0, 0, r, l);
    this.useException((p) => {
      d._toRectangle((v) => {
        const S = _._api._MagickImage_Border(this._instance, v, p.ptr);
        this._setInstance(S, p);
      });
    });
  }
  brightnessContrast(e, n, r) {
    const l = this.valueOrDefault(r, X.Undefined);
    this.useException((d) => {
      _._api._MagickImage_BrightnessContrast(this._instance, e.toDouble(), n.toDouble(), l, d.ptr);
    });
  }
  cannyEdge(e, n, r, l) {
    const d = this.valueOrDefault(e, 0), p = this.valueOrDefault(n, 1), v = this.valueOrDefault(r, new te(10)).toDouble() / 100, S = this.valueOrDefault(l, new te(30)).toDouble() / 100;
    this.useException((R) => {
      const B = _._api._MagickImage_CannyEdge(this._instance, d, p, v, S, R.ptr);
      this._setInstance(B, R);
    });
  }
  charcoal(e, n) {
    const r = e === void 0 ? 0 : e, l = n === void 0 ? 1 : n;
    this.useException((d) => {
      const p = _._api._MagickImage_Charcoal(this._instance, r, l, d.ptr);
      this._setInstance(p, d);
    });
  }
  chop(e) {
    this.useException((n) => {
      e._toRectangle((r) => {
        const l = _._api._MagickImage_Chop(this._instance, r, n.ptr);
        this._setInstance(l, n);
      });
    });
  }
  chopHorizontal(e, n) {
    this.chop(new ne(e, 0, n, 0));
  }
  chopVertical(e, n) {
    this.chop(new ne(0, e, 0, n));
  }
  clahe(e, n, r, l) {
    this.useExceptionPointer((d) => {
      const p = e instanceof te ? e.multiply(this.width) : e, v = n instanceof te ? n.multiply(this.height) : n;
      _._api._MagickImage_Clahe(this._instance, p, v, r, l, d);
    });
  }
  clone(e) {
    return re._clone(this)._use(e);
  }
  cloneArea(e, n) {
    return T.usePointer((r) => e._toRectangle((l) => lo._use(0, 0, (d) => {
      const p = _._api._MagickImage_CloneArea(this._instance, e.width, e.height, r);
      _._api._MagickImage_CopyPixels(p, this._instance, l, d, X.Undefined, r);
      const v = new re(p, this._settings);
      return n(v);
    })));
  }
  colorAlpha(e) {
    if (!this.hasAlpha)
      return;
    const n = re.create();
    n.read(e, this.width, this.height), n.composite(this, Zt.SrcOver, new Pe(0, 0)), this._instance = n._instance;
  }
  compare(e, n, r, l) {
    const d = n instanceof io, p = d ? n.metric : n;
    let v = r;
    l !== void 0 && (v = l);
    let S = X.Undefined;
    if (typeof v != "function")
      return v !== void 0 && (S = v), this.useExceptionPointer((B) => _._api._MagickImage_CompareDistortion(this._instance, e._instance, p, S, B));
    r !== void 0 && typeof r != "function" && (S = r);
    const R = Ce.use(this, (B) => (d && n._setArtifacts(B), cr.use((Y) => {
      const ke = this.useExceptionPointer((Ve) => _._api._MagickImage_Compare(this._instance, e._instance, p, S, Y.ptr, Ve)), Fe = Y.value, Ae = re._createFromImage(ke, this._settings);
      return ar._create(Fe, Ae);
    })));
    return R.difference._use(() => v(R));
  }
  composite(e, n, r, l, d) {
    let p = 0, v = 0, S = Zt.In, R = X.All, B = null;
    n instanceof Pe ? (p = n.x, v = n.y) : n !== void 0 && (S = n), r instanceof Pe ? (p = r.x, v = r.y) : typeof r == "string" ? B = r : r !== void 0 && (R = r), typeof l == "string" ? B = l : l !== void 0 && (R = l), d !== void 0 && (R = d), B !== null && this.setArtifact("compose:args", B), this.useExceptionPointer((Y) => {
      _._api._MagickImage_Composite(this._instance, e._instance, p, v, S, R, Y);
    }), B !== null && this.removeArtifact("compose:args");
  }
  compositeGravity(e, n, r, l, d, p) {
    let v = 0, S = 0, R = Zt.In, B = X.All, Y = null;
    r instanceof Pe ? (v = r.x, S = r.y) : r !== void 0 && (R = r), l instanceof Pe ? (v = l.x, S = l.y) : typeof l == "string" ? Y = l : l !== void 0 && (B = l), typeof d == "string" ? Y = d : d !== void 0 && (B = d), p !== void 0 && (B = p), Y !== null && this.setArtifact("compose:args", Y), this.useExceptionPointer((ke) => {
      _._api._MagickImage_CompositeGravity(this._instance, e._instance, n, v, S, R, B, ke);
    }), Y !== null && this.removeArtifact("compose:args");
  }
  connectedComponents(e) {
    const n = typeof e == "number" ? new ao(e) : e;
    return Ce.use(this, (l) => (n._setArtifacts(l), this.useException((d) => Te.use((p) => {
      try {
        const v = _._api._MagickImage_ConnectedComponents(this._instance, n.connectivity, p.ptr, d.ptr);
        return this._setInstance(v, d), sr._create(p.value, this.colormapSize);
      } finally {
        p.value !== 0 && _._api._ConnectedComponent_DisposeList(p.value);
      }
    }))));
  }
  contrast = () => this._contrast(!0);
  contrastStretch(e, n, r) {
    const l = this.width * this.height, d = e.multiply(l);
    let p = 0, v = this.valueOrDefault(r, X.Undefined);
    n instanceof te ? p = l - n.multiply(l) : (p = l - e.multiply(l), n !== void 0 && (v = n)), this.useExceptionPointer((S) => {
      _._api._MagickImage_ContrastStretch(this._instance, d, p, v, S);
    });
  }
  static create(e, n, r) {
    const l = new re(re.createInstance(), new _t());
    return e !== void 0 && l.readOrPing(!1, e, n, r), l;
  }
  crop(e, n, r) {
    let l, d;
    typeof e != "number" ? (l = e, d = this.valueOrDefault(n, he.Undefined)) : n !== void 0 && (l = new ne(e, n), d = this.valueOrDefault(r, he.Undefined)), this.useException((p) => {
      A(l.toString(), (v) => {
        const S = _._api._MagickImage_Crop(this._instance, v, d, p.ptr);
        this._setInstance(S, p);
      });
    });
  }
  cropToTiles(e, n, r) {
    let l, d;
    return typeof e == "number" && typeof n == "number" && r !== void 0 ? (l = new ne(0, 0, e, n), d = r) : typeof e != "number" && typeof n != "number" && (l = e, d = n), this.useException((p) => A(l.toString(), (v) => {
      const S = _._api._MagickImage_CropToTiles(this._instance, v, p.ptr);
      return Ee._createFromImages(S, this._settings)._use(d);
    }));
  }
  deskew(e, n) {
    return Ce.use(this, (r) => {
      n !== void 0 && r.setArtifact("deskew:auto-crop", n), this.useException((d) => {
        const p = _._api._MagickImage_Deskew(this._instance, e._toQuantum(), d.ptr);
        this._setInstance(p, d);
      });
      const l = Number(this.getArtifact("deskew:angle"));
      return isNaN(l) ? 0 : l;
    });
  }
  distort(e, n) {
    Ce.use(this, (r) => {
      let l, d = 0;
      typeof e == "number" ? l = e : (l = e.method, d = e.bestFit ? 1 : 0, e._setArtifacts(r)), this.useException((p) => {
        oi(n, (v) => {
          const S = _._api._MagickImage_Distort(this._instance, l, d, v, n.length, p.ptr);
          this._setInstance(S, p);
        });
      });
    });
  }
  draw(...e) {
    const n = e.flat();
    n.length !== 0 && Dt._use(this, (r) => {
      r.draw(n);
    });
  }
  evaluate(e, n, r, l) {
    if (typeof n == "number") {
      const d = n, p = typeof r == "number" ? r : r._toQuantum();
      this.useExceptionPointer((v) => {
        _._api._MagickImage_EvaluateOperator(this._instance, e, d, p, v);
      });
    } else if (l !== void 0) {
      if (typeof r != "number")
        throw new U("this should not happen");
      const d = n, p = r, v = typeof l == "number" ? l : l._toQuantum();
      if (d.isPercentage)
        throw new U("percentage is not supported");
      this.useExceptionPointer((S) => {
        Or.use(this, d, (R) => {
          _._api._MagickImage_EvaluateGeometry(this._instance, e, R, p, v, S);
        });
      });
    }
  }
  extent(e, n, r) {
    let l = he.Undefined, d;
    typeof e != "number" ? d = e : typeof n == "number" && (d = new ne(e, n)), typeof n == "number" ? l = n : n !== void 0 && (this.backgroundColor = n), typeof r == "number" ? l = r : r !== void 0 && (this.backgroundColor = r), this.useException((p) => {
      A(d.toString(), (v) => {
        const S = _._api._MagickImage_Extent(this._instance, v, l, p.ptr);
        this._setInstance(S, p);
      });
    });
  }
  flip() {
    this.useException((e) => {
      const n = _._api._MagickImage_Flip(this._instance, e.ptr);
      this._setInstance(n, e);
    });
  }
  flop() {
    this.useException((e) => {
      const n = _._api._MagickImage_Flop(this._instance, e.ptr);
      this._setInstance(n, e);
    });
  }
  /**
   * Formats the specified expression (more info can be found here: https://imagemagick.org/script/escape.php).
   * @param expression The expression.
   */
  formatExpression(e) {
    return this.useExceptionPointer((n) => this._settings._use((r) => A(e, (l) => {
      const d = _._api._MagickImage_FormatExpression(this._instance, r._instance, l, n);
      return no(_._api, d);
    })));
  }
  gammaCorrect(e, n) {
    const r = this.valueOrDefault(n, X.Undefined);
    this.useExceptionPointer((l) => {
      _._api._MagickImage_GammaCorrect(this._instance, e, r, l);
    });
  }
  gaussianBlur(e, n, r) {
    const l = this.valueOrDefault(n, 1), d = this.valueOrDefault(r, X.Undefined);
    this.useException((p) => {
      const v = _._api._MagickImage_GaussianBlur(this._instance, e, l, d, p.ptr);
      this._setInstance(v, p);
    });
  }
  getArtifact(e) {
    return A(e, (n) => {
      const r = _._api._MagickImage_GetArtifact(this._instance, n);
      return ge(r);
    });
  }
  getAttribute(e) {
    return this.useException((n) => A(e, (r) => {
      const l = _._api._MagickImage_GetAttribute(this._instance, r, n.ptr);
      return ge(l);
    }));
  }
  getColorProfile() {
    const e = ["icc", "icm"];
    for (const n of e) {
      const r = this._getProfile(n);
      if (r !== null)
        return new ro(r);
    }
    return null;
  }
  getPixels(e) {
    if (this._settings._ping)
      throw new U("image contains no pixel data");
    return tt._use(this, e);
  }
  getProfile(e) {
    const n = this._getProfile(e);
    return n === null ? null : new ri(e, n);
  }
  getWriteMask(e) {
    const n = this.useExceptionPointer((l) => _._api._MagickImage_GetWriteMask(this._instance, l)), r = n === 0 ? null : new re(n, new _t());
    return r == null ? e(r) : r._use(e);
  }
  grayscale(e = uo.Undefined) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_Grayscale(this._instance, e, n);
    });
  }
  hasProfile(e) {
    return A(e, (n) => this.toBool(_._api._MagickImage_HasProfile(this._instance, n)));
  }
  histogram() {
    const e = /* @__PURE__ */ new Map();
    return this.useExceptionPointer((n) => {
      Te.use((r) => {
        const l = _._api._MagickImage_Histogram(this._instance, r.ptr, n);
        if (l !== 0) {
          const d = r.value;
          for (let p = 0; p < d; p++) {
            const v = _._api._MagickColorCollection_GetInstance(l, p), S = k._create(v), R = _._api._MagickColor_Count_Get(v);
            e.set(S.toString(), R);
          }
          _._api._MagickColorCollection_DisposeList(l);
        }
      });
    }), e;
  }
  inverseContrast = () => this._contrast(!1);
  inverseLevel(e, n, r, l) {
    const d = this.valueOrDefault(r, 1), p = this.valueOrDefault(l, X.Composite);
    this.useExceptionPointer((v) => {
      _._api._MagickImage_InverseLevel(this._instance, e.toDouble(), n._toQuantum(), d, p, v);
    });
  }
  inverseOpaque = (e, n) => this._opaque(e, n, !0);
  inverseSigmoidalContrast(e, n, r) {
    this._sigmoidalContrast(!1, e, n, r);
  }
  inverseTransparent = (e) => this._transparent(e, !0);
  level(e, n, r, l) {
    const d = this.valueOrDefault(r, 1), p = this.valueOrDefault(l, X.Composite);
    this.useExceptionPointer((v) => {
      _._api._MagickImage_Level(this._instance, e.toDouble(), n._toQuantum(), d, p, v);
    });
  }
  linearStretch(e, n) {
    this.useExceptionPointer((r) => {
      _._api._MagickImage_LinearStretch(this._instance, e.toDouble(), n._toQuantum(), r);
    });
  }
  liquidRescale(e, n) {
    const r = typeof e == "number" ? new ne(e, n) : e;
    this.useException((l) => {
      A(r.toString(), (d) => {
        const p = _._api._MagickImage_LiquidRescale(this._instance, d, r.x, r.y, l.ptr);
        this._setInstance(p, l);
      });
    });
  }
  negate(e) {
    this.useExceptionPointer((n) => {
      const r = this.valueOrDefault(e, X.Undefined);
      _._api._MagickImage_Negate(this._instance, 0, r, n);
    });
  }
  negateGrayScale(e) {
    this.useExceptionPointer((n) => {
      const r = this.valueOrDefault(e, X.Undefined);
      _._api._MagickImage_Negate(this._instance, 1, r, n);
    });
  }
  normalize() {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_Normalize(this._instance, e);
    });
  }
  modulate(e, n, r) {
    const l = this.valueOrDefault(n, new te(100)), d = this.valueOrDefault(r, new te(100));
    this.useExceptionPointer((p) => {
      const v = `${e.toDouble()}/${l.toDouble()}/${d.toDouble()}`;
      A(v, (S) => {
        _._api._MagickImage_Modulate(this._instance, S, p);
      });
    });
  }
  morphology(e) {
    this.useException((n) => {
      A(e.kernel, (r) => {
        const l = _._api._MagickImage_Morphology(this._instance, e.method, r, e.channels, e.iterations, n.ptr);
        this._setInstance(l, n);
      });
    });
  }
  motionBlur(e, n, r) {
    this.useException((l) => {
      const d = _._api._MagickImage_MotionBlur(this._instance, e, n, r, l.ptr);
      this._setInstance(d, l);
    });
  }
  oilPaint(e) {
    const n = this.valueOrDefault(e, 3), r = 0;
    this.useException((l) => {
      const d = _._api._MagickImage_OilPaint(this._instance, n, r, l.ptr);
      this._setInstance(d, l);
    });
  }
  opaque = (e, n) => this._opaque(e, n, !1);
  ping(e, n) {
    this.readOrPing(!0, e, n);
  }
  perceptualHash(e) {
    const n = this.valueOrDefault(e, ve._defaultColorspaces());
    return ve._validateColorSpaces(n), Ce.use(this, (r) => {
      const l = n.map((d) => Kr[d]).join(",");
      return r.setArtifact("phash:colorspaces", l), this.useExceptionPointer((d) => {
        const p = _._api._MagickImage_PerceptualHash(this._instance, d);
        return ve._create(this, n, p);
      });
    });
  }
  quantize(e) {
    const n = this.valueOrDefault(e, new rr());
    return this.useException((r) => {
      n._use((l) => {
        _._api._MagickImage_Quantize(this._instance, l._instance, r.ptr);
      });
    }), n.measureErrors ? bt._create(this) : null;
  }
  read(e, n, r) {
    this.readOrPing(!1, e, n, r);
  }
  readFromCanvas(e, n) {
    const r = e.getContext("2d", n);
    if (r === null)
      return;
    const l = r.getImageData(0, 0, e.width, e.height), d = new De();
    d.format = xe.Rgba, d.width = e.width, d.height = e.height, this.useException((p) => {
      this.readFromArray(l.data, d, p);
    });
  }
  removeArtifact(e) {
    A(e, (n) => {
      _._api._MagickImage_RemoveArtifact(this._instance, n);
    });
  }
  removeAttribute(e) {
    A(e, (n) => {
      _._api._MagickImage_RemoveAttribute(this._instance, n);
    });
  }
  removeProfile(e) {
    const n = typeof e == "string" ? e : e.name;
    A(n, (r) => {
      _._api._MagickImage_RemoveProfile(this._instance, r);
    });
  }
  removeWriteMask() {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_SetWriteMask(this._instance, 0, e);
    });
  }
  resetPage() {
    this.page = new ne(0, 0, 0, 0);
  }
  resize(e, n) {
    const r = typeof e == "number" ? new ne(e, n) : e;
    this.useException((l) => {
      A(r.toString(), (d) => {
        const p = _._api._MagickImage_Resize(this._instance, d, this.filterType, l.ptr);
        this._setInstance(p, l);
      });
    });
  }
  rotate(e) {
    this.useException((n) => {
      const r = _._api._MagickImage_Rotate(this._instance, e, n.ptr);
      this._setInstance(r, n);
    });
  }
  separate(e, n) {
    return this.useException((r) => {
      let l, d = X.Undefined;
      if (typeof e == "number" && n !== void 0)
        d = e, l = n;
      else if (typeof e == "function")
        l = e;
      else
        throw new U("invalid arguments");
      const p = _._api._MagickImage_Separate(this._instance, d, r.ptr);
      return Ee._createFromImages(p, this._settings)._use(l);
    });
  }
  sepiaTone(e = new te(80)) {
    this.useException((n) => {
      const r = typeof e == "number" ? new te(e) : e, l = _._api._MagickImage_SepiaTone(this._instance, r._toQuantum(), n.ptr);
      this._setInstance(l, n);
    });
  }
  setArtifact(e, n) {
    let r;
    typeof n == "string" ? r = n : typeof n == "boolean" ? r = this.fromBool(n).toString() : r = n.toString(), A(e, (l) => {
      A(r, (d) => {
        _._api._MagickImage_SetArtifact(this._instance, l, d);
      });
    });
  }
  setAttribute(e, n) {
    this.useException((r) => {
      A(e, (l) => {
        A(n, (d) => {
          _._api._MagickImage_SetAttribute(this._instance, l, d, r.ptr);
        });
      });
    });
  }
  setProfile(e, n) {
    const r = typeof e == "string" ? e : e.name;
    let l;
    n !== void 0 ? l = n : typeof e != "string" && (l = e.data), this.useException((d) => {
      A(r, (p) => {
        Jr(l, (v) => {
          _._api._MagickImage_SetProfile(this._instance, p, v, l.byteLength, d.ptr);
        });
      });
    });
  }
  setWriteMask(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_SetWriteMask(this._instance, e._instance, n);
    });
  }
  sharpen(e, n, r) {
    const l = this.valueOrDefault(e, 0), d = this.valueOrDefault(n, 1), p = this.valueOrDefault(r, X.Undefined);
    this.useException((v) => {
      const S = _._api._MagickImage_Sharpen(this._instance, l, d, p, v.ptr);
      this._setInstance(S, v);
    });
  }
  shave(e, n) {
    this.useException((r) => {
      const l = _._api._MagickImage_Shave(this._instance, e, n, r.ptr);
      this._setInstance(l, r);
    });
  }
  sigmoidalContrast(e, n, r) {
    this._sigmoidalContrast(!0, e, n, r);
  }
  solarize(e = new te(50)) {
    this.useException((n) => {
      const r = typeof e == "number" ? new te(e) : e;
      _._api._MagickImage_Solarize(this._instance, r._toQuantum(), n.ptr);
    });
  }
  splice(e) {
    Or.use(this, e, (n) => {
      this.useException((r) => {
        const l = _._api._MagickImage_Splice(this._instance, n, r.ptr);
        this._setInstance(l, r);
      });
    });
  }
  statistics(e) {
    const n = this.valueOrDefault(e, X.All);
    return this.useExceptionPointer((r) => {
      const l = _._api._MagickImage_Statistics(this._instance, n, r), d = _r._create(this, l, n);
      return _._api._Statistics_DisposeList(l), d;
    });
  }
  strip() {
    this.useExceptionPointer((e) => {
      _._api._MagickImage_Strip(this._instance, e);
    });
  }
  transformColorSpace(e, n, r) {
    const l = e;
    let d, p = Qr.Quantum;
    n !== void 0 && (typeof n == "number" ? p = n : d = n), r !== void 0 && (p = r);
    const v = this.hasProfile("icc") || this.hasProfile("icm");
    if (d === void 0) {
      if (!v)
        return !1;
      d = l;
    } else {
      if (l.colorSpace !== this.colorSpace)
        return !1;
      v || this.setProfile(l);
    }
    return p === Qr.Quantum ? Ce.use(this, (S) => {
      S.setArtifact("profile:highres-transform", !1), this.setProfile(d);
    }) : this.setProfile(d), !0;
  }
  threshold(e, n) {
    const r = this.valueOrDefault(n, X.Undefined);
    this.useExceptionPointer((l) => {
      _._api._MagickImage_Threshold(this._instance, e._toQuantum(), r, l);
    });
  }
  thumbnail(e, n) {
    const r = typeof e == "number" ? new ne(e, n) : e;
    this.useException((l) => {
      A(r.toString(), (d) => {
        const p = _._api._MagickImage_Thumbnail(this._instance, d, l.ptr);
        this._setInstance(p, l);
      });
    });
  }
  toString = () => `${this.format} ${this.width}x${this.height} ${this.depth}-bit ${Kr[this.colorSpace]}`;
  transparent(e) {
    e._use((n) => {
      this.useExceptionPointer((r) => {
        _._api._MagickImage_Transparent(this._instance, n, 0, r);
      });
    });
  }
  trim(...e) {
    if (e.length > 0)
      if (e.length == 1 && e[0] instanceof te) {
        const n = e[0];
        this.setArtifact("trim:percent-background", n.toDouble().toString());
      } else {
        const n = e, r = [...new Set(oo(n))].join(",");
        this.setArtifact("trim:edges", r);
      }
    this.useException((n) => {
      const r = _._api._MagickImage_Trim(this._instance, n.ptr);
      this._setInstance(r, n), this.removeArtifact("trim:edges"), this.removeArtifact("trim:percent-background");
    });
  }
  wave(e, n, r) {
    const l = this.valueOrDefault(e, this.interpolate), d = this.valueOrDefault(n, 25), p = this.valueOrDefault(r, 150);
    this.useException((v) => {
      const S = _._api._MagickImage_Wave(this._instance, l, d, p, v.ptr);
      this._setInstance(S, v);
    });
  }
  vignette(e, n, r, l) {
    const d = this.valueOrDefault(e, 0), p = this.valueOrDefault(n, 1), v = this.valueOrDefault(r, 0), S = this.valueOrDefault(l, 0);
    this.useException((R) => {
      const B = _._api._MagickImage_Vignette(this._instance, d, p, v, S, R.ptr);
      this._setInstance(B, R);
    });
  }
  whiteThreshold(e, n) {
    const r = this.valueOrDefault(n, X.Composite);
    this.useException((l) => {
      A(e.toString(), (d) => {
        _._api._MagickImage_WhiteThreshold(this._instance, d, r, l.ptr);
      });
    });
  }
  write(e, n) {
    let r = 0, l = 0;
    n !== void 0 ? this._settings.format = e : n = e, this.useException((p) => {
      Te.use((v) => {
        this._settings._use((S) => {
          try {
            r = _._api._MagickImage_WriteBlob(this._instance, S._instance, v.ptr, p.ptr), l = v.value;
          } catch {
            r !== 0 && (r = _._api._MagickMemory_Relinquish(r));
          }
        });
      });
    });
    const d = new ii(r, l, n);
    return ce._disposeAfterExecution(d, d.func);
  }
  writeToCanvas(e, n) {
    e.width = this.width, e.height = this.height;
    const r = e.getContext("2d", n);
    r !== null && tt._map(this, "RGBA", (l) => {
      const d = r.createImageData(this.width, this.height);
      let p = 0;
      for (let v = 0; v < this.height; v++)
        for (let S = 0; S < this.width; S++)
          d.data[p++] = _._api.HEAPU8[l++], d.data[p++] = _._api.HEAPU8[l++], d.data[p++] = _._api.HEAPU8[l++], d.data[p++] = _._api.HEAPU8[l++];
      r.putImageData(d, 0, 0);
    });
  }
  /** @internal */
  static _createFromImage(e, n) {
    return new re(e, n);
  }
  /** @internal */
  _channelOffset(e) {
    return _._api._MagickImage_HasChannel(this._instance, e) ? _._api._MagickImage_ChannelOffset(this._instance, e) : -1;
  }
  /** @internal */
  static _clone(e) {
    return T.usePointer((n) => new re(_._api._MagickImage_Clone(e._instance, n), e._settings._clone()));
  }
  /** @internal */
  _getSettings() {
    return this._settings;
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new U("no image has been read");
  }
  /** @internal */
  _setInstance(e, n) {
    if (super._setInstance(e, n) === !0 || e === 0 && this.onProgress !== void 0)
      return !0;
    throw new U("out of memory");
  }
  _use(e) {
    return ce._disposeAfterExecution(this, e);
  }
  static _create(e) {
    return re.create()._use(e);
  }
  onDispose() {
    this.disposeProgressDelegate();
  }
  _contrast(e) {
    this.useExceptionPointer((n) => {
      _._api._MagickImage_Contrast(this._instance, this.fromBool(e), n);
    });
  }
  _getProfile(e) {
    return A(e, (n) => {
      const r = _._api._MagickImage_GetProfile(this._instance, n), l = ho.toArray(r);
      return l === null ? null : l;
    });
  }
  _opaque(e, n, r) {
    this.useExceptionPointer((l) => {
      e._use((d) => {
        n._use((p) => {
          _._api._MagickImage_Opaque(this._instance, d, p, this.fromBool(r), l);
        });
      });
    });
  }
  _sigmoidalContrast(e, n, r, l) {
    let d;
    r !== void 0 ? typeof r == "number" ? d = r : d = r.multiply(je.max) : d = je.max * 0.5;
    const p = this.valueOrDefault(l, X.Undefined);
    this.useExceptionPointer((v) => {
      _._api._MagickImage_SigmoidalContrast(this._instance, this.fromBool(e), n, d, p, v);
    });
  }
  _transparent(e, n) {
    e._use((r) => {
      this.useExceptionPointer((l) => {
        _._api._MagickImage_Transparent(this._instance, r, this.fromBool(n), l);
      });
    });
  }
  static createInstance() {
    return T.usePointer((e) => _._api._MagickImage_Create(0, e));
  }
  fromBool(e) {
    return e ? 1 : 0;
  }
  disposeProgressDelegate() {
    ae.removeProgressDelegate(this), this._progress = void 0;
  }
  readOrPing(e, n, r, l) {
    this.useException((d) => {
      const p = r instanceof De ? r : new De(this._settings);
      if (p._ping = e, this._settings._ping = e, p.frameCount !== void 0 && p.frameCount > 1)
        throw new U("The frame count can only be set to 1 when a single image is being read.");
      if (typeof n == "string")
        p._fileName = n;
      else if (ti(n)) {
        this.readFromArray(n, p, d);
        return;
      } else
        p._fileName = "xc:" + n.toShortString(), p.width = typeof r == "number" ? r : 0, p.height = typeof l == "number" ? l : 0;
      p._use((v) => {
        const S = _._api._MagickImage_ReadFile(v._instance, d.ptr);
        this._setInstance(S, d);
      });
    });
  }
  readFromArray(e, n, r) {
    n._use((l) => {
      Jr(e, (d) => {
        const p = _._api._MagickImage_ReadBlob(l._instance, d, 0, e.byteLength, r.ptr);
        this._setInstance(p, r);
      });
    });
  }
  toBool(e) {
    return e === 1;
  }
  valueOrDefault(e, n) {
    return e === void 0 ? n : e;
  }
  valueOrComputedDefault(e, n) {
    return e === void 0 ? n() : e;
  }
  useException(e) {
    return T.use(e, (n) => {
      this.onWarning !== void 0 && this.onWarning(new ei(n));
    });
  }
  useExceptionPointer(e) {
    return T.usePointer(e, (n) => {
      this.onWarning !== void 0 && this.onWarning(new ei(n));
    });
  }
}
var fo = (() => {
  var M = import.meta.url;
  return async function(e = {}) {
    var n, r = e, l, d, p = new Promise((t, i) => {
      l = t, d = i;
    }), v = typeof window == "object", S = typeof WorkerGlobalScope < "u";
    typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer", (!globalThis.crypto || !globalThis.crypto.getRandomValues) && (globalThis.crypto = { getRandomValues: (t) => {
      for (let i = 0; i < t.length; i++) t[i] = Math.random() * 256 | 0;
    } });
    var R = "./this.program", B = (t, i) => {
      throw i;
    }, Y = "";
    function ke(t) {
      return r.locateFile ? r.locateFile(t, Y) : Y + t;
    }
    var Fe, Ae;
    (v || S) && (S ? Y = self.location.href : typeof document < "u" && document.currentScript && (Y = document.currentScript.src), M && (Y = M), Y.startsWith("blob:") ? Y = "" : Y = Y.slice(0, Y.replace(/[?#].*/, "").lastIndexOf("/") + 1), S && (Ae = (t) => {
      var i = new XMLHttpRequest();
      return i.open("GET", t, !1), i.responseType = "arraybuffer", i.send(null), new Uint8Array(i.response);
    }), Fe = async (t) => {
      if (ur(t))
        return new Promise((a, o) => {
          var c = new XMLHttpRequest();
          c.open("GET", t, !0), c.responseType = "arraybuffer", c.onload = () => {
            if (c.status == 200 || c.status == 0 && c.response) {
              a(c.response);
              return;
            }
            o(c.status);
          }, c.onerror = o, c.send(null);
        });
      var i = await fetch(t, { credentials: "same-origin" });
      if (i.ok)
        return i.arrayBuffer();
      throw new Error(i.status + " : " + i.url);
    });
    var Ve = console.log.bind(console), Ge = console.error.bind(console), rt, ut, Tt = !1, q, se, _e, it, E, L, gt, oe, lr, ht, ur = (t) => t.startsWith("file://");
    function gr() {
      var t = ut.buffer;
      q = new Int8Array(t), _e = new Int16Array(t), r.HEAPU8 = se = new Uint8Array(t), it = new Uint16Array(t), E = new Int32Array(t), L = new Uint32Array(t), gt = new Float32Array(t), ht = new Float64Array(t), oe = new BigInt64Array(t), lr = new BigUint64Array(t);
    }
    function _i() {
      if (r.preRun)
        for (typeof r.preRun == "function" && (r.preRun = [r.preRun]); r.preRun.length; )
          wi(r.preRun.shift());
      dr(pr);
    }
    function li() {
      !r.noFSInit && !u.initialized && u.init(), s.cb(), u.ignorePermissions = !1;
    }
    function ui() {
      if (r.postRun)
        for (typeof r.postRun == "function" && (r.postRun = [r.postRun]); r.postRun.length; )
          Mi(r.postRun.shift());
      dr(fr);
    }
    var Le = 0, nt = null;
    function hr(t) {
      Le++, r.monitorRunDependencies?.(Le);
    }
    function At(t) {
      if (Le--, r.monitorRunDependencies?.(Le), Le == 0 && nt) {
        var i = nt;
        nt = null, i();
      }
    }
    function at(t) {
      r.onAbort?.(t), t = "Aborted(" + t + ")", Ge(t), Tt = !0, t += ". Build with -sASSERTIONS for more info.";
      var i = new WebAssembly.RuntimeError(t);
      throw d(i), i;
    }
    var Gt;
    function gi() {
      return r.locateFile ? ke("magick.wasm") : new URL("data:text/plain;base64,").href;
    }
    function hi(t) {
      if (t == Gt && rt)
        return new Uint8Array(rt);
      if (Ae)
        return Ae(t);
      throw "both async and sync fetching of the wasm failed";
    }
    async function di(t) {
      if (!rt)
        try {
          var i = await Fe(t);
          return new Uint8Array(i);
        } catch {
        }
      return hi(t);
    }
    async function fi(t, i) {
      try {
        var a = await di(t), o = await WebAssembly.instantiate(a, i);
        return o;
      } catch (c) {
        Ge(`failed to asynchronously prepare wasm: ${c}`), at(c);
      }
    }
    async function pi(t, i, a) {
      if (!t && typeof WebAssembly.instantiateStreaming == "function" && !ur(i))
        try {
          var o = fetch(i, { credentials: "same-origin" }), c = await WebAssembly.instantiateStreaming(o, a);
          return c;
        } catch (g) {
          Ge(`wasm streaming compile failed: ${g}`), Ge("falling back to ArrayBuffer instantiation");
        }
      return fi(i, a);
    }
    function mi() {
      return { a: ss };
    }
    async function vi() {
      function t(g, h) {
        return s = g.exports, s = Ys(s), ut = s.bb, gr(), We = s.wb, At(), s;
      }
      hr();
      function i(g) {
        return t(g.instance);
      }
      var a = mi();
      if (r.instantiateWasm)
        return new Promise((g, h) => {
          r.instantiateWasm(a, (f, m) => {
            g(t(f));
          });
        });
      Gt ??= gi();
      try {
        var o = await pi(rt, Gt, a), c = i(o);
        return c;
      } catch (g) {
        return d(g), Promise.reject(g);
      }
    }
    class ki {
      name = "ExitStatus";
      constructor(i) {
        this.message = `Program terminated with exit(${i})`, this.status = i;
      }
    }
    var dr = (t) => {
      for (; t.length > 0; )
        t.shift()(r);
    }, fr = [], Mi = (t) => fr.push(t), pr = [], wi = (t) => pr.push(t);
    function yi(t, i = "i8") {
      switch (i.endsWith("*") && (i = "*"), i) {
        case "i1":
          return q[t >>> 0];
        case "i8":
          return q[t >>> 0];
        case "i16":
          return _e[t >>> 1 >>> 0];
        case "i32":
          return E[t >>> 2 >>> 0];
        case "i64":
          return oe[t >>> 3];
        case "float":
          return gt[t >>> 2 >>> 0];
        case "double":
          return ht[t >>> 3 >>> 0];
        case "*":
          return L[t >>> 2 >>> 0];
        default:
          at(`invalid type for getValue: ${i}`);
      }
    }
    var Rt = !0;
    function Si(t, i, a = "i8") {
      switch (a.endsWith("*") && (a = "*"), a) {
        case "i1":
          q[t >>> 0] = i;
          break;
        case "i8":
          q[t >>> 0] = i;
          break;
        case "i16":
          _e[t >>> 1 >>> 0] = i;
          break;
        case "i32":
          E[t >>> 2 >>> 0] = i;
          break;
        case "i64":
          oe[t >>> 3] = BigInt(i);
          break;
        case "float":
          gt[t >>> 2 >>> 0] = i;
          break;
        case "double":
          ht[t >>> 3 >>> 0] = i;
          break;
        case "*":
          L[t >>> 2 >>> 0] = i;
          break;
        default:
          at(`invalid type for setValue: ${a}`);
      }
    }
    var N = (t) => ls(t), z = () => us(), Ii = 9007199254740992, Ci = -9007199254740992, Me = (t) => t < Ci || t > Ii ? NaN : Number(t), xt = [], We, W = (t) => {
      var i = xt[t];
      return i || (xt[t] = i = We.get(t)), i;
    };
    function Pi(t, i) {
      return t >>>= 0, W(t)(i);
    }
    var Xe = 0;
    class mr {
      constructor(i) {
        this.excPtr = i, this.ptr = i - 24;
      }
      set_type(i) {
        L[this.ptr + 4 >>> 2 >>> 0] = i;
      }
      get_type() {
        return L[this.ptr + 4 >>> 2 >>> 0];
      }
      set_destructor(i) {
        L[this.ptr + 8 >>> 2 >>> 0] = i;
      }
      get_destructor() {
        return L[this.ptr + 8 >>> 2 >>> 0];
      }
      set_caught(i) {
        i = i ? 1 : 0, q[this.ptr + 12 >>> 0] = i;
      }
      get_caught() {
        return q[this.ptr + 12 >>> 0] != 0;
      }
      set_rethrown(i) {
        i = i ? 1 : 0, q[this.ptr + 13 >>> 0] = i;
      }
      get_rethrown() {
        return q[this.ptr + 13 >>> 0] != 0;
      }
      init(i, a) {
        this.set_adjusted_ptr(0), this.set_type(i), this.set_destructor(a);
      }
      set_adjusted_ptr(i) {
        L[this.ptr + 16 >>> 2 >>> 0] = i;
      }
      get_adjusted_ptr() {
        return L[this.ptr + 16 >>> 2 >>> 0];
      }
    }
    var dt = (t) => _s(t), Ei = (t) => {
      var i = Xe;
      if (!i)
        return dt(0), 0;
      var a = new mr(i);
      a.set_adjusted_ptr(i);
      var o = a.get_type();
      if (!o)
        return dt(0), i;
      for (var c of t) {
        if (c === 0 || c === o)
          break;
        var g = a.ptr + 16;
        if (gs(c, o, g))
          return dt(c), i;
      }
      return dt(o), i;
    };
    function Di() {
      return Ei([]);
    }
    function bi(t, i, a) {
      t >>>= 0, i >>>= 0, a >>>= 0;
      var o = new mr(t);
      throw o.init(i, a), Xe = t, Xe;
    }
    function Ti(t) {
      throw t >>>= 0, Xe || (Xe = t), Xe;
    }
    var V = { isAbs: (t) => t.charAt(0) === "/", splitPath: (t) => {
      var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return i.exec(t).slice(1);
    }, normalizeArray: (t, i) => {
      for (var a = 0, o = t.length - 1; o >= 0; o--) {
        var c = t[o];
        c === "." ? t.splice(o, 1) : c === ".." ? (t.splice(o, 1), a++) : a && (t.splice(o, 1), a--);
      }
      if (i)
        for (; a; a--)
          t.unshift("..");
      return t;
    }, normalize: (t) => {
      var i = V.isAbs(t), a = t.slice(-1) === "/";
      return t = V.normalizeArray(t.split("/").filter((o) => !!o), !i).join("/"), !t && !i && (t = "."), t && a && (t += "/"), (i ? "/" : "") + t;
    }, dirname: (t) => {
      var i = V.splitPath(t), a = i[0], o = i[1];
      return !a && !o ? "." : (o && (o = o.slice(0, -1)), a + o);
    }, basename: (t) => t && t.match(/([^\/]+|\/)\/*$/)[1], join: (...t) => V.normalize(t.join("/")), join2: (t, i) => V.normalize(t + "/" + i) }, Ai = () => (t) => crypto.getRandomValues(t), Ft = (t) => {
      (Ft = Ai())(t);
    }, qe = { resolve: (...t) => {
      for (var i = "", a = !1, o = t.length - 1; o >= -1 && !a; o--) {
        var c = o >= 0 ? t[o] : u.cwd();
        if (typeof c != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!c)
          return "";
        i = c + "/" + i, a = V.isAbs(c);
      }
      return i = V.normalizeArray(i.split("/").filter((g) => !!g), !a).join("/"), (a ? "/" : "") + i || ".";
    }, relative: (t, i) => {
      t = qe.resolve(t).slice(1), i = qe.resolve(i).slice(1);
      function a(w) {
        for (var y = 0; y < w.length && w[y] === ""; y++)
          ;
        for (var I = w.length - 1; I >= 0 && w[I] === ""; I--)
          ;
        return y > I ? [] : w.slice(y, I - y + 1);
      }
      for (var o = a(t.split("/")), c = a(i.split("/")), g = Math.min(o.length, c.length), h = g, f = 0; f < g; f++)
        if (o[f] !== c[f]) {
          h = f;
          break;
        }
      for (var m = [], f = h; f < o.length; f++)
        m.push("..");
      return m = m.concat(c.slice(h)), m.join("/");
    } }, vr = typeof TextDecoder < "u" ? new TextDecoder() : void 0, Ke = (t, i = 0, a = NaN) => {
      i >>>= 0;
      for (var o = i + a, c = i; t[c] && !(c >= o); ) ++c;
      if (c - i > 16 && t.buffer && vr)
        return vr.decode(t.subarray(i, c));
      for (var g = ""; i < c; ) {
        var h = t[i++];
        if (!(h & 128)) {
          g += String.fromCharCode(h);
          continue;
        }
        var f = t[i++] & 63;
        if ((h & 224) == 192) {
          g += String.fromCharCode((h & 31) << 6 | f);
          continue;
        }
        var m = t[i++] & 63;
        if ((h & 240) == 224 ? h = (h & 15) << 12 | f << 6 | m : h = (h & 7) << 18 | f << 12 | m << 6 | t[i++] & 63, h < 65536)
          g += String.fromCharCode(h);
        else {
          var w = h - 65536;
          g += String.fromCharCode(55296 | w >> 10, 56320 | w & 1023);
        }
      }
      return g;
    }, Lt = [], Be = (t) => {
      for (var i = 0, a = 0; a < t.length; ++a) {
        var o = t.charCodeAt(a);
        o <= 127 ? i++ : o <= 2047 ? i += 2 : o >= 55296 && o <= 57343 ? (i += 4, ++a) : i += 3;
      }
      return i;
    }, Wt = (t, i, a, o) => {
      if (a >>>= 0, !(o > 0)) return 0;
      for (var c = a, g = a + o - 1, h = 0; h < t.length; ++h) {
        var f = t.charCodeAt(h);
        if (f >= 55296 && f <= 57343) {
          var m = t.charCodeAt(++h);
          f = 65536 + ((f & 1023) << 10) | m & 1023;
        }
        if (f <= 127) {
          if (a >= g) break;
          i[a++ >>> 0] = f;
        } else if (f <= 2047) {
          if (a + 1 >= g) break;
          i[a++ >>> 0] = 192 | f >> 6, i[a++ >>> 0] = 128 | f & 63;
        } else if (f <= 65535) {
          if (a + 2 >= g) break;
          i[a++ >>> 0] = 224 | f >> 12, i[a++ >>> 0] = 128 | f >> 6 & 63, i[a++ >>> 0] = 128 | f & 63;
        } else {
          if (a + 3 >= g) break;
          i[a++ >>> 0] = 240 | f >> 18, i[a++ >>> 0] = 128 | f >> 12 & 63, i[a++ >>> 0] = 128 | f >> 6 & 63, i[a++ >>> 0] = 128 | f & 63;
        }
      }
      return i[a >>> 0] = 0, a - c;
    }, kr = (t, i, a) => {
      var o = Be(t) + 1, c = new Array(o), g = Wt(t, c, 0, c.length);
      return c.length = g, c;
    }, Gi = () => {
      if (!Lt.length) {
        var t = null;
        if (typeof window < "u" && typeof window.prompt == "function" && (t = window.prompt("Input: "), t !== null && (t += `
`)), !t)
          return null;
        Lt = kr(t);
      }
      return Lt.shift();
    }, Ne = { ttys: [], init() {
    }, shutdown() {
    }, register(t, i) {
      Ne.ttys[t] = { input: [], output: [], ops: i }, u.registerDevice(t, Ne.stream_ops);
    }, stream_ops: { open(t) {
      var i = Ne.ttys[t.node.rdev];
      if (!i)
        throw new u.ErrnoError(43);
      t.tty = i, t.seekable = !1;
    }, close(t) {
      t.tty.ops.fsync(t.tty);
    }, fsync(t) {
      t.tty.ops.fsync(t.tty);
    }, read(t, i, a, o, c) {
      if (!t.tty || !t.tty.ops.get_char)
        throw new u.ErrnoError(60);
      for (var g = 0, h = 0; h < o; h++) {
        var f;
        try {
          f = t.tty.ops.get_char(t.tty);
        } catch {
          throw new u.ErrnoError(29);
        }
        if (f === void 0 && g === 0)
          throw new u.ErrnoError(6);
        if (f == null) break;
        g++, i[a + h] = f;
      }
      return g && (t.node.atime = Date.now()), g;
    }, write(t, i, a, o, c) {
      if (!t.tty || !t.tty.ops.put_char)
        throw new u.ErrnoError(60);
      try {
        for (var g = 0; g < o; g++)
          t.tty.ops.put_char(t.tty, i[a + g]);
      } catch {
        throw new u.ErrnoError(29);
      }
      return o && (t.node.mtime = t.node.ctime = Date.now()), g;
    } }, default_tty_ops: { get_char(t) {
      return Gi();
    }, put_char(t, i) {
      i === null || i === 10 ? (Ve(Ke(t.output)), t.output = []) : i != 0 && t.output.push(i);
    }, fsync(t) {
      t.output?.length > 0 && (Ve(Ke(t.output)), t.output = []);
    }, ioctl_tcgets(t) {
      return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
    }, ioctl_tcsets(t, i, a) {
      return 0;
    }, ioctl_tiocgwinsz(t) {
      return [24, 80];
    } }, default_tty1_ops: { put_char(t, i) {
      i === null || i === 10 ? (Ge(Ke(t.output)), t.output = []) : i != 0 && t.output.push(i);
    }, fsync(t) {
      t.output?.length > 0 && (Ge(Ke(t.output)), t.output = []);
    } } }, Ri = (t, i) => se.fill(0, t, t + i), Mr = (t, i) => Math.ceil(t / i) * i, wr = (t) => {
      t = Mr(t, 65536);
      var i = cs(65536, t);
      return i && Ri(i, t), i;
    }, x = { ops_table: null, mount(t) {
      return x.createNode(null, "/", 16895, 0);
    }, createNode(t, i, a, o) {
      if (u.isBlkdev(a) || u.isFIFO(a))
        throw new u.ErrnoError(63);
      x.ops_table ||= { dir: { node: { getattr: x.node_ops.getattr, setattr: x.node_ops.setattr, lookup: x.node_ops.lookup, mknod: x.node_ops.mknod, rename: x.node_ops.rename, unlink: x.node_ops.unlink, rmdir: x.node_ops.rmdir, readdir: x.node_ops.readdir, symlink: x.node_ops.symlink }, stream: { llseek: x.stream_ops.llseek } }, file: { node: { getattr: x.node_ops.getattr, setattr: x.node_ops.setattr }, stream: { llseek: x.stream_ops.llseek, read: x.stream_ops.read, write: x.stream_ops.write, mmap: x.stream_ops.mmap, msync: x.stream_ops.msync } }, link: { node: { getattr: x.node_ops.getattr, setattr: x.node_ops.setattr, readlink: x.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: x.node_ops.getattr, setattr: x.node_ops.setattr }, stream: u.chrdev_stream_ops } };
      var c = u.createNode(t, i, a, o);
      return u.isDir(c.mode) ? (c.node_ops = x.ops_table.dir.node, c.stream_ops = x.ops_table.dir.stream, c.contents = {}) : u.isFile(c.mode) ? (c.node_ops = x.ops_table.file.node, c.stream_ops = x.ops_table.file.stream, c.usedBytes = 0, c.contents = null) : u.isLink(c.mode) ? (c.node_ops = x.ops_table.link.node, c.stream_ops = x.ops_table.link.stream) : u.isChrdev(c.mode) && (c.node_ops = x.ops_table.chrdev.node, c.stream_ops = x.ops_table.chrdev.stream), c.atime = c.mtime = c.ctime = Date.now(), t && (t.contents[i] = c, t.atime = t.mtime = t.ctime = c.atime), c;
    }, getFileDataAsTypedArray(t) {
      return t.contents ? t.contents.subarray ? t.contents.subarray(0, t.usedBytes) : new Uint8Array(t.contents) : new Uint8Array(0);
    }, expandFileStorage(t, i) {
      var a = t.contents ? t.contents.length : 0;
      if (!(a >= i)) {
        var o = 1024 * 1024;
        i = Math.max(i, a * (a < o ? 2 : 1.125) >>> 0), a != 0 && (i = Math.max(i, 256));
        var c = t.contents;
        t.contents = new Uint8Array(i), t.usedBytes > 0 && t.contents.set(c.subarray(0, t.usedBytes), 0);
      }
    }, resizeFileStorage(t, i) {
      if (t.usedBytes != i)
        if (i == 0)
          t.contents = null, t.usedBytes = 0;
        else {
          var a = t.contents;
          t.contents = new Uint8Array(i), a && t.contents.set(a.subarray(0, Math.min(i, t.usedBytes))), t.usedBytes = i;
        }
    }, node_ops: { getattr(t) {
      var i = {};
      return i.dev = u.isChrdev(t.mode) ? t.id : 1, i.ino = t.id, i.mode = t.mode, i.nlink = 1, i.uid = 0, i.gid = 0, i.rdev = t.rdev, u.isDir(t.mode) ? i.size = 4096 : u.isFile(t.mode) ? i.size = t.usedBytes : u.isLink(t.mode) ? i.size = t.link.length : i.size = 0, i.atime = new Date(t.atime), i.mtime = new Date(t.mtime), i.ctime = new Date(t.ctime), i.blksize = 4096, i.blocks = Math.ceil(i.size / i.blksize), i;
    }, setattr(t, i) {
      for (const a of ["mode", "atime", "mtime", "ctime"])
        i[a] != null && (t[a] = i[a]);
      i.size !== void 0 && x.resizeFileStorage(t, i.size);
    }, lookup(t, i) {
      throw x.doesNotExistError;
    }, mknod(t, i, a, o) {
      return x.createNode(t, i, a, o);
    }, rename(t, i, a) {
      var o;
      try {
        o = u.lookupNode(i, a);
      } catch {
      }
      if (o) {
        if (u.isDir(t.mode))
          for (var c in o.contents)
            throw new u.ErrnoError(55);
        u.hashRemoveNode(o);
      }
      delete t.parent.contents[t.name], i.contents[a] = t, t.name = a, i.ctime = i.mtime = t.parent.ctime = t.parent.mtime = Date.now();
    }, unlink(t, i) {
      delete t.contents[i], t.ctime = t.mtime = Date.now();
    }, rmdir(t, i) {
      var a = u.lookupNode(t, i);
      for (var o in a.contents)
        throw new u.ErrnoError(55);
      delete t.contents[i], t.ctime = t.mtime = Date.now();
    }, readdir(t) {
      return [".", "..", ...Object.keys(t.contents)];
    }, symlink(t, i, a) {
      var o = x.createNode(t, i, 41471, 0);
      return o.link = a, o;
    }, readlink(t) {
      if (!u.isLink(t.mode))
        throw new u.ErrnoError(28);
      return t.link;
    } }, stream_ops: { read(t, i, a, o, c) {
      var g = t.node.contents;
      if (c >= t.node.usedBytes) return 0;
      var h = Math.min(t.node.usedBytes - c, o);
      if (h > 8 && g.subarray)
        i.set(g.subarray(c, c + h), a);
      else
        for (var f = 0; f < h; f++) i[a + f] = g[c + f];
      return h;
    }, write(t, i, a, o, c, g) {
      if (i.buffer === q.buffer && (g = !1), !o) return 0;
      var h = t.node;
      if (h.mtime = h.ctime = Date.now(), i.subarray && (!h.contents || h.contents.subarray)) {
        if (g)
          return h.contents = i.subarray(a, a + o), h.usedBytes = o, o;
        if (h.usedBytes === 0 && c === 0)
          return h.contents = i.slice(a, a + o), h.usedBytes = o, o;
        if (c + o <= h.usedBytes)
          return h.contents.set(i.subarray(a, a + o), c), o;
      }
      if (x.expandFileStorage(h, c + o), h.contents.subarray && i.subarray)
        h.contents.set(i.subarray(a, a + o), c);
      else
        for (var f = 0; f < o; f++)
          h.contents[c + f] = i[a + f];
      return h.usedBytes = Math.max(h.usedBytes, c + o), o;
    }, llseek(t, i, a) {
      var o = i;
      if (a === 1 ? o += t.position : a === 2 && u.isFile(t.node.mode) && (o += t.node.usedBytes), o < 0)
        throw new u.ErrnoError(28);
      return o;
    }, mmap(t, i, a, o, c) {
      if (!u.isFile(t.node.mode))
        throw new u.ErrnoError(43);
      var g, h, f = t.node.contents;
      if (!(c & 2) && f && f.buffer === q.buffer)
        h = !1, g = f.byteOffset;
      else {
        if (h = !0, g = wr(i), !g)
          throw new u.ErrnoError(48);
        f && ((a > 0 || a + i < f.length) && (f.subarray ? f = f.subarray(a, a + i) : f = Array.prototype.slice.call(f, a, a + i)), q.set(f, g >>> 0));
      }
      return { ptr: g, allocated: h };
    }, msync(t, i, a, o, c) {
      return x.stream_ops.write(t, i, 0, o, a, !1), 0;
    } } }, xi = async (t) => {
      var i = await Fe(t);
      return new Uint8Array(i);
    }, Fi = (t, i, a, o, c, g) => {
      u.createDataFile(t, i, a, o, c, g);
    }, yr = [], Li = (t, i, a, o) => {
      typeof Browser < "u" && Browser.init();
      var c = !1;
      return yr.forEach((g) => {
        c || g.canHandle(i) && (g.handle(t, i, a, o), c = !0);
      }), c;
    }, Wi = (t, i, a, o, c, g, h, f, m, w) => {
      var y = i ? qe.resolve(V.join2(t, i)) : t;
      function I(P) {
        function C(b) {
          w?.(), f || Fi(t, i, b, o, c, m), g?.(), At();
        }
        Li(P, y, C, () => {
          h?.(), At();
        }) || C(P);
      }
      hr(), typeof a == "string" ? xi(a).then(I, h) : I(a);
    }, Bi = (t) => {
      var i = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, a = i[t];
      if (typeof a > "u")
        throw new Error(`Unknown file open mode: ${t}`);
      return a;
    }, Bt = (t, i) => {
      var a = 0;
      return t && (a |= 365), i && (a |= 146), a;
    }, u = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, filesystems: null, syncFSRequests: 0, readFiles: {}, ErrnoError: class {
      name = "ErrnoError";
      constructor(t) {
        this.errno = t;
      }
    }, FSStream: class {
      shared = {};
      get object() {
        return this.node;
      }
      set object(t) {
        this.node = t;
      }
      get isRead() {
        return (this.flags & 2097155) !== 1;
      }
      get isWrite() {
        return (this.flags & 2097155) !== 0;
      }
      get isAppend() {
        return this.flags & 1024;
      }
      get flags() {
        return this.shared.flags;
      }
      set flags(t) {
        this.shared.flags = t;
      }
      get position() {
        return this.shared.position;
      }
      set position(t) {
        this.shared.position = t;
      }
    }, FSNode: class {
      node_ops = {};
      stream_ops = {};
      readMode = 365;
      writeMode = 146;
      mounted = null;
      constructor(t, i, a, o) {
        t || (t = this), this.parent = t, this.mount = t.mount, this.id = u.nextInode++, this.name = i, this.mode = a, this.rdev = o, this.atime = this.mtime = this.ctime = Date.now();
      }
      get read() {
        return (this.mode & this.readMode) === this.readMode;
      }
      set read(t) {
        t ? this.mode |= this.readMode : this.mode &= ~this.readMode;
      }
      get write() {
        return (this.mode & this.writeMode) === this.writeMode;
      }
      set write(t) {
        t ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
      }
      get isFolder() {
        return u.isDir(this.mode);
      }
      get isDevice() {
        return u.isChrdev(this.mode);
      }
    }, lookupPath(t, i = {}) {
      if (!t)
        throw new u.ErrnoError(44);
      i.follow_mount ??= !0, V.isAbs(t) || (t = u.cwd() + "/" + t);
      e: for (var a = 0; a < 40; a++) {
        for (var o = t.split("/").filter((w) => !!w), c = u.root, g = "/", h = 0; h < o.length; h++) {
          var f = h === o.length - 1;
          if (f && i.parent)
            break;
          if (o[h] !== ".") {
            if (o[h] === "..") {
              if (g = V.dirname(g), u.isRoot(c)) {
                t = g + "/" + o.slice(h + 1).join("/");
                continue e;
              } else
                c = c.parent;
              continue;
            }
            g = V.join2(g, o[h]);
            try {
              c = u.lookupNode(c, o[h]);
            } catch (w) {
              if (w?.errno === 44 && f && i.noent_okay)
                return { path: g };
              throw w;
            }
            if (u.isMountpoint(c) && (!f || i.follow_mount) && (c = c.mounted.root), u.isLink(c.mode) && (!f || i.follow)) {
              if (!c.node_ops.readlink)
                throw new u.ErrnoError(52);
              var m = c.node_ops.readlink(c);
              V.isAbs(m) || (m = V.dirname(g) + "/" + m), t = m + "/" + o.slice(h + 1).join("/");
              continue e;
            }
          }
        }
        return { path: g, node: c };
      }
      throw new u.ErrnoError(32);
    }, getPath(t) {
      for (var i; ; ) {
        if (u.isRoot(t)) {
          var a = t.mount.mountpoint;
          return i ? a[a.length - 1] !== "/" ? `${a}/${i}` : a + i : a;
        }
        i = i ? `${t.name}/${i}` : t.name, t = t.parent;
      }
    }, hashName(t, i) {
      for (var a = 0, o = 0; o < i.length; o++)
        a = (a << 5) - a + i.charCodeAt(o) | 0;
      return (t + a >>> 0) % u.nameTable.length;
    }, hashAddNode(t) {
      var i = u.hashName(t.parent.id, t.name);
      t.name_next = u.nameTable[i], u.nameTable[i] = t;
    }, hashRemoveNode(t) {
      var i = u.hashName(t.parent.id, t.name);
      if (u.nameTable[i] === t)
        u.nameTable[i] = t.name_next;
      else
        for (var a = u.nameTable[i]; a; ) {
          if (a.name_next === t) {
            a.name_next = t.name_next;
            break;
          }
          a = a.name_next;
        }
    }, lookupNode(t, i) {
      var a = u.mayLookup(t);
      if (a)
        throw new u.ErrnoError(a);
      for (var o = u.hashName(t.id, i), c = u.nameTable[o]; c; c = c.name_next) {
        var g = c.name;
        if (c.parent.id === t.id && g === i)
          return c;
      }
      return u.lookup(t, i);
    }, createNode(t, i, a, o) {
      var c = new u.FSNode(t, i, a, o);
      return u.hashAddNode(c), c;
    }, destroyNode(t) {
      u.hashRemoveNode(t);
    }, isRoot(t) {
      return t === t.parent;
    }, isMountpoint(t) {
      return !!t.mounted;
    }, isFile(t) {
      return (t & 61440) === 32768;
    }, isDir(t) {
      return (t & 61440) === 16384;
    }, isLink(t) {
      return (t & 61440) === 40960;
    }, isChrdev(t) {
      return (t & 61440) === 8192;
    }, isBlkdev(t) {
      return (t & 61440) === 24576;
    }, isFIFO(t) {
      return (t & 61440) === 4096;
    }, isSocket(t) {
      return (t & 49152) === 49152;
    }, flagsToPermissionString(t) {
      var i = ["r", "w", "rw"][t & 3];
      return t & 512 && (i += "w"), i;
    }, nodePermissions(t, i) {
      return u.ignorePermissions ? 0 : i.includes("r") && !(t.mode & 292) || i.includes("w") && !(t.mode & 146) || i.includes("x") && !(t.mode & 73) ? 2 : 0;
    }, mayLookup(t) {
      if (!u.isDir(t.mode)) return 54;
      var i = u.nodePermissions(t, "x");
      return i || (t.node_ops.lookup ? 0 : 2);
    }, mayCreate(t, i) {
      if (!u.isDir(t.mode))
        return 54;
      try {
        var a = u.lookupNode(t, i);
        return 20;
      } catch {
      }
      return u.nodePermissions(t, "wx");
    }, mayDelete(t, i, a) {
      var o;
      try {
        o = u.lookupNode(t, i);
      } catch (g) {
        return g.errno;
      }
      var c = u.nodePermissions(t, "wx");
      if (c)
        return c;
      if (a) {
        if (!u.isDir(o.mode))
          return 54;
        if (u.isRoot(o) || u.getPath(o) === u.cwd())
          return 10;
      } else if (u.isDir(o.mode))
        return 31;
      return 0;
    }, mayOpen(t, i) {
      return t ? u.isLink(t.mode) ? 32 : u.isDir(t.mode) && (u.flagsToPermissionString(i) !== "r" || i & 576) ? 31 : u.nodePermissions(t, u.flagsToPermissionString(i)) : 44;
    }, checkOpExists(t, i) {
      if (!t)
        throw new u.ErrnoError(i);
      return t;
    }, MAX_OPEN_FDS: 4096, nextfd() {
      for (var t = 0; t <= u.MAX_OPEN_FDS; t++)
        if (!u.streams[t])
          return t;
      throw new u.ErrnoError(33);
    }, getStreamChecked(t) {
      var i = u.getStream(t);
      if (!i)
        throw new u.ErrnoError(8);
      return i;
    }, getStream: (t) => u.streams[t], createStream(t, i = -1) {
      return t = Object.assign(new u.FSStream(), t), i == -1 && (i = u.nextfd()), t.fd = i, u.streams[i] = t, t;
    }, closeStream(t) {
      u.streams[t] = null;
    }, dupStream(t, i = -1) {
      var a = u.createStream(t, i);
      return a.stream_ops?.dup?.(a), a;
    }, doSetAttr(t, i, a) {
      var o = t?.stream_ops.setattr, c = o ? t : i;
      o ??= i.node_ops.setattr, u.checkOpExists(o, 63), o(c, a);
    }, chrdev_stream_ops: { open(t) {
      var i = u.getDevice(t.node.rdev);
      t.stream_ops = i.stream_ops, t.stream_ops.open?.(t);
    }, llseek() {
      throw new u.ErrnoError(70);
    } }, major: (t) => t >> 8, minor: (t) => t & 255, makedev: (t, i) => t << 8 | i, registerDevice(t, i) {
      u.devices[t] = { stream_ops: i };
    }, getDevice: (t) => u.devices[t], getMounts(t) {
      for (var i = [], a = [t]; a.length; ) {
        var o = a.pop();
        i.push(o), a.push(...o.mounts);
      }
      return i;
    }, syncfs(t, i) {
      typeof t == "function" && (i = t, t = !1), u.syncFSRequests++, u.syncFSRequests > 1 && Ge(`warning: ${u.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
      var a = u.getMounts(u.root.mount), o = 0;
      function c(h) {
        return u.syncFSRequests--, i(h);
      }
      function g(h) {
        if (h)
          return g.errored ? void 0 : (g.errored = !0, c(h));
        ++o >= a.length && c(null);
      }
      a.forEach((h) => {
        if (!h.type.syncfs)
          return g(null);
        h.type.syncfs(h, t, g);
      });
    }, mount(t, i, a) {
      var o = a === "/", c = !a, g;
      if (o && u.root)
        throw new u.ErrnoError(10);
      if (!o && !c) {
        var h = u.lookupPath(a, { follow_mount: !1 });
        if (a = h.path, g = h.node, u.isMountpoint(g))
          throw new u.ErrnoError(10);
        if (!u.isDir(g.mode))
          throw new u.ErrnoError(54);
      }
      var f = { type: t, opts: i, mountpoint: a, mounts: [] }, m = t.mount(f);
      return m.mount = f, f.root = m, o ? u.root = m : g && (g.mounted = f, g.mount && g.mount.mounts.push(f)), m;
    }, unmount(t) {
      var i = u.lookupPath(t, { follow_mount: !1 });
      if (!u.isMountpoint(i.node))
        throw new u.ErrnoError(28);
      var a = i.node, o = a.mounted, c = u.getMounts(o);
      Object.keys(u.nameTable).forEach((h) => {
        for (var f = u.nameTable[h]; f; ) {
          var m = f.name_next;
          c.includes(f.mount) && u.destroyNode(f), f = m;
        }
      }), a.mounted = null;
      var g = a.mount.mounts.indexOf(o);
      a.mount.mounts.splice(g, 1);
    }, lookup(t, i) {
      return t.node_ops.lookup(t, i);
    }, mknod(t, i, a) {
      var o = u.lookupPath(t, { parent: !0 }), c = o.node, g = V.basename(t);
      if (!g)
        throw new u.ErrnoError(28);
      if (g === "." || g === "..")
        throw new u.ErrnoError(20);
      var h = u.mayCreate(c, g);
      if (h)
        throw new u.ErrnoError(h);
      if (!c.node_ops.mknod)
        throw new u.ErrnoError(63);
      return c.node_ops.mknod(c, g, i, a);
    }, statfs(t) {
      return u.statfsNode(u.lookupPath(t, { follow: !0 }).node);
    }, statfsStream(t) {
      return u.statfsNode(t.node);
    }, statfsNode(t) {
      var i = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: u.nextInode, ffree: u.nextInode - 1, fsid: 42, flags: 2, namelen: 255 };
      return t.node_ops.statfs && Object.assign(i, t.node_ops.statfs(t.mount.opts.root)), i;
    }, create(t, i = 438) {
      return i &= 4095, i |= 32768, u.mknod(t, i, 0);
    }, mkdir(t, i = 511) {
      return i &= 1023, i |= 16384, u.mknod(t, i, 0);
    }, mkdirTree(t, i) {
      var a = t.split("/"), o = "";
      for (var c of a)
        if (c) {
          (o || V.isAbs(t)) && (o += "/"), o += c;
          try {
            u.mkdir(o, i);
          } catch (g) {
            if (g.errno != 20) throw g;
          }
        }
    }, mkdev(t, i, a) {
      return typeof a > "u" && (a = i, i = 438), i |= 8192, u.mknod(t, i, a);
    }, symlink(t, i) {
      if (!qe.resolve(t))
        throw new u.ErrnoError(44);
      var a = u.lookupPath(i, { parent: !0 }), o = a.node;
      if (!o)
        throw new u.ErrnoError(44);
      var c = V.basename(i), g = u.mayCreate(o, c);
      if (g)
        throw new u.ErrnoError(g);
      if (!o.node_ops.symlink)
        throw new u.ErrnoError(63);
      return o.node_ops.symlink(o, c, t);
    }, rename(t, i) {
      var a = V.dirname(t), o = V.dirname(i), c = V.basename(t), g = V.basename(i), h, f, m;
      if (h = u.lookupPath(t, { parent: !0 }), f = h.node, h = u.lookupPath(i, { parent: !0 }), m = h.node, !f || !m) throw new u.ErrnoError(44);
      if (f.mount !== m.mount)
        throw new u.ErrnoError(75);
      var w = u.lookupNode(f, c), y = qe.relative(t, o);
      if (y.charAt(0) !== ".")
        throw new u.ErrnoError(28);
      if (y = qe.relative(i, a), y.charAt(0) !== ".")
        throw new u.ErrnoError(55);
      var I;
      try {
        I = u.lookupNode(m, g);
      } catch {
      }
      if (w !== I) {
        var P = u.isDir(w.mode), C = u.mayDelete(f, c, P);
        if (C)
          throw new u.ErrnoError(C);
        if (C = I ? u.mayDelete(m, g, P) : u.mayCreate(m, g), C)
          throw new u.ErrnoError(C);
        if (!f.node_ops.rename)
          throw new u.ErrnoError(63);
        if (u.isMountpoint(w) || I && u.isMountpoint(I))
          throw new u.ErrnoError(10);
        if (m !== f && (C = u.nodePermissions(f, "w"), C))
          throw new u.ErrnoError(C);
        u.hashRemoveNode(w);
        try {
          f.node_ops.rename(w, m, g), w.parent = m;
        } catch (b) {
          throw b;
        } finally {
          u.hashAddNode(w);
        }
      }
    }, rmdir(t) {
      var i = u.lookupPath(t, { parent: !0 }), a = i.node, o = V.basename(t), c = u.lookupNode(a, o), g = u.mayDelete(a, o, !0);
      if (g)
        throw new u.ErrnoError(g);
      if (!a.node_ops.rmdir)
        throw new u.ErrnoError(63);
      if (u.isMountpoint(c))
        throw new u.ErrnoError(10);
      a.node_ops.rmdir(a, o), u.destroyNode(c);
    }, readdir(t) {
      var i = u.lookupPath(t, { follow: !0 }), a = i.node, o = u.checkOpExists(a.node_ops.readdir, 54);
      return o(a);
    }, unlink(t) {
      var i = u.lookupPath(t, { parent: !0 }), a = i.node;
      if (!a)
        throw new u.ErrnoError(44);
      var o = V.basename(t), c = u.lookupNode(a, o), g = u.mayDelete(a, o, !1);
      if (g)
        throw new u.ErrnoError(g);
      if (!a.node_ops.unlink)
        throw new u.ErrnoError(63);
      if (u.isMountpoint(c))
        throw new u.ErrnoError(10);
      a.node_ops.unlink(a, o), u.destroyNode(c);
    }, readlink(t) {
      var i = u.lookupPath(t), a = i.node;
      if (!a)
        throw new u.ErrnoError(44);
      if (!a.node_ops.readlink)
        throw new u.ErrnoError(28);
      return a.node_ops.readlink(a);
    }, stat(t, i) {
      var a = u.lookupPath(t, { follow: !i }), o = a.node, c = u.checkOpExists(o.node_ops.getattr, 63);
      return c(o);
    }, fstat(t) {
      var i = u.getStreamChecked(t), a = i.node, o = i.stream_ops.getattr, c = o ? i : a;
      return o ??= a.node_ops.getattr, u.checkOpExists(o, 63), o(c);
    }, lstat(t) {
      return u.stat(t, !0);
    }, doChmod(t, i, a, o) {
      u.doSetAttr(t, i, { mode: a & 4095 | i.mode & -4096, ctime: Date.now(), dontFollow: o });
    }, chmod(t, i, a) {
      var o;
      if (typeof t == "string") {
        var c = u.lookupPath(t, { follow: !a });
        o = c.node;
      } else
        o = t;
      u.doChmod(null, o, i, a);
    }, lchmod(t, i) {
      u.chmod(t, i, !0);
    }, fchmod(t, i) {
      var a = u.getStreamChecked(t);
      u.doChmod(a, a.node, i, !1);
    }, doChown(t, i, a) {
      u.doSetAttr(t, i, { timestamp: Date.now(), dontFollow: a });
    }, chown(t, i, a, o) {
      var c;
      if (typeof t == "string") {
        var g = u.lookupPath(t, { follow: !o });
        c = g.node;
      } else
        c = t;
      u.doChown(null, c, o);
    }, lchown(t, i, a) {
      u.chown(t, i, a, !0);
    }, fchown(t, i, a) {
      var o = u.getStreamChecked(t);
      u.doChown(o, o.node, !1);
    }, doTruncate(t, i, a) {
      if (u.isDir(i.mode))
        throw new u.ErrnoError(31);
      if (!u.isFile(i.mode))
        throw new u.ErrnoError(28);
      var o = u.nodePermissions(i, "w");
      if (o)
        throw new u.ErrnoError(o);
      u.doSetAttr(t, i, { size: a, timestamp: Date.now() });
    }, truncate(t, i) {
      if (i < 0)
        throw new u.ErrnoError(28);
      var a;
      if (typeof t == "string") {
        var o = u.lookupPath(t, { follow: !0 });
        a = o.node;
      } else
        a = t;
      u.doTruncate(null, a, i);
    }, ftruncate(t, i) {
      var a = u.getStreamChecked(t);
      if (i < 0 || (a.flags & 2097155) === 0)
        throw new u.ErrnoError(28);
      u.doTruncate(a, a.node, i);
    }, utime(t, i, a) {
      var o = u.lookupPath(t, { follow: !0 }), c = o.node, g = u.checkOpExists(c.node_ops.setattr, 63);
      g(c, { atime: i, mtime: a });
    }, open(t, i, a = 438) {
      if (t === "")
        throw new u.ErrnoError(44);
      i = typeof i == "string" ? Bi(i) : i, i & 64 ? a = a & 4095 | 32768 : a = 0;
      var o, c;
      if (typeof t == "object")
        o = t;
      else {
        c = t.endsWith("/");
        var g = u.lookupPath(t, { follow: !(i & 131072), noent_okay: !0 });
        o = g.node, t = g.path;
      }
      var h = !1;
      if (i & 64)
        if (o) {
          if (i & 128)
            throw new u.ErrnoError(20);
        } else {
          if (c)
            throw new u.ErrnoError(31);
          o = u.mknod(t, a | 511, 0), h = !0;
        }
      if (!o)
        throw new u.ErrnoError(44);
      if (u.isChrdev(o.mode) && (i &= -513), i & 65536 && !u.isDir(o.mode))
        throw new u.ErrnoError(54);
      if (!h) {
        var f = u.mayOpen(o, i);
        if (f)
          throw new u.ErrnoError(f);
      }
      i & 512 && !h && u.truncate(o, 0), i &= -131713;
      var m = u.createStream({ node: o, path: u.getPath(o), flags: i, seekable: !0, position: 0, stream_ops: o.stream_ops, ungotten: [], error: !1 });
      return m.stream_ops.open && m.stream_ops.open(m), h && u.chmod(o, a & 511), r.logReadFiles && !(i & 1) && (t in u.readFiles || (u.readFiles[t] = 1)), m;
    }, close(t) {
      if (u.isClosed(t))
        throw new u.ErrnoError(8);
      t.getdents && (t.getdents = null);
      try {
        t.stream_ops.close && t.stream_ops.close(t);
      } catch (i) {
        throw i;
      } finally {
        u.closeStream(t.fd);
      }
      t.fd = null;
    }, isClosed(t) {
      return t.fd === null;
    }, llseek(t, i, a) {
      if (u.isClosed(t))
        throw new u.ErrnoError(8);
      if (!t.seekable || !t.stream_ops.llseek)
        throw new u.ErrnoError(70);
      if (a != 0 && a != 1 && a != 2)
        throw new u.ErrnoError(28);
      return t.position = t.stream_ops.llseek(t, i, a), t.ungotten = [], t.position;
    }, read(t, i, a, o, c) {
      if (o < 0 || c < 0)
        throw new u.ErrnoError(28);
      if (u.isClosed(t))
        throw new u.ErrnoError(8);
      if ((t.flags & 2097155) === 1)
        throw new u.ErrnoError(8);
      if (u.isDir(t.node.mode))
        throw new u.ErrnoError(31);
      if (!t.stream_ops.read)
        throw new u.ErrnoError(28);
      var g = typeof c < "u";
      if (!g)
        c = t.position;
      else if (!t.seekable)
        throw new u.ErrnoError(70);
      var h = t.stream_ops.read(t, i, a, o, c);
      return g || (t.position += h), h;
    }, write(t, i, a, o, c, g) {
      if (o < 0 || c < 0)
        throw new u.ErrnoError(28);
      if (u.isClosed(t))
        throw new u.ErrnoError(8);
      if ((t.flags & 2097155) === 0)
        throw new u.ErrnoError(8);
      if (u.isDir(t.node.mode))
        throw new u.ErrnoError(31);
      if (!t.stream_ops.write)
        throw new u.ErrnoError(28);
      t.seekable && t.flags & 1024 && u.llseek(t, 0, 2);
      var h = typeof c < "u";
      if (!h)
        c = t.position;
      else if (!t.seekable)
        throw new u.ErrnoError(70);
      var f = t.stream_ops.write(t, i, a, o, c, g);
      return h || (t.position += f), f;
    }, mmap(t, i, a, o, c) {
      if ((o & 2) !== 0 && (c & 2) === 0 && (t.flags & 2097155) !== 2)
        throw new u.ErrnoError(2);
      if ((t.flags & 2097155) === 1)
        throw new u.ErrnoError(2);
      if (!t.stream_ops.mmap)
        throw new u.ErrnoError(43);
      if (!i)
        throw new u.ErrnoError(28);
      return t.stream_ops.mmap(t, i, a, o, c);
    }, msync(t, i, a, o, c) {
      return t.stream_ops.msync ? t.stream_ops.msync(t, i, a, o, c) : 0;
    }, ioctl(t, i, a) {
      if (!t.stream_ops.ioctl)
        throw new u.ErrnoError(59);
      return t.stream_ops.ioctl(t, i, a);
    }, readFile(t, i = {}) {
      if (i.flags = i.flags || 0, i.encoding = i.encoding || "binary", i.encoding !== "utf8" && i.encoding !== "binary")
        throw new Error(`Invalid encoding type "${i.encoding}"`);
      var a, o = u.open(t, i.flags), c = u.stat(t), g = c.size, h = new Uint8Array(g);
      return u.read(o, h, 0, g, 0), i.encoding === "utf8" ? a = Ke(h) : i.encoding === "binary" && (a = h), u.close(o), a;
    }, writeFile(t, i, a = {}) {
      a.flags = a.flags || 577;
      var o = u.open(t, a.flags, a.mode);
      if (typeof i == "string") {
        var c = new Uint8Array(Be(i) + 1), g = Wt(i, c, 0, c.length);
        u.write(o, c, 0, g, void 0, a.canOwn);
      } else if (ArrayBuffer.isView(i))
        u.write(o, i, 0, i.byteLength, void 0, a.canOwn);
      else
        throw new Error("Unsupported data type");
      u.close(o);
    }, cwd: () => u.currentPath, chdir(t) {
      var i = u.lookupPath(t, { follow: !0 });
      if (i.node === null)
        throw new u.ErrnoError(44);
      if (!u.isDir(i.node.mode))
        throw new u.ErrnoError(54);
      var a = u.nodePermissions(i.node, "x");
      if (a)
        throw new u.ErrnoError(a);
      u.currentPath = i.path;
    }, createDefaultDirectories() {
      u.mkdir("/tmp"), u.mkdir("/home"), u.mkdir("/home/web_user");
    }, createDefaultDevices() {
      u.mkdir("/dev"), u.registerDevice(u.makedev(1, 3), { read: () => 0, write: (o, c, g, h, f) => h, llseek: () => 0 }), u.mkdev("/dev/null", u.makedev(1, 3)), Ne.register(u.makedev(5, 0), Ne.default_tty_ops), Ne.register(u.makedev(6, 0), Ne.default_tty1_ops), u.mkdev("/dev/tty", u.makedev(5, 0)), u.mkdev("/dev/tty1", u.makedev(6, 0));
      var t = new Uint8Array(1024), i = 0, a = () => (i === 0 && (Ft(t), i = t.byteLength), t[--i]);
      u.createDevice("/dev", "random", a), u.createDevice("/dev", "urandom", a), u.mkdir("/dev/shm"), u.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories() {
      u.mkdir("/proc");
      var t = u.mkdir("/proc/self");
      u.mkdir("/proc/self/fd"), u.mount({ mount() {
        var i = u.createNode(t, "fd", 16895, 73);
        return i.stream_ops = { llseek: x.stream_ops.llseek }, i.node_ops = { lookup(a, o) {
          var c = +o, g = u.getStreamChecked(c), h = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => g.path }, id: c + 1 };
          return h.parent = h, h;
        }, readdir() {
          return Array.from(u.streams.entries()).filter(([a, o]) => o).map(([a, o]) => a.toString());
        } }, i;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams(t, i, a) {
      t ? u.createDevice("/dev", "stdin", t) : u.symlink("/dev/tty", "/dev/stdin"), i ? u.createDevice("/dev", "stdout", null, i) : u.symlink("/dev/tty", "/dev/stdout"), a ? u.createDevice("/dev", "stderr", null, a) : u.symlink("/dev/tty1", "/dev/stderr"), u.open("/dev/stdin", 0), u.open("/dev/stdout", 1), u.open("/dev/stderr", 1);
    }, staticInit() {
      u.nameTable = new Array(4096), u.mount(x, {}, "/"), u.createDefaultDirectories(), u.createDefaultDevices(), u.createSpecialDirectories(), u.filesystems = { MEMFS: x };
    }, init(t, i, a) {
      u.initialized = !0, t ??= r.stdin, i ??= r.stdout, a ??= r.stderr, u.createStandardStreams(t, i, a);
    }, quit() {
      u.initialized = !1;
      for (var t of u.streams)
        t && u.close(t);
    }, findObject(t, i) {
      var a = u.analyzePath(t, i);
      return a.exists ? a.object : null;
    }, analyzePath(t, i) {
      try {
        var a = u.lookupPath(t, { follow: !i });
        t = a.path;
      } catch {
      }
      var o = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
      try {
        var a = u.lookupPath(t, { parent: !0 });
        o.parentExists = !0, o.parentPath = a.path, o.parentObject = a.node, o.name = V.basename(t), a = u.lookupPath(t, { follow: !i }), o.exists = !0, o.path = a.path, o.object = a.node, o.name = a.node.name, o.isRoot = a.path === "/";
      } catch (c) {
        o.error = c.errno;
      }
      return o;
    }, createPath(t, i, a, o) {
      t = typeof t == "string" ? t : u.getPath(t);
      for (var c = i.split("/").reverse(); c.length; ) {
        var g = c.pop();
        if (g) {
          var h = V.join2(t, g);
          try {
            u.mkdir(h);
          } catch (f) {
            if (f.errno != 20) throw f;
          }
          t = h;
        }
      }
      return h;
    }, createFile(t, i, a, o, c) {
      var g = V.join2(typeof t == "string" ? t : u.getPath(t), i), h = Bt(o, c);
      return u.create(g, h);
    }, createDataFile(t, i, a, o, c, g) {
      var h = i;
      t && (t = typeof t == "string" ? t : u.getPath(t), h = i ? V.join2(t, i) : t);
      var f = Bt(o, c), m = u.create(h, f);
      if (a) {
        if (typeof a == "string") {
          for (var w = new Array(a.length), y = 0, I = a.length; y < I; ++y) w[y] = a.charCodeAt(y);
          a = w;
        }
        u.chmod(m, f | 146);
        var P = u.open(m, 577);
        u.write(P, a, 0, a.length, 0, g), u.close(P), u.chmod(m, f);
      }
    }, createDevice(t, i, a, o) {
      var c = V.join2(typeof t == "string" ? t : u.getPath(t), i), g = Bt(!!a, !!o);
      u.createDevice.major ??= 64;
      var h = u.makedev(u.createDevice.major++, 0);
      return u.registerDevice(h, { open(f) {
        f.seekable = !1;
      }, close(f) {
        o?.buffer?.length && o(10);
      }, read(f, m, w, y, I) {
        for (var P = 0, C = 0; C < y; C++) {
          var b;
          try {
            b = a();
          } catch {
            throw new u.ErrnoError(29);
          }
          if (b === void 0 && P === 0)
            throw new u.ErrnoError(6);
          if (b == null) break;
          P++, m[w + C] = b;
        }
        return P && (f.node.atime = Date.now()), P;
      }, write(f, m, w, y, I) {
        for (var P = 0; P < y; P++)
          try {
            o(m[w + P]);
          } catch {
            throw new u.ErrnoError(29);
          }
        return y && (f.node.mtime = f.node.ctime = Date.now()), P;
      } }), u.mkdev(c, g, h);
    }, forceLoadFile(t) {
      if (t.isDevice || t.isFolder || t.link || t.contents) return !0;
      if (typeof XMLHttpRequest < "u")
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      try {
        t.contents = Ae(t.url), t.usedBytes = t.contents.length;
      } catch {
        throw new u.ErrnoError(29);
      }
    }, createLazyFile(t, i, a, o, c) {
      class g {
        lengthKnown = !1;
        chunks = [];
        get(C) {
          if (!(C > this.length - 1 || C < 0)) {
            var b = C % this.chunkSize, H = C / this.chunkSize | 0;
            return this.getter(H)[b];
          }
        }
        setDataGetter(C) {
          this.getter = C;
        }
        cacheLength() {
          var C = new XMLHttpRequest();
          if (C.open("HEAD", a, !1), C.send(null), !(C.status >= 200 && C.status < 300 || C.status === 304)) throw new Error("Couldn't load " + a + ". Status: " + C.status);
          var b = Number(C.getResponseHeader("Content-length")), H, Z = (H = C.getResponseHeader("Accept-Ranges")) && H === "bytes", J = (H = C.getResponseHeader("Content-Encoding")) && H === "gzip", ee = 1024 * 1024;
          Z || (ee = b);
          var K = (ue, Se) => {
            if (ue > Se) throw new Error("invalid range (" + ue + ", " + Se + ") or no bytes requested!");
            if (Se > b - 1) throw new Error("only " + b + " bytes available! programmer error!");
            var O = new XMLHttpRequest();
            if (O.open("GET", a, !1), b !== ee && O.setRequestHeader("Range", "bytes=" + ue + "-" + Se), O.responseType = "arraybuffer", O.overrideMimeType && O.overrideMimeType("text/plain; charset=x-user-defined"), O.send(null), !(O.status >= 200 && O.status < 300 || O.status === 304)) throw new Error("Couldn't load " + a + ". Status: " + O.status);
            return O.response !== void 0 ? new Uint8Array(O.response || []) : kr(O.responseText || "");
          }, me = this;
          me.setDataGetter((ue) => {
            var Se = ue * ee, O = (ue + 1) * ee - 1;
            if (O = Math.min(O, b - 1), typeof me.chunks[ue] > "u" && (me.chunks[ue] = K(Se, O)), typeof me.chunks[ue] > "u") throw new Error("doXHR failed!");
            return me.chunks[ue];
          }), (J || !b) && (ee = b = 1, b = this.getter(0).length, ee = b, Ve("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = b, this._chunkSize = ee, this.lengthKnown = !0;
        }
        get length() {
          return this.lengthKnown || this.cacheLength(), this._length;
        }
        get chunkSize() {
          return this.lengthKnown || this.cacheLength(), this._chunkSize;
        }
      }
      if (typeof XMLHttpRequest < "u") {
        if (!S) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var h = new g(), f = { isDevice: !1, contents: h };
      } else
        var f = { isDevice: !1, url: a };
      var m = u.createFile(t, i, f, o, c);
      f.contents ? m.contents = f.contents : f.url && (m.contents = null, m.url = f.url), Object.defineProperties(m, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var w = {}, y = Object.keys(m.stream_ops);
      y.forEach((P) => {
        var C = m.stream_ops[P];
        w[P] = (...b) => (u.forceLoadFile(m), C(...b));
      });
      function I(P, C, b, H, Z) {
        var J = P.node.contents;
        if (Z >= J.length) return 0;
        var ee = Math.min(J.length - Z, H);
        if (J.slice)
          for (var K = 0; K < ee; K++)
            C[b + K] = J[Z + K];
        else
          for (var K = 0; K < ee; K++)
            C[b + K] = J.get(Z + K);
        return ee;
      }
      return w.read = (P, C, b, H, Z) => (u.forceLoadFile(m), I(P, C, b, H, Z)), w.mmap = (P, C, b, H, Z) => {
        u.forceLoadFile(m);
        var J = wr(C);
        if (!J)
          throw new u.ErrnoError(48);
        return I(P, q, J, C, b), { ptr: J, allocated: !0 };
      }, m.stream_ops = w, m;
    } }, Nt = (t, i) => (t >>>= 0, t ? Ke(se, t, i) : ""), G = { DEFAULT_POLLMASK: 5, calculateAt(t, i, a) {
      if (V.isAbs(i))
        return i;
      var o;
      if (t === -100)
        o = u.cwd();
      else {
        var c = G.getStreamFromFD(t);
        o = c.path;
      }
      if (i.length == 0) {
        if (!a)
          throw new u.ErrnoError(44);
        return o;
      }
      return o + "/" + i;
    }, writeStat(t, i) {
      E[t >>> 2 >>> 0] = i.dev, E[t + 4 >>> 2 >>> 0] = i.mode, L[t + 8 >>> 2 >>> 0] = i.nlink, E[t + 12 >>> 2 >>> 0] = i.uid, E[t + 16 >>> 2 >>> 0] = i.gid, E[t + 20 >>> 2 >>> 0] = i.rdev, oe[t + 24 >>> 3] = BigInt(i.size), E[t + 32 >>> 2 >>> 0] = 4096, E[t + 36 >>> 2 >>> 0] = i.blocks;
      var a = i.atime.getTime(), o = i.mtime.getTime(), c = i.ctime.getTime();
      return oe[t + 40 >>> 3] = BigInt(Math.floor(a / 1e3)), L[t + 48 >>> 2 >>> 0] = a % 1e3 * 1e3 * 1e3, oe[t + 56 >>> 3] = BigInt(Math.floor(o / 1e3)), L[t + 64 >>> 2 >>> 0] = o % 1e3 * 1e3 * 1e3, oe[t + 72 >>> 3] = BigInt(Math.floor(c / 1e3)), L[t + 80 >>> 2 >>> 0] = c % 1e3 * 1e3 * 1e3, oe[t + 88 >>> 3] = BigInt(i.ino), 0;
    }, writeStatFs(t, i) {
      E[t + 4 >>> 2 >>> 0] = i.bsize, E[t + 40 >>> 2 >>> 0] = i.bsize, E[t + 8 >>> 2 >>> 0] = i.blocks, E[t + 12 >>> 2 >>> 0] = i.bfree, E[t + 16 >>> 2 >>> 0] = i.bavail, E[t + 20 >>> 2 >>> 0] = i.files, E[t + 24 >>> 2 >>> 0] = i.ffree, E[t + 28 >>> 2 >>> 0] = i.fsid, E[t + 44 >>> 2 >>> 0] = i.flags, E[t + 36 >>> 2 >>> 0] = i.namelen;
    }, doMsync(t, i, a, o, c) {
      if (!u.isFile(i.node.mode))
        throw new u.ErrnoError(43);
      if (o & 2)
        return 0;
      var g = se.slice(t, t + a);
      u.msync(i, g, c, a, o);
    }, getStreamFromFD(t) {
      var i = u.getStreamChecked(t);
      return i;
    }, varargs: void 0, getStr(t) {
      var i = Nt(t);
      return i;
    } };
    function Ni(t, i) {
      t >>>= 0;
      try {
        return t = G.getStr(t), u.chmod(t, i), 0;
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    function zi(t) {
      try {
        var i = G.getStreamFromFD(t);
        return u.dupStream(i).fd;
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    function $i(t, i, a, o) {
      i >>>= 0;
      try {
        if (i = G.getStr(i), i = G.calculateAt(t, i), a & -8)
          return -28;
        var c = u.lookupPath(i, { follow: !0 }), g = c.node;
        if (!g)
          return -44;
        var h = "";
        return a & 4 && (h += "r"), a & 2 && (h += "w"), a & 1 && (h += "x"), h && u.nodePermissions(g, h) ? -2 : 0;
      } catch (f) {
        if (typeof u > "u" || f.name !== "ErrnoError") throw f;
        return -f.errno;
      }
    }
    function Hi(t, i, a, o) {
      a = Me(a), o = Me(o);
      try {
        if (isNaN(a)) return 61;
        if (i != 0)
          return -138;
        if (a < 0 || o < 0)
          return -28;
        var c = u.fstat(t).size, g = a + o;
        return g > c && u.ftruncate(t, g), 0;
      } catch (h) {
        if (typeof u > "u" || h.name !== "ErrnoError") throw h;
        return -h.errno;
      }
    }
    function Ui(t, i) {
      try {
        return u.fchmod(t, i), 0;
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    var ft = () => {
      var t = E[+G.varargs >>> 2 >>> 0];
      return G.varargs += 4, t;
    }, Qe = ft;
    function ji(t, i, a) {
      a >>>= 0, G.varargs = a;
      try {
        var o = G.getStreamFromFD(t);
        switch (i) {
          case 0: {
            var c = ft();
            if (c < 0)
              return -28;
            for (; u.streams[c]; )
              c++;
            var g;
            return g = u.dupStream(o, c), g.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return o.flags;
          case 4: {
            var c = ft();
            return o.flags |= c, 0;
          }
          case 12: {
            var c = Qe(), h = 0;
            return _e[c + h >>> 1 >>> 0] = 2, 0;
          }
          case 13:
          case 14:
            return 0;
        }
        return -28;
      } catch (f) {
        if (typeof u > "u" || f.name !== "ErrnoError") throw f;
        return -f.errno;
      }
    }
    function Yi(t, i) {
      i >>>= 0;
      try {
        return G.writeStat(i, u.fstat(t));
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    var pe = (t, i, a) => Wt(t, se, i, a);
    function Vi(t, i) {
      t >>>= 0, i >>>= 0;
      try {
        if (i === 0) return -28;
        var a = u.cwd(), o = Be(a) + 1;
        return i < o ? -68 : (pe(a, t, i), o);
      } catch (c) {
        if (typeof u > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    function Xi(t, i, a) {
      i >>>= 0, a >>>= 0;
      try {
        var o = G.getStreamFromFD(t);
        o.getdents ||= u.readdir(o.path);
        for (var c = 280, g = 0, h = u.llseek(o, 0, 1), f = Math.floor(h / c), m = Math.min(o.getdents.length, f + Math.floor(a / c)), w = f; w < m; w++) {
          var y, I, P = o.getdents[w];
          if (P === ".")
            y = o.node.id, I = 4;
          else if (P === "..") {
            var C = u.lookupPath(o.path, { parent: !0 });
            y = C.node.id, I = 4;
          } else {
            var b;
            try {
              b = u.lookupNode(o.node, P);
            } catch (H) {
              if (H?.errno === 28)
                continue;
              throw H;
            }
            y = b.id, I = u.isChrdev(b.mode) ? 2 : u.isDir(b.mode) ? 4 : u.isLink(b.mode) ? 10 : 8;
          }
          oe[i + g >>> 3] = BigInt(y), oe[i + g + 8 >>> 3] = BigInt((w + 1) * c), _e[i + g + 16 >>> 1 >>> 0] = 280, q[i + g + 18 >>> 0] = I, pe(P, i + g + 19, 256), g += c;
        }
        return u.llseek(o, w * c, 0), g;
      } catch (H) {
        if (typeof u > "u" || H.name !== "ErrnoError") throw H;
        return -H.errno;
      }
    }
    function qi(t, i, a) {
      a >>>= 0, G.varargs = a;
      try {
        var o = G.getStreamFromFD(t);
        switch (i) {
          case 21509:
            return o.tty ? 0 : -59;
          case 21505: {
            if (!o.tty) return -59;
            if (o.tty.ops.ioctl_tcgets) {
              var c = o.tty.ops.ioctl_tcgets(o), g = Qe();
              E[g >>> 2 >>> 0] = c.c_iflag || 0, E[g + 4 >>> 2 >>> 0] = c.c_oflag || 0, E[g + 8 >>> 2 >>> 0] = c.c_cflag || 0, E[g + 12 >>> 2 >>> 0] = c.c_lflag || 0;
              for (var h = 0; h < 32; h++)
                q[g + h + 17 >>> 0] = c.c_cc[h] || 0;
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
            return o.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508: {
            if (!o.tty) return -59;
            if (o.tty.ops.ioctl_tcsets) {
              for (var g = Qe(), f = E[g >>> 2 >>> 0], m = E[g + 4 >>> 2 >>> 0], w = E[g + 8 >>> 2 >>> 0], y = E[g + 12 >>> 2 >>> 0], I = [], h = 0; h < 32; h++)
                I.push(q[g + h + 17 >>> 0]);
              return o.tty.ops.ioctl_tcsets(o.tty, i, { c_iflag: f, c_oflag: m, c_cflag: w, c_lflag: y, c_cc: I });
            }
            return 0;
          }
          case 21519: {
            if (!o.tty) return -59;
            var g = Qe();
            return E[g >>> 2 >>> 0] = 0, 0;
          }
          case 21520:
            return o.tty ? -28 : -59;
          case 21531: {
            var g = Qe();
            return u.ioctl(o, i, g);
          }
          case 21523: {
            if (!o.tty) return -59;
            if (o.tty.ops.ioctl_tiocgwinsz) {
              var P = o.tty.ops.ioctl_tiocgwinsz(o.tty), g = Qe();
              _e[g >>> 1 >>> 0] = P[0], _e[g + 2 >>> 1 >>> 0] = P[1];
            }
            return 0;
          }
          case 21524:
            return o.tty ? 0 : -59;
          case 21515:
            return o.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (C) {
        if (typeof u > "u" || C.name !== "ErrnoError") throw C;
        return -C.errno;
      }
    }
    function Ki(t, i) {
      t >>>= 0, i >>>= 0;
      try {
        return t = G.getStr(t), G.writeStat(i, u.lstat(t));
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    function Qi(t, i, a, o) {
      i >>>= 0, a >>>= 0;
      try {
        i = G.getStr(i);
        var c = o & 256, g = o & 4096;
        return o = o & -6401, i = G.calculateAt(t, i, g), G.writeStat(a, c ? u.lstat(i) : u.stat(i));
      } catch (h) {
        if (typeof u > "u" || h.name !== "ErrnoError") throw h;
        return -h.errno;
      }
    }
    function Ji(t, i, a, o) {
      i >>>= 0, o >>>= 0, G.varargs = o;
      try {
        i = G.getStr(i), i = G.calculateAt(t, i);
        var c = o ? ft() : 0;
        return u.open(i, a, c).fd;
      } catch (g) {
        if (typeof u > "u" || g.name !== "ErrnoError") throw g;
        return -g.errno;
      }
    }
    function Oi(t, i, a, o) {
      i >>>= 0, a >>>= 0, o >>>= 0;
      try {
        if (i = G.getStr(i), i = G.calculateAt(t, i), o <= 0) return -28;
        var c = u.readlink(i), g = Math.min(o, Be(c)), h = q[a + g >>> 0];
        return pe(c, a, o + 1), q[a + g >>> 0] = h, g;
      } catch (f) {
        if (typeof u > "u" || f.name !== "ErrnoError") throw f;
        return -f.errno;
      }
    }
    function Zi(t, i, a, o) {
      i >>>= 0, o >>>= 0;
      try {
        return i = G.getStr(i), o = G.getStr(o), i = G.calculateAt(t, i), o = G.calculateAt(a, o), u.rename(i, o), 0;
      } catch (c) {
        if (typeof u > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    function en(t) {
      t >>>= 0;
      try {
        return t = G.getStr(t), u.rmdir(t), 0;
      } catch (i) {
        if (typeof u > "u" || i.name !== "ErrnoError") throw i;
        return -i.errno;
      }
    }
    function tn(t, i) {
      t >>>= 0, i >>>= 0;
      try {
        return t = G.getStr(t), G.writeStat(i, u.stat(t));
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    function rn(t, i, a) {
      t >>>= 0, a >>>= 0;
      try {
        return t = G.getStr(t), a = G.getStr(a), a = G.calculateAt(i, a), u.symlink(t, a), 0;
      } catch (o) {
        if (typeof u > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    function nn(t, i, a) {
      i >>>= 0;
      try {
        return i = G.getStr(i), i = G.calculateAt(t, i), a === 0 ? u.unlink(i) : a === 512 ? u.rmdir(i) : at("Invalid flags passed to unlinkat"), 0;
      } catch (o) {
        if (typeof u > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    var an = () => at(""), pt = {}, zt = (t) => {
      for (; t.length; ) {
        var i = t.pop(), a = t.pop();
        a(i);
      }
    };
    function st(t) {
      return this.fromWireType(L[t >>> 2 >>> 0]);
    }
    var Je = {}, ze = {}, mt = {}, sn = r.InternalError = class extends Error {
      constructor(i) {
        super(i), this.name = "InternalError";
      }
    }, vt = (t) => {
      throw new sn(t);
    }, $t = (t, i, a) => {
      t.forEach((f) => mt[f] = i);
      function o(f) {
        var m = a(f);
        m.length !== t.length && vt("Mismatched type converter count");
        for (var w = 0; w < t.length; ++w)
          de(t[w], m[w]);
      }
      var c = new Array(i.length), g = [], h = 0;
      i.forEach((f, m) => {
        ze.hasOwnProperty(f) ? c[m] = ze[f] : (g.push(f), Je.hasOwnProperty(f) || (Je[f] = []), Je[f].push(() => {
          c[m] = ze[f], ++h, h === g.length && o(c);
        }));
      }), g.length === 0 && o(c);
    }, on = function(t) {
      t >>>= 0;
      var i = pt[t];
      delete pt[t];
      var a = i.rawConstructor, o = i.rawDestructor, c = i.fields, g = c.map((h) => h.getterReturnType).concat(c.map((h) => h.setterArgumentType));
      $t([t], g, (h) => {
        var f = {};
        return c.forEach((m, w) => {
          var y = m.fieldName, I = h[w], P = h[w].optional, C = m.getter, b = m.getterContext, H = h[w + c.length], Z = m.setter, J = m.setterContext;
          f[y] = { read: (ee) => I.fromWireType(C(b, ee)), write: (ee, K) => {
            var me = [];
            Z(J, ee, H.toWireType(me, K)), zt(me);
          }, optional: P };
        }), [{ name: i.name, fromWireType: (m) => {
          var w = {};
          for (var y in f)
            w[y] = f[y].read(m);
          return o(m), w;
        }, toWireType: (m, w) => {
          for (var y in f)
            if (!(y in w) && !f[y].optional)
              throw new TypeError(`Missing field: "${y}"`);
          var I = a();
          for (y in f)
            f[y].write(I, w[y]);
          return m !== null && m.push(o, I), I;
        }, argPackAdvance: fe, readValueFromPointer: st, destructorFunction: o }];
      });
    }, kt = (t) => {
      if (t === null)
        return "null";
      var i = typeof t;
      return i === "object" || i === "array" || i === "function" ? t.toString() : "" + t;
    }, cn = () => {
      for (var t = new Array(256), i = 0; i < 256; ++i)
        t[i] = String.fromCharCode(i);
      Sr = t;
    }, Sr, ie = (t) => {
      for (var i = "", a = t; se[a >>> 0]; )
        i += Sr[se[a++ >>> 0]];
      return i;
    }, Mt = r.BindingError = class extends Error {
      constructor(i) {
        super(i), this.name = "BindingError";
      }
    }, j = (t) => {
      throw new Mt(t);
    };
    function _n(t, i, a = {}) {
      var o = i.name;
      if (t || j(`type "${o}" must have a positive integer typeid pointer`), ze.hasOwnProperty(t)) {
        if (a.ignoreDuplicateRegistrations)
          return;
        j(`Cannot register type '${o}' twice`);
      }
      if (ze[t] = i, delete mt[t], Je.hasOwnProperty(t)) {
        var c = Je[t];
        delete Je[t], c.forEach((g) => g());
      }
    }
    function de(t, i, a = {}) {
      return _n(t, i, a);
    }
    var Ir = (t, i, a) => {
      switch (i) {
        case 1:
          return a ? (o) => q[o >>> 0] : (o) => se[o >>> 0];
        case 2:
          return a ? (o) => _e[o >>> 1 >>> 0] : (o) => it[o >>> 1 >>> 0];
        case 4:
          return a ? (o) => E[o >>> 2 >>> 0] : (o) => L[o >>> 2 >>> 0];
        case 8:
          return a ? (o) => oe[o >>> 3] : (o) => lr[o >>> 3];
        default:
          throw new TypeError(`invalid integer width (${i}): ${t}`);
      }
    };
    function ln(t, i, a, o, c) {
      t >>>= 0, i >>>= 0, a >>>= 0, i = ie(i);
      var g = i.indexOf("u") != -1;
      de(t, { name: i, fromWireType: (h) => h, toWireType: function(h, f) {
        if (typeof f != "bigint" && typeof f != "number")
          throw new TypeError(`Cannot convert "${kt(f)}" to ${this.name}`);
        return typeof f == "number" && (f = BigInt(f)), f;
      }, argPackAdvance: fe, readValueFromPointer: Ir(i, a, !g), destructorFunction: null });
    }
    var fe = 8;
    function un(t, i, a, o) {
      t >>>= 0, i >>>= 0, i = ie(i), de(t, { name: i, fromWireType: function(c) {
        return !!c;
      }, toWireType: function(c, g) {
        return g ? a : o;
      }, argPackAdvance: fe, readValueFromPointer: function(c) {
        return this.fromWireType(se[c >>> 0]);
      }, destructorFunction: null });
    }
    var gn = (t) => ({ count: t.count, deleteScheduled: t.deleteScheduled, preservePointerOnDelete: t.preservePointerOnDelete, ptr: t.ptr, ptrType: t.ptrType, smartPtr: t.smartPtr, smartPtrType: t.smartPtrType }), Ht = (t) => {
      function i(a) {
        return a.$$.ptrType.registeredClass.name;
      }
      j(i(t) + " instance already deleted");
    }, Ut = !1, Cr = (t) => {
    }, hn = (t) => {
      t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
    }, Pr = (t) => {
      t.count.value -= 1;
      var i = t.count.value === 0;
      i && hn(t);
    }, ot = (t) => typeof FinalizationRegistry > "u" ? (ot = (i) => i, t) : (Ut = new FinalizationRegistry((i) => {
      Pr(i.$$);
    }), ot = (i) => {
      var a = i.$$, o = !!a.smartPtr;
      if (o) {
        var c = { $$: a };
        Ut.register(i, c, i);
      }
      return i;
    }, Cr = (i) => Ut.unregister(i), ot(t)), dn = () => {
      let t = wt.prototype;
      Object.assign(t, { isAliasOf(a) {
        if (!(this instanceof wt) || !(a instanceof wt))
          return !1;
        var o = this.$$.ptrType.registeredClass, c = this.$$.ptr;
        a.$$ = a.$$;
        for (var g = a.$$.ptrType.registeredClass, h = a.$$.ptr; o.baseClass; )
          c = o.upcast(c), o = o.baseClass;
        for (; g.baseClass; )
          h = g.upcast(h), g = g.baseClass;
        return o === g && c === h;
      }, clone() {
        if (this.$$.ptr || Ht(this), this.$$.preservePointerOnDelete)
          return this.$$.count.value += 1, this;
        var a = ot(Object.create(Object.getPrototypeOf(this), { $$: { value: gn(this.$$) } }));
        return a.$$.count.value += 1, a.$$.deleteScheduled = !1, a;
      }, delete() {
        this.$$.ptr || Ht(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && j("Object already scheduled for deletion"), Cr(this), Pr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
      }, isDeleted() {
        return !this.$$.ptr;
      }, deleteLater() {
        return this.$$.ptr || Ht(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && j("Object already scheduled for deletion"), this.$$.deleteScheduled = !0, this;
      } });
      const i = Symbol.dispose;
      i && (t[i] = t.delete);
    };
    function wt() {
    }
    var yt = (t, i) => Object.defineProperty(i, "name", { value: t }), Er = {}, fn = (t, i, a) => {
      if (t[i].overloadTable === void 0) {
        var o = t[i];
        t[i] = function(...c) {
          return t[i].overloadTable.hasOwnProperty(c.length) || j(`Function '${a}' called with an invalid number of arguments (${c.length}) - expects one of (${t[i].overloadTable})!`), t[i].overloadTable[c.length].apply(this, c);
        }, t[i].overloadTable = [], t[i].overloadTable[o.argCount] = o;
      }
    }, jt = (t, i, a) => {
      r.hasOwnProperty(t) ? ((a === void 0 || r[t].overloadTable !== void 0 && r[t].overloadTable[a] !== void 0) && j(`Cannot register public name '${t}' twice`), fn(r, t, t), r[t].overloadTable.hasOwnProperty(a) && j(`Cannot register multiple overloads of a function with the same number of arguments (${a})!`), r[t].overloadTable[a] = i) : (r[t] = i, r[t].argCount = a);
    }, pn = 48, mn = 57, vn = (t) => {
      t = t.replace(/[^a-zA-Z0-9_]/g, "$");
      var i = t.charCodeAt(0);
      return i >= pn && i <= mn ? `_${t}` : t;
    };
    function kn(t, i, a, o, c, g, h, f) {
      this.name = t, this.constructor = i, this.instancePrototype = a, this.rawDestructor = o, this.baseClass = c, this.getActualType = g, this.upcast = h, this.downcast = f, this.pureVirtualFunctions = [];
    }
    var Yt = (t, i, a) => {
      for (; i !== a; )
        i.upcast || j(`Expected null or instance of ${a.name}, got an instance of ${i.name}`), t = i.upcast(t), i = i.baseClass;
      return t;
    };
    function Mn(t, i) {
      if (i === null)
        return this.isReference && j(`null is not a valid ${this.name}`), 0;
      i.$$ || j(`Cannot pass "${kt(i)}" as a ${this.name}`), i.$$.ptr || j(`Cannot pass deleted object as a pointer of type ${this.name}`);
      var a = i.$$.ptrType.registeredClass, o = Yt(i.$$.ptr, a, this.registeredClass);
      return o;
    }
    function wn(t, i) {
      var a;
      if (i === null)
        return this.isReference && j(`null is not a valid ${this.name}`), this.isSmartPointer ? (a = this.rawConstructor(), t !== null && t.push(this.rawDestructor, a), a) : 0;
      (!i || !i.$$) && j(`Cannot pass "${kt(i)}" as a ${this.name}`), i.$$.ptr || j(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && i.$$.ptrType.isConst && j(`Cannot convert argument of type ${i.$$.smartPtrType ? i.$$.smartPtrType.name : i.$$.ptrType.name} to parameter type ${this.name}`);
      var o = i.$$.ptrType.registeredClass;
      if (a = Yt(i.$$.ptr, o, this.registeredClass), this.isSmartPointer)
        switch (i.$$.smartPtr === void 0 && j("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            i.$$.smartPtrType === this ? a = i.$$.smartPtr : j(`Cannot convert argument of type ${i.$$.smartPtrType ? i.$$.smartPtrType.name : i.$$.ptrType.name} to parameter type ${this.name}`);
            break;
          case 1:
            a = i.$$.smartPtr;
            break;
          case 2:
            if (i.$$.smartPtrType === this)
              a = i.$$.smartPtr;
            else {
              var c = i.clone();
              a = this.rawShare(a, le.toHandle(() => c.delete())), t !== null && t.push(this.rawDestructor, a);
            }
            break;
          default:
            j("Unsupporting sharing policy");
        }
      return a;
    }
    function yn(t, i) {
      if (i === null)
        return this.isReference && j(`null is not a valid ${this.name}`), 0;
      i.$$ || j(`Cannot pass "${kt(i)}" as a ${this.name}`), i.$$.ptr || j(`Cannot pass deleted object as a pointer of type ${this.name}`), i.$$.ptrType.isConst && j(`Cannot convert argument of type ${i.$$.ptrType.name} to parameter type ${this.name}`);
      var a = i.$$.ptrType.registeredClass, o = Yt(i.$$.ptr, a, this.registeredClass);
      return o;
    }
    var Dr = (t, i, a) => {
      if (i === a)
        return t;
      if (a.baseClass === void 0)
        return null;
      var o = Dr(t, i, a.baseClass);
      return o === null ? null : a.downcast(o);
    }, Sn = {}, In = (t, i) => {
      for (i === void 0 && j("ptr should not be undefined"); t.baseClass; )
        i = t.upcast(i), t = t.baseClass;
      return i;
    }, Cn = (t, i) => (i = In(t, i), Sn[i]), St = (t, i) => {
      (!i.ptrType || !i.ptr) && vt("makeClassHandle requires ptr and ptrType");
      var a = !!i.smartPtrType, o = !!i.smartPtr;
      return a !== o && vt("Both smartPtrType and smartPtr must be specified"), i.count = { value: 1 }, ot(Object.create(t, { $$: { value: i, writable: !0 } }));
    };
    function Pn(t) {
      var i = this.getPointee(t);
      if (!i)
        return this.destructor(t), null;
      var a = Cn(this.registeredClass, i);
      if (a !== void 0) {
        if (a.$$.count.value === 0)
          return a.$$.ptr = i, a.$$.smartPtr = t, a.clone();
        var o = a.clone();
        return this.destructor(t), o;
      }
      function c() {
        return this.isSmartPointer ? St(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: i, smartPtrType: this, smartPtr: t }) : St(this.registeredClass.instancePrototype, { ptrType: this, ptr: t });
      }
      var g = this.registeredClass.getActualType(i), h = Er[g];
      if (!h)
        return c.call(this);
      var f;
      this.isConst ? f = h.constPointerType : f = h.pointerType;
      var m = Dr(i, this.registeredClass, f.registeredClass);
      return m === null ? c.call(this) : this.isSmartPointer ? St(f.registeredClass.instancePrototype, { ptrType: f, ptr: m, smartPtrType: this, smartPtr: t }) : St(f.registeredClass.instancePrototype, { ptrType: f, ptr: m });
    }
    var En = () => {
      Object.assign(It.prototype, { getPointee(t) {
        return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
      }, destructor(t) {
        this.rawDestructor?.(t);
      }, argPackAdvance: fe, readValueFromPointer: st, fromWireType: Pn });
    };
    function It(t, i, a, o, c, g, h, f, m, w, y) {
      this.name = t, this.registeredClass = i, this.isReference = a, this.isConst = o, this.isSmartPointer = c, this.pointeeType = g, this.sharingPolicy = h, this.rawGetPointee = f, this.rawConstructor = m, this.rawShare = w, this.rawDestructor = y, !c && i.baseClass === void 0 ? o ? (this.toWireType = Mn, this.destructorFunction = null) : (this.toWireType = yn, this.destructorFunction = null) : this.toWireType = wn;
    }
    var br = (t, i, a) => {
      r.hasOwnProperty(t) || vt("Replacing nonexistent public symbol"), r[t].overloadTable !== void 0 && a !== void 0 ? r[t].overloadTable[a] = i : (r[t] = i, r[t].argCount = a);
    }, Dn = (t, i, a = [], o = !1) => {
      var c = W(i), g = c(...a);
      return t[0] == "p" ? g >>> 0 : g;
    }, bn = (t, i, a = !1) => (...o) => Dn(t, i, o, a), we = (t, i, a = !1) => {
      t = ie(t);
      function o() {
        if (t.includes("p"))
          return bn(t, i, a);
        var g = W(i);
        return g;
      }
      var c = o();
      return typeof c != "function" && j(`unknown function pointer with signature ${t}: ${i}`), c;
    };
    class Tn extends Error {
    }
    var Tr = (t) => {
      var i = os(t), a = ie(i);
      return $e(i), a;
    }, Ar = (t, i) => {
      var a = [], o = {};
      function c(g) {
        if (!o[g] && !ze[g]) {
          if (mt[g]) {
            mt[g].forEach(c);
            return;
          }
          a.push(g), o[g] = !0;
        }
      }
      throw i.forEach(c), new Tn(`${t}: ` + a.map(Tr).join([", "]));
    };
    function An(t, i, a, o, c, g, h, f, m, w, y, I, P) {
      t >>>= 0, i >>>= 0, a >>>= 0, o >>>= 0, c >>>= 0, g >>>= 0, h >>>= 0, f >>>= 0, m >>>= 0, w >>>= 0, y >>>= 0, I >>>= 0, P >>>= 0, y = ie(y), g = we(c, g), f &&= we(h, f), w &&= we(m, w), P = we(I, P);
      var C = vn(y);
      jt(C, function() {
        Ar(`Cannot construct ${y} due to unbound types`, [o]);
      }), $t([t, i, a], o ? [o] : [], (b) => {
        b = b[0];
        var H, Z;
        o ? (H = b.registeredClass, Z = H.instancePrototype) : Z = wt.prototype;
        var J = yt(y, function(...O) {
          if (Object.getPrototypeOf(this) !== ee)
            throw new Mt(`Use 'new' to construct ${y}`);
          if (K.constructor_body === void 0)
            throw new Mt(`${y} has no accessible constructor`);
          var Vr = K.constructor_body[O.length];
          if (Vr === void 0)
            throw new Mt(`Tried to invoke ctor of ${y} with invalid number of parameters (${O.length}) - expected (${Object.keys(K.constructor_body).toString()}) parameters instead!`);
          return Vr.apply(this, O);
        }), ee = Object.create(Z, { constructor: { value: J } });
        J.prototype = ee;
        var K = new kn(y, J, ee, P, H, g, f, w);
        K.baseClass && (K.baseClass.__derivedClasses ??= [], K.baseClass.__derivedClasses.push(K));
        var me = new It(y, K, !0, !1, !1), ue = new It(y + "*", K, !1, !1, !1), Se = new It(y + " const*", K, !1, !0, !1);
        return Er[t] = { pointerType: ue, constPointerType: Se }, br(C, J), [me, ue, Se];
      });
    }
    var Vt = [], ye = [];
    function Xt(t) {
      t >>>= 0, t > 9 && --ye[t + 1] === 0 && (ye[t] = void 0, Vt.push(t));
    }
    var Gn = () => ye.length / 2 - 5 - Vt.length, Rn = () => {
      ye.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), r.count_emval_handles = Gn;
    }, le = { toValue: (t) => (t || j(`Cannot use deleted val. handle = ${t}`), ye[t]), toHandle: (t) => {
      switch (t) {
        case void 0:
          return 2;
        case null:
          return 4;
        case !0:
          return 6;
        case !1:
          return 8;
        default: {
          const i = Vt.pop() || ye.length;
          return ye[i] = t, ye[i + 1] = 1, i;
        }
      }
    } }, xn = { name: "emscripten::val", fromWireType: (t) => {
      var i = le.toValue(t);
      return Xt(t), i;
    }, toWireType: (t, i) => le.toHandle(i), argPackAdvance: fe, readValueFromPointer: st, destructorFunction: null };
    function Fn(t) {
      return t >>>= 0, de(t, xn);
    }
    var Ln = (t, i, a) => {
      switch (i) {
        case 1:
          return a ? function(o) {
            return this.fromWireType(q[o >>> 0]);
          } : function(o) {
            return this.fromWireType(se[o >>> 0]);
          };
        case 2:
          return a ? function(o) {
            return this.fromWireType(_e[o >>> 1 >>> 0]);
          } : function(o) {
            return this.fromWireType(it[o >>> 1 >>> 0]);
          };
        case 4:
          return a ? function(o) {
            return this.fromWireType(E[o >>> 2 >>> 0]);
          } : function(o) {
            return this.fromWireType(L[o >>> 2 >>> 0]);
          };
        default:
          throw new TypeError(`invalid integer width (${i}): ${t}`);
      }
    };
    function Wn(t, i, a, o) {
      t >>>= 0, i >>>= 0, a >>>= 0, i = ie(i);
      function c() {
      }
      c.values = {}, de(t, { name: i, constructor: c, fromWireType: function(g) {
        return this.constructor.values[g];
      }, toWireType: (g, h) => h.value, argPackAdvance: fe, readValueFromPointer: Ln(i, a, o), destructorFunction: null }), jt(i, c);
    }
    var qt = (t, i) => {
      var a = ze[t];
      return a === void 0 && j(`${i} has unknown type ${Tr(t)}`), a;
    };
    function Bn(t, i, a) {
      t >>>= 0, i >>>= 0;
      var o = qt(t, "enum");
      i = ie(i);
      var c = o.constructor, g = Object.create(o.constructor.prototype, { value: { value: a }, constructor: { value: yt(`${o.name}_${i}`, function() {
      }) } });
      c.values[a] = g, c[i] = g;
    }
    var Nn = (t, i) => {
      switch (i) {
        case 4:
          return function(a) {
            return this.fromWireType(gt[a >>> 2 >>> 0]);
          };
        case 8:
          return function(a) {
            return this.fromWireType(ht[a >>> 3 >>> 0]);
          };
        default:
          throw new TypeError(`invalid float width (${i}): ${t}`);
      }
    }, zn = function(t, i, a) {
      t >>>= 0, i >>>= 0, a >>>= 0, i = ie(i), de(t, { name: i, fromWireType: (o) => o, toWireType: (o, c) => c, argPackAdvance: fe, readValueFromPointer: Nn(i, a), destructorFunction: null });
    };
    function $n(t) {
      for (var i = 1; i < t.length; ++i)
        if (t[i] !== null && t[i].destructorFunction === void 0)
          return !0;
      return !1;
    }
    var Hn = { ftf: function(t, i, a, o, c, g, h) {
      return function() {
        var f = a(o), m = g.fromWireType(f);
        return m;
      };
    }, ftft: function(t, i, a, o, c, g, h, f, m) {
      return function(w) {
        var y = f.toWireType(null, w), I = a(o, y);
        m(y);
        var P = g.fromWireType(I);
        return P;
      };
    }, fffn: function(t, i, a, o, c, g, h, f) {
      return function(m) {
        var w = f.toWireType(null, m);
        a(o, w);
      };
    }, ftfn: function(t, i, a, o, c, g, h, f) {
      return function(m) {
        var w = f.toWireType(null, m), y = a(o, w), I = g.fromWireType(y);
        return I;
      };
    }, ftfnn: function(t, i, a, o, c, g, h, f, m) {
      return function(w, y) {
        var I = f.toWireType(null, w), P = m.toWireType(null, y), C = a(o, I, P), b = g.fromWireType(C);
        return b;
      };
    }, ftfnnn: function(t, i, a, o, c, g, h, f, m, w) {
      return function(y, I, P) {
        var C = f.toWireType(null, y), b = m.toWireType(null, I), H = w.toWireType(null, P), Z = a(o, C, b, H), J = g.fromWireType(Z);
        return J;
      };
    }, ftfnt: function(t, i, a, o, c, g, h, f, m, w) {
      return function(y, I) {
        var P = f.toWireType(null, y), C = m.toWireType(null, I), b = a(o, P, C);
        w(C);
        var H = g.fromWireType(b);
        return H;
      };
    } };
    function Un(t, i, a, o) {
      const c = ["f", a ? "t" : "f", o ? "t" : "f"];
      for (let g = 2; g < t.length; ++g) {
        const h = t[g];
        let f = "";
        h.destructorFunction === void 0 ? f = "u" : h.destructorFunction === null ? f = "n" : f = "t", c.push(f);
      }
      return c.join("");
    }
    function jn(t, i, a, o, c, g) {
      var h = i.length;
      h < 2 && j("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var f = i[1] !== null && a !== null, m = $n(i), w = i[0].name !== "void", y = [t, j, o, c, zt, i[0], i[1]], I = 0; I < h - 2; ++I)
        y.push(i[I + 2]);
      if (!m)
        for (var I = 2; I < i.length; ++I)
          i[I].destructorFunction !== null && y.push(i[I].destructorFunction);
      var P = Un(i, f, w, g), C = Hn[P](...y);
      return yt(t, C);
    }
    var Yn = (t, i) => {
      for (var a = [], o = 0; o < t; o++)
        a.push(L[i + o * 4 >>> 2 >>> 0]);
      return a;
    }, Vn = (t) => {
      t = t.trim();
      const i = t.indexOf("(");
      return i === -1 ? t : t.slice(0, i);
    };
    function Xn(t, i, a, o, c, g, h, f) {
      t >>>= 0, a >>>= 0, o >>>= 0, c >>>= 0, g >>>= 0;
      var m = Yn(i, a);
      t = ie(t), t = Vn(t), c = we(o, c, h), jt(t, function() {
        Ar(`Cannot call ${t} due to unbound types`, m);
      }, i - 1), $t([], m, (w) => {
        var y = [w[0], null].concat(w.slice(1));
        return br(t, jn(t, y, null, c, g, h), i - 1), [];
      });
    }
    function qn(t, i, a, o, c) {
      t >>>= 0, i >>>= 0, a >>>= 0, i = ie(i);
      var g = (y) => y;
      if (o === 0) {
        var h = 32 - 8 * a;
        g = (y) => y << h >>> h;
      }
      var f = i.includes("unsigned"), m = (y, I) => {
      }, w;
      f ? w = function(y, I) {
        return m(I, this.name), I >>> 0;
      } : w = function(y, I) {
        return m(I, this.name), I;
      }, de(t, { name: i, fromWireType: g, toWireType: w, argPackAdvance: fe, readValueFromPointer: Ir(i, a, o !== 0), destructorFunction: null });
    }
    function Kn(t, i, a) {
      t >>>= 0, a >>>= 0;
      var o = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array], c = o[i];
      function g(h) {
        var f = L[h >>> 2 >>> 0], m = L[h + 4 >>> 2 >>> 0];
        return new c(q.buffer, m, f);
      }
      a = ie(a), de(t, { name: a, fromWireType: g, argPackAdvance: fe, readValueFromPointer: g }, { ignoreDuplicateRegistrations: !0 });
    }
    function Qn(t, i) {
      t >>>= 0, i >>>= 0, i = ie(i), de(t, { name: i, fromWireType(a) {
        for (var o = L[a >>> 2 >>> 0], c = a + 4, g, h, f = c, h = 0; h <= o; ++h) {
          var m = c + h;
          if (h == o || se[m >>> 0] == 0) {
            var w = m - f, y = Nt(f, w);
            g === void 0 ? g = y : (g += "\0", g += y), f = m + 1;
          }
        }
        return $e(a), g;
      }, toWireType(a, o) {
        o instanceof ArrayBuffer && (o = new Uint8Array(o));
        var c, g = typeof o == "string";
        g || ArrayBuffer.isView(o) && o.BYTES_PER_ELEMENT == 1 || j("Cannot pass non-string to std::string"), g ? c = Be(o) : c = o.length;
        var h = Yr(4 + c + 1), f = h + 4;
        return L[h >>> 2 >>> 0] = c, g ? pe(o, f, c + 1) : se.set(o, f >>> 0), a !== null && a.push($e, h), h;
      }, argPackAdvance: fe, readValueFromPointer: st, destructorFunction(a) {
        $e(a);
      } });
    }
    var Gr = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Jn = (t, i) => {
      for (var a = t, o = a >> 1, c = o + i / 2; !(o >= c) && it[o >>> 0]; ) ++o;
      if (a = o << 1, a - t > 32 && Gr) return Gr.decode(se.subarray(t >>> 0, a >>> 0));
      for (var g = "", h = 0; !(h >= i / 2); ++h) {
        var f = _e[t + h * 2 >>> 1 >>> 0];
        if (f == 0) break;
        g += String.fromCharCode(f);
      }
      return g;
    }, On = (t, i, a) => {
      if (a ??= 2147483647, a < 2) return 0;
      a -= 2;
      for (var o = i, c = a < t.length * 2 ? a / 2 : t.length, g = 0; g < c; ++g) {
        var h = t.charCodeAt(g);
        _e[i >>> 1 >>> 0] = h, i += 2;
      }
      return _e[i >>> 1 >>> 0] = 0, i - o;
    }, Zn = (t) => t.length * 2, ea = (t, i) => {
      for (var a = 0, o = ""; !(a >= i / 4); ) {
        var c = E[t + a * 4 >>> 2 >>> 0];
        if (c == 0) break;
        if (++a, c >= 65536) {
          var g = c - 65536;
          o += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023);
        } else
          o += String.fromCharCode(c);
      }
      return o;
    }, ta = (t, i, a) => {
      if (i >>>= 0, a ??= 2147483647, a < 4) return 0;
      for (var o = i, c = o + a - 4, g = 0; g < t.length; ++g) {
        var h = t.charCodeAt(g);
        if (h >= 55296 && h <= 57343) {
          var f = t.charCodeAt(++g);
          h = 65536 + ((h & 1023) << 10) | f & 1023;
        }
        if (E[i >>> 2 >>> 0] = h, i += 4, i + 4 > c) break;
      }
      return E[i >>> 2 >>> 0] = 0, i - o;
    }, ra = (t) => {
      for (var i = 0, a = 0; a < t.length; ++a) {
        var o = t.charCodeAt(a);
        o >= 55296 && o <= 57343 && ++a, i += 4;
      }
      return i;
    }, ia = function(t, i, a) {
      t >>>= 0, i >>>= 0, a >>>= 0, a = ie(a);
      var o, c, g, h;
      i === 2 ? (o = Jn, c = On, h = Zn, g = (f) => it[f >>> 1 >>> 0]) : i === 4 && (o = ea, c = ta, h = ra, g = (f) => L[f >>> 2 >>> 0]), de(t, { name: a, fromWireType: (f) => {
        for (var m = L[f >>> 2 >>> 0], w, y = f + 4, I = 0; I <= m; ++I) {
          var P = f + 4 + I * i;
          if (I == m || g(P) == 0) {
            var C = P - y, b = o(y, C);
            w === void 0 ? w = b : (w += "\0", w += b), y = P + i;
          }
        }
        return $e(f), w;
      }, toWireType: (f, m) => {
        typeof m != "string" && j(`Cannot pass non-string to C++ string type ${a}`);
        var w = h(m), y = Yr(4 + w + i);
        return L[y >>> 2 >>> 0] = w / i, c(m, y + 4, w + i), f !== null && f.push($e, y), y;
      }, argPackAdvance: fe, readValueFromPointer: st, destructorFunction(f) {
        $e(f);
      } });
    };
    function na(t, i, a, o, c, g) {
      t >>>= 0, i >>>= 0, a >>>= 0, o >>>= 0, c >>>= 0, g >>>= 0, pt[t] = { name: ie(i), rawConstructor: we(a, o), rawDestructor: we(c, g), fields: [] };
    }
    function aa(t, i, a, o, c, g, h, f, m, w) {
      t >>>= 0, i >>>= 0, a >>>= 0, o >>>= 0, c >>>= 0, g >>>= 0, h >>>= 0, f >>>= 0, m >>>= 0, w >>>= 0, pt[t].fields.push({ fieldName: ie(i), getterReturnType: a, getter: we(o, c), getterContext: g, setterArgumentType: h, setter: we(f, m), setterContext: w });
    }
    var sa = function(t, i) {
      t >>>= 0, i >>>= 0, i = ie(i), de(t, { isVoid: !0, name: i, argPackAdvance: 0, fromWireType: () => {
      }, toWireType: (a, o) => {
      } });
    }, Rr = 0, oa = () => {
      Rt = !1, Rr = 0;
    };
    function ca(t) {
      return t >>>= 0, t ? -52 : 0;
    }
    var _a = () => {
      throw 1 / 0;
    }, la = {}, xr = (t) => {
      var i = la[t];
      return i === void 0 ? ie(t) : i;
    }, Kt = [];
    function ua(t, i, a, o, c) {
      return t >>>= 0, i >>>= 0, a >>>= 0, o >>>= 0, c >>>= 0, t = Kt[t], i = le.toValue(i), a = xr(a), t(i, i[a], o, c);
    }
    var ga = (t) => {
      var i = Kt.length;
      return Kt.push(t), i;
    }, ha = (t, i) => {
      for (var a = new Array(t), o = 0; o < t; ++o)
        a[o] = qt(L[i + o * 4 >>> 2 >>> 0], `parameter ${o}`);
      return a;
    }, da = (t, i, a) => {
      var o = [], c = t.toWireType(o, a);
      return o.length && (L[i >>> 2 >>> 0] = le.toHandle(o)), c;
    }, fa = Reflect.construct, pa = function(t, i, a) {
      i >>>= 0;
      var o = ha(t, i), c = o.shift();
      t--;
      var g = new Array(t), h = (m, w, y, I) => {
        for (var P = 0, C = 0; C < t; ++C)
          g[C] = o[C].readValueFromPointer(I + P), P += o[C].argPackAdvance;
        var b = a === 1 ? fa(w, g) : w.apply(m, g);
        return da(c, y, b);
      }, f = `methodCaller<(${o.map((m) => m.name).join(", ")}) => ${c.name}>`;
      return ga(yt(f, h));
    };
    function ma(t) {
      t >>>= 0, t > 9 && (ye[t + 1] += 1);
    }
    function va() {
      return le.toHandle([]);
    }
    function ka(t) {
      return t >>>= 0, le.toHandle(xr(t));
    }
    function Ma() {
      return le.toHandle({});
    }
    function wa(t) {
      t >>>= 0;
      var i = le.toValue(t);
      zt(i), Xt(t);
    }
    function ya(t, i, a) {
      t >>>= 0, i >>>= 0, a >>>= 0, t = le.toValue(t), i = le.toValue(i), a = le.toValue(a), t[i] = a;
    }
    function Sa(t, i) {
      t >>>= 0, i >>>= 0, t = qt(t, "_emval_take_value");
      var a = t.readValueFromPointer(i);
      return le.toHandle(a);
    }
    function Ia(t, i) {
      t = Me(t), i >>>= 0;
      var a = new Date(t * 1e3);
      E[i >>> 2 >>> 0] = a.getUTCSeconds(), E[i + 4 >>> 2 >>> 0] = a.getUTCMinutes(), E[i + 8 >>> 2 >>> 0] = a.getUTCHours(), E[i + 12 >>> 2 >>> 0] = a.getUTCDate(), E[i + 16 >>> 2 >>> 0] = a.getUTCMonth(), E[i + 20 >>> 2 >>> 0] = a.getUTCFullYear() - 1900, E[i + 24 >>> 2 >>> 0] = a.getUTCDay();
      var o = Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0), c = (a.getTime() - o) / (1e3 * 60 * 60 * 24) | 0;
      E[i + 28 >>> 2 >>> 0] = c;
    }
    var Ca = (t) => t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0), Pa = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Ea = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Fr = (t) => {
      var i = Ca(t.getFullYear()), a = i ? Pa : Ea, o = a[t.getMonth()] + t.getDate() - 1;
      return o;
    };
    function Da(t, i) {
      t = Me(t), i >>>= 0;
      var a = new Date(t * 1e3);
      E[i >>> 2 >>> 0] = a.getSeconds(), E[i + 4 >>> 2 >>> 0] = a.getMinutes(), E[i + 8 >>> 2 >>> 0] = a.getHours(), E[i + 12 >>> 2 >>> 0] = a.getDate(), E[i + 16 >>> 2 >>> 0] = a.getMonth(), E[i + 20 >>> 2 >>> 0] = a.getFullYear() - 1900, E[i + 24 >>> 2 >>> 0] = a.getDay();
      var o = Fr(a) | 0;
      E[i + 28 >>> 2 >>> 0] = o, E[i + 36 >>> 2 >>> 0] = -(a.getTimezoneOffset() * 60);
      var c = new Date(a.getFullYear(), 0, 1), g = new Date(a.getFullYear(), 6, 1).getTimezoneOffset(), h = c.getTimezoneOffset(), f = (g != h && a.getTimezoneOffset() == Math.min(h, g)) | 0;
      E[i + 32 >>> 2 >>> 0] = f;
    }
    var ba = function(t) {
      t >>>= 0;
      var i = (() => {
        var a = new Date(E[t + 20 >>> 2 >>> 0] + 1900, E[t + 16 >>> 2 >>> 0], E[t + 12 >>> 2 >>> 0], E[t + 8 >>> 2 >>> 0], E[t + 4 >>> 2 >>> 0], E[t >>> 2 >>> 0], 0), o = E[t + 32 >>> 2 >>> 0], c = a.getTimezoneOffset(), g = new Date(a.getFullYear(), 0, 1), h = new Date(a.getFullYear(), 6, 1).getTimezoneOffset(), f = g.getTimezoneOffset(), m = Math.min(f, h);
        if (o < 0)
          E[t + 32 >>> 2 >>> 0] = +(h != f && m == c);
        else if (o > 0 != (m == c)) {
          var w = Math.max(f, h), y = o > 0 ? m : w;
          a.setTime(a.getTime() + (y - c) * 6e4);
        }
        E[t + 24 >>> 2 >>> 0] = a.getDay();
        var I = Fr(a) | 0;
        E[t + 28 >>> 2 >>> 0] = I, E[t >>> 2 >>> 0] = a.getSeconds(), E[t + 4 >>> 2 >>> 0] = a.getMinutes(), E[t + 8 >>> 2 >>> 0] = a.getHours(), E[t + 12 >>> 2 >>> 0] = a.getDate(), E[t + 16 >>> 2 >>> 0] = a.getMonth(), E[t + 20 >>> 2 >>> 0] = a.getYear();
        var P = a.getTime();
        return isNaN(P) ? -1 : P / 1e3;
      })();
      return BigInt(i);
    };
    function Ta(t, i, a, o, c, g, h) {
      t >>>= 0, c = Me(c), g >>>= 0, h >>>= 0;
      try {
        if (isNaN(c)) return 61;
        var f = G.getStreamFromFD(o), m = u.mmap(f, t, c, i, a), w = m.ptr;
        return E[g >>> 2 >>> 0] = m.allocated, L[h >>> 2 >>> 0] = w, 0;
      } catch (y) {
        if (typeof u > "u" || y.name !== "ErrnoError") throw y;
        return -y.errno;
      }
    }
    function Aa(t, i, a, o, c, g) {
      t >>>= 0, i >>>= 0, g = Me(g);
      try {
        var h = G.getStreamFromFD(c);
        a & 2 && G.doMsync(t, h, i, o, g);
      } catch (f) {
        if (typeof u > "u" || f.name !== "ErrnoError") throw f;
        return -f.errno;
      }
    }
    var Ga = function(t, i, a, o) {
      t >>>= 0, i >>>= 0, a >>>= 0, o >>>= 0;
      var c = (/* @__PURE__ */ new Date()).getFullYear(), g = new Date(c, 0, 1), h = new Date(c, 6, 1), f = g.getTimezoneOffset(), m = h.getTimezoneOffset(), w = Math.max(f, m);
      L[t >>> 2 >>> 0] = w * 60, E[i >>> 2 >>> 0] = +(f != m);
      var y = (C) => {
        var b = C >= 0 ? "-" : "+", H = Math.abs(C), Z = String(Math.floor(H / 60)).padStart(2, "0"), J = String(H % 60).padStart(2, "0");
        return `UTC${b}${Z}${J}`;
      }, I = y(f), P = y(m);
      m < f ? (pe(I, a, 17), pe(P, o, 17)) : (pe(I, o, 17), pe(P, a, 17));
    }, Lr = () => performance.now(), Wr = () => Date.now(), Ra = (t) => t >= 0 && t <= 3;
    function xa(t, i, a) {
      if (a >>>= 0, !Ra(t))
        return 28;
      var o;
      t === 0 ? o = Wr() : o = Lr();
      var c = Math.round(o * 1e3 * 1e3);
      return oe[a >>> 3] = BigInt(c), 0;
    }
    var Br = () => 4294901760;
    function Fa() {
      return Br();
    }
    var La = (t) => {
      var i = ut.buffer, a = (t - i.byteLength + 65535) / 65536 | 0;
      try {
        return ut.grow(a), gr(), 1;
      } catch {
      }
    };
    function Wa(t) {
      t >>>= 0;
      var i = se.length, a = Br();
      if (t > a)
        return !1;
      for (var o = 1; o <= 4; o *= 2) {
        var c = i * (1 + 0.2 / o);
        c = Math.min(c, t + 100663296);
        var g = Math.min(a, Mr(Math.max(t, c), 65536)), h = La(g);
        if (h)
          return !0;
      }
      return !1;
    }
    var Qt = {}, Ba = () => R || "./this.program", ct = () => {
      if (!ct.strings) {
        var t = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", i = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: t, _: Ba() };
        for (var a in Qt)
          Qt[a] === void 0 ? delete i[a] : i[a] = Qt[a];
        var o = [];
        for (var a in i)
          o.push(`${a}=${i[a]}`);
        ct.strings = o;
      }
      return ct.strings;
    };
    function Na(t, i) {
      t >>>= 0, i >>>= 0;
      var a = 0, o = 0;
      for (var c of ct()) {
        var g = i + a;
        L[t + o >>> 2 >>> 0] = g, a += pe(c, g, 1 / 0) + 1, o += 4;
      }
      return 0;
    }
    function za(t, i) {
      t >>>= 0, i >>>= 0;
      var a = ct();
      L[t >>> 2 >>> 0] = a.length;
      var o = 0;
      for (var c of a)
        o += Be(c) + 1;
      return L[i >>> 2 >>> 0] = o, 0;
    }
    var $a = () => Rt || Rr > 0, Nr = (t) => {
      $a() || (r.onExit?.(t), Tt = !0), B(t, new ki(t));
    }, Ha = (t, i) => {
      Nr(t);
    }, Ua = Ha;
    function ja(t) {
      try {
        var i = G.getStreamFromFD(t);
        return u.close(i), 0;
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return a.errno;
      }
    }
    function Ya(t, i) {
      i >>>= 0;
      try {
        var a = 0, o = 0, c = 0, g = G.getStreamFromFD(t), h = g.tty ? 2 : u.isDir(g.mode) ? 3 : u.isLink(g.mode) ? 7 : 4;
        return q[i >>> 0] = h, _e[i + 2 >>> 1 >>> 0] = c, oe[i + 8 >>> 3] = BigInt(a), oe[i + 16 >>> 3] = BigInt(o), 0;
      } catch (f) {
        if (typeof u > "u" || f.name !== "ErrnoError") throw f;
        return f.errno;
      }
    }
    var zr = (t, i, a, o) => {
      for (var c = 0, g = 0; g < a; g++) {
        var h = L[i >>> 2 >>> 0], f = L[i + 4 >>> 2 >>> 0];
        i += 8;
        var m = u.read(t, q, h, f, o);
        if (m < 0) return -1;
        if (c += m, m < f) break;
        typeof o < "u" && (o += m);
      }
      return c;
    };
    function Va(t, i, a, o, c) {
      i >>>= 0, a >>>= 0, o = Me(o), c >>>= 0;
      try {
        if (isNaN(o)) return 61;
        var g = G.getStreamFromFD(t), h = zr(g, i, a, o);
        return L[c >>> 2 >>> 0] = h, 0;
      } catch (f) {
        if (typeof u > "u" || f.name !== "ErrnoError") throw f;
        return f.errno;
      }
    }
    var $r = (t, i, a, o) => {
      for (var c = 0, g = 0; g < a; g++) {
        var h = L[i >>> 2 >>> 0], f = L[i + 4 >>> 2 >>> 0];
        i += 8;
        var m = u.write(t, q, h, f, o);
        if (m < 0) return -1;
        if (c += m, m < f)
          break;
        typeof o < "u" && (o += m);
      }
      return c;
    };
    function Xa(t, i, a, o, c) {
      i >>>= 0, a >>>= 0, o = Me(o), c >>>= 0;
      try {
        if (isNaN(o)) return 61;
        var g = G.getStreamFromFD(t), h = $r(g, i, a, o);
        return L[c >>> 2 >>> 0] = h, 0;
      } catch (f) {
        if (typeof u > "u" || f.name !== "ErrnoError") throw f;
        return f.errno;
      }
    }
    function qa(t, i, a, o) {
      i >>>= 0, a >>>= 0, o >>>= 0;
      try {
        var c = G.getStreamFromFD(t), g = zr(c, i, a);
        return L[o >>> 2 >>> 0] = g, 0;
      } catch (h) {
        if (typeof u > "u" || h.name !== "ErrnoError") throw h;
        return h.errno;
      }
    }
    function Ka(t, i, a, o) {
      i = Me(i), o >>>= 0;
      try {
        if (isNaN(i)) return 61;
        var c = G.getStreamFromFD(t);
        return u.llseek(c, i, a), oe[o >>> 3] = BigInt(c.position), c.getdents && i === 0 && a === 0 && (c.getdents = null), 0;
      } catch (g) {
        if (typeof u > "u" || g.name !== "ErrnoError") throw g;
        return g.errno;
      }
    }
    function Qa(t) {
      try {
        var i = G.getStreamFromFD(t);
        return i.stream_ops?.fsync ? i.stream_ops.fsync(i) : 0;
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return a.errno;
      }
    }
    function Ja(t, i, a, o) {
      i >>>= 0, a >>>= 0, o >>>= 0;
      try {
        var c = G.getStreamFromFD(t), g = $r(c, i, a);
        return L[o >>> 2 >>> 0] = g, 0;
      } catch (h) {
        if (typeof u > "u" || h.name !== "ErrnoError") throw h;
        return h.errno;
      }
    }
    function Oa(t, i) {
      t >>>= 0, i >>>= 0;
      try {
        return Ft(se.subarray(t >>> 0, t + i >>> 0)), 0;
      } catch (a) {
        if (typeof u > "u" || a.name !== "ErrnoError") throw a;
        return a.errno;
      }
    }
    var Hr = (t, i) => {
      t < 128 ? i.push(t) : i.push(t % 128 | 128, t >> 7);
    }, Za = (t) => {
      for (var i = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, a = { parameters: [], results: t[0] == "v" ? [] : [i[t[0]]] }, o = 1; o < t.length; ++o)
        a.parameters.push(i[t[o]]);
      return a;
    }, es = (t, i) => {
      var a = t.slice(0, 1), o = t.slice(1), c = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
      i.push(96), Hr(o.length, i);
      for (var g of o)
        i.push(c[g]);
      a == "v" ? i.push(0) : i.push(1, c[a]);
    }, ts = (t, i) => {
      if (typeof WebAssembly.Function == "function")
        return new WebAssembly.Function(Za(i), t);
      var a = [1];
      es(i, a);
      var o = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      Hr(a.length, o), o.push(...a), o.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var c = new WebAssembly.Module(new Uint8Array(o)), g = new WebAssembly.Instance(c, { e: { f: t } }), h = g.exports.f;
      return h;
    }, rs = (t, i) => {
      if (Oe)
        for (var a = t; a < t + i; a++) {
          var o = W(a);
          o && Oe.set(o, a);
        }
    }, Oe, is = (t) => (Oe || (Oe = /* @__PURE__ */ new WeakMap(), rs(0, We.length)), Oe.get(t) || 0), Ur = [], ns = () => {
      if (Ur.length)
        return Ur.pop();
      try {
        We.grow(1);
      } catch (t) {
        throw t instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : t;
      }
      return We.length - 1;
    }, jr = (t, i) => {
      We.set(t, i), xt[t] = We.get(t);
    }, as = (t, i) => {
      var a = is(t);
      if (a)
        return a;
      var o = ns();
      try {
        jr(o, t);
      } catch (g) {
        if (!(g instanceof TypeError))
          throw g;
        var c = ts(t, i);
        jr(o, c);
      }
      return Oe.set(t, o), o;
    };
    u.createPreloadedFile = Wi, u.staticInit(), x.doesNotExistError = new u.ErrnoError(44), x.doesNotExistError.stack = "<generic error, no stack>", cn(), dn(), En(), Rn(), r.noExitRuntime && (Rt = r.noExitRuntime), r.preloadPlugins && (yr = r.preloadPlugins), r.print && (Ve = r.print), r.printErr && (Ge = r.printErr), r.wasmBinary && (rt = r.wasmBinary), r.arguments && r.arguments, r.thisProgram && (R = r.thisProgram), r.addFunction = as, r.setValue = Si, r.getValue = yi, r.UTF8ToString = Nt, r.stringToUTF8 = pe, r.lengthBytesUTF8 = Be, r.FS = u;
    var ss = { Z: Pi, B: Di, a: bi, A: Ti, ua: Ni, sa: zi, va: $i, ba: Hi, ra: Ui, F: ji, qa: Yi, la: Vi, Y: Xi, ya: qi, na: Ki, oa: Qi, D: Ji, ab: Oi, _a: Zi, $a: en, pa: tn, Za: rn, X: nn, wa: an, Na: on, P: ln, Ha: un, I: An, Fa: Fn, w: Wn, e: Bn, O: zn, p: Xn, v: qn, n: Kn, Ga: Qn, G: ia, Oa: na, H: aa, Ia: sa, _: oa, Xa: ca, Va: _a, Ka: ua, l: Xt, La: pa, Ma: ma, Q: va, s: ka, z: Ma, Ja: wa, q: ya, o: Sa, ea: Ia, fa: Da, ha: ba, ca: Ta, da: Aa, ia: Ga, ta: xa, L: Wr, Ya: Fa, C: Lr, Wa, za: Na, Aa: za, x: Ua, y: ja, K: Ya, aa: Va, $: Xa, M: qa, ja: Ka, ma: Qa, E: Ja, Sa: Ts, J: Ps, c: ps, d: fs, f: ds, i: Ms, W: bs, b: Is, U: Rs, m: Ss, Ra: xs, Qa: Ws, Ea: $s, Da: Hs, r: Cs, Ua: Es, u: ys, ga: ws, V: As, k: ms, h: vs, T: Fs, S: Ls, j: hs, g: ks, t: Gs, Pa: Ns, N: zs, Ca: Us, R: Bs, Ba: js, Ta: Ds, xa: Nr, ka: Oa }, s = await vi();
    s.cb;
    var os = s.db;
    r._MagickColor_Create = s.eb, r._MagickColor_Dispose = s.fb, r._MagickColor_Count_Get = s.gb, r._MagickColor_Red_Get = s.hb, r._MagickColor_Red_Set = s.ib, r._MagickColor_Green_Get = s.jb, r._MagickColor_Green_Set = s.kb, r._MagickColor_Blue_Get = s.lb, r._MagickColor_Blue_Set = s.mb, r._MagickColor_Alpha_Get = s.nb, r._MagickColor_Alpha_Set = s.ob, r._MagickColor_Black_Get = s.pb, r._MagickColor_Black_Set = s.qb, r._MagickColor_IsCMYK_Get = s.rb, r._MagickColor_IsCMYK_Set = s.sb, r._MagickColor_Clone = s.tb, r._MagickColor_FuzzyEquals = s.ub, r._MagickColor_Initialize = s.vb, r._MagickColorCollection_DisposeList = s.xb, r._MagickColorCollection_GetInstance = s.yb, r._DrawingWand_Create = s.zb, r._DrawingWand_Dispose = s.Ab, r._DrawingWand_Affine = s.Bb, r._DrawingWand_Alpha = s.Cb, r._DrawingWand_Arc = s.Db, r._DrawingWand_Bezier = s.Eb, r._DrawingWand_BorderColor = s.Fb, r._DrawingWand_Circle = s.Gb, r._DrawingWand_ClipPath = s.Hb, r._DrawingWand_ClipRule = s.Ib, r._DrawingWand_ClipUnits = s.Jb, r._DrawingWand_Color = s.Kb, r._DrawingWand_Composite = s.Lb, r._DrawingWand_Density = s.Mb, r._DrawingWand_Ellipse = s.Nb, r._DrawingWand_FillColor = s.Ob, r._DrawingWand_FillOpacity = s.Pb, r._DrawingWand_FillPatternUrl = s.Qb, r._DrawingWand_FillRule = s.Rb, r._DrawingWand_Font = s.Sb, r._DrawingWand_FontFamily = s.Tb, r._DrawingWand_FontPointSize = s.Ub, r._DrawingWand_FontTypeMetrics = s.Vb, r._TypeMetric_Create = s.Wb, r._DrawingWand_Gravity = s.Xb, r._DrawingWand_Line = s.Yb, r._DrawingWand_PathArcAbs = s.Zb, r._DrawingWand_PathArcRel = s._b, r._DrawingWand_PathClose = s.$b, r._DrawingWand_PathCurveToAbs = s.ac, r._DrawingWand_PathCurveToRel = s.bc, r._DrawingWand_PathFinish = s.cc, r._DrawingWand_PathLineToAbs = s.dc, r._DrawingWand_PathLineToHorizontalAbs = s.ec, r._DrawingWand_PathLineToHorizontalRel = s.fc, r._DrawingWand_PathLineToRel = s.gc, r._DrawingWand_PathLineToVerticalAbs = s.hc, r._DrawingWand_PathLineToVerticalRel = s.ic, r._DrawingWand_PathMoveToAbs = s.jc, r._DrawingWand_PathMoveToRel = s.kc, r._DrawingWand_PathQuadraticCurveToAbs = s.lc, r._DrawingWand_PathQuadraticCurveToRel = s.mc, r._DrawingWand_PathSmoothCurveToAbs = s.nc, r._DrawingWand_PathSmoothCurveToRel = s.oc, r._DrawingWand_PathSmoothQuadraticCurveToAbs = s.pc, r._DrawingWand_PathSmoothQuadraticCurveToRel = s.qc, r._DrawingWand_PathStart = s.rc, r._DrawingWand_Point = s.sc, r._DrawingWand_Polygon = s.tc, r._DrawingWand_Polyline = s.uc, r._DrawingWand_PopClipPath = s.vc, r._DrawingWand_PopGraphicContext = s.wc, r._DrawingWand_PopPattern = s.xc, r._DrawingWand_PushClipPath = s.yc, r._DrawingWand_PushGraphicContext = s.zc, r._DrawingWand_PushPattern = s.Ac, r._DrawingWand_Rectangle = s.Bc, r._DrawingWand_Render = s.Cc, r._DrawingWand_Rotation = s.Dc, r._DrawingWand_RoundRectangle = s.Ec, r._DrawingWand_Scaling = s.Fc, r._DrawingWand_SkewX = s.Gc, r._DrawingWand_SkewY = s.Hc, r._DrawingWand_StrokeAntialias = s.Ic, r._DrawingWand_StrokeColor = s.Jc, r._DrawingWand_StrokeDashArray = s.Kc, r._DrawingWand_StrokeDashOffset = s.Lc, r._DrawingWand_StrokeLineCap = s.Mc, r._DrawingWand_StrokeLineJoin = s.Nc, r._DrawingWand_StrokeMiterLimit = s.Oc, r._DrawingWand_StrokeOpacity = s.Pc, r._DrawingWand_StrokePatternUrl = s.Qc, r._DrawingWand_StrokeWidth = s.Rc, r._DrawingWand_Text = s.Sc, r._DrawingWand_TextAlignment = s.Tc, r._DrawingWand_TextAntialias = s.Uc, r._DrawingWand_TextDecoration = s.Vc, r._DrawingWand_TextDirection = s.Wc, r._DrawingWand_TextEncoding = s.Xc, r._DrawingWand_TextInterlineSpacing = s.Yc, r._DrawingWand_TextInterwordSpacing = s.Zc, r._DrawingWand_TextKerning = s._c, r._DrawingWand_TextUnderColor = s.$c, r._DrawingWand_Translation = s.ad, r._DrawingWand_Viewbox = s.bd, r._MagickExceptionHelper_Description = s.cd, r._MagickExceptionHelper_Dispose = s.dd, r._MagickExceptionHelper_Related = s.ed, r._MagickExceptionHelper_RelatedCount = s.fd, r._MagickExceptionHelper_Message = s.gd, r._MagickExceptionHelper_Severity = s.hd, r._PdfInfo_PageCount = s.id, r._Environment_Initialize = s.jd, r._Environment_GetEnv = s.kd, r._Environment_SetEnv = s.ld, r._MagickMemory_Relinquish = s.md, r._Magick_Delegates_Get = s.nd, r._Magick_Features_Get = s.od, r._Magick_ImageMagickVersion_Get = s.pd, r._Magick_GetFonts = s.qd, r._Magick_GetFontFamily = s.rd, r._Magick_GetFontName = s.sd, r._Magick_DisposeFonts = s.td, r._Magick_ResetRandomSeed = s.ud, r._Magick_SetDefaultFontFile = s.vd, r._Magick_SetRandomSeed = s.wd, r._Magick_SetLogDelegate = s.xd, r._Magick_SetLogEvents = s.yd, r._MagickFormatInfo_CreateList = s.zd, r._MagickFormatInfo_DisposeList = s.Ad, r._MagickFormatInfo_CanReadMultithreaded_Get = s.Bd, r._MagickFormatInfo_CanWriteMultithreaded_Get = s.Cd, r._MagickFormatInfo_Description_Get = s.Dd, r._MagickFormatInfo_Format_Get = s.Ed, r._MagickFormatInfo_MimeType_Get = s.Fd, r._MagickFormatInfo_Module_Get = s.Gd, r._MagickFormatInfo_SupportsMultipleFrames_Get = s.Hd, r._MagickFormatInfo_SupportsReading_Get = s.Id, r._MagickFormatInfo_SupportsWriting_Get = s.Jd, r._MagickFormatInfo_GetInfo = s.Kd, r._MagickFormatInfo_GetInfoByName = s.Ld, r._MagickFormatInfo_GetInfoWithBlob = s.Md, r._MagickFormatInfo_Unregister = s.Nd, r._MagickImage_Create = s.Od, r._MagickImage_Dispose = s.Pd, r._MagickImage_AnimationDelay_Get = s.Qd, r._MagickImage_AnimationDelay_Set = s.Rd, r._MagickImage_AnimationIterations_Get = s.Sd, r._MagickImage_AnimationIterations_Set = s.Td, r._MagickImage_AnimationTicksPerSecond_Get = s.Ud, r._MagickImage_AnimationTicksPerSecond_Set = s.Vd, r._MagickImage_BackgroundColor_Get = s.Wd, r._MagickImage_BackgroundColor_Set = s.Xd, r._MagickImage_BaseHeight_Get = s.Yd, r._MagickImage_BaseWidth_Get = s.Zd, r._MagickImage_BlackPointCompensation_Get = s._d, r._MagickImage_BlackPointCompensation_Set = s.$d, r._MagickImage_BorderColor_Get = s.ae, r._MagickImage_BorderColor_Set = s.be, r._MagickImage_BoundingBox_Get = s.ce, r._MagickRectangle_Create = s.de, r._MagickImage_ChannelCount_Get = s.ee, r._MagickImage_ChromaBlue_Get = s.fe, r._PrimaryInfo_Create = s.ge, r._MagickImage_ChromaBlue_Set = s.he, r._MagickImage_ChromaGreen_Get = s.ie, r._MagickImage_ChromaGreen_Set = s.je, r._MagickImage_ChromaRed_Get = s.ke, r._MagickImage_ChromaRed_Set = s.le, r._MagickImage_ChromaWhite_Get = s.me, r._MagickImage_ChromaWhite_Set = s.ne, r._MagickImage_ClassType_Get = s.oe, r._MagickImage_ClassType_Set = s.pe, r._QuantizeSettings_Create = s.qe, r._QuantizeSettings_Dispose = s.re, r._MagickImage_ColorFuzz_Get = s.se, r._MagickImage_ColorFuzz_Set = s.te, r._MagickImage_ColormapSize_Get = s.ue, r._MagickImage_ColormapSize_Set = s.ve, r._MagickImage_ColorSpace_Get = s.we, r._MagickImage_ColorSpace_Set = s.xe, r._MagickImage_ColorType_Get = s.ye, r._MagickImage_ColorType_Set = s.ze, r._MagickImage_Compose_Get = s.Ae, r._MagickImage_Compose_Set = s.Be, r._MagickImage_Compression_Get = s.Ce, r._MagickImage_Compression_Set = s.De, r._MagickImage_Depth_Get = s.Ee, r._MagickImage_Depth_Set = s.Fe, r._MagickImage_EncodingGeometry_Get = s.Ge, r._MagickImage_Endian_Get = s.He, r._MagickImage_Endian_Set = s.Ie, r._MagickImage_FileName_Get = s.Je, r._MagickImage_FileName_Set = s.Ke, r._MagickImage_FilterType_Get = s.Le, r._MagickImage_FilterType_Set = s.Me, r._MagickImage_Format_Get = s.Ne, r._MagickImage_Format_Set = s.Oe, r._MagickImage_Gamma_Get = s.Pe, r._MagickImage_GifDisposeMethod_Get = s.Qe, r._MagickImage_GifDisposeMethod_Set = s.Re, r._MagickImage_HasAlpha_Get = s.Se, r._MagickImage_HasAlpha_Set = s.Te, r._MagickImage_Height_Get = s.Ue, r._MagickImage_Interlace_Get = s.Ve, r._MagickImage_Interlace_Set = s.We, r._MagickImage_Interpolate_Get = s.Xe, r._MagickImage_Interpolate_Set = s.Ye, r._MagickImage_IsOpaque_Get = s.Ze, r._MagickImage_MatteColor_Get = s._e, r._MagickImage_MatteColor_Set = s.$e, r._MagickImage_MeanErrorPerPixel_Get = s.af, r._MagickImage_MetaChannelCount_Get = s.bf, r._MagickImage_MetaChannelCount_Set = s.cf, r._MagickImage_NormalizedMaximumError_Get = s.df, r._MagickImage_NormalizedMeanError_Get = s.ef, r._MagickImage_Orientation_Get = s.ff, r._MagickImage_Orientation_Set = s.gf, r._MagickImage_Page_Get = s.hf, r._MagickImage_Page_Set = s.jf, r._MagickImage_Quality_Get = s.kf, r._MagickImage_Quality_Set = s.lf, r._MagickImage_RenderingIntent_Get = s.mf, r._MagickImage_RenderingIntent_Set = s.nf, r._MagickImage_ResolutionUnits_Get = s.of, r._MagickImage_ResolutionUnits_Set = s.pf, r._MagickImage_ResolutionX_Get = s.qf, r._MagickImage_ResolutionX_Set = s.rf, r._MagickImage_ResolutionY_Get = s.sf, r._MagickImage_ResolutionY_Set = s.tf, r._MagickImage_Signature_Get = s.uf, r._MagickImage_TotalColors_Get = s.vf, r._MagickImage_VirtualPixelMethod_Get = s.wf, r._MagickImage_VirtualPixelMethod_Set = s.xf, r._MagickImage_Width_Get = s.yf, r._MagickImage_AdaptiveBlur = s.zf, r._MagickImage_AdaptiveResize = s.Af, r._MagickImage_AdaptiveSharpen = s.Bf, r._MagickImage_AdaptiveThreshold = s.Cf, r._MagickImage_AddNoise = s.Df, r._MagickImage_AffineTransform = s.Ef, r._MagickImage_Annotate = s.Ff, r._MagickImage_AutoGamma = s.Gf, r._MagickImage_AutoLevel = s.Hf, r._MagickImage_AutoOrient = s.If, r._MagickImage_AutoThreshold = s.Jf, r._MagickImage_BilateralBlur = s.Kf, r._MagickImage_BlackThreshold = s.Lf, r._MagickImage_BlueShift = s.Mf, r._MagickImage_Blur = s.Nf, r._MagickImage_Border = s.Of, r._MagickImage_BrightnessContrast = s.Pf, r._MagickImage_CannyEdge = s.Qf, r._MagickImage_ChannelOffset = s.Rf, r._MagickImage_Charcoal = s.Sf, r._MagickImage_Chop = s.Tf, r._MagickImage_Clahe = s.Uf, r._MagickImage_Clamp = s.Vf, r._MagickImage_ClipPath = s.Wf, r._MagickImage_Clone = s.Xf, r._MagickImage_CloneArea = s.Yf, r._MagickImage_Clut = s.Zf, r._MagickImage_ColorDecisionList = s._f, r._MagickImage_Colorize = s.$f, r._MagickImage_ColorMatrix = s.ag, r._MagickImage_ColorThreshold = s.bg, r._MagickImage_Compare = s.cg, r._MagickImage_CompareDistortion = s.dg, r._MagickImage_Composite = s.eg, r._MagickImage_CompositeGravity = s.fg, r._MagickImage_ConnectedComponents = s.gg, r._MagickImage_Contrast = s.hg, r._MagickImage_ContrastStretch = s.ig, r._MagickImage_ConvexHull = s.jg, r._MagickImage_Convolve = s.kg, r._MagickImage_CopyPixels = s.lg, r._MagickImage_Crop = s.mg, r._MagickImage_CropToTiles = s.ng, r._MagickImage_CycleColormap = s.og, r._MagickImage_Decipher = s.pg, r._MagickImage_Deskew = s.qg, r._MagickImage_Despeckle = s.rg, r._MagickImage_DetermineBitDepth = s.sg, r._MagickImage_DetermineColorType = s.tg, r._MagickImage_Distort = s.ug, r._MagickImage_Edge = s.vg, r._MagickImage_Emboss = s.wg, r._MagickImage_Encipher = s.xg, r._MagickImage_Enhance = s.yg, r._MagickImage_Equalize = s.zg, r._MagickImage_Equals = s.Ag, r._MagickImage_EvaluateFunction = s.Bg, r._MagickImage_EvaluateGeometry = s.Cg, r._MagickImage_EvaluateOperator = s.Dg, r._MagickImage_Extent = s.Eg, r._MagickImage_Flip = s.Fg, r._MagickImage_FloodFill = s.Gg, r._MagickImage_Flop = s.Hg, r._MagickImage_FontTypeMetrics = s.Ig, r._MagickImage_FormatExpression = s.Jg, r._MagickImage_Frame = s.Kg, r._MagickImage_Fx = s.Lg, r._MagickImage_GammaCorrect = s.Mg, r._MagickImage_GaussianBlur = s.Ng, r._MagickImage_GetArtifact = s.Og, r._MagickImage_GetAttribute = s.Pg, r._MagickImage_GetColormapColor = s.Qg, r._MagickImage_GetNext = s.Rg, r._MagickImage_GetNextArtifactName = s.Sg, r._MagickImage_GetNextAttributeName = s.Tg, r._MagickImage_GetNextProfileName = s.Ug, r._MagickImage_GetProfile = s.Vg, r._MagickImage_GetReadMask = s.Wg, r._MagickImage_GetWriteMask = s.Xg, r._MagickImage_Grayscale = s.Yg, r._MagickImage_HaldClut = s.Zg, r._MagickImage_HasChannel = s._g, r._MagickImage_HasProfile = s.$g, r._MagickImage_Histogram = s.ah, r._MagickImage_HoughLine = s.bh, r._MagickImage_Implode = s.ch, r._MagickImage_ImportPixels = s.dh, r._MagickImage_Integral = s.eh, r._MagickImage_InterpolativeResize = s.fh, r._MagickImage_InverseLevel = s.gh, r._MagickImage_Kmeans = s.hh, r._MagickImage_Kuwahara = s.ih, r._MagickImage_Level = s.jh, r._MagickImage_LevelColors = s.kh, r._MagickImage_LinearStretch = s.lh, r._MagickImage_LiquidRescale = s.mh, r._MagickImage_LocalContrast = s.nh, r._MagickImage_Magnify = s.oh, r._MagickImage_MeanShift = s.ph, r._MagickImage_Minify = s.qh, r._MagickImage_MinimumBoundingBox = s.rh, r._MagickImage_Modulate = s.sh, r._MagickImage_Moments = s.th, r._MagickImage_Morphology = s.uh, r._MagickImage_MotionBlur = s.vh, r._MagickImage_Negate = s.wh, r._MagickImage_Normalize = s.xh, r._MagickImage_OilPaint = s.yh, r._MagickImage_Opaque = s.zh, r._MagickImage_OrderedDither = s.Ah, r._MagickImage_Perceptible = s.Bh, r._MagickImage_PerceptualHash = s.Ch, r._MagickImage_Quantize = s.Dh, r._MagickImage_Polaroid = s.Eh, r._MagickImage_Posterize = s.Fh, r._MagickImage_RaiseOrLower = s.Gh, r._MagickImage_RandomThreshold = s.Hh, r._MagickImage_RangeThreshold = s.Ih, r._MagickImage_ReadBlob = s.Jh, r._MagickImage_ReadFile = s.Kh, r._MagickImage_ReadPixels = s.Lh, r._MagickImage_ReadStream = s.Mh, r._MagickImage_RegionMask = s.Nh, r._MagickImage_Remap = s.Oh, r._MagickImage_RemoveArtifact = s.Ph, r._MagickImage_RemoveAttribute = s.Qh, r._MagickImage_RemoveProfile = s.Rh, r._MagickImage_ResetArtifactIterator = s.Sh, r._MagickImage_ResetAttributeIterator = s.Th, r._MagickImage_ResetProfileIterator = s.Uh, r._MagickImage_Resample = s.Vh, r._MagickImage_Resize = s.Wh, r._MagickImage_Roll = s.Xh, r._MagickImage_Rotate = s.Yh, r._MagickImage_RotationalBlur = s.Zh, r._MagickImage_Sample = s._h, r._MagickImage_Scale = s.$h, r._MagickImage_Segment = s.ai, r._MagickImage_SelectiveBlur = s.bi, r._MagickImage_Separate = s.ci, r._MagickImage_SepiaTone = s.di, r._MagickImage_SetAlpha = s.ei, r._MagickImage_SetArtifact = s.fi, r._MagickImage_SetAttribute = s.gi, r._MagickImage_SetBitDepth = s.hi, r._MagickImage_SetClientData = s.ii, r._MagickImage_SetColormapColor = s.ji, r._MagickImage_SetColorMetric = s.ki, r._MagickImage_SetNext = s.li, r._MagickImage_SetProfile = s.mi, r._MagickImage_SetProgressDelegate = s.ni, r._MagickImage_SetReadMask = s.oi, r._MagickImage_SetWriteMask = s.pi, r._MagickImage_Shade = s.qi, r._MagickImage_Shadow = s.ri, r._MagickImage_Sharpen = s.si, r._MagickImage_Shave = s.ti, r._MagickImage_Shear = s.ui, r._MagickImage_SigmoidalContrast = s.vi, r._MagickImage_SparseColor = s.wi, r._MagickImage_Spread = s.xi, r._MagickImage_Sketch = s.yi, r._MagickImage_Solarize = s.zi, r._MagickImage_SortPixels = s.Ai, r._MagickImage_Splice = s.Bi, r._MagickImage_Statistic = s.Ci, r._MagickImage_Statistics = s.Di, r._MagickImage_Stegano = s.Ei, r._MagickImage_Stereo = s.Fi, r._MagickImage_Strip = s.Gi, r._MagickImage_SubImageSearch = s.Hi, r._MagickImage_Swirl = s.Ii, r._MagickImage_Texture = s.Ji, r._MagickImage_Threshold = s.Ki, r._MagickImage_Thumbnail = s.Li, r._MagickImage_Tint = s.Mi, r._MagickImage_Transparent = s.Ni, r._MagickImage_TransparentChroma = s.Oi, r._MagickImage_Transpose = s.Pi, r._MagickImage_Transverse = s.Qi, r._MagickImage_Trim = s.Ri, r._MagickImage_UniqueColors = s.Si, r._MagickImage_UnsharpMask = s.Ti, r._MagickImage_Vignette = s.Ui, r._MagickImage_Wave = s.Vi, r._MagickImage_WaveletDenoise = s.Wi, r._MagickImage_WhiteBalance = s.Xi, r._MagickImage_WhiteThreshold = s.Yi, r._MagickImage_WriteBlob = s.Zi, r._MagickImage_WriteFile = s._i, r._MagickImage_WriteStream = s.$i, r._MagickImageCollection_Append = s.aj, r._MagickImageCollection_Coalesce = s.bj, r._MagickImageCollection_Combine = s.cj, r._MagickImageCollection_Complex = s.dj, r._MagickImageCollection_Deconstruct = s.ej, r._MagickImageCollection_Dispose = s.fj, r._MagickImageCollection_Evaluate = s.gj, r._MagickImageCollection_Fx = s.hj, r._MagickImageCollection_Merge = s.ij, r._MagickImageCollection_Montage = s.jj, r._MagickImageCollection_Morph = s.kj, r._MagickImageCollection_Optimize = s.lj, r._MagickImageCollection_OptimizePlus = s.mj, r._MagickImageCollection_OptimizeTransparency = s.nj, r._MagickImageCollection_Polynomial = s.oj, r._MagickImageCollection_Quantize = s.pj, r._MagickImageCollection_ReadBlob = s.qj, r._MagickImageCollection_ReadFile = s.rj, r._MagickImageCollection_ReadStream = s.sj, r._MagickImageCollection_Remap = s.tj, r._MagickImageCollection_Smush = s.uj, r._MagickImageCollection_WriteFile = s.vj, r._MagickImageCollection_WriteStream = s.wj, r._DoubleMatrix_Create = s.xj, r._DoubleMatrix_Dispose = s.yj, r._OpenCL_GetDevices = s.zj, r._OpenCL_GetDevice = s.Aj, r._OpenCL_GetEnabled = s.Bj, r._OpenCL_SetEnabled = s.Cj, r._OpenCLDevice_DeviceType_Get = s.Dj, r._OpenCLDevice_BenchmarkScore_Get = s.Ej, r._OpenCLDevice_IsEnabled_Get = s.Fj, r._OpenCLDevice_IsEnabled_Set = s.Gj, r._OpenCLDevice_Name_Get = s.Hj, r._OpenCLDevice_Version_Get = s.Ij, r._OpenCLDevice_GetKernelProfileRecords = s.Jj, r._OpenCLDevice_GetKernelProfileRecord = s.Kj, r._OpenCLDevice_SetProfileKernels = s.Lj, r._OpenCLKernelProfileRecord_Count_Get = s.Mj, r._OpenCLKernelProfileRecord_Name_Get = s.Nj, r._OpenCLKernelProfileRecord_MaximumDuration_Get = s.Oj, r._OpenCLKernelProfileRecord_MinimumDuration_Get = s.Pj, r._OpenCLKernelProfileRecord_TotalDuration_Get = s.Qj, r._JpegOptimizer_CompressFile = s.Rj, r._JpegOptimizer_CompressStream = s.Sj;
    var Yr = r._malloc = s.Tj, $e = r._free = s.Uj;
    r._PixelCollection_Create = s.Vj, r._PixelCollection_Dispose = s.Wj, r._PixelCollection_GetArea = s.Xj, r._PixelCollection_GetReadOnlyArea = s.Yj, r._PixelCollection_SetArea = s.Zj, r._PixelCollection_ToByteArray = s._j, r._PixelCollection_ToShortArray = s.$j, r._Quantum_Depth_Get = s.ak, r._Quantum_Max_Get = s.bk, r._ResourceLimits_Area_Get = s.ck, r._ResourceLimits_Area_Set = s.dk, r._ResourceLimits_Disk_Get = s.ek, r._ResourceLimits_Disk_Set = s.fk, r._ResourceLimits_Height_Get = s.gk, r._ResourceLimits_Height_Set = s.hk, r._ResourceLimits_ListLength_Get = s.ik, r._ResourceLimits_ListLength_Set = s.jk, r._ResourceLimits_MaxMemoryRequest_Get = s.kk, r._ResourceLimits_MaxMemoryRequest_Set = s.lk, r._ResourceLimits_MaxProfileSize_Get = s.mk, r._ResourceLimits_MaxProfileSize_Set = s.nk, r._ResourceLimits_Memory_Get = s.ok, r._ResourceLimits_Memory_Set = s.pk, r._ResourceLimits_Thread_Get = s.qk, r._ResourceLimits_Thread_Set = s.rk, r._ResourceLimits_Throttle_Get = s.sk, r._ResourceLimits_Throttle_Set = s.tk, r._ResourceLimits_Time_Get = s.uk, r._ResourceLimits_Time_Set = s.vk, r._ResourceLimits_Width_Get = s.wk, r._ResourceLimits_Width_Set = s.xk, r._ResourceLimits_LimitMemory = s.yk, r._DrawingSettings_Create = s.zk, r._DrawingSettings_Dispose = s.Ak, r._DrawingSettings_BorderColor_Get = s.Bk, r._DrawingSettings_BorderColor_Set = s.Ck, r._DrawingSettings_FillColor_Get = s.Dk, r._DrawingSettings_FillColor_Set = s.Ek, r._DrawingSettings_FillRule_Get = s.Fk, r._DrawingSettings_FillRule_Set = s.Gk, r._DrawingSettings_Font_Get = s.Hk, r._DrawingSettings_Font_Set = s.Ik, r._DrawingSettings_FontFamily_Get = s.Jk, r._DrawingSettings_FontFamily_Set = s.Kk, r._DrawingSettings_FontPointsize_Get = s.Lk, r._DrawingSettings_FontPointsize_Set = s.Mk, r._DrawingSettings_FontStyle_Get = s.Nk, r._DrawingSettings_FontStyle_Set = s.Ok, r._DrawingSettings_FontWeight_Get = s.Pk, r._DrawingSettings_FontWeight_Set = s.Qk, r._DrawingSettings_StrokeAntiAlias_Get = s.Rk, r._DrawingSettings_StrokeAntiAlias_Set = s.Sk, r._DrawingSettings_StrokeColor_Get = s.Tk, r._DrawingSettings_StrokeColor_Set = s.Uk, r._DrawingSettings_StrokeDashOffset_Get = s.Vk, r._DrawingSettings_StrokeDashOffset_Set = s.Wk, r._DrawingSettings_StrokeLineCap_Get = s.Xk, r._DrawingSettings_StrokeLineCap_Set = s.Yk, r._DrawingSettings_StrokeLineJoin_Get = s.Zk, r._DrawingSettings_StrokeLineJoin_Set = s._k, r._DrawingSettings_StrokeMiterLimit_Get = s.$k, r._DrawingSettings_StrokeMiterLimit_Set = s.al, r._DrawingSettings_StrokeWidth_Get = s.bl, r._DrawingSettings_StrokeWidth_Set = s.cl, r._DrawingSettings_TextAntiAlias_Get = s.dl, r._DrawingSettings_TextAntiAlias_Set = s.el, r._DrawingSettings_TextDirection_Get = s.fl, r._DrawingSettings_TextDirection_Set = s.gl, r._DrawingSettings_TextEncoding_Get = s.hl, r._DrawingSettings_TextEncoding_Set = s.il, r._DrawingSettings_TextGravity_Get = s.jl, r._DrawingSettings_TextGravity_Set = s.kl, r._DrawingSettings_TextInterlineSpacing_Get = s.ll, r._DrawingSettings_TextInterlineSpacing_Set = s.ml, r._DrawingSettings_TextInterwordSpacing_Get = s.nl, r._DrawingSettings_TextInterwordSpacing_Set = s.ol, r._DrawingSettings_TextKerning_Get = s.pl, r._DrawingSettings_TextKerning_Set = s.ql, r._DrawingSettings_TextUnderColor_Get = s.rl, r._DrawingSettings_TextUnderColor_Set = s.sl, r._DrawingSettings_SetAffine = s.tl, r._DrawingSettings_SetFillPattern = s.ul, r._DrawingSettings_SetStrokeDashArray = s.vl, r._DrawingSettings_SetStrokePattern = s.wl, r._DrawingSettings_SetText = s.xl, r._MagickSettings_Create = s.yl, r._MagickSettings_Dispose = s.zl, r._MagickSettings_AntiAlias_Get = s.Al, r._MagickSettings_AntiAlias_Set = s.Bl, r._MagickSettings_BackgroundColor_Get = s.Cl, r._MagickSettings_BackgroundColor_Set = s.Dl, r._MagickSettings_ColorSpace_Get = s.El, r._MagickSettings_ColorSpace_Set = s.Fl, r._MagickSettings_ColorType_Get = s.Gl, r._MagickSettings_ColorType_Set = s.Hl, r._MagickSettings_Compression_Get = s.Il, r._MagickSettings_Compression_Set = s.Jl, r._MagickSettings_Debug_Get = s.Kl, r._MagickSettings_Debug_Set = s.Ll, r._MagickSettings_Density_Get = s.Ml, r._MagickSettings_Density_Set = s.Nl, r._MagickSettings_Depth_Get = s.Ol, r._MagickSettings_Depth_Set = s.Pl, r._MagickSettings_Endian_Get = s.Ql, r._MagickSettings_Endian_Set = s.Rl, r._MagickSettings_Extract_Get = s.Sl, r._MagickSettings_Extract_Set = s.Tl, r._MagickSettings_Format_Get = s.Ul, r._MagickSettings_Format_Set = s.Vl, r._MagickSettings_FontPointsize_Get = s.Wl, r._MagickSettings_FontPointsize_Set = s.Xl, r._MagickSettings_Interlace_Get = s.Yl, r._MagickSettings_Interlace_Set = s.Zl, r._MagickSettings_Monochrome_Get = s._l, r._MagickSettings_Monochrome_Set = s.$l, r._MagickSettings_Verbose_Get = s.am, r._MagickSettings_Verbose_Set = s.bm, r._MagickSettings_SetColorFuzz = s.cm, r._MagickSettings_SetFileName = s.dm, r._MagickSettings_SetFont = s.em, r._MagickSettings_SetNumberScenes = s.fm, r._MagickSettings_SetOption = s.gm, r._MagickSettings_SetPage = s.hm, r._MagickSettings_SetPing = s.im, r._MagickSettings_SetQuality = s.jm, r._MagickSettings_SetScenes = s.km, r._MagickSettings_SetScene = s.lm, r._MagickSettings_SetSize = s.mm, r._MontageSettings_Create = s.nm, r._MontageSettings_Dispose = s.om, r._MontageSettings_SetBackgroundColor = s.pm, r._MontageSettings_SetBorderColor = s.qm, r._MontageSettings_SetBorderWidth = s.rm, r._MontageSettings_SetFillColor = s.sm, r._MontageSettings_SetFont = s.tm, r._MontageSettings_SetFontPointsize = s.um, r._MontageSettings_SetFrameGeometry = s.vm, r._MontageSettings_SetGeometry = s.wm, r._MontageSettings_SetGravity = s.xm, r._MontageSettings_SetShadow = s.ym, r._MontageSettings_SetStrokeColor = s.zm, r._MontageSettings_SetTextureFileName = s.Am, r._MontageSettings_SetTileGeometry = s.Bm, r._MontageSettings_SetTitle = s.Cm, r._QuantizeSettings_SetColors = s.Dm, r._QuantizeSettings_SetColorSpace = s.Em, r._QuantizeSettings_SetDitherMethod = s.Fm, r._QuantizeSettings_SetMeasureErrors = s.Gm, r._QuantizeSettings_SetTreeDepth = s.Hm, r._ChannelMoments_Centroid_Get = s.Im, r._ChannelMoments_EllipseAngle_Get = s.Jm, r._ChannelMoments_EllipseAxis_Get = s.Km, r._ChannelMoments_EllipseEccentricity_Get = s.Lm, r._ChannelMoments_EllipseIntensity_Get = s.Mm, r._ChannelMoments_GetHuInvariants = s.Nm, r._ChannelPerceptualHash_GetHuPhash = s.Om, r._ChannelStatistics_Depth_Get = s.Pm, r._ChannelStatistics_Entropy_Get = s.Qm, r._ChannelStatistics_Kurtosis_Get = s.Rm, r._ChannelStatistics_Maximum_Get = s.Sm, r._ChannelStatistics_Mean_Get = s.Tm, r._ChannelStatistics_Minimum_Get = s.Um, r._ChannelStatistics_Skewness_Get = s.Vm, r._ChannelStatistics_StandardDeviation_Get = s.Wm, r._Moments_DisposeList = s.Xm, r._Moments_GetInstance = s.Ym, r._PerceptualHash_DisposeList = s.Zm, r._PerceptualHash_GetInstance = s._m, r._Statistics_DisposeList = s.$m, r._Statistics_GetInstance = s.an, r._ConnectedComponent_DisposeList = s.bn, r._ConnectedComponent_GetArea = s.cn, r._ConnectedComponent_GetCentroid = s.dn, r._ConnectedComponent_GetColor = s.en, r._ConnectedComponent_GetHeight = s.fn, r._ConnectedComponent_GetId = s.gn, r._ConnectedComponent_GetWidth = s.hn, r._ConnectedComponent_GetX = s.jn, r._ConnectedComponent_GetY = s.kn, r._ConnectedComponent_GetInstance = s.ln, r._MagickGeometry_Create = s.mn, r._MagickGeometry_Dispose = s.nn, r._MagickGeometry_X_Get = s.on, r._MagickGeometry_Y_Get = s.pn, r._MagickGeometry_Width_Get = s.qn, r._MagickGeometry_Height_Get = s.rn, r._MagickGeometry_Initialize = s.sn, r._MagickRectangle_Dispose = s.tn, r._MagickRectangle_X_Get = s.un, r._MagickRectangle_X_Set = s.vn, r._MagickRectangle_Y_Get = s.wn, r._MagickRectangle_Y_Set = s.xn, r._MagickRectangle_Width_Get = s.yn, r._MagickRectangle_Width_Set = s.zn, r._MagickRectangle_Height_Get = s.An, r._MagickRectangle_Height_Set = s.Bn, r._MagickRectangle_FromPageSize = s.Cn, r._OffsetInfo_Create = s.Dn, r._OffsetInfo_Dispose = s.En, r._OffsetInfo_SetX = s.Fn, r._OffsetInfo_SetY = s.Gn, r._PointInfo_X_Get = s.Hn, r._PointInfo_Y_Get = s.In, r._PointInfoCollection_Create = s.Jn, r._PointInfoCollection_Dispose = s.Kn, r._PointInfoCollection_GetX = s.Ln, r._PointInfoCollection_GetY = s.Mn, r._PointInfoCollection_Set = s.Nn, r._PrimaryInfo_Dispose = s.On, r._PrimaryInfo_X_Get = s.Pn, r._PrimaryInfo_X_Set = s.Qn, r._PrimaryInfo_Y_Get = s.Rn, r._PrimaryInfo_Y_Set = s.Sn, r._PrimaryInfo_Z_Get = s.Tn, r._PrimaryInfo_Z_Set = s.Un, r._StringInfo_Length_Get = s.Vn, r._StringInfo_Datum_Get = s.Wn, r._TypeMetric_Dispose = s.Xn, r._TypeMetric_Ascent_Get = s.Yn, r._TypeMetric_Descent_Get = s.Zn, r._TypeMetric_MaxHorizontalAdvance_Get = s._n, r._TypeMetric_TextHeight_Get = s.$n, r._TypeMetric_TextWidth_Get = s.ao, r._TypeMetric_UnderlinePosition_Get = s.bo, r._TypeMetric_UnderlineThickness_Get = s.co;
    var cs = s.eo, $ = s.fo, _s = s.go, ls = s.ho, us = s.io, gs = s.jo;
    function hs(t, i, a, o) {
      var c = z();
      try {
        W(t)(i, a, o);
      } catch (g) {
        if (N(c), g !== g + 0) throw g;
        $(1, 0);
      }
    }
    function ds(t, i, a, o) {
      var c = z();
      try {
        return W(t)(i, a, o);
      } catch (g) {
        if (N(c), g !== g + 0) throw g;
        $(1, 0);
      }
    }
    function fs(t, i, a) {
      var o = z();
      try {
        return W(t)(i, a);
      } catch (c) {
        if (N(o), c !== c + 0) throw c;
        $(1, 0);
      }
    }
    function ps(t, i) {
      var a = z();
      try {
        return W(t)(i);
      } catch (o) {
        if (N(a), o !== o + 0) throw o;
        $(1, 0);
      }
    }
    function ms(t, i) {
      var a = z();
      try {
        W(t)(i);
      } catch (o) {
        if (N(a), o !== o + 0) throw o;
        $(1, 0);
      }
    }
    function vs(t, i, a) {
      var o = z();
      try {
        W(t)(i, a);
      } catch (c) {
        if (N(o), c !== c + 0) throw c;
        $(1, 0);
      }
    }
    function ks(t, i, a, o, c) {
      var g = z();
      try {
        W(t)(i, a, o, c);
      } catch (h) {
        if (N(g), h !== h + 0) throw h;
        $(1, 0);
      }
    }
    function Ms(t, i, a, o, c) {
      var g = z();
      try {
        return W(t)(i, a, o, c);
      } catch (h) {
        if (N(g), h !== h + 0) throw h;
        $(1, 0);
      }
    }
    function ws(t, i, a, o) {
      var c = z();
      try {
        return W(t)(i, a, o);
      } catch (g) {
        if (N(c), g !== g + 0) throw g;
        return $(1, 0), 0n;
      }
    }
    function ys(t, i) {
      var a = z();
      try {
        return W(t)(i);
      } catch (o) {
        if (N(a), o !== o + 0) throw o;
        return $(1, 0), 0n;
      }
    }
    function Ss(t, i, a, o, c, g, h, f, m) {
      var w = z();
      try {
        return W(t)(i, a, o, c, g, h, f, m);
      } catch (y) {
        if (N(w), y !== y + 0) throw y;
        $(1, 0);
      }
    }
    function Is(t, i, a, o, c, g, h) {
      var f = z();
      try {
        return W(t)(i, a, o, c, g, h);
      } catch (m) {
        if (N(f), m !== m + 0) throw m;
        $(1, 0);
      }
    }
    function Cs(t, i, a, o, c) {
      var g = z();
      try {
        return W(t)(i, a, o, c);
      } catch (h) {
        if (N(g), h !== h + 0) throw h;
        $(1, 0);
      }
    }
    function Ps(t) {
      var i = z();
      try {
        return W(t)();
      } catch (a) {
        if (N(i), a !== a + 0) throw a;
        $(1, 0);
      }
    }
    function Es(t, i, a) {
      var o = z();
      try {
        return W(t)(i, a);
      } catch (c) {
        if (N(o), c !== c + 0) throw c;
        $(1, 0);
      }
    }
    function Ds(t, i, a) {
      var o = z();
      try {
        W(t)(i, a);
      } catch (c) {
        if (N(o), c !== c + 0) throw c;
        $(1, 0);
      }
    }
    function bs(t, i, a, o, c, g) {
      var h = z();
      try {
        return W(t)(i, a, o, c, g);
      } catch (f) {
        if (N(h), f !== f + 0) throw f;
        $(1, 0);
      }
    }
    function Ts(t, i, a) {
      var o = z();
      try {
        return W(t)(i, a);
      } catch (c) {
        if (N(o), c !== c + 0) throw c;
        $(1, 0);
      }
    }
    function As(t) {
      var i = z();
      try {
        W(t)();
      } catch (a) {
        if (N(i), a !== a + 0) throw a;
        $(1, 0);
      }
    }
    function Gs(t, i, a, o, c, g) {
      var h = z();
      try {
        W(t)(i, a, o, c, g);
      } catch (f) {
        if (N(h), f !== f + 0) throw f;
        $(1, 0);
      }
    }
    function Rs(t, i, a, o, c, g, h, f) {
      var m = z();
      try {
        return W(t)(i, a, o, c, g, h, f);
      } catch (w) {
        if (N(m), w !== w + 0) throw w;
        $(1, 0);
      }
    }
    function xs(t, i, a, o, c, g, h, f, m, w) {
      var y = z();
      try {
        return W(t)(i, a, o, c, g, h, f, m, w);
      } catch (I) {
        if (N(y), I !== I + 0) throw I;
        $(1, 0);
      }
    }
    function Fs(t, i, a, o) {
      var c = z();
      try {
        W(t)(i, a, o);
      } catch (g) {
        if (N(c), g !== g + 0) throw g;
        $(1, 0);
      }
    }
    function Ls(t, i, a, o, c, g, h, f, m, w, y) {
      var I = z();
      try {
        W(t)(i, a, o, c, g, h, f, m, w, y);
      } catch (P) {
        if (N(I), P !== P + 0) throw P;
        $(1, 0);
      }
    }
    function Ws(t, i, a, o, c, g, h, f, m, w, y) {
      var I = z();
      try {
        return W(t)(i, a, o, c, g, h, f, m, w, y);
      } catch (P) {
        if (N(I), P !== P + 0) throw P;
        $(1, 0);
      }
    }
    function Bs(t, i, a, o, c, g, h, f, m, w) {
      var y = z();
      try {
        W(t)(i, a, o, c, g, h, f, m, w);
      } catch (I) {
        if (N(y), I !== I + 0) throw I;
        $(1, 0);
      }
    }
    function Ns(t, i, a, o, c, g, h) {
      var f = z();
      try {
        W(t)(i, a, o, c, g, h);
      } catch (m) {
        if (N(f), m !== m + 0) throw m;
        $(1, 0);
      }
    }
    function zs(t, i, a, o, c, g, h, f) {
      var m = z();
      try {
        W(t)(i, a, o, c, g, h, f);
      } catch (w) {
        if (N(m), w !== w + 0) throw w;
        $(1, 0);
      }
    }
    function $s(t, i, a, o, c, g, h, f, m, w, y, I) {
      var P = z();
      try {
        return W(t)(i, a, o, c, g, h, f, m, w, y, I);
      } catch (C) {
        if (N(P), C !== C + 0) throw C;
        $(1, 0);
      }
    }
    function Hs(t, i, a, o, c, g) {
      var h = z();
      try {
        return W(t)(i, a, o, c, g);
      } catch (f) {
        if (N(h), f !== f + 0) throw f;
        $(1, 0);
      }
    }
    function Us(t, i, a, o, c, g, h, f, m) {
      var w = z();
      try {
        W(t)(i, a, o, c, g, h, f, m);
      } catch (y) {
        if (N(w), y !== y + 0) throw y;
        $(1, 0);
      }
    }
    function js(t, i, a, o, c, g, h, f, m, w, y, I) {
      var P = z();
      try {
        W(t)(i, a, o, c, g, h, f, m, w, y, I);
      } catch (C) {
        if (N(P), C !== C + 0) throw C;
        $(1, 0);
      }
    }
    function Ys(t) {
      t = Object.assign({}, t);
      var i = (c) => (g) => c(g) >>> 0, a = (c) => (g, h) => c(g, h) >>> 0, o = (c) => () => c() >>> 0;
      return t.db = i(t.db), t.Tj = i(t.Tj), t.eo = a(t.eo), t._emscripten_stack_alloc = i(t._emscripten_stack_alloc), t.io = o(t.io), t;
    }
    function Jt() {
      if (Le > 0) {
        nt = Jt;
        return;
      }
      if (_i(), Le > 0) {
        nt = Jt;
        return;
      }
      function t() {
        r.calledRun = !0, !Tt && (li(), l(r), r.onRuntimeInitialized?.(), ui());
      }
      r.setStatus ? (r.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => r.setStatus(""), 1), t();
      }, 1)) : t();
    }
    function Vs() {
      if (r.preInit)
        for (typeof r.preInit == "function" && (r.preInit = [r.preInit]); r.preInit.length > 0; )
          r.preInit.shift()();
    }
    return Vs(), Jt(), n = p, n;
  };
})();
class po {
  constructor(e) {
    if (e instanceof URL) {
      if (e.protocol !== "http:" && e.protocol !== "https:")
        throw new U("Only http/https protocol is supported");
      this.locateFile = () => e.href;
    } else e instanceof WebAssembly.Module ? this.instantiateWasm = (n, r) => {
      const l = new WebAssembly.Instance(e, n);
      r(l);
    } : this.wasmBinary = e;
  }
  wasmBinary;
  instantiateWasm;
  locateFile;
}
class _ {
  loader;
  api;
  /** @internal */
  constructor() {
    this.loader = (e, n) => new Promise((r, l) => {
      if (this.api !== void 0) {
        r();
        return;
      }
      const d = new po(e);
      fo(d).then((p) => {
        try {
          this.writeConfigurationFiles(p, n), tr(p, "MAGICK_CONFIGURE_PATH", (v) => {
            tr(p, "/xml", (S) => {
              p._Environment_SetEnv(v, S), this.api = p, r();
            });
          });
        } catch (v) {
          l(v);
        }
      });
    });
  }
  /** @internal */
  async _initialize(e, n) {
    await this.loader(e, n);
  }
  /** @internal */
  static get _api() {
    if (!Pt.api)
      throw new U("`await initializeImageMagick` should be called to initialize the library");
    return Pt.api;
  }
  /** @internal */
  static set _api(e) {
    Pt.api = e;
  }
  static read(e, n, r, l) {
    return re._create((d) => {
      let p = l;
      if (typeof e != "string" && !ti(e))
        typeof n == "number" && typeof r == "number" && d.read(e, n, r);
      else if (typeof n != "number" && typeof r != "number") {
        p = r;
        let v;
        n instanceof De ? v = n : typeof n == "string" ? (v = new De(), v.format = n) : p = n, d.read(e, v);
      }
      return p(d);
    });
  }
  static readCollection(e, n, r) {
    return Ee.create()._use((d) => {
      let p = r, v;
      return n instanceof De ? v = n : typeof n == "string" ? (v = new De(), v.format = n) : p = n, d.read(e, v), p(d);
    });
  }
  static readFromCanvas(e, n, r) {
    return re._create((l) => (l.readFromCanvas(e, r), n(l)));
  }
  writeConfigurationFiles(e, n) {
    e.FS.analyzePath("/xml").exists || e.FS.mkdir("/xml");
    for (const l of n.all()) {
      const d = e.FS.open(`/xml/${l.fileName}`, "w"), p = new TextEncoder().encode(l.data);
      e.FS.write(d, p, 0, p.length), e.FS.close(d);
    }
  }
}
const Pt = new _();
async function Uo(M, e) {
  await Pt._initialize(M, e ?? ir.default);
}
class mo {
  /** @internal */
  constructor(e, n, r) {
    this.origin = e, this.progress = new te((n + 1) / (r * 100));
  }
  /**
   * Gets the originator of this event.
   */
  origin;
  /**
   * Gets the progress percentage.
   */
  progress;
  /**
   * Gets or sets a value indicating whether the current operation will be canceled.
   */
  cancel = !1;
}
class ae {
  static _logDelegate = 0;
  static _onLog;
  static _progressDelegate = 0;
  static _images = {};
  static setLogDelegate(e) {
    ae._logDelegate === 0 && e !== void 0 && (ae._logDelegate = _._api.addFunction(ae.logDelegate, "vii")), _._api._Magick_SetLogDelegate(e === void 0 ? 0 : ae._logDelegate), ae._onLog = e;
  }
  static setProgressDelegate(e) {
    ae._progressDelegate === 0 && (this._progressDelegate = _._api.addFunction(ae.progressDelegate, "iijji")), this._images[e._instance] = e, _._api._MagickImage_SetClientData(e._instance, e._instance), _._api._MagickImage_SetProgressDelegate(e._instance, ae._progressDelegate);
  }
  static removeProgressDelegate(e) {
    _._api._MagickImage_SetClientData(e._instance, 0), _._api._MagickImage_SetProgressDelegate(e._instance, 0), delete ae._images[e._instance];
  }
  static logDelegate(e, n) {
    if (ae._onLog === void 0)
      return;
    const r = ge(n, "");
    ae._onLog(new Js(e, r));
  }
  static progressDelegate(e, n, r, l) {
    const d = ae._images[l];
    if (d === void 0 || d.onProgress === void 0)
      return 1;
    const p = Number(n), v = Number(r), S = ge(e), R = new mo(S, p, v);
    return d.onProgress(R), R.cancel ? 0 : 1;
  }
}
class Re {
  static _allFormats;
  constructor(e, n, r, l, d) {
    this.format = e, this.description = n, this.supportsMultipleFrames = r, this.supportsReading = l, this.supportsWriting = d;
  }
  description;
  format;
  supportsMultipleFrames;
  supportsReading;
  supportsWriting;
  static get all() {
    return Re._allFormats === void 0 && (Re._allFormats = Re.loadFormats()), Re._allFormats;
  }
  static loadFormats() {
    return T.usePointer((e) => Te.use((n) => {
      const r = _._api._MagickFormatInfo_CreateList(n.ptr, e), l = n.value;
      try {
        const d = new Array(l), p = Object.values(xe);
        for (let v = 0; v < l; v++) {
          const S = _._api._MagickFormatInfo_GetInfo(r, v, e), R = ge(_._api._MagickFormatInfo_Format_Get(S)), B = Re.convertFormat(R, p), Y = ge(_._api._MagickFormatInfo_Description_Get(S), ""), ke = _._api._MagickFormatInfo_SupportsMultipleFrames_Get(S) == 1, Fe = _._api._MagickFormatInfo_SupportsReading_Get(S) == 1, Ae = _._api._MagickFormatInfo_SupportsWriting_Get(S) == 1;
          d[v] = new Re(B, Y, ke, Fe, Ae);
        }
        return d;
      } finally {
        _._api._MagickFormatInfo_DisposeList(r, l);
      }
    }));
  }
  static convertFormat(e, n) {
    return e === null ? xe.Unknown : n.includes(e) ? e : xe.Unknown;
  }
}
const Q = {
  /**
   * None.
   */
  None: 0,
  /**
   * Accelerate.
   */
  Accelerate: 1,
  /**
   * Annotate.
   */
  Annotate: 2,
  /**
   * Blob.
   */
  Blob: 4,
  /**
   * Cache.
   */
  Cache: 8,
  /**
   * Coder.
   */
  Coder: 16,
  /**
   * Configure.
   */
  Configure: 32,
  /**
   * Deprecate.
   */
  Deprecate: 64,
  /**
   * Draw.
   */
  Draw: 128,
  /**
   * Exception.
   */
  Exception: 256,
  /**
   * Image.
   */
  Image: 512,
  /**
   * Locale.
   */
  Locale: 1024,
  /**
   * Module.
   */
  Module: 2048,
  /**
   * Pixel.
   */
  Pixel: 4096,
  /**
   * Policy.
   */
  Policy: 8192,
  /**
   * Resource.
   */
  Resource: 16384,
  /**
   * Trace.
   */
  Trace: 32768,
  /**
   * Transform.
   */
  Transform: 65536,
  /**
   * User.
   */
  User: 131072,
  /**
   * Wand.
   */
  Wand: 262144,
  /**
   * Detailed.
   */
  Detailed: 2147450879,
  /**
   * All.
   */
  get All() {
    return this.Detailed | this.Trace;
  }
};
class be {
  /**
   * Gets the ImageMagick delegate libraries.
   */
  static get delegates() {
    return ge(_._api._Magick_Delegates_Get(), "Unknown");
  }
  /**
   * Gets the ImageMagick features.
   */
  static get features() {
    return ge(_._api._Magick_Features_Get(), " ").slice(0, -1);
  }
  /**
   * Gets the ImageMagick version.
   */
  static get imageMagickVersion() {
    return ge(_._api._Magick_ImageMagickVersion_Get(), "Unknown");
  }
  /**
   * Gets information about the supported formats.
   */
  static get supportedFormats() {
    return Re.all;
  }
  /**
   * Function that will be executed when something is logged by ImageMagick.
   */
  static onLog;
  /**
   * Registers a font.
   * @param name The name of the font.
   * @param data The byte array containing the font.
   */
  static addFont(e, n) {
    const r = _._api.FS;
    r.analyzePath("/fonts").exists || r.mkdir("/fonts");
    const d = r.open(`/fonts/${e}`, "w");
    r.write(d, n, 0, n.length), r.close(d);
  }
  /**
   * Sets the pseudo-random number generator secret key.
   * @param seed The secret key.
   */
  static resetRandomSeed = () => _._api._Magick_ResetRandomSeed();
  /**
   * Sets the pseudo-random number generator secret key.
   * @param seed The secret key.
   */
  static setRandomSeed = (e) => _._api._Magick_SetRandomSeed(e);
  /**
   * Set the events that will be written to the log. The log will be written to the Log event
   * and the debug window in VisualStudio. To change the log settings you must use a custom
   * log.xml file.
   * @param eventTypes The events that should be logged.
   */
  static setLogEvents(e) {
    const n = e == Q.None ? void 0 : be.logDelegate;
    ae.setLogDelegate(n);
    const r = be.getEventTypeString(e);
    A(r, (l) => _._api._Magick_SetLogEvents(l));
  }
  /** @internal */
  static _getFontFileName(e) {
    const n = `/fonts/${e}`;
    if (!_._api.FS.analyzePath(n).exists)
      throw `Unable to find a font with the name '${e}', register it with the addFont method of the Magick class.`;
    return n;
  }
  static getEventTypeString(e) {
    if (e == Q.All)
      return "All,Trace";
    if (e == Q.Detailed)
      return "All";
    switch (e) {
      case Q.Accelerate:
        return "Accelerate";
      case Q.Annotate:
        return "Annotate";
      case Q.Blob:
        return "Blob";
      case Q.Cache:
        return "Cache";
      case Q.Coder:
        return "Coder";
      case Q.Configure:
        return "Configure";
      case Q.Deprecate:
        return "Deprecate";
      case Q.Draw:
        return "Draw";
      case Q.Exception:
        return "Exception";
      case Q.Image:
        return "Image";
      case Q.Locale:
        return "Locale";
      case Q.Module:
        return "Module";
      case Q.Pixel:
        return "Pixel";
      case Q.Policy:
        return "Policy";
      case Q.Resource:
        return "Resource";
      case Q.Trace:
        return "Trace";
      case Q.Transform:
        return "Transform";
      case Q.User:
        return "User";
      case Q.Wand:
        return "Wand";
      case Q.None:
      default:
        return "None";
    }
  }
  static logDelegate(e) {
    be.onLog !== void 0 && be.onLog(e);
  }
}
class vo {
  _font;
  /**
   * Initializes a new instance of the {@link DrawableFont} class.
   * @param opacity The name of the font that was registered.
   */
  constructor(e) {
    this._font = e;
  }
  draw(e) {
    const n = be._getFontFileName(this._font);
    e.font(n);
  }
}
class ko {
  _gravity;
  /**
   * Initializes a new instance of the {@link DrawableGravity} class.
   * @param gravity The gravity to use.
   */
  constructor(e) {
    this._gravity = e;
  }
  draw(e) {
    e.gravity(this._gravity);
  }
}
class Mo {
  _startX;
  _startY;
  _endX;
  _endY;
  /**
   * Initializes a new instance of the {@link DrawableLine} class.
   * @param startX The starting X coordinate.
   * @param startY The starting Y coordinate.
   * @param endX The ending X coordinate.
   * @param endY The ending Y coordinate.
   */
  constructor(e, n, r, l) {
    this._startX = e, this._startY = n, this._endX = r, this._endY = l;
  }
  draw(e) {
    e.line(this._startX, this._startY, this._endX, this._endY);
  }
}
class wo {
  _x;
  _y;
  /**
   * Initializes a new instance of the {@link DrawablePoint} class.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   */
  constructor(e, n) {
    this._x = e, this._y = n;
  }
  draw(e) {
    e.point(this._x, this._y);
  }
}
class yo {
  _upperLeftX;
  _upperLeftY;
  _lowerRightX;
  _lowerRightY;
  /**
    * Initializes a new instance of the {@link DrawablePoint} class.
    * @param upperLeftX The upper left X coordinate.
    * @param upperLeftY The upper left Y coordinate.
    * @param lowerRightX The lower right X coordinate.
    * @param lowerRightY The lower right Y coordinate.
    */
  constructor(e, n, r, l) {
    this._upperLeftX = e, this._upperLeftY = n, this._lowerRightX = r, this._lowerRightY = l;
  }
  draw(e) {
    e.rectangle(this._upperLeftX, this._upperLeftY, this._lowerRightX, this._lowerRightY);
  }
}
class So {
  _upperLeftX;
  _upperLeftY;
  _lowerRightX;
  _lowerRightY;
  _cornerWidth;
  _cornerHeight;
  /**
   * Initializes a new instance of the {@link DrawableRoundRectangle} class.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   * @param cornerWidth The corner width.
   * @param cornerHeight The corner height.
   */
  constructor(e, n, r, l, d, p) {
    this._upperLeftX = e, this._upperLeftY = n, this._lowerRightX = r, this._lowerRightY = l, this._cornerWidth = d, this._cornerHeight = p;
  }
  draw(e) {
    e.roundRectangle(this._upperLeftX, this._upperLeftY, this._lowerRightX, this._lowerRightY, this._cornerWidth, this._cornerHeight);
  }
}
class Io {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableStrokeColor} class.
   * @param color The color to use.
   */
  constructor(e) {
    this._color = e;
  }
  draw(e) {
    e.strokeColor(this._color);
  }
}
class Co {
  _width;
  /**
   * Initializes a new instance of the {@link DrawableStrokeWidth} class.
   * @param width The width.
   */
  constructor(e) {
    this._width = e;
  }
  draw(e) {
    e.strokeWidth(this._width);
  }
}
class Po {
  _alignment;
  /**
   * Initializes a new instance of the {@link DrawableFillColor} class.
   * @param alignment The text alignment
   */
  constructor(e) {
    this._alignment = e;
  }
  draw(e) {
    e.textAlignment(this._alignment);
  }
}
class lt {
  _isEnabled;
  constructor(e) {
    this._isEnabled = e;
  }
  /**
   * Initializes a new instance of the {@link DrawableTextAntialias} class with antialias disabled.
   */
  static get disabled() {
    return new lt(!1);
  }
  /**
   * Initializes a new instance of the {@link DrawableTextAntialias} class with antialias enabled.
   */
  static get enabled() {
    return new lt(!0);
  }
  draw(e) {
    e.textAntialias(this._isEnabled);
  }
}
class Eo {
  _decoration;
  /**
   * Initializes a new instance of the {@link DrawableTextDecoration} class.
   * @param decoration The text decoration.
   */
  constructor(e) {
    this._decoration = e;
  }
  draw(e) {
    e.textDecoration(this._decoration);
  }
}
class Do {
  _spacing;
  /**
   * Initializes a new instance of the {@link DrawableTextInterlineSpacing} class.
   * @param decoration The spacing to use.
   */
  constructor(e) {
    this._spacing = e;
  }
  draw(e) {
    e.textInterlineSpacing(this._spacing);
  }
}
class bo {
  _spacing;
  /**
   * Initializes a new instance of the {@link DrawableTextInterwordSpacing} class.
   * @param decoration The spacing to use.
   */
  constructor(e) {
    this._spacing = e;
  }
  draw(e) {
    e.textInterwordspacing(this._spacing);
  }
}
class To {
  _kerning;
  /**
   * Initializes a new instance of the {@link DrawableTextKerning} class.
   * @param kerning The kerning to use.
   */
  constructor(e) {
    this._kerning = e;
  }
  draw(e) {
    e.textKerning(this._kerning);
  }
}
class Ao {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableTextUnderColor} class.
   * @param decoration The color to use.
   */
  constructor(e) {
    this._color = e;
  }
  draw(e) {
    e.textUnderColor(this._color);
  }
}
class Go {
  _x;
  _y;
  _value;
  /**
   * Initializes a new instance of the {@link DrawableTextUnderColor} class.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   * @param value The text to draw.
   */
  constructor(e, n, r) {
    this._x = e, this._y = n, this._value = r;
  }
  draw(e) {
    e.text(this._x, this._y, this._value);
  }
}
class Ro {
  /**
   * Gets a system-defined color that has an RGBA value of #00000000.
  */
  static get None() {
    return new k(0, 0, 0, 0);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00000000.
  */
  static get Transparent() {
    return new k(0, 0, 0, 0);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0F8FFFF.
  */
  static get AliceBlue() {
    return new k(240, 248, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAEBD7FF.
  */
  static get AntiqueWhite() {
    return new k(250, 235, 215, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FFFFFF.
  */
  static get Aqua() {
    return new k(0, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7FFFD4FF.
  */
  static get Aquamarine() {
    return new k(127, 255, 212, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0FFFFFF.
  */
  static get Azure() {
    return new k(240, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5F5DCFF.
  */
  static get Beige() {
    return new k(245, 245, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4C4FF.
  */
  static get Bisque() {
    return new k(255, 228, 196, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #000000FF.
  */
  static get Black() {
    return new k(0, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFEBCDFF.
  */
  static get BlanchedAlmond() {
    return new k(255, 235, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #0000FFFF.
  */
  static get Blue() {
    return new k(0, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8A2BE2FF.
  */
  static get BlueViolet() {
    return new k(138, 43, 226, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A52A2AFF.
  */
  static get Brown() {
    return new k(165, 42, 42, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DEB887FF.
  */
  static get BurlyWood() {
    return new k(222, 184, 135, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #5F9EA0FF.
  */
  static get CadetBlue() {
    return new k(95, 158, 160, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7FFF00FF.
  */
  static get Chartreuse() {
    return new k(127, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D2691EFF.
  */
  static get Chocolate() {
    return new k(210, 105, 30, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF7F50FF.
  */
  static get Coral() {
    return new k(255, 127, 80, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6495EDFF.
  */
  static get CornflowerBlue() {
    return new k(100, 149, 237, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF8DCFF.
  */
  static get Cornsilk() {
    return new k(255, 248, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DC143CFF.
  */
  static get Crimson() {
    return new k(220, 20, 60, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FFFFFF.
  */
  static get Cyan() {
    return new k(0, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00008BFF.
  */
  static get DarkBlue() {
    return new k(0, 0, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008B8BFF.
  */
  static get DarkCyan() {
    return new k(0, 139, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B8860BFF.
  */
  static get DarkGoldenrod() {
    return new k(184, 134, 11, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A9A9A9FF.
  */
  static get DarkGray() {
    return new k(169, 169, 169, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #006400FF.
  */
  static get DarkGreen() {
    return new k(0, 100, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BDB76BFF.
  */
  static get DarkKhaki() {
    return new k(189, 183, 107, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B008BFF.
  */
  static get DarkMagenta() {
    return new k(139, 0, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #556B2FFF.
  */
  static get DarkOliveGreen() {
    return new k(85, 107, 47, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF8C00FF.
  */
  static get DarkOrange() {
    return new k(255, 140, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9932CCFF.
  */
  static get DarkOrchid() {
    return new k(153, 50, 204, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B0000FF.
  */
  static get DarkRed() {
    return new k(139, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E9967AFF.
  */
  static get DarkSalmon() {
    return new k(233, 150, 122, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8FBC8FFF.
  */
  static get DarkSeaGreen() {
    return new k(143, 188, 143, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #483D8BFF.
  */
  static get DarkSlateBlue() {
    return new k(72, 61, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #2F4F4FFF.
  */
  static get DarkSlateGray() {
    return new k(47, 79, 79, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00CED1FF.
  */
  static get DarkTurquoise() {
    return new k(0, 206, 209, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9400D3FF.
  */
  static get DarkViolet() {
    return new k(148, 0, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF1493FF.
  */
  static get DeepPink() {
    return new k(255, 20, 147, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00BFFFFF.
  */
  static get DeepSkyBlue() {
    return new k(0, 191, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #696969FF.
  */
  static get DimGray() {
    return new k(105, 105, 105, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #1E90FFFF.
  */
  static get DodgerBlue() {
    return new k(30, 144, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B22222FF.
  */
  static get Firebrick() {
    return new k(178, 34, 34, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFAF0FF.
  */
  static get FloralWhite() {
    return new k(255, 250, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #228B22FF.
  */
  static get ForestGreen() {
    return new k(34, 139, 34, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF00FFFF.
  */
  static get Fuchsia() {
    return new k(255, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DCDCDCFF.
  */
  static get Gainsboro() {
    return new k(220, 220, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F8F8FFFF.
  */
  static get GhostWhite() {
    return new k(248, 248, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFD700FF.
  */
  static get Gold() {
    return new k(255, 215, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DAA520FF.
  */
  static get Goldenrod() {
    return new k(218, 165, 32, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #808080FF.
  */
  static get Gray() {
    return new k(128, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008000FF.
  */
  static get Green() {
    return new k(0, 128, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #ADFF2FFF.
  */
  static get GreenYellow() {
    return new k(173, 255, 47, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0FFF0FF.
  */
  static get Honeydew() {
    return new k(240, 255, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF69B4FF.
  */
  static get HotPink() {
    return new k(255, 105, 180, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #CD5C5CFF.
  */
  static get IndianRed() {
    return new k(205, 92, 92, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4B0082FF.
  */
  static get Indigo() {
    return new k(75, 0, 130, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFF0FF.
  */
  static get Ivory() {
    return new k(255, 255, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0E68CFF.
  */
  static get Khaki() {
    return new k(240, 230, 140, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E6E6FAFF.
  */
  static get Lavender() {
    return new k(230, 230, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF0F5FF.
  */
  static get LavenderBlush() {
    return new k(255, 240, 245, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7CFC00FF.
  */
  static get LawnGreen() {
    return new k(124, 252, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFACDFF.
  */
  static get LemonChiffon() {
    return new k(255, 250, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #ADD8E6FF.
  */
  static get LightBlue() {
    return new k(173, 216, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F08080FF.
  */
  static get LightCoral() {
    return new k(240, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E0FFFFFF.
  */
  static get LightCyan() {
    return new k(224, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAFAD2FF.
  */
  static get LightGoldenrodYellow() {
    return new k(250, 250, 210, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #90EE90FF.
  */
  static get LightGreen() {
    return new k(144, 238, 144, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D3D3D3FF.
  */
  static get LightGray() {
    return new k(211, 211, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFB6C1FF.
  */
  static get LightPink() {
    return new k(255, 182, 193, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFA07AFF.
  */
  static get LightSalmon() {
    return new k(255, 160, 122, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #20B2AAFF.
  */
  static get LightSeaGreen() {
    return new k(32, 178, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #87CEFAFF.
  */
  static get LightSkyBlue() {
    return new k(135, 206, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #778899FF.
  */
  static get LightSlateGray() {
    return new k(119, 136, 153, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B0C4DEFF.
  */
  static get LightSteelBlue() {
    return new k(176, 196, 222, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFE0FF.
  */
  static get LightYellow() {
    return new k(255, 255, 224, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FF00FF.
  */
  static get Lime() {
    return new k(0, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #32CD32FF.
  */
  static get LimeGreen() {
    return new k(50, 205, 50, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAF0E6FF.
  */
  static get Linen() {
    return new k(250, 240, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF00FFFF.
  */
  static get Magenta() {
    return new k(255, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #800000FF.
  */
  static get Maroon() {
    return new k(128, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #66CDAAFF.
  */
  static get MediumAquamarine() {
    return new k(102, 205, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #0000CDFF.
  */
  static get MediumBlue() {
    return new k(0, 0, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BA55D3FF.
  */
  static get MediumOrchid() {
    return new k(186, 85, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9370DBFF.
  */
  static get MediumPurple() {
    return new k(147, 112, 219, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #3CB371FF.
  */
  static get MediumSeaGreen() {
    return new k(60, 179, 113, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7B68EEFF.
  */
  static get MediumSlateBlue() {
    return new k(123, 104, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FA9AFF.
  */
  static get MediumSpringGreen() {
    return new k(0, 250, 154, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #48D1CCFF.
  */
  static get MediumTurquoise() {
    return new k(72, 209, 204, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #C71585FF.
  */
  static get MediumVioletRed() {
    return new k(199, 21, 133, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #191970FF.
  */
  static get MidnightBlue() {
    return new k(25, 25, 112, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5FFFAFF.
  */
  static get MintCream() {
    return new k(245, 255, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4E1FF.
  */
  static get MistyRose() {
    return new k(255, 228, 225, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4B5FF.
  */
  static get Moccasin() {
    return new k(255, 228, 181, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFDEADFF.
  */
  static get NavajoWhite() {
    return new k(255, 222, 173, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #000080FF.
  */
  static get Navy() {
    return new k(0, 0, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FDF5E6FF.
  */
  static get OldLace() {
    return new k(253, 245, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #808000FF.
  */
  static get Olive() {
    return new k(128, 128, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6B8E23FF.
  */
  static get OliveDrab() {
    return new k(107, 142, 35, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFA500FF.
  */
  static get Orange() {
    return new k(255, 165, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF4500FF.
  */
  static get OrangeRed() {
    return new k(255, 69, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DA70D6FF.
  */
  static get Orchid() {
    return new k(218, 112, 214, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #EEE8AAFF.
  */
  static get PaleGoldenrod() {
    return new k(238, 232, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #98FB98FF.
  */
  static get PaleGreen() {
    return new k(152, 251, 152, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #AFEEEEFF.
  */
  static get PaleTurquoise() {
    return new k(175, 238, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DB7093FF.
  */
  static get PaleVioletRed() {
    return new k(219, 112, 147, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFEFD5FF.
  */
  static get PapayaWhip() {
    return new k(255, 239, 213, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFDAB9FF.
  */
  static get PeachPuff() {
    return new k(255, 218, 185, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #CD853FFF.
  */
  static get Peru() {
    return new k(205, 133, 63, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFC0CBFF.
  */
  static get Pink() {
    return new k(255, 192, 203, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DDA0DDFF.
  */
  static get Plum() {
    return new k(221, 160, 221, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B0E0E6FF.
  */
  static get PowderBlue() {
    return new k(176, 224, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #800080FF.
  */
  static get Purple() {
    return new k(128, 0, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #663399FF.
  */
  static get RebeccaPurple() {
    return new k(102, 51, 153, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF0000FF.
  */
  static get Red() {
    return new k(255, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BC8F8FFF.
  */
  static get RosyBrown() {
    return new k(188, 143, 143, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4169E1FF.
  */
  static get RoyalBlue() {
    return new k(65, 105, 225, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B4513FF.
  */
  static get SaddleBrown() {
    return new k(139, 69, 19, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FA8072FF.
  */
  static get Salmon() {
    return new k(250, 128, 114, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F4A460FF.
  */
  static get SandyBrown() {
    return new k(244, 164, 96, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #2E8B57FF.
  */
  static get SeaGreen() {
    return new k(46, 139, 87, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF5EEFF.
  */
  static get SeaShell() {
    return new k(255, 245, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A0522DFF.
  */
  static get Sienna() {
    return new k(160, 82, 45, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #C0C0C0FF.
  */
  static get Silver() {
    return new k(192, 192, 192, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #87CEEBFF.
  */
  static get SkyBlue() {
    return new k(135, 206, 235, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6A5ACDFF.
  */
  static get SlateBlue() {
    return new k(106, 90, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #708090FF.
  */
  static get SlateGray() {
    return new k(112, 128, 144, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFAFAFF.
  */
  static get Snow() {
    return new k(255, 250, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FF7FFF.
  */
  static get SpringGreen() {
    return new k(0, 255, 127, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4682B4FF.
  */
  static get SteelBlue() {
    return new k(70, 130, 180, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D2B48CFF.
  */
  static get Tan() {
    return new k(210, 180, 140, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008080FF.
  */
  static get Teal() {
    return new k(0, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D8BFD8FF.
  */
  static get Thistle() {
    return new k(216, 191, 216, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF6347FF.
  */
  static get Tomato() {
    return new k(255, 99, 71, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #40E0D0FF.
  */
  static get Turquoise() {
    return new k(64, 224, 208, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #EE82EEFF.
  */
  static get Violet() {
    return new k(238, 130, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5DEB3FF.
  */
  static get Wheat() {
    return new k(245, 222, 179, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFFFFF.
  */
  static get White() {
    return new k(255, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5F5F5FF.
  */
  static get WhiteSmoke() {
    return new k(245, 245, 245, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFF00FF.
  */
  static get Yellow() {
    return new k(255, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9ACD32FF.
  */
  static get YellowGreen() {
    return new k(154, 205, 50, 255);
  }
}
class jo {
  _drawables = [];
  /**
   * Adds {@link DrawableTextAntialias.enabled} to the drawables.
   */
  disableStrokeAntialias() {
    return this._drawables.push(lt.disabled), this;
  }
  /**
   * Adds {@link DrawableTextAntialias.enabled} to the drawables.
   */
  enableStrokeAntialias() {
    return this._drawables.push(lt.enabled), this;
  }
  /**
   * Adds a {@link DrawableFillColor} to the drawables.
   * @param color The color to use.
   */
  fillColor(e) {
    return this._drawables.push(new qs(e)), this;
  }
  /**
   * Adds a {@link DrawableFillOpacity} to the drawables.
   * @param opacity The opacity.
   */
  fillOpacity(e) {
    return this._drawables.push(new Ks(e)), this;
  }
  /**
   * Adds a {@link DrawableFont} to the drawables.
   * @param font The name of the font that was registered.
   */
  font(e) {
    return this._drawables.push(new vo(e)), this;
  }
  /**
   * Adds a {@link DrawableFontPointSize} to the drawables.
   * @param pointSize The point size.
   */
  fontPointSize(e) {
    return this._drawables.push(new Qs(e)), this;
  }
  /**
   * Obtain font metrics for text string given current font, pointsize, and density settings.
   * @param text The text to get the metrics for.
   * @param ignoreNewlines A value indicating whether newlines should be ignored.
   */
  fontTypeMetrics(e, n = !1) {
    return re._create((r) => (r.read(Ro.Transparent, 1, 1), Dt._use(r, (l) => (l.draw(this._drawables), l.fontTypeMetrics(e, n)))));
  }
  /**
   * Adds a {@link DrawableGravity} to the drawables.
   * @param value The gravity to use.
   */
  gravity(e) {
    return this._drawables.push(new ko(e)), this;
  }
  /**
   * Adds a {@link DrawableLine} to the drawables.
   * @param startX The starting X coordinate.
   * @param startY The starting Y coordinate.
   * @param endX The ending X coordinate.
   * @param endY The ending Y coordinate.
   */
  line(e, n, r, l) {
    return this._drawables.push(new Mo(e, n, r, l)), this;
  }
  /**
   * Adds a {@link DrawablePoint} to the drawables.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   */
  point(e, n) {
    return this._drawables.push(new wo(e, n)), this;
  }
  /**
   * Adds a {@link DrawableRectangle} to the drawables.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   */
  rectangle(e, n, r, l) {
    return this._drawables.push(new yo(e, n, r, l)), this;
  }
  /**
   * Adds a {@link DrawableRoundRectangle} to the drawables.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   * @param cornerWidth The corner width.
   * @param cornerHeight The corner height.
   */
  roundRectangle(e, n, r, l, d, p) {
    return this._drawables.push(new So(e, n, r, l, d, p)), this;
  }
  /**
   * Adds a {@link DrawableStrokeColor} to the drawables.
   * @param color The color to use.
   */
  strokeColor(e) {
    return this._drawables.push(new Io(e)), this;
  }
  /**
   * Adds a {@link DrawableStrokeWidth} to the drawables.
   * @param width The width.
   */
  strokeWidth(e) {
    return this._drawables.push(new Co(e)), this;
  }
  /**
   * Adds a {@link DrawableText} to the drawables.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   * @param value The text to draw.
   */
  text(e, n, r) {
    return this._drawables.push(new Go(e, n, r)), this;
  }
  /**
   * Adds a {@link DrawableTextAlignment} to the drawables.
   * @param alignment The text alignment.
   */
  textAlignment(e) {
    return this._drawables.push(new Po(e)), this;
  }
  /**
   * Adds a {@link DrawableTextDecoration} to the drawables.
   * @param decoration The text decoration.
   */
  textDecoration(e) {
    return this._drawables.push(new Eo(e)), this;
  }
  /**
   * Adds a {@link DrawableTextInterlineSpacing} to the drawables.
   * @param spacing The spacing to use.
   */
  textInterlineSpacing(e) {
    return this._drawables.push(new Do(e)), this;
  }
  /**
   * Adds a {@link DrawableTextInterlineSpacing} to the drawables.
   * @param spacing The spacing to use.
   */
  textInterwordSpacing(e) {
    return this._drawables.push(new bo(e)), this;
  }
  /**
   * Adds a {@link DrawableTextKerning} to the drawables.
   * @param kerning The kerning to use.
   */
  textKerning(e) {
    return this._drawables.push(new To(e)), this;
  }
  /**
   * Adds a {@link DrawableTextUnderColor} to the drawables.
   * @param color The color to use.
   */
  textUnderColor(e) {
    return this._drawables.push(new Ao(e)), this;
  }
  /**
   * Draw on the specified image.
   * @param image The image to draw on.
   */
  draw(e) {
    return e.draw(this._drawables), this;
  }
}
const Yo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Kapur.
   */
  Kapur: 1,
  /**
   * OTSU.
   */
  OTSU: 2,
  /**
   * Triangle.
   */
  Triangle: 3
}, Vo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Direct.
   */
  Direct: 1,
  /**
   * Pseudo.
   */
  Pseudo: 2
}, Xo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Bilevel.
   */
  Bilevel: 1,
  /**
   * Grayscale.
   */
  Grayscale: 2,
  /**
   * Grayscale alpha.
   */
  GrayscaleAlpha: 3,
  /**
   * Palette.
   */
  Palette: 4,
  /**
   * Palette alpha.
   */
  PaletteAlpha: 5,
  /**
   * Truecolor.
   */
  TrueColor: 6,
  /**
   * Truecolor alpha.
   */
  TrueColorAlpha: 7,
  /**
   * Color separation.
   */
  ColorSeparation: 8,
  /**
   * Color separation alpha.
   */
  ColorSeparationAlpha: 9,
  /**
   * Optimize.
   */
  Optimize: 10,
  /**
   * Palette bilevel alpha.
   */
  PaletteBilevelAlpha: 11
}, qo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Add.
   */
  Add: 1,
  /**
   * Conjugate.
   */
  Conjugate: 2,
  /**
   * Divide.
   */
  Divide: 3,
  /**
   * Magnitude phase.
   */
  MagnitudePhase: 4,
  /**
   * Multiply.
   */
  Multiply: 5,
  /**
   * Real imaginary.
   */
  RealImaginary: 6,
  /**
   * Subtract.
   */
  Subtract: 7
}, xo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * B44A.
   */
  B44A: 1,
  /**
   * B44.
   */
  B44: 2,
  /**
   * BZip.
   */
  BZip: 3,
  /**
   * DXT1.
   */
  DXT1: 4,
  /**
   * DXT3.
   */
  DXT3: 5,
  /**
   * DXT5.
   */
  DXT5: 6,
  /**
   * Fax.
   */
  Fax: 7,
  /**
   * Group4.
   */
  Group4: 8,
  /**
   * JBIG1.
   */
  JBIG1: 9,
  /**
   * JBIG2.
   */
  JBIG2: 10,
  /**
   * JPEG2000.
   */
  JPEG2000: 11,
  /**
   * JPEG.
   */
  JPEG: 12,
  /**
   * Lossless JPEG.
   */
  LosslessJPEG: 13,
  /**
   * LZMA.
   */
  LZMA: 14,
  /**
   * LZW.
   */
  LZW: 15,
  /**
   * No compression.
   */
  NoCompression: 16,
  /**
   * Piz.
   */
  Piz: 17,
  /**
   * Pxr24.
   */
  Pxr24: 18,
  /**
   * RLE.
   */
  RLE: 19,
  /**
   * Zip.
   */
  Zip: 20,
  /**
   * ZipS.
   */
  ZipS: 21,
  /**
   * Zstd.
   */
  Zstd: 22,
  /**
   * WebP.
   */
  WebP: 23,
  /**
   * DWAA.
   */
  DWAA: 24,
  /**
   * DWAB.
   */
  DWAB: 25,
  /**
   * BC7.
   */
  BC7: 26,
  /**
   * BC6.
   */
  BC5: 27
}, Ko = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Affine.
   */
  Affine: 1,
  /**
   * Affine projection.
   */
  AffineProjection: 2,
  /**
   * Scale rotate translate.
   */
  ScaleRotateTranslate: 3,
  /**
   * Perspective.
   */
  Perspective: 4,
  /**
   * Perspective projection.
   */
  PerspectiveProjection: 5,
  /**
   * Bilinear forward.
   */
  BilinearForward: 6,
  /**
   * Bilinear reverse.
   */
  BilinearReverse: 7,
  /**
   * Polynomial.
   */
  Polynomial: 8,
  /**
   * Arc.
   */
  Arc: 9,
  /**
   * Polar.
   */
  Polar: 10,
  /**
   * De-polar.
   */
  DePolar: 11,
  /**
   * Cylinder 2 plane.
   */
  Cylinder2Plane: 12,
  /**
   * Plane 2 cylinder.
   */
  Plane2Cylinder: 13,
  /**
   * Barrel.
   */
  Barrel: 14,
  /**
   * Barrel inverse.
   */
  BarrelInverse: 15,
  /**
   * Shepards.
   */
  Shepards: 16,
  /**
   * Resize.
   */
  Resize: 17,
  /**
   * Sentinel.
   */
  Sentinel: 18,
  /**
   * Rigid affine.
   */
  RigidAffine: 19
}, Qo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Least significant bit, byte 0 is least significant.
   */
  LSB: 1,
  /**
   * Most significant bit, byte 0 is most significant.
   */
  MSB: 2
}, Jo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Absolute.
   */
  Absolute: 1,
  /**
   * Fuzz.
   */
  Fuzz: 2,
  /**
   * Mean absolute.
   */
  MeanAbsolute: 3,
  /**
   * Mean error per pixel.
   */
  MeanErrorPerPixel: 4,
  /**
   * Mean squared.
   */
  MeanSquared: 5,
  /**
   * Normalized cross correlation.
   */
  NormalizedCrossCorrelation: 6,
  /**
   * Peak absolute.
   */
  PeakAbsolute: 7,
  /**
   * Peak signal to noise ratio.
   */
  PeakSignalToNoiseRatio: 8,
  /**
   * Perceptual hash.
   */
  PerceptualHash: 9,
  /**
   * Root mean squared.
   */
  RootMeanSquared: 10,
  /**
   * Structural similarity.
   */
  StructuralSimilarity: 11,
  /**
   * Structural dissimilarity.
   */
  StructuralDissimilarity: 12
}, Oo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Abs.
   */
  Abs: 1,
  /**
   * Add.
   */
  Add: 2,
  /**
   * Add modulus.
   */
  AddModulus: 3,
  /**
   * And.
   */
  And: 4,
  /**
   * Cosine.
   */
  Cosine: 5,
  /**
   * Divide.
   */
  Divide: 6,
  /**
   * Exponential.
   */
  Exponential: 7,
  /**
   * Gaussian noise.
   */
  GaussianNoise: 8,
  /**
   * Impulse noise.
   */
  ImpulseNoise: 9,
  /**
   * Laplacian noise.
   */
  LaplacianNoise: 10,
  /**
   * Left shift.
   */
  LeftShift: 11,
  /**
   * Log.
   */
  Log: 12,
  /**
   * Max.
   */
  Max: 13,
  /**
   * Mean.
   */
  Mean: 14,
  /**
   * Median.
   */
  Median: 15,
  /**
   * Min.
   */
  Min: 16,
  /**
   * Multiplicative noise.
   */
  MultiplicativeNoise: 17,
  /**
   * Multiply.
   */
  Multiply: 18,
  /**
   * Or.
   */
  Or: 19,
  /**
   * Poisson noise.
   */
  PoissonNoise: 20,
  /**
   * Pow.
   */
  Pow: 21,
  /**
   * Right shift.
   */
  RightShift: 22,
  /**
   * Root mean square.
   */
  RootMeanSquare: 23,
  /**
   * Set.
   */
  Set: 24,
  /**
   * Sine.
   */
  Sine: 25,
  /**
   * Subtract.
   */
  Subtract: 26,
  /**
   * Sum.
   */
  Sum: 27,
  /**
   * Threshold black.
   */
  ThresholdBlack: 28,
  /**
   * Threshold.
   */
  Threshold: 29,
  /**
   * Threshold white.
   */
  ThresholdWhite: 30,
  /**
   * Uniform noise.
   */
  UniformNoise: 31,
  /**
   * Xor.
   */
  Xor: 32,
  /**
   * Inverse log.
   */
  InverseLog: 33
}, Zo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Point.
   */
  Point: 1,
  /**
   * Box.
   */
  Box: 2,
  /**
   * Triangle.
   */
  Triangle: 3,
  /**
   * Hermite.
   */
  Hermite: 4,
  /**
   * Hann.
   */
  Hann: 5,
  /**
   * Hamming.
   */
  Hamming: 6,
  /**
   * Blackman.
   */
  Blackman: 7,
  /**
   * Gaussian.
   */
  Gaussian: 8,
  /**
   * Quadratic.
   */
  Quadratic: 9,
  /**
   * Cubic.
   */
  Cubic: 10,
  /**
   * Catrom.
   */
  Catrom: 11,
  /**
   * Mitchell.
   */
  Mitchell: 12,
  /**
   * Jinc.
   */
  Jinc: 13,
  /**
   * Sinc.
   */
  Sinc: 14,
  /**
   * Sinc fast.
   */
  SincFast: 15,
  /**
   * Kaiser.
   */
  Kaiser: 16,
  /**
   * Welch.
   */
  Welch: 17,
  /**
   * Parzen.
   */
  Parzen: 18,
  /**
   * Bohman.
   */
  Bohman: 19,
  /**
   * Bartlett.
   */
  Bartlett: 20,
  /**
   * Lagrange.
   */
  Lagrange: 21,
  /**
   * Lanczos.
   */
  Lanczos: 22,
  /**
   * Lanczos sharp.
   */
  LanczosSharp: 23,
  /**
   * Lanczos 2.
   */
  Lanczos2: 24,
  /**
   * Lanczos 2 sharp.
   */
  Lanczos2Sharp: 25,
  /**
   * Robidoux.
   */
  Robidoux: 26,
  /**
   * Robidoux sharp.
   */
  RobidouxSharp: 27,
  /**
   * Cosine.
   */
  Cosine: 28,
  /**
   * Spline.
   */
  Spline: 29,
  /**
   * Lanczos radius.
   */
  LanczosRadius: 30,
  /**
   * Cubic spline.
   */
  CubicSpline: 31
}, ec = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * None.
   */
  None: 1,
  /**
   * Background.
   */
  Background: 2,
  /**
   * Previous.
   */
  Previous: 3
}, Fo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * No interlacing.
   */
  NoInterlace: 1,
  /**
   * Line.
   */
  Line: 2,
  /**
   * Plane.
   */
  Plane: 3,
  /**
   * Partition.
   */
  Partition: 4,
  /**
   * Gif.
   */
  Gif: 5,
  /**
   * Jpeg.
   */
  Jpeg: 6,
  /**
   * Png.
   */
  Png: 7
}, tc = {
  /**
   * Undefined.
   */
  Undefined: "Undefined",
  /**
   * Unity.
   */
  Unity: "Unity",
  /**
   * Gaussian.
   */
  Gaussian: "Gaussian",
  /**
   * DoG.
   */
  DoG: "DoG",
  /**
   * LoG.
   */
  LoG: "LoG",
  /**
   * Blur.
   */
  Blur: "Blur",
  /**
   * Comet.
   */
  Comet: "Comet",
  /**
   * Binomial.
   */
  Binomial: "Binomial",
  /**
   * Laplacian.
   */
  Laplacian: "Laplacian",
  /**
   * Sobel.
   */
  Sobel: "Sobel",
  /**
   * Frei chen.
   */
  FreiChen: "FreiChen",
  /**
   * Roberts.
   */
  Roberts: "Roberts",
  /**
   * Prewitt.
   */
  Prewitt: "Prewitt",
  /**
   * Compass.
   */
  Compass: "Compass",
  /**
   * Kirsch.
   */
  Kirsch: "Kirsch",
  /**
   * Diamond.
   */
  Diamond: "Diamond",
  /**
   * Square.
   */
  Square: "Square",
  /**
   * Rectangle.
   */
  Rectangle: "Rectangle",
  /**
   * Octagon.
   */
  Octagon: "Octagon",
  /**
   * Disk.
   */
  Disk: "Disk",
  /**
   * Plus.
   */
  Plus: "Plus",
  /**
   * Cross.
   */
  Cross: "Cross",
  /**
   * Ring.
   */
  Ring: "Ring",
  /**
   * Peaks.
   */
  Peaks: "Peaks",
  /**
   * Edges.
   */
  Edges: "Edges",
  /**
   * Corners.
   */
  Corners: "Corners",
  /**
   * Diagonals.
   */
  Diagonals: "Diagonals",
  /**
   * Line ends.
   */
  LineEnds: "LineEnds",
  /**
   * Line junctions.
   */
  LineJunctions: "LineJunctions",
  /**
   * Ridges.
   */
  Ridges: "Ridges",
  /**
   * Convex hull.
   */
  ConvexHull: "ConvexHull",
  /**
   * Thin SE.
   */
  ThinSE: "ThinSE",
  /**
   * Skeleton.
   */
  Skeleton: "Skeleton",
  /**
   * Chebyshev.
   */
  Chebyshev: "Chebyshev",
  /**
   * Manhattan.
   */
  Manhattan: "Manhattan",
  /**
   * Octagonal.
   */
  Octagonal: "Octagonal",
  /**
   * Euclidean.
   */
  Euclidean: "Euclidean",
  /**
   * User defined.
   */
  UserDefined: "UserDefined"
}, rc = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Convolve.
   */
  Convolve: 1,
  /**
   * Correlate.
   */
  Correlate: 2,
  /**
   * Erode.
   */
  Erode: 3,
  /**
   * Dilate.
   */
  Dilate: 4,
  /**
   * Erode intensity.
   */
  ErodeIntensity: 5,
  /**
   * Dilate intensity.
   */
  DilateIntensity: 6,
  /**
   * Iterative distance.
   */
  IterativeDistance: 7,
  /**
   * Open.
   */
  Open: 8,
  /**
   * Close.
   */
  Close: 9,
  /**
   * Open intensity.
   */
  OpenIntensity: 10,
  /**
   * Close intensity.
   */
  CloseIntensity: 11,
  /**
   * Smooth.
   */
  Smooth: 12,
  /**
   * Edge in.
   */
  EdgeIn: 13,
  /**
   * Edge out.
   */
  EdgeOut: 14,
  /**
   * Edge.
   */
  Edge: 15,
  /**
   * Top hat.
   */
  TopHat: 16,
  /**
   * Bottom hat.
   */
  BottomHat: 17,
  /**
   * Hit and miss.
   */
  HitAndMiss: 18,
  /**
   * Thinning.
   */
  Thinning: 19,
  /**
   * Thicken.
   */
  Thicken: 20,
  /**
   * Distance.
   */
  Distance: 21,
  /**
   * Voronoi.
   */
  Voronoi: 22
}, ic = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Uniform.
   */
  Uniform: 1,
  /**
   * Gaussian.
   */
  Gaussian: 2,
  /**
   * Multiplicative Gaussian.
   */
  MultiplicativeGaussian: 3,
  /**
   * Impulse.
   */
  Impulse: 4,
  /**
   * Laplacian.
   */
  Laplacian: 5,
  /**
   * Poisson.
   */
  Poisson: 6,
  /**
   * Random.
   */
  Random: 7
}, Lo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Top left.
   */
  TopLeft: 1,
  /**
   * Top right.
   */
  TopRight: 2,
  /**
   * Bottom right.
   */
  BottomRight: 3,
  /**
   * Bottom left.
   */
  BottomLeft: 4,
  /**
   * Left top.
   */
  LeftTop: 5,
  /**
   * Right top.
   */
  RightTop: 6,
  /**
   * Right bottom.
   */
  RightBottom: 7,
  /**
   * Left bottom.
   */
  LeftBottom: 8
}, nc = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Select the target pixel.
   */
  Point: 1,
  /**
   * Select any pixel that matches the target pixel.
   */
  Replace: 2,
  /**
   * Select the target pixel and matching neighbors.
   */
  Floodfill: 3,
  /**
   * Select the target pixel and neighbors not matching border color.
   */
  FillToBorder: 4,
  /**
   * Select all pixels.
   */
  Reset: 5
}, ac = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Average.
   */
  Average: 1,
  /**
   * Average9.
   */
  Average9: 2,
  /**
   * Average16.
   */
  Average16: 3,
  /**
   * Background.
   */
  Background: 4,
  /**
   * Bilinear.
   */
  Bilinear: 5,
  /**
   * Blend.
   */
  Blend: 6,
  /**
   * Catrom.
   */
  Catrom: 7,
  /**
   * Integer.
   */
  Integer: 8,
  /**
   * Mesh.
   */
  Mesh: 9,
  /**
   * Nearest.
   */
  Nearest: 10,
  /**
   * Spline.
   */
  Spline: 11
}, sc = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Saturation.
   */
  Saturation: 1,
  /**
   * Perceptual.
   */
  Perceptual: 2,
  /**
   * Absolute.
   */
  Absolute: 3,
  /**
   * Relative.
   */
  Relative: 4
}, oc = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Left.
   */
  Left: 1,
  /**
   * Center.
   */
  Center: 2,
  /**
   * Right.
   */
  Right: 3
}, cc = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * None.
   */
  None: 1,
  /**
   * Underline.
   */
  Underline: 2,
  /**
   * Overline.
   */
  Overline: 3,
  /**
   * Line through.
   */
  LineThrough: 4
}, _c = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Background.
   */
  Background: 1,
  /**
   * Dither.
   */
  Dither: 2,
  /**
   * Edge.
   */
  Edge: 3,
  /**
   * Mirror.
   */
  Mirror: 4,
  /**
   * Random.
   */
  Random: 5,
  /**
   * Tile.
   */
  Tile: 6,
  /**
   * Transparent.
   */
  Transparent: 7,
  /**
   * Mask.
   */
  Mask: 8,
  /**
   * Black.
   */
  Black: 9,
  /**
   * Gray.
   */
  Gray: 10,
  /**
   * White.
   */
  White: 11,
  /**
   * Horizontal tile.
   */
  HorizontalTile: 12,
  /**
   * Vertical tile.
   */
  VerticalTile: 13,
  /**
   * Horizontal tile edge.
   */
  HorizontalTileEdge: 14,
  /**
   * Vertical tile edge.
   */
  VerticalTileEdge: 15,
  /**
   * Checker tile.
   */
  CheckerTile: 16
};
var Wo = /* @__PURE__ */ ((M) => (M[M.Disabled = -1] = "Disabled", M[M.Linear = 0] = "Linear", M[M.Vng = 1] = "Vng", M[M.Ppg = 2] = "Ppg", M[M.Ahd = 3] = "Ahd", M[M.DCB = 4] = "DCB", M[M.Dht = 11] = "Dht", M[M.ModifiedAhd = 12] = "ModifiedAhd", M))(Wo || {}), Bo = /* @__PURE__ */ ((M) => (M[M.Raw = 0] = "Raw", M[M.SRGB = 1] = "SRGB", M[M.AdobeRGB = 2] = "AdobeRGB", M[M.WideGamutRGB = 3] = "WideGamutRGB", M[M.KodakProPhotoRGB = 4] = "KodakProPhotoRGB", M[M.XYZ = 5] = "XYZ", M[M.ACES = 6] = "ACES", M))(Bo || {});
class lc extends Xs {
  constructor() {
    super(xe.Dng);
  }
  /**
   * Gets or sets a value indicating wether auto brightness should be used (dng:no-auto-bright).
   */
  disableAutoBrightness;
  /**
   * Gets or sets a value indicating the interpolation quality (dng:interpolation-quality).
   */
  interpolationQuality;
  /**
   * Gets or sets the output color (dng:output-color).
   */
  outputColor;
  /**
  * Gets or sets a value indicating wether auto whitebalance should be used (dng:use-auto-wb).
  */
  useAutoWhitebalance;
  /**
   * Gets or sets a value indicating wether the whitebalance of the camera should be used (dng:use-camera-wb).
   */
  useCameraWhitebalance;
  getDefines() {
    const e = [];
    return this.hasValue(this.interpolationQuality) && e.push(this.createDefine("interpolation-quality", this.interpolationQuality)), this.hasValue(this.disableAutoBrightness) && e.push(this.createDefine("no-auto-bright", this.disableAutoBrightness)), this.hasValue(this.outputColor) && e.push(this.createDefine("output-color", this.outputColor)), this.hasValue(this.useCameraWhitebalance) && e.push(this.createDefine("use-camera-wb", this.useCameraWhitebalance)), this.hasValue(this.useAutoWhitebalance) && e.push(this.createDefine("use-auto-wb", this.useAutoWhitebalance)), e;
  }
}
class ci {
  _colorSpace = D.Undefined;
  _compression = xo.Undefined;
  _density = new et(0, 0);
  _format = xe.Unknown;
  _height = 0;
  _interlace = Fo.Undefined;
  _orientation = Lo.Undefined;
  _quality = 0;
  _width = 0;
  get colorSpace() {
    return this._colorSpace;
  }
  get compression() {
    return this._compression;
  }
  get density() {
    return this._density;
  }
  get format() {
    return this._format;
  }
  get height() {
    return this._height;
  }
  get interlace() {
    return this._interlace;
  }
  get orientation() {
    return this._orientation;
  }
  get quality() {
    return this._quality;
  }
  get width() {
    return this._width;
  }
  constructor() {
  }
  read(e, n) {
    re._create((r) => {
      r.ping(e, n), this._colorSpace = r.colorSpace, this._compression = r.compression, this._density = r.density, this._format = r.format, this._height = r.height, this._interlace = r.interlace, this._orientation = r.orientation, this._quality = r.quality, this._width = r.width;
    });
  }
  static create(e, n) {
    const r = new ci();
    return r.read(e, n), r;
  }
}
class uc {
  /**
   * Initializes a new instance of the {@link ComplexSettings} class.
   * @param complexOperator The complex operator.
   */
  constructor(e) {
    this.complexOperator = e;
  }
  /**F
   * Gets or sets the complex operator.
   **/
  complexOperator;
  /**
   * Gets or sets the signal to noise ratio.
   **/
  signalToNoiseRatio;
  /** @internal */
  _setArtifacts(e) {
    this.signalToNoiseRatio !== void 0 && e.setArtifact("complex:snr", this.signalToNoiseRatio);
  }
}
class gc {
  constructor(e) {
    this.method = e;
  }
  /**
   * Gets the distortion method to use.
   */
  method;
  /**
   * Gets or sets a value indicating whether distort attempt to 'bestfit' the size of the resulting image.
   */
  bestFit = !1;
  /**
   * Gets or sets a value to scale the size of the output canvas by this amount to provide a method of
   * Zooming, and for super-sampling the results.
   */
  scale;
  /**
   * Gets or sets the viewport that directly set the output image canvas area and offest to use for the
   * resulting image, rather than use the original images canvas, or a calculated 'bestfit' canvas.
   */
  viewport;
  /** @internal */
  _setArtifacts(e) {
    this.scale !== void 0 && e.setArtifact("distort:scale", this.scale.toString()), this.viewport !== void 0 && e.setArtifact("distort:viewport", this.viewport.toString());
  }
}
class No extends Ye {
  constructor(e) {
    const n = _._api._MontageSettings_Create(), r = _._api._MontageSettings_Dispose;
    if (super(n, r), e.backgroundColor !== void 0 && e.backgroundColor._use((l) => {
      _._api._MontageSettings_SetBackgroundColor(this._instance, l);
    }), e.borderColor !== void 0 && e.borderColor._use((l) => {
      _._api._MontageSettings_SetBorderColor(this._instance, l);
    }), e.borderWidth !== void 0 && _._api._MontageSettings_SetBorderWidth(this._instance, e.borderWidth), e.fillColor !== void 0 && e.fillColor._use((l) => {
      _._api._MontageSettings_SetFillColor(this._instance, l);
    }), e.font !== void 0) {
      const l = be._getFontFileName(e.font);
      A(l, (d) => {
        _._api._MontageSettings_SetFont(this._instance, d);
      });
    }
    e.fontPointsize !== void 0 && _._api._MontageSettings_SetFontPointsize(this._instance, e.fontPointsize), e.frameGeometry !== void 0 && A(e.frameGeometry.toString(), (l) => {
      _._api._MontageSettings_SetFrameGeometry(this._instance, l);
    }), e.geometry !== void 0 && A(e.geometry.toString(), (l) => {
      _._api._MontageSettings_SetGeometry(this._instance, l);
    }), e.gravity !== void 0 && _._api._MontageSettings_SetGravity(this._instance, e.gravity), e.shadow !== void 0 && _._api._MontageSettings_SetShadow(this._instance, e.shadow ? 1 : 0), e.strokeColor !== void 0 && e.strokeColor._use((l) => {
      _._api._MontageSettings_SetStrokeColor(this._instance, l);
    }), e.textureFileName !== void 0 && A(e.textureFileName, (l) => {
      _._api._MontageSettings_SetTextureFileName(this._instance, l);
    }), e.tileGeometry !== void 0 && A(e.tileGeometry.toString(), (l) => {
      _._api._MontageSettings_SetTileGeometry(this._instance, l);
    }), e.title !== void 0 && A(e.title, (l) => {
      _._api._MontageSettings_SetTitle(this._instance, l);
    });
  }
}
class hc {
  /**
   * Gets or sets the color of the background that thumbnails are composed on.
   */
  backgroundColor;
  /**
   * Gets or sets the frame border color.
   */
  borderColor;
  /**
   * Gets or sets the pixels between thumbnail and surrounding frame.
   */
  borderWidth;
  /**
   * Gets or sets the fill color.
   */
  fillColor;
  /**
   * Gets or sets the label font.
   */
  font;
  /**
   * Gets or sets the font point size.
   */
  fontPointsize;
  /**
   * Gets or sets the frame geometry (width & height frame thickness).
   */
  frameGeometry;
  /**
   * Gets or sets the thumbnail width & height plus border width &amp; height.
   */
  geometry;
  /**
   * Gets or sets the thumbnail position (e.g. Southwest).
   */
  gravity;
  /**
   * Gets or sets the thumbnail label (applied to image prior to montage).
   */
  label;
  /**
   * Gets or sets a value indicating whether drop-shadows on thumbnails are enabled or disabled.
   */
  shadow;
  /**
   * Gets or sets the outline color.
   */
  strokeColor;
  /**
   * Gets or sets the background texture image.
   */
  textureFileName;
  /**
   * Gets or sets the frame geometry (width &amp; height frame thickness).
   */
  tileGeometry;
  /**
   * Gets or sets the montage title.
   */
  title;
  /**
   * Gets or sets the transparent color.
   */
  transparentColor;
  _use(e) {
    const n = new No(this);
    return ce._disposeAfterExecution(n, e);
  }
}
class dc {
  constructor(e, n, r) {
    this.method = e, this.kernel = n, r !== void 0 && (this.kernel += `:${r}`);
  }
  /**
   * Gets or sets the channels to apply the kernel to.
   */
  channels = X.Composite;
  /**
   * Gets or sets the bias to use when the method is Convolve.
   */
  convolveBias;
  /**
   * Gets or sets the scale to use when the method is Convolve.
   */
  convolveScale;
  /**
   * Gets or sets the number of iterations.
   */
  iterations = 1;
  /**
   * Gets or sets built-in kernel.
   */
  kernel;
  /**
   * Gets or sets the morphology method.
   */
  method;
}
class fc {
  /**
   * Initializes a new instance of the {@link Threshold} class.
   * @param minimum The minimum value of the threshold.
   * @param maximum The maximum value of the threshold (or 0 if no maximum).
   */
  constructor(e, n = 0) {
    this.minimum = e, this.maximum = n;
  }
  /**
   * Gets the minimum of this threshold.
   */
  minimum;
  /**
  * Gets the maximum of this threshold.
  */
  maximum;
  /**
   * Convert the threshold to a string.
   */
  toString() {
    return this.maximum === 0 ? this.minimum.toString() : `${this.minimum}-${this.maximum}`;
  }
}
export {
  Os as AlphaAction,
  Yo as AutoThresholdMethod,
  Ze as ChannelPerceptualHash,
  go as ChannelStatistics,
  X as Channels,
  Zs as ChromaticityInfo,
  Vo as ClassType,
  ro as ColorProfile,
  D as ColorSpace,
  Kr as ColorSpaceNames,
  Qr as ColorTransformMode,
  Xo as ColorType,
  ar as CompareResult,
  io as CompareSettings,
  qo as ComplexOperator,
  uc as ComplexSettings,
  Zt as CompositeOperator,
  xo as CompressionMethod,
  Xr as ConfigurationFile,
  ir as ConfigurationFiles,
  sr as ConnectedComponent,
  ao as ConnectedComponentsSettings,
  Xs as DefinesCreator,
  et as Density,
  He as DensityUnit,
  Ko as DistortMethod,
  gc as DistortSettings,
  si as DitherMethod,
  Wo as DngInterpolation,
  Bo as DngOutputColor,
  lc as DngReadDefines,
  zo as DrawableColor,
  qs as DrawableFillColor,
  Ks as DrawableFillOpacity,
  vo as DrawableFont,
  Qs as DrawableFontPointSize,
  ko as DrawableGravity,
  Mo as DrawableLine,
  wo as DrawablePoint,
  yo as DrawableRectangle,
  So as DrawableRoundRectangle,
  Io as DrawableStrokeColor,
  Co as DrawableStrokeWidth,
  Go as DrawableText,
  Po as DrawableTextAlignment,
  lt as DrawableTextAntialias,
  Eo as DrawableTextDecoration,
  Do as DrawableTextInterlineSpacing,
  bo as DrawableTextInterwordSpacing,
  To as DrawableTextKerning,
  Ao as DrawableTextUnderColor,
  jo as Drawables,
  Dt as DrawingWand,
  Qo as Endian,
  Jo as ErrorMetric,
  Oo as EvaluateOperator,
  Zo as FilterType,
  ec as GifDisposeMethod,
  he as Gravity,
  _ as ImageMagick,
  ri as ImageProfile,
  Fo as Interlace,
  tc as Kernel,
  Js as LogEvent,
  Q as LogEventTypes,
  be as Magick,
  k as MagickColor,
  Ro as MagickColors,
  Ot as MagickDefine,
  U as MagickError,
  bt as MagickErrorInfo,
  er as MagickErrorSeverity,
  xe as MagickFormat,
  Re as MagickFormatInfo,
  ne as MagickGeometry,
  re as MagickImage,
  Ee as MagickImageCollection,
  ci as MagickImageInfo,
  De as MagickReadSettings,
  _t as MagickSettings,
  hc as MontageSettings,
  rc as MorphologyMethod,
  dc as MorphologySettings,
  Ye as NativeInstance,
  ic as NoiseType,
  lo as OffsetInfo,
  Lo as Orientation,
  nc as PaintMethod,
  te as Percentage,
  ve as PerceptualHash,
  F as PixelChannel,
  tt as PixelCollection,
  uo as PixelIntensityMethod,
  ac as PixelInterpolateMethod,
  Pe as Point,
  Ue as PrimaryInfo,
  mo as ProgressEvent,
  rr as QuantizeSettings,
  je as Quantum,
  sc as RenderingIntent,
  _r as Statistics,
  oc as TextAlignment,
  cc as TextDecoration,
  fc as Threshold,
  or as TypeMetric,
  _c as VirtualPixelMethod,
  ei as WarningEvent,
  oo as _getEdges,
  ti as _isByteArray,
  Uo as initializeImageMagick
};
