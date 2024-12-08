# Successfully editing SARK100 Firmware in 2024

The TL:DR here is to install PSoC Designer V5.0 rather than any later version. For some reason although versions up to at least 5.4 will successfully build the code, the SARK100 will freeze or behave oddly once the firmware tries to write to the EEPROM.

It's important to get the source code from sourceforge rather than GitHub, because a crucial file is missing from the GitHub archives. The starting point I used was V13 from [SARK100 files at Sourceforge](https://sourceforge.net/projects/sark100swranaly/files/). The missing file is PSocConfig.xml which contains the "wiring diagram" that PSoC Designer needs plus a lot of necessary component parameters.

## How to install PSoC designer V5.0 under Windows 10
What worked for me ...
1. Note that the make routines in PSoC designer can't cope with paths that have a space in them *unless* "8dot3" file name creation is enabled in Windows (which provides a space-free versionb for PD to use). And, the install folder (which is below the one you can set in the installer) has a space in it! In my case, 8dot3 path names weren't enabled and I had to enable it and recreate the install locations (because otherwise they kept their previous path names). So, before you install anything!:

2. Run regedit and find the key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem, and set the value of NtfsDisable8dot3NameCreation to 0

Then,
1. Install SVG Viewer (zip file link is [here on Infineon Community Forum](https://community.infineon.com/t5/PSoC-5-3-1/Adobe-SVG-viewer-not-available-and-PD-5-4-SP1-won-t-work/m-p/77237#M10104)) otherwise things don't display properly and if I remember correctly the PD hangs on a script error that can't be fixed.
2. Install [PSoCProgrammerSetup_3.24.2.b2254_RS](https://itools.infineon.com/archive/PSoCProgrammerSetup_3.24.2.b2254_RS.exe) (don't use a later version or PD will infinitely hang when launching on a couple of components).
3. Install [PSoC_Designer_5.0_Service_Pack_6](https://itools.infineon.com/archive/PSoC_Designer_5.0_Service_Pack_6.zip)

Once it's installed, launch PSoC Designer, use open Project/Workspace (not file) and find and open SARK100_SwrAnalyzer_BL.app
