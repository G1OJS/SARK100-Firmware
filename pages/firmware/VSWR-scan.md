---
layout: default
title: "VSWR Scanner"
guide: true
permalink: /VSWR-scan/
---
<img src='https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/SWR%20Scan%20640px.png'>
To activate the VSWR Scan, simply press the Scan button when in Impedance mode.

The scan routine uses an internally-set step to find the minimum VSWR in the current band segment, then refines this to a resolution of 1 kHz, and displays an impedance display at that frequency. Exiting the scan mode by pressing the UP key returns to the frequency set before starting the scan.

If the scan routine finds the minimum VSWR to be lower than a threshold (currently set at 2:1 but may be a user option in future), a second step in the scan is activated. The scan searches down and then up, each time starting from the minimum SWR frequency, and finds the first two frequencies (searching down and up) at which the VSWR rises above the threshold. Again, each of these frequencies is refined to a resolution of 1 kHz. The two frequencies are then displayed as in the screen above. These two edge frequencies are allowed to be outside the starting band segment.

to be written 
