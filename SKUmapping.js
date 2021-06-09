const skuMappings = [
  {
    oldSku: "LOCOM5 US",
    newSku: "LOCOM5(US)",
  },
  {
    oldSku: "NSM5 US",
    newSku: "NSM5(US)",
  },
  {
    oldSku: "NSM2 US",
    newSku: "NSM2(US)",
  },
  {
    oldSku: "UC-C6-CMR",
    newSku: "U-CABLE-C6-CMR",
  },
  {
    oldSku: "UVC-G4-Doorbell",
    newSku: "UVC-G4-Doorbell-us",
  },
  {
    oldSku: "TC-PRO",
    newSku: "UISP-Cable-Pro",
  },
  {
    oldSku: "TC-carrier",
    newSku: "UISP-Cable-Carrier",
  },
  {
    oldSku: "USW-Aggregation-PRO",
    newSku: "USW-PRO-Aggregation",
  },
  {
    oldSku: "UC-Patch-RJ45",
    newSku: "U-Cable-Patch-RJ45",
  },
  {
    oldSku: "UC-Patch-RJ45-BK",
    newSku: "U-Cable-Patch-RJ45-BK",
  },
  {
    oldSku: "UC-Patch-RJ45-BL",
    newSku: "U-Cable-Patch-RJ45-BL",
  },
  {
    oldSku: "UC-Patch-RJ45-50",
    newSku: "U-Cable-Patch-RJ45-50",
  },
  {
    oldSku: "UC-Patch-RJ45-BK-50",
    newSku: "U-Cable-Patch-RJ45-BK-50",
  },
  {
    oldSku: "UC-Patch-RJ45-BL-50",
    newSku: "U-Cable-Patch-RJ45-BL-50",
  },
  {
    oldSku: "UC-Patch-0.3M-RJ45",
    newSku: "U-Cable-Patch-0.3M-RJ45",
  },
  {
    oldSku: "UC-Patch-1M-RJ45",
    newSku: "U-Cable-Patch-1M-RJ45",
  },
  {
    oldSku: "UC-Patch-2M-RJ45",
    newSku: "U-Cable-Patch-2M-RJ45",
  },
  {
    oldSku: "UC-Patch-3M-RJ45",
    newSku: "U-Cable-Patch-3M-RJ45",
  },
  {
    oldSku: "UC-Patch-5M-RJ45",
    newSku: "U-Cable-Patch-5M-RJ45",
  },
  {
    oldSku: "UC-Patch-8M-RJ45",
    newSku: "U-Cable-Patch-8M-RJ45",
  },
  {
    oldSku: "UC-Patch-0.3M-RJ45-BK",
    newSku: "U-Cable-Patch-0.3M-RJ45-BK",
  },
  {
    oldSku: "UC-Patch-1M-RJ45-BK",
    newSku: "U-Cable-Patch-1M-RJ45-BK",
  },
  {
    oldSku: "UC-Patch-2M-RJ45-BK",
    newSku: "U-Cable-Patch-2M-RJ45-BK",
  },
  {
    oldSku: "UC-Patch-3M-RJ45-BK",
    newSku: "U-Cable-Patch-3M-RJ45-BK",
  },
  {
    oldSku: "UC-Patch-5M-RJ45-BK",
    newSku: "U-Cable-Patch-5M-RJ45-BK",
  },
  {
    oldSku: "UC-Patch-8M-RJ45-BK",
    newSku: "U-Cable-Patch-8M-RJ45-BK",
  },
  {
    oldSku: "UC-Patch-0.3M-RJ45-BL",
    newSku: "U-Cable-Patch-0.3M-RJ45-BL",
  },
  {
    oldSku: "UC-Patch-1M-RJ45-BL",
    newSku: "U-Cable-Patch-1M-RJ45-BL",
  },
  {
    oldSku: "UC-Patch-2M-RJ45-BL",
    newSku: "U-Cable-Patch-2M-RJ45-BL",
  },
  {
    oldSku: "UC-Patch-3M-RJ45-BL",
    newSku: "U-Cable-Patch-3M-RJ45-BL",
  },
  {
    oldSku: "UC-Patch-5M-RJ45-BL",
    newSku: "U-Cable-Patch-5M-RJ45-BL",
  },
  {
    oldSku: "UC-Patch-8M-RJ45-BL",
    newSku: "U-Cable-Patch-8M-RJ45-BL",
  },
  {
    oldSku: "810354021336",
    newSku: "UISP-Cable-Carrier",
  },
  {
    oldSku: "810354021367",
    newSku: "UISP-Cable-Pro",
  },
  {
    oldSku: "810354026249",
    newSku: "U-CABLE-C6-CMR",
  },
  {
    oldSku: "817882021401",
    newSku: "NS-WM",
  },
  {
    oldSku: "810354021176",
    newSku: "POE-15-12W",
  },
  {
    oldSku: "810354021183",
    newSku: "POE-24-12W",
  },
  {
    oldSku: "810354021190",
    newSku: "POE-24-12W-G",
  },
  {
    oldSku: "810354021206",
    newSku: "POE-24-24W",
  },
  {
    oldSku: "810354023552",
    newSku: "POE-24-24W-G",
  },
  {
    oldSku: "810354023569",
    newSku: "POE-24-30W",
  },
  {
    oldSku: "810354023316",
    newSku: "POE-24-AF5X",
  },
  {
    oldSku: "810354021213",
    newSku: "POE-48-24W",
  },
  {
    oldSku: "810354021220",
    newSku: "POE-48-24W-G",
  },
  {
    oldSku: "810354021237",
    newSku: "POE-50-60W",
  },
  {
    oldSku: "810354024580",
    newSku: "POE-54V-80W",
  },
  {
    oldSku: "817882025133",
    newSku: "POE-24-7W-G-WH",
  },
  {
    oldSku: "817882024877",
    newSku: "POE-24-12W-5P",
  },
  {
    oldSku: "817882024914",
    newSku: "POE-24-24W-5P",
  },
  {
    oldSku: "810354025723",
    newSku: "EP-54V-150W-AC",
  },
  {
    oldSku: "810354025730",
    newSku: "EP-54V-150W-DC",
  },
  {
    oldSku: "817882020527",
    newSku: "UDC-1",
  },
  {
    oldSku: "817882020534",
    newSku: "UDC-2",
  },
  {
    oldSku: "817882020541",
    newSku: "UDC-3",
  },
  {
    oldSku: "817882020466",
    newSku: "UOC-5",
  },
  {
    oldSku: "817882020459",
    newSku: "UOC-3",
  },
  {
    oldSku: "817882020442",
    newSku: "UOC-2",
  },
  {
    oldSku: "817882020435",
    newSku: "UOC-1",
  },
  {
    oldSku: "817882020428",
    newSku: "UOC-0.5",
  },
  {
    oldSku: "AFI-P-HD",
    newSku: "AFI-P-HD-US",
  },
  {
    oldSku: "UVP-TOUCH",
    newSku: "UVP TOUCH",
  }
]
