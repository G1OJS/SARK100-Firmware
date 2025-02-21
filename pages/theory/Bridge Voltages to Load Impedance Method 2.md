---
layout: default
mathjax: true
title: "Converting Bridge Voltages to Load Impedance: Method 2"
permalink: /BridgeVoltagesToImpedance2/
---

  <p>Note that the RHS of Eq4 is the magnitude of the reflection coefficient, or $\rho$ </p>

  <p>So Eq7 from the explanation above (expand it if it's closed) is </p>
  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$\frac{(R-50)^2+X^2}{(R+50)^2+X^2}=\frac{\vert Z_l\vert ^2-100R+2500}{\vert Z_l\vert ^2+100R+2500}=\rho^2$$</td></tr></table>
  </div>
  <div  style='clear:both'></div>

  <p> $\rho$ is related to VSWR by $\rho=\frac{VSWR-1}{VSWR+1}$ so $\rho^2$ is </p>
   
  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$\frac{(VSWR^2+1)-2VSWR}{(VSWR^2+1)+2VSWR} = \frac{(R-50)^2+X^2}{(R+50)^2+X^2}=\frac{\vert Z_l\vert ^2-100R+2500}{\vert Z_l\vert ^2+100R+2500}$$</td></tr></table>
  </div>
  <div  style='clear:both'></div>

  <p>Which can be rearranged to give</p>

  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$R = (2500+\vert Z_l\vert ^2)\frac{VSWR}{50(VSWR^2+1)}$$</td></tr></table>
  </div>
  <div  style='clear:both'></div>

  <p>VSWR is given by $\frac{1+\rho}{1-\rho}$ which can be combined with Eq4 to give</p>

  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$VSWR = \frac{V_f-V_r}{V_f+V_r}$$</td></tr></table>
  </div>
  <div  style='clear:both'></div>

  <p> So, with an interim step of calculating VSWR, we have:</p>

</details>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$R = (2500+\vert Z_l\vert ^2)\frac{VSWR}{50(VSWR^2+1)}$$</td></tr></table>
</div>
<div  style='clear:both'></div>

<p>where</p> 

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$VSWR = \frac{V_f-V_r}{V_f+V_r}$$</td></tr></table>
</div>
<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$X = \pm\sqrt{(50\frac{V_z}{V_a})^2 - R^2}$$</td></tr></table>
</div>
<div  style='clear:both'></div>

