//from https://www.w3.org/WAI/GL/wiki/Relative_luminance
function WCAGRelativeLuminance(color)
{
  if (Number.isFinite(color))
  {
    color = color.toString(10);
  }

  if (typeof color != 'string')
  {
    throw "Expected color as a string";
  }

  if (color.startsWith("#"))
  {
    color = color.substring(1);
  }

  if (color.length ==3)
  {
    RsRGB = parseInt(color.substring(0,1), 16) / 15.0;
    GsRGB = parseInt(color.substring(1,2), 16) / 15.0;
    BsRGB = parseInt(color.substring(2,3), 16) / 15.0;
  }
  else if (color.length == 6)
  {
    RsRGB = parseInt(color.substring(0,2), 16) / 255.0;
    GsRGB = parseInt(color.substring(2,4), 16) / 255.0;
    BsRGB = parseInt(color.substring(4,6), 16) / 255.0;
  }
  else
  {
    throw "Could not parse color";
  }

  R = (RsRGB <= 0.03928) ? (RsRGB / 12.92) : Math.pow((RsRGB+0.055)/1.055, 2.4);
  G = (GsRGB <= 0.03928) ? (GsRGB / 12.92) : Math.pow((GsRGB+0.055)/1.055, 2.4);
  B = (BsRGB <= 0.03928) ? (BsRGB / 12.92) : Math.pow((BsRGB+0.055)/1.055, 2.4);

  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

//from https://www.w3.org/WAI/GL/wiki/Contrast_ratio
function WCAGContrastRatio(color1, color2)
{
  let L1 = WCAGRelativeLuminance(color1);
  let L2 = WCAGRelativeLuminance(color2);
  return (L1 > L2) ? (L1+0.05) / (L2+0.05) : (L2+0.05) / (L1+0.05)
}