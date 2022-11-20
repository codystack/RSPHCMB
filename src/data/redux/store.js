import { configureStore } from "@reduxjs/toolkit";
import faqsReducer from "./slice/faqs";
import teamReducer from "./slice/team";
import permSecReducer from "./slice/perm_sec";
import wdcReducer from "./slice/wdc";
import partnersReducer from "./slice/partners";
import resourcesReducer from "./slice/resources";
import LGAsReducer from "./slice/lga";
import homeReducer from "./slice/home";
import aboutReducer from "./slice/about";
import contactReducer from "./slice/contact";
import serviceReducer from "./slice/service";
import departmentReducer from "./slice/department";
import miscReducer from "./slice/misc";
import postReducer from "./slice/post";

export default configureStore({
  reducer: {
    faqs: faqsReducer,
    teams: teamReducer,
    permSec: permSecReducer,
    wdc: wdcReducer,
    partners: partnersReducer,
    resources: resourcesReducer,
    lgas: LGAsReducer,
    home: homeReducer,
    about: aboutReducer,
    contact: contactReducer,
    service: serviceReducer,
    department: departmentReducer,
    misc: miscReducer,
    post: postReducer,
  },
});
