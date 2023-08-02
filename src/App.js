import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  query,
  db,
  collection,
  onSnapshot,
  doc,
  orderBy,
} from "./data/firebase/";

import About from "./presentation/pages/about";
import Home from "./presentation/pages";
import Blog from "./presentation/pages/blog";
import Contact from "./presentation/pages/contact";
import Services from "./presentation/pages/services";
import LGAs from "./presentation/pages/lga";
import MembersProfile from "./presentation/pages/about/profile";

import ScrollToTop from "./util/scroll";

import { setFAQs } from "./data/redux/slice/faqs";
import { setTeamData } from "./data/redux/slice/team";
import { setPermSecData } from "./data/redux/slice/perm_sec";
import { setWDCData } from "./data/redux/slice/wdc";
import { setMisc } from "./data/redux/slice/misc";
import { setPartnersData } from "./data/redux/slice/partners";
import {
  setResearchData,
  setReportsData,
  setDownloadsData,
  setGalleryData,
} from "./data/redux/slice/resources";
import { setLGAsData } from "./data/redux/slice/lga";
import { setContactData } from "./data/redux/slice/contact";
import { setRSPHCMBData, setHealthCentre } from "./data/redux/slice/about";
import {
  setDepartmentData,
  setDeptFunctions,
} from "./data/redux/slice/department";
import {
  setServiceData,
  setFeaturedServiceData,
  setNewServiceData,
} from "./data/redux/slice/service";
import {
  setHomeBannerData,
  setBuildingCultureData,
  setHealthAccessData,
} from "./data/redux/slice/home";

import Footer from "./presentation/layout/footer";
import MyNavbar from "./presentation/layout/navbar"; // import ResponsiveAppBar from "./presentation/layout/navbar/index2";
import LGAItem from "./presentation/pages/lga/lga_item";
import Gallery from "./presentation/pages/gallery";
import GalleryItem from "./presentation/pages/gallery/gallery_item";
import Faqs from "./presentation/pages/faqs";
import Covid19Sites from "./presentation/pages/covid19-sites";
import Covid19LGAItem from "./presentation/pages/covid19-sites/item";

import MobileNavbar from "./presentation/layout/navbar/mobile_navbar";
import WDC from "./presentation/pages/wdc";

import Partner from "./presentation/pages/partner";
import Research from "./presentation/pages/research";
import Reports from "./presentation/pages/reports";
import Downloads from "./presentation/pages/downloads";
import ReportDetail from "./presentation/pages/reports/report_detail";
import Publications from "./presentation/pages/publications";
// import UpdatePSForm from "./presentation/pages/update_perm_sec_data";
import PermSecPage from "./presentation/pages/perm_sec";
// import { width } from "@mui/system";
import image from "./assets/images/preloader.gif";
import suspendedImage from "./assets/images/account-suspended.jpeg";
import ServiceInfo from "./presentation/pages/services/service_info";
import Facility from "./presentation/pages/lga/facility";
import Department from "./presentation/pages/depts";
import BoT from "./presentation/pages/bot";
import DepartmentInfo from "./presentation/pages/depts/depts_info";
import HealthCentres from "./presentation/pages/health-centres";
import Crasher from "./presentation/components/misc/crasher";
import NotFound from "./presentation/pages/notfound";
import { Redirect } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { setPostData } from "./data/redux/slice/post";

const fetcher = (url) => {
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  return axios.get(url).then((r) => r.data);
};

