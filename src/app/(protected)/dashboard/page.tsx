'use client'
import { useState, useRef, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import ChatMessageIcon from "@/assets/svg/chat-message-icon.svg";
import Tour from "@/components/AppTour/tour";
import TourGuild from "@/components/AppTour/guild";

const DashboardPage = () => {
  const [tourStep, setTourStep] = useState(0);
  const [showTour, setShowTour] = useState(false);
  const [targetCardId, setTargetCardId] = useState("exploreNavBar");
    const targetRef = useRef<any>(null);

    useEffect(() => {
    if (targetCardId) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [targetCardId]);

  const startTour = () => {
    setShowTour(true);
    //setTourStep(0);
    //setTargetCardId("exploreNavBar");
    // setTourStep(tourStep + 1);
  };

  const nextStep = () => {
    setTargetCardId("walletBalance");
    setTourStep(tourStep + 1);
    if (tourStep < 5) {
      if (tourStep === 1) {
        setTargetCardId("totalBalance");
      } else if(tourStep === 2) {
        setTargetCardId("plans");
      } else if(tourStep === 3) {
        setTargetCardId("totalBeneficiaries");
      } else if(tourStep === 4) {
        setTargetCardId("transactionHistory");
      }
    } else {
      setShowTour(!showTour);
      setTargetCardId("");
    }
  };

  const handleCloseTour = () => setShowTour(false);

  const stepsContents = [
    <TourGuild
      key={1}
      onClose={handleCloseTour}
      nextStep={nextStep}
      title="Explore navigation"
      desc="All essential options are available at a single place"
      counter={1}
    />,
    <TourGuild
      key={2}
      onClose={handleCloseTour}
      nextStep={nextStep}
      title="Checkout total wallet balance"
      desc="See your total wallet balance,fund wallet ,transfer and pay bills"
      counter={2}
    />,
    <TourGuild
      key={3}
      onClose={handleCloseTour}
      nextStep={nextStep}
      title="See total processed balance"
      desc="See your total processed balance, remit, request withdrawal and claim pension"
      counter={3}
      isLeft={false}
    />,
    <TourGuild
      key={4}
      onClose={handleCloseTour}
      nextStep={nextStep}
      title="Check your valubah plans"
      desc="Check your Valubah plans and know the active and expired plans"
      counter={4}
    />,
    <TourGuild
      key={5}
      onClose={handleCloseTour}
      nextStep={nextStep}
      title="See total beneficiaries"
      desc="Check your total beneficiaries and view all in one place"
      counter={5}
      isLeft={false}
    />,
    <TourGuild
      key={6}
      onClose={handleCloseTour}
      nextStep={nextStep}
      title="Checkout transaction history"
      desc="Get all your transaction history in one place"
      counter={6}
    />,
  ];

  console.log(targetCardId);

  return (
    <div className="relative">
      {showTour && (
        <Tour
          step={tourStep}
          onClose={() => setShowTour(!showTour)}
          nextStep={nextStep}
          targetElementId={targetCardId}
          stepContents={stepsContents}
        />
      )}
      <Dashboard setShowTour={startTour} onClose={() => setShowTour(false)} />
      <div  ref={targetRef} className="w-10 h-10 rounded-full z-40 bg-[#f1f1f1] flex justify-center items-center  right-4 bottom-14 fixed">
        <ChatMessageIcon />
      </div>
    </div>
  );
};

export default DashboardPage;
