export const getCurrentFormattedDate = (): string => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const LastDays = (NDay: number): string[] => {
  const days = [];
  const date = new Date();

  for (let index = 0; index < NDay; index++) {
    const currentDate = new Date();
    currentDate.setDate(date.getDate() - index);

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = currentDate
      .toLocaleString("default", { month: "short" })
      .toLowerCase();

    days.unshift(`${day}-${month}`);
  }

  return days;
};

export const TodaysDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const year = tomorrow.getFullYear();
  const month = (tomorrow.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = tomorrow.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
