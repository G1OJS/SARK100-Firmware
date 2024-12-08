# Successfully editing SARK100 Firmware in 2024 on Windows 10
The manual for the SARK100 contains instructions on how to edit the firmware. Unfortunately, software environments have moved on a lot since those instructions were written and it is not easy to work out how to get things working. You'll need a copy of PSoC Designer V5.0 as mentioned in the manual, but also need to follow the instructions below.

Don't be tempted to install later versions of PSoC Designer than V5.0. For some reason although versions up to at least 5.4 will successfully build the code, the SARK100 will freeze or behave oddly once the firmware tries to write to the EEPROM. It *may* be possible to fix this, but I've not been able to after spending whole days on it and scouring the Infineon Community Forum.

It's important to get the SARK100 source code from Sourceforge rather than GitHub, because a crucial file is missing from the GitHub archives. The starting point I used was V13 from [SARK100 files at Sourceforge](https://sourceforge.net/projects/sark100swranaly/files/). The missing file is PSocConfig.xml which contains the "wiring diagram" that PSoC Designer needs plus a lot of necessary component parameters.

## How to install PSoC designer V5.0 under Windows 10
What worked for me ...
1. Note that the make routines in PSoC designer can't cope with paths that have a space in them *unless* "8dot3" file name creation is enabled in Windows (which provides a space-free versionb for PD to use). And, the install folder (which is below the one you can set in the installer) has a space in it! In my case, 8dot3 path names weren't enabled and I had to enable it and recreate the install locations (because otherwise they kept their previous path names). So, before you install anything!:

2. Run regedit and find the key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem, and set the value of NtfsDisable8dot3NameCreation to 0

Then,
1. Install SVG Viewer (zip file link is [here on Infineon Community Forum](https://community.infineon.com/t5/PSoC-5-3-1/Adobe-SVG-viewer-not-available-and-PD-5-4-SP1-won-t-work/m-p/77237#M10104)) otherwise things don't display properly and if I remember correctly the PD hangs on a script error that can't be fixed.
2. Install [PSoCProgrammerSetup_3.24.2.b2254_RS](https://itools.infineon.com/archive/PSoCProgrammerSetup_3.24.2.b2254_RS.exe) (don't use a later version or PD will infinitely hang when launching on a couple of components).
3. Install [PSoC_Designer_5.0_Service_Pack_6](https://itools.infineon.com/archive/PSoC_Designer_5.0_Service_Pack_6.zip)

Once it's installed, launch PSoC Designer, use open Project/Workspace (not file) and find and open SARK100_SwrAnalyzer_BL.app

## If flashing the firmware goes wrong ...
Twice I thought I'd broken it - here's how I fixed it.
1. Sometimes the flash fails

## If you can't obtain the files above ...

I've made a copy of as much as I can [here](https://github.com/G1OJS/SARK100-Firmware/tree/4fab97640a3294f12039db623c3936002f6dfa6a/PSoC%20Designer%20V5%20installation%20files) and [here](https://github.com/G1OJS/SARK100-Firmware/tree/4fab97640a3294f12039db623c3936002f6dfa6a/SARK100%20Firmware)

The only ones missing are the installers for PSoC Designer and PSoC Programmer, which are way too big to upload to GitHub.
