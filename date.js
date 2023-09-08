const formatUtcTime = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, 0);
  const day = String(currentDate.getUTCDate()).padStart(2, 0);
  const hour = String(currentDate.getUTCHours()).padStart(2, 0);
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, 0);
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, 0);

  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}Z`;
};

module.exports = formatUtcTime

//  2023-09-08T18:54:50Z