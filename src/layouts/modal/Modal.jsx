import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewSinglePost from "../../components/posts/ViewSinglePost";
import AddPage from "../../components/pages/AddPage";
// import ViewSinglePage from "../../components/pages/ViewSinglePage";
import EditPage from "../../components/pages/EditPage";
import DeletePage from "../../components/pages/DeletePage";
import EditModal from "../../components/user-profile/EditModal";
import ViewUserModal from "../../components/user-profile/ViewUserModal";
import ChangePasswordModal from "../../components/user-profile/ChangePasswordModal";
import AddPost from "../../components/posts/AddPost";
import DeletePost from "../../components/posts/DeletePost";
import AddMessage from "../../components/all-messages/AddMessage";
import UpdateMessages from "../../components/all-messages/UpdateMessages";
import ViewMessage from "../../components/all-messages/ViewMessage";
import DeleteMesage from "../../components/all-messages/DeleteMesage";
import DeleteQuotes from "../../components/all-quotes/DeleteQuotes";
import EditQuotes from "../../components/all-quotes/EditQuotes";
import AddQuotes from "../../components/all-quotes/AddQuotes";
import ViewQuotes from "../../components/all-quotes/ViewQuotes";
import AdminChangePassword from "../../components/user-profile/AdminChangePassword";
import DeletePlanSchema from "../../components/planSchema/DeletePlanSchema";
import EditPlanSchema from "../../components/planSchema/EditPlanSchema";
import AddPlan from "../../components/planSchema/AddPlan";
import ViewPayment from "../../components/paymentMethod/ViewPayment";
import DeletePayment from "../../components/paymentMethod/DeletePayment";
import EditPayment from "../../components/paymentMethod/EditPayment";
import AddPayment from "../../components/paymentMethod/AddPayment";
import HelpSupport from "../../components/Help&Support/HelpSupport";
import ViewTransaction from "../../components/PaymentHistory/ViewTransaction";
import DeleteTransaction from "../../components/PaymentHistory/DeleteTransaction";
import AddTransaction from "../../components/PaymentHistory/AddTransaction";
import EditTransaction from "../../components/PaymentHistory/EditTransaction";
import BlockUserModal from "../../components/user-profile/BlockUserModal";
import ReferAndEarn from "../../components/Refer&Earn/ReferAndEarn";
import AddSkill from "../../components/skills-dynamic/AddSkill";
import EditSkill from "../../components/skills-dynamic/EditSkill";
import DeleteSkill from "../../components/skills-dynamic/DeleteSkill";
import MostSearchedSkills from "../../components/Most-Searched-Skills/MostSearchedSkills";

export default function Modal() {
  const { isOpen, componentName } = useSelector(
    (state) => state.allCommonModal
  );

  const renderComponent = () => {
    switch (componentName) {
      
      case "ViewSinglePost":
        return <ViewSinglePost />;

      case "AddPage":
        return <AddPage />;
      // case "ViewSinglePage":
      //   return <ViewSinglePage />;
      case "EditPage":
        return <EditPage />;

      case "DeletePage":
        return <DeletePage />;

      case "AddPlan":
        return <AddPlan/>;

      case "EditPlanSchema":
        return <EditPlanSchema/>;

      case "DeletePlanSchema":
        return <DeletePlanSchema/>;

      case "EditModal":
        return <EditModal />;

      case "ViewUserModal":
        return <ViewUserModal />;

      case "ChangePasswordModal":
        return <ChangePasswordModal />;

        case "BlockUserModal":
          return <BlockUserModal />;

      case "AddPost":
        return <AddPost />;

      case "DeletePost":
        return <DeletePost />;

      case "AddMessage":
        return <AddMessage />;

      case "UpdateMessages":
        return <UpdateMessages />;

      case "ViewMessage":
        return <ViewMessage />;

        case "HelpSupport":
          return <HelpSupport />;

      case "DeleteMesage":
        return <DeleteMesage />;

      case "DeleteQuotes":
        return <DeleteQuotes />;

      case "EditQuotes":
        return <EditQuotes />;

      case "AddQuotes":
        return <AddQuotes />;

      case "ViewQuotes":
        return <ViewQuotes />;

      case "ViewPayment":
        return <ViewPayment />;
      
      case "DeletePayment":
        return <DeletePayment />;
      
      case "AddPayment":
        return <AddPayment />;

      case "EditPayment":
        return <EditPayment />;

      case "ViewTransaction":
        return <ViewTransaction />;
        
      case "DeleteTransaction":
        return <DeleteTransaction />;
        
      case "AddTransaction":
          return <AddTransaction />;
  
      case "EditTransaction":
        return <EditTransaction />;

      case "AdminChangePassword":
        return <AdminChangePassword />;

      case "ReferAndEarn":
        return <ReferAndEarn />;

        case "AddSkill":
          return <AddSkill />;
        // case "ViewSinglePage":
        //   return <ViewSinglePage />;
        case "EditSkill":
          return <EditSkill />;
  
        case "DeleteSkill":
          return <DeleteSkill />;

        case "MostSearchedSkill":
          return <MostSearchedSkills />;

      default:
        return null;
    }
  };
  return <>{isOpen && renderComponent()}</>;
}
