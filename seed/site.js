import Site from "../models/siteSchema.js";
import SiteJson from "../data/sites.json" assert {type: "json"};

const importSiteData = async () => {
  try {
    await Site.deleteMany({});
    await Site.insertMany(SiteJson);
    console.log("Site data successfully seeded");
    
  } catch (error) {
    console.log(error);
  }
}

export default importSiteData;