function App() {
  // const [faqsData, setFAQsData] = React.useState(null);
  const dispatch = useDispatch();
  const { miscData } = useSelector((state) => state.misc);
  const [crash, setCrash] = React.useState(false);
  const [content, setContent] = React.useState(
    <div
      style={{
        backgroundColor: "#1c1941",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} alt="" height={"75%"} />
    </div>
  );

  const configSWR = {
    revalidateOnFocus: false,
    refreshInterval: 1000 * 60 * 30,
  };

  const { data } = useSWR(
    "https://blog.rsphcmb.org.ng/wp-json/wp/v2/posts/?_embed&per_page=3&author=1",
    fetcher,
    configSWR
  );

  React.useEffect(() => {
    const q = query(collection(db, "faqs"));
    onSnapshot(q, (querySnapshot) => {
      const faqs = [];
      querySnapshot.forEach((doc) => {
        faqs.push(doc.data());
      });
      dispatch(setFAQs(faqs));
    });

    const teamQuery = query(collection(db, "team-members"));
    onSnapshot(teamQuery, (querySnapshot) => {
      const teams = [];
      querySnapshot.forEach((doc) => {
        teams.push(doc.data());
      });
      dispatch(setTeamData(teams));
    });

    const partnersQuery = query(collection(db, "partners"));
    onSnapshot(partnersQuery, (querySnapshot) => {
      const partners = [];
      querySnapshot.forEach((doc) => {
        partners.push(doc.data());
      });
      dispatch(setPartnersData(partners));
    });

    onSnapshot(doc(db, "perm-sec", "info"), (doc) => {
      dispatch(setPermSecData(doc.data()));
    });

    onSnapshot(doc(db, "about", "rsphcmb"), (doc) => {
      dispatch(setRSPHCMBData(doc.data()));
    });

    onSnapshot(doc(db, "about", "health-centres"), (doc) => {
      dispatch(setHealthCentre(doc.data()));
    });

    onSnapshot(doc(db, "contact", "data"), (doc) => {
      dispatch(setContactData(doc.data()));
    });

    onSnapshot(doc(db, "contents", "wdc"), (doc) => {
      dispatch(setWDCData(doc.data()));
    });

    onSnapshot(doc(db, "home", "misc"), (doc) => {
      dispatch(setMisc(doc.data()));
      setCrash(doc?.data()?.crash);
    });

    onSnapshot(doc(db, "resources", "research"), (doc) => {
      dispatch(setResearchData(doc.data()));
    });

    onSnapshot(doc(db, "featured", "service"), (doc) => {
      dispatch(setFeaturedServiceData(doc.data()));
    });

    const serviceQuery = query(collection(db, "services"));
    onSnapshot(serviceQuery, (querySnapshot) => {
      const services = [];
      querySnapshot.forEach((doc) => {
        services.push(doc.data());
      });
      dispatch(setServiceData(services));
    });

    const newServicesQuery = query(
      collection(db, "new_services"),
      orderBy("orderNo", "asc")
    );

    onSnapshot(newServicesQuery, (querySnapshot) => {
      const services = [];
      querySnapshot.forEach((doc) => {
        services.push(doc.data());
      });
      dispatch(setNewServiceData(services));
    });

    const departmentQuery = query(collection(db, "departments"));
    onSnapshot(departmentQuery, (querySnapshot) => {
      const departments = [];
      querySnapshot.forEach((doc) => {
        departments.push(doc.data());
      });
      dispatch(setDepartmentData(departments));
    });

    const qe = query(collection(db, "dept-functions"));
    onSnapshot(qe, (querySnapshot) => {
      const fn = [];
      querySnapshot.forEach((doc) => {
        fn.push(doc.data());
      });
      dispatch(setDeptFunctions(fn));
    });

    onSnapshot(doc(db, "home", "building-culture"), (doc) => {
      dispatch(setBuildingCultureData(doc.data()));
    });

    onSnapshot(doc(db, "home", "health-access"), (doc) => {
      dispatch(setHealthAccessData(doc.data()));
    });

    const bannerQuery = query(collection(db, "home-banner"));
    onSnapshot(bannerQuery, (querySnapshot) => {
      const banners = [];
      querySnapshot.forEach((doc) => {
        banners.push(doc.data());
      });
      dispatch(setHomeBannerData(banners));
    });

    const reportsQuery = query(collection(db, "reports"));
    onSnapshot(reportsQuery, (querySnapshot) => {
      const reports = [];
      querySnapshot.forEach((doc) => {
        reports.push(doc.data());
      });
      dispatch(setReportsData(reports));
    });

    const downloadsQuery = query(collection(db, "downloads"));
    onSnapshot(downloadsQuery, (querySnapshot) => {
      const downloads = [];
      querySnapshot.forEach((doc) => {
        downloads.push(doc.data());
      });
      dispatch(setDownloadsData(downloads));
    });

    const galleryQuery = query(collection(db, "gallery"));
    onSnapshot(galleryQuery, (querySnapshot) => {
      const gallery = [];
      querySnapshot.forEach((doc) => {
        gallery.push(doc.data());
      });
      dispatch(setGalleryData(gallery));
    });

    const LGAsQuery = query(collection(db, "lgas"));
    onSnapshot(LGAsQuery, (querySnapshot) => {
      const lgas = [];
      querySnapshot.forEach((doc) => {
        lgas.push(doc.data());
      });
      dispatch(setLGAsData(lgas));
    });
  }, [dispatch]);

  React.useEffect(() => {
    //Use aaxios here
    if (data) {
      dispatch(setPostData([data]));
    }
  }, [data, dispatch]);

  // let deviceType = useRef();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  React.useLayoutEffect(() => {
    setTimeout(() => {
      // {/* if (crash || miscData?.crash) { */}
      setContent(
        <div
          style={{
            backgroundColor: "#2b3b4b",
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <div
            style={{
              padding: sm ? 8 : 32,
              flex: 1,
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <img src={suspendedImage} width={sm ? 140 : 156} alt="" />
            <h1
              style={{ color: "grey", marginLeft: 10, fontSize: sm ? 36 : 56 }}
            >
              Account Suspended
            </h1>
          </div>

          <div
            style={{
              padding: sm ? 8 : 32,
              backgroundColor: "#2b3b4b",
              flex: 2,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <h1 style={{ color: "white", fontSize: sm ? 32 : 48 }}>
              This Account has been suspended.
            </h1>
            <h1 style={{ color: "white", fontSize: sm ? 21 : 32 }}>
              Contact your hosting provider for more information
            </h1>
          </div>
        </div>
      );
      //  {/* }
      setContent(
        <div className="App">
          <Router>
            <div
            // style={{ display: "flex", flexDirection: "column" }}
            >
              {sm ? <MobileNavbar /> : <MyNavbar />}

              <div style={{ zIndex: 100 }}>
                <ScrollToTop />
                <Switch>
                  <Route path="/about/lga" exact>
                    <LGAs />
                  </Route>

                  <Route path="/resources/gallery" exact>
                    <Gallery />
                  </Route>

                  <Route path="/resources/research" exact>
                    <Research />
                  </Route>

                  <Route path="/resources/reports" exact>
                    <Reports />
                  </Route>

                  <Route path="/resources/reports/:id" exact>
                    <ReportDetail />
                  </Route>

                  <Route path="/resources/publications" exact>
                    <Publications />
                  </Route>

                  <Route path="/resources/downloads" exact>
                    <Downloads />
                  </Route>

                  <Route path="/resources/gallery/:id" exact>
                    <GalleryItem />
                  </Route>

                  <Route path="/message-from-perm-sec" exact>
                    <PermSecPage />
                  </Route>

                  <Route path="/about/lga/:id" exact>
                    <LGAItem />
                  </Route>

                  <Route path="/about/bot" exact>
                    <BoT />
                  </Route>
                  <Route path="/about/health-centres" exact>
                    <HealthCentres />
                  </Route>

                  <Route path="/about/departments" exact>
                    <Department />
                  </Route>
                  <Route path="/about/departments/:id" exact>
                    <DepartmentInfo />
                  </Route>

                  <Route path="/about/lga/:id/facilities/:name" exact>
                    <Facility />
                  </Route>

                  <Route path="/about" exact>
                    <About />
                  </Route>
                  <Route path="/about/team/:id" exact>
                    <MembersProfile />
                  </Route>

                  <Route path="/blog" exact>
                    <Blog />
                  </Route>

                  <Route path="/about/wdc" exact>
                    <WDC />
                  </Route>

                  <Route path="/services" exact>
                    <Services />
                  </Route>

                  <Route path="/services/:id" exact>
                    <ServiceInfo />
                  </Route>

                  <Route path="/contact" exact>
                    <Contact />
                  </Route>

                  <Route path="/faqs" exact>
                    <Faqs />
                  </Route>

                  <Route path="/partners/:id" exact>
                    <Partner />
                  </Route> 

                  <Route path="/covid19-vaccination-sites" exact>
                    <Covid19Sites />
                  </Route>

                  <Route path="/covid19-vaccination-sites/:item" exact>
                    <Covid19LGAItem />
                  </Route>

                  {/* <Route path={"/demofo"} exact>
                    <DemoForm />
                  </Route>

                  <Route path={"/demopar"} exact>
                    <AddPartnerForm />
                  </Route>

                  <Route path={"/reports"} exact>
                    <AddReportForm />
                  </Route>

                  <Route path={"/downloads"} exact>
                    <AddDownloadForm />
                  </Route>

                  <Route path={"/upload-ps"} exact>
                    <UpdatePSForm />
                  </Route> */}

                  <Route path="/crash-now" exact>
                    <Crasher />
                  </Route>

                  <Redirect exact from="/home" to="/" />
                  <Route path="/home" exact={true}>
                    <Home />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>

                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
              <Footer />
            </div>
          </Router>
        </div>
      );
    }, 2000);
  }, [crash, miscData?.crash, sm]);

  return content;
}

export default App;
