export const getAiResponse = async (message: string, url: string): Promise<string> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}${url}`, {
    body: JSON.stringify({ message }),
    method: 'POST',
  });  

  const data = await response.json();
  return data.message
}
