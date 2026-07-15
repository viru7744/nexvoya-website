

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'

import './index.css'
import ClinicalSas from './pages/service/ClinicalSas.jsx'
import CloudComputing from './pages/service/CloudComputing.jsx'
import ErpSolutions from './pages/service/ErpSolutions.jsx'
import MedicalCoding from './pages/service/MedicalCoding.jsx'
import MobileApp from './pages/service/MobileApp.jsx'
import QualityAssurance from './pages/service/QualityAssurance.jsx'
import StaffAugmentation from './pages/service/StaffAugmentation.jsx'
import SystemIntegration from './pages/service/SystemIntegration.jsx'
import WebDevelopment from './pages/service/WebDevelopment.jsx'

import Healthcare from './pages/industries/Healthcare.jsx'
import EdTech from './pages/industries/EdTech.jsx'
import FinTech from './pages/industries/Fintech.jsx'
import RealEstate from './pages/industries/RealEstate.jsx'
import Retail from './pages/industries/Retail.jsx'
import Restaurants from './pages/industries/Restaurants.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />

        {/* Services */}
        <Route path="/clinical" element={<ClinicalSas />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/erp-solutions" element={<ErpSolutions />} />
        <Route path="/medical-coding" element={<MedicalCoding />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/system-integration" element={<SystemIntegration />} />
        <Route path="/web-development" element={<WebDevelopment />} />

        {/* Industries */}
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/edtech" element={<EdTech />} />
        <Route path="/fintech" element={<FinTech />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
