import { getAllMessages, getAllpages,getAllPlanSchema, getAllPosts, getAllQuotes, getAllPayments, getUserList } from "../utils/routes";

export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}dashboard`,
        icon: "home",
        type: "link",
        active: false,
        title: "Dashboard",
      },
    ],
  },
  {
    Items: [
      {
        path: `${getUserList()}`,
        icon: "user",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Users",
      },
    ],
  },
  {
    Items: [
      {
        path: `${getAllPosts()}`,
        icon: "file-text",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Posts",
      },
    ],
  },
  {
    Items: [
      {
        path: `${getAllpages()}`,
        icon: "file",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Pages",
      },
    ],
  },
  {
    Items: [
      {
        path: `${getAllPlanSchema()}`,
        icon: "file",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Membership Plan",
      },
    ],
  },
  // {
  //   Items: [
  //     {
  //       path: `${getAllMessages()}`,
  //       icon: "message-square",
  //       viewPath: ``,
  //       type: "link",
  //       active: false,
  //       title: "Diaplay Messages",
  //     },
  //   ],
  // },
  {
    Items: [
      {
        path: `/help&support`,
        icon: "message-square",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Help & Support",
      },
    ],
  },
  // {
  //   Items: [
  //     {
  //       path: `${getAllQuotes()}`,
  //       icon: "message-circle",
  //       viewPath: ``,
  //       type: "link",
  //       active: false,
  //       title: "Quotes",
  //     },
  //   ],
  // },
  {
    Items: [
      {
        path: `${getAllPayments()}`,
        icon: "file",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Payment Method",
      },
    ],
  },

  {
    Items: [
      {
        path: `/payment-history`,
        icon: "file",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Payment History",
      },
    ],
  },

  {
    Items: [
      {
        path: `/refer&earn`,
        icon: "file",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Refer & Earn",
      },
    ],
  },

  {
    Items: [
      {
        path: `/skills-page`,
        icon: "file",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Skill Dynamics",
      },
    ],
  },

  {
    Items: [
      {
        path: `/most-searched-skill`,
        icon: "file",
        viewPath: ``,
        type: "link",
        active: false,
        title: "Most Searched Skill",
      },
    ],
  },
]

