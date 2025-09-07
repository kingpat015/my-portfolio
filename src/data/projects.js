// src/data/projects.js

// ✅ EMMC - SIGN images
import emmcLogin from "../assets/emmc-sign-login.png";
import emmcDashboard from "../assets/emmc-sign-dashboard.png";
import emmcCreation from "../assets/emmc-sign-creation.png";
import emmcRequestSigner from "../assets/emmc-sign-request-signer.png";
import emmcSentRequest from "../assets/emmc-sign-sent-request.png";
import emmcSettings from "../assets/emmc-sign-settings.png";
import emmcTemplateCreation from "../assets/emmc-sign-template-creation.png";

// ✅ DPMS images (replace with real imports if you have them)
import dpmsDashboard from "../assets/dpms-login.png";
import dpmsMainpage from "../assets/dpms-mainpage.png";


// // ✅ ECPPMS images (replace with real imports if you have them)
// import ecppmsInventory from "../assets/ecppms-inventory.png";
// import ecppmsMonitoring from "../assets/ecppms-monitoring.png";
// import ecppmsReport from "../assets/ecppms-report.png";

const projects = [
  {
    id: "emmc-sign",
    title: "EMMC - Sign",
    description: "An Electronic Signature Request System using React JS and Laravel.",
    link: "https://emmc-sign.exelpack.com",
    images: [
      emmcLogin,
      emmcDashboard,
      emmcCreation,
      emmcRequestSigner,
      emmcSentRequest,
      emmcSettings,
      emmcTemplateCreation,
    ],
  },
  {
    id: "dpms",
    title: "DPMS",
    description: "Realtime Delivery Monitoring System.",
    link: "https://dpms-exelpack.exel-portal.com",
    images: [dpmsDashboard, dpmsMainpage],
  },
//   {
//     id: "ecppms",
//     title: "ECPPMS",
//     description: "Production flow and inventory monitoring system.",
//     link: "https://ecppms.exelpack.com",
//     images: [ecppmsInventory, ecppmsMonitoring, ecppmsReport],
//   },
];

export default projects;
