export interface NotifContentInterface {
  creator: string;
  seen: boolean;
  content: string;
}

export interface NotificationsInterface {
  [KEY: string]: NotifContentInterface[];
}

const defaultNotifications = {
  admin: [
    {
      creator: "admin",
      seen: false,
      content:
        "Rappelez-vous, vous êtes le seul administrateur avec tous les privilèges",
    },
  ],
  admin1: [
    {
      creator: "admin",
      seen: false,
      content: "C'est un nouveau notification",
    },
    {
      creator: "admin",
      seen: false,
      content: "The deleted one won't be shown",
    },
    {
      creator: "admin",
      seen: false,
      content: "Test note",
    },
    {
      creator: "admin",
      seen: false,
      content:
        "les notifications supprimées ne seront plus affichées mais vous les retrouverez dans l'historique des notifications",
    },
  ],
  user1: [
    {
      creator: "admin",
      seen: false,
      content: "this is just a test",
    },
  ],
  user2: [
    {
      creator: "admin",
      seen: false,
      content: "this is also just a test",
    },
  ],
};

export default defaultNotifications;
