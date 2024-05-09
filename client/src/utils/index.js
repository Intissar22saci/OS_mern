export const PRIOTITYSTYELS = {
    high: "text-red-600",
    medium: "text-yellow-600",
    low: "text-blue-600",
  }
  
  export const TASK_TYPE = {
    backlog: 'bg-gray-600',
    todo: 'bg-blue-600',
    "in progress": 'bg-yellow-600',
    done: 'bg-green-600'
  }
  
export const formatDate = (date) => {
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

export function dateFormatter(dateString) {
  const inputDate = new Date(dateString);

  if (isNaN(inputDate)) {
    return "Invalid Date";
  }

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};