const baseUrl = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "CCaR0O3eC2koXJxZcK05MQ==1KtCQqGHZdoC3mms";
const headers = {
  "X-Api-Key": apiKey,
};

export const fetchQuote = async () => {
  try {
    const res = await fetch(baseUrl, { headers });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
