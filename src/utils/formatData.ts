export const formatData = (date: string, place?: string): string => {
  //시작 날짜를 3부분으로 분할
  const yearStart = date.slice(0, 4);
  const monthStart = date.slice(4, 6);
  const dayStart = date.slice(6, 8);
  //마감 날짜를 3부분으로 분할
  const yearEnd = date.slice(8, 12);
  const monthEnd = date.slice(12, 14);
  const dayEnd = date.slice(14, 16);

  let formattedDate: string;
  let resultDate: string;
  if (place === undefined) {
    formattedDate = `${yearStart}.${monthStart}.${dayStart} ~ ${yearEnd}.${monthEnd}.${dayEnd}`;
    resultDate = formattedDate;
  } else {
    formattedDate =
      yearStart === yearEnd
        ? `${yearStart}.${monthStart}.${dayStart} ~ ${monthEnd}.${dayEnd}`
        : `${yearStart}.${monthStart}.${dayStart} ~ ${yearEnd}.${monthEnd}.${dayEnd}`;

    resultDate = `${formattedDate}, ${place}`;
  }

  return resultDate;
};
