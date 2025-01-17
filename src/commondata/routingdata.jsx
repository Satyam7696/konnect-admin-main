import React from "react";
import Dashboard from "../components/dashboard/dashboard";
import User from "../components/users/Users"
import Posts from "../components/posts/Posts";
import Pages from "../components/pages/Pages";
import UserProfile from "../components/user-profile/UserProfile";
import AllMessages from "../components/all-messages/AllMessages";
import AllQuotes from "../components/all-quotes/AllQuotes";
import EditSinglePage from "../components/pages/EditPage";
import ViewSinglePage from "../components/pages/ViewSinglePage";
import ViewSinglePlan from "../components/planSchema/ViewSinglePlan";
import PlanSchema from "../components/planSchema/PlanSchema";
import EditPlanSchema from "../components/planSchema/EditPlanSchema";
import AllPayments from "../components/paymentMethod/AllPayments";
import EditPayment from "../components/paymentMethod/EditPayment";
import ViewPayment from "../components/paymentMethod/ViewPayment";
import HelpSupport from "../components/Help&Support/HelpSupport";
import ViewTransaction from "../components/PaymentHistory/ViewTransaction";
import EditTransaction from "../components/PaymentHistory/EditTransaction";
import PaymentHistory from "../components/PaymentHistory/Paymenthistory";
import AddPage from "../components/pages/AddPage";
import ReferAndEarn from "../components/Refer&Earn/ReferAndEarn";
import SkillsPage from "../components/skills-dynamic/SkillsPage";
import EditSkill from "../components/skills-dynamic/EditSkill";
import AddSkill from "../components/skills-dynamic/AddSkill";
import ViewSkill from "../components/skills-dynamic/ViewSkill";
import DeleteSkill from "../components/skills-dynamic/DeleteSkill";
import MostSearchedSkills from "../components/Most-Searched-Skills/MostSearchedSkills";


export const RouterData = [
  { path: `${import.meta.env.BASE_URL}/dashboard`, element: <Dashboard /> },
  { path: `${import.meta.env.BASE_URL}/user-list`, element: <User /> },
  { path: `${import.meta.env.BASE_URL}/all-posts`, element: <Posts /> },
  { path: `${import.meta.env.BASE_URL}/all-pages`, element: <Pages /> },
  { path: `${import.meta.env.BASE_URL}/edit-page`, element: <EditSinglePage /> },
  { path: `${import.meta.env.BASE_URL}/add-page`, element: <AddPage /> },
  { path: `${import.meta.env.BASE_URL}/view-page`, element: <ViewSinglePage /> },
  { path: `${import.meta.env.BASE_URL}/view-plan`, element: <ViewSinglePlan /> },
  { path: `${import.meta.env.BASE_URL}/all-membership-plans`, element: <PlanSchema/> },
  { path: `${import.meta.env.BASE_URL}/edit-plan`, element: <EditPlanSchema/> },
  { path: `${import.meta.env.BASE_URL}/payment-method`, element: <AllPayments/> },
  { path: `${import.meta.env.BASE_URL}/edit-payment`, element: <EditPayment/> },
  { path: `${import.meta.env.BASE_URL}/view-payment`, element: <ViewPayment/> },
  { path: `${import.meta.env.BASE_URL}/payment-history`, element: <PaymentHistory/> },
  { path: `${import.meta.env.BASE_URL}/edit-transaction`, element: <EditTransaction/> },
  { path: `${import.meta.env.BASE_URL}/view-transaction`, element: <ViewTransaction/> },
  { path: `${import.meta.env.BASE_URL}/skills-page`, element: <SkillsPage /> },
  { path: `${import.meta.env.BASE_URL}/edit-skill`, element: <EditSkill /> },
  { path: `${import.meta.env.BASE_URL}/add-skill`, element: <AddSkill /> },
  { path: `${import.meta.env.BASE_URL}/view-skill`, element: <ViewSkill /> },
  { path: `${import.meta.env.BASE_URL}/most-searched-skill`, element: <MostSearchedSkills /> },
  // { path: `${import.meta.env.BASE_URL}/delete-skill`, element: <DeleteSkill /> },


  { path: `${import.meta.env.BASE_URL}/profile`, element: <UserProfile /> },
  { path: `${import.meta.env.BASE_URL}/all-messages`, element: <AllMessages /> },
  { path: `${import.meta.env.BASE_URL}/help&support`, element: <HelpSupport /> },
  { path: `${import.meta.env.BASE_URL}/all-quotes`, element: <AllQuotes /> },
  { path: `${import.meta.env.BASE_URL}/refer&earn`, element: <ReferAndEarn /> },

]