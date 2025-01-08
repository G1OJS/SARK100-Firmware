---
layout: default
mathjax: true
title: "Issues with Calculating the Complex Load Impedance In Unbalanced RF Wheatstone Bridges"
permalink: /LoadImpCalcIssues/
---

Whilst it is relatively straightforward to [calculate the complex load impedance](https://github.com/G1OJS/G1OJS-MR300-SARK100-Firmware/blob/1a48a22cbbbc3ff55b7672c966618ecf135c9ec9/pages/Bridge%20Voltages%20to%20Load%20Impedance.md) from just the bridge voltage *magnitudes*, this is subject to a few imprecisions and uncertainties. Measuring the voltage magnitudes involves some kind of diode detector, and these are subject to nonlinearities which must be callibrated out, and it is diffuclt to determine the sign of X with certainty, making onward calculations subject to uncertainty. This last point makes it difficult to apply correction factors to remove the effects of stray capacitance for example. Whilst the mathematical independence of $V_r$ from $V_z$ and $V_a$ allows us to determine the complex load from the magnitude, errors in $V_r$ relative to $V_z$ and $V_a$ can again introduce uncertainties.

Whichever form of equation is used to calculate R (either direct from bridge voltages or going first via VSWR), the logical dependence is the same; $V_z$ and $V_a$ give us the magnitude of the impedance, and $V_r$ and $V_f$ give us the magnitude of the reflection coefficient. Anyone who knows about [Smith Charts](https://leleivre.com/rf_smith.html) will know that a circle placed around the chart centre represents a locus of constant magnitude of the reflection coefficient. Less commonly seen is the other piece of information we need; the locus of constant magnitude of impedance. It is where these two loci intersect that we find our solution(s) for complex $Z_load$. 

The familiar lines on the Smith Chart show the intersecting loci of constant real part and constant imaginary part of the complex impedance, but they don't immediately convey the magnitude of that impedance. The diagram below shows the two magnitude loci and their intersections, within a circle representing the boundary of a Smith Chart. 

![Figure showing concentric circles of constant |Gamma| together with loci of constant |Z|](https://github.com/G1OJS/G1OJS-MR300-SARK100-Firmware/blob/8639cfaa215562dc22150d9b16aa0739d18e51b3/assets/img/Figure_2%20ModZ%20and%20ModG.png)

|Z| ranges from a normalised value of 0.1 to 10, (5 ohms to 500 Ohms in a 50 ohm system). These extremes show loci centred around the familiar short circuit point on the left, 
and open circuit point on the right, respectively. |Gamma| ranges from 0.1 to 0.75, representing a VSWR of ~1.22 to 7.0.

The diagram is symmetric when reflected in the X axis, becaue there are, in general, two values of complex impedance satisfying |Gamma| = A and |Z| = B that are distinguished only by changing the sign of X, which corresponds to reflection in the x axis of the chart.

Note that these loci are *not* orthogonal. In other words they don't always intersect at right angles and in fact become parallel when the reactance of the load is zero (i.e. lies on the x axis). For impedances in this region, a small change in meaasured |Gamma| or/and |Z| will lead to a large change in X compared to what happens for impedances with larger reactances. 

Worse than this, however, is that if |Gamma| contains errors such that $|\gamma| < \frac{|Z_l-Z_0|}{|Z_L+Z_0|}$ , the loci will not intersect at all. When this happens, it appears that R > |Z|. This is a physical impossibility, which begs the question of how to present these numbers on a display value or on a chart, and if we then try to calculate X we will find that it takes an imaginary value because it becomes the square root of a negative quantity; another quandry for presentation. The easiest way around this is to (quietly!) enforce the condition that R<|Z| and calculate X from the 'capped' value of R. This makes everything appear fine, but doesn't address the underlying issue.

To summarise, the issues we have to address include:
- How to calibrate out the offsets and nonlinearities in the detectors for $V_f, V_r, V_z, V_a$ (each of which will be different and vary with frequency and load impedance)
- What to do when R appears to be greater than |Z|
- What to do about the uncertainty of the sign of X








