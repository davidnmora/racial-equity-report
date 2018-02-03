const data = [{county: "Alamance County", medianIncome:  31451},
{county: "Alexander County", medianIncome:  44750},
{county: "Alleghany County", medianIncome:  "-"},
{county: "Anson County", medianIncome:  25400},
{county: "Ashe County", medianIncome:  13750},
{county: "Avery County", medianIncome:  "-"},
{county: "Beaufort County", medianIncome:  25176},
{county: "Bertie County", medianIncome:  24440},
{county: "Bladen County", medianIncome:  21756},
{county: "Brunswick County", medianIncome:  29439},
{county: "Buncombe County", medianIncome:  26065},
{county: "Asheville City Schools", medianIncome:  26065},
{county: "Burke County", medianIncome:  26906},
{county: "Cabarrus County", medianIncome:  41394},
{county: "Kannapolis City Schools", medianIncome:  41394},
{county: "Caldwell County", medianIncome:  20147},
{county: "Camden County", medianIncome:  50125},
{county: "Carteret County", medianIncome:  24883},
{county: "Caswell County", medianIncome:  31483},
{county: "Catawba County", medianIncome:  27516},
{county: "Newton"-"Conover City Schools", medianIncome:  27516},
{county: "Hickory City Schools", medianIncome:  27516},
{county: "Chatham County", medianIncome:  29673},
{county: "Cherokee County", medianIncome:  12989},
{county: "Chowan County", medianIncome:  20970},
{county: "Clay County", medianIncome:  "-"},
{county: "Cleveland County", medianIncome:  24832},
{county: "Columbus County", medianIncome:  23478},
{county: "Whiteville City Schools", medianIncome:  23478},
{county: "Craven County", medianIncome:  30249},
{county: "Cumberland County", medianIncome:  36925},
{county: "Currituck County", medianIncome:  55625},
{county: "Dare County", medianIncome:  33500},
{county: "Davidson County", medianIncome:  30735},
{county: "Thomasville City Schools", medianIncome:  30735},
{county: "Lexington City Schools", medianIncome:  30735},
{county: "Davie County", medianIncome:  35945},
{county: "Duplin County", medianIncome:  25208},
{county: "Durham County", medianIncome:  39332},
{county: "Edgecombe County", medianIncome:  28421},
{county: "Forsyth County", medianIncome:  29527},
{county: "Franklin County", medianIncome:  27624},
{county: "Gaston County", medianIncome:  31668},
{county: "Gates County", medianIncome:  39180},
{county: "Graham County", medianIncome:  "-"},
{county: "Granville County", medianIncome:  33947},
{county: "Greene County", medianIncome:  32725},
{county: "Guilford County", medianIncome:  33980},
{county: "Halifax County", medianIncome:  23531},
{county: "Weldon City Schools", medianIncome:  23531 },
{county: "Roanoke Rapids City Schools", medianIncome:  23531},
{county: "Harnett County", medianIncome:  34185},
{county: "Haywood County", medianIncome:  27431},
{county: "Henderson County", medianIncome:  23319},
{county: "Hertford County", medianIncome:  25381},
{county: "Hoke County", medianIncome:  34740},
{county: "Hyde County", medianIncome:  33958},
{county: "Iredell County", medianIncome:  31184},
{county: "Mooresville City Schools", medianIncome:  31184},
{county: "Jackson County", medianIncome:  22692},
{county: "Johnston County", medianIncome:  39871},
{county: "Jones County", medianIncome:  23341},
{county: "Lee County", medianIncome:  30547},
{county: "Lenoir County", medianIncome:  26813},
{county: "Lincoln County", medianIncome:  31250},
{county: "McDowell County", medianIncome:  20744},
{county: "Macon County", medianIncome:  "-"},
{county: "Madison County", medianIncome:  "-"},
{county: "Martin County", medianIncome:  27717},
{county: "Mecklenburg County", medianIncome:  39159},
{county: "Mitchell County", medianIncome:  "-"},
{county: "Montgomery County", medianIncome:  21250},
{county: "Moore County", medianIncome:  25659},
{county: "Nash County", medianIncome:  31232},
{county: "New Hanover County", medianIncome:  29279},
{county: "Northampton County", medianIncome:  22484},
{county: "Onslow County", medianIncome:  36334},
{county: "Orange County", medianIncome:  36400},
{county: "Chapel"-"Hill/Carrboro City Schools", medianIncome:  36400},
{county: "Pamlico County", medianIncome:  24833},
{county: "Pasquotank County", medianIncome:  32445},
{county: "Pender County", medianIncome:  27000},
{county: "Perquimans County", medianIncome:  23326},
{county: "Person County", medianIncome:  27679},
{county: "Pitt County", medianIncome:  27672},
{county: "Polk County", medianIncome:  22292},
{county: "Randolph County", medianIncome:  34034},
{county: "Asheboro City Schools", medianIncome:  34034},
{county: "Richmond County", medianIncome:  22797},
{county: "Robeson County", medianIncome:  24404},
{county: "Rockingham County", medianIncome:  27470},
{county: "Rowan County", medianIncome:  28766},
{county: "Rutherford County", medianIncome:  25833},
{county: "Sampson County", medianIncome:  25927},
{county: "Clinton City Schools", medianIncome:  25927},
{county: "Scotland County", medianIncome:  18483},
{county: "Stanly County", medianIncome:  23048},
{county: "Stokes County", medianIncome:  30000},
{county: "Surry County", medianIncome:  23427},
{county: "Mount Airy City Schools", medianIncome:  23427},
{county: "Swain County", medianIncome:  "-"},
{county: "Transylvania County", medianIncome:  38125},
{county: "Tyrrell County", medianIncome:  21074},
{county: "Union County", medianIncome:  46942},
{county: "Vance County", medianIncome:  26095},
{county: "Wake County", medianIncome:  44597},
{county: "Warren County", medianIncome:  25938},
{county: "Washington County", medianIncome:  23253},
{county: "Watauga County", medianIncome:  50625},
{county: "Wayne County", medianIncome:  31059},
{county: "Wilkes County", medianIncome:  31173},
{county: "Elkin City Schools", medianIncome:  31173},
{county: "Wilson County", medianIncome:  29420},
{county: "Yadkin County", medianIncome:  24332},
{county: "Yancey County", medianIncome:  37993}]

export default data