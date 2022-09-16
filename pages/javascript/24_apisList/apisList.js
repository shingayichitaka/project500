"use strict";

const getAPIList = async () => {
  const response = await fetch("https://api.publicapis.org/entries");
  const responseJSON = await response.json();
  const data = responseJSON.entries;
  const apiList = data.map((value) => {
    return {
      name: value.API,
      description: value.Description,
      link: value.Link,
    };
  });
  return apiList;
};

export { getAPIList };
