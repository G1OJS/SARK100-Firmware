---
layout: default
mathjax: true
title: "Issues with Calculating Load Impedance from Bridge Voltages"
permalink: /LoadImpCalcIssues/
---

Whilst it is relatively straightforward to [calculate the complex load impedance](https://github.com/G1OJS/G1OJS-MR300-SARK100-Firmware/blob/1a48a22cbbbc3ff55b7672c966618ecf135c9ec9/pages/Bridge%20Voltages%20to%20Load%20Impedance.md) from just the bridge voltage *magnitudes*, this is subject to a few imprecisions and uncertainties. Measuring the voltage magnitudes involves some kind of diode detector, and these are subject to nonlinearities which must be callibrated out, and it is diffuclt to determine the sign of X with certainty, making onward calculations subject to uncertainty. This last point makes it difficult to apply correction factors to remove the effects of stray capacitance for example. Whilst the mathematical independence of $V_r$ from $V_z$ and $V_a$ allows us to determine the complex load from the magnitude, errors in $V_r$ relative to $V_z$ and $V_a$ can again introduce uncertainties.

Whichever form of equation is used to calculate R (either direct from bridge voltages or going first via VSWR), the logical dependence is the same; $V_z$ and $V_a$ give us the magnitude of the impedance, and $V_r$ and $V_f$ give us the magnitude of the reflection coefficient. Anyone who knows about [Smith Charts](https://leleivre.com/rf_smith.html) will know that a circle placed around the chart centre represents a locus of constant magnitude of the reflection coefficient. Less commonly seen is the other piece of information we need; the locus of constant magnitude of impedance. It is where these two loci intersect that we find our solution(s) for complex $Z_load$. 

The familiar lines on the Smith Chart show the intersecting loci of constant real part and constant imaginary part of the complex impedance, but they don't immediately convey the magnitude of that impedance. The diagram below shows the two magnitude loci and their intersections, within a circle representing the boundary of a Smith Chart. 

![Figure showing concentric circles of constant |Gamma| together with loci of constant |Z|](https://github.com/G1OJS/G1OJS-MR300-SARK100-Firmware/blob/8639cfaa215562dc22150d9b16aa0739d18e51b3/assets/img/Figure_2%20ModZ%20and%20ModG.png)

