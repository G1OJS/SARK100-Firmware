---
layout: default
mathjax: true
title: "Converting Bridge Voltages to Load Impedance"
permalink: /BridgeVoltagesToImpedance/
---
# Introduction
Much of the online material about Wheatstone bridges focusses on the case where the bridge is balanced, or near balanced ($Z_l$ ~ 50 ohms in this case). 

In an instrument that uses a bridge with fixed reference resistors to measure unknown impedance values, we need to work out the unknown impedance from measurements on an unbalanced bridge. The diagram below shows a generic case of such a bridge. 

When using detectors that respond to amplitude only, there are *three* independent voltages that can be measured, shown as $V_r$ , $V_z$  and $V_a$ . These three voltages are all *dependent* on $V_f$ (or $2V_f$, the generator voltage, if that's easier to visualise). $V_z$ and $V_a$ are independent from each other because, whilst in vector terms $2V_f = V_z + V_a$, the magnitude of these quantities does not follow this rule if $Z_l$ is not a pure resistance. 
![Circuit diagram of a Wheatstone Bridge showing location of voltage measurements](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Generic%20Wheatstone%20Bridge.png)

**From here onwards, assume that all voltages are scalar quantities (i.e. refer to the magnitude of the complex voltage) unless stated otherwise.**

# Bridge Voltage Magnitudes
<details>
<summary>Explanation</summary>
<p>We can calculate the expected magnitude of these voltages as follows.</p>
<p>$V_a$ and $V_z$ are voltages across the two impedances of a simple potential divider, albeit with one of the impedances potentially complex.</p>
<p>If, for example, $2V_f$ is 1.0, the magnitude of the current flowing through the load and upper resistor 
will be $\frac{1}{|Z_l+50|}$ </p>

<p>Multiplying this by 50 for the upper resistor and 
and $|Z_L|$ for the unknown load gives the magnitude of the voltages 
relative to $2V_f$ . Hence,</p>
   
$$V_a=2V_f\frac{50}{|Z_l+50|}$$

<p>and</p> 

$$V_z=2V_f\frac{|Z_l|}{|Z_l+50|}$$

<p>To get at $V_r$ we simply note that in *vector* terms, $V_r = V_f - V_z$ , and the magnitude $V_r$ is then $|V_f - V_z|$ .</p>

<p>On the left of the bridge we have $V_f$, and on the right we use potential divider maths again to get the midpoint voltage.</p> 
<p>Then, with complex-valued calculations inside the |mod| bars, we have</p>

$$V_r = | 2V_f \frac{Z_l}{Z_l+50} - V_f|$$

<p>so our three equations are:</p>
</details>
<table>
   <tr>
      <th>Eq 1</th><th>Eq 2</th>
   </tr>
   <tr>
      <td>$$V_a=2V_f\frac{50}{|Z_l+50|}$$</td>
      <td>$$V_z=2V_f\frac{|Z_l|}{|Z_l+50|}$$</td>
   </tr>
</table>

<table>
   <tr>
      <th>Eq 3</th>
   </tr>
   <tr>
    <td>$$V_r = | 2V_f \frac{Z_l}{Z_l+50} - V_f|$$</td>
   </tr>
</table>

# Calculating Impedance
## Step 1 - three voltages to two voltage ratios
<details>
<summary>Explanation</summary>
<p>Looking at equations 1 and 2, we can see that they have the same denominator, and both share the multiplier $2V_f$ , so dividing one equation by the other will get rid of these quantities and leave us with $\frac{V_z}{V_a}=\frac{|Z_l|}{50}$ which gives us the magnitude of the unknown impedance. </p>

<p>To get the complex impedance, we need an equation that contains it directly rather than inside |mod| bars. If we look again at the equation for $V_r$ above, we can rearrange to get a single fraction as follows:</p>

$$\frac{V_r}{V_f} = | 2 \frac{Z_l}{Z_l+50} - 1 | = | \frac{2Z_l - (Z_l+50)}{Z_l+50}| = |\frac{Z_l-50}{Z_l+50}| $$

<p>So we have:</p>

</details>

<table>
   <tr>
      <th>Eq 4</th><th>Eq 5</th>
   </tr>
   <tr>
      <td>$$\frac{V_r}{V_f}=|\frac{Z_l-50}{Z_l+50}|$$</td>
      <td>$$\frac{V_z}{V_a}=\frac{|Z_l|}{50} $$</td>
   </tr>
</table>
<p>There are at least two ways to get from here to the complex load impedance.</p>

## Step 2 - Calculating the Load Impedance 

### Method 1 Work in progress
<details>
<summary>Explanation</summary>

<p>The final right hand side of the equation for $\frac{V_r}{V_f}$ is recognizable as the magnitude of the complex reflection coefficient:</p>

$$|\frac{Z_l-50}{Z_l+50}|=|\Gamma|=\rho$$

<p>And VSWR can be calculated as</p>

$$VSWR=\frac{1+\rho}{1-\rho}$$

<p>Once we know VSWR as well as |Z|, we can calculate Re(Z) and Im(Z).</p>

~ Work in progress ~

</details>

### Method 2
<details>
<summary>Explanation</summary>
<p>If we express the unknown impedance as $Z_l=R+iX$ we can write the equation for $\frac{V_r}{V_f}$ as </p>


$$\frac{V_r}{V_f}=|\frac{R+iX-50}{R+iX+50}|$$

<p>which means</p>

$$(\frac{V_r}{V_f})^2=\frac{(R-50)^2+X^2}{(R+50)^2+X^2} = \frac{R^2+50^2-100R+X^2}{R^2+50^2+100R+X^2}$$

<p>We already know $|Z|^2$ so we can use this instead of $R^2+X^2$ :</p>

$$(\frac{V_r}{V_f})^2= \frac{|Z|^2+50^2-100R}{|Z|^2+50^2+100R}$$

<p>Which can be solved to give</p>

$$R = \frac{|Z|^2+50^2}{100}\frac{1-(\frac{V_r}{V_f})^2}{1+(\frac{V_r}{V_f})^2}$$

<p>Now that we know $R$ as well as $|Z_l|$, we can use $X=\sqrt(|Z_l|^2-R^2)$ to get the complex impedance.</p>

<p>We can rewrite these equations to use the bridge voltages directly:</p>

</details>

<table>
   <tr>
      <th>Re(Z)</th><th>Im(Z)</th>
   </tr>
   <tr>
      <td>$$R = \frac{(50\frac{V_z}{V_a})^2+50^2}{100}  \frac{1-(\frac{V_r}{V_f})^2}{1+(\frac{V_r}{V_f})^2}$$</td>
      <td>$$X = \pm\sqrt{(50\frac{V_z}{V_a})^2 - R^2}$$</td>
   </tr>
</table>




