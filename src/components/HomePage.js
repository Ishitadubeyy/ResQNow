import React from "react";
import ReportButton from "./ReportButton";
import UploadSection from "./UploadSection";
import SeveritySelector from "./SeveritySelector";

function HomePage() {
  return (
    <div className="home-page">
      <h2 className="page-title">Report an Accident</h2>
      
      {/* Media Upload Section */}
      <UploadSection />
      
      {/* Severity Section */}
      <SeveritySelector />
      
      {/* Report Accident Button */}
      <div className="report-button-container">
        <ReportButton text="Report Accident" color="btn-red" />
      </div>
    </div>
  );
}

export default HomePage; 