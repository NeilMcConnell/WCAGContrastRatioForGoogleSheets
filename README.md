# WCAGContrastRatioForGoogleSheets
Calculates WCAG Contrast ratio, designed to be dropped into google sheets

I was planning to publish this as a free add-on for google sheets, but google really doesn't make that easy

the code is javascript, and can be added to a google sheets document by going to Extensions -> Apps Script, and then pasting in the contents of the contrastratio.js file.

To calculate a contrast ratio, use the function WCAGContrastRatio(color1, color2).  Color1 & color2 can be 3 or 6 character color hex codes
Example
=WCAGContrastRatio("42AC77", "213fe2")


Code follows what's specified here:
//from https://www.w3.org/WAI/GL/wiki/Contrast_ratio
//from https://www.w3.org/WAI/GL/wiki/Relative_luminance

