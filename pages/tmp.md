---
layout: default
mathjax: true
title: "Converting Bridge Voltages to Load Impedance"
permalink: /tmp/
---

# Introduction
  
Much of the online material about Wheatstone bridges focusses on the case where the bridge is balanced, or nearly balanced ($\vert Z_l\vert$ ~ 50 ohms in this case). 
In an instrument that uses a bridge with fixed reference resistors to measure unknown impedance values, we need to work out the unknown impedance from measurements on an unbalanced bridge. The diagram below shows a generic case of such a bridge. 

When using detectors that respond to amplitude only, there are *three* independent voltages that can be measured, shown as $V_r$ , $V_z$  and $V_a$ . 
These three voltages are all *dependent* on $V_f$ (or $2V_f$, the generator voltage, if that's easier to visualise). 
$V_z$ and $V_a$ are independent from each other because, whilst in vector terms $2V_f = V_z + V_a$, the 
magnitude of these quantities does not follow this rule if $Z_l$ is not a pure resistance. 

<img src='https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Generic%20Wheatstone%20Bridge.png' alt='Circuit diagram of a Wheatstone Bridge showing location of voltage measurements'>

**From here onwards, assume that all voltages are scalar quantities (i.e. refer to the magnitude of the complex voltage) unless stated otherwise.**

# Bridge Voltage Magnitudes
<details>
  <summary>Explanation</summary>
  
  We can calculate the expected magnitude of these voltages as follows.
  
  <p>$V_a$ and $V_z$ are voltages across the two impedances of a simple potential divider, albeit with one of the impedances potentially complex.</p>
  
  If, for example, $2V_f$ is 1.0, the magnitude of the current flowing through the load and upper resistor 
  will be $\frac{1}{\vert Z_l+50\vert }$ 

  Multiplying this by 50 for the upper resistor and 
  and  $\vert Z_l\vert $ for the unknown load gives the magnitude of the voltages 
  relative to $2V_f$. Hence, 
  <br>
  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$V_a=2V_f\frac{50}{\vert Z_l+50\vert }$$</td></tr></table>
  </div>
  <div  style='clear:both'><br></div>
  and 
  <br>
  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$V_z=2V_f\frac{\vert Z_l\vert }{\vert Z_l+50\vert }$$</td></tr></table>
  </div>
  <div  style='clear:both'><br></div>

  To get at $V_r$ we simply note that in *vector* terms, $V_r = V_f - V_z$ , and the magnitude $V_r$ is then $\vert V_f - V_z\vert $ .

  On the left of the bridge we have $V_f$, and on the right we use potential divider maths again to get the midpoint voltage. 
  Then, with complex-valued calculations inside the $\vert mod\vert $ bars, we have

  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$V_r = \vert  2V_f \frac{Z_l}{Z_l+50} - V_f\vert $$</td></tr></table>
  </div>
  <div  style='clear:both'><br></div>

  so our three equations are:
  
</details>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq1</td><td style='border:none;'>$$V_a=2V_f\frac{50}{\vert Z_l+50\vert }$$</td></tr></table>
</div>
<div  style='float:left'>
  <table style='border:none;'><tr><td style='border:none;'>Eq2</td> <td style='border:none;'>$$V_z=2V_f\frac{\vert Z_l\vert }{\vert Z_l+50\vert }$$</td></tr></table>
</div>
<div  style='float:left'>
  <table style='border:none;'><tr><td style='border:none;'>Eq3</td><td style='border:none;'>$$V_r = \vert  2V_f \frac{Z_l}{Z_l+50} - V_f\vert $$</td></tr></table>
</div>
<div  style='clear:both'><br></div>

# Calculating Impedance
## Step 1 - three voltages to two voltage ratios
<details>
<summary>Explanation</summary>
Looking at equations 1 and 2, we can see that they have the same denominator, and both share the multiplier $2V_f$ , so dividing one equation by the other will get rid of these quantities and leave us with $\frac{V_z}{V_a}=\frac{\vert Z_l\vert }{50}$which gives us the magnitude of the unknown impedance. 

To get the complex impedance, we need an equation that contains it directly rather than inside \vert mod\vert bars. If we look again at the equation for $V_r$ above, we can rearrange to get a single fraction as follows:

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$\frac{V_r}{V_f} = \vert  2 \frac{Z_l}{Z_l+50} - 1 \vert  = \vert  \frac{2Z_l - (Z_l+50)}{Z_l+50}\vert  = \vert \frac{Z_l-50}{Z_l+50}\vert  $$</td></tr></table>
</div>
<div  style='clear:both'><br></div>

So we have:

</details>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq4</td><td style='border:none;'>$$\frac{V_r}{V_f}=\vert \frac{Z_l-50}{Z_l+50}\vert $$</td></tr></table>
</div>
<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq5</td><td style='border:none;'>$$\frac{V_z}{V_a}=\frac{\vert Z_l\vert }{50} $$</td></tr></table>
</div>
<div  style='clear:both'><br></div>


## Step 2 - Calculating the Load Impedance
R and X can be calculated directly from the bridge voltage measurements as 
<details>
<summary>Explanation</summary>
   
The RHS of Eq4 with $Z_l = R+jX$ is 

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$\vert \frac{R-50+jX}{R+50+jX}\vert $$</td></tr></table>
</div>
<div  style='clear:both'><br></div>

Squaring the modulus $\vert a+jb\vert $gives $a^2+b^2$, so squaring top and bottom of the equation above gives

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq6</td><td style='border:none;'>$$\frac{(R-50)^2+X^2}{(R+50)^2+X^2}=\frac{R^2-100R+2500+X^2}{R^2+100R+2500+X^2}$$</td></tr></table>
</div>
<div  style='clear:both'><br></div>

But $R^2+X^2 = \vert Z_l\vert ^2$so 

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq7</td><td style='border:none;'>$$\frac{(R-50)^2+X^2}{(R+50)^2+X^2}=\frac{\vert Z_l\vert ^2-100R+2500}{\vert Z_l\vert ^2+100R+2500}$$</td></tr></table>
</div>
<div  style='clear:both'><br></div>


Which can be solved to give

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$R = \frac{\vert Z_l\vert ^2+50^2}{100}\frac{1-(\frac{V_r}{V_f})^2}{1+(\frac{V_r}{V_f})^2}$$</td></tr></table>
</div>
<div  style='clear:both'><br></div>

Now that we know $R$ as well as $\vert Z_l\vert $, we can use $X=\sqrt(\vert Z_l\vert ^2-R^2)$to get the complex impedance and VSWR.

We can rewrite these equations to use the bridge voltages directly:

</details>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$R = \frac{(50\frac{V_z}{V_a})^2+50^2}{100}  \frac{1-\frac{V_r}{V_f})^2}{1+(\frac{V_r}{V_f})^2}$$</td></tr></table>
</div>
<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$X = \pm\sqrt{(50\frac{V_z}{V_a})^2 - R^2}$$</td></tr></table>
</div>
<div  style='clear:both'><br></div>

