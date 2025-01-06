---
layout: default
mathjax: true
title: "RF Directional Wheastone Bridge Analysis"
permalink: /RF-Directional-Wheastone-Bridge-Analysis/
---

# Converting Bridge Voltages to Load Impedance
Much online material about Wheatstone bridges focusses on the case where the bridge is balanced, or near balanced ($Z_l$ ~ 50 ohms in this case). However, in an instrument that uses a bridge with fixed reference resistors to measure unknown impedance values, we need to work out the unknown impedance from measurements on an unbalanced bridge. 

The diagram below shows a generic case of such a bridge. 

When using detectors that respond to amplitude only, there are *three* independent voltages that can be measured, shown as $V_r$ , $V_z$  and $V_a$ . These three voltages are all *dependent* on $V_f$ (or $2V_f$, the generator voltage, if that's easier to visualise). 

$V_z$ and $V_a$ are independent from each other because, whilst in vector terms $2V_f = V_z + V_a$, the magnitude of these quantities does not follow this rule if $Z_l$ is not a pure resistance. 

**From here onwards, assume that all voltages are scalar quantities (i.e. refer to the magnitude of the complex voltage) unless stated otherwise.**

## Expected Bridge Voltages

![Circuit diagram of a Wheatstone Bridge showing location of voltage measurements](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Generic%20Wheatstone%20Bridge.png)

We can calculate the expected magnitude of these voltages as follows.

$V_a$ and $V_z$ are voltages across the two impedances of a simple potential divider, albeit with one of the impedances potentially complex. 
If, for example, $2V_f$ is 1.0, the magnitude of the current flowing through the load and upper resistor 
will be $\frac{1}{|Z_l+50|}$ 

Multiplying this by 50 for the upper resistor and 
and $|Z_L|$ for the unknown load gives the magnitude of the voltages 
relative to $2V_f$ . Hence,
   
$$V_a=2V_f\frac{50}{|Z_l+50|}$$

and 

$$V_z=2V_f\frac{|Z_l|}{|Z_l+50|}$$

To get at $V_r$ we note that if we stay with complex voltages a while longer, we can use (complex)
 $V_r = V_z - V_f$ and so the magnitude of $V_r$ 
that we will measure is the magnitude of that difference, i.e.

$$V_r = | V_f - 2V_f \frac{Z_l}{Z_l+50}| $$

Notice that whilst we said that $V_f$ and $V_r$ are scalar quantities, the subtraction is a vector one because we don't take the modulus until after the subtraction.

## Working out Z

### 1 - Magnitude of Z
Looking at the equations for $V_a$ and $V_z$ we can see that they have the same denominator, and both share the multiplier $2V_f$ , so dividing one equation by the other will get rid of these quantities and leave us with 50 and $|Z_l|$ :

$$\frac{V_z}{V_a}=\frac{|Z_l|}{50}$$

So we can easily get $|Z_l| = 50 \frac{V_z}{V_a}$ which gives us the magnitude of the unknown impedance.

### 2 - Complex Z
So what about the phase of $V_z$ ? Or at least the magnitude of its reactance?
If we look again at the equation for $V_r$ and remember that the voltages here are scalar quantities, we can divide through by $V_f$ to get:



~ Work in progress ~
