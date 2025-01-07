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

To get at $V_r$ we simply note that in *vector* terms, $V_r = V_f - V_z$ , and the magnitude $V_r$ is then $|V_f - V_z|$ .

On the left of the brideg we have $V_f$ which is simply half of the generator voltage and on the right we use
potential divider maths again to get the midpoint voltage. So, with complex-valued calculations inside the |mod| bars, we have

$$V_r = | V_f - 2V_f \frac{Z_l}{Z_l+50}| $$

or 

$$\frac{V_r}{V_f}=|1 - 2 \frac{Z_l}{Z_l+50}| $$

(we can pull $V_f$ out of the |mod| bars because $V_f$ and $2V_f$ have the same phase and so removing them doesn't invalidate the complex calculation. In other words we could set $V_f=1.0+0.0j$ without losing generality.)


## Getting the Load Impedance from the Voltages

<details>
<summary>Method 1</summary>
Looking at the equations for $V_a$ and $V_z$ we can see that they have the same denominator, and both share the multiplier $2V_f$ , so dividing one equation by the other will get rid of these quantities and leave us with 50 and $|Z_l|$ :

$$\frac{V_z}{V_a}=\frac{|Z_l|}{50}$$

So we can easily get 

$$|Z_l| = 50 \frac{V_z}{V_a}$$ 

which gives us the magnitude of the unknown impedance. What about the phase of $V_z$ ? Or at least the magnitude of its reactance?
If we look again at the equation for $V_r$ above, we can rearrange to get a single fraction as follows:

$$V_r = | 1 - 2 \frac{Z_l}{Z_l+50}| = | \frac{(Z_l+50) -2Z_l}{Z_l+50}| = |\frac{50-Z_l}{50+Z_l}| $$

Remember that this was for the case where $V_f=1$ and our general equation is thus 

$$\frac{V_r}{V_f}=|\frac{50-Z_l}{50+Z_l}| $$

The right hand side of this equation is recognizable as the magnitude of the complex reflection coefficient:

$$|\frac{50-Z_l}{50+Z_l}|=|\Gamma|=\rho$$

And VSWR can be calculated as

$$VSWR=\frac{1+\rho}{1-\rho}$$

Once we know VSWR as well as |Z|, we can calculate Re(Z) and Im(Z).

~ Work in progress ~

</details>

<details>
<summary>Method 2</summary>
Just as in Method 1, it is relatively trivial to get to 

$$|Z_l| = 50 \frac{V_z}{V_a}$$ 

and with a little more thought

$$\frac{V_r}{V_f}=|\frac{50-Z_l}{50+Z_l}| $$

Once we have these two equations, we know the scalar quantity $|Z_l|$ and the relationship between the *complex* impedance, 50, and $\frac{V_r}{V_f}$

As we know $|Z_l|$, we can substitute $Z_l$ in the second equation with $|Z_l|{e}^{j\theta}$

$$\frac{V_r}{V_f}=|\frac{50-|Z_l|{e}^{j\theta}}{50+|Z_l|{e}^{j\theta}}| $$

It can be shown that if

$$A=\frac{1-{e}^{j\theta}}{1+{e}^{j\theta}}$$ 

Then 

$$\theta=-j\log{\frac{1-A}{1+A}}$$ 