Alternatively, we can calculate VSWR and then derive R and X from VSWR and $\vert Z_l\vert $ 

<details>
  <summary>Explanation</summary>
  
  Note that the RHS of Eq4 is the magnitude of the reflection coefficient, or $\rho$ 

  So Eq7 from the explanation above (expand it if it's closed) is 
  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$\frac{(R-50)^2+X^2}{(R+50)^2+X^2}=\frac{\vert Z_l\vert ^2-100R+2500}{\vert Z_l\vert ^2+100R+2500}=\rho^2$$</td></tr></table>
  </div>
  <div  style='clear:both'><br></div>

  $\rho$ is related to VSWR by $\rho=\frac{VSWR-1}{VSWR+1}$ so $\rho^2$ is 
   
  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$\frac{(VSWR^2+1)-2VSWR}{(VSWR^2+1)+2VSWR} = \frac{(R-50)^2+X^2}{(R+50)^2+X^2}=\frac{\vert Z_l\vert ^2-100R+2500}{\vert Z_l\vert ^2+100R+2500}$$</td></tr></table>
  </div>
  <div  style='clear:both'><br></div>

  Which can be rearranged to give

  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$R = (2500+\vert Z_l\vert ^2)\frac{VSWR}{50(VSWR^2+1)}$$</td></tr></table>
  </div>
  <div  style='clear:both'><br></div>

  VSWR is given by $\frac{1+\rho}{1-\rho}$ which can be combined with Eq4 to give

  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$VSWR = \frac{V_f-V_r}{V_f+V_r}$$</td></tr></table>
  </div>
  <div  style='clear:both'><br></div>

  So, with an interim step of calculating VSWR, we have:

</details>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$R = (2500+\vert Z_l\vert ^2)\frac{VSWR}{50(VSWR^2+1)}$$</td></tr></table>
</div>
<div  style='clear:both'><br></div>

where 

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$VSWR = \frac{V_f-V_r}{V_f+V_r}$$</td></tr></table>
</div>
<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$X = \pm\sqrt{(50\frac{V_z}{V_a})^2 - R^2}$$</td></tr></table>
</div>
<div  style='clear:both'><br></div>

</html>